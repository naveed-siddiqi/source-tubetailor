<template>
  <div class="">
    <div class="p-4">
      <div
        class="border-dashed border-2 border-gray-300 p-4 mb-4"
        @dragover.prevent="handleDrop"
        @drop="handleDrop"
      >
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              @change="previewImage"
              type="file"
              ref="fileInput"
              id="dropzone-file"
              class="hidden"
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <div v-for="(image, index) in media.added" :key="index" class="mb-4">
        <img :src="image.preview" alt="Preview" class="max-w-full" />
      </div>
    </div>
    <div>
      <button @click="callParentFunction">Call Parent Function</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const media = ref({ added: [] });

const previewImage = () => {
  const fileInput = document.getElementById("dropzone-file");
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        media.value.added.push({
          preview: e.target.result,
          name: file.name,
        });
      };

      reader.readAsDataURL(file);
    }
  }
};

const handleDrop = (event) => {
  event.preventDefault();

  const files = event.dataTransfer.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        media.value.added.push({
          preview: e.target.result,
          name: file.name,
        });
      };

      reader.readAsDataURL(file);
    }
  }
};

const uploadImages = () => {
  // You can implement the image upload logic here
  // Send the selected images to your server using an HTTP request (e.g., POST).
  // You will need to construct a FormData object to send the images.
  const formData = new FormData();

  for (const image of media.value.added) {
    // Assuming your server expects the file to be named 'image'
    formData.append("image", image.preview);
  }

  // Example: Send a POST request to your server (replace with your API endpoint)
  fetch("/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the server response, if needed
      console.log("Upload response:", data);
    })
    .catch((error) => {
      // Handle any errors during the upload
      console.error("Upload error:", error);
    });
};
</script>

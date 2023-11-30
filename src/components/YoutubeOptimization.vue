<template>
  <MainLayout>
    <!-- Youtube -->
    <div class="">
      <div class="py-5 space-y-4">
        <PasteScriptArea />
        <div class="flex items-center justify-end">
          <Modal :showLoader="showLoader"/>
          <button class="px-[40px] py-[6px] rounded-full bg-youtube text-white" @click="start()">
            Start
          </button>
          
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <!-- Column 1 -->
          <div class="space-y-4 md:col-span-1">
            <!-- Row 1 -->
            <div class="p-6 bg-white rounded-xl bg-shadow">
              <div class="flex items-center justify-between">
                <div class="relative">
                  <h2 class="text-[20px] font-bold">Script score:</h2>
                  <InformationCircleIcon
                    class="absolute top-0 w-5 h-5 text-black left-[140px]"
                  />
                </div>
                <div class="text-center">
                  <p class="text-[12px] pb-2 font-semibold">Overall Score</p>
                  <span
                    class="px-2 py-1 lg:text-[16px] text-[14px] font-bold rounded-full bg-youtube text-white"
                    >8.1/10</span
                  >
                </div>
              </div>
              <div class="min-w-full overflow-hidden">
                <div
                  class="example flex overflow-x-scroll gap-8 items-center justify-between py-4"
                >
                  <CircleProgress
                    startColor="#ff0000"
                    stopColor="#ffa500"
                    :completedSteps="8"
                    :totalSteps="10"
                    text="Content Quality"
                  />
                  <CircleProgress
                    startColor="#ff0000"
                    stopColor="#ffa500"
                    :completedSteps="5"
                    :totalSteps="10"
                    text="Content Quality"
                  />
                  <CircleProgress
                    startColor="#ff0000"
                    stopColor="#ffa500"
                    :completedSteps="2"
                    :totalSteps="10"
                    text="Content Quality"
                  />
                  <CircleProgress
                    startColor="#ff0000"
                    stopColor="#ffa500"
                    :completedSteps="7.5"
                    :totalSteps="10"
                    text="Content Quality"
                  />
                </div>
              </div>
            </div>
            <!-- Row 2 -->
            <div class="p-4 space-y-2 bg-white rounded-xl bg-shadow">
              <!-- Content for Row 2, Column 1 -->
              <div class="flex items-center justify-start gap-2">
                <button
                  @click="changeTab(1)"
                  :class="[
                    'px-3 py-1.5 text-xs border rounded-full',
                    currentTab === 1 ? 'bg-youtube text-white' : '',
                  ]"
                >
                  Result 1
                </button>
                <button
                  @click="changeTab(2)"
                  :class="[
                    'px-3 py-1.5 text-xs border rounded-full',
                    currentTab === 2
                      ? 'bg-youtube text-white border-[#fe4442]'
                      : '',
                  ]"
                >
                  Result 2
                </button>
                <button
                  @click="changeTab(3)"
                  :class="[
                    'px-3 py-1.5 text-xs border  rounded-full',
                    currentTab === 3
                      ? 'bg-youtube text-white border-[#fe4442]'
                      : '',
                  ]"
                >
                  Result 3
                </button>
              </div>
              <div class="py-2">
                <label
                  class="text-[16px] flex items-center justify-between font-semibold"
                  for="title"
                  ><span>Recommended titles</span>

                  <span
                    class="cursor-pointer"
                    v-clipboard="'This is title'"
                    v-clipboard:success="onSuccess"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg> </span
                ></label>
                <div class="w-full">
                  <input
                    type="text"
                    name=""
                    class="w-full px-4 py-2 my-2 border border-gray-400 rounded-md shadow outline-none"
                    placeholder="Our AI generates captivating, viewer-focused titles"
                    id=""
                  />
                </div>
              </div>
              <div class="py-2">
                <label
                  class="text-[16px] flex items-center justify-between font-semibold"
                  for="title"
                >
                  <span>Recommended descriptions</span>

                  <span
                    class="cursor-pointer"
                    v-clipboard="'This is title'"
                    v-clipboard:success="onSuccess"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg> </span
                ></label>
                <div class="w-full">
                  <textarea
                    type="text"
                    name=""
                    class="w-full py-2 pl-4 pr-6 my-2 border border-gray-400 rounded-md shadow outline-none h-36"
                    placeholder="Our AI generates captivating, viewer-focused titles that effectively communicate your video's core message and entice clicks.  We provide comprehensive, SEO-optimized descriptions designed. "
                    id=""
                  ></textarea>
                </div>
              </div>
              <div class="py-2">
                <label
                  class="text-[16px] flex items-center justify-between font-semibold"
                  for="title"
                >
                  <span>Recommended tags</span>

                  <span
                    class="cursor-pointer"
                    v-clipboard="'This is title'"
                    v-clipboard:success="onSuccess"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg> </span
                ></label>

                <div
                  class="flex flex-wrap items-center w-full gap-2 px-4 py-2 my-2 border border-gray-400 rounded-md shadow"
                >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                  <span
                    class="px-2 py-1 bg-[#EFF4FD] text-[#868E9C] rounded-full text-[10px]"
                    >Tag 1</span
                  >
                </div>
              </div>
              <div class="py-2">
                <label
                  class="text-[16px] flex items-center justify-between font-semibold"
                  for="title"
                >
                  <span>Thumbnail ideas</span>

                  <span
                    class="cursor-pointer"
                    v-clipboard="'This is title'"
                    v-clipboard:success="onSuccess"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg> </span
                ></label>
                <div class="w-full">
                  <input
                    type="text"
                    name=""
                    class="w-full px-4 py-2 my-2 border border-gray-400 rounded-md shadow outline-none"
                    placeholder="Our AI generates captivating, viewer-focused titles"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-6 md:col-span-1">
            <!-- Row 1 -->
            <div class="px-6 py-8 space-y-4 bg-white bg-shadow rounded-xl">
              <!-- Content for Row 1, Column 2 -->
              <div class="relative">
                <h2 class="text-[20px] font-bold">Thumbnail Generator :</h2>
                <InformationCircleIcon
                  class="absolute top-0 w-5 h-5 text-black left-[240px]"
                />
              </div>
              <div
                v-if="
                  elementsTab === 2 ||
                  elementsTab === 3 ||
                  elementsTab === 1 ||
                  imageUploaded === true
                "
              >
                <div class="mb-4">
                  <div class="">
                    <section
                      class="section"
                      v-if="result.dataURL && result.blobURL"
                    >
                      <div class="preview relative">
                        <Progress />
                        <div class="w-full">
                          <p
                            @click="changeElementsTab(3)"
                            class="absolute text-3xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            v-html="content"
                          ></p>
                        </div>
                        <img
                          class="w-full h-auto object-fit"
                          :src="result.dataURL"
                        />
                      </div>
                    </section>

                    <div class="modal-wrap" v-if="isShowModal">
                      <div class="modal-mask"></div>
                      <div class="modal-scroll-view">
                        <div class="modal">
                          <div class="modal-title">
                            <div class="flex items-center gap-4 my-4 tools">
                              <button
                                class="px-8 py-2 font-semibold rounded-full text-youtube"
                                @click="clear"
                              >
                                clear
                              </button>

                              <button
                                class="px-8 py-2 font-semibold text-white rounded-full crop-button bg-youtube"
                                @click="cropImage"
                              >
                                Crop
                              </button>
                            </div>
                          </div>

                          <div class="modal-content">
                            <!-- The component imported from `vue-picture-cropper` plugin -->
                            <VuePictureCropper
                              :boxStyle="{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#f8f8f8',
                                margin: 'auto',
                              }"
                              :img="pic"
                              :options="{
                                viewMode: 1,
                                dragMode: 'crop',
                                aspectRatio: 16 / 9,
                              }"
                              @ready="ready"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="imageUploaded === false"
                class="flex items-center justify-center mx-auto aspect-[16/9] border border-gray-200 rounded shadow"
               >
                <div>
                  <div v-if="!loading">
                    <button
                      @click="generateFunc"
                      class="px-[40px] py-[6px] rounded-full bg-youtube text-white"
                    >
                      Generate
                    </button>
                  </div>

                  <div class="text-center" v-if="loading">
                    <p class="text-[12px] pt-3 font-semibold">Loading...</p>
                    <div class="custom-loader"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Row 2 -->
            <div class="p-4 space-y-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center gap-2 font-semibold">
                <button
                  @click="changeElementsTab(1)"
                  :class="[
                    'border shadow text-center flex items-center flex-col w-28 p-3  rounded-lg',
                    elementsTab === 1 ? 'bg-youtube text-white' : '',
                  ]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"
                    />
                  </svg>
                  <span class="text-[16px]">Elements</span>
                </button>
                <button
                  @click="changeElementsTab(2)"
                  :class="[
                    'border shadow text-center flex items-center flex-col w-28 p-3  rounded-lg',
                    elementsTab === 2 ? 'bg-youtube text-white' : '',
                  ]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        d="M7 18a4.6 4.4 0 0 1 0-9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
                      />
                      <path d="m9 15l3-3l3 3m-3-3v9" />
                    </g>
                  </svg>
                  <span class="text-[16px]">Uploads</span>
                </button>
                <button
                  @click="changeElementsTab(3)"
                  :class="[
                    'border shadow text-center flex items-center flex-col w-28 p-3  rounded-lg',
                    elementsTab === 3 ? 'bg-youtube text-white' : '',
                  ]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 7V5h14v2m-7-2v14m0 0h2m-2 0H8m5-5v-2h8v2m-4-2v7m0 0h-1.5m1.5 0h1.5"
                    />
                  </svg>
                  <span class="text-[16px]">Text</span>
                </button>
              </div>

              <div
                class="p-4 border border-gray-300 rounded-lg shadow min-h-96"
              >
                <div v-if="elementsTab === 1">
                  <Elements />
                </div>

                <div class="h-96" v-if="elementsTab === 2">
                  <button
                    class="w-full py-2 rounded-lg bg-black text-white relative"
                  >
                    Upload
                    <input
                      class="block w-full opacity-0 top-0 left-0 absolute h-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      ref="uploadInput"
                      type="file"
                      id="dropzone-file"
                      accept="image/jpg, image/jpeg, image/png, image/gif"
                      @change="selectFile"
                    />
                  </button>

                  <div class="">
                    <div class="p-4">
                      <div
                        class="p-4 mb-4 border-2 border-gray-300 border-dashed"
                        @dragover.prevent="handleDrop"
                        @drop="handleDrop"
                      >
                        <div class="flex items-center justify-center w-full">
                          <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div
                              class="flex flex-col items-center justify-center pt-5 pb-6"
                            >
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
                              <p
                                class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                              >
                                <span class="font-semibold"
                                  >Click to upload</span
                                >
                                or drag and drop
                              </p>
                              <p
                                class="text-xs text-gray-500 dark:text-gray-400"
                              >
                                SVG, PNG, JPG, or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <!-- <input
                              @change="previewImage"
                              type="file"
                              ref="fileInput"
                              id="dropzone-file"
                              class="hidden"
                              accept="image/*"
                            /> -->

                            <button class="select-picture">
                              <input
                                ref="uploadInput"
                                type="file"
                                id="dropzone-file"
                                class="hidden"
                                accept="image/jpg, image/jpeg, image/png, image/gif"
                                @change="selectFile"
                              />
                            </button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="elementsTab === 3">
                  <VueEditor
                    class="text-black bg-white border-gray-100 rounded-lg shadow-sm"
                    v-model="content"
                  ></VueEditor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Instagram -->
  </MainLayout>
</template>
<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import YoutubeOptimization from "@/components/YoutubeOptimization.vue";
import Line from "@/components/Line.vue";
import Tabs from "../components/Tabs.vue";
import MainLayout from "../layouts/MainLayout.vue";
import PasteScriptArea from "@/components/PasteScriptArea.vue";
import Elements from "../components/Elements.vue";
import { ref } from "vue";
import Uploads from "../components/Uploads.vue";
import ImageEditor from "../components/ImageEditor.vue";
import CircularBar from "../components/CircularBar.vue";
import { useTab } from "@/store/counter";
import { VueEditor } from "vue3-editor";

import "vue3-circle-progress/dist/circle-progress.css";
import InstaCircularBar from "@/components/Instagram/Optimization/InstaCircularBar.vue";
import CircleProgress from "@/components/CircleProgress.vue";
import { defineProps, defineEmits } from "vue";
import Modal from "@/components/Modal.vue";
import Progress from "@/pages/Progress.vue";
const media = ref({ added: [{ preview: "" }] });
const imageUploaded = ref(false);

const previewImage = () => {
  console.log(media.value);

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
  console.log(media.value.added);
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
  console.log(media.value.added);

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
const content = ref("Add text click Here");
const store = useTab();
const currentTab = ref(1);

const elementsTab = ref(1);

function changeElementsTab(tab) {
  elementsTab.value = tab;
}
//change tab function

function changeTab(tab) {
  this.currentTab = tab;
}

const testNow = () => {
  alert("test");
};

import { reactive } from "vue";
import VuePictureCropper, { cropper } from "vue-picture-cropper";

const pic = ref(null);
const uploadInput = ref(null); // Define a ref for the file input element

const result = reactive({
  dataURL: "",
  blobURL: "",
});

const isShowModal = ref(false);

function selectFile(e) {
  // Reset last selection and results
  pic.value = "";
  result.dataURL = "";
  result.blobURL = "";

  // Get selected files
  const { files } = e.target;
  if (!files || !files.length) return;

  // Convert to dataURL and pass to the cropper component
  const file = files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    // Update the picture source of the `img` prop
    pic.value = String(reader.result);

    // Show the modal
    isShowModal.value = true;

    // Clear selected files of input element
    if (!uploadInput.value) return;
    uploadInput.value.value = "";
  };
}

async function getResult() {
  if (!cropper) return;
  const base64 = cropper.getDataURL();
  const blob = await cropper.getBlob();
  if (!blob) return;

  const file = await cropper.getFile({
    fileName: "kashif",
  });

  console.log({ base64, blob, file });
  result.dataURL = base64;
  result.blobURL = URL.createObjectURL(blob);
  isShowModal.value = false;
}

/**
 * Clear the crop box
 */
function clear() {
  if (!cropper) return;
  cropper.clear();
}
function cropImage() {
  getResult(); // This function should handle the cropping logic
}
import useToastHook from "../hooks/ToastMessage";
const { showSuccessToast, showErrorToast } = useToastHook();
const onSuccess = () => {
  showSuccessToast("Copied");
};
/**
 * Reset the default cropping area
 */
function reset() {
  if (!cropper) return;
  cropper.reset();
}

/**
 * The ready event passed to Cropper.js
 */
function ready() {
  console.log("Cropper is ready.");
}
// change me hamza to show loading //
// const generateFunc = () => {
//   imageUploaded.value = true;
// };
const showLoader = ref(false);
function start(){
  this.showLoader = !this.showLoader
}
</script>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    generateFunc() {
      this.loading = true;

      // Simulate asynchronous operation
      setTimeout(() => {
        // Perform your generation logic here

        // Once the generation is complete, set loading to false
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
.custom-loader {
  width: 200px;
  height: 25px;
  border-radius: 20px;
  color:#ffa500;
  border: 2px solid;
  position: relative;
}

.custom-loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background:linear-gradient(90deg, #ff0000 0%, #ffa500 100%);
  animation: p6 3s infinite;
}

@keyframes p6 {
  100% {
    inset: 0
  }
}
</style>
<template>
  <span>
    <!-- Youtube -->
    <span v-if="store.currentTab === 0">
      <YoutubeOptimization />
    </span>
    <!-- Instagram -->
    <span v-if="store.currentTab === 1">
      <InstOptimization />
    </span>
    <!-- Tiktok -->
    <span v-if="store.currentTab === 2">
      <TikTokOpt />
    </span>
  </span>
</template>
<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import YoutubeOptimization from "@/components/YoutubeOptimization.vue";
import InstOptimization from "@/components/InstOptimization.vue";
import TikTokOpt from "@/components/TikTokOpt.vue";
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
</script>

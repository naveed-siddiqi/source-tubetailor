<template>
  <div class="px-8 py-6 mt-4 bg-white styleCard rounded-xl border !border-gray-200">
    <span v-if="isData"><Pulse /></span>
    <span v-else> <slot /></span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Pulse from "@/components/Pulse.vue";

const isData = ref(true);
//table animation
setTimeout(() => {
  isData.value = false;
}, 2000);
</script>

<style scoped>
.styleCard {
  fill: #fff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
</style>

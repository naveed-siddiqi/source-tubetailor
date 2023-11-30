<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-4">
    <div
      :style="'background-image: url(' + img + ');'"
      class="flex items-center justify-center aspect-[16/9] rounded-lg bg-image text-[18px] font-semibold text-white"
    ></div>
  </div>
</template>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
</style>

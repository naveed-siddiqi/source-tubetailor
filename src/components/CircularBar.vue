<template>
  <div class="flex flex-col items-center gap-2 text-center">
    <div
      v-bind:style="{ background: bgStyle, fontSize: fontSize + 'px' }"
      class="progress-bar"
    >
      <progress
        value="75"
        min="0"
        max="100"
        style="visibility: hidden; height: 0; width: 0"
      >
        75%
      </progress>
      <span class="text-[16px] font-semibold">{{ value }}</span>
    </div>
    <div>
      <span class="text-[12px] font-semibold">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

const bgStyle = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#fe4442 ${props.percentage}, #f2f2f2 0)`;
</script>

<style scoped>
.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
```

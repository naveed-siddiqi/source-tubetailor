<template>
  <div>
    <vue-gauge
      :value="gaugeValue"
      :min="0"
      :max="100"
      :size="200"
      :animation-speed="32"
      :start-angle="90"
      :end-angle="450"
      :value-text="gaugeValue + '%'"
    ></vue-gauge>
    <button @click="incrementGaugeValue">Increase Value</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gaugeValue = ref(50);

const incrementGaugeValue = () => {
  if (gaugeValue.value < 100) {
    gaugeValue.value += 10;
  }
};
</script>

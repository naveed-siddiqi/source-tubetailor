<template>
  <div>
    <div class="flex-col items-center inline-flex">
      <radial-progress-bar
        :diameter="computedDiameter"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
        innerStrokeColor="#f3f4f6"
        :startColor="'#F1EB90'"
        :stopColor="'#FF6C22'"
        :innerStrokeWidth="3"
        :strokeWidth="3"
      >
        <div class="flex gap-1">
          <p class="font-medium text-xs sm:text-sm">{{ completedSteps }}</p>
          /
          <p class="font-medium text-xs sm:text-sm">{{ totalSteps }}</p>
        </div>
      </radial-progress-bar>
      <h1 class="text-[12px] pt-3 font-semibold whitespace-nowrap">{{ text }}</h1>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  props: {
    completedSteps: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
    startColor: {
      type: String,
      required: true,
    },
    stopColor: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    computedDiameter() {
      return this.screenWidth <= 500 ? 60 : 90;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  components: {
    RadialProgressBar,
  },
};
</script>
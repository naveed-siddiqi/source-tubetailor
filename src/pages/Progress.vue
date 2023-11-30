vue-gauge
<template>
  <div
    class="container absolute inset-0 overflow-hidden w-full h-full"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseup="endDrag"
    ref="containerRef"
  >
    <div class="icon text-6xl cursor-grabbing" :style="iconStyle" ref="iconRef">
      <!-- You can replace this with your actual icon -->
      🍇
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const containerRef = ref(null);
    const iconRef = ref(null);
    const dragging = ref(false);
    const offset = reactive({ x: 0, y: 0 });
    const animationFrameId = ref(null);

    const startDrag = (event) => {
      if (iconRef.value) {
        dragging.value = true;
        offset.x = event.clientX - iconRef.value.getBoundingClientRect().left;
        offset.y = event.clientY - iconRef.value.getBoundingClientRect().top;
      }
    };

    const drag = (event) => {
      if (dragging.value && containerRef.value && iconRef.value) {
        cancelAnimationFrame(animationFrameId.value);
        animationFrameId.value = requestAnimationFrame(() => {
          const x =
            event.clientX -
            containerRef.value.getBoundingClientRect().left -
            offset.x;
          const y =
            event.clientY -
            containerRef.value.getBoundingClientRect().top -
            offset.y;
          iconRef.value.style.left = x + "px";
          iconRef.value.style.top = y + "px";
        });
      }
    };

    const endDrag = () => {
      dragging.value = false;
      if (animationFrameId.value) {
        cancelAnimationFrame(animationFrameId.value);
        animationFrameId.value = null;
      }
    };

    return {
      containerRef,
      iconRef,
      iconStyle: {
        position: "absolute",
        width: "100px",
        height: "100px",
      },
      startDrag,
      drag,
      endDrag,
    };
  },
};
</script>

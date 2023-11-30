<!-- Vue component -->
<template>
  <div>
    <label class="text-[#A5AC9D] text-[15px] font-[500px]"
      >Select Academics</label
    >
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="true"
      :clear-on-select="true"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
    >
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      options: [
        { id: "1", name: "Acting" },
        { id: "2", name: "Film" },
        { id: "3", name: "Literature" },
        { id: "4", name: "Musical Theatre" },
        { id: "5", name: "Performing Arts" },
        { id: "6", name: "Singing" },
        { id: "7", name: "Theatre/Theatre Arts" },
        { id: "8", name: "Vocal Performance" },
      ],
    };
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Tabs from "@/components/Tabs.vue";
import PasteScriptArea from "@/components/PasteScriptArea.vue";
import TableLayout from "../layouts/TableLayout.vue";
import RedditContent from "@/components/RedditContent.vue";
import TwitterContent from "@/components/TwitterContent.vue";
import { useTab } from "@/store/counter";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import ThreadsContent from "../components/ThreadsContent.vue";
import { onMounted } from "vue";

const store = useTab();
const currentTab = ref(1);
const changeTab = (tab) => {
  currentTab.value = tab;
};
// const showLoader = ref(false);
// function start(){
//   this.showLoader = !this.showLoader

// }
onMounted(() => {
  localStorage.removeItem('topic')
});
</script>

<template>
  <MainLayout>
    <!-- Youtube -->
    <Loader :showLoader="showLoader" />
    <span v-if="textValueValidationMessage" style="color: red">{{
      textValueValidationMessage
    }}</span>
    <div v-if="store.currentTab === 0" class="py-5 space-y-4">
      <textarea v-model="textValue" placeholder="Paste script"
        class="w-full h-64 px-4 py-4 bg-white outline-none rounded-xl bg-shadow">
    </textarea>

      <div class="flex items-center justify-end">
        <Modal :showLoader="showLoader" />
        <button class="px-[40px] py-[6px] rounded-full bg-youtube text-white" @click="start()">
          Start
        </button>
      </div>
      <div>
        <TableLayout>
          <div class="flex items-center gap-2">
            <button @click="changeTab(1)" :class="[
              'px-3 py-2 text-xs border rounded-full',
              currentTab === 1 ? 'bg-youtube text-white' : '',
            ]">
              Reddit
            </button>
            <button @click="changeTab(2)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 2
                ? 'bg-youtube text-white border-[#fe4442]'
                : '',
            ]">
              Twitter
            </button>
            <button @click="changeTab(3)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 3
                ? 'bg-youtube text-white border-[#fe4442]'
                : '',
            ]">
              Threads
            </button>
          </div>
          <div v-if="currentTab === 1">
            <RedditContent :apiResponse="apiResponse?.subreddits" />
          </div>
          <div v-if="currentTab === 2">
            <TwitterContent :apiResponse="apiResponse?.tweets" />
          </div>
          <div v-if="currentTab === 3">
            <ThreadsContent :apiResponse="apiResponse?.threads" />
          </div>
        </TableLayout>
      </div>
    </div>

    <!-- Instagram -->
    <div v-if="store.currentTab === 1" class="py-5 space-y-4">
      <PasteScriptArea />
      <div class="flex items-center justify-end">
        <button class="px-[40px] py-[6px] rounded-full bg-insta text-white" @click="start()">
          Start
        </button>
      </div>
      <div>
        <TableLayout>
          <div class="flex items-center gap-2">
            <button @click="changeTab(1)" :class="[
              'px-3 py-2 text-xs border rounded-full',
              currentTab === 1 ? 'bg-insta text-white' : '',
            ]">
              Reddit
            </button>
            <button @click="changeTab(2)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 2 ? 'bg-insta text-white  ' : '',
            ]">
              Twitter
            </button>
            <button @click="changeTab(3)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 3 ? 'bg-insta text-white  ' : '',
            ]">
              Threads
            </button>
          </div>
          <div v-if="currentTab === 1">
            <RedditContent />
          </div>
          <div v-if="currentTab === 2">
            <TwitterContent />
          </div>
          <div v-if="currentTab === 3">
            <ThreadsContent />
          </div>
        </TableLayout>
      </div>
    </div>
    <!--Tiktok-->
    <div v-if="store.currentTab === 2" class="py-5 space-y-4">
      <PasteScriptArea />
      <div class="flex items-center justify-end">
        <button class="px-[40px] py-[6px] rounded-full bg-tiktok text-white" @click="start()">
          Start
        </button>
      </div>
      <div>
        <TableLayout>
          <div class="flex items-center gap-2">
            <button @click="changeTab(1)" :class="[
              'px-3 py-2 text-xs border rounded-full',
              currentTab === 1 ? 'bg-tiktok text-white' : '',
            ]">
              Reddit
            </button>
            <button @click="changeTab(2)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 2 ? 'bg-tiktok text-white  ' : '',
            ]">
              Twitter
            </button>
            <button @click="changeTab(3)" :class="[
              'px-3 py-2 text-xs border  rounded-full',
              currentTab === 3 ? 'bg-tiktok text-white  ' : '',
            ]">
              Threads
            </button>
          </div>
          <div v-if="currentTab === 1">
            <RedditContent />
          </div>
          <div v-if="currentTab === 2">
            <TwitterContent />
          </div>
          <div v-if="currentTab === 3">
            <ThreadsContent />
          </div>
        </TableLayout>
      </div>
    </div>
  </MainLayout>
</template>
<script>
import Loader from "@/components/Loader.vue";
import { postRequest } from '../helper/api.js';

export default {
  data() {
    return {
      textValue: "",
      apiResponse: null,
      textValueValidationMessage: "",
      showLoader: false,
    };
  },
  components: {
    PasteScriptArea,
    RedditContent,
  },
  methods: {
    updateTextValue(value) {
      this.textValue = value
    },

    async start() {
      if (!this.textValue.trim()) {
        this.textValueValidationMessage = "Please write a script";

        // Set a timer to hide the validation message after 2 seconds
        setTimeout(() => {
          this.hideValidationMessage();
        }, 2000);

        return;
      }
      this.showLoader = true;
      try {
     
        const response = await postRequest("youtube/marketing", {
          script: this.textValue,
        });

        console.log(response);
        this.showLoader = false;
        this.apiResponse = response;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    hideValidationMessage() {
      this.textValueValidationMessage = "";
    }
  },
};

</script>
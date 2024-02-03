<template>
  <MainLayout>
    <GlobalAlert :messages="apiErrors" />

    <!-- Youtube -->
    <Modal :showLoader="showLoader"/>

    <div v-if="store.currentTab === 0" class="py-5 space-y-4">
      <div>
        <textarea v-model="textValue"
          class="w-full h-64 px-4 py-4 bg-white rounded-lg outline-none bg-shadow"
          type="text"
          placeholder="Enter script title"
        />
      </div>
      <div class="flex items-center gap-4">
        <label
          class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
        >
          <CheckboxRoot
            v-model="checkboxOne"
            class="flex h-[16px] border w-[16px] items-center justify-center rounded bg-white outline-none"
          >
            <CheckboxIndicator
              class="flex items-center justify-center w-full h-full bg-youtube text-white rounded"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </CheckboxIndicator>
          </CheckboxRoot>
          <span class="select-none font-[16px]">Short </span>
        </label>
        <label
          class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
        >
          <CheckboxRoot
            v-model="checkboxOne"
            class="flex h-[16px] border w-[16px] items-center justify-center rounded bg-white outline-none"
          >
            <CheckboxIndicator
              class="flex items-center justify-center w-full h-full bg-youtube text-white rounded"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </CheckboxIndicator>
          </CheckboxRoot>
          <span class="select-none font-[16px]">Long Video</span>
        </label>
      </div>
      <div class="flex items-center justify-end py-2">
        <Loader :showLoader="showLoader"/>
        <button @click="ContentGenerate()" class="px-[40px] py-[6px] rounded-full bg-youtube text-white">
          Generate
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- First Column -->
        <div class="col-span-1">
          <!-- Content for the first column -->
          <div class="space-y-2">
            <!-- Your content here -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Script:</h2>
                <button @click="copyText(apiResponse?.script)" class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div  class="space-y-6 text-[13px] text-[#868E9C]">
                <p>
                {{ apiResponse?.script }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-span-1">
          <!-- Content for the second column -->
          <div class="">
            <!-- Content 1 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Description:</h2>
                <button @click="copyText(apiResponse?.description)" class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 pb-2 text-[13px] text-[#868E9C]">
                {{ apiResponse?.description }}
              </div>
            </div>

            <!-- Content 2 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Hashtags:</h2>
                <button @click="copyText(apiResponse?.tags)" class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div  class="flex flex-wrap items-center justify-start gap-2">
                <span v-for="tag in apiResponse.tags" :key="tag"
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full flex"
                  >{{ tag }}</span>
              </div>
            </div>

            <!-- Content 3 in the second column -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Voiceover:</h2>
                <button  class="text-black">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <Listbox as="div" v-model="selected">
                  <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Assigned to</ListboxLabel>
                  <div class="relative mt-2">
                    <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span class="inline-flex w-full truncate">
                        <span class="truncate">{{ selected?.id }}</span>
                        <span class="ml-2 truncate text-gray-500">{{ selected?.gender }}</span>
                      </span>
                      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </ListboxButton>

                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                      <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="voice in peopleVoiceOver" :key="voice.id" :value="voice" v-slot="{ active, selected }">
                          <li @click="selectVoice(voice)" :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-pointer select-none py-2 pl-3 pr-9']">
                            <div class="flex">
                              <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate']">{{ voice.id }}</span>
                              <span :class="[active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate']">{{ voice.gender }}</span>
                            </div>

                            <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
              <div class="flex flex-col gap-4 items-start py-4">
                <div class="flex flex-wrap items-center gap-4 w-full">
                  <!-- <div v-for="voice in peopleVoiceOver" :key="voice.id">
                      <p>ID: {{ voice.id }}</p>
                      <p>Child: {{ voice.child }}</p>
                      <p>Gender: {{ voice.gender }}</p>
                      <audio :src="voice.link" controls></audio>
                      <hr />
                  </div> -->
                </div>
                <div class="flex justify-end w-full">
                  <button
                    class="px-[40px] py-[6px] rounded-full bg-youtube text-white" @click="voiceover()"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <hr />
              <div v-if="voiceOverResult" class="py-4">
                  <audio v-if="voiceOverResult" controls class="w-full">
                    <source
                      :src="voiceOverResult"
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram -->

 
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import Tabs from "@/components/Tabs.vue";
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { ref, onMounted, computed } from "vue";
import { useTab } from "@/store/counter";
import Loader from "@/components/Loader.vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { postRequest } from '../helper/api.js';
import { getRequestApi } from '../helper/api.js';
import clipboardCopy from 'clipboard-copy';
import AudioPlayer from 'vue-audio'
import GlobalAlert from '@/components/Alert.vue';

export default {
  components: {
    MainLayout,
    Tabs,
    CheckboxIndicator,
    CheckboxRoot,
    Loader,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronUpDownIcon,
    AudioPlayer,
  },
  data() {
    return {
      checkboxOne: true,
      store: useTab(),
      peopleVoiceOver: [],
      selected: null,
      textValue: "",
      voiceOverResult: null,
      selectedVoice: null,
      apiResponse: {
        script: "",
        description: "",
        tags: [],
      },
      apiErrors: ["An error occurred while fetching voice data."],
      textValueValidationMessage: "",
      showLoader: false,
    };
  },
  
  methods: {
    selectVoice(voice) {
      this.selected = voice;
    },

    updateTextValue(value) {
      this.textValue = value
    },

    async fetchVoiceData() {
  try {
    let storedData = localStorage.getItem("voiceData");
    let storedTimestamp = localStorage.getItem("voiceDataTimestamp");

    if (!storedData || !storedTimestamp) {
      const response = await getRequestApi("voiceover/demo");
      this.peopleVoiceOver = response.voices;
      this.selected = this.peopleVoiceOver[0];

      localStorage.setItem("voiceData", JSON.stringify(response.voices));
      localStorage.setItem("voiceDataTimestamp", new Date().getTime());
    } else {
      this.peopleVoiceOver = JSON.parse(storedData);
      this.selected = this.peopleVoiceOver[0];
    }
  } catch (error) {
    console.error("Error fetching voice data:", error);

    // Check if the error has a response with a message
    if (error.response && error.response.data && error.response.data.message) {
      this.apiErrors.push(error.response.data.message);
    } else {
      // If no specific message is provided, handle the error generically
      this.apiErrors.push("An error occurred while fetching voice data.");
    }
  }
},

    //////////////////CONTENT GENERATOR/////////////////////
    async ContentGenerate() {
      if (!this.textValue.trim()) {
        this.textValueValidationMessage = "Please write a script";
        setTimeout(() => {
          this.hideValidationMessage();
        }, 2000);

        return;
      }
      this.showLoader = true;
      try {
        const response = await postRequest("youtube/content-generator", {
          title: this.textValue,
        });
        this.showLoader = false;
        this.apiResponse = response;
        console.log(this.apiResponse);

      } catch (error) {
        console.error("Error:", error);
        this.apiErrors.push(error.response.data.message);

      }
    },
        //////////////////VOICE OVER/////////////////////////
    async voiceover() {
      console.log(this.selected.id);
      this.showLoader = true;
      try {
        const response = await postRequest("voiceover", {
          text:'exercise',
          voice_id: this.selected.id,
        });

        this.showLoader = false;  
        this.voiceOverResult = response.voiceover;
        this.$refs.audioPlayer?.play();
        console.log(this.voiceOverResult);
      } catch (error) {
        console.error("Error:", error);
        this.apiErrors.push(error.response.data.message);

      }
    },
        //////////////////////COPY TEXT////////////////////////
    copyText(textToCopy) {
      clipboardCopy(textToCopy)
        .then(() => {
        })
        .catch((err) => {
        });
    },
        ///////////////////////VALIDATION////////////////////////
    hideValidationMessage() {
      this.textValueValidationMessage = "";
    },
  },

  mounted(){
    this.textValue = localStorage.getItem("topic"); 
    this.fetchVoiceData();
  },
};

</script>

<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
</style>

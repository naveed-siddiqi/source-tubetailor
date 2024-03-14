<template>
  <MainLayout>

    <TableLayout class="!mt-0">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between pb-2 ml-auto">
      <div class="flex-1 xl:max-w-[50%]">
        <fieldset>
          <legend class="sr-only">Notifications</legend>
          <div class="flex flex-col sm:flex-row flex-wrap sm:items-center sm:justify-between gap-3">
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="comments" class="font-medium text-gray-900">All</label>
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="candidates" class="font-medium text-gray-900">Optimization</label>

              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">Keyword Research</label>
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">Content Generation</label>
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">Voiceover</label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="max-w-[200px] w-full">
        <div
          class="slider flex items-center justify-between bg-white w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6 text-center">
          <button @click="scrollLeft">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

          </button>
          <div class="month">{{ currentMonth }}</div>
          <button @click="scrollRight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        </div>
      </div>
    </div>
      <div class="py-2 overflow-x-auto scrollbar">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <!-- Table header -->
            <tr class="bg-[#414D61] text-white">
              <th class="rounded-l-lg rounded-tl-lg whitespace-nowrap px-4 py-2 text-left text-[13px] font-medium">
                Category
              </th>
              <th class="py-2text-left whitespace-nowrap px-4 text-[13px] whitespace-nowrap font-medium">
                Type
              </th>
              <th class="px-4 py-2 whitespace-nowrap text-[13px] font-medium">
                Date
              </th>
              <th class=" px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium">Download</th>
              <th class="rounded-r-lg px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"></th>
            </tr>
            <!-- Table body -->
            <tr v-for="(history, index) in historys" :key="index"
              class="py-2 rounded-lg border-b border-gray-400 text-gray-500">
              <td class="px-4 py-4 text-[13px] whitespace-nowrap text-gray-800 font-medium whitespace-nowrap">
                {{ history.Category }}
              </td>
              <td class="px-4 text-[13px] whitespace-nowrap whitespace-nowrap">
                <div class=" flex items-center justify-start gap-2">
                  <span class="font-medium text-gray-800">{{ history.type }} :</span>
                  <span v-if="history.isAudio === false" class="max-w-sm truncate">{{ history.description }}</span>
                  <audio class="h-8" v-if="history.isAudio === true" controls>
                    <source src="" type="audio/ogg">
                    <source src="" type="audio/mpeg">
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </td>
              <td class="px-4 text-[13px] whitespace-nowrap whitespace-nowrap">
                {{ history.date }}
              </td>
              <td class="px-4 text-[13px] whitespace-nowrap text-start whitespace-nowrap">
                <div class="flex items-center justify-start">
                  <button class="flex items-center justify-center text-center gap-2">
                    <span class="text-blue-600 font-medium text-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                      </svg>
                    </span>
                    <span v-if="history.isAudio === false" class="text-blue-600 font-medium text-md">Download PDF</span>
                    <span v-else class="text-blue-600 font-medium text-md">Download VoiceOver</span>
                  </button>
                </div>
              </td>
              <td class="px-4 py-2 text-end">
                <button @click="saveCompetitor(index)"
                  class="text-left text-[10px] underline whitespace-nowrap font-medium focus:outline-none">
                  <svg v-if="isSaveCompetitor[index]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-5 h-5 text-[#FE4442]">
                    <path fill-rule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </TableLayout>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TableLayout from "@/layouts/TableLayout.vue";
import useToastHook from "../hooks/ToastMessage";
import { ref, onMounted, computed } from 'vue';
const { showSuccessToast, showErrorToast } = useToastHook();
const isSaveCompetitor = ref([]);
const savedTopic = ref([]);
const viewSavedTopic = () => {
  savedTopic.value = !savedTopic.value;
}
const saveCompetitor = (index) => {
  isSaveCompetitor.value[index] = !isSaveCompetitor.value[index];
  if (!isSaveCompetitor.value[index]) {
    showSuccessToast("Saved");
  }
}

const historys = [
  { Category: 'Optimization', type: 'Script', description: '7 days. Save the competitors that you want to track.7 days. Save the competitors that you want to track', date: '05:56 PM | 25 / 12 / 2005', isAudio: false },
  { Category: 'Keyword Research', type: 'Keyword', description: 'admission , new', date: '05:56 PM | 25 / 12 / 2005', isAudio: false },
  { Category: 'Content Generation', type: 'Title', description: 'learn javascript', date: '05:56 PM | 25 / 12 / 2005', isAudio: false },
  { Category: 'Keyword Research', type: 'Script', description: '7 days. Save the competitors that you want to track.', date: '05:56 PM | 25 / 12 / 2005', isAudio: false },
  { Category: 'Voiceover', type: 'Daniel ( female )', date: '05:56 PM | 25 / 12 / 2005', isAudio: true },
];


// Define an array of month names
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Create a reactive variable to track the current month index
const currentMonthIndex = ref(0);

// Computed property to get the current month name based on the current index
const currentMonth = computed(() => months[currentMonthIndex.value]);

// Function to scroll to the previous month
const scrollLeft = () => {
  if (currentMonthIndex.value > 0) {
    currentMonthIndex.value--;
  }
};

// Function to scroll to the next month
const scrollRight = () => {
  if (currentMonthIndex.value < months.length - 1) {
    currentMonthIndex.value++;
  }
};
</script>
<style scoped>
.slider {
  display: flex;
  align-items: center;
}

.month {
  margin: 0 20px;
}
</style>
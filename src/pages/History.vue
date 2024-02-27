<template>
    <MainLayout>
      <div class="flex items-center justify-start pb-2 max-w-[200px] ml-auto">
        <select id="location" name="location" class="bg-white block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6 text-center">
            <option selected>Febraury 2024</option>
            <option>January 2024</option>
            <option>March 2024</option>
          </select>
      </div>
      <TableLayout class="!mt-0">
        <div class="py-2 overflow-x-auto scrollbar">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <!-- Table header -->
              <tr class="bg-[#414D61] text-white">
                <th class="rounded-l-lg rounded-tl-lg whitespace-nowrap px-4 py-2 text-left text-[13px] font-medium">
                  Category
                </th>
                <th class="py-2text-left whitespace-nowrap px-4 text-[13px] font-medium">
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
                <td class="px-4 text-[13px] text-gray-800 font-medium whitespace-nowrap">
                    {{ history.Category }}
                </td>
                <td class="px-4 text-[13px] whitespace-nowrap">
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
                <td class="px-4 text-[13px] whitespace-nowrap">
                  {{ history.date }}
                </td>
                <td class="px-4 text-[13px] text-start whitespace-nowrap">
                <div class="flex items-center justify-start">
                    <button class="flex items-center justify-center text-center gap-2">
                    <span class="text-blue-600 font-medium text-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                        </svg>
                    </span>
                    <span  v-if="history.isAudio === false" class="text-blue-600 font-medium text-md">Download PDF</span>
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
  import { ref, onMounted } from 'vue';
  const { showSuccessToast, showErrorToast } = useToastHook();
  const isSaveCompetitor = ref([]);
  const savedTopic = ref([]);
  const viewSavedTopic = () =>{
    savedTopic.value = !savedTopic.value;
  }
  const saveCompetitor = (index) => {
  isSaveCompetitor.value[index] = !isSaveCompetitor.value[index];
  if(!isSaveCompetitor.value[index]){
    showSuccessToast("Saved");
  }
}
  
  const historys = [
    { Category: 'Optimization', type: 'Script', description: '7 days. Save the competitors that you want to track.7 days. Save the competitors that you want to track', date: '05:56 PM | 25 / 12 / 2005', isAudio:false } ,
    { Category: 'Keyword Research', type: 'Keyword', description: 'admission , new', date: '05:56 PM | 25 / 12 / 2005',isAudio:false },
    { Category: 'Content Generation', type: 'Title', description: 'learn javascript', date: '05:56 PM | 25 / 12 / 2005',isAudio:false },
    { Category: 'Keyword Research', type: 'Script', description: '7 days. Save the competitors that you want to track.', date: '05:56 PM | 25 / 12 / 2005',isAudio:false },
    { Category: 'Voiceover', type: 'Daniel ( female )', date: '05:56 PM | 25 / 12 / 2005',isAudio:true },
  ]
  </script>
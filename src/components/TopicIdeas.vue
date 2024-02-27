<template>
  <div class="mt-4 flex items-center justify-between">
        <h2 class="relative text-xl font-bold">
          Topics Ideas:
          <span class="text-sm font-medium text-gray-600"
            >Based on your niche</span>
          <span class="absolute left-72 top-1">
            <InformationCircleIcon class="absolute w-6 h-6" />
          </span>
        </h2>
        <div class="">
        <button v-if="savedTopic" @click="viewSavedTopic" class="text-sm font-medium text-end text-red-500">View Topic Ideas</button>
        <button v-if="!savedTopic" @click="viewSavedTopic" class="text-sm font-medium text-end text-red-500">Saved Topic Ideas</button>
      </div>
      </div>
  <TableLayout>
    <div class="">
      <div class="py-2 overflow-x-auto scrollbar">
        <div class="relative overflow-x-auto">
          <template v-if="topicIdeas.length > 0" >
            <table v-if="!savedTopic"
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <!-- Table header -->
              <tr class="bg-[#414D61] text-white">
                <th
                  class="rounded-l-lg rounded-tl-lg whitespace-nowrap px-4 py-2 text-left text-[13px] font-medium"
                >
                  Title
                </th>
                <th
                  class="py-2text-left whitespace-nowrap px-4 text-[13px] font-medium text-center"
                >
                  Keyword
                </th>
                <th
                  class="px-4 py-2 whitespace-nowrap text-[13px] font-medium text-center"
                >
                  Keyword difficulty
                </th>
                <th
                  class="px-4 py-2 whitespace-nowrap text-[13px] font-medium text-center"
                >
                  Monthly search volume
                </th>
                <th class=" px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"></th>
                <th class="rounded-r-lg px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"></th>
              </tr>
              <!-- Table body -->
              <tr v-for="(idea, index) in topicIdeas" :key="index" class="py-2 rounded-lg border-b border-gray-400 text-gray-500">
                <td class="px-4 text-[13px]">
                  {{ idea.topic }}
                </td>
                <td class="flex items-center justify-center gap-2 px-4 py-2">
                  <span
                    class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold"
                  >{{ idea.keyword }}</span
                  >
                </td>
                <td class="px-4 py-2 text-[13px] text-center">{{ idea.topic_difficulty }}</td>
                <td class="px-4 py-2 text-[13px] text-center">{{ idea.monthly_search_volume }}</td>
                <td class="px-4 py-2">
                  <button @click="contentExport(idea.topic)" class="text-left text-[10px] text-[#304dc2] underline whitespace-nowrap font-medium">
                    Export to content generator
                  </button>
                </td>
                <td class="px-4 py-2">
                  <button @click="saveTopicIdeas(index)" class="text-left text-[10px] underline whitespace-nowrap font-medium focus:outline-none">
                    <svg v-if="!isTopicSaved[index]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#FE4442]">
                      <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            </table>
            <table v-if="savedTopic"
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <!-- Table header -->
              <tr class="bg-[#414D61] text-white">
                <th
                  class="rounded-l-lg rounded-tl-lg whitespace-nowrap px-4 py-2 text-left text-[13px] font-medium"
                >
                  Title
                </th>
                <th
                  class="py-2text-left whitespace-nowrap px-4 text-[13px] font-medium text-center"
                >
                  Keyword
                </th>
                <th
                  class="px-4 py-2 whitespace-nowrap text-[13px] font-medium text-center"
                >
                  Keyword difficulty
                </th>
                <th
                  class="px-4 py-2 whitespace-nowrap text-[13px] font-medium text-center"
                >
                  Monthly search volume
                </th>
                <th class=" px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"></th>
                <th class="rounded-r-lg px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"></th>
              </tr>
              <!-- Table body -->
              <tr v-for="(idea, index) in topicIdeas" :key="index" class="py-2 rounded-lg border-b border-gray-400 text-gray-500">
                <td class="px-4 text-[13px]">
                  {{ idea.topic }}
                </td>
                <td class="flex items-center justify-center gap-2 px-4 py-2">
                  <span
                    class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold">{{ idea.keyword }}</span>
                </td>
                <td class="px-4 py-2 text-[13px] text-center">{{ idea.topic_difficulty }}</td>
                <td class="px-4 py-2 text-[13px] text-center">{{ idea.monthly_search_volume }}</td>
                <td class="px-4 py-2">
                  <button @click="contentExport(idea.topic)" class="text-left text-[10px] text-[#304dc2] underline whitespace-nowrap font-medium">
                    Export to content generator
                  </button>
                </td>
                <td class="px-4 py-2">
                  <button @click="saveTopicIdeas(index)" class="text-left text-[10px] underline whitespace-nowrap font-medium focus:outline-none">
                    <svg v-if="!isTopicSaved[index]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#FE4442]">
                      <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            </table>
          </template>
          <template v-else>
            <p class="text-[13px] text-red-600">Sorry! Unable to produce topic ideas. Unclear channel earlier uploads. {{ errorMsg }}</p>
          </template>
        </div>
      </div>
    </div>
  </TableLayout>
</template>
<script>
import TableLayout from "@/layouts/TableLayout.vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import axios from 'axios';
import useToastHook from "../hooks/ToastMessage";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://backend.tubetailor.ai/api/';
axios.defaults.headers.common['Authorization'] =`Bearer ${localStorage.getItem('token')}`;

export default {
  components: {
    TableLayout,
    InformationCircleIcon,
  },
  data() {
    return {
      topicIdeas: [],
      errorMsg: "",
      isTopicSaved: [],
      savedTopic:false
    };
  },
  computed: {
    showSavedTopics() {
      return this.isTopicSaved.some(value => value);
    }
  },
  created() {
    const { showSuccessToast, showErrorToast } = useToastHook();
    this.showSuccessToast = showSuccessToast;
    this.showErrorToast = showErrorToast;
  },
  methods: {
    viewSavedTopic(){
      this.savedTopic = !this.savedTopic;
    },
    saveTopicIdeas(index){
      this.isTopicSaved[index] = !this.isTopicSaved[index];
      if (this.isTopicSaved[index]) {
        this.showSuccessToast("Saved");
      }
    },
    async fetchTopicIdeas() {
      try {
        // Check for cached data in localStorage
        const cachedData = localStorage.getItem('cachedTopicIdeas');
        const cachedTimestamp = localStorage.getItem('topicIdeasTimestamp');

        // If there is cached data and it's not older than 24 hours, use it
        if (cachedData && cachedTimestamp && this.isWithin24Hours(cachedTimestamp)) {
          const parsedData = JSON.parse(cachedData);
          this.topicIdeas = parsedData.topicIdeas;
          this.errorMsg = parsedData.errorMsg;
        } else {
          // If no cached data or it's older than 24 hours, make a new API call
          const response = await axios.get('youtube/topic-ideas');
          const data = response.data;

          if (data && data.message && data.message.includes("Channel must have uploads")) {
            this.errorMsg = data.message;
          } else if (data && data.topic_ideas) {
            this.topicIdeas = data.topic_ideas;
          } else {
            console.error('Unexpected API response structure:', data);
          }

          // Cache the API data and timestamp in localStorage
          localStorage.setItem('cachedTopicIdeas', JSON.stringify({
            topicIdeas: this.topicIdeas,
            errorMsg: this.errorMsg
          }));
          localStorage.setItem('topicIdeasTimestamp', new Date().toISOString());
        }
      } catch (error) {
        console.error("Error fetching topic ideas:", error);
        this.errorMsg = "Error fetching topic ideas. Please try again later.";
      }
    },
    isWithin24Hours(timestamp) {
      const now = new Date();
      const storedTimestamp = new Date(timestamp);
      const differenceInMilliseconds = now - storedTimestamp;
      const hoursDifference = differenceInMilliseconds / (1000 * 60 * 60);

      // Check if the stored timestamp is within the last 24 hours
      return hoursDifference <= 24;
    },
    contentExport(value) {
      console.log(value);
      localStorage.setItem('topic', value);

      this.$router.push({ path: '/content-generator' });
    }
  },
  mounted() {
    this.fetchTopicIdeas();
  },
};
</script>

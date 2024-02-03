<template>
  <TableLayout>
    <div class="">
      <div class="">
        <h2 class="relative py-2 text-xl font-bold">
          Topics Ideas:
          <span class="text-sm font-medium text-gray-600"
            >Based on your niche</span
          >
          <span class="absolute left-72 -top-2">
            <InformationCircleIcon class="absolute w-4 h-4" />
          </span>
        </h2>
      </div>
      <div class="py-2 overflow-x-auto scrollbar">
        <div class="relative overflow-x-auto">
          <template v-if="topicIdeas.length > 0">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <!-- Table header -->
              <tr class="bg-[#414D61] text-white">
                <th
                  class="rounded-l-lg rounded-tl-lg whitespace-nowrap px-4 py-2 text-left text-[13px] font-medium"
                >
                  Title
                </th>
                <th
                  class="py-2text-left whitespace-nowrap px-4 text-[13px] font-medium"
                >
                  Keyword
                </th>
                <th
                  class="px-4 py-2 text-left whitespace-nowrap text-[13px] font-medium"
                >
                  Keyword difficulty
                </th>
                <th
                  class="px-4 py-2 text-left whitespace-nowrap text-[13px] font-medium"
                >
                  Monthly search volume
                </th>
                <th
                  class="rounded-r-lg px-4 py-2 whitespace-nowrap text-left text-[13px] font-medium"
                ></th>
              </tr>
              <!-- Table body -->
              <tr v-for="(idea, index) in topicIdeas" :key="index" class="py-2 rounded-lg border-b border-gray-400">
                <td class="px-4 text-[13px]">
                  {{ idea.topic }}
                </td>
                <td class="flex items-center justify-center gap-2 px-4 py-2">
                  <span
                    class="rounded-full bg-[#EFF4FD] px-3 py-1 text-xs font-semibold"
                  >{{ idea.keyword }}</span
                  >
                </td>
                <td class="px-4 py-2 text-[13px]">{{ idea.topic_difficulty }}</td>
                <td class="px-4 py-2 text-[13px]">{{ idea.monthly_search_volume }}</td>
                <td class="px-4 py-2">
                  <button @click="contentExport(idea.topic)" class="text-left text-[10px] text-[#004EB9] underline">
                    Export to content generator
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
    };
  },
  methods: {
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

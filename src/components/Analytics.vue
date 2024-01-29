<template>
  <TableLayout>
    <div class="">
      <div class="flex flex-wrap items-center justify-between py-4 overflow-x-auto sm:space-y-3 lg:space-y-0 lg:space-x-4">
        <div class="relative">
          <h2 class="text-xl font-bold">Analytics</h2>
          <span class="absolute right-0 -top-2">
            <InformationCircleIcon class="absolute w-4 h-4" />
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="changeTab(1)"
            :class="['px-3 py-1 text-xs border rounded-full', currentTab === 1 ? 'bg-youtube text-white' : 'border-gray-600']"
          >
            1 Day
          </button>
          <button
            @click="changeTab(2)"
            :class="['px-3 py-1 text-xs border  rounded-full', currentTab === 2 ? 'bg-youtube text-white border-[#fe4442]' : 'border-gray-600']"
          >
            15 Days
          </button>
          <button
            @click="changeTab(3)"
            :class="['px-3 py-1 text-xs border  rounded-full', currentTab === 3 ? 'bg-youtube text-white border-[#fe4442]' : 'border-gray-600']"
          >
            30 Days
          </button>
        </div>
      </div>
      <div class="py-2 overflow-x-auto scrollbar">
        <div class="w-full min-w-max">
          <table v-if="!isLoading" class="w-full overflow-hidden bg-white rounded-lg">
            <thead class="bg-[#414D61] text-left text-white">
              <tr>
                <th class="px-4 py-2 text-sm font-medium rounded-bl-lg">Top performer</th>
                <th class="px-4 py-2 text-sm font-medium">Views</th>
                <th class="px-4 py-2 text-sm font-medium">Watch time</th>
                <th class="px-4 py-2 text-sm font-medium">Subscribers</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!isLoading" v-for="(project, index) in projects" :key="index">
                <td class="px-4 py-2 text-[13px]">{{ project.top }}</td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">{{ project.views }}</td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">{{ project.watchTime }}</td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">
                  {{ project.subscribersLost }}
                  <sup class="text-[10px] font-semibold text-[#00B907]">(+{{ project.subscribersLost }})</sup>
                </td>
              </tr>
              
            </tbody>
          </table>
          <div v-if="isLoading">
                <dt colspan="4" class="px-4 py-2 text-center font-normal">Loading...</dt>
          </div>
        </div>
      </div>
    </div>
  </TableLayout>
</template>

<style>
.scrollbar::-webkit-scrollbar {
  height: 3.46px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: #fe4442;
  border-radius: 12px;
  width: 2px;
}
.scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style>

<script>
import TableLayout from "@/layouts/TableLayout.vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import { getRequestApi } from '../helper/api.js';

export default {
  data() {
    return {
      currentTab: 1,
      tabs: [1, 2, 3],
      projects: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchYoutubeTopPerformers() {
      this.isLoading = true;

  let lastNumberOfDays = '';

  if (this.currentTab === 1) {
    lastNumberOfDays = 7;
  } else if (this.currentTab === 2) {
    lastNumberOfDays = 15;
  } else if (this.currentTab === 3) {
    lastNumberOfDays = 30;
  }

  const apiUrl = 'youtube/top-performer';
  const queryParams = { last_number_of_days: lastNumberOfDays };

  try {
    const responseData = await getRequestApi(apiUrl, queryParams);
    this.isLoading = false;

    // Check if responseData is an array or object
    if (Array.isArray(responseData)) {
      this.projects = responseData.map(project => ({
        id: project.id,
        top: project.top_performer.video_title,
        views: project.top_performer.views,
        watchTime: project.top_performer.watch_time,
        subscribersLost: project.top_performer.subscribers_lost,
        subscribersGained: project.top_performer.subscribers_gained,
      }));
    } else if (typeof responseData === 'object' && responseData !== null) {
      // Adjust the property names based on your API response structure
      this.projects = [{
        id: responseData.id,
        top: responseData.top_performer.video_title,
        views: responseData.top_performer.views,
        watchTime: responseData.top_performer.watch_time,
        subscribersLost: responseData.top_performer.subscribers_lost,
        subscribersGained: responseData.top_performer.subscribers_gained,
      }];
    } else {
      console.error('Invalid API response format:', responseData);
    }
  } catch (error) {
    this.isLoading = false;
    console.error('Error in fetching data:', error);
  }
},

    changeTab(tabNumber) {
      this.currentTab = tabNumber;
      this.fetchYoutubeTopPerformers();
    },
  },
  created() {
    this.fetchYoutubeTopPerformers();
  },
  components: { TableLayout },
};
</script>

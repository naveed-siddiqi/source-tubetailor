<template>
  <TableLayout>
    <div class="">
      <div
        class="flex flex-wrap items-center justify-between py-4 overflow-x-auto sm:space-y-3 lg:space-y-0 lg:space-x-4"
      >
        <div class="relative">
          <h2 class="text-xl font-bold">Analytics</h2>
          <span class="absolute right-0 -top-2">
            <InformationCircleIcon class="absolute w-4 h-4" />
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="changeTab(1)"
            :class="[
              'px-3 py-1 text-xs border rounded-full',
              currentTab === 1 ? 'bg-insta text-white' : 'border-gray-600',
            ]"
          >
            1 Day
          </button>
          <button
            @click="changeTab(2)"
            :class="[
              'px-3 py-1 text-xs border  rounded-full',
              currentTab === 2 ? 'bg-insta text-white ' : 'border-gray-600',
            ]"
          >
            10 Day
          </button>
          <button
            @click="changeTab(3)"
            :class="[
              'px-3 py-1 text-xs border  rounded-full',
              currentTab === 3 ? 'bg-insta text-white ' : 'border-gray-600',
            ]"
          >
            20 Day
          </button>
        </div>
      </div>
      <div class="py-2 overflow-x-auto scrollbar">
        <div class="w-full min-w-max">
          <table class="w-full overflow-hidden bg-white rounded-lg">
            <!-- Table header -->
            <thead class="bg-[#414D61] text-left text-white">
              <tr>
                <th class="px-4 py-2 text-sm font-medium rounded-bl-lg">
                  Top performer
                </th>
                <th class="px-4 py-2 text-sm font-medium">Views</th>
                <th class="px-4 py-2 text-sm font-medium">Watch time</th>
                <th class="px-4 py-2 text-sm font-medium">Subscribers</th>
                <th class="px-4 py-2 text-sm font-medium rounded-br-lg">
                  Revenue
                </th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody>
              <tr>
                <td class="px-4 py-2 text-[13px]">
                  Lorem Ipsum is simply dummy text of the printing.
                </td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">
                  305
                </td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">
                  63
                </td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">
                  263
                  <sup class="text-[10px] font-semibold text-[#00B907]"
                    >(+7)</sup
                  >
                </td>
                <td class="px-4 py-2 text-[24px] font-semibold text-[#FE4442]">
                  $5.5
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
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

export default {
  data() {
    return {
      currentTab: 1,
      tabs: [1, 2, 3],
      tableHeading: [
        "Top performer",
        "Views",
        "watch time",
        "Subscribers",
        "Revenue",
      ],
      projects: [
        {
          id: 1,
          top: "Lorem Ipsum is simply dummy text of the printing.",
          views: 305,
          watchTime: 63,
          subscribers: 263,
          revenue: 5.5,
        },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
  components: {
    TableLayout,
    InformationCircleIcon,
  },
};
</script>

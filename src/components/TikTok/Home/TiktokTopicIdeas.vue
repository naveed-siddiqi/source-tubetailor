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
            <tr>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
            </tr>
            <!-- Table body -->
            <tr class="py-2 rounded-lg">
              <td class="td px-4 text-[13px]">
                Lorem Ipsum is simply dummy text of the printing.
              </td>
              <td class="flex items-center justify-center gap-2 px-4 py-2 td">
                <span
                  class="rounded-full bg-[#EFF4FD] px-3 py-1 text-xs font-semibold"
                  >Games</span
                >
              </td>
              <td class="td px-4 py-2 text-[13px]">High</td>
              <td class="td px-4 py-2 text-[13px]">24.9M</td>
              <td class="px-4 py-2 td">
                <button class="text-left text-[10px] text-[#004EB9] underline">
                  Export to content generator
                </button>
              </td>
            </tr>
            <tr>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
            </tr>
            <tr class="">
              <td class="td px-4 whitespace-nowrap py-2 text-[13px]">
                Lorem Ipsum is simply dummy text of the printing.
              </td>
              <td
                class="flex whitespace-nowrap items-center justify-center gap-2 px-4 py-2 td"
              >
                <span
                  class="rounded-full bg-[#EFF4FD] px-3 py-1 text-xs font-semibold"
                  >Music</span
                >
              </td>
              <td class="td px-4 py-2 text-[13px] whitespace-nowrap">High</td>
              <td class="td px-4 py-2 text-[13px] whitespace-nowrap">24.9M</td>
              <td class="px-4 py-2 rounded-r-lg td whitespace-nowrap">
                <button class="text-left text-[10px] text-[#004EB9] underline">
                  Export to content generator
                </button>
              </td>
            </tr>
            <tr>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
              <td class="py-1"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </TableLayout>
</template>

<style>
.border-color {
  border: 1px solid rgba(134, 142, 156, 0.5);
}
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
.table {
  border-collapse: separate;
  border-spacing: 0 0px;
}
.td {
  border: solid 1px #000;
  border-style: solid none;
}
.td:first-child {
  border-left-style: solid;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.td:last-child {
  border-right-style: solid;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

<script>
import TableLayout from "@/layouts/TableLayout.vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    TableLayout,
    InformationCircleIcon,
  },
};
</script>

<template>
  <div>
    <table-layout>
      <div class="pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 class="text-[20px] font-[800] leading-6 text-gray-900">
          Total uploads: 20 videos (12 shorts | 8 long videos)
        </h3>
        <div class="mt-3 sm:ml-4 sm:mt-0">
          <button
            type="button"
            class="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white rounded-full shadow-sm bg-tiktok focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <div
              class="flex items-center justify-center w-4 h-4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FE4442"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
            <span>Add your account</span>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          class="h-14 w-14 border-2 border-[#ff004f] rounded-full"
          alt=""
        />
        <h1 class="font-semibold underline text-3xl">Nafeh L.</h1>
      </div>
      <!-- stats -->
      <div class="py-6 bg-white">
        <div class="">
          <div class="">
            <dl
              class="grid grid-cols-1 lg:divide-x gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5"
            >
              <div
                class="relative space-y-2"
                v-for="stat in stats"
                :key="stat.id"
              >
                <button v-if="stat.infoIcon" class="absolute top-0 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </button>
                <dt class="text-sm font-medium leading-6 text-black">
                  {{ stat.title }}
                </dt>
                <dt
                  class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                >
                  {{ stat.value }}
                </dt>
                <dt class="text-xs leading-6 text-gray-600">
                  {{ stat.name }}
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </table-layout>
  </div>
</template>

<script setup>
import TableLayout from "@/layouts/TableLayout.vue";
const stats = [
  {
    id: 1,
    title: "Channel Worth",
    name: "Current Worth",
    value: "$120,000",
    infoIcon: true,
  },
  {
    id: 2,
    title: "Views",
    name: "486.4K less than usual",
    value: "1,000,421",
    infoIcon: false,
  },
  {
    id: 3,
    title: "Subscribers",
    name: "653 more than usual",
    value: "82,412",
    infoIcon: false,
  },
  {
    id: 4,
    title: "Life time earnings",
    name: "3k more than usual",
    value: "$21,432",
    infoIcon: false,
  },
  {
    id: 5,
    title: "Niche",
    value: "Business",
    infoIcon: true,
  },
];
</script>

<style lang="scss" scoped></style>

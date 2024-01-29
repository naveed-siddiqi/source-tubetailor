<template>
  <MainLayout>
    <!-- Youtube -->
    <div v-if="store.currentTab === 0" class="">
      <table-layout>
        <div class="pb-5 sm:flex sm:items-center sm:justify-between">
          <h3 class="text-[20px] font-[800] leading-6 text-gray-900">
            Total uploads: {{ overview.total_uploads }} videos
          </h3>

          <div class="mt-3 sm:ml-4 sm:mt-0">
            <button
              type="button"
              class="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white rounded-full shadow-sm bg-youtube focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
              <span @click="youtubeConnect">Add your channel</span>
            </button>
          </div>
        </div>
        <!-- {{ overview }} -->
        <div class="flex items-center gap-3">
          <img
            :src="overview.thumbnail"
            class="h-14 w-14 border-2 border-youtubes rounded-full"
            alt=""
          />
          <h1 class="font-semibold underline text-3xl">
            {{ overview.channel_title }}
          </h1>
        </div>
        <!-- stats -->
        <div class="py-6 bg-white">
          <div class="">
            <div class="">
              <dl
                class="grid grid-cols-1 lg:divide-x gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
              >
                <div class="relative space-y-2">
                  <button class="absolute top-0 right-2">
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
                      ></path>
                    </svg>
                  </button>
                  <dt class="text-sm font-medium leading-6 text-black">
                    Channel Worth
                  </dt>
                  <dt
                    class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                  >
                    {{ overview.channel_worth.worth }}
                  </dt>
                  <dt class="text-xs leading-6 text-gray-600">Current Worth</dt>
                </div>
                <div class="relative space-y-2">
                  <!--v-if-->
                  <dt class="text-sm font-medium leading-6 text-black">
                    Views
                  </dt>
                  <dt
                    class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                  >
                    {{ overview.views }}
                  </dt>
                  <dt class="text-xs leading-6 text-gray-600">
                    486.4K less than usual
                  </dt>
                </div>
                <div class="relative space-y-2">
                  <!--v-if-->
                  <dt class="text-sm font-medium leading-6 text-black">
                    Subscribers
                  </dt>
                  <dt
                    class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                  >
                    {{ overview.subscribers }}
                  </dt>
                  <dt class="text-xs leading-6 text-gray-600">
                    653 more than usual
                  </dt>
                </div>
                <!-- <div class="relative space-y-2">
                  <dt class="text-sm font-medium leading-6 text-black">
                    Life time earnings
                  </dt>
                  <dt
                    class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                  >
                    $21,432
                  </dt>
                  <dt class="text-xs leading-6 text-gray-600">
                    3k more than usual
                  </dt>
                </div> -->
                <div class="relative space-y-2">
                  <button class="absolute top-0 right-2">
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
                      ></path>
                    </svg>
                  </button>
                  <dt class="text-sm font-medium leading-6 text-black">
                    Niche
                  </dt>
                  <dt
                    class="order-first text-3xl font-semibold tracking-tight text-[#FE4442]"
                  >
                    {{ overview.niche }}
                  </dt>
                  <dt class="text-xs leading-6 text-gray-600"></dt>
                </div>
              </dl>
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
      <Analytics />
      <TopicIdeas />
    </div>
    <!-- Instagram -->
    <div class="" v-if="store.currentTab === 1">
      <InstaAddAccount />
      <InstaAnalytics />
      <InstaTopicIdeas />
    </div>

    <!-- TikTok -->
    <div v-if="store.currentTab === 2">
      <AddTiktokAccount />
      <TiktokAnalytics />
      <TiktokTopicIdeas />
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TableLayout from "@/layouts/TableLayout.vue";
import Tabs from "@/components/Tabs.vue";
import Analytics from "../components/Analytics.vue";
import TopicIdeas from "../components/TopicIdeas.vue";
import { useTab } from "@/store/counter";
import InstaAnalytics from "@/components/Instagram/Home/InstaAnalytics.vue";
import InstaTopicIdeas from "@/components/Instagram/Home/InstaTopicIdeas.vue";
import InstaAddAccount from "@/components/Instagram/Home/InstaAddAccount.vue";
import AddTiktokAccount from "../components/TikTok/Home/TiktokAddAccount.vue";
import TiktokAnalytics from "../components/TikTok/Home/TiktokAnalytics.vue";
import TiktokTopicIdeas from "../components/TikTok/Home/TiktokTopicIdeas.vue";
const store = useTab();

// const stats = [
//   {
//     id: 1,
//     title: "Channel Worth",
//     name: "Current Worth",
//     value: "$120,000",
//     infoIcon: true,
//   },
//   {
//     id: 2,
//     title: "Views",
//     name: "486.4K less than usual",
//     value: "1,000,421",
//     infoIcon: false,
//   },
//   {
//     id: 3,
//     title: "Subscribers",
//     name: "653 more than usual",
//     value: "82,412",
//     infoIcon: false,
//   },
//   {
//     id: 4,
//     title: "Life time earnings",
//     name: "3k more than usual",
//     value: "$21,432",
//     infoIcon: false,
//   },
//   {
//     id: 5,
//     title: "Niche",
//     value: "Business",
//     infoIcon: true,
//   },
// ];

// APIs Below

import axios from "axios";
import { ref } from "vue";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://backend.tubetailor.ai/api/";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer 22|5TlSLTbUUXjTgVVnGz1jjVrwk3qa9p4KdSroxVYA37e4c6af`;

async function youtubeConnect() {
  localStorage.setItem(
    "token",
    "22|5TlSLTbUUXjTgVVnGz1jjVrwk3qa9p4KdSroxVYA37e4c6af"
  );
  // Note: Include 'Returned-To' header. Otherwise after youtube channel connect, it will redirect back to home page/domain.
  let { data } = await axios.get("youtube/auth", {
    headers: {
      "Returned-To": window.location.href,
    },
  });
  window.location.href = data.target_url;
}

const overview = ref();
async function youtubeOverview() {
  let { data } = await axios.get("youtube/overview");
  overview.value = data;
}
youtubeOverview();
</script>

<style lang="scss" scoped></style>

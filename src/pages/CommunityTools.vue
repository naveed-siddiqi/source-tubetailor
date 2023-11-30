<template>
  <MainLayout>
    <!-- youtube -->
    <div v-if="store.currentTab === 0" class="py-5">
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <div class="flex-1 w-full p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[16px] font-semibold">Community posts:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[160px]"
            />
          </div>
          <div class="text-[16px]">
            Post a relevant <strong>POLL</strong> after every
            <input
              type="number"
              class="px-4 py-2 mx-2 border rounded-md w-28"
              name=""
              id=""
            />
            days
          </div>
          <div class="text-[16px]">
            Post a relevant <strong>TEXT POST</strong> after every
            <input
              type="number"
              class="px-4 py-2 mx-2 border rounded-md w-28"
              name=""
              id=""
            />
            days
          </div>
          <div class="flex items-center py-2 flex-start">
            <button
              class="px-[40px] py-[6px] rounded-full bg-youtube text-white"
            >
              Save
            </button>
          </div>
        </div>
        <div class="flex-1 w-full p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[16px] font-semibold">Respond to comments:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[200px]"
            />
          </div>
          <div class="space-y-2">
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
              <span class="select-none font-[16px]">Auto replies</span>
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
              <span class="select-none font-[16px]"
                >Auto upvote/ downvote/ like</span
              >
            </label>
          </div>
          <div class="flex items-center pt-14 flex-start">
            <button
              class="px-[40px] py-[6px] rounded-full bg-youtube text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
 
    <!-- Instagram -->
    <div v-if="store.currentTab === 1" class="py-5">
      <div class="grid grid-cols-2">
        <div class="flex-1 w-full p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[16px] font-semibold">Respond to comments:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[200px]"
            />
          </div>
          <div class="space-y-2">
            <label
              class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
            >
              <CheckboxRoot
                v-model="checkboxOne"
                class="flex h-[16px] border w-[16px] items-center justify-center rounded bg-white outline-none"
              >
                <CheckboxIndicator
                  class="flex items-center justify-center w-full h-full text-white rounded bg-insta"
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
              <span class="select-none font-[16px]">Auto replies</span>
            </label>
            <label
              class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
            >
              <CheckboxRoot
                v-model="checkboxOne"
                class="flex h-[16px] border w-[16px] items-center justify-center rounded bg-white outline-none"
              >
                <CheckboxIndicator
                  class="flex items-center justify-center w-full h-full text-white rounded bg-insta"
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
              <span class="select-none font-[16px]"
                >Auto upvote/ downvote/ like</span
              >
            </label>
          </div>
          <div class="flex items-center pt-14 flex-start">
            <button class="px-[40px] py-[6px] rounded-full bg-insta text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Tiktok -->

    <div v-if="store.currentTab === 2" class="py-5">
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <div class="flex-1 w-full p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[16px] font-semibold">Community posts:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[160px]"
            />
          </div>
          <div class="text-[16px]">
            Post a relevant <strong>POLL</strong> after every
            <input
              type="number"
              class="px-4 py-2 mx-2 border rounded-md w-28"
              name=""
              id=""
            />
            days
          </div>
          <div class="text-[16px]">
            Post a relevant <strong>TEXT POST</strong> after every
            <input
              type="number"
              class="px-4 py-2 mx-2 border rounded-md w-28"
              name=""
              id=""
            />
            days
          </div>
          <div class="flex items-center py-2 flex-start">
            <button
              class="px-[40px] py-[6px] rounded-full bg-tiktok text-white"
            >
              Save
            </button>
          </div>
        </div>
        <div class="flex-1 w-full p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[16px] font-semibold">Respond to comments:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[200px]"
            />
          </div>
          <div class="space-y-2">
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
              <span class="select-none font-[16px]">Auto replies</span>
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
              <span class="select-none font-[16px]"
                >Auto upvote/ downvote/ like</span
              >
            </label>
          </div>
          <div class="flex items-center pt-14 flex-start">
            <button
              class="px-[40px] py-[6px] rounded-full bg-tiktok text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import MainLayout from "../layouts/MainLayout.vue";
import Tabs from "@/components/Tabs.vue";
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { useTab } from "@/store/counter";

const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

const store = useTab();
</script>

<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
</style>

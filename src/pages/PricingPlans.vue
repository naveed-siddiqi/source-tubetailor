<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TableLayout from "@/layouts/TableLayout.vue";
//   import Tabs from "@/components/Tabs.vue";
</script>
<template>
  <MainLayout>
    <div class="">
      <div class="flex flex-col items-center justify-center">
        <RadioGroup
          v-model="selectedFrequency"
          class="grid grid-cols-2 gap-x-1 rounded-full p-2 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-300 bg-white"
        >
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption
            as="template"
            v-for="option in frequencies"
            :key="option.value"
            :value="option"
            v-slot="{ checked }"
          >
            <div
              @click="selectFrequency(option)"
              :class="[
                checked
                  ? 'bg-youtube text-xs text-white flex items-center justify-center'
                  : 'text-gray-900',
                'cursor-pointer rounded-full px-2.5 py-1',
              ]"
            >
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
        <p class="text-base font font-normal tracking-wide mt-2">
          Save 37.5% on Yearly plan
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:px-4 font-monto max-w-6xl mx-auto"
    >
      <table-layout class="px-3">
        <div class="flex flex-col justify-between min-w-full py-6">
          <div class="text-center">
            <h1
              class="font-monto text-black font-bold text-2xl leading-5 tracking-wide"
            >
              Basic
            </h1>
            <p class="text-base font font-normal tracking-wide mt-2">
              Kickstart your YouTube success
            </p>
          </div>
          <ul role="list" class="my-10 space-y-6 leading-6 text-gray-600">
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              10 daily video ideas powered by AI
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Keyword research and discovery tools
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Track and learn from competitor channels
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Learn the best time to post for your audience
            </li>
            <li
              class="flex gap-x-3 text-gray-800 text-base font-normal text-gray-800 text-base font-normal"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Dozens of additional features to
            </li>
          </ul>
          <div class="flex flex-col gap-y-4 items-center justify-center mt-3">
            <button
              class="bg-[#00B907] text-white text-sm rounded-3xl px-4 py-0.5 font-semibold"
            >
              FREE
            </button>
            <button
              class="w-full md:w-auto border border-black hover:bg-youtube hover:text-white hover:border-transparent rounded-full px-16 py-3 md:py-4 font-semibold"
            >
              Active
            </button>
          </div>
        </div>
      </table-layout>
      <table-layout>
        <div class="flex flex-col justify-between py-6">
          <div class="text-center">
            <h1
              class="font-monto text-black font-bold text-2xl leading-5 tracking-wide"
            >
              Professional
            </h1>
            <p class="text-base font font-normal tracking-wide mt-2">
              Boost your growth by up to 500%
            </p>
          </div>
          <ul role="list" class="my-10 space-y-6 leading-6 text-gray-600">
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              10 daily video ideas powered by AI
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Keyword research and discovery tools
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Track and learn from competitor channels
            </li>
            <li class="flex gap-x-3 text-gray-800 text-base font-normal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Learn the best time to post for your audience
            </li>
            <li
              class="flex gap-x-3 text-gray-800 text-base font-normal text-gray-800 text-base font-normal"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle cx="11.0463" cy="10.342" r="10.2844" fill="#FE4442" />
                  <path
                    d="M6.04626 10.7066L9.13972 13.8418L16.0463 6.8418"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Dozens of additional features to grow your channel
            </li>
          </ul>
          <div class="flex flex-col gap-y-4 items-center justify-center">
            <button class="text-3xl rounded-3xl px-4 py-0.5 font-semibold">
              $225
            </button>
            <button
              class="w-full md:w-auto bg-youtube hover:bg-white hover:text-black hover:border border-black text-white rounded-full px-16 py-3 md:py-4 font-semibold"
            >
              Upgrade
            </button>
          </div>
        </div>
      </table-layout>
    </div>
  </MainLayout>
</template>

<script>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";

const frequencies = [
  { value: "monthly", label: "Yearly", priceSuffix: "/month" },
  { value: "annually", label: "Monthly", priceSuffix: "/year" },
];
export default {
  data() {
    return {
      selectedFrequency: "monthly", // Set the default value to 'monthly'
      frequencies: [
        { label: "Monthly", value: "monthly" },
        { label: "Annually", value: "annually" },
        // Add more frequency options as needed
      ],
    };
  },
  methods: {
    selectFrequency(option) {
      this.selectedFrequency = option.value;
      // You can perform additional actions here when a frequency is selected
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Mulish:wght@200;300;400;500;600;700;800;900;1000&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@100;300;400;500;700;900&family=Ubuntu:wght@300;400;500;700&display=swap");

.font {
  color: black;
  opacity: 0.5;
}
</style>

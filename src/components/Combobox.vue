<template>
  <Combobox v-model="selected">
    <div class="relative mt-1">
      <div
        class="relative w-full overflow-hidden text-left bg-white cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
      >
        <ComboboxInput
          class="w-full py-3 pl-3 text-sm leading-5 text-gray-900 border rounded-full"
          @change="query = $event.target.value"
          placeholder="Search channel"
        />
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
            v-if="filteredChannels.length === 0 && query !== ''"
            class="relative px-4 py-2 text-gray-700 cursor-default select-none"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="channel in filteredChannels"
            as="template"
            :key="channel.id"
            :value="channel"
            v-slot="{ selected, active }"
          >
            <li
              class="relative flex items-center justify-between py-2 pl-4 pr-4 cursor-default select-none"
              :class="{
                'bg-gray-100 ': active,
                'text-gray-900': !active,
              }"
            >
              <div
                class="flex items-center gap-4 truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                <div>
                  <img
                    :src="channel.img"
                    class="object-cover w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col space-y-2">
                  <span class="text-lg font-semibold"> {{ channel.name }}</span>
                  <span class="text-sm text-gray-600"
                    >{{ channel.subscribers }} Subscribers</span
                  >
                </div>
              </div>
              <button
                @click="addChannels(channel)"
                class="p-2 rounded-full hover:text-white hover:bg-youtube"
              >
                <PlusIcon class="w-5 h-5" />
              </button>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<script setup>
import { ref, computed } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { defineProps } from "vue";

const props = defineProps(["competiters", "addChannels"]);

import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";

const channels = [
  {
    name: "PewDiePie",
    subscribers: 40000,
    views: 45000,
    videos: 10,
    averageSubscribersPerDay: 1000,
    averageVideosPerDay: 1,
    averageDailyViews: 6000,
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    color: "#558333",
  },
  {
    name: "David Beckham",
    subscribers: 10000,
    views: 80000,
    videos: 15,
    averageSubscribersPerDay: 8,
    averageVideosPerDay: 12,
    averageDailyViews: 20,
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    color: "#eb4034",
  },
  {
    name: "The Primeagen",
    subscribers: 18000,
    views: 280,
    videos: 12,
    averageSubscribersPerDay: 9,
    averageVideosPerDay: 11,
    averageDailyViews: 18,
    img: "https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
    color: "#3a34eb",
  },
  {
    name: "The PrimeTime",
    subscribers: 22000,
    views: 400,
    videos: 14,
    averageSubscribersPerDay: 12,
    averageVideosPerDay: 9,
    averageDailyViews: 22,
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
    color: "#eb345b",
  },
];

let selected = ref(channels[0]);
let query = ref("");

let filteredChannels = computed(() =>
  query.value === ""
    ? channels
    : channels.filter((channel) =>
        channel.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
</script>

<template>
  <div>
    <div>
      <div class="relative mt-2">
        <button
          type="button"
          @click="toggleDropdown"
          class="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-md hover:shadow-lg ring-1 ring-inset ring-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span class="flex items-center justify-center w-full truncate">
            <img
              v-if="tabs[current].logo"
              :src="tabs[current].logo"
              alt="Logo"
              class="h-6 w-6"
            />
            <span class="truncate text-black hover:text-black group flex gap-x-3 rounded-md pl-3 py-2 text-[16px] leading-6 font-medium">{{ tabs[current].name }}</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          v-show="isDropdownOpen"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="(tab, index) in tabs"
            :key="tab.name"
            @click="selectTab(index)"
            :id="'listbox-option-' + index"
            role="option"
            class="text-black hover:text-black hover:bg-hover group flex gap-x-3 rounded-md pl-4 py-2 text-[16px] leading-6 font-normal"
          >
            <img v-if="tab.logo" :src="tab.logo" alt="Logo" class="h-6 w-6 mr-2" />
            {{ tab.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTab } from "@/store/counter";

const store = useTab();

const current = ref(store.currentTab);
const isDropdownOpen = ref(false);
const tabs = [
  { name: "Youtube", href: "#", logo: "/src/assets/youtube-icon.svg", current: false },
  { name: "Instagram", href: "#", logo: "/src/assets/instagram.svg", current: false },
  { name: "Tiktok", href: "#", logo: "/src/assets/tiktok-icon.svg", current: true },
];

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectTab = (index) => {
  current.value = index;
  isDropdownOpen.value = false;
  store.setCurrentTab(current.value);
};

onMounted(() => {
  store.setCurrentTab(current.value);
});
</script>
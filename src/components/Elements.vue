<script setup>
import Star from "@/assets/star.png";
</script>

<template>
  <div class="space-y-2">
    <div>
      <input
        class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow outline-none"
        placeholder="Search element"
        type="text"
      />
    </div>
  <div class="overflow-x-auto pb-2 ">
      <div class="flex items-center ga justify-between gap-4">
      
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
    </div>
  </div>
    <div class="px-3 py-2 text-[13px] bg-[#414D61] text-white rounded-lg">
      <h2>Used recently</h2>
    </div>
    <div class="overflow-x-auto pb-2">
      <div class="flex items-center ga justify-between gap-4">
      
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
      <div
        class="px-3 py-2 text-yellow-400 border border-gray-300 rounded-lg shadow min-w-fit"
      >
        <img class="w-14 h-14" :src="Star" alt="" />
      </div>
    </div>
  </div>
  </div>
</template>

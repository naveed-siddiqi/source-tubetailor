<!-- GlobalAlert.vue -->
<template>
    <div v-if="messages.length > 0" class="rounded-md bg-yellow-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <ExclamationTriangleIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">Attention needed</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <ul>
              <li v-for="messageObj in messages" :key="messageObj.id">{{ messageObj.message }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid';
  
  const props = defineProps(['messages']);
  </script>
  
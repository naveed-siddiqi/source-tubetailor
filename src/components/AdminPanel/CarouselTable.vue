<template>
    <div class="px-4 sm:px-6 lg:px-8 w-full">
      <div class="mt-8 flow-root w-full">
        <div class="-mx-4 -my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Date</th>
                  <th scope="col" class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Sales</th>
                  <th scope="col" class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Revenue</th>
                  <th scope="col" class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">New Users</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="person in people" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-left">{{ person.date }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{ person.sales }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{ person.revenue }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{ person.users }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const people = [
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    { date: '12-02-2024', sales: '24', revenue: '$150', users: '+5' },
    // More people...
  ]
  </script>
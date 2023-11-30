<template>
  <MainLayout>
    <!-- Youtube -->
    <div v-if="store.currentTab === 0" class="py-5">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="p-4 space-y-6 bg-white bg-shadow rounded-xl md:col-span-2">
          <div class="flex items-center justify-end gap-2">
            <button
              @click="changeTab(1)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 1 ? 'bg-youtube text-white' : '',
              ]"
            >
              30 Days
            </button>
            <button
              @click="changeTab(2)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 2
                  ? 'bg-youtube text-white border-[#fe4442]'
                  : '',
              ]"
            >
              60 Days
            </button>
            <button
              @click="changeTab(3)"
              :class="[
                'px-3 py-1.5 text-xs border  rounded-full',
                currentTab === 3
                  ? 'bg-youtube text-white border-[#fe4442]'
                  : '',
              ]"
            >
              12 Months
            </button>
          </div>
          <div
            class="flex-col-reverse items-start w-full gap-20 xl:h-96 xl:flex-row xl:flex"
          >
            <div
              class="flex flex-row items-start justify-between w-full overflow-x-auto xl:w-48 h-full gap-4 py-12 text-xs tabs xl:flex-col"
            >
              <button
                @click="setBarTab('Subscribers')"
                :class="[
                  barTab === 'Subscribers' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
              >
                Subscribers
              </button>
              <button
                :class="[
                  barTab === 'Views' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Views')"
                class=""
              >
                Views
              </button>
              <button
                :class="[
                  barTab === 'Videos' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Videos')"
                class=""
              >
                Videos
              </button>
              <button
                :class="[
                  barTab === 'Average Subscribers Per Day'
                    ? 'text-red-500'
                    : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Subscribers Per Day')"
                class=""
              >
                Avg. Subscribers/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Videos Per Day' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Videos Per Day')"
                class=""
              >
                Avg. Videos/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Daily Views' ? 'text-red-500' : '',
                  'whitespace-nowrap',
                ]"
                @click="setBarTab('Average Daily Views')"
                class=""
              >
                Avg. Daily Views
              </button>
            </div>
            <div class="w-full h-full">
              <Bar :data="chartData" :options="options" />
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 py-2">
            <div
              v-for="item in competitors"
              :key="item"
              class="flex flex-col items-center space-y-2"
            >
              <img
                :src="item.img"
                alt=""
                class="object-cover w-8 h-8 rounded-full"
              />

              <span
                :style="{ backgroundColor: item.color }"
                :class="[`text-xs bg-[${item.color}] w-12 rounded-full  h-2`]"
              >
              </span>
            </div>
          </div>
        </div>

        <!-- First Row, Second Column -->
        <div class="p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[20px] font-bold">Add competitors:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[190px]"
            />
          </div>
          <div class="relative">
            <div
              class="flex items-center px-3 py-1 border border-[rgba(134, 142, 156, 0.50)] rounded-full"
            >
              <input
                @input="searchUser"
                v-model="searchTerm"
                type="text"
                class="w-full px-1 py-2 mx-2 outline-none"
                name=""
                placeholder="Search channels"
                id="search-comp"
              />
              <label class="absolute right-3" for="search-comp">
                <MagnifyingGlassIcon class="w-5 h-5" />
              </label>
            </div>
          </div>
          <div class="py-2"></div>
          <div class="space-y-5 h-[400px] overflow-y-auto">
            <label
              v-for="comp in competitorsArray"
              :key="comp"
              @click="addCompetitors(comp)"
              class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
            >
              <CheckboxRoot
                v-model="checkboxOne"
                class="flex h-[20px] border w-[20px] items-center justify-center rounded bg-white outline-none"
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
              <div class="flex items-center gap-2">
                <div>
                  <img
                    :src="comp.img"
                    alt=""
                    class="object-cover w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <h2 class="text-[14px] font-bold">{{ comp.name }}</h2>
                  <span class="text-gray-600 font-[10px]"
                    >{{ comp.subscribers }} Subscribers</span
                  >
                </div>
              </div>
            </label>
          </div>
        </div>

        <!-- Second Row, Full Width -->
        <div
          class="p-4 space-y-4 overflow-x-hidden bg-white bg-shadow rounded-xl md:col-span-3"
        >
          <div class="relative">
            <h2 class="text-[20px] font-bold">Channel Stats:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[160px]"
            />
          </div>
          <div
            class="flex min-w-full overflow-x-scroll items-center w-full gap-4 xl:flex-row"
          >
            <div
              class="flex-1 w-full p-4 border-2 rounded-lg xl:w-full"
              v-for="item in competitorsArray"
              :key="item"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div>
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <div class="py-4 overflow-x-auto scrollbar">
                <div class="w-full min-w-max">
                  <table
                    class="table min-w-full border divide-gray-300 rounded-lg"
                  >
                    <thead class="rounded bg-[#414D61] text-white">
                      <tr>
                        <th
                          scope="col"
                          class="rounded-l-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                        ></th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          7 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          14 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 rounded-r-lg py-3.5 text-left text-sm font-semibold"
                        >
                          28 days
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="border-b even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Views
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="gap-2 px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Subscribers
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="flex-1 w-full p-4 border-2 rounded-lg xl:w-auto">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div>
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <div class="py-4 overflow-x-auto scrollbar">
                <div class="w-full min-w-max">
                  <table
                    class="table min-w-full border divide-gray-300 rounded-lg"
                  >
                    <thead class="rounded bg-[#414D61] text-white">
                      <tr>
                        <th
                          scope="col"
                          class="rounded-l-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                        ></th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          7 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          14 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 rounded-r-lg text-left text-sm font-semibold"
                        >
                          28 days
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Views
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="gap-2 px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Subscribers
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram -->
    <div v-if="store.currentTab === 1" class="py-5">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="p-4 space-y-6 bg-white bg-shadow rounded-xl md:col-span-2">
          <div class="flex items-center justify-end gap-2">
            <button
              @click="changeTab(1)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 1 ? 'bg-insta text-white' : '',
              ]"
            >
              30 Days
            </button>
            <button
              @click="changeTab(2)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 2 ? 'bg-insta text-white border-[#fe4442]' : '',
              ]"
            >
              60 Days
            </button>
            <button
              @click="changeTab(3)"
              :class="[
                'px-3 py-1.5 text-xs border  rounded-full',
                currentTab === 3 ? 'bg-insta text-white border-[#fe4442]' : '',
              ]"
            >
              12 Months
            </button>
          </div>
          <div
            class="flex-col-reverse items-start w-full gap-20 xl:h-96 xl:flex-row xl:flex"
          >
            <div
              class="flex flex-row items-start justify-between w-full overflow-x-auto xl:w-48 h-full gap-4 py-12 text-xs tabs xl:flex-col"
            >
              <button
                @click="setBarTab('Subscribers')"
                :class="[
                  barTab === 'Subscribers' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
              >
                Subscribers
              </button>
              <button
                :class="[
                  barTab === 'Views' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Views')"
                class=""
              >
                Views
              </button>
              <button
                :class="[
                  barTab === 'Videos' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Videos')"
                class=""
              >
                Videos
              </button>
              <button
                :class="[
                  barTab === 'Average Subscribers Per Day'
                    ? 'text-red-500'
                    : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Subscribers Per Day')"
                class=""
              >
                Avg. Subscribers/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Videos Per Day' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Videos Per Day')"
                class=""
              >
                Avg. Videos/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Daily Views' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Daily Views')"
                class=""
              >
                Avg. Daily Views
              </button>
            </div>
            <div class="w-full h-full">
              <Bar :data="chartData" :options="options" />
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 py-2">
            <div
              v-for="item in competitors"
              :key="item"
              class="flex flex-col items-center space-y-2"
            >
              <img
                :src="item.img"
                alt=""
                class="object-cover w-8 h-8 rounded-full"
              />

              <span
                :style="{ backgroundColor: item.color }"
                :class="[`text-xs bg-[${item.color}] w-12 rounded-full  h-2`]"
              >
              </span>
            </div>
          </div>
        </div>

        <!-- First Row, Second Column -->
        <div class="p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[20px] font-bold">Add competitors:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[190px]"
            />
          </div>
          <div class="relative">
            <div
              class="flex items-center px-3 py-1 border border-[rgba(134, 142, 156, 0.50)] rounded-full"
            >
              <input
                @input="searchUser"
                v-model="searchTerm"
                type="text"
                class="w-full px-1 py-2 mx-2 outline-none"
                name=""
                placeholder="Search channels"
                id="search-comp"
              />
              <label class="absolute right-3" for="search-comp">
                <MagnifyingGlassIcon class="w-5 h-5" />
              </label>
            </div>
          </div>
          <div class="py-2"></div>
          <div class="space-y-5 h-[400px] overflow-y-auto">
            <label
              v-for="comp in competitorsArray"
              :key="comp"
              @click="addCompetitors(comp)"
              class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
            >
              <CheckboxRoot
                v-model="checkboxOne"
                class="flex h-[20px] border w-[20px] items-center justify-center rounded bg-white outline-none"
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
              <div class="flex items-center gap-2">
                <div>
                  <img
                    :src="comp.img"
                    alt=""
                    class="object-cover w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <h2 class="text-[14px] font-bold">{{ comp.name }}</h2>
                  <span class="text-gray-600 font-[10px]"
                    >{{ comp.subscribers }} Subscribers</span
                  >
                </div>
              </div>
            </label>
          </div>
        </div>

        <!-- Second Row, Full Width -->
        <div
          class="p-4 space-y-4 overflow-hidden bg-white bg-shadow rounded-xl md:col-span-3"
        >
          <div class="relative">
            <h2 class="text-[20px] font-bold">Channel Stats:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[160px]"
            />
          </div>
          <div
            class="flex items-center w-full gap-4 overflow-x-scroll flex-row"
          >
            <div
              class="flex-1 w-full p-4 border-2 rounded-lg xl:w-auto"
              v-for="item in competitorsArray"
              :key="item"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div>
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <div class="py-4 overflow-x-auto scrollbar">
                <div class="w-full min-w-max">
                  <table
                    class="table min-w-full border divide-gray-300 rounded-lg"
                  >
                    <thead class="rounded bg-[#414D61] text-white">
                      <tr>
                        <th
                          scope="col"
                          class="rounded-l-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                        ></th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          7 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          14 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 rounded-r-lg py-3.5 text-left text-sm font-semibold"
                        >
                          28 days
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="border-b even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Views
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="gap-2 px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Subscribers
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="flex-1 w-full p-4 border-2 rounded-lg xl:w-auto">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div>
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <div class="py-4 overflow-x-auto scrollbar">
                <div class="w-full min-w-max">
                  <table
                    class="table min-w-full border divide-gray-300 rounded-lg"
                  >
                    <thead class="rounded bg-[#414D61] text-white">
                      <tr>
                        <th
                          scope="col"
                          class="rounded-l-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                        ></th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          7 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold"
                        >
                          14 days
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 rounded-r-lg text-left text-sm font-semibold"
                        >
                          28 days
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Views
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="gap-2 px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="even:bg-[#EFF4FD]">
                        <td
                          class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                        >
                          Subscribers
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          1000
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap">
                          0.0
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="inline h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                        <td
                          class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                        >
                          <span>0.0</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-3 w-3 text-[#00B907]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tiktok -->
    <div v-if="store.currentTab === 2" class="py-5">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="p-4 space-y-6 bg-white bg-shadow rounded-xl md:col-span-2">
          <div class="flex items-center justify-end gap-2">
            <button
              @click="changeTab(1)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 1 ? 'bg-tiktok text-white' : '',
              ]"
            >
              30 Days
            </button>
            <button
              @click="changeTab(2)"
              :class="[
                'px-3 py-1.5 text-xs border rounded-full',
                currentTab === 2 ? 'bg-tiktok text-white border-[#fe4442]' : '',
              ]"
            >
              60 Days
            </button>
            <button
              @click="changeTab(3)"
              :class="[
                'px-3 py-1.5 text-xs border  rounded-full',
                currentTab === 3 ? 'bg-tiktok text-white border-[#fe4442]' : '',
              ]"
            >
              12 Months
            </button>
          </div>
          <div
            class="flex-col-reverse items-start w-full gap-20 xl:h-96 xl:flex-row xl:flex"
          >
            <div
              class="flex flex-row items-start justify-between w-full overflow-x-auto xl:w-48 h-full gap-4 py-12 text-xs tabs xl:flex-col"
            >
              <button
                @click="setBarTab('Subscribers')"
                :class="[
                  barTab === 'Subscribers' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
              >
                Subscribers
              </button>
              <button
                :class="[
                  barTab === 'Views' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Views')"
                class=""
              >
                Views
              </button>
              <button
                :class="[
                  barTab === 'Videos' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Videos')"
                class=""
              >
                Videos
              </button>
              <button
                :class="[
                  barTab === 'Average Subscribers Per Day'
                    ? 'text-red-500'
                    : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Subscribers Per Day')"
                class=""
              >
                Avg. Subscribers/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Videos Per Day' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Videos Per Day')"
                class=""
              >
                Avg. Videos/Day
              </button>
              <button
                :class="[
                  barTab === 'Average Daily Views' ? 'text-red-500' : '',
                  'whitespace-nowrap xl:whitespace-normal',
                ]"
                @click="setBarTab('Average Daily Views')"
                class=""
              >
                Avg. Daily Views
              </button>
            </div>
            <div class="w-full h-full">
              <Bar :data="chartData" :options="options" />
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 py-2">
            <div
              v-for="item in competitors"
              :key="item"
              class="flex flex-col items-center space-y-2"
            >
              <img
                :src="item.img"
                alt=""
                class="object-cover w-8 h-8 rounded-full"
              />

              <span
                :style="{ backgroundColor: item.color }"
                :class="[`text-xs bg-[${item.color}] w-12 rounded-full  h-2`]"
              >
              </span>
            </div>
          </div>
        </div>

        <!-- First Row, Second Column -->
        <div class="p-4 space-y-4 bg-white bg-shadow rounded-xl">
          <div class="relative">
            <h2 class="text-[20px] font-bold">Add competitors:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[190px]"
            />
          </div>
          <div class="relative">
            <Combobox
              :addChannels="addChannels"
              :competiters="competitorsArray"
            />
          </div>
          <div class="py-2"></div>
          <div class="space-y-5 h-[400px] overflow-y-auto">
            <label
              v-for="comp in competitorsArray"
              :key="comp"
              @click="addCompetitors(comp)"
              class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
            >
              <CheckboxRoot
                v-model="checkboxOne"
                class="flex h-[20px] border w-[20px] items-center justify-center rounded bg-white outline-none"
              >
                <CheckboxIndicator
                  class="flex items-center justify-center w-full h-full text-white rounded bg-tiktok"
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
              <div class="flex items-center gap-2">
                <div>
                  <img
                    :src="comp.img"
                    alt=""
                    class="object-cover w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <h2 class="text-[14px] font-bold">{{ comp.name }}</h2>
                  <span class="text-gray-600 font-[10px]"
                    >{{ comp.subscribers }} Subscribers</span
                  >
                </div>
              </div>
            </label>
          </div>
        </div>

        <!-- Second Row, Full Width -->
        <div
          class="p-4 space-y-4 bg-white bg-shadow overflow-hidden rounded-xl md:col-span-3"
        >
          <div class="relative">
            <h2 class="text-[20px] font-bold">Channel Stats:</h2>
            <InformationCircleIcon
              class="absolute top-0 w-5 h-5 text-black left-[160px]"
            />
          </div>
          <div
            class="flex overflow-x-scroll overflow-y-hidden max-h-[400px] gap-4"
          >
            <div
              v-for="item in competitorsArray"
              :key="item"
              class="flex-1 p-4 border-2 rounded-lg min-w-[800px] shrink-0"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div class="py-4">
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <hr />
              <div class="py-4">
                <h2 class="text-xl font-semibold">Top Posts</h2>
                <div v-for="post in topPosts" class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="py-4">
                        <img class="rounded-lg h-14" :src="post.img" alt="" />
                      </div>
                      <div class="space-y-2">
                        <p>{{ post.title }}</p>
                        <div class="flex items-center gap-12">
                          <h2 class="text-sm font-semibold">
                            <span class="font-medium text-gray-600">Likes</span>
                            {{ post.likes }}
                          </h2>
                          <h2 class="text-sm font-semibold">
                            <span class="font-medium text-gray-600"
                              >Comments</span
                            >
                            {{ post.comments }}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="text-sm">
                        Type:
                        <span class="font-medium text-gray-600">{{
                          post.type
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <h2 class="text-xl font-semibold">Most used Hashtags</h2>
                <div
                  class="flex flex-wrap gap-2 p-4 mt-4 border-2 rounded-lg justify-stretch"
                >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                </div>
              </div>
            </div>
            <div class="flex-1 w-full p-4 border-2 rounded-lg xl:w-auto">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                  <div>
                    <h2 class="text-[20px] font-bold">Sassy Kitchen</h2>
                    <span class="text-gray-600 font-[16px]"
                      >133 Subscribers</span
                    >
                  </div>
                </div>
                <div class="py-4">
                  <h2 class="text-[20px] font-bold">0 avg views/day</h2>
                  <span class="text-gray-600 font-[16px]">43 videos</span>
                </div>
              </div>
              <hr />
              <div class="py-4">
                <h2 class="text-xl font-semibold">Top Posts</h2>
                <div v-for="post in topPosts" class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="py-4">
                        <img class="rounded-lg h-14" :src="post.img" alt="" />
                      </div>
                      <div class="space-y-2">
                        <p>{{ post.title }}</p>
                        <div class="flex items-center gap-12">
                          <h2 class="text-sm font-semibold">
                            <span class="font-medium text-gray-600">Likes</span>
                            {{ post.likes }}
                          </h2>
                          <h2 class="text-sm font-semibold">
                            <span class="font-medium text-gray-600"
                              >Comments</span
                            >
                            {{ post.comments }}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="text-sm">
                        <span class="font-semibold text-black text-medium"
                          >Type: {{ "  " }}
                        </span>
                        <span class="font-medium text-gray-600">{{
                          post.type
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <h2 class="text-xl font-semibold">Most used Hashtags</h2>
                <div
                  class="flex flex-wrap gap-2 p-4 mt-4 border-2 rounded-lg justify-stretch"
                >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                  <span
                    class="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full"
                    >foodadevnture</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import uniqolor from "uniqolor";
import Combobox from "@/components/Combobox.vue";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Bar } from "vue-chartjs";
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { useTab } from "@/store/counter";
console.log("====================================");

const store = useTab();
console.log("====================================");

const competitorsArray = ref([
  {
    name: "Nafeh H.",
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
    name: "John Doe",
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
    name: "Alice Smith",
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
    name: "David Johnson",
    subscribers: 22000,
    views: 400,
    videos: 14,
    averageSubscribersPerDay: 12,
    averageVideosPerDay: 9,
    averageDailyViews: 22,
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
    color: "#eb345b",
  },
]);
const reactiveData = ref({
  datasets: [],
});
// Add colors for other objects

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const barTab = ref("Subscribers");

const setBarTab = (text) => {
  barTab.value = text;
};
const competitors = ref([]);

const chartData = computed(() => {
  if (barTab.value === "Subscribers") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Subscribers",
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.1,

          colors: "#FF5733",
          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),
          data: competitors.value.map((competitor) => competitor.subscribers),
        },
      ],
    };
  } else if (barTab.value === "Views") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Views",
          borderColor: "rgb(75, 155, 200)",
          fill: false,
          tension: 0.1,

          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),

          data: competitors.value.map((competitor) => competitor.views),
        },
      ],
    };
  } else if (barTab.value === "Videos") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Videos",
          borderColor: "rgb(75, 155, 200)",
          fill: false,
          tension: 0.1,

          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),

          data: competitors.value.map((competitor) => competitor.videos),
        },
      ],
    };
  } else if (barTab.value === "Average Subscribers Per Day") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Average Subscribers Per Day",
          borderColor: "rgb(75, 155, 200)",
          fill: false,
          tension: 0.1,

          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),

          data: competitors.value.map(
            (competitor) => competitor.averageSubscribersPerDay
          ),
        },
      ],
    };
  } else if (barTab.value === "Average Videos Per Day") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Average Videos Per Day",
          borderColor: "rgb(75, 155, 200)",
          fill: false,
          tension: 0.1,

          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),

          data: competitors.value.map(
            (competitor) => competitor.averageVideosPerDay
          ),
        },
      ],
    };
  } else if (barTab.value === "Average Daily Views") {
    return {
      labels: competitors.value.map((competitor) => competitor.name),
      datasets: [
        {
          label: "Average Daily Views",
          borderColor: "rgb(75, 155, 200)",
          fill: false,
          tension: 0.1,

          backgroundColor: competitors.value.map(
            (competitor) => competitor.color
          ),

          data: competitors.value.map(
            (competitor) => competitor.averageDailyViews
          ),
        },
      ],
    };
  }
});

const addCompetitors = (competitor) => {
  if (competitors.value.includes(competitor)) {
    //if exist remove it when click again
    const index = competitors.value.indexOf(competitor);
    if (index > -1) {
      competitors.value.splice(index, 1);
    }
  } else {
    competitors.value.push(competitor);
  }
};

function addChannels(channel) {
  // Check if the new channel is already in the array by comparing channel names
  competitorsArray.value.push(channel);
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        maxBarThickness: 100,
      },
    ],
  },
  barPercentage: competitors.value.length <= 3 ? 0.5 : 1,
};

const searchTerm = ref("");
const topPosts = [
  {
    id: 1,
    title: "Here comes the title of the post",
    likes: 150,
    comments: 21,
    type: "Image",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRQYGBgaGBkaGhsbHBsbGhoYGxkbGxkaGhobIS0kGx0qHxgZJTclKy4zNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHTMhIyEzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxMzMzMzMxMzMzM//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABNEAACAQIEAwMIBQkFBgYDAQABAhEAAwQSITEFQVEiYXEGEzJSgZGhsUJywdHwBxQjJDOCkrLSU2JzwuE0Q1Sz0/ElNUSTosMWlOMV/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwACAwAAAAAAAAAAARECEiExA0FRYfD/2gAMAwEAAhEDEQA/AMkiEAyMpGsHnEzGsVOcw9GD17+fjXrEGdARJPeJncb+2vTa07DTyMx0EQees71wdluB4hctmJlZ9E7Edx5GtHhMYlz0TB5qd/Z1rLWHiQwI01EfZ0qwcipiI2nlp+PZWtSzWsdAaFe0V7xS7A8ZygLdk8s0a90jn408RwwBBBB2I2qsYBI58uv9X31JWqy9ajtAxVEd3x/GlBarVaGodR3fGrVXu+NUWq1WKaqVT0+NTVT0oLlNSBqCqelTVT0rQtDVNTVaoelWBD0oiamrA1VhT0qYQ9KD1jqvif5TVwaqGUyunM/ymrQp6GgsDVMPVYU9DUgp6GgmHqYeqwp6Guyt0NBcHr3PVEN0NdDdDQEecrzz1UHN0NVMW6GgKOJFVvi4oK4x6GhLrnoamg58cBzk/j4UM+Knc6fE/cKVu5B1qSNU0GPeJ7h0qsdem5Ow7yeVLuI8XtWdGJZ+SL6W3P1R41muOcRuXLhtloQRCDbxb1j4+yKDVvxRJi32j630fZ18dvGjMHgLlztHsj1m007huflS3yJsq+ckAlQmUnWJzTHfoKe8TZ49NtSB7zWhN/MWdznfv19y7ChbnFLhMhBHfvVdjDgtlAlonviYkk6D8aUZ+Y/V9xPxkfKmI+eFVB0bLyO5jv6jfvrkUgiTvAzAyJ0H4kT4VODqGj1TEHVTvO/hXtq3BLK52ED2gnUeB5VxdnPbnUDOCB4iFAOgMxz0moJ9KDpI08N9eR91TOo2y+HMHnH3RXG28EkBxtp6XIHvOhnWRQRKzv191W4TENa1QyD7j4jrUVUMDBGnsYRuRy6afCqHJzZd45c9pke80D21xi3cWJytpKn7Dzq7z6+sKy9hBnnv066/PSmiGtsU3W8vrCpreX1hStatWiGi319YVNb6+sKVrViigareX1hU1vL6wpWtTWqGy3l9YVMXl9YUrBqV3FBAAynaZ9vuFNDVb6+sKmt5fWFK7LhxmUEaSQY00B5eNWggGDv0ppg25iAGXWdTry2NEC8ObR40lvqGyrnKSTDCNNDGhom9iFzaBcoAHZOukCWWSZ2kjrsKmrhoL6+uKkL6+uKW2iG9Eg+HdoatCVdTB/n19YVRcxgG7welCF50XXkTyH3nu+VQw2BRdWzO5GrE7/DQd1NMNbWJBGrRUjfHrig31M+Hw2qBFTQa18evVT3x69CkVW4potuXx64oLEX19cV5cFL8RQUY3EoN3G450lxnH3Y5LUoNi59I7eiPojXffwq7HikwWGHifkKsRXaTSTqS6yTqSSgmTzNGcbSLqnqo+z76HOx7nt/JRTbyitfsG6oPkPurQ1/5NMMH8/PJbfxL098osIFQED6S/MUv/JSv+0fVt/O5Wj8q0/RfvL/MKRGe4en6dv8ADH89MLia0Nw5P1h/8Mfz0ffXWqPlT24OZD6UsQdhLHYjfY8q4OBGmkL3AkqM2o5z1q5AMrPlgIBG4EF+o33NdaSYg6L11kEqOQrg7PCw27pkjmyyPdVBQqoLDL9Ke+Y69wq17eo0J5Eie4D7tetTgDUkxGs6xErHf1oK3ho2O4YjRg2xPfsNTNCgEglO1AmGgESY0M66T7tqJNuM0gGNyCN+ZMadOlSJGSJEkzrocs6a+/StMgFuZnUwQY1nrv8AbTFKEUANqW1JIU8uutGJSJVyVatVJVq1UTWrFqC1YooJrU1qtNTA6TRKYdu73n7qo9Wp2zBBgHuOo9xqS4V+78eypjDMN4/HsoKrWFtqScoYspWCJVQTJIB+keveauCDfKPcK8OlSVx1FMNSW2vqj3CvRhkmciyecCffvUlIqvH4pbVs3GBIHIb/ABphqpsEc5ZLjgkjsyGUgdxBPtmr8TgUu2/N3JjWYJUgkRIj291ejzx/9I/8dn+urMt+I/NXH79n+umGuwN9XBCqVCHLBEbDpyooLXiYO4pLi2Sx13AMxp9KJ91covf8M/8AHa/rpIWpZa7JUlW7/wAM/wDFa/rq/CjziBwCJnQxIgkHbTlTDQxSqnSmv5v3VW+GphpJdSluKFaK9YpTjLVMGYxopPHbHt+Qp5xFYpJ9P3/KiK32f69r5rWh8oU/QYVuoA9yn7qz130X+tb+YrV8ZtzgsM3Rh8mFWI1f5KBrf+rb+dytL5Wj9D+8v8wrOfkrEG/9W383rS+Vv7H95f5hWoEfDl/WX/w/81H317VCcOH60/8Ah/5qNxS9o1R8us28hyh9tNiJ32idPHvrrhIaIBOxEAkjQ+kuu0GZ50Xhktlkzhu0Tqp2MwIBnnVV2wjHRmXbRlmIAG4jp0rjjsoS4okkHUSQCNIPSO7ma9v3AwAV+8hoA3Eatp8edXXrJJBDI8AelIIAUA6MIipjhxzFTbDK0wU1hQxIjKYG0a0xKAZII7JXUSdxJifH31W40MwZMakDTxnpU8wAYw6EHx9IGPVIHZ769uWzlgZGVpbXsxrrrpHPSaKCS3BUa6E7/ZTBFoRFOcHKwnUmZWY5f9ztTBFpGK9VatVa5Vq5RVxEVWrVSvVWrlWqKcOP0jfVHzptaFJ7z5GY9yfFjRuGxYNWIaotTuJoPEVTZvUQzej9YVcGd4razXbadSfkTWb4txa1auNbOHUwdxn25fTFarijZcRZJ2lv5TWR43hbhxLsMMtxdpZsux12YfKsZN9tbc9PLGItXrdxlshCgUgy8ybltTu7CIc8q2flUn6u3iBWRw1oi1eJsCyCqaBswP6ezrMmOkd1bfytX9WP11+dXme6lvppUWpqtRuMQpI5An4UpTG3ATNaxk6d1WMzKuY5RJAljsBO57q8wOKS6ue2cyzGxGsAxr3EUqxeBXE2mR0ZiNUZcue25EZ0LsADB112obyexQsgWmt317ZUm4oXMxBJeQxAQBFG+7jcsKX6mtUiUt4Xb/Rr+9/Mab2l/HtpTwbFW2UWg4NxEDsnMKzNlPw+XWriivN1U6UYVqm4tQLL6UoxyU9vLSfHrvTFYzi+lIVbt++nfHnis8jjPE8iflWRbeHZueKfZW2xaTwy0ejj+YisVcHZufWt/ZW5CzwtPrj/AJlWJWi/JgNb/wBW387laHyu/Y/vL/MKQ/k1Gt76tv5vT/ys/Yn6y/zCtBRw0frT/UH81ML41oDhv+1P9QfOmV8dqqPna2bmWLdwEkQoDQx7czBjkKGu27q63EJAOh07RZl2yak0XayhwBPZaOXIzNUcVdTcCuWJRjsBsQpPPfSuVdJqpLMluw6jKYkMOQG7DxNXJatjtFHIKhNSCJBDAk6dKouiIAuEjJzEaHUDQ9GA99GHA3Qpy3oAEQC8aDMZjlAPvpFoLEX2EqHeW1gyAMxGkSZ58qHe6WGnm2gBTKhdD0MCBE86aIztL27iMUzQSNQrQFjOvjz0qk4Rk0Fu2ZAM6REzJ16ZvjRChbbZlm2q7glXzCY5iSdfGj0WqLjjOJRFaSey3LtbDMfCiUcVZGasVasVaFxGFuO6Ml3Io9JcoObrr4Hw5xUcd5x+zYuIHU9oHXkDqB3EaEfSnkK0hioq5FoTh6Xcv6UrmJnsbAEDs67wZE0ei0xNJPKKy7W3W2rM36MwskwH12pFYw+KB/Y3Tp6rda2DuxvZMxCi2XgZZJBHNgetXqrf3/fb/ooYxwTGTpaxIGu3nI37qa8BtYj85tF7eJChzJc3MgGVvSDGN4+FP/OMOT+9P+nXLimkAZhqu5QiC6qRog9brTTBWP4Wl0gsWBG0R9oqscDn/wBRiP8A3I+ygm4jea89tXVFTomYnUADU7kkVeLuK5O51I0w8jQwdQ0Hapc341N/le/kyjiHvYh1kHK1wkGDIkEdas8sU/VT9dP5qGW9iwRN0pJUS+Ggdp1QfT2zOo9tVcRxT3eGC5cILm5BgQOzcKjTwFWZ+kutvdt9lvqn5Vn8cuhI9Ygcp05fjlWhx7xauHaLbn3KTXzzEYxghlp1JkRufEitMtpw26ijTqVmenhWa8pr6KzftLqMNVe6uS2AurQwztqD9I6+AhVh7zn0XY9dhrzipKtvMPOZWaIGZhoSTrt30s1KbYnysxWW2LSWsot57jt5wZYYLlEiJOZCNSe1BGxIOA4/5u41y4i4dyVtsxJPnLVou7LZzrkLMxCZp2K6CCwPbALcw6BQXAt3ItgqtpjmlQxJBJlUgwdVHoik9jiN3zb2xhmu2TeKZbmRk7bQ6Ip1BDloYNEtrsI5+99q+k4fGI6W2YqjXBKKWEtoWIWdW7IJ22rs6tOUgwSpjkwMEeINYDFYTEW2tMHR3s5AhcNNvKXfLmEhhkfKWOrSOk0ow3GMVkuE3AA9wXcyh9WL7iAQEgyeeiGN6s69e4mvpBdWUOrAqwBDAyCDsQelZ/E41Wto/ol0V8p9IBgNx7YrLY3iYt2kttcbOgtoi2yRbtm22Z3ddDmJVgBrGUydYpfhrly6166zdkt+kygANC+lpoNNYXmal7kTyDeUONlyqzBkTGgI3BnxpNgbcPOpkHU6fbRbkvDlW6HUan6JKnnHMVG2O37/ALKbrc9inHZf66fMVuMOZ4V4OP51rEX/AELn17fzFbPCH/wxvrr/ADrV5K1P5N9731bfzenXlbdHmsnM9r2Kyj/N8KSfk6MG99W34n09q98p8Wz3FttayMUOXtqXyFhmLqDG40Azag67ip314s24I4aR+dvr9D7f9R76bX11r52uJvYa5dAcImSFKgBskiGU7hiOzvu3hW84XlazbZCzKVBDGZPUnvmaxx+XfsxJ1rDXbF0XE9Fv7RlCgAZzMn6oFVvhWJHZRjm7RyozEdkAzEkb1TYw6McpdVzEahWMdrnIHSjEw1pDpcLM3ZEJA3Uknta/jpW3oz/YrfDPoWtqJB3VANtJ6baVM3boGyQVg/s9WzGc2upyzV1sW3tlWZtY1CidNYGp91DYtLVuVUuToZJUeyMum80MU57i5gq21zBgQPNqSN15jqa9zsUMsgO0Zh6MjeD0zVeEQQ/m3Yid5iRGui86FxGHZVJ811PaYgQDGpJA2JNEuFjW1z9rLnHqmdOc6waNsKKVsrF8+RVE7hp3BOmp5xRid7VYxVXGsOEVr/nHVlAAAYBRy7K5TLGY6mYkChMNxQyxtg3rjrnU5AikdmLcqZzBQTr11pbxBicSfO3MqKvZcJm6NlUldH3O55CveE4ZgnnUsAuLihASylleArErCrodGUkGSIqo1j4421m4hJhm7MAAAE9oltNjrVeA4/buC3mRkN1mVAYM5QCWJB0EEe+lj3sTeeGCCxJWWYpbcmLcEjtv2iYByhgO+svxLHs17KlwNkZgpRcokyCV3bLEDUnnG9UfQcfIuXSDlIwrmdo1Gs1ZwTFhVCtcLA7GQazuH4lcvLcTEIbbvhnRXZWVDzDPp2Nt9p6TSrDeT7QIxmFG+nnT/TSJX1I3rR3fL3nSh7yJoVcN2k2IP+8SvnN3gN1tDjcMw03vNHuy068mOCtZv5jftXBkUQjkmfPWjMEDQRv30xdaHA2pxGIPR7Y/+Y+6n1/Fm1YzKubtMNNCCbhjU6bE0r4Yn6bFfXtfzUTicJijbJtFCTdY5SwAyB9JBBzaAmNKnP2r18HcTctbtkggk25BEH/asPWbv/8Ak6/4rf8APan92672rfnAQ4NvMCpWD+dYbadxSHEf+Sj/ABX/AOe1L9P0+gYxJtONpRxPTsmvnmLwByEEvC3DMSxj11iSw8K+j4uyz23RSAzI6qTsGZSAT3Saxn/4jjtvP2Y5dq5/RW2as4FwoANNy5q5GVm0gAaiOs86U8Z8n7i3s4LssBhBEmCJXbfXrypwvkrj+V+yP3rn9FFp5O47IoN61mDkt2njLGw7E0BPkrw8NhbJhh2To2+jtv7qs4Pw9DYTsjRnI7iHcT86dcEwz27K27rBnUHMQSQSWJEEgHYigOCN+rp9a5/zHqKDxmBEHv3rH8SwwQqEDQmgC9nTkoyxpoNK32KUmkF7h5ZgY50xGI4hw+VzXEKwrOFMTcQkFhmUQMsEACfS3kzVT4NRbAsG4qm721UAlQ9shO00mCyagjYk9x17+Tqls15muIdAo7GUZp3HpRyBpdisCQ2UBsiI75mg7ZgiBgBsSWM66gTvXnzry345yXyZfi1oTnKmQAgYhRIA+hlE5J2n/Up0Ha9/2VqfKcajxrLoO17/AJrXTMdZBGJH6N/rJ9larCv/AOHEf30/nWsrif2b/WT5intq5GCy/wB9PmKsKe8PxVyxbLowVjDLIntAFYI+q7adCTVWL4kbot2lAsFjL5dXZwYBLsJcGDEEDXbaFKOy2zcCqFBCMzAlBnDEFl1B1SAxGh6TVljCZi+dXK5Ehogo8hFXWYaDmHIgHevL+S9XqzXDq3cNXwa51su5MEtLEFiQNBOx3bnOlarh3DsPctI5shSV1UlhBBIIieorH4bFm2TnUXvNuw864ZAxU5gB2pZwdgG100M15xHivnHzsokgbx0/v6/6zWecluksgyzatFmEGUBESSSQTEgbamrHZVAVbJnQgkM+pAJiZ/AqvB3rnZYuT+8SQJ5gd3KrLdg5WY3NQWYjXX0YInvr1vYM/OmIChF0EyMnpRJ6xE1B71y3ndmWFcQJloJMCAAPjQKEZTlBJAECdCDAMgCefXnUHdyuqgajNmgGPBzrrzFXTx9oYvFTux1nYAbQTqSedV8UEW8qy2ZFzZ2EAmAQYjWDNSXM7hfOCCeQMTBOkwOW9D4jCplZmYkAnWYECQSY2FZKRuj5kXQAdDJJIJ1PPnTTDWKAwr6iMsc4ncbb7703suK1y517e4bbuZfOKDl27tQTHjAHhPWvbwHYVQAFfKgEAZlBJMdAQE9rd1W3cRCwvpHQd3VvYNfGBzrrdpFZB/d9vpIKupgxsDmtm2CVBUrIgkSInXn30x4bwxbahUUAeAHs05VHD3VGnSiMXcZrbrabK5U5T/e3A7piPbXLv8mOvPGoYrghuM+ZQyPaa2wzFDlbeCFMUpX8nuFXXzLdf9of/p1ThsU11CQzHMCYLahvCdu7el+JxJt3EG486hBmTGadO7SfbWPOybGvGX1TvDeSOFXRLIJ6G8xO/ek0wscBVIyWlQiBm84WOXOrERkE6oKouYvzmhGvjBjqI+yhDb69owN5JI8TzrpzbZ7Y6klHnBXEuXSrWT5wglXeCAJiRBobEcNvak/ma8yW1+JFU4lVW07AAaAfxMBQ0ZUhfTbKJ6Zjv4xJrpOIx50SmEvKRFzAgyDos6qQymANYIB9lMrvk7cbhwwyOjvmLZjKqczl+k842obBrlC6Ry5Uy4px5bFkEGTl0q+MieWjnx+NRSzYbDqqiSxxLAADckmzoKrXjeI383g46/nn/wDKsBj/ACnuXMLiLbH9omQD67BT8CaTWwoSWUGBsTppp7Y10qo+vLxbFET5nCx1/O9Pf5qp4biuJuGEs4VyBJC4otA2nS1Xx/Aoss7ZS06AgAhddQOg193gKb8Vxr2ktm2zoWcyykg5FWSARvJce4UNfUvznG/8LZ//AGG/6Ne8LwrW7Ko8ZhmJykkAs7NAJAmM3SvmnCuPYpssYh9SBBcmJMAdqt7wt7hnPcZyBrMaHaNOdUecS4kErHeUHHLhRFt3CpL6kGDA5SPH4VoOM4PNvQGA4PbLDMgYTz1qDuH3GNssWYkFd2Y7gzoT1FF4vW256hvitNMPgrYzgIAM8RrtkU/Mk+2luNICuo21A8MtX9DFeUvL8cqzFv0vf9laTyheVXwHyrN2jr7/ALK51RGJ/Z3PFP8ALTMmML7UPxFLsQP0V7937KZpaL2AgKgtkALGF9JTqeQqRWw8geH28TaxFq6pZCLR0JBkG5BBFNOPcIXD27WUks19i1w6OxZSRJ/dG2mnfSLyZv4jDpNtsOM2jTmJbKSB2gpHU786dPirt1ADZBAfzn6NsxLQZOpJ2NW8y3Wc96P4hwO06eduvdYhGCQUUWgRJKQAd1BMkz30DwPyXR7edwJZiRJbUQNffNHvxpMmS9YuIIggjQ+IYAGiLHG7GUdpv4P9al/HzfdS8y1h/PLbWRmZmJG4QCNSec9K5MQxByqCpYgtGaBr2SWkDv22qV7DOSYtMFBOXsjrvnfc6bg1zwxzF50XkSScgDGTA5HXWj0IJgmzTmUANBgkwNxECI7prnw6KFEO5MSV7KgZjPInkRM0bhHzzktyoaNWnXv1Ck7aUPjWMfpbmmvZX0QZmBsvTUT8Kh/SNhM22RNfFh1AOp3jciqMZb7LIozDKQxPZGpM8+h60Th7MhcgjUsc2p+MaaDYc6o4szohls2XYTuCDJHdB6Cis9cdFuAKAN9Ptn/vRaXhWXOMLXMxiSeXLSi/zrSJ1OmnxPuprnZ7M7vF7aOoeQHOVXOiKs6lm3E76A6BaeWL2CJBbH2JHPOflHcKyGIxRKxsJXT2ihoEnQb9B0FDW14pxzB2lmxfGJuEqBbQNJHMhoI01O1NeBcYw10qrtcR2gZQvotsQxPMHurD+TuMKXgn0S0x35Go7yesXBeZzauZfOMQ3m3yxnJmYgiKxOOer7avdnPppuK4G3YusgY7ZgzE6o4MFo0JzZhMfRHSknErgOIsoNcxdmE7QjHfvMbdO+nPGbN+66XLYQILZXO5kmGbLlRdW1LRJUSDrpTLD4bCYdVttYDu3Zu3ihdh2dWzqOws6ZU2+JvhksPL5SFLhEHNtyOvuNHpicw3X3UyxfBcNIPmxBgL22QEz6TS4bLqNBJMjaQTBsAHVQMGBDkMbT9vJJAILPDmIOpNdeeZI59W2lONuRZdSI1SP41OncY9hB7pFw1+YPUb/dXnGcG6u9pLmdB2mDo3nLayuQ7AMdeg1RhByzRWG4BZCKWuXXlQRFyFI7oUVvWMMMFiEBkmT1+wdBUePYa2wkop7MjQVSnBcL6j/wDuXPvq2y+Fk2TbvCHyasW7RXNAMkgRrrG9NMfL0ctcZCezmOkDkdB8KZq8dmZWR8fCK2t/8n+GdXOGu3EukHKtwqyM24B7IIk6TPPnSLg/kiLy9u/cUiQVVVUqdiDmmCDI9lZVXgH7WkwCeY2DARtHPrXcbANy0jdlSGk9RKjfX1af2fycWBH63dB8bfWfVo/Ffk/t3SpbGPmVcuyZfSJnKBvrrryrQz3k4ga5rACfRI0A7us7TWwwflRaN7zWUhJyC4IILiS2nqgyPYaSXPIPGWgxw+It3pUjK0227oMsJ91KOH8IxNu7bR8PeGRe0fNuVzaT2gMp3OoNQa3yu4uMNbFwI10MYhIBA6meW2070lseW+FWwj50F05sydoMIBYDXsk6BQRGpo/ypwzMtiVIjPuCN8nWs3wvBw6GAewh1AO+br4U0TwX5SEUjPafVmzk3ldSGYkQpjJlkDTcDUHcN8BxhMVba6iOikwA4AJ03EEgjvppj7aZH/RpPmLn0V307qCxzk3HUAknLAG530AqjG8ZeUT6q/KkSHX3/ZX27DeRWHu2lF/DqrZR6L3QRp1z18l8quF/mmMu2cpVAS1uSTmtsAVIY78x4qRWMVTe/ZX/AAHyFXYxv1T2J81oXzgNu8Oo/wAorsXdnCD9z5rRWv4E/wCr2vA/5qPw9wiNeSfEGaVeTz/q1r6r/NqYIdR+58mrFWD04rcVTDtrrv1XN/lqV3ixnVLZOupRSdzzilWbs/u//W1e3H19p+Zq6YuPZX9JcJIIYhSWY6qN5gH26UNZYXJVbTEAiGLTG2h2XadPCrMO6AhLdsuWEEvr9IEwo0AkA6ztRb4Y9nzj6Bj2FmdQI1IAXUHTvo08t2Qx1uaiIAlhI7R1mPbXXbjMV9FFnRm1bU6QNwSByAriGA/RhVA+k0GeWhO/PYV7guGecvSQxJhp1gaE7b8hv61MXQlsozMVDGZOYmPSMk5RoNCAJNC8bhrZFtC2jKImZUHNJ2iRE/Gtfb4GEDl2kEeiNIA5AjYeHdSDyqxS27bhAAMsfjr7alieX8PlV1GR1nqduXSTzopCN5PTw/GlBXbpJrxLzCfH7APsqsGNxtPaPmKgH38fsFAviGjbp865L7mdB11IFAywWKNu55yJyMN+8RWj4VxS5indblxlRxHUgswt2wddFzurHuBrHC42VlyjXc7xpFEYG4VtsM2UllC6wezvr++PdSe1vpuMDxG5bAtB3K3A9tEcWy2cG4ED9kmFfLrOz91NL+Ie3AEP5vKLhjRrrDsKomYADMVB7tNIyuDx3nsZZc6jOzch6GUZu6cmb2mp4rEl7jW8xyK7kwYzNLLmkGdcznwYCtxg8xHlGbmjtHdzJ5Fup7thOlGWXAtfnFxxat6kMczO0HKcltZZoPPQb61kU4fZ/s//AJN99McLcyKLYnIswCScuYyQsmQCSTHea0LbnlVhC90n86u58upS2gVVVE3zs5HZnWNzTXyb4xYyZXKlbY7JVsirbk5QxcEQKz1rh+DZmzeeBU9rLcVY0U6ZrbeuvPnTPCcF4V9JMU88vPJB5/RKGpo0PBfKLh2IveYFrEK+pBILIYEkzbY5R3kAUHw+9buX3dEdbZxSlXIuTk/NymYqyAjtgb9egmvMNbs2riXMI74c2w4Ci0rJczrl/S/ps1yIBEnQinOE4irOWxFu1cZssvl82xC+jKF2Bg9CKzdvxf0TcMxlu5fuLZW4zO4y/oryBgEEkuUhdc2rEUXdwF21duPcBUOwYBl7KmADDqYMkTrzJrQcPxeGtSEdlmTq73DA1OrM3KdKsxPlRaIZFR7h0BzAKvaUNuddmHKrJYWxmziVTRtDE78uvwNXJxFPwaBxOFt3HLvbg6ABWdVVRsFAbQfeTzqI4Xa9Q/xv/VW0NU4qg5/Hl76ITjVvmx021NJV4ZZ/sp/ff+qrBwux/ZCPrP8A1UDpMdbvK9stPZYgEzqFMEDqKQcKwwlSf7K18fOfdRlvA2rYe5btjOF0lnO7DqTGhNI8Nxe4pg2gGVLakFlB7OfXVhIM71m2T6ZrRcUUZX3/AGFzpQC3wuLXI5kanbTcCk/EfKQsHDKiTbdJzA6nbY6fKlbC5auG6bitOnPTXQ1L16WT2+54W7mUEmdKTcb4Zh8Vethyue1mIlEaVeAyw4I3UH2VkcN5S3LdovmmAfpDTvpb5NeUhd2ZzmbOZ22Oo+33VnyjXjWz435EYe9YuJbVUuMjBXyqArfRJCgaV8Nx2a3aNpxDo5tsOjISCJ56qa+7Nx5Akzyr4V5RYtbl6666q15yO/cT761WWr8nX/VrY6K/8zU3Xcfu/wAprE8E4hcRQoIKiYBG06mCNdzzmtRh+Iq0ZgVMjfUaKRuK51qC2HZ/d/8AqNQvHX2t/O1WHVdNRB/kiq7519rfztRTY3sjrAUKAcqjmOWgE6769KIwdrzhNwKW3K9ZPMCYHto7DcNWQz6kAbHeB9Jue9NbShRCgADkNBXTGdLsNwJJVrhZiJME8zHMbxEU4QACANPx76ExWNS2JdteSj0j4CkGP4w9wFQci9FPaI7zHyqbIe6Y8a4slsFR23iIB0B/vHl86+ccW87dYl9vVTUD5z7RTW+0cx+O6l2JuBtJJ7tfwK5d9a6c84SnhvUe8gH3DSoNggNcsdeyIjrTAEg6bdD9h3q9bs7CR+PZXHa6+ie5gW9QH2VA4Zx9CnrXB3D2/gVS7cp0qauM5iRcOgQj2UqAuzOQz4Vr2A2MHxoZ7QJ0Md01157kmOXX47bpJhMRdt5iUOqMo0iM+h8dCw9tOhgcdlBFpVY5TOZNVjYqW0Mx8aM4ZwcO2dyco2Gm/X7PGnC4Qcyx9tdJ3GLxWbGA4n6i/wAVv+qrk4fxQ/7tP4rf9VaVMKOp99E27A6n31vzjPhWbw/BuIFXJtpnbMfSSJJtBfpdEf3VO3wDi3JE/jt/fWzwtuJ1Ow36z900ysN+PwauxMYNOAcX9RP4rf31enAuMeon8Vv76+jWLn41++j7ZBq6mPm2C4LxcNLIkZX+knpG2wXn62Wpvwfi+djbt2yrZNSyTIRVPP8Au19MB/Hdzr23sPb86GPmq8I43/Z2f4k/qr3/APx+Of2dj+JP6q+nq1TV6GPkuLwfGk9JLXsKGJGky3PWPA0KH4xrFpCe7JPxevr+Msh1JiSBqOZXeB3jcd476UNaA0nTfuIOx76599WN88ysj5MpxB3f87UImSFA83LMSPVYwABz6itCuCG8A+M/9vdRa2xyJ+z41ctg7lh8z91c7bXSSQixnArd3QruPo6e470k4h+T3OOxddfHX7a3iWo0DR4aVzYad29nKm0yPluO8ksYlsqrJc8JG3wmlGFF7DkZ8O68mYKSD36TNfa1w5jQj7BVd3Cg+lB9kRV0x8sxvlI3miLaBmIgCDIPU1grltgFBBBE79Sf9BX6EvcHQgxA+PwrL8Y8kUubAT1jXx0q+bN4fLsDich1rQ4PFgxrXY/yRu2ySII7t/bSlsLcQ6gg1fJPFqrbjkY8NP8ASiC5PP4Hx5ac6ylniLL6QnvFM7fFlj0hQfU2vqgzOwUdTSrG8fY6WhlHrNufqjYeJ91eV1brEJmxBBJZiZ1OYyffVF27Pd411dXOukDPd5HWhrlo7xHjpXV1YraIEbsPt99RdB4d+xrq6sqoZBO/uoZ7eumnwPuG9e11RUfNN+NPeKlhsCzuFjvPcK6upIX4fpYZQFA2/Eeyprbfoa6urv4xx8qvS01FW7DV1dWpzEo6xaMQes/j40dZtHv/AB7a9rq0yMtIRRaOa6urSLVarrTGADvXV1BNWqwNXV1FWo9A4u1B0mGJKxybcp4NqR3z1FdXVnpeQiuOZH2/fUxcjb5xXV1ed2Tzj6QE9IqSueQ9kyK6uoLlbrBPQb/ZXCSdPvr2uqj1kH0iCfChXGvf06e+va6gGu2c2mh8fvpTjOEofoAn8b15XVAlxXALR/3YnmRoP+9Lz5L2up9wrq6qP//Z",
  },
];
const searchUser = () => {
  console.log(searchTerm.value);
  if (searchTerm.value === "") {
    competitorsArray.value = [
      {
        name: "Nafeh H.",
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
        name: "John Doe",
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
        name: "Alice Smith",
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
        name: "David Johnson",
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
  } else {
    const user = competitorsArray.value.filter((item) => {
      console.log("here");
      return item.name.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
    competitorsArray.value = user;
    console.log("====================================");
    console.log(competitorsArray.value);
    console.log("====================================");
  }
};
</script>

<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
.table {
  border-collapse: separate;
  border-spacing: 0 0px;
}
</style>

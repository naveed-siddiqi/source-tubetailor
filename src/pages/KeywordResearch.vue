<template>
  <MainLayout>
    <!-- youtube -->
    <div v-if="store.currentTab === 0" class="py-5 space-y-4">
      <div
        class="flex items-center w-full px-4 bg-white rounded-lg outline-none bg-shadow"
      >
        <input
          v-model="searchQuery" @keyup.enter="start"
          id="keyword"
          type="text"
          class="w-full py-4 bg-white border-0"
          placeholder="Fitness"
        />

        <label for="keyword">
          <MagnifyingGlassIcon class="w-6 h-6 text-gray-400" />
        </label>
      </div>
      <Modal :showLoader="showLoader"/>
      <div class="flex flex-col items-start gap-4 md:flex-row grid grid-cols-2">
        <div
          class="flex-1 w-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Overview:</strong> Fitness</h2>
          </div>
          <div class="py-10">
            <!-- Chart will come here -->

            <div class="relative flex items-center justify-center">
              <img :src="meter" alt="meter" />
              <div class="flex items-center top-24 flex-col absolute">
                <h1
                  :class="[
                    ytScore <= 20
                      ? 'bg-[#F60000]'
                      : ytScore <= 40
                      ? 'bg-[#F99843]'
                      : ytScore <= 60
                      ? 'bg-[#FCC42D]'
                      : ytScore <= 80
                      ? 'bg-[#9ADD58]'
                      : 'bg-[#4BDE95]',
                    'text-3xl text-white   rounded-full h-20 w-20 flex items-center justify-center font-bold',
                  ]"
                >
                  {{ ytScore }}
                </h1>
                <p class="text-xs mt-4 text-[#868E9C]">Overall Score</p>
                <p class="font-bold" v-if="ytScore <= 20">Too Low</p>
                <p class="font-bold" v-else-if="ytScore <= 40">Low</p>
                <p class="font-bold" v-else-if="ytScore <= 60">Medium</p>
                <p class="font-bold" v-else-if="ytScore <= 80">Fit</p>
                <p class="font-bold" v-else-if="ytScore <= 100">Too Fit</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-12">
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Search Volume</p>
                <h2 class="text-[24px] font-bold">15,950.2</h2>
                <p class="bg-[#FCC42D] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Competition</p>
                <h2 class="text-[24px] font-bold">61.41</h2>
                <p class="bg-[#F99843] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 w-full h-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Detailed Analysis</strong></h2>
          </div>
          
          
        </div>
        <div
          class="flex-1 w-full px-6 py-8 bg-white col-span-2 bg-shadow rounded-xl"
        >
          <div class="overflow-x-auto scrollbar">
            <div class="w-full min-w-max">
              <table class="table min-w-full border divide-gray-300 rounded-lg">
                <thead class="rounded bg-[#414D61] text-white">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-l-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Similar Keywords
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Search Volume
                    </th>
                    <th
                      scope="col"
                      class="rounded-r-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Overall
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >{{ ytScore }}</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                        <span class="select-none font-[16px]">Fitness</span>
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram -->
    <div v-else-if="store.currentTab === 1" class="py-5 space-y-4">
      <div
        class="flex items-center w-full px-4 bg-white rounded-lg outline-none bg-shadow"
      >
        <input
          id="keyword"
          type="text"
          class="w-full py-4 bg-white border-0"
          placeholder="Fitness"
        />
        <label for="keyword">
          <MagnifyingGlassIcon class="w-6 h-6 text-gray-400" />
        </label>
      </div>
      <div class="flex flex-col items gap-4 md:flex-row grid md:grid-cols-2">
        <div
          class="flex-1 w-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Overview:</strong> Fitness</h2>
          </div>
          <div class="py-10">
            <div class="relative flex items-center justify-center">
              <img :src="meter" alt="meter" />
              <div class="flex items-center top-24 flex-col absolute">
                <h1
                  :class="[
                    instaScore <= 20
                      ? 'bg-[#F60000]'
                      : instaScore <= 40
                      ? 'bg-[#F99843]'
                      : instaScore <= 60
                      ? 'bg-[#FCC42D]'
                      : instaScore <= 80
                      ? 'bg-[#9ADD58]'
                      : 'bg-[#4BDE95]',
                    'text-3xl text-white   rounded-full h-20 w-20 flex items-center justify-center font-bold',
                  ]"
                >
                  {{ instaScore }}
                </h1>
                <p class="text-xs mt-4 text-[#868E9C]">Overall Score</p>
                <p class="font-bold" v-if="instaScore <= 20">Too Low</p>
                <p class="font-bold" v-else-if="instaScore <= 40">Low</p>
                <p class="font-bold" v-else-if="instaScore <= 60">Medium</p>
                <p class="font-bold" v-else-if="instaScore <= 80">Fit</p>
                <p class="font-bold" v-else-if="instaScore <= 100">Too Fit</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-12">
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Search Volume</p>
                <h2 class="text-[24px] font-bold">15,950.2</h2>
                <p class="bg-[#FCC42D] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Competition</p>
                <h2 class="text-[24px] font-bold">61.41</h2>
                <p class="bg-[#F99843] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 w-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Detailed Analysis</strong></h2>
          </div>
          
         
        </div>
        <div
          class="flex-1 w-full px-6 py-8 bg-white md:w-auto bg-shadow rounded-xl md:col-span-2"
        >
          <div class="overflow-x-auto scrollbar">
            <div class="w-full min-w-max">
              <table class="table min-w-full border divide-gray-300 rounded-lg">
                <thead class="rounded bg-[#414D61] text-white">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-l-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Similar Keywords
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Search Volume
                    </th>
                    <th
                      scope="col"
                      class="rounded-r-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Overall
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                        <span class="select-none font-[16px]">Fitness</span>
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tiktok -->
    <div v-else-if="store.currentTab === 2" class="py-5 space-y-4">
      <div
        class="flex items-center w-full px-4 bg-white rounded-lg outline-none bg-shadow"
      >
        <input
          id="keyword"
          type="text"
          class="w-full py-4 bg-white border-0"
          placeholder="Fitness"
        />
        <label for="keyword">
          <MagnifyingGlassIcon class="w-6 h-6 text-gray-400" />
        </label>
      </div>
      <div class="flex flex-col gap-4 md:flex-row grid md:grid-cols-2">
        <div
          class="flex-1 w-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Overview:</strong> Fitness</h2>
          </div>
          <div class="py-10">
            <div class="relative flex items-center justify-center">
              <img :src="meter" alt="meter" />
              <div class="flex items-center top-24 flex-col absolute">
                <h1
                  :class="[
                    ttScore <= 20
                      ? 'bg-[#F60000]'
                      : ttScore <= 40
                      ? 'bg-[#F99843]'
                      : ttScore <= 60
                      ? 'bg-[#FCC42D]'
                      : ttScore <= 80
                      ? 'bg-[#9ADD58]'
                      : 'bg-[#4BDE95]',
                    'text-3xl text-white   rounded-full h-20 w-20 flex items-center justify-center font-bold',
                  ]"
                >
                  {{ ttScore }}
                </h1>
                <p class="text-xs mt-4 text-[#868E9C]">Overall Score</p>
                <p class="font-bold" v-if="ttScore <= 20">Too Low</p>
                <p class="font-bold" v-if="ttScore <= 40">Low</p>
                <p class="font-bold" v-if="ttScore <= 60">Medium</p>
                <p class="font-bold" v-if="ttScore <= 80">Fit</p>
                <p class="font-bold" v-if="ttScore <= 100">Too Fit</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-12">
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Search Volume</p>
                <h2 class="text-[24px] font-bold">15,950.2</h2>
                <p class="bg-[#FCC42D] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
            <div>
              <div
                class="text-center space-y-2 relative font-[#868E9C] text-[12px]"
              >
                <p>Competition</p>
                <h2 class="text-[24px] font-bold">61.41</h2>
                <p class="bg-[#F99843] rounded-full px-3 py-2 text-[12px]">
                  Medium
                </p>
                <InformationCircleIcon
                  class="absolute bottom-[95px] left-[95px] w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 w-full px-6 py-8 space-y-2 bg-white md:w-auto bg-shadow rounded-xl"
        >
          <div class="flex items-center">
            <h2 class="text-[20px]"><strong>Detailed Analysis</strong></h2>
          </div>
          
         
        </div>
        <div
          class="flex-1 w-full px-6 py-8 bg-white md:w-auto bg-shadow rounded-xl md:col-span-2"
        >
          <div class="overflow-x-auto scrollbar">
            <div class="w-full min-w-max">
              <table class="table min-w-full border divide-gray-300 rounded-lg">
                <thead class="rounded bg-[#414D61] text-white">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-l-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Similar Keywords
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Search Volume
                    </th>
                    <th
                      scope="col"
                      class="rounded-r-lg px-3 py-3.5 text-left text-sm font-semibold"
                    >
                      Overall
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                          >Planet Fitness</span
                        >
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                  <tr class="even:bg-[#EFF4FD]">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-3"
                    >
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
                        <span class="select-none font-[16px]">Fitness</span>
                      </label>
                    </td>
                    <td class="px-3 py-4 text-sm whitespace-nowrap">
                      85,571.4
                    </td>
                    <td
                      class="flex items-center gap-2 px-3 py-4 text-sm whitespace-nowrap"
                    >
                      <span
                        class="rounded-full text-white bg-[#FCC42D] px-3 py-1 text-[10px]"
                        >44</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Tabs from "@/components/Tabs.vue";
import { useTab } from "@/store/counter";
import meter from "@/assets/meter.png";
import Pie from "@/components/Pie.vue";
import { ref } from "vue";

const ytScore = ref(30);
const instaScore = ref(50);
const ttScore = ref(90);
const store = useTab();
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
</script>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      showLoader: false
    };
  },
  methods: {
    start() {
      // Perform your search logic here
      // For simplicity, we'll just show the loader
      this.showLoader = true;

      // Simulate an asynchronous operation (replace this with your actual search logic)
      setTimeout(() => {
        // After the search is complete, you can hide the loader
        this.showLoader = false;
      }, 2000); // Replace 2000 with the actual time it takes for your search operation
    }
  }
};

</script>
<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
</style>

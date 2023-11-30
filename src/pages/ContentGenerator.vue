<template>
  <MainLayout>
    <!-- Youtube -->
    <Modal :showLoader="showLoader"/>

    <div v-if="store.currentTab === 0" class="py-5 space-y-4">
      <div>
        <textarea
          class="w-full h-64 px-4 py-4 bg-white rounded-lg outline-none bg-shadow"
          type="text"
          placeholder="Enter script title"
        />
      </div>
      <div class="flex items-center gap-4">
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
          <span class="select-none font-[16px]">Short</span>
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
          <span class="select-none font-[16px]">Long Video</span>
        </label>
      </div>
      <div class="flex items-center justify-end py-2">
        <Modal :showLoader="showLoader"/>
        <button class="px-[40px] py-[6px] rounded-full bg-youtube text-white" @click="start()">
          Generate
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- First Column -->
        <div class="col-span-1">
          <!-- Content for the first column -->
          <div class="space-y-2">
            <!-- Your content here -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Script:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 text-[13px] text-[#868E9C]">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-span-1">
          <!-- Content for the second column -->
          <div class="">
            <!-- Content 1 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Description:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 pb-2 text-[13px] text-[#868E9C]">
                <p>
                  Our AI generates captivating, viewer-focused titles that
                  effectively communicate your video's core message and entice
                  clicks.
                </p>
                <p>
                  We provide comprehensive, SEO-optimized descriptions designed
                  to enhance your video's discoverability and accurately
                  summarize its content for potential viewers.
                </p>
              </div>
            </div>

            <!-- Content 2 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Hashtags:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-start gap-2">
                <span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                >
              </div>
            </div>

            <!-- Content 3 in the second column -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Voiceover:</h2>
                <button class="text-black">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-between py-4">
                <div class="flex items-center gap-4">
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
                    <span class="select-none font-[16px]">Male</span>
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
                    <span class="select-none font-[16px]">Female</span>
                  </label>
                </div>
                <div>
                  <button
                    class="px-[40px] py-[6px] rounded-full bg-youtube text-white" @click="start()"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <hr />
              <div class="py-4">
                <audio controls class="w-full">
                  <source
                    src="https://open.spotify.com/track/6qrifdo7QINdPQr80IelGi?si=d922762d4a304a14"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram -->

    <div v-else-if="store.currentTab === 1" class="py-5 space-y-4">
      <div>
        <textarea
          class="w-full h-64 px-4 py-4 bg-white rounded-lg outline-none bg-shadow"
          type="text"
          placeholder="Enter script title"
        />
      </div>
      <div class="flex items-center gap-4">
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
          <span class="select-none font-[16px]">Short</span>
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
          <span class="select-none font-[16px]">Long Video</span>
        </label>
      </div>
      <div class="flex items-center justify-end py-2">
        <button class="px-[40px] py-[6px] rounded-full bg-insta text-white" @click="start()">
          Generate
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- First Column -->
        <div class="col-span-1">
          <!-- Content for the first column -->
          <div class="space-y-2">
            <!-- Your content here -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Script:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 text-[13px] text-[#868E9C]">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-span-1">
          <!-- Content for the second column -->
          <div class="">
            <!-- Content 1 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Description:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 pb-2 text-[13px] text-[#868E9C]">
                <p>
                  Our AI generates captivating, viewer-focused titles that
                  effectively communicate your video's core message and entice
                  clicks.
                </p>
                <p>
                  We provide comprehensive, SEO-optimized descriptions designed
                  to enhance your video's discoverability and accurately
                  summarize its content for potential viewers.
                </p>
              </div>
            </div>

            <!-- Content 2 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Hashtags</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-start gap-2">
                <span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                >
              </div>
            </div>

            <!-- Content 3 in the second column -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Voiceover:</h2>
                <button class="text-black">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-between py-4">
                <div class="flex items-center gap-4">
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
                    <span class="select-none font-[16px]">Male</span>
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
                    <span class="select-none font-[16px]">Female</span>
                  </label>
                </div>
                <div>
                  <button
                    class="px-[40px] py-[6px] rounded-full bg-insta text-white" @click="start()"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <hr />
              <div class="py-4">
                <audio controls class="w-full">
                  <source
                    src="https://open.spotify.com/track/6qrifdo7QINdPQr80IelGi?si=d922762d4a304a14"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tiktok -->

    <div v-else-if="store.currentTab === 2" class="py-5 space-y-4">
      <div>
        <textarea
          class="w-full h-64 px-4 py-4 bg-white rounded-lg outline-none bg-shadow"
          type="text"
          placeholder="Enter script title"
        />
      </div>
      <div class="flex items-center gap-4">
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
          <span class="select-none font-[16px]">Short</span>
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
          <span class="select-none font-[16px]">Long Video</span>
        </label>
      </div>
      <div class="flex items-center justify-end py-2">
        <button class="px-[40px] py-[6px] rounded-full bg-tiktok text-white" @click="start()">
          Generate
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- First Column -->
        <div class="col-span-1">
          <!-- Content for the first column -->
          <div class="space-y-2">
            <!-- Your content here -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Script:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 text-[13px] text-[#868E9C]">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-span-1">
          <!-- Content for the second column -->
          <div class="">
            <!-- Content 1 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Description:</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-6 pb-2 text-[13px] text-[#868E9C]">
                <p>
                  Our AI generates captivating, viewer-focused titles that
                  effectively communicate your video's core message and entice
                  clicks.
                </p>
                <p>
                  We provide comprehensive, SEO-optimized descriptions designed
                  to enhance your video's discoverability and accurately
                  summarize its content for potential viewers.
                </p>
              </div>
            </div>

            <!-- Content 2 in the second column -->
            <div class="p-4 mb-4 bg-white bg-shadow rounded-xl">
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Hashtags</h2>
                <button class="text-gray-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-start gap-2">
                <span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                ><span
                  class="text-[#868E9C] bg-[#EFF4FD] px-3 py-1 font-semibold text-[10px] rounded-full"
                  >foodie</span
                >
              </div>
            </div>

            <!-- Content 3 in the second column -->
            <div class="p-4 bg-white bg-shadow rounded-xl">
              <!-- Your content here -->
              <div class="flex items-center justify-between py-2">
                <h2 class="text-[16px] font-semibold">Voiceover:</h2>
                <button class="text-black">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-between py-4">
                <div class="flex items-center gap-4">
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
                    <span class="select-none font-[16px]">Male</span>
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
                    <span class="select-none font-[16px]">Female</span>
                  </label>
                </div>
                <div>
                  <button
                    class="px-[40px] py-[6px] rounded-full bg-tiktok text-white" @click="start()">
                    Generate
                  </button>
                </div>
              </div>
              <hr />
              <div class="py-4">
                <audio controls class="w-full">
                  <source
                    src="https://open.spotify.com/track/6qrifdo7QINdPQr80IelGi?si=d922762d4a304a14"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
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
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { ref } from "vue";
import { useTab } from "@/store/counter";
import Modal from "@/components/Modal.vue";
const checkboxOne = ref(true);

const store = useTab();
const showLoader = ref(false);
function start(){
  this.showLoader = !this.showLoader
}
</script>

<style scoped>
.bg-shadow {
  fill: #ffff;
  filter: drop-shadow(0px 10px 30px rgba(227, 235, 249, 0.5));
}
</style>

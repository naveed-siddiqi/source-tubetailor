<template>
  <div>
    <div class="">
      <div class="bg-[#F4F7FF] w-full relative">
        <div class="absolute top-0 z-10 right-0">
          <img :src="top" alt="" />
        </div>
        <div class="absolute bottom-0 z-10 left-0">
          <img :src="bottom" alt="" />
        </div>
        <div class="px-4 max-w-7xl mx-auto md:px-16">
          <nav
            class="top-0 flex items-center z-50 justify-between w-full px-3 py-4"
          >
            <div>
              <img class="h-12" :src="Logo" alt="" />
            </div>
            <div class="flex relative z-50 items-center justify-end">
              <router-link
                to="dashboard"
                class="sm:px-[35px] px-4 text-sm relative z-50 py-[10px] text-[#111C52]"
                >How it works</router-link
              >
              <a
                href="/"
                class="sm:px-[35px] px-4 text-xs sm:text-sm py-[10px] text-white rounded bg-youtubes"
                >Login</a
              >
            </div>
          </nav>
          <div class="w-full">
            <div
              class="flex max-w-4xl bg-[#F4F7FF] mx-auto flex-col items-center justify-center min-h-[800px] gap-2 text-center"
            >
              <h1
                class="text-[#111C52] font-semibold text-[30px] md:text-[44px]"
              >
                Unleash the Power of AI for Ultimate Future of YouTube Success!
              </h1>
              <p class="text-[#111C52] text-[12px] md:text-[16px]">
                Welcome to the future of YouTube content optimization. Our
                revolutionary AI-powered <br class="hidden md:block" />
                tool, integrated with the latest GPT-4 technology from OpenAI
              </p>
              <div class="flex items-center justify-center gap-2 py-6">
                <a
                  href="/"
                  class="px-[35px] py-[10px] text-sm border border-youtube text-white rounded bg-youtubes"
                  >Get Started</a
                >
                <a
                  href="/"
                  class="px-[35px] py-[10px] text-sm text-[#111C52] rounded border border-[#111C52]"
                  >Try for Free</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="min-h-[800px] py-20 w-full">
        <div class="px-10 py-16 md:px-16">
          <div
            class="flex flex-col items-center justify-center gap-2 text-center"
          >
            <h1 class="text-[#111C52] font-semibold text-[30px] md:text-[44px]">
              Main Features
            </h1>
            <p class="text-[#111C52] text-[12px] md:text-[16px]">
              Welcome to the future of YouTube content optimization. Our
              revolutionary <br class="hidden md:block" />
              AI-powered tool, integrated with the latest GPT-4 technology.
            </p>
          </div>
        </div>
        <div
          class="grid max-w-7xl mx-auto grid-cols-1 gap-4 p-16 md:grid-cols-3"
        >
          <!-- Row 1, Column 1 -->
          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFD5D4] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>

          <!-- Row 1, Column 2 -->

          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFDDF3] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>
          <!-- Row 1, Column 3 -->
          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFD5D4] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>

          <!-- Row 2, Column 1 -->
          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFD5D4] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>

          <!-- Row 2, Column 2 -->
          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFD5D4] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>

          <!-- Row 2, Column 3 -->
          <div class="p-4 space-y-2">
            <div
              class="flex h-12 w-12 items-center justify-center rounded bg-[#FFD5D4] text-[#EB5757]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-[24px] font-semibold text-[#111C52]">Title</h2>
            </div>
            <div class="text-[16px] text-[#111C52]">
              Our AI generates captivating, viewer focused titles that
              effectively communicate your video's core message and entice
              clicks.
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 py-16 bg-[#F4F7FF] min-h-[800px] md:px-16 relative">
        <div class="absolute left-0 bottom-[0%]">
          <img :src="readyLeft" alt="" />
        </div>
        <div class="absolute right-0 top-[0%]">
          <img :src="readyRight" alt="" />
        </div>
        <div
          class="flex flex-col items-center justify-center gap-2 text-center"
        >
          <h1 class="text-[#111C52] font-semibold text-[30px] md:text-[44px]">
            We are ready to help
          </h1>
          <p class="text-[#111C52] text-[12px] md:text-[16px]">
            Welcome to the future of YouTube content optimization. Our
            revolutionary <br class="hidden md:block" />
            AI-powered tool, integrated with the latest GPT-4 technology.
          </p>
        </div>
        <div
          class="flex items-center justify-center max-w-3xl px-6 py-10 m-auto"
        >
          <video
            id="videoEl"
            class="h-full rounded-lg"
            ref="videoPlayer"
            @click="togglePlay"
          >
            <source :src="videoSource" type="video/mp4" />
            <source :src="videoSource" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            class="absolute p-6 transition-all bg-white rounded-full cursor-pointer hover:scale-110 text-youtube"
            @click="togglePlay"
          >
            <i>
              <svg
                v-if="!isPlaying"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                v-if="isPlaying"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
      <div class="px-10 max-w-7xl mx-auto py-32 md:px-16">
        <div
          class="flex flex-col items-center justify-center gap-2 text-center"
        >
          <h1 class="text-[#111C52] font-semibold text-[30px] md:text-[44px]">
            What our users says
          </h1>
          <p class="text-[#111C52] text-[12px] md:text-[16px]">
            Welcome to the future of YouTube content optimization. Our
            revolutionary <br class="hidden md:block" />
            AI-powered tool, integrated with the latest GPT-4 technology.
          </p>
        </div>
        <div class="flex flex-col items-center gap-8 px-3 py-12 md:flex-row">
          <div class="p-6 bg-white rounded-xl bg-shadow">
            <div class="flex text-[#FCC42D] gap-x-1">
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="py-2 border-b">
              <p class="text-[#111C52]">
                “Our AI generates captivating, viewer focused titles that
                effectively your communicate video's core."
              </p>
            </div>
            <div>
              <figcaption
                class="flex flex-wrap items-center py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap"
              >
                <img
                  class="flex-none w-10 h-10 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                  alt=""
                />
                <div class="flex-auto">
                  <div class="font-semibold">Brenna Goyette</div>
                  <div class="text-gray-600">Founder at @TailGrids</div>
                </div>
              </figcaption>
            </div>
          </div>
          <div class="p-6 bg-white rounded-xl bg-shadow">
            <div class="flex text-[#FCC42D] gap-x-1">
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="py-2 border-b">
              <p class="text-[#111C52]">
                “Our AI generates captivating, viewer focused titles that
                effectively your communicate video's core."
              </p>
            </div>
            <div>
              <figcaption
                class="flex flex-wrap items-center py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap"
              >
                <img
                  class="flex-none w-10 h-10 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                  alt=""
                />
                <div class="flex-auto">
                  <div class="font-semibold">Brenna Goyette</div>
                  <div class="text-gray-600">Founder at @TailGrids</div>
                </div>
              </figcaption>
            </div>
          </div>
          <div class="p-6 bg-white rounded-xl bg-shadow">
            <div class="flex text-[#FCC42D] gap-x-1">
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="flex-none w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="py-2 border-b">
              <p class="text-[#111C52]">
                “Our AI generates captivating, viewer focused titles that
                effectively your communicate video's core."
              </p>
            </div>
            <div>
              <figcaption
                class="flex flex-wrap items-center py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap"
              >
                <img
                  class="flex-none w-10 h-10 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                  alt=""
                />
                <div class="flex-auto">
                  <div class="font-semibold">Brenna Goyette</div>
                  <div class="text-gray-600">Founder at @TailGrids</div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#F4F7FF] w-full">
      <footer class="max-w-7xl mx-auto px-16 pt-16">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <!-- Column 1 -->
          <div class="p-4">
            <div class="space-y-5">
              <img class="h-12" :src="Logo" alt="" />
              <p class="text-[16px] text-[#111C52]">
                Our AI generates captivating, viewer focused titles that
                effectively your.
              </p>
              <div class="flex items-center gap-4">
                <a class="p-3 bg-white rounded-full text-[#28A8EA]" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                  >
                    <path
                      d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                    />
                  </svg>
                </a>
                <a class="p-3 text-black bg-white rounded-full" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="m834.7 279.8l61.3-58.9V208H683.7L532.4 586.4L360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z"
                    />
                  </svg>
                </a>
                <a class="p-3 bg-white text-[#1D9BF0] rounded-full" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="p-4">
            <h2 class="text-[#111C52] text-[20px] font-bold">Useful Links</h2>
            <div class="flex flex-col gap-4 pt-10">
              <a href="/" class="text-gray-600 hover:underline">Blog</a>
              <a href="/" class="text-gray-600 hover:underline">Pricing</a>
              <a href="/" class="text-gray-600 hover:underline">About</a>
            </div>
          </div>
          <div class="p-4">
            <h2 class="text-[#111C52] text-[20px] font-bold">Terms</h2>
            <div class="flex flex-col gap-4 pt-10">
              <a href="/" class="text-gray-600 hover:underline">TOS</a>
              <a href="/" class="text-gray-600 hover:underline"
                >Privacy Policy</a
              >
              <a href="/" class="text-gray-600 hover:underline"
                >Refund Policy</a
              >
            </div>
          </div>

          <!-- Column 3 -->
          <div class="p-4">
            <h2 class="text-[#111C52] text-[20px] font-bold">Support & Help</h2>
            <div class="flex flex-col gap-4 pt-10">
              <a href="/" class="text-gray-600 hover:underline"
                >Open Support Ticket</a
              >
              <a href="/" class="text-gray-600 hover:underline">Terms of Use</a>
              <a href="/" class="text-gray-600 hover:underline">About</a>
            </div>
          </div>

          <!-- Column 4 -->

          <!-- Add more columns as needed -->
        </div>
        <div class="flex items-center justify-center py-10">
          <h2>
            <span class="text-youtube">Built on Stellar </span>|
            info@tubetailor.io
          </h2>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.bg-shadow {
  filter: drop-shadow(0px 10px 100px #e0e3f4);
}
.video-container {
  position: relative;
  width: 100%;
  max-width: 800px; /* Adjust to your desired width */
}

video {
  width: 100%;
  height: auto;
}
</style>
<script setup>
import Logo from "@/assets/Logo.png";
import videoSource from "@/assets/hosting.mp4";
import bottom from "@/assets/bottom.png";
import readyLeft from "@/assets/ready-left.png";
import readyRight from "@/assets/ready-right.png";
import top from "@/assets/top.png";
import { ref } from "vue";
const isPlaying = ref(false);
const togglePlay = () => {
  const video = this.$ref.videoPlayer;
  const videoEl = document.getElementById("videoEl");
  if (isPlaying.value) {
    videoEl.pause();
  } else {
    videoEl.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<template>
    <div class="overflow-x-scroll md:col-span-3 mt-5">
        <div class=" flex h-screen  min-w-full ">
            <div class="text-gray max-w-[250px] w-full text-center">
                <button @click="changeTab('Compose')"
                    class="text-xl bg-red-600 text-white px-6 py-2 rounded-md mb-4 w-full flex items-center gap-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6l6-2Zm-8 0l4 4ZM9 19l4 4Z" />
                        </svg>
                    </span>
                    Compose</button>
                <div v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.name)"
                    :class="{ 'bg-gray-500 text-white': currentTab === tab.name }"
                    class="cursor-pointer px-4 py-2 mb-2 rounded-md text-gray-700 text-left">
                    {{ tab.name }}
                </div>
            </div>
            <div class="flex-1 md:overflow-y-auto p-4 w-full mt-5">
                <div v-if="currentTab === 'Inbox'">
                    <div v-for="email in inbox" :key="email.id" class="mb-2 border-b pb-2 flex items-center gap-3">
                        <div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <div class="">
                            <label class="container">
                                <input type="checkbox">
                                <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px"
                                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <g>
                                            <path
                                                d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                        </div>
                        <span class="font-semibold whitespace-nowrap">{{ email.sender }}</span>
                        <p class="truncate">{{ email.subject }}</p>
                    </div>
                </div>
                <div v-if="currentTab === 'Sent'">
                    <div v-for="email in Sent" :key="email.id" class="mb-2 border-b pb-2 flex items-center gap-3 py-2">
                        <div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <span class="font-semibold whitespace-nowrap">{{ email.sender }}</span>
                        <p class="truncate">{{ email.subject }}</p>
                    </div>
                </div>
                <div v-if="currentTab === 'Draft'">
                    <div v-for="email in Draft" :key="email.id" class="mb-2 border-b pb-2 flex items-center gap-3">
                        <div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <div class="">
                            <label class="container">
                                <input type="checkbox">
                                <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px"
                                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <g>
                                            <path
                                                d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                        </div>
                        <span class="font-semibold whitespace-nowrap"><span
                                class="text-red-600 text-xs font-normal">Draft,</span> {{ email.sender }}</span>
                        <p class="truncate">{{ email.subject }}</p>
                    </div>
                </div>
                <div v-if="currentTab === 'Trash'">
                    <div v-for="email in Trash" :key="email.id" class="mb-2 border-b pb-2 flex items-center gap-3 py-2">
                        <div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                        </div>
                        <span class="font-semibold whitespace-nowrap">{{ email.sender }}</span>
                        <p class="truncate">{{ email.subject }}</p>
                    </div>
                </div>
                <div v-if="currentTab === 'Important'">
                    <div v-for="email in Important" :key="email.id" class="mb-2 border-b pb-2 flex items-center gap-3">
                        <div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <div class="">
                            <label class="container">
                                <input type="checkbox">
                                <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px"
                                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <g>
                                            <path
                                                d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                        </div>
                        <span class="font-semibold whitespace-nowrap">{{ email.sender }}</span>
                        <p class="truncate">{{ email.subject }}</p>
                    </div>
                </div>
                <div class="space-y-4" v-if="currentTab === 'Compose'">
                    <input class="rounded-0 py-2 px-4 bg-white border" type="text" placeholder="To">
                    <input class="rounded-0 py-2 px-4 bg-white border" type="text" placeholder="Subject">
                    <textarea class="rounded-0 py-2 px-4 bg-white border" name="" id="" cols="30" rows="10"
                        placeholder="Enter text"></textarea>
                    <div>
                        <h1 class="flex items-center gap-1 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            <span>Attachment</span>
                        </h1>
                        <input class="rounded-0 pb-2 bg-white border-0" type="file" @change="handleFileChange"
                            ref="fileInput" />
                    </div>
                    <div class="flex items-center justify-end gap-4">
                        <button class="rounded-md py-2 px-3 text-white text-sm bg-red-500 hover:bg-red-700 flex items-center gap-2 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M14.954.71a.5.5 0 0 1-.1.144L5.4 10.306l2.67 4.451a.5.5 0 0 0 .889-.06L14.954.71ZM4.694 9.6L.243 6.928a.5.5 0 0 1 .06-.889L14.293.045a.5.5 0 0 0-.146.101L4.694 9.6Z"/></svg>
                            <span>Send</span>
                        </button>
                        <button class="rounded-md py-2 px-3 text-white text-sm bg-gray-500 hover:bg-gray-600 flex items-center gap-2 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                            </svg>
                            <span>Discard</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedFile: null,
            currentTab: 'Inbox',
            tabs: [
                { name: 'Inbox' },
                { name: 'Sent' },
                { name: 'Draft' },
                { name: 'Trash' },
                { name: 'Important' },
            ],
            inbox: [
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                // Add more emails
            ],
            Sent: [
                { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow' },
                { id: 2, sender: 'Jane Smith', subject: 'Project Update' },
                { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow' },
                { id: 2, sender: 'Jane Smith', subject: 'Project Update' },
                { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow' },
                { id: 2, sender: 'Jane Smith', subject: 'Project Update' },
                { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow' },
                { id: 2, sender: 'Jane Smith', subject: 'Project Update' },
            ],
            Draft: [
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                // Add more emails
            ],
            Trash: [
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                // Add more emails
            ],
            Important: [
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                // Add more emails
            ],
            Compose: [
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 1, sender: 'John Doe', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                { id: 2, sender: 'Jane Smith', subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor officia minus pariatur! Eveniet natus, quo ad autem qui quas officia ut, architecto dolorem illum quasi, ratione tempora corrupti! Enim ullam culpa, natus doloremque et numquam. Sequi doloremque vitae praesentium.' },
                // Add more emails
            ],
            // Other email lists (sent, draft, trash, important) can be added here
        };
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab;
        },
        changeTab(Compose) {
            this.currentTab = Compose;
        },
        handleFileChange(event) {
            // Access the selected file from the event
            const file = event.target.files[0];

            // Update the data property to store the selected file
            this.selectedFile = file;

            // If you want to reset the input field after selecting a file
            // this.$refs.fileInput.value = '';
        }
    },
};
</script>
  
<style scoped>
/* Add any additional styling here */
.cbx {
    position: relative;
    top: 1px;
    width: 20px;
    height: 20px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    vertical-align: middle;
    transition: background 0.1s ease;
    cursor: pointer;
    display: block;
}

.cbx:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 12px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
}

.lbl {
    margin-left: 5px;
    vertical-align: middle;
    cursor: pointer;
}

#cbx:checked~.cbx {
    border-color: transparent;
    background: #6871f1;
    animation: jelly 0.6s ease;
}

#cbx:checked~.cbx:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
}

.cntr {
    position: relative;
}

@keyframes jelly {
    from {
        transform: scale(1, 1);
    }

    30% {
        transform: scale(1.25, 0.75);
    }

    40% {
        transform: scale(0.75, 1.25);
    }

    50% {
        transform: scale(1.15, 0.85);
    }

    65% {
        transform: scale(0.95, 1.05);
    }

    75% {
        transform: scale(1.05, 0.95);
    }

    to {
        transform: scale(1, 1);
    }
}

.hidden-xs-up {
    display: none !important;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.container {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
}

.container svg {
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    transition: all 0.3s;
    fill: #ffffff;
    stroke: gray;
}

.container-fill svg {
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    transition: all 0.3s;
    fill: #ffffff;
    stroke: gray;
}

.container svg:hover {
    transform: scale(1.1);
}

.container input:checked~svg {
    fill: #ffe100;
    stroke: #ffe100;
}
</style>
  
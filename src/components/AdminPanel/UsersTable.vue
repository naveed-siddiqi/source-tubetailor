
<script setup>
import tableLayout from "@/layouts/TableLayout.vue";
const people = [
    { name: 'Lindsay Walton', title: '24-02-2021', email: 'lindsay.walton@example.com', role: '50$' },
    { name: 'Lindsay Walton', title: '24-03-2021', email: 'lindsay.walton@example.com', role: '50$' },
    { name: 'Lindsay Walton', title: '24-05-2021', email: 'lindsay.walton@example.com', role: '50$' },
    // More people...
]
</script>
<template>
    <div class="md:col-span-3 grid grid-col-1 sm:grid-cols-3 gap-4">
        <div>
            <label class="text-sm sm:text-lg text-gray-800 font-medium" for="filter">Search</label>
            <input class="px-4 py-2.5 bg-white styleCard rounded-md col-span-1 md:col-span-3 shadow-sm border !border-gray-200" type="text" placeholder="Search user">
        </div>
        <div>
            <label class="text-sm sm:text-lg text-gray-800 font-medium" for="filter">Filter:</label>
            <select
                class="px-4 py-2.5 bg-white styleCard rounded-md col-span-1 md:col-span-3 shadow-sm border !border-gray-200"
                v-model="filter" id="filter">
                <option value="">List all users</option>
                <option value="Basic">Basic</option>
                <option value="Pro">Pro</option>
                <option value="Lite">Lite</option>
            </select>
        </div>
        <div>
            <label class="text-sm sm:text-lg text-gray-800 font-medium" for="filter">Sort By:</label>
            <select
                class="px-4 py-2.5 bg-white styleCard rounded-md col-span-1 md:col-span-3 shadow-sm border !border-gray-200">
                <option value="">Most Recent</option>
                <option value="Basic">old</option>
                <option value="Pro">new</option>
                <option value="Lite">Both</option>
            </select>
        </div>
    </div>
    <tableLayout class="col-span-1 md:col-span-3 shadow-sm border !border-gray-200">
        <div class="absolute">
            Showing 12,453 users
        </div>
        <div class="slide-names">
            <div v-for="(slide, index) in slides" :key="index" :class="{ 'active': index === currentIndex }">
                <p v-if="index === currentIndex" @click="goToSlide(index)">{{ slide.name }}</p>
            </div>
        </div>

        <div class="carousel-container">
            <carousel :items-to-show="1" :mouseDrag="false" :touchDrag="false" v-model="currentIndex">
                <slide v-for="(slide, index) in slides" :key="index">
                    <div class="px-4 sm:px-6 lg:px-8 w-full">
                        <div class="mt-8 flow-root w-full">
                            <div class="-mx-4 -my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle">
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('date')">Date Joined</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('email')">Email</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('country')">Country</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('package')">Package</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('amount')">Amount</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('lastActive')">Last Active</th>
                                                <th class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    @click="sortBy('OrderHistory')">Order History</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="user in filteredUsers" :key="user.id">
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.date }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.email }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.country }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.package }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.amount }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    user.lastActive }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                                                    <button @click="openModal" class="text-blue-500 font-medium"> View order
                                                        history</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </tableLayout>
    <div v-if="isModalOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="mt-8 flow-root">
                            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
                                                    Name</th>

                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">Last
                                                    Transaction Date
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr v-for="person in people" :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                                    {{ person.name }}</td>

                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                                                    person.email }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                                                    person.title }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role
                                                }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="w-full text-end">
                                    <button type="button" @click="closeModal"
                                        class="inline-flex justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go
                                        Back</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            mouseDrag: false,
            touchDrag: false,
            isModalOpen: false,
            slides: [
                { name: '', content: 'Your slide 1 content here' },
                { name: '', content: 'Your slide 2 content here' },
            ],
            users: [
                { id: 1, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Pro', amount: '$123', },
                { id: 2, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Lite', amount: '$123' },
                { id: 2, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Lite', amount: '$123' },
                { id: 2, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Lite', amount: '$123' },
                { id: 3, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Basic', amount: '$123' },
                { id: 3, date: '12-02-2024', lastActive: '24-02-2021', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package: 'Basic', amount: '$123' },
            ],
            sortKey: '',
            filter: '',
            currentIndex: 0,
        };
    },
    computed: {
        filteredUsers() {
            let filtered = this.users;
            if (this.filter) {
                filtered = filtered.filter(user => user.package.toLowerCase() === this.filter.toLowerCase());
            }
            if (this.sortKey) {
                filtered.sort((a, b) => {
                    return a[this.sortKey].localeCompare(b[this.sortKey]);
                });
            }

            return filtered;
        },
    },
    methods: {
        goToSlide(index) {
            this.currentIndex = index;
        },
        sortBy(key) {
            this.sortKey = key === this.sortKey ? '' : key;
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>
  
  
  
<style>
.active {
    font-weight: light;
}

.slide-names {
    display: flex;
    align-items: center;
    justify-content: center !important;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    margin-left: auto;
    position: absolute;
    top: 10px;
    right: 90px;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    top: 5px;
}

.carousel__prev {
    right: 10px !important;
    left: auto !important;
}

.carousel__next {
    right: -30px !important;
}
</style>
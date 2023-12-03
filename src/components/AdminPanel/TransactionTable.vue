<script setup>
import Table from "@/components/AdminPanel/CarouselTable.vue";
const people = [
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
        { date: '12-02-2024', ordernumber: '24', email: 'Hamzawattoo4321@gmail.com', country: 'USA', package:'PRO', amount:'$123' },
    ]
</script>
<template>
    <div class="">
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
                                    <table class="min-w-full divide-y divide-gray-300 table-fixed">
                                        <thead>
                                            <tr>
                                                <th scope="col"
                                                    class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Date</th>
                                                <th scope="col"
                                                    class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Order Number</th>
                                                <th scope="col"
                                                    class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Email</th>
                                                <th scope="col"
                                                    class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Country</th>
                                                <th scope="col"
                                                    class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Package</th>
                                                <th scope="col"
                                                    class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="person in people" :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-left">
                                                    {{ person.date }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    person.ordernumber }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    person.email }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    person.country }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    person.package }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{{
                                                    person.amount }}</td>
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
            slides: [
                { name: 'January', content: 'Your slide 1 content here' },
                { name: 'Febrarury', content: 'Your slide 2 content here' },
            ],
            currentIndex: 0,
        };
    },
    methods: {
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>
  
<style>
.active {
    font-weight: light;
    /* Highlight the active slide name */
}

.slide-names {
    display: flex;
    align-items: center;
    justify-content: center !important;
    border-radius: 5px;
    padding: 5px;
    /* width: 10rem; */
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
    right: 160px !important;
    left: auto !important;
}

.carousel__next {
    right: -30px !important;
}
</style>
  




￼
vue3-editor v0.1.1
HTML editor using Vue.js 3, and Quill.js, an open source editor
OverviewBrowse Files







<!-- <template>
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
  </script> -->
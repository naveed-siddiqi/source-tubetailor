<script setup>
import Table from "@/components/AdminPanel/CarouselTable.vue";
</script>
<template>
    <div class="">
      <div class="slide-names">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'active': index === currentIndex }">
          <p v-if="index === currentIndex" @click="goToSlide(index)">{{ slide.name }}</p>
        </div>
      </div>
  
      <div class="carousel-container">
        <carousel :items-to-show="1" :mouseDrag="false" :touchDrag="false"  v-model="currentIndex">
          <slide v-for="(slide, index) in slides" :key="index">
                <Table/>
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
  import "vue3-carousel/dist/carousel.css";
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
        mouseDrag:false,
        touchDrag:false,
        slides: [
          { name: 'January', content: 'Your slide 1 content here' },
          { name: 'Febrarury', content: 'Your slide 2 content here' },
          // Add more slides as needed
        ],
        currentIndex: 0, // Initialize with the index of the first slide
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
    font-weight: light; /* Highlight the active slide name */
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
    top:10px;
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
  right:-30px !important;
}
  </style>
  
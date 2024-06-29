<script lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

//   import './style.css';
  // import required modules
  import {EffectCoverflow,Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow,Autoplay, Pagination, Navigation],
      };
    },
  };
 
</script>
<template>
    <section class="testimonials bg-[#19092D] h-full">
       <div class="container p-10  ">
           <div class="section-header">
               <h2 class="text-center text-3xl font-bold text-white">TESTIMONIAL</h2>
           </div>

           <swiper 
    :slidesPerView="2"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: false,
    }"
    :modules="modules"
   
    class="mySwiper  p-20">
       <div class="testimonials-content p-2    ">
           <div class="swipe testimonials-slider js-testimonials-slider">
               <div class="swiper-wrapper">

                   
                   <div class="swiper-slide testimonials-item">
                       <div class="info">
                           <img src="/images/about.png" class="">
                           <div class="text-box">
                               <h3 class="name">John Doe</h3>
                                <span class="job">web developer</span>
                           </div>
                       </div>

                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laudantium, delectus deserunt adipisci facilis blanditiis assumenda odit iure ab. Amet natus voluptate placeat magni nemo nostrum itaque ex quam totam?</p>
                       <div class="rating">
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                           <i class="fa fa-star" ></i>
                       </div>
                   </div>
               </div>

           </div>
             <!-- If we need pagination -->
        
       </div>
    </swiper>
       </div>

   </section>
</template>

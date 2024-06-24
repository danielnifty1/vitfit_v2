<template>
    <div class="items-center p-1 w-full">
        <!-- <h2 class="text-center text-3xl font-bold ">VITFIT <span class="text-[#630485]">SUCCESS STORY</span></h2> -->
    </div>


    <div class="w-full p-10">
    <swiper 
    :slidesPerView="4"
    :spaceBetween="0"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
   
    class="mySwiper  p-20">
    <swiper-slide class=""> <img src="/images/test1.png" class="" ></swiper-slide>
    <swiper-slide class=""> <img src="/images/test2.png" class=""></swiper-slide>
    <swiper-slide class=""> <img src="/images/test3.png" class=""></swiper-slide>

    <swiper-slide class=""> <img src="/images/test1.png" class="" ></swiper-slide>
    <swiper-slide class=""> <img src="/images/test2.png" class=""></swiper-slide>
    <swiper-slide class=""> <img src="/images/test3.png" class=""></swiper-slide>
    </swiper>
    </div>
</template>

<script>
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
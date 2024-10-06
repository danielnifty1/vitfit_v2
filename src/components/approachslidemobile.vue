<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

//   import './style.css';
// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Autoplay, Pagination, Navigation],
    };
  },
};

// console.log(title)
</script>
<template>
 
    <swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="grid md:grid-cols-3 place-items-center md:p-20 w-full mySwiper"
    >
      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
              Goal Setting</span
            >

            <p class="text-[#7e7d7d] text-center">
              We work closely with you to define your specific goals, whether
              it's weight loss, building muscle, enhancing athletic performance,
              or simply adopting a healthier lifestyle. By establishing clear
              objectives, we can develop a tailored plan that maximizes your
              potential.
            </p>
          </div>
      </swiper-slide>

      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
                Customized Workouts</span
            >

            <p class="text-[#7e7d7d] text-center">
                Our training sessions are carefully crafted to suit your fitness level, preferences, and limitations. Whether you prefer high-intensity workouts, strength training, cardiovascular exercises, or a combination thereof, we will create a program that keeps you engaged and motivated.
            </p>
          </div>
      </swiper-slide>


      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
                Proper Form and Technique:</span
            >

            <p class="text-[#7e7d7d] text-center">
                Safety is our top priority. We ensure that you perform exercises with correct form and technique, reducing the risk of injury and maximizing the effectiveness of each movement. You can be rest assured that every session will be conducted with close attention to detail.

            </p>
          </div>
      </swiper-slide>

      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
                Nutritional Guidance</span
            >

            <p class="text-[#7e7d7d] text-center">
                Exercise alone is not enough to achieve your fitness goals. Our expertise extends beyond the gym floor as we provide nutritional guidance tailored to your needs. We educate you on balanced eating, portion control, and making healthier food choices to complement your training regimen.

            </p>
          </div>
      </swiper-slide>

      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
                Accountability and Support</span
            >

            <p class="text-[#7e7d7d] text-center">
                Consistency is key to long-term success. As your personal trainer, we hold you accountable for your actions and provide unwavering support throughout your fitness journey. We understand the challenges you may face and are here to celebrate your achievements and motivate you during setbacks.


            </p>
          </div>
      </swiper-slide>


      <swiper-slide class="grid grid-cols-1 md:p-10 p-5">
        <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
                Continuous Progress Evaluation</span
            >

            <p class="text-[#7e7d7d] text-center">
                Your progress is meticulously tracked through various assessments, such as body measurements, strength tests, and endurance assessments. Regular evaluations allow us to fine-tune your program and ensure that you consistently progress towards your goals.

            </p>
          </div>
      </swiper-slide>

    </swiper>
 
</template>

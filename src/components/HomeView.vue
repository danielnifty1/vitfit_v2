<script setup lang="ts">
// import { vue } from 'vue'

import testimonialview from "./testimonialView.vue";
import testview from "./testimonialView.vue";


import programslide from "./programslide.vue";

import TestProgram from "./testprogram.vue";


</script>
<template>
  <div class="bg-image contaidner  h-fit bg-contain">
    <div class="grid grid-cols-2 gap-1">
      <div class="text-white md:mt-48  md:px-20 mt-24 md:space-y-32 space-y-5 pl-5  ">
        <div class="space-y-2 md:space-y-0" >
          <h1 class="md:text-6xl md:leading-[100px] font-poppins font-bold">
            THE <span class="text-[#35cdf1]">REAL WORKOUT</span> <br />
            STARTS WHEN YOU <br />
            WANT TO STOP
          </h1>
          <h6 class="text-sm">Push harder than yesterday if you want a different story</h6>
        </div>

        <button class="rounded book-button md:p-5 md:text-2xl p-1  ">
          Book Appointment <span class="fa fa-arrow-right"></span>
        </button>
      </div>

      <div class="md:mt-20 mt-24 pr-5 md:pr-0  ">
        <img src="/images/vid.jpg" class="h-1/12" />
      </div>

    </div>
  </div>

  <div class="bg-[#19092d]">
    <div class="abt1 ">
      <div class="hidden p-10 md:grid grid-cols-1 gap-4 place-items-center">
        <div
          class="rounded-md aboutrectangle w-10/12 h-full p-20 grid grid-cols-1 gap-4"
        >
          <div class="space-y-28">
            <div class="space-y-10">
              <h3 class="font-bold text-7xl text-white">About Us</h3>

              <h6 class="text-[#ECF1F0] leading-8 text-1xl w-5/12 font-poppins">
                Welcome to VitFit where your fitness goals become our mission.
                As a dedicated and experienced personal trainer, I am here to
                guide you on your journey towards achieving optimal health and
                wellness. Let's embark on this transformation path together!
              </h6>
            </div>

            <button
              class="rounded signup-button p-3 text-white text-2xl font-poppins"
            >
              Get Started <span class="fa fa-arrow-right"></span>
            </button>

            <div class="grid grid-cols-4 gap-4 w-full">
              <div class="feature w-full">
                <h6
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  1 ON 1 <br />COACHING
                </h6>
              </div>

              <div class="feature w-full">
                <h6
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  Nutritional<br />Plan
                </h6>
              </div>

              <div class="feature w-full">
                <h6
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  virtual <br />fitcam
                </h6>
              </div>

              <div class="feature w-full">
                <h6
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  cook with <br />you virtually
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:grid md:grid-cols-2 gap-4 md:p-10">
      <div class="md:space-y-10 space-y-5 shadow md:p-20 p-5">
        <h1
          class="font-bold md:text-[50px] text-white md:mt-10 text-center text-2xl font-poppins md:leading-[50px]"
        >
          Work out at home <br class="hidden md:flex" />for free.
        </h1>

        <h6 class="text-[#FAF6FD80] font-poppins p-5 md:p-0">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you’ll have everything you
          need to reach your personal fitness goals – for free!
        </h6>

        <h2 class="font-bold font-poppins ml-[17px] md:ml-0">
          <a href="" class="md:mt-10 text-[#35cdf1] space-x-10"
            >See More <span class="fa fa-arrow-right text-white"></span>
          </a>
        </h2>
      </div>

      <div class="md:p-10 p-5">
        <img src="/images/abt2.png" class="p-5 md:p-5" />
      </div>
    </div>

    <div class="md:grid md:grid-cols-2 md:p-10 flex flex-col-reverse">
      <div class="md:p-10">
        <img src="/images/abt3.png" class="p-10 md:p-0" />
      </div>

      <div class="space-y-2 shadow md:p-20">
        <h1
          class="font-bold md:text-[50px] text-center md:text-left text-white md:mt-10 font-poppins leading-[50px]"
        >
          Our Approach
        </h1>

        <div class="p-10 space-y-10">
          <div class="flex space-x-2">
            <img src="/images/kiss.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold"> Goal Setting</span>
          </div>

          <div class="flex space-x-2">
            <img src="/images/kiss3.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold">
              Customized Workouts</span
            >
          </div>

          <div class="flex space-x-2">
            <img src="/images/kiss2.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold">
              Nutritional Guidance</span
            >
          </div>
        </div>

        <h2 class="font-bold font-poppins pl-10 pb-5 md:pl-0 md:pb-0">
          <a href="" class="mt-10 text-[#35cdf1] space-x-10"
            >See More <span class="fa fa-arrow-right text-white"></span>
          </a>
        </h2>
      </div>
    </div>


    
    <programslide /> 

    <div class="pl-20 mt-10 tgeneral">
      <div class="trangle-bg md:p-10 md:mt-10">
        <div class="md:h-98">
          <p class="text-center md:text-3xl font-bold font-poppins text-white">
            Vitfit Member’s Success <br />Story
          </p>
          <div class="  ">
            <testimonialview class="hidden md:flex" />
            <testview class="flex md:hidden" />

          </div>
        </div>
      </div>
    </div>

    <div class="appco ming">
      <div class="grid grid-cols-2 gap-4 md:p-10 md:pl-20 pr-10 p-2 mt-10 appcoming">
        <div class="p-10 md:pl-20 space-y-8">
          <h2 class="text-[#35cdf1] font-bold md:text-6xl text-3xl tracking-widest">
            VITFIT APP
          </h2>
          <h2 class="text-[#FFA800CC] md:text-6xl text-2xl font-Pompiere">
            COMING SOON!!!
          </h2>
        </div>

        <div class="md:p-10 grid grid-cols-2 gap-4  ">
          <img src="/images/iphone1.png" class="mt-24" />

          <img src="/images/iphone2.png" />
        </div>
      </div>

      <div class="p-10 w-full flex justify-center  ">
        <div class="md:w-12/12 w-full rounded-lg subscribe ">
          <div class="text-[#FAF6FD80] grid grid-cols-1 gap-4 justify-items-center   mt-5 mb-5 " >
            <p class="  md:text-2xl font-bold font-poppins text-[12px]">
              Subscribe our fitness tips
            </p>
            <p class="  font-poppins text-[8px] md:text-sm text-center text-white">
              Clearly communicate the benefits of subscribing, such as exclusive
              <br />content and breaking news.
            </p>
            <form class="md:flex justify-center       " >
              <div class=" md:bg-white p-2 rounded-lg w-full  space-x-2">
                <input name="" id="" placeholder="Enter your email address" class="rounded p-2">
                <button class="rounded bg-[#38D9F1] p-2 text-[10px] text-white subscribe-button">Subscribe  <span class="fa fa-arrow-right"></span></button>
                </div>
             
            </form>

            <!-- <div class="bg-white w-60 rounded-lg flex justify-center">
              <input name="sub" id="" />
              <button
                class="rounded signup-button text-white text-2xl font-poppins"
              >
                Get Started <span class="fa fa-arrow-right"></span>
              </button>
            </div> -->
          </div>
        </div>
      </div>

       
    </div>

   
  </div>
 
</template>

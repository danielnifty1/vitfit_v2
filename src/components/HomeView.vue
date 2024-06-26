<script setup lang="ts">
// import { vue } from 'vue'

import testimonialview from "./testimonialView.vue";

import programslide from "./programslide.vue";
import FooterFile from "./FooterFile.vue";

</script>
<template>
  <div class="bg-image contaidner min-h-screen bg-contain">
    <div class="grid grid-cols-2 gap-1">
      <div class="text-white mt-48 px-20 space-y-32">
        <div>
          <h1 class="text-6xl leading-[100px] font-poppins font-bold">
            THE <span class="text-[#35cdf1]">REAL WORKOUT</span> <br />
            STARTS WHEN YOU <br />
            WANT TO STOP
          </h1>
          <h6>Push harder than yesterday if you want a different story</h6>
        </div>
        <button class="rounded book-button p-5 text-2xl">
          Book Appointment <span class="fa fa-arrow-right"></span>
        </button>
      </div>
      <div class="mt-20 min-h-screen">
        <img src="/images/vid.jpg" class="h-1/12" />
      </div>
    </div>
  </div>

  <div class="bg-[#19092d]">
    <div class="abt1">
      <div class="p-10 grid grid-cols-1 gap-4 place-items-center">
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

    <div class="grid grid-cols-2 gap-4 p-10">
      <div class="space-y-10 shadow p-20">
        <h1
          class="font-bold text-[50px] text-white mt-10 font-poppins leading-[50px]"
        >
          Work out at home <br />for free.
        </h1>

        <h6 class="text-[#FAF6FD80] font-poppins">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you’ll have everything you
          need to reach your personal fitness goals – for free!
        </h6>

        <h2 class="font-bold font-poppins">
          <a href="" class="mt-10 text-[#35cdf1] space-x-10"
            >See More <span class="fa fa-arrow-right text-white"></span>
          </a>
        </h2>
      </div>

      <div class="p-10">
        <img src="/images/abt2.png" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 p-10">
      <div class="p-10">
        <img src="/images/abt3.png" />
      </div>

      <div class="space-y-2 shadow p-20">
        <h1
          class="font-bold text-[50px] text-white mt-10 font-poppins leading-[50px]"
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

        <h2 class="font-bold font-poppins">
          <a href="" class="mt-10 text-[#35cdf1] space-x-10"
            >See More <span class="fa fa-arrow-right text-white"></span>
          </a>
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 place-content-between p-10">
      <div class="bgtext"></div>

      <div class="grid grid-cols-2 place-items-end">
        <div class="space-x-2">
          <span
            class="fa fa-arrow-left p-5 rounded-full border-white border-2 text-white hover:bg-[#35cdf1] hover:border-0"
          ></span>
          <span
            class="fa fa-arrow-right p-5 rounded-full border-white border-2 text-white hover:bg-[#35cdf1] hover:border-0"
          ></span>
        </div>
      </div>
    </div>

    <programslide />

    <div class="pl-20 mt-10 tgeneral">
      <div class="trangle-bg p-10 mt-10">
        <div class="h-98">
          <h1 class="text-center text-3xl font-bold font-poppins text-white">
            Vitfit Member’s Success <br />Story
          </h1>
          <div class="h-[500px]">
            <testimonialview />
          </div>
        </div>
      </div>
    </div>

    <div class="appcoming">
      <div class="grid grid-cols-2 gap-4 p-10 pl-20 mt-10">
        <div class="p-10 pl-20 space-y-8">
          <h2 class="text-[#35cdf1] font-bold text-6xl tracking-widest">
            VITFIT APP
          </h2>
          <h2 class="text-[#FFA800CC] text-6xl font-Pompiere">
            COMING SOON!!!233
          </h2>
        </div>

        <div class="p-10 grid grid-cols-2 gap-4">
          <img src="/images/iphone1.png" class="mt-24" />

          <img src="/images/iphone2.png" />
        </div>
      </div>

      <div class="p-10 w-full flex justify-center">
        <div class="w-8/12 rounded-lg subscribe ">
          <div class="text-[#FAF6FD80] grid grid-cols-1 gap-4 content-center mt-5 mb-5" >
            <h3 class="text-center text-2xl font-bold font-poppins">
              Subscribe our fitness tips
            </h3>
            <p class="text-center font-poppins text-sm text-white">
              Clearly communicate the benefits of subscribing, such as exclusive
              <br />content and breaking news.
            </p>
            <form class="flex justify-center w-full" >
              <div class=" bg-white p-2 rounded-lg">
                <input name="" id="" placeholder="Enter your email address" class="rounded p-2">
                <button class="rounded bg-[#38D9F1] p-2 text-white">Subscribe <span class="fa fa-arrow-right"></span></button>
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

      <FooterFile />
    </div>

   
  </div>
 
</template>

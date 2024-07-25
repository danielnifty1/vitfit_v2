<script setup lang="ts">
// import { vue } from 'vue'

import testimonialview from "./testimonialView.vue";
import testview from "./testimonialView.vue";

import programslide from "./programslide.vue";

import TestProgram from "./testprogram.vue";
</script>
<template>
  <div class=" ">
    <div class="md:grid md:grid-cols-2 gap-1 flex flex-col-reverse">
      <div
        class="text-white md:mt-24 md:space-y-10 space-y-5 md:p-10 pr-5 pl-5 grid place-items-center md:place-items-start"
      >
        <div class="space-y-2 md:space-y-0 grid">
          <h1 class="md:text-5xl md:leading-[80px] font-poppins font-bold">
            THE <span class="text-[#35cdf1]">REAL WORKOUT</span>
            STARTS WHEN YOU WANT TO STOP
          </h1>
          <h6 class="text-[16px] w-10/12 text-[#7e7d7d]">
            Welcome to VitFit where your fitness goals become our mission. Push
            harder than yesterday if you want a different story
          </h6>
        </div>

        <button
          class="rounded-xl text-white book-button md:text-xl pl-[20px] pr-[20px] pt-5 pb-5"
        >
          Book Appointment <span class="fa fa-arrow-right"></span>
        </button>
      </div>

      <div class="md:mt-20 md:pr-20 pl-5 pr-5">
        <div class="imgcopy h-96 bg-contain bg-center bg-no-repeat"></div>
        <!-- <img src="/images/video.png" class="" /> -->
      </div>
    </div>
  </div>

  <!-- OUR SERVICES, OUR APPROACH, READY TO WORK -->
  <div class="bg-[#19092d]">
    <!-- OUR SERVICES-->
    <div class="abt1">
      <div class="p-10 grid grid-cols-1 gap-4 place-items-center">
        <div
          class="rounded-md aboutrectangle md:p-20 grid grid-cols-1 gap-4 bg-cover bg-center bg-no-repeat"
        >
          <div class="md:space-y-28 space-y-5">
            <div class="space-y-5">
              <h3
                class="font-bold md:text-7xl text-4xl mt-10 text-[#2598F1] text-center md:text-left"
              >
                Our Services
              </h3>

              <h6
                class="md:text-[#7e7d7d] leading-[40px] text-[22px] md:w-5/12 font-poppins text-center md:text-left p-2 md:p-2 text-white"
              >
                Vitfit is committed to providing a range of services that cater
                to individual needs and goals, ensuring my clients achieve
                optimal fitness and well-being. Let's break down each service:
              </h6>
            </div>

            <div class="grid md:grid-cols-4 gap-4 w-full p-5 md:p-0">
              <div class="feature w-full bg-[#2598F1]">
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

    <!-- OUR APPROACH -->

    <div class="grid grid-cols-1 place-items-center">
      <h1
        class="font-bold md:text-[50px] text-4xl text-center md:text-left text-white md:mt-10 font-poppins leading-[50px]"
      >
        Our Approach
      </h1>
      <div class="grid md:grid-cols-3 place-items-center md:p-10">
        <div class="grid grid-cols-1 md:p-10 p-5">
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
        </div>

        <div class="grid grid-cols-1 md:p-10 p-5">
          <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss3.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
              Customized Workouts</span
            >

            <p class="text-[#7e7d7d] text-center">
              Our training sessions are carefully crafted to suit your fitness
              level, preferences, and limitations. Whether you prefer
              high-intensity workouts, strength training, cardiovascular
              exercises, or a combination thereof, we will create a program that
              keeps you engaged and motivated.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:p-10 p-5">
          <div
            class="rounded-xl grid grid-cols-1 place-items-center p-5 border-t-[#2598F1] border-t-4 bg-[#FAF6FD0D] space-y-5"
          >
            <img src="/images/kiss2.png" />
            <span class="pt-3 text-[#FAF6FD80] font-bold text-xl">
              Nutritional Guidance</span
            >

            <p class="text-[#7e7d7d] text-center">
              We work closely with you to define your specific goals, whether
              it's weight loss, building muscle, enhancing athletic performance,
              or simply adopting a healthier lifestyle. By establishing clear
              objectives, we can develop a tailored plan that maximizes your
              potential.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- READY TO WORK -->

    <div class="md:grid md:grid-cols-2 gap-4 md:p-10">
      <div class="md:space-y-10 space-y-5 shadow md:p-20 p-5">
        <h1
          class="font-bold md:text-[50px] text-white md:mt-10 text-2xl font-poppins md:leading-[50px]"
        >
          Ready to try VITFIT.
        </h1>

        <h6 class="text-[#FAF6FD80] font-poppins p-5 md:p-0">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you’ll have everything you
          need to reach your personal fitness goals – for free!
        </h6>

        <button
          class="rounded text-white book-button md:text-xl pl-[20px] pr-[20px] pt-2 pb-2"
        >
          See More <span class="fa fa-arrow-right"></span>
        </button>
      </div>

      <div class="md:p-10 p-5">
        <img src="/images/ready.png" class="p-5 md:p-5" />
      </div>
    </div>

    <!-- <TestProgram /> -->
    <programslide />

    <!-- STORY -->
    <div class="pl-20 mt-10 tgeneral">
      <div class="trangle-bg md:p-10 md:mt-10">
        <div class="md:h-98">
          <p class="text-center md:text-3xl font-bold font-poppins text-white">
            Vitfit Member’s Success <br />Story
          </p>
          <div class="  ">
            <testimonialview slidePerview="2" class="hidden md:flex" />
            <testview class="flex md:hidden" />
          </div>
        </div>
      </div>
    </div>

    <div class="appco ming">
      <div
        class="grid md:grid-cols-2 gap-4 md:p-10 md:pl-20 pr-10 p-2 mt-10 appcoming"
      >
        <div class="md:p-10 md:pl-20 md:space-y-8">
          <h2
            class="text-[#35cdf1] font-bold md:text-4xl text-2xl tracking-widest text-center md:text-left"
          >
            VITFIT APP
          </h2>
          <h2 class="text-[#FFA800CC] md:text-6xl text-sm font-Pompiere text-center md:text-left">
            COMING SOON!!!
          </h2>

          <div class="grid grid-cols-1 space-y-5 place-items-center">
            <p class="font-bold text-white">Personalized Workout Plans</p>
            <p class="text-[#FAF6FD80] font-poppins">
              Tailored workout plans based on user goals (weight loss, muscle
              gain, endurance).
            </p>

            <p class="font-bold text-white">Progress Tracking</p>
            <p class="text-[#FAF6FD80] font-poppins">
              Detailed tracking of workouts, including sets, reps, and weights.
              Visual progress charts for weight, body measurements, and
              performance metrics
            </p>

            <p class="font-bold text-white">Nutrition Guidance</p>
            <p class="text-[#FAF6FD80] font-poppins">
              Personalized meal plans and recipes. Calorie and macronutrient
              tracking with barcode scanner for easy input.
            </p>

            <p class="font-bold text-white">Community forums</p>
            <p class="text-[#FAF6FD80] font-poppins">
              Share progress, achievements
            </p>
          </div>

          <div class="grid grid-cols-2">
            <img src="/images/playstore.png" />

            <img src="/images/appstore.png" />
          </div>
        </div>

        <div class="md:p-10 grid gap-4 phone pl-5 mt-5 md:pl-0 md:mt-0  ">
          <img src="/images/mobile.png" class=" " />
        </div>
      </div>

      <div class="grid grid-cols-1 p-10">
        <div class="grid md:grid-cols-2">
          <div class="aboutbg bg-contain bg-center bg-no-repeat md:p-20 p-10  ">
            <h1
              class=" font-bold md:text-[50px] md:text-4xl text-2xl text-center md:text-left text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
            >
              About VITFIT
            </h1>
            <div>

            </div>
          </div>

         
        </div>

        <div class="grid md:grid-cols-2 md:p-10">
          <div class="md:p-10 rounded-xl ">
            <img src="/images/abtimg.png" >
          </div>
          
          <div class="">
          <p class="md:mt-24 mt-5 md:leading-[70px] md:text-4xl text  text-[#FAF6FD80]">Welcome to VitFit where your fitness goals become our mission. As a dedicated and experienced personal trainer, I am here to guide you on your journey towards achieving optimal health and wellness. Let's embark on this transformation path together!</p>

          <span class="text-[#35cdf1] text-4xl cursor-pointer hover:text-[#09a0c4]" >See More...</span>
        </div>
        </div>

      </div>

      <div class="p-10 w-full flex justify-center">
        <div class="md:w-12/12 w-full rounded-lg subscribe">
          <div
            class="text-[#FAF6FD80] grid grid-cols-1 gap-4 justify-items-center mt-5 mb-5"
          >
            <p class="md:text-2xl font-bold font-poppins text-[12px]">
              Subscribe our fitness tips
            </p>
            <p
              class="font-poppins text-[8px] md:text-sm text-center text-white"
            >
              Clearly communicate the benefits of subscribing, such as exclusive
              <br />content and breaking news.
            </p>
            <form class="md:flex justify-center">
              <div class="md:bg-white p-2 rounded-lg w-full md:space-x-2">
                <input
                  name=""
                  id=""
                  placeholder="Enter your email address"
                  class="rounded p-2"
                />
                <button
                  class="rounded bg-[#38D9F1] p-2 text-[10px] text-white subscribe-button"
                >
                  Subscribe <span class="fa fa-arrow-right"></span>
                </button>
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

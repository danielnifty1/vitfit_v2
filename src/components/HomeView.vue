<script setup lang="ts">
// import { vue } from 'vue'

import testimonialview from "./testimonialView.vue";
import testimonialMobile from "./testimonialMobile.vue";

import programslide from "./programslide.vue";
import Approachslide from "./approachslide.vue";
import ApproachslideMobile from "./approachslidemobile.vue";

const proceed = async (): Promise<void> => {
location.replace("services")
}

 
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

        <router-link class="rounded signup-button p-5 text-white" to="appointment">Book Appointment <span class="fa fa-arrow-right"></span></router-link>
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
      <div class="md:p-10 p-2 grid grid-cols-1 gap-4 place-items-center">
        <div class="rounded-md aboutrectangle md:p-20  grid grid-cols-1 gap-4 bg-cover bg-center bg-no-repeat" >
          <div class="md:space-y-28 space-y-5">
            <div class="space-y-5">
              <h3
                class="font-bold md:text-7xl text-4xl mt-10 text-[#2598F1] text-center md:text-left"
              >
                About Us
              </h3>

              <h6
                class="md:text-[#7e7d7d] leading-[40px] md:text-[22px] md:w-5/12 font-poppins text-center md:text-left p-2 md:p-2 text-white"
              >
               At VitFit, we believe that fitness is not just about physical appearance; it's a holistic journey towards better health and well-being. Our mission is to empower individuals to achieve their personal fitness goals through customized training programs, nutrition guidance, and unwavering support. 

              </h6>
            </div>

            <div class="grid md:grid-cols-4 gap-4 w-full p-5 md:p-0">
              <div class="feature w-full bg-[#2598F1] cursor-pointer">
                <h6 
                @click="proceed"
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  1 ON 1 <br />COACHING
                </h6>
              </div>

              <div class="feature w-full cursor-pointer">
                <h6
                 @click="proceed"
                  class="feature-text text-white text-center text-[20px] uppercase cursor:pointer"
                >
                  Nutritional<br />Plan
                </h6>
              </div>

              <div class="feature w-full cursor-pointer">
                <h6
                 @click="proceed"
                  class="feature-text text-white text-center text-[20px] uppercase"
                >
                  virtual <br />fitcam
                </h6>
              </div>

              <div class="feature w-full cursor-pointer">
                <h6
                 @click="proceed"
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

      <div class="w-full  hidden md:grid  ">
        <Approachslide   class=" " />
      </div>
      <div class="w-full md:hidden  ">
        <ApproachslideMobile   class="hidden"   />
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
    <div class="md:pl-20 pl-10 mt-10 tgeneral">
      <div class="trangle-bg md:p-10 md:mt-10">
        <div class="md:h-98">
          <p class="text-center md:text-3xl font-bold font-poppins text-white">
            Vitfit Member’s Success <br />Story
          </p>
          <div class=" ">
            <testimonialview   class="hidden md:flex" />

            <testimonialMobile   class=" md:hidden" />

            
          </div>
        </div>
      </div>
    </div>

    <!-- APP COMING SOON -->
    <div class="appco ming">
      <div
        class="grid md:grid-cols-2 gap-4 md:p-10 md:pl-20 pr-2 pl-2 p-2 mt-10 appcoming"
      >
        <div class="md:p-10 md:pl-20 pl-2 md:space-y-8">
          <h2
            class="text-[#35cdf1] font-bold md:text-4xl text-2xl tracking-widest text-center md:text-left"
          >
            VITFIT APP
          </h2>
          <h2 class="text-[#FFA800CC] md:text-6xl text-sm font-Pompiere text-center md:text-left mb-5 md:mb-0">
            COMING SOON!!!
          </h2>

          <div class="grid grid-cols-1 space-y-5 ">
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

        <div class="grid md:grid-cols-2 md:p-10 ">
          <div class="md:p-10 rounded-xl ">
            <img src="/images/abtimg.png" >
          </div>
          
          <div class="">
          <p class="md:mt-24 mt-5 md:leading-[70px] md:text-4xl text  text-[#FAF6FD80]">Welcome to VitFit where your fitness goals become our mission. As a dedicated and experienced personal trainer, I am here to guide you on your journey towards achieving optimal health and wellness. Let's embark on this transformation path together!</p>

          <span class="text-[#35cdf1] md:text-4xl cursor-pointer hover:text-[#09a0c4]" >See More...</span>
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

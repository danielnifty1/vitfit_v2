<script setup lang="ts">
// import { ref } from "vue";
</script>
<template>
  <div class="grid grid-cols-1 pl-10 pr-10">
    <div class="programs bg-contain bg-center bg-no-repeat mt-10 p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        VITFIT PROGRAMS
      </h1>
    </div>

    <div class="grid grid-cols-1 place-items-center">
      <p class="text-[#7e7d7d] md:mt-10 mb-5 md:mb-0">OUR TRAINING PROGRAMS</p>

      <div class="grid md:grid-cols-3 gap-10 md:p-10 place-items-center">
        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p1.png" class="w-[361.27px] h-[287.47px]" />

          <p class="text-white text-xl">MUSCLE GAIN</p>
          <p class="text-[#7e7d7d] mb-10">
            Our expert trainers provide tailored workout plans and nutritional
            guidance to help you build strength and increase muscle mass
            efficiently.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>

        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p2.png" class="w-[361.27px] h-[287.47px]" />

          <p class="text-white text-xl">WEIGHT LOSS</p>
          <p class="text-[#7e7d7d] mb-10">
            Our holistic approach combines tailored workouts and personalized
            nutrition plans to help you shed pounds and maintain a healthy
            lifestyle.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>

        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p1.png" class="w-[361.27px] h-[287.47px]" />

          <p class="text-white text-xl">CARDIO STRENGTH</p>
          <p class="text-[#7e7d7d] mb-10">
            Boost your cardiovascular fitness and build strength with VitFit’s
            Cardio Strength program. Vitfit combine cardio & strength training
            to improve overall fitness.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>

        <!-- ------------------------------------------------- -->

        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p1.png" />

          <p class="text-white text-xl">MUSCLE GAIN</p>
          <p class="text-[#7e7d7d] mb-10">
            Our expert trainers provide tailored workout plans and nutritional
            guidance to help you build strength and increase muscle mass
            efficiently.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>

        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p2.png" />

          <p class="text-white text-xl">WEIGHT LOSS</p>
          <p class="text-[#7e7d7d] mb-10">
            Our holistic approach combines tailored workouts and personalized
            nutrition plans to help you shed pounds and maintain a healthy
            lifestyle.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>

        <div class="p-10 rounded-xl space-y-5 program">
          <img src="/images/p1.png" />

          <p class="text-white text-xl">CARDIO STRENGTH</p>
          <p class="text-[#7e7d7d] mb-10">
            Boost your cardiovascular fitness and build strength with VitFit’s
            Cardio Strength program. Vitfit combine cardio & strength training
            to improve overall fitness.
          </p>
          <div>
            <router-link
              class="rounded signup-button p-2 text-white mt-10"
              to="programdetail"
              >See More</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="rounded-md programrectangle md:p-20 grid grid-cols-1 place-items-start gap-4 border-sm bg-cover bg-center bg-no-repeat"
    >
      <div class="p-10 rounded-xl space-y-5 program">
        <p class="text-white text-xl leading-10">
          GET EXPERT TRAINING SESSION <br />TODAY
        </p>
        <div class="grid grid-cols-1 space-y-5">
          <div class="flex space-x-2">
            <span
              class="fa fa-check text-[#35cdf1] rounded-full border p-1 border-[#35cdf1]"
            ></span>
            <p class="text-[#7e7d7d]">1 on 1 Coaching</p>
          </div>

          <div class="flex space-x-2">
            <span
              class="fa fa-check text-[#35cdf1] rounded-full border p-1 border-[#35cdf1]"
            ></span>
            <p class="text-[#7e7d7d]">Virtual Fitcam</p>
          </div>

          <div class="flex space-x-2">
            <span
              class="fa fa-check text-[#35cdf1] rounded-full border p-1 border-[#35cdf1]"
            ></span>
            <p class="text-[#7e7d7d]">Nutritional Guidance</p>
          </div>

          <div class="flex space-x-2">
            <span
              class="fa fa-check text-[#35cdf1] rounded-full border p-1 border-[#35cdf1]"
            ></span>
            <p class="text-[#7e7d7d]">Cook with you Virtually</p>
          </div>
        </div>
        <div class="flex">
          <router-link
            class="rounded signup-button w-full p-5 text-center text-white"
            to="appointment"
            >Book Appointment</router-link
          >
        </div>
      </div>
    </div>


     <!-- testimony -->
  <div class="grid grid-cols-1 place-items-center mt-10 ">
    <div class="grid text-[#7e7d7d] text-center">
      <p class="text-[#7e7d7d]">Testimonials</p>
      <p class="text-xl font-bold">Happy Clients</p>
    </div>

    <div class="grid md:grid-cols-3 p-20 space-y-5 border-b border-gray-900">
      <div class="grid border-l">
        <div class="flex p-5 space-x-5">
          <img src="/images/about.png" class="rounded-full w-[50px] h-[50px]" />
          <div class="grid">
            <h1 class="font-bold text-white">Ogechi Prisca</h1>
            <p class="text-[#7e7d7d] text-sm">Actor</p>
          </div>
        </div>

        <div class="p-5">
          <p class="text-[#7e7d7d]">
            <b class="text-[#2598F1] text-2xl">"</b>

            With over 20 years in the fitness industry, Bright has dedicated his
            career to helping people achieve their health and wellness goals. As
            the co-founder of VITFIT, Bright’s vision is to create a supportive
            community where everyone can thrive. He holds a Master’s degree in
            Exercise Science and is a certified personal trainer.
          </p>
        </div>
      </div>

      <div class="grid border-l">
        <div class="flex p-5 space-x-5">
          <img src="/images/about.png" class="rounded-full w-[50px] h-[50px]" />
          <div class="grid">
            <h1 class="font-bold text-white">Ogechi Prisca</h1>
            <p class="text-[#7e7d7d] text-sm">Actor</p>
          </div>
        </div>

        <div class="p-5">
          <p class="text-[#7e7d7d]">
            <b class="text-[#2598F1] text-2xl">"</b>

            With over 20 years in the fitness industry, Bright has dedicated his
            career to helping people achieve their health and wellness goals. As
            the co-founder of VITFIT, Bright’s vision is to create a supportive
            community where everyone can thrive. He holds a Master’s degree in
            Exercise Science and is a certified personal trainer.
          </p>
        </div>
      </div>

      <div class="grid border-l">
        <div class="flex p-5 space-x-5">
          <img src="/images/about.png" class="rounded-full w-[50px] h-[50px]" />
          <div class="grid">
            <h1 class="font-bold text-white">Ogechi Prisca</h1>
            <p class="text-[#7e7d7d] text-sm">Actor</p>
          </div>
        </div>

        <div class="p-5">
          <p class="text-[#7e7d7d]">
            <b class="text-[#2598F1] text-2xl">"</b>

            With over 20 years in the fitness industry, Bright has dedicated his
            career to helping people achieve their health and wellness goals. As
            the co-founder of VITFIT, Bright’s vision is to create a supportive
            community where everyone can thrive. He holds a Master’s degree in
            Exercise Science and is a certified personal trainer.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

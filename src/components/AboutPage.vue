<script setup lang="ts">
import { ref } from "vue";
</script>
<template>
  <div class="grid grid-cols-1 pl-10 pr-10">
    <div class="abg bg-contain bg-center bg-no-repeat mt-10 p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        ABOUT VITFIT
      </h1>
    </div>

    <p
      class="md:pl-20 md:pr-20 leading-8 text-center md:text-left text-[#FAF6FD80]"
    >
      Welcome to VitFit where your fitness goals become our mission. As a
      dedicated and experienced personal trainer, I am here to guide you on your
      journey towards achieving optimal health and wellness. Let's embark on
      this transformation path together! At VitFit, we offer comprehensive and
      personalized training programs designed to help you reach your desired
      outcomes efficiently and safely. Here are some key elements of our
      approach. We work closely with you to define your specific goals, whether
      it's weight loss, building muscle, enhancing athletic performance, or
      simply adopting a healthier lifestyle.
    </p>
  </div>

  <div class="grid md:grid-cols-2 md:pl-10 md:pr-10">
    <div class="mt-10">
      <img class="md:pl-20 pl-20 pr-20 md:p-0" src="/images/abt1.png" />
    </div>

    <div class="mt-10 space-y-5" style="">
      <img class="md:pl-20 pl-20 pr-20 md:p-0 h-6/12" src="/images/abt22.png" />
      <img class="md:pl-20 pl-20 pr-20 md:p-0" src="/images/abt33.png" />
    </div>
  </div>

  <div
    class="md:p-20 p-10 grid place-items-center space-y-10"
    style="
      background: linear-gradient(
        116.71deg,
        rgba(250, 247, 253, 0.05) 3.21%,
        rgba(250, 246, 253, 0.04) 100%
      );
    "
  >
    <p class="md:text-2xl text-sm text-[#7e7d7d] text-center">
      VITFIT mission is to make fitness accessible <br />to everyone
    </p>
    <router-link class="rounded signup-button p-2 text-white" to="Signup"
      >Book Appointment <span class="fa fa-arrow-right"></span
    ></router-link>
  </div>

  <!-- Team Slider -->

  <div class="md:flex md:p-20 pt-10 space-x-10">
    <div class="p -20 p-5 md:p-0">
      <img src="/images/teamimg.png" />
    </div>
    <div class="md:p-20 p-5 md:w-6/12 phone bg-contain bg-center bg-no-repeat">
      <h1 class="md:text-4xl text-sm text-[#2598F1] pb-10">
        Bright VITFIT - Founder
      </h1>
      <p class="text-[#7e7d7d]">
        <b class="text-[#2598F1] text-sm">"</b>

        With over 20 years in the fitness industry, Bright has dedicated his
        career to helping people achieve their health and wellness goals. As the
        co-founder of VITFIT, Bright’s vision is to create a supportive
        community where everyone can thrive. He holds a Master’s degree in
        Exercise Science and is a certified personal trainer.

        <b class="text-[#2598F1] text-2xl">"</b>
      </p>
    </div>
  </div>

  <!-- testimony -->
  <div class="grid grid-cols-1 place-items-center ">
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
  <!-- OUR GALLARY -->

  <div
    class="grid md:grid-cols-4 p-20 gap-0 place-items-c enter  space-y-5 md:space-y-0"
  >
    <div class="">
      <h2 class="text-white text-2xl mb-10">OUR GALLERY</h2>
      <router-link class="rounded signup-button p-2 text-white" to="Signup"
        >View All <span class="fa fa-arrow-right"></span
      ></router-link>
    </div>

    <div class="w-full grid">
      <img src="/images/1coaching.png" class="rounded" />
      <div class="border-b w-fit">
        <p class="text-[#7e7d7d]">1 on 1 Coaching</p>
        <p class="text-white">Muscle Training</p>
      </div>
    </div>

    <div class="w-full grid">
      <img src="/images/1coaching.png" class="rounded" />
      <div class="border-b w-fit">
        <p class="text-[#7e7d7d]">1 on 1 Coaching</p>
        <p class="text-white">Muscle Training</p>
      </div>
    </div>

    <div class="w-full grid">
      <img src="/images/1coaching.png" class="rounded" />
      <div class="border-b w-fit">
        <p class="text-[#7e7d7d]">1 on 1 Coaching</p>
        <p class="text-white">Muscle Training</p>
      </div>
    </div>
  </div>
</template>

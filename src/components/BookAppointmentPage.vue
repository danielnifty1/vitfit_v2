<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Calendar = defineAsyncComponent(()=> import('./calendar/index.vue'))
 
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24">
    <div class="book bg-contain bg-center bg-no-repeat mt- p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        BOOK APPOINTMENT
      </h1>
    </div>

    <div class="md:flex md:p-20 p-10 space-x-2 grid">
      <div class="md:w-4/12 bg-[#FAF6FD0D] pt-2 space-y-10 rounded-tl-xl rounded-bl-xl hidden md:block">
        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full   space-x-2 ml-[60px]  ">
              <span class="fa fa-calendar"></span>
              <p class="text-sm font-bold ">Duration & Time Zone</p>
            </div>

            <img src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class=""> 30 mins </span>
            <span class=""> Africa/Lagos (GMT+1) </span>
          </div>
        </div>


        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full place-items-center space-x-2 ml-[60px]">
              <span class="fa fa-calendar"></span>
              <p class=" ">Date & Time</p>
            </div>

            <img src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class=""> 10:30 -11:00 AM </span>
            <span class=""> Fri, Jul 02, 2024 </span>
          </div>
        </div>


        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full place-items-center space-x-2 ml-[60px]">
              <span class="fa fa-user"></span>
              <p class="font-bold ">Your Information</p>
            </div>

            <img src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class=""> 10:30 -11:00 AM </span>
            <span class=""> Fri, Jul 02, 2024 </span>
          </div>
        </div>
      </div>

      <div class="md:w-8/12 bg-[#FAF6FD0D]  rounded-tr-xl rounded-br-xl">
        <Calendar class="w-full" />

      </div>
    </div>
  </div>
</template>

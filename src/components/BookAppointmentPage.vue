<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';
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

      <div class="md:w-10/12 bg-[#FAF6FD0D] grid grid-cols-1 rounded md:rounded-none   md:rounded-tr-xl md:rounded-br-xl ">
        <div class="flex p-10 border-b-2 border-gray-700">
          <!-- <ChevronLeftIcon class="h-8 w-8 text-gray-400 cursor-pointer rounded-full p-2 bg-[#FAF6FD0D] font-bold text-xl"   /> -->
          <span class="fa fa-chevron-left h-8 w-8   cursor-pointer rounded-full p-2 bg-[#FAF6FD0D]  text-white"></span>
          <h4 class="p-1 font-bold text-white">Date & Time</h4>
         
        </div>
        <div class="grid md:grid-cols-2 place-items- md:p-2">
          <Calendar class="w-full " />

          <div class="text-white p-10">
            HHH
          </div>

        </div>
         

      </div>
    </div>
  </div>
</template>

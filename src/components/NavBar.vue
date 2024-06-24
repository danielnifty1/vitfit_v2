<template>
  <div class="bg-image contaidner min-h-screen bg-contain">
    <nav class="flex items-center">
      <div class="px-10 ml-10">
        <h4 class="text-white font-bold text-[24px]">
          VIT<span class="text-[#2598F1]">FIT</span>
        </h4>
      </div>

      <ul class="flex-1 text-center">
        <li class="list-none inline-block px-5">
          <a class="no-underline  px-2 text-[#35cdf1]" href="#">Home</a>
        </li>
        <li class="list-none inline-block px-5">
          <a class="no-underline text-white px-2" href="#">Services</a>
        </li>
        <li class="list-none inline-block px-5">
          <a class="no-underline text-white px-2" href="#">Programs</a>
        </li>
        <li class="list-none inline-block px-5">
          <a class="no-underline text-white px-2" href="#">Contact</a>
        </li>
        <li class="list-none inline-block px-5">
          <a class="no-underline text-white px-2" href="#">Login</a>
        </li>
      </ul>

      <ul class="p-10">
        <button class="rounded signup-button p-2">Join Us Now</button>
      </ul>
    </nav>
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
        <img src="/images/vid.jpg" class="h-1/12" >
      </div>
    </div>
  </div>
</template>

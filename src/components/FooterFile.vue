<script setup lang="ts">
// import { vue } from 'vue'
let Links = [
  { name: "Home", link: "home" },
  { name: "About Us", link: "about" },
  { name: "Services", link: "services" },
  { name: "Programs", link: "programs" },
  { name: "Contact Us", link: "contact" },
  { name: "Book Appointment", link: "appointment    " },
];
</script>
<template>
    <div class=" md:p-10 abt1">
        <div class="grid grid-cols-2 gap-4 content-between ">
            <div class="w-full space-y-5 md:pl-10  ">
                <div class="flex pl-10 space-x-2 ">
                    <img src="/images/vitfit.png" >
                    <h4 class="text-[#2598F1] font-bold text-[24px]">
        VIT<span class="">FIT</span>
      </h4>
                </div>

                <p class="pl-10 text-[#FAF6FD80]"> VitFit where your fitness goals <br>become our mission.</p>
            </div>

            <div class="md:grid md:grid-cols-1 md:flex w-full   md:pr-10">
                <div class="grid grid-cols-3 gap-4 md:pr-20 md:mr-20 space-x-10">
                    <div class="text-white">
                        <h1 class="font-bold font-poppins text-[#FAF6FD80]">Quick Link</h1>
                        <ul>

                            <li  v-for="link in Links"
                            :key="link.name">

                            <router-link    class=" " :to="link.link">{{
            link.name
          }}</router-link>

                            </li>


                             
                        </ul>
                    </div>

                    <div class="text-white">
                        <h1 class="font-bold font-poppins text-[#FAF6FD80]">Support</h1>
                        <ul>
                            <li><a>FAQ</a></li>
                            <li><a>Support Center</a></li>
                             
                        </ul>
                    </div>
                    <div class="text-white md:grid hidden">
                        <h1 class="font-bold font-poppins text-[#FAF6FD80]">Social Media</h1>
                        <ul class="flex space-x-5">
                            <li><a><span class="fa fa-instagram"></span></a></li>
                            <li><a><span class="fa fa-twitter"></span></a></li>
                            <li><a><span class="fa fa-facebook"></span></a></li>
                             
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <hr>
    <div class="md:pl-20 pl-10 pt-5 grid grid-cols-2 gap-4 content-between">
        <div class="flex md:pl-10 p-2 pb-5 text-white md:space-x-5 ">
            <img src="/images/curtesy.png">
            <span>2024 VITFIT</span>
        </div>
        <div class="justify-center flex" >
            <ul class="flex space-x-5 text-white " >
                <li><a>Term Of Use</a></li>
                <li><a>Privacy Policy</a></li>

            </ul>
        </div>
    </div>
</template>
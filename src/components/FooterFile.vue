<script setup lang="ts">
// import { vue } from 'vue'
</script>
<template>
    <div class="p-10  ">
        <div class="grid grid-cols-2 gap-4 content-between">
            <div class="w-5/12 space-y-5 pl-10">
                <div class="flex pl-10 space-x-2 ">
                    <img src="/images/logo.png" >
                    <h4 class="text-white font-bold text-[24px]">
                    VIT<span class="text-[#2598F1]">FIT</span>
                    </h4>
                </div>
                <p class="pl-10 text-[#FAF6FD80]"> VitFit where your fitness goals become our mission.</p>
            </div>
            <div class="grid grid-cols-1   pr-10">
                <div class="grid grid-cols-3 gap-4 pr-20 mr-20">
                    <div class="text-white">
                        <h1 class="font-bold font-poppins text-white">Sitemap</h1>
                        <ul>
                            <li><a>About Us</a></li>
                            <li><a>Services</a></li>
                            <li><a>Programs</a></li>
                            <li><a>Help Center</a></li>
                        </ul>
                    </div>

                    <div class="text-white">
                        <h1 class="font-bold font-poppins text-white">Support</h1>
                        <ul>
                            <li><a>FAQ</a></li>
                            <li><a>Support Center</a></li>
                             
                        </ul>
                    </div>
                    <div class="text-white">
                        <h1 class="font-bold font-poppins text-white">Social Media</h1>
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
    <div class="pl-20 pt-5 grid grid-cols-2 gap-4 content-between">
        <div class="flex pl-10 pb-5 text-white space-x-5 ">
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
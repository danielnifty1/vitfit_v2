<script setup lang="ts">
// import { ref,vue } from "vue";

// var datez = new Date();
// // console.log(datez);
// console.log(datez.getFullYear());

// let foodName = (<HTMLInputElement>document.getElementById("food-name-val"));
// var g=document.getElementById('ge').value;
// alert(g)
// let sliderContainer = document.getElementById('sliderContainer');
// let slider=document.getElementById('slider');

// let cards =slider.getElementsByClassName('sliderli')
// let elementsToShow=3;
// let sliderContainerWidth=sliderContainer.clientWidth;
// let cardWidth=sliderContainerWidth/elementsToShow;
// slider.style.width=cards.length*cardWidth+"px";

// for(let index=0; index<cards.length; index++){
//     const element=cards[index]
//     element.style.width=cardWidth+'px'
// }
</script>
<template>
  <div class="grid md:grid-cols-1 gap-4 place-content-between p-10">
    <div class="bgtext bg-cover bg-center bg-no-repeat md:p-20 ">
      <h1
        class="font-bold md:text-[45px] text-xl   text-center md:text-left text-[#35cdf1] md:mt-10 font-poppins md:leading-[50px] p-10"
      >
        Explore Our Program
      </h1>
    </div>

    <!-- <div class="md:grid gap-4 grid-cols-2 justify-self-end hidden md:mt-20">
      <div class="space-x-3">
        <span
          class="cursor-pointer fa fa-arrow-left p-5 rounded-full border-white border text-white hover:bg-[#35cdf1] hover:border-[#35cdf1]"
        ></span>

        <span
          class="cursor-pointer fa fa-arrow-right p-5 rounded-full border-white border text-white hover:bg-[#35cdf1] hover:border-[#35cdf1]"
        ></span>
      </div>
    </div> -->
  </div>
  <section>
    <div class="flex bg-[#19092d]">
      <div class="w-full md:p-10" id="sliderContainer" ref="sliderContainer">
        <ul
          id="slider"
          ref="slider"
          class="md:flex grid w-full md:space-x-5 p-10 space-y-5 md:space-y-0"
        >
          <li class="w-full sliderli">
            <div class="rounded-lg p-5 grid grid-cols-1 gap-4 sliderbox">
              <img src="/images/group3.png" />
              <h3 class="font-poppins text-2xl text-white font-bold">
                Fat Lose
              </h3>
              <span class="text-[#FAF6FD80] font-bold font-poppins"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis, nunc a pretium viverra.</span
              >
            </div>
          </li>

          <li class="w-full sliderli">
            <div class="rounded-lg p-5 grid grid-cols-1 gap-4 sliderbox">
              <img src="/images/group3.png" />
              <h3 class="font-poppins text-2xl text-white font-bold">
                Fat Lose
              </h3>
              <span class="text-[#FAF6FD80] font-bold font-poppins"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis, nunc a pretium viverra.</span
              >
            </div>
          </li>

          <li class="w-full sliderli">
            <div class="rounded-lg p-5 grid grid-cols-1 gap-4 sliderbox">
              <img src="/images/group3.png" />
              <h3 class="font-poppins text-2xl text-white font-bold">
                Fat Lose
              </h3>
              <span class="text-[#FAF6FD80] font-bold font-poppins"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis, nunc a pretium viverra.</span
              >
            </div>
          </li>

          <li class="w-full sliderli">
            <div class="rounded-lg p-5 grid grid-cols-1 gap-4 sliderbox">
              <img src="/images/group3.png" />
              <h3 class="font-poppins text-2xl text-white font-bold">
                Fat Lose
              </h3>
              <span class="text-[#FAF6FD80] font-bold font-poppins"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis, nunc a pretium viverra.</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

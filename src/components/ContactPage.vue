<script setup lang="ts">
import { reactive } from 'vue';

// import { ref } from "vue";
const userInfo = reactive({
  fullname: "",
  email: "",

  phone: "",
  Message: "",

  

  // email: "",
});

const proceed = async (): Promise<void> => {
let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;

if (shand.length != 0) {
  shand[0].style.transform = "translate(-50%, -100%) rotate(" + s * 6 + "deg)";
}
}
</script>
<template>
  <div class="grid grid-cols-1 pl-24 pr-24">
    <div class="contact bg-contain bg-center bg-no-repeat mt- p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        CONTACT VITFIT
      </h1>
    </div>

    <div class="grid grid-cols-1 place-items-center p-20">
      <p class="text-[#7e7d7d] mb-10 text-center">
        Fill up the contact form and we will respond to you <br />in 24 hours.
      </p>

      <div class="p-10 rounded-xl space-y-5 program w-6/12">
        <form class="flex-1 space-y-5">
          <input
          v-model="userInfo.fullname"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full"
            placeholder="name"
          />

          <input
          v-model="userInfo.email"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full"
            placeholder="phone"
          />

          <input
          v-model="userInfo.phone"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="shadow-xl p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full"
            placeholder="Email Address"
          />

          <textarea
          v-model="userInfo.Message"
            class="bg-[#2f2c4d] border border-[#7e7d7d] w-full h-[200px] rounded-xl"
            placeholder="phone"
          >
          </textarea>

          <button  @click="proceed" class="bg-[#35cdf1] w-full p-5 rounded-xl text-white">
            submit <span class="fa fa-spin fa-spin"></span>
          </button>
        </form>
      </div>
    </div>

    <div class="grid grid-cols-2 place-items-center ">
      <div class="grid space-y-5">
        <p class="text-white font-bold text-2xl">GET IN TOUCH</p>
        <div class="grid">
          <div class="flex">
            <li class="text-2xl text-[#35cdf1]"></li>
            <span class="text-[#7e7d7d] " >27 Surulere, Lagos State</span>
          </div>
          <div class="flex">
            <li class="text-2xl text-[#35cdf1]"></li>
            <span class="text-[#7e7d7d] ">Monday to Saturday: 9am to 8pm</span>
          </div>
        
          <div class="flex">
            <li class="text-2xl text-[#35cdf1]"></li>
            <span class="text-[#7e7d7d] ">Adazionp@gmail.com</span>
          </div>
          <div class="flex">
            <li class="text-2xl text-[#35cdf1]"></li>
            <span class="text-[#7e7d7d] ">  +234 816 928 8524</span>
          </div>
        </div>
      </div>

      <div class=" w-[769px] h-[337px]">
        <iframe class="rounded-xl w-[769px] h-[337px]  border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2093935046555!2d-73.98222192445932!3d40.66935504022606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0230bd0393%3A0xc03220e88110dc9b!2s478%205th%20St%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sng!4v1718372896803!5m2!1sen!2sng"  style="border:0;"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


<!-- width="600" height="450" -->
    </div>
  </div>
</template>

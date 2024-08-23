<script setup lang="ts">
import { reactive } from 'vue';
// import { Axios } from "axios";

// import { ref } from "vue";
import axios from 'axios';


const userInfo = reactive({
  name: "",
  email: "",

  phone: "",
  Message: "",

  

  // email: "",
});

const proceed = async (): Promise<void> => {
let loader = document.getElementsByClassName ('loader') as HTMLCollectionOf<HTMLElement>;

if (loader.length != 0) {
  loader[0].style.display = "";
}
const data = {
    email: userInfo.email as string,
    name: userInfo.name as string,
    phone: userInfo.phone as string,
    message: userInfo.Message as string,
}
// https://vitfitv2server.onrender.com/v1/localhost:8080/v1/user/contactus
const response =await axios.post('user/contactus',data)
.then(response => {
    // Handle the success response
    console.log(response.data.message); // Prints "Hello, world!"
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
  })
  .catch(error => {
    // Handle the error response
    console.error(error);
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
  });


// await this.request.post("/user/booking", data, {});

}
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24 pr-5 pl-5">
    <div class="contact bg-contain bg-center bg-no-repeat mt- p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        CONTACT VITFIT
      </h1>
    </div>

    <div class="grid grid-cols-1 place-items-center md:p-20">
      <p class="text-[#7e7d7d] mb-10 text-center">
        Fill up the contact form and we will respond to you <br />in 24 hours.
      </p>

      <div class="p-10 rounded-xl space-y-5 program md:w-6/12">
        <div class="flex-1 space-y-5">
          <input
          v-model="userInfo.name"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full text-white"
            placeholder="name"
          />

          <input
          v-model="userInfo.phone"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full text-white"
            placeholder="phone"
          />

          <input
          v-model="userInfo.email"
            type="text"
            name="usernam"
            id="usernam"
            autocomplete="usernam"
            class="shadow-xl p-4 rounded bg-[#2f2c4d] border border-[#7e7d7d] w-full text-white"
            placeholder="Email Address"
          />

          <textarea
          v-model="userInfo.Message"
            class="bg-[#2f2c4d] border border-[#7e7d7d] w-full text-white h-[200px] rounded-xl p-4"
            placeholder="message"
          >
          </textarea>

          <button  @click="proceed" class="bg-[#35cdf1] w-full p-5 rounded-xl text-white">
            submit <span id="loader" class="fa fa-spin fa-spinner loader" style="display:none;"></span>
          </button>
        </div>
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

      <div class=" md:w-[769px] md:h-[337px] hidden md:grid">
        <iframe class="rounded-xl md:w-[769px]  h-[337px]  border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2093935046555!2d-73.98222192445932!3d40.66935504022606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0230bd0393%3A0xc03220e88110dc9b!2s478%205th%20St%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sng!4v1718372896803!5m2!1sen!2sng"  style="border:0;"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


<!-- width="600" height="450" -->
    </div>
  </div>
</template>

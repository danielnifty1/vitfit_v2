<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "../composable/auth.composable";
import { useAuthStore } from "../core/store";

const route = useRoute();
const store = useAuthStore();
const loading = ref(false);
const disabled = ref(false);

 

const errorvalue=reactive({
networkerror:""

})
 

const selectedDate = route.query.date;
const selectedTime = route.query.time;
const selectedZone = route.query.zone;

const selectedGender = route.query.gender;

const selectedAge = route.query.age;

const goal = route.query.goal;

const services = route.query.services;

const price = route.query.price;

const userInfo = reactive({
  fullname: "",
  email: "",

  phone: "",
  instagram: "",

  SelectedGender: "",
  SelectedAge: "",

  goal: "",
  services: "",
  price: "",

  SelectedDate: "",
  SelectedTime: "",

  SelectedZone: "",

  // email: "",
});

const proceed = async (): Promise<void> => {
  let loader = document.getElementsByClassName ('loader') as HTMLCollectionOf<HTMLElement>;
    if (loader.length != 0) {
  loader[0].style.display = "";
}
  const data = {
    email: userInfo.email as string,
    fullname: userInfo.fullname as string,
    phone: userInfo.phone as string,

    instagram: userInfo.instagram as string,

    selectedDate: selectedDate as string,

    selectedTime: selectedTime as string,

    selectedZone: selectedZone as string,

    selectedGender: selectedGender as string,

    selectedAge: selectedAge as string,

    goal: goal as string,

    services: services as string,

    price: price as string,
 

  };
  
  const [error, success] = await useAuth(store.userRegister(data), loading);

  if (success || error) {
      disabled.value = false;
      if (loader.length != 0) {
  loader[0].style.display = "none";
}
    }
    if (success.value !== "") {
      //   redirect to the signin page
      
      setTimeout(() => {
        window.location.href = "/successful";
      }, 3000);


    }
   
    
    if(error.value!==""){
      // alert(error.value)
      errorvalue.networkerror="there was an Error, kindly Trying again later"
    }
  
 
};
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24">
    <div class="book bg-contain bg-center bg-no-repeat mt- p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        BOOK APPOINTMENT
      </h1>
      <p class="text-center text-[#FAF6FD80] text-xl">
        Sign up and Arrange Your Free Consultation <br />
        Call here.
      </p>
    </div>

    <div class="md:flex md:p-20 p-10 space-x-2 grid">
      <div
        class="md:w-4/12 bg-[#FAF6FD0D] pt-2 space-y-10 rounded-tl-xl rounded-bl-xl hidden md:block"
      >
        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full space-x-2 ml-[60px]">
              <span class="fa fa-calendar"></span>
              <p class="text-sm font-bold">Duration & Time Zone</p>
            </div>

            <img src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class=""> 30 mins </span>
            <span class=""> {{selectedZone}} </span>
          </div>
        </div>

        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full place-items-center space-x-2 ml-[60px]">
              <span class="fa fa-calendar"></span>
              <p class="text-[#FAF6FDB2]">Date & Time</p>
            </div>

            <img src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class="">Time: {{selectedTime}}</span>
            <span class="">Date:  {{selectedDate}} </span>
          </div>
        </div>

        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-0 text-white place-items-center p-2 w-full"
          >
            <div class="flex w-full place-items-center space-x-2 ml-[60px]">
              <span class="fa fa-user"></span>
              <p class="font-bold">Your Information</p>
            </div>

            <img class="sepia" src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            
          </div>
        </div>
      </div>

      <div
        class="md:w-10/12 bg-[#FAF6FD0D] grid grid-cols-1 rounded md:rounded-none md:rounded-tr-xl md:rounded-br-xl"
      >
        <div class="flex p-10 border-b-2 border-gray-700">
          <!-- <ChevronLeftIcon class="h-8 w-8 text-gray-400 cursor-pointer rounded-full p-2 bg-[#FAF6FD0D] font-bold text-xl"   /> -->
          <span
            class="fa fa-chevron-left h-8 w-8 cursor-pointer rounded-full p-2 bg-[#FAF6FD0D] text-white"
          ></span>
          <h4 class="p-1 font-bold text-[#FAF6FDB2]">Personal Information</h4>
        </div>

  <p id="errorid" class="text-center text-sm text-red-500 font-bold">{{errorvalue.networkerror}}</p>
        <div class="grid md:grid-cols-1 md:p-2 space-y-2">
          <div class="grid md:grid-cols-2 gap-0 space-y-5">
            <div class="grid md:p-10 p-2 space-y-2">
              <span class="text-[#FAF6FDB2]"> Your Fullname </span>
              <input
                v-model="userInfo.fullname"
                class="p-4 bg-[#FAF6FD0D] text-white rounded-xl"
                placeholder=" Your Fullname" 
              />
            </div>

            <div class="grid md:p-10 p-2 space-y-2">
              <span class="text-[#FAF6FDB2]"> Your Email Address </span>
              <input
                v-model="userInfo.email"
                class="p-4 bg-[#FAF6FD0D] rounded-xl text-white"
                placeholder="Email Address"
              />
            </div>

            <div class="grid md:p-10 p-2 space-y-2">
              <span class="text-[#FAF6FDB2]"> Your Phone Number </span>
              <input
                v-model="userInfo.phone"
                class="p-4 bg-[#FAF6FD0D] rounded-xl text-white"
                placeholder="Phone Number"
              />
            </div>

            <div class="grid md:p-10 p-2 space-y-2">
              <span class="text-[#FAF6FDB2]">
                What is Your Instagram usename?
              </span>
              <input
                v-model="userInfo.instagram"
                class="p-4 bg-[#FAF6FD0D] rounded-xl text-white"
                placeholder="Instagram usename"
              />
            </div>
          </div>

          <div class="flex md:p-10 p-2 space-x-2 md:space-x-0">
            <input type="checkbox" />
            <p class="md:p-5 text-[#FAF6FDB2] md:font-bold md:text-5sm">
              By providing my phone number, I agree to receive text messages
              from the business
            </p>
          </div>

          <div class="flex mt-5 w-full md:justify-end justify-center p-5">
            <button
              @click="proceed"
              class="rounded signup-button p-2 text-white"
            >
              Book Appoitment 
              <span id="loader" class="fa fa-spin fa-spinner loader" style="display:none;"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

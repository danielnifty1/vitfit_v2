<script setup lang="ts">
// import { defineAsyncComponent } from "vue";
import {  reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const selectedDate = route.query.date;
const selectedTime = route.query.time;
const selectedZone = route.query.zone;
console.log(route.query)
if(selectedDate && selectedTime && selectedZone){

}
  else{
  window.location.href = "/appointment"
  }

// if()

// console.log(selectedDate + " " + selectedTime + " " + selectedZone);
const userInfo = reactive({
  SelectedGender: "",
  SelectedAge: "",

  goal: "",
  services: "",
  price: "",

  // email: "",
});

let gender = [
  { id: 1, gender: "Male" },
  { id: 2, gender: "Female" },
  { id: 2, gender: "Other" },
];
let ageGap = [
  { id: 1, age: "18-29" },
  { id: 2, age: "30-39" },
  { id: 3, age: "40-49" },
  { id: 4, age: "50+" },
];
let price = [
  { id: 1, price: "$100 - $200" },
  { id: 2, price: "$200 - $300" },
  { id: 3, price: "$300 - $400" },
  { id: 4, price: "$400 - $500" },
];
let services = [
  { id: 1, serviceValue: "1 ON 1 coaching", service: "1 on 1 <br>coaching" },
  { id: 2, serviceValue: "Virtual Fitcam", service: "Virtual <br>Fitcam" },
  {
    id: 3,
    serviceValue: "Cook with you Virtually",
    service: "Cook with<br>you Virtually",
  },
  { id: 4, serviceValue: "Nutritional Plan", service: "Nutritional<br>Plan" },
];

// methods
const getGender = (genderIndex: number) => {
  const actualGender = gender[genderIndex];
  userInfo.SelectedGender = actualGender.gender;
  // alert(actualGender.gender)
};

const getAge = (ageIndex: number) => {
  const actualAge = ageGap[ageIndex];
  userInfo.SelectedAge = actualAge.age;
};

const getServices = (service: number) => {
  const actualService = services[service];
  userInfo.services = actualService.serviceValue;
  // alert(actualService.serviceValue)

};
const getPrice=(prices:number)=>{
  const actualPrice = price[prices];
  userInfo.price=actualPrice.price
   


}
const proceed = () => {
  let loader = document.getElementsByClassName ('loader') as HTMLCollectionOf<HTMLElement>;
    if (loader.length != 0) {
  loader[0].style.display = "";
}
  

  if (userInfo.SelectedGender == "") {
    alert("Select Gender")
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
    return
  }
 

  if (userInfo.SelectedAge == "") {
    alert("Select Age Range")
    if (loader.length != 0) {
  loader[0].style.display = "none";
}

    return
  }

  if (userInfo.goal == "") {
    alert("Select Goal")
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
    return
  }

  if (userInfo.services == "") {
    alert("Select Service")
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
    return
  }

  if (userInfo.price == "") {
    alert("Select Price")
    if (loader.length != 0) {
  loader[0].style.display = "none";
}
    return
  }
  
  window.location.href = "/appointment3?date="+selectedDate+"&time="+selectedTime+"&zone="+selectedZone+"&gender="+userInfo.SelectedGender+"&age="+userInfo.SelectedAge+"&goal="+userInfo.goal+"&services="+userInfo.services+"&price="+userInfo.price;

}
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24">
    <div class="book bg-contain bg-center bg-no-repeat mt- p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        BOOK APPOINTMENT
      </h1>
      <p class="text-center text-[#FAF6FD80] text-xl">Sign up and Arrange Your Free Consultation <br> Call here.</p>
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

            <img class="sepia" src="/images/check-circle.png" />
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

        <div class="grid md:grid-cols-1 place-items- p-1 md:p-2 space-y-5">
          <div class="grid grid-cols-1 space-y-5 p-2">
            <p class="text-[#FAF6FDB2]">Select Gender</p>

            <div class="space-x-5">
              <span
                @click="getGender(index)"
                  :class="{'bg-blue-800': userInfo.SelectedGender ==gender.gender,'text-white':userInfo.SelectedGender !=gender.gender}"
                class="bg-[#FAF6FD0D] text-white md:p-3 p-2 md:rounded-sm rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]"
                v-for="(gender, index) in gender"
                :key="gender.id"
              >
                {{ gender.gender }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 space-y-5 p-2">
            <p class="text-[#FAF6FDB2]">What is Your age?</p>

            <div class="space-x-5">
              <span
                @click="getAge(index)"

                :class="{'bg-blue-800': userInfo.SelectedAge ==ageGap.age,'text-white':userInfo.SelectedAge !=ageGap.age}"

                class="bg-[#FAF6FD0D] text-white md:p-3 p-2 md:rounded-sm rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]"
                v-for="(ageGap, index) in ageGap"
                :key="ageGap.id"
              >
                {{ ageGap.age }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 space-y-5 p-2">
            <p class="text-[#FAF6FDB2]">
              Spacify your fitness goals in the next 12 weeks
            </p>

            <textarea
              v-model="userInfo.goal"
              class="p-5 bg-[#FAF6FD0D] w-full h-[150px] rounded-xl text-white"
              placeholder="eg. Build a consistent workout routine, reduce body fat percentage, Maintain overall health and wellness"
            >
            </textarea>
          </div>

          <div class="grid grid-cols-1 space-y-5">
            <p class="text-[#FAF6FDB2] p-2 text-center md:text-start">Select Preferred Service</p>
            <div class="grid md:grid-cols-4 space-x- place-items-center">
              <span
                @click="getServices(index)"
                v-for="(services, index) in services"
                :key="services.id"
                 :class="{'bg-blue-800': userInfo.services ==services.serviceValue,'text-white':userInfo.services !=services.serviceValue}"
                class="bg-[#FAF6FD0D] text-sm text-white md:pl-10 pr-10 p-5 md:rounded-xl h-[80px] w-10/12 justify-center ml-2 text-center rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]"
                >{{ services.serviceValue }}
              </span>
            </div>
          </div>

          <div class="">
            <p class="p-5 text-[#FAF6FDB2] md:leading-9 md:font-bold text-5sm">
              The program requires a 12-week commitment and a one-time payment.
              My goal is to give you the tools and knowledge to reach your
              fitness goals without uncertainty. By the end, you'll have new
              habits and skills to sustain your results. How much would you be
              willing to pay monthly over 12 weeks if you were certain it would
              help you achieve your goals?
            </p>
          </div>

          <div class="grid grid-cols-4 space-x-5 text-center">
            <span
             @click="getPrice(index)"
              :class="{'bg-blue-800': userInfo.price ==price.price,'text-white':userInfo.price !=price.price}"
              class="bg-[#FAF6FD0D] text-white md:p-3 p-1 md:rounded-sm rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]"
              v-for="(price,index) in price"
              :key="price.id"
            >
              {{ price.price }}
            </span>
          </div>

          <div class="flex mt-5 w-full md:justify-end justify-center">
            <button  @click="proceed" class="rounded signup-button p-2 text-white">Continue  <span id="loader" class="fa fa-spin fa-spinner loader" style="display:none;"></span></button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { isEmptyBindingElement } from "typescript";
import { defineAsyncComponent, reactive } from "vue";

const userInfo = reactive({
  SelectedDate: "",
  SelectedTime: "",

  SelectedZone: "",

  // email: "",
});

const Calendar = defineAsyncComponent(() => import("./calendar/index.vue"));

let time = [
  { id: "1", time: "10: 00 AM" },
  { id: "2", time: "10: 30 AM" },
  { id: "3", time: "11: 00 AM" },
  { id: "4", time: "11: 30 AM" },
  { id: "5", time: "12: 00 PM" },
  { id: "6", time: "12: 30 PM" },
  { id: "7", time: "01: 00 PM" },
  { id: "8", time: "01: 30 PM" },
  { id: "9", time: "02: 00 PM" },
  { id: "8", time: "02: 30 PM" },
  { id: "9", time: "03: 00 PM" },
  { id: "10", time: "03: 30 PM" },
  { id: "11", time: "04: 00 PM" },
  { id: "12", time: "04: 30 PM" },
  { id: "13", time: "05: 00 PM" },
  { id: "14", time: "05: 30 PM" },
  { id: "15", time: "06: 00 PM" },
  { id: "16", time: "06: 30 PM" },
];
let timeZone = [
  { name: "(GMT -12:00) Eniwetok, Kwajalein", value: "-12:00" },
  { name: "(GMT -11:00) Midway Island, Samoa", value: "-11:00" },
  { name: "(GMT -10:00) Hawaii", value: "-10:00" },
  { name: "(GMT -9:30) Taiohae", value: "-09:50" },
  { name: "(GMT -9:00) Alaska", value: "-09:00" },
  { name: "(GMT -8:00) Pacific Time (US &amp; Canada)", value: "-08:00" },
  { name: "(GMT -7:00) Mountain Time (US &amp; Canada)", value: "-07:00" },
  {
    name: "(GMT -6:00) Central Time (US &amp; Canada), Mexico City",
    value: "-06:00",
  },
  {
    name: "(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima",
    value: "-05:00",
  },
  { name: "(GMT -4:30) Caracas", value: "-04:50" },
  {
    name: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
    value: "-04:00",
  },
  { name: "(GMT -3:30) Newfoundland", value: "-03:50" },
  { name: "(GMT -3:00) Brazil, Buenos Aires, Georgetown", value: "-03:00" },
  { name: "(GMT -2:00) Mid-Atlantic", value: "-02:00" },
  { name: "(GMT -1:00) Azores, Cape Verde Islands", value: "-01:00" },
  {
    name: "(GMT) Western Europe Time, London, Lisbon, Casablanca",
    value: "+00:00",
  },
  { name: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value: "+01:00" },
  { name: "(GMT +2:00) Kaliningrad, South Africa", value: "+02:00" },
  {
    name: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
    value: "+03:00",
  },
  { name: "(GMT +3:30) Tehran", value: "+03:50" },
  { name: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04:00" },
  { name: "(GMT +4:30) Kabul", value: "+04:50" },
  {
    name: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
    value: "+05:00",
  },
  { name: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi", value: "+05:50" },
  { name: "(GMT +5:45) Kathmandu, Pokhara", value: "+05:75" },
  { name: "(GMT +6:00) Almaty, Dhaka, Colombo", value: "+06:00" },
  { name: "(GMT +6:30) Yangon, Mandalay", value: "+06:50" },
  { name: "(GMT +7:00) Bangkok, Hanoi, Jakarta", value: "+07:00" },
  { name: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value: "+08:00" },
  { name: "(GMT +8:45) Eucla", value: "+08:75" },
  {
    name: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
    value: "+09:00",
  },
  { name: "(GMT +9:30) Adelaide, Darwin", value: "+09:50" },
  {
    name: "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
    value: "+10:00",
  },
  { name: "(GMT +10:30) Lord Howe Island", value: "+10:50" },
  {
    name: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
    value: "+11:00",
  },
  { name: "(GMT +11:30) Norfolk Island", value: "+11:50" },
  {
    name: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
    value: "+12:00",
  },
  { name: "(GMT +12:45) Chatham Islands", value: "+12:75" },
  { name: "(GMT +13:00) Apia, Nukualofa", value: "+13:00" },
  { name: "(GMT +14:00) Line Islands, Tokelau", value: "+14:00" },
];

// methods
const getTime = (timeIndex: number) => {
  const actualTime = time[timeIndex];
  userInfo.SelectedTime = actualTime.time;
};

const getZone = () => {
  let usernameInput: HTMLInputElement = document.getElementById(
    "timezone"
  ) as HTMLInputElement;

  userInfo.SelectedZone = usernameInput.value;
};



const setDate = (date: string) => {
  userInfo.SelectedDate = date;
};



const proceed = () => {
  if (userInfo.SelectedDate == "") {
    return
  }

  if (userInfo.SelectedTime == "") {
    return
  }

  if (
    userInfo.SelectedZone == "" ||
    userInfo.SelectedZone == "SELECT TIME ZONE"
  ) {
    return
  } 

   window.location.href = "/appointment2?date="+userInfo.SelectedDate+"&time="+userInfo.SelectedTime+"&zone="+userInfo.SelectedZone;

  // setTimeout(() => {
  //       window.location.href = "/verify-email";
  //     }, 3000);
};

// emits
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24">
    <div class="book bg-contain bg-center bg-no-repeat mt- p-10 space-y-2">
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

            <img class="sepia" src="/images/check-circle.png" />
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

            <img class="sepia" src="/images/check-circle.png" />
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
              <p class="font-bold">Your Information</p>
            </div>

            <img class="sepia" src="/images/check-circle.png" />
          </div>

          <div class="pl-[60px] text-[#FAF6FD80] grid space-y-2">
            <span class=""> 10:30 -11:00 AM </span>
            <span class=""> Fri, Jul 02, 2024 </span>
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
          <h4 class="p-1 font-bold text-white">Date & Time</h4>
        </div>
        <div class="grid md:grid-cols-2 place-items- md:p-2">
          <Calendar class="w-full" @onSetDate="setDate" />

          <div class="text-white pt-5 pl-10 pr-5">
            <p class="text-[#FAF6FDB2]">Select Time</p>

            <div class="grid grid-cols-3 place-items-center mt-5">
              <span
                @click="getTime(index)"
               
                class="bg-[#FAF6FD0D] md:p-3 p-1 md:rounded-sm rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]" onfocus=""
                v-for="(times, index) in time"
                :key="times.id"
              >
                {{ times.time }}
              </span>
            </div>
            <p class="text-[#FAF6FDB2] mt-5">Time Zone</p>
            <select
              @change="getZone()"
              id="timezone"
              class="w-full bg-[#FAF6FD0D] p-5 mt-2"
            >
              <optgroup
                class="bg-[#FAF6FD0D] text-black"
                label="SELECT TIME ZONE"
              >
                <option class="bg-[#FAF6FD0D] text-black">
                  SELECT TIME ZONE
                </option>
                <option
                  class="bg-[#FAF6FD0D] text-black"
                  v-for="(zone) in timeZone"
                  :key="zone.name"
                  :value="zone.name"
                >
                  {{ zone.name }}
                </option>
              </optgroup>
            </select>

            <div class="mt-5 w-full flex justify-end">
              <div class="hidden">
                <input
                  v-model="userInfo.SelectedDate"
                  id="selectedtime"
                  placeholder="Date "
                  class="bg-black text-white"
                />
                <input
                  v-model="userInfo.SelectedZone"
                  id="selectedtimezone"
                  placeholder="time zone"
                  class="bg-black text-white"
                />

                <input
                  v-model="userInfo.SelectedTime"
                  id="selectedDate"
                  placeholder="Date "
                  class="bg-black text-white"
                />
              </div>
              <div class="flex mt-5 w-full md:justify-end justify-center p-5">
            <button
              @click="proceed"
              class="rounded signup-button p-2 text-white"
            >
              Continue
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

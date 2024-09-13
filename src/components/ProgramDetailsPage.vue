<script setup lang="ts">
import { reactive } from "vue";
import * as programs from "../core/static_files/programs.json";

import axios from "axios";

const userInfo = reactive({
  name: "",
  email: "",

  phone: "",
  Message: "",

  // email: "",
});

const programdata = reactive({
  img: "",
  title: "",
  note: "",
  subtitle: "",
  bg: "",
  classname: "",
});

const actualData = programs.data[0];
programdata.img = actualData.bimg;
programdata.subtitle = actualData.subtitle;
programdata.note = actualData.note;
programdata.title = actualData.title;

programdata.classname =
  "" +
  actualData.id;

const getId = (timeIndex: number) => {
  const actualData = programs.data[timeIndex];
  programdata.img = actualData.bimg;
  programdata.subtitle = actualData.subtitle;
  programdata.note = actualData.note;
  programdata.title = actualData.title;
  
};

const proceed = async (): Promise<void> => {
  let loader = document.getElementsByClassName(
    "loader"
  ) as HTMLCollectionOf<HTMLElement>;

  if (loader.length != 0) {
    loader[0].style.display = "";
  }
  const data = {
    email: userInfo.email as string,
    name: userInfo.name as string,
    phone: userInfo.phone as string,
    message: userInfo.Message as string,
  };
  // https://vitfitv2server.onrender.com/v1/localhost:8080/v1/user/contactus
  const responsed = await axios
    .post("user/contactus", data, {
      method: "POST",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Handle the success response
      console.log(response.data); // Prints "Hello, world!"
      if (loader.length != 0) {
        loader[0].style.display = "none";
      }
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
      if (loader.length != 0) {
        loader[0].style.display = "none";
      }
    });
  console.log(responsed);

  // await this.request.post("/user/booking", data, {});
};
</script>
<template>
  <div class="grid grid-cols-1 pl-10 pr-10">
    <div class="programs bg-contain bg-center bg-no-repeat mt-10 p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        {{ programdata.title }}
      </h1>
    </div>

    <div class="grid md:grid-cols-2">
      <div class="md:p-10">
        <img :src="programdata.img" />

        <p class="text-white mt-5 mb-5">{{ programdata.subtitle }}</p>
        <span class="text-white">{{ programdata.note }}</span>
      </div>

      <div
        class="p-10 rounded-xl space-y-5 program w- 6/12 grid place-items-center"
      >
        <p class="text-left text-white font-bold text-2xl">VITFIT PROGRAMS</p>
        <span
          v-for="(program, index) in programs.data"
          :key="program.title"
          @click="getId(index)"
          
          class="w-full  text-cente r text-white bg-[#FAF6FD0D] md:p-3 p-1 md:rounded-sm rounded-sm mb-2 cursor-pointer hover:bg-[#35cdf1]"
          >>> <span class="text-center"> {{ program.title }}</span></span
        >
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-2 md:p-10 place-items-center">
      <div class="grid grid-cols-2 gap-2">
        <div class="grid place-items-end">
          <img src="/images/pdetails1.png" c />
        </div>

        <div class="grid grid-cols-1 gap2 space-y-5 place-items-start mt-20">
          <img src="/images/pdetails2.png" />
          <img src="/images/pdetails3.png" />
        </div>
      </div>

      <div class="program rounded-xl">
        <div class="p-5 rounded-xl space-y-5 mt-10">
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

            <button
              @click="proceed"
              class="bg-[#35cdf1] w-full p-5 rounded-xl text-white"
            >
              submit
              <span
                id="loader"
                class="fa fa-spin fa-spinner loader"
                style="display: none"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

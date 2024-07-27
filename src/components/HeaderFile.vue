<script setup lang="ts">
import { ref } from "vue";
let open = ref(false);

function Menuopen() {
  open.value = !open.value;
}

function Closeopen() {
  open.value = !open.value;
}

let Links = [
  { name: "Home", link: "home" },
  { name: "About Us", link: "about" },
  { name: "Services", link: "services" },
  { name: "Programs", link: "programs" },
  { name: "Contact Us", link: "contact" },
  { name: "Book Appointment", link: "login" },
];
</script>
<template>
  <nav class="flex items-center bg-[#19092d] pt-5 pl-2 md:pt-0 w-full ">
    <div class="md:px-10 md:ml-10 flex space-x-2 ">
      <img src="/images/vitfit.png" />
      <h4 class="text-[#2598F1] font-bold text-[24px]">
        VIT<span class="">FIT</span>
      </h4>
      <span
        @click="Menuopen()"
        class="absolute md:hidden right-6 top-3 cursor-pointer text-2xl text-[#2598F1] pr-5"
      >
        <i :class="[open ? 'fa fa-times' : 'fa fa-bars']"></i>
      </span>
    </div>

    <ul
      class="w-full justify-center bg-[#19092d] opacity-90 z-40 md:flex  md:items-center   absolute md:static pl-20 md:p-10 top-14 px-6 duration-700 ease-in  "
      :class="[open ? 'right-10' : 'right-[100%]']"
    >
    <hr class="mt-10" />
      <div class="md:flex md:space-x-10">
        <li
          class=" mt-10 my-6 md:mt-0 md:my-0 text-[#7e7d7d] "
          v-for="link in Links"
          :key="link.name"
        >
          <router-link  @click="Closeopen()" class=" " :to="link.link">{{
            link.name
          }}</router-link>
        </li>
      </div>

      <div class="ml-20">

        <router-link class="rounded signup-button p-2 text-white" to="Signup">Join Us Now</router-link>

       
      </div>
    </ul>

  
  </nav>
</template>
<style scoped>
.activepage {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  margin-bottom: 20px;
  /* transition-delay: 100ms; */
  transition-duration: 1000ms;
}
.activepage:hover {
  color: red;
}
</style>

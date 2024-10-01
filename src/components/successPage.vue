<script setup lang="ts">
const proceed = () => {
  window.location.replace('home')
}
</script>
<template>
  <div class="grid grid-cols-1 md:pl-24 md:pr-24 place-items-center h-full ">
    <div  class="bg-[#FAF6FD0D] grid grid-cols-1 md:w-6/12 place-items-center md:p-10 p-10 mb-5 mt-5 space-y-5">
        <img src="/images/Group.png" />

        <h2 class="md:text-4xl text-[#2598F1] font-bold text-center">BOOKING SUCCESSFUL!!</h2>

        <p class="text-center text-[#FAF6FD80]">Thank for Arranging Your Free Consultation Call with VITFIT You will soon receive a text and email confirmation to inform you that we have successfully received your application.</p>

        <button @click="proceed()" class="bg-[#2598F1] p-2 pl-4 pr-4 rounded-sm text-white">ok</button>
    </div>
  </div>
</template>

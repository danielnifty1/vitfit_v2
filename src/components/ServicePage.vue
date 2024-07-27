<script setup lang="ts">
import { ref } from "vue";
</script>
<template>
  <div class="grid grid-cols-1 pl-10 pr-10">
    <div class="service bg-contain bg-center bg-no-repeat mt-10 p-10">
      <h1
        class="font-bold md:text-[50px] md:text-4xl text-2xl text-center text-[#35cdf1] md:mt-10 font-poppins leading-[50px]"
      >
        VITFIT SERVICES
      </h1>
    </div>
  </div>

  <!-- 1 ON 1 COACHHING -->
  <div class="grid md:grid-cols-2 md:p-24">
    <div class="md:pl-24 p-10 md:p-0">
      <div
        class="border border-[#35cdf1] rounded-xl p-5 relative h-[550px] w-[500px] hidden md:block"
      ></div>
      <img
        src="/images/image.png"
        class="md:absolute top-[63%] left-[10%] md:h-[500px] md:w-[500px]"
      />
    </div>

    <div class="p-10 space-y-5 grid place-items-center md:place-items-start">
      <p class="text-white text-xl font-bold text-center md:text-left">
        1 on 1 COACHING
      </p>

      <p class="pr-10 pb-5 text-[#7e7d7d] leading-10 text-center md:text-left">
        One-on-one coaching is a personalized training approach where I work
        directly with a client in a private setting. This allows for focused
        attention on the individual's fitness level, preferences, and specific
        objectives. I assess their current fitness status, design tailored
        workouts, monitor progress, and offer immediate feedback and
        adjustments. This personalized attention helps clients stay motivated,
        stay on track, and achieve their fitness goals effectively.
      </p>

      <router-link class="rounded signup-button p-2 text-white" to="Signup"
        >Apply Now</router-link
      >
    </div>
  </div>

  <!--  COOK WITH YOU VIRTUALLY -->
  <div class="grid md:grid-cols-2 md:p-24">
    <div class="p-10 space-y-5 grid place-items-center md:place-items-start">
      <p class="text-white text-xl font-bold text-center md:text-left">
        COOK WITH YOU VIRTUALLY
      </p>

      <p class="pr-10 pb-5 text-[#7e7d7d] leading-10 text-center md:text-left">
        In this unique service, I virtually join clients in their kitchens to
        guide them through healthy cooking sessions. I provide recipes, cooking
        tips, and techniques that align with their nutritional goals. This
        interactive approach empowers clients to develop practical cooking
        skills and fosters a deeper understanding of how to incorporate
        nutritious and delicious meals into their daily routine.
      </p>

      <router-link class="rounded signup-button p-2 text-white" to="Signup"
        >Apply Now</router-link
      >
    </div>

    <div class="p-10 border border-[#35cdf1] rounded-xl">
      <img src="/images/cook.png" class="" />
    </div>
  </div>

  <!-- VIRTUAL FITCAM -->
  <div class="grid md:grid-cols-2 md:p-24">
    <div class="p-10 border border-[#35cdf1] rounded-xl">
      <img src="/images/virtual.png" class="" />
    </div>

    <div class="p-10 space-y-5 grid place-items-center md:place-items-start">
      <p class="text-white text-xl font-bold text-center md:text-left">
        VIRTUAL FITCAM
      </p>

      <p class="pr-10 pb-5 text-[#7e7d7d] leading-10 text-center md:text-left">
        Experience the future of fitness with Virtual FitCam by VitFit! Our
        innovative service brings live, interactive fitness classes to you,
        wherever you are. Through video conferencing, clients can participate in
        real-time workouts with me from the comfort of their homes or any
        preferred location. It offers flexibility and convenience, making it
        suitable for clients with busy schedules or those who prefer remote
        training options
      </p>

      <router-link class="rounded signup-button p-2 text-white" to="Signup"
        >Apply Now</router-link
      >
    </div>
  </div>

  <!-- NUTRITIONAL PLAN -->
  <div class="grid md:grid-cols-2 md:p-24">
    <div class="p-10 space-y-5 grid place-items-center md:place-items-start">
      <p class="text-white text-xl font-bold text-center md:text-left">
        NUTRITIONAL PLAN
      </p>

      <p class="pr-10 pb-5 text-[#7e7d7d] leading-10 text-center md:text-left">
        A proper nutritional plan is crucial for overall fitness and wellness. I
        develop personalized nutritional plans that align with clients' fitness
        goals, taking into account their dietary preferences and any specific
        dietary requirements. The plan includes meal recommendations, portion
        control guidelines, and education about balanced nutrition to help
        clients make healthier food choices and sustain their fitness journey.
      </p>

      <router-link class="rounded signup-button p-2 text-white" to="Signup"
        >Apply Now</router-link
      >
    </div>

    <div class="p-10 border border-[#35cdf1] rounded-xl">
      <img src="/images/nutritional.png" class="" />
    </div>
  </div>

  <div class="grid grid-cols-2 bg-[#35cdf1] place-items-center p-10">
    <div class="grid grid-cols-1 space-y-10">
        <div class="">
            <p class="text-white font-bold text-4xl mb-5">Download the VITFIT<br> Fitness App</p>

        <p class="text-white">Start your fitness journey with vitfit. Join us now!</p>

        </div>

        <div class="grid grid-cols-2">
            <img src="/images/playstore.png" class="" />

            <img src="/images/appstore.png" class="" />
          </div>
        
    </div>

   <div class="mt-10 mb-5">
    <img src="/images/mobile.png" class=" " />
   </div>
         
  
  </div>
</template>
<!-- <div class="md:p-10 grid gap-4 phone pl-5 mt-5 md:pl-0 md:mt-0  ">
    <img src="/images/mobile.png" class=" " />
  </div> -->
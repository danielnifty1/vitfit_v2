<script setup lang="ts">
import { ref } from 'vue'

 

 

 
</script>
<template>
  <div class="bg-[#19092d]" >
  <router-view name="NavBar"></router-view>

  <main class="bg-[#19092d]">
    <router-view />
  </main>

  <router-view name="FooterFile"></router-view>
</div>
<testComponent   />
</template>

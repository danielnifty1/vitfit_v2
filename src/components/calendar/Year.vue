<script setup lang="ts">

import dayjs from 'dayjs';
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const yearEmit = defineEmits<{(e:'selected', v:number):void}>()
const year = ref<number>(dayjs().year())

function modifyYear(v:number){
   
    year.value += v
yearEmit('selected',year.value)
}
</script>

<template>
    <div class="bg-[#19092d] p-3 rounded-t-md grid place-items-center mt-1 ml-1">
        <span class="flex items-center space-x-3 select-none text-white">
            <ChevronLeftIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="()=>modifyYear(-1)" />
                <span class="">{{ year }}</span>
            <ChevronRightIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="()=>modifyYear(1)" />

        </span>

    </div>
    
</template>
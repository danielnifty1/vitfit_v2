<script setup lang="ts">

import dayjs from 'dayjs';
import { computed, ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const monthEmit = defineEmits<{(e:'selected', v:number):void}>()
const month = ref<number>(dayjs().month())

const cmonth =computed(()=>dayjs().month(month.value).format('MMMM'))

function modifymonth(v:number){
   
    month.value += v
monthEmit('selected',month.value)
}
</script>

<template>
    <div class="  p-2 pr-5  grid place-items-center mt-1 md:ml-1 mb-1 rounded-br-2">
        <span class="grid grid-cols-3 place-items-center space-x-3 select-none text-white  ">
            <ChevronLeftIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="()=>modifymonth(-1)" />
                <span class="">{{ cmonth }}</span>
            <ChevronRightIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="()=>modifymonth(1)" />

        </span>

    </div>
    
</template>
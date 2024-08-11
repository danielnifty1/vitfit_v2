<script setup lang="ts">
import dayjs from "dayjs";
 
import { defineAsyncComponent,reactive,ref} from "vue";

const Year = defineAsyncComponent(() => import("./Year.vue"));
const Dates = defineAsyncComponent(() => import("./Dates.vue"));
const Month = defineAsyncComponent(() => import("./Month.vue"));


const selectedDateValue=ref(dayjs().date())

const   selectedValues=reactive({
    month:dayjs().month(),
    year:dayjs().year(),
})

function changeMonth(v:number){
  selectedDateValue.value=0
selectedValues.month=v
}


function changeYear(v:number){
  selectedDateValue.value=0

    selectedValues.year=v
}

function changeDate(v:number){
  selectedDateValue.value=v
}
</script>

<template>
  <div class="  space-x-5 md:m-2  md:p-2 md:ml-2 pr-5   " v-bind="$attrs">
    <h2 class="text-white font-bold ml-5 pb-5">Select Date</h2>
    <div class="md:flex md:flex-col flex-grow rounded-md   bg-[#FAF6FD0D] ">
      <Year @selected="changeYear" />
      <Month @selected="changeMonth" />
      <Dates :selectedValues="selectedValues" :selectedDate="selectedDateValue" @selected="changeDate"/>
    </div>

    <!-- <div class="w-1/12">
        <span v-if="selectedDateValue">
            you have selected <br />

            {{ `${selectedDateValue}- ${selectedValues.month+1}-${selectedValues.year}` }}
        </span>
    </div> -->
  </div>
</template>

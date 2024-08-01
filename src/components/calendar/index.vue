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

function changeMonth(v){
  selectedDateValue.value=null
selectedValues.month=v
}


function changeYear(v){
  selectedDateValue.value=null

    selectedValues.year=v
}

function changeDate(v){
  selectedDateValue.value=v
}
</script>

<template>
  <div class="flex space-x-5" v-bind="$attrs">
    <div class="flex flex-col flex-grow">
      <Year @selected="changeYear" />
      <Month @selected="changeMonth" />
      <Dates :selectedValues="selectedValues" :selectedDate="selectedDateValue" @selected="changeDate"/>
    </div>

    <div class="w-1/2">
        <span v-if="selectedDateValue">
            you have selected <br />

            {{ `${selectedDateValue}- ${selectedValues.month+1}-${selectedValues.year}` }}
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { ref, watch, onMounted } from "vue";
type selectedValues = {
  year: number;
  month: number;
};

type Date = {
  day: number;
  date: number;
};

const date = ref(null);

const dateProps = defineProps<{
  selectedValues: selectedValues;

  selectedDate: number;
}>();

const dateEmit = defineEmits<{ (e: "selected", v: number): void }>();
const dates = ref<Date[]>([]);

onMounted(() => {
  generateDatesForThatMonth();
});

watch(
  () => dateProps.selectedValues,
  (v) => {
    date.value = null;
    generateDatesForThatMonth(v.month, v.year);
  },
  {
    deep: true,
  }
);
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

function generateDatesForThatMonth(m = dayjs().month(), y = dayjs().year()) {
  dates.value = [];
  let d = dayjs().month(m).year(y);
  const daysInMonth = d.daysInMonth();

  for (let i = 1; i <= daysInMonth; i++) {
    dates.value.push({
      date: i,
      day: d.date(i).day(),
    });
  }
}

function selected(d: any) {
  date.value = d;
  dateEmit("selected", d);
}
</script>

<template>
  <div class="w-full p-2 pl-1 ml-1 rounded-b-md">
    <div class="grid grid-cols-7 place-items-center gap-x-2 gap-y-4">
      <div v-for="day in days" :key="day">
        <span class="text-gray-500 font-semibold">{{ day.substr(0, 2) }}</span>
      </div>

      <template v-for="(d, index) in dates" :key="d">
        <template v-if="index == 0">
          <div v-for="i in d.day" :key="i"></div>
        </template>

        <button
          class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold hover:bg-blue-650"
          @click="() => selected(d.date)"
          :class="{
            'bg-blue-700 text-white hover:bg-[#35cdf1]':
              d.date == dayjs().date() &&
              dateProps.selectedValues.month == dayjs().month() &&
              dateProps.selectedValues.year == dayjs().year(),
            'bg-emerald-500 text-gray-50 ring ring-green-700 ': d.date == date,
            ' text-white  ': d.date != date,
          }"
        >
          <span>
            {{ d.date }}
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

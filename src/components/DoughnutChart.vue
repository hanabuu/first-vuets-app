<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    <button>Shuffle</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {  DoughnutChart, ExtractComponentData } from 'vue-chart-3';
import { Chart, ChartOptions, ChartData, registerables } from "chart.js";    // すべてをインポートしてるらしい

Chart.register(...registerables);                   // すべてを登録。これしないと出ないので注意。公式は別に書いてあった。。
const data = ref([30, 40, 60, 70, 5]);
const doughnutRef = ref<ExtractComponentData<typeof DoughnutChart>>();

const options = ref<ChartOptions<'doughnut'>>({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
});

const testData = computed<ChartData<'doughnut'>>(() => ({
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
}));

</script>
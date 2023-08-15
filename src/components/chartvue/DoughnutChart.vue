<script setup lang="ts">
  import { computed, ref } from 'vue';
  import {  DoughnutChart } from 'vue-chart-3';
  import { Chart, ChartOptions, ChartData, registerables } from "chart.js";    // すべてをインポートしてるらしい

  Chart.register(...registerables);                   // すべてを登録。これしないと出ないので注意。公式は別に書いてあった。。

  const props = defineProps({
    chartlabel: Array,
    chartData: Array,
  });

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
    labels: props.chartlabel,
    datasets: [
      {
        data: props.chartData,
        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
      },
    ],
  }));

</script>

<template>
  <div>
    <DoughnutChart :chartData="testData" :options="options" />
    <button>Shuffle</button>
  </div>
</template>

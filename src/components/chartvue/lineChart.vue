<template>
    <div>
        <LineChart :chartData="testData" :options="options" />
    </div>
</template>
  
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import {  LineChart } from 'vue-chart-3';
    import { Chart, ChartOptions, ChartData, registerables } from "chart.js";    // すべてをインポートしてるらしい

    const props = defineProps({
        chartlabel: Array,
        chartData: Array,
    });

    Chart.register(...registerables);                   // すべてを登録。これしないと出ないので注意。公式は別に書いてあった。。

    const options = {
    scales: {
            // X軸  :gridLines: {display: false}X軸グリッド非表示
            x: {display: true, gridLines: {display:false}},
            // Y軸
            y: {display: true, position: 'left'}
        },
    };

    const testData = {
        labels: props.chartlabel,
        datasets: [
            {
            label: "# of Votes",
            data: props.chartData,
            },
        ],
    };
</script>
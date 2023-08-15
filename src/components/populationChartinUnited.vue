<script setup lang="ts">
import { reactive, computed } from 'vue'
import router from '../router'
import MyButton from './MyButton.vue'
import fetchUtil from '@/common/fetchUtility'
import lineChart from './chartvue/lineChart.vue'
import doughnutChart from './chartvue/DoughnutChart.vue'
import barChart from './chartvue/barChart.vue'

//const chartLabel = reactive(["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]);
//const chartData = reactive([12, 19, 3, 5, 2, 3]);
const lineLabel = reactive([]);
const lineData = reactive([]);
const barLabel = reactive([]);
const barData = reactive([]);
const doughnutLabel = reactive<string[]>([]);
const doughnutData = reactive<number[]>([]);
const url: string = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
const moveHome = (): void => {
  router.push('/Home');
};

const getPopulationInUnited = () => {
  fetchUtil.fetchRequest(url, {}, fetchOk, fetchNg);
};

const fetchOk = (data): void => {
  console.log(data.data);
  data.data.map(ret => lineLabel.push(ret.Year));
  data.data.map(ret => lineData.push(ret.Population));
  data.data.map(ret => barLabel.push(ret.Year));
  data.data.map(ret => barData.push(ret.Population));
  doughnutLabel.push('Paris');
  doughnutLabel.push('Nimes');
  doughnutLabel.push('Toulon');
  doughnutLabel.push('Perpignan');
  doughnutLabel.push('Autre');
  doughnutData.push(30);
  doughnutData.push(40);
  doughnutData.push(60);
  doughnutData.push(70);
  doughnutData.push(5);
}

const fetchNg = (err):void => {
  console.log(err);
}

</script>

<template>
  <v-app>
    <v-main>
      <div class="wrapper">
        <lineChart
        :chartlabel="lineLabel"
        :chartData="lineData"
        ></lineChart>
        <doughnutChart
        :chartlabel="doughnutLabel"
        :chartData="doughnutData"
        ></doughnutChart>
        <barChart
        :chartlabel="lineLabel"
        :chartData="lineData"
        ></barChart>
      </div>
      <MyButton @click="moveHome()">ホーム</MyButton>
      <MyButton @click="getPopulationInUnited()">取得</MyButton>
    </v-main>
  </v-app>
</template>

<style scoped>
.wrapper {
  display: flex;
}
</style>
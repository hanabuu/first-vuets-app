<script setup lang="ts">
import { reactive, computed } from 'vue'
import router from '../router'
import MyButton from './MyButton.vue'
import fetchUtil from '@/common/fetchUtility'
import lineChart from './chartvue/lineChart.vue'
import doughnutChart from './chartvue/DoughnutChart.vue'

//const chartLabel = reactive(["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]);
//const chartData = reactive([12, 19, 3, 5, 2, 3]);
const lineLabel = reactive([]);
const lineData = reactive([]);
const doughnutLabel = reactive(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
const doughnutData = reactive([30, 40, 60, 70, 5]);
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
}

const fetchNg = (err):void => {
  console.log(err);
}

</script>

<template>
  <v-app>
    <v-main>
      <lineChart
       :chartlabel="lineLabel"
       :chartData="lineData"
      ></lineChart>
      <doughnutChart
       :chartlabel="doughnutLabel"
       :chartData="doughnutData"
      ></doughnutChart>
      <MyButton @click="moveHome()">ホーム</MyButton>
      <MyButton @click="getPopulationInUnited()">取得</MyButton>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
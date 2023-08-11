<script setup lang="ts">
import { ref,reactive } from 'vue'
import router from '../router'
import MyButton from './MyButton.vue'
import * as testType from '@/lib/interface/testType'
import fetchUtil from '@/common/fetchUtility'

const itemsPerPage = ref<number>(10);
//const resultArray = ref<testType.testPoke[]>([]);
const resultArray = reactive<testType.testPoke[]>([]);     // オブジェクトはreactiveで宣言が必要らしい

const baseUrl: string = "https://pokeapi.co/api/v2/";
const varUrl: string = "pokemon?limit=10&offset=0";
const headers = [
  { title: 'pokemon name', align: 'start', key: 'name' },
  { title: 'url', align: 'center', key: 'url' },
]

const moveHome = (): void => {
  router.push('/Home');
};

const getPokemonList = (): void => {
  fetchUtil.fetchRequest(baseUrl + varUrl, {}, fetchOk, fetchNg);
  //resultArray.value = await (await fetch(baseUrl + varUrl)).json()
}

const fetchOk = (data): void => {
  console.log(data);
  data.results.forEach(pokedata => {
    resultArray.push(pokedata);   // reactiveで宣言することでそのままpush可能
  });
}

const fetchNg = (err):void => {
  console.log(err);
}
</script>

<template>
  <!-- <ul>
    <li v-for="ret in resultArray">
      <input type="text" v-model="ret.name" />
      <span>{{ ret.url }}</span>
    </li>
  </ul> -->
  <v-app>
    <v-main>
      <v-data-table
       v-model:items-per-page="itemsPerPage"
       :headers="headers"
       :items="resultArray"
       item-value="name"
       :hide-default-footer="false"
      >
      </v-data-table>
      <MyButton @click="moveHome()">ホーム</MyButton>
      <MyButton @click="getPokemonList()">リスト取得</MyButton>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
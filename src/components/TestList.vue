<script lang="ts">
import MyButton from './MyButton.vue'
import * as testType from '@/lib/interface/testType'
import fetchUtil from '@/common/fetchUtility'

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      resultArray: [] as testType.testPoke[],
      baseUrl: "https://pokeapi.co/api/v2/",
      varUrl: "pokemon?limit=10&offset=0",
      headers: [
        {
          text: '名前',
          value: 'name',
        },
        {
          text: 'URL',
          value: 'url',
        },
      ],
    }
  },
  methods: {
    moveHome() {
      this.$router.push('/Home')
    },
    getPokemonList() {
      fetchUtil.fetchRequest(this.baseUrl + this.varUrl, {}, this.fetchOk, this.fetchNg);
    },
    fetchOk(data) {
      data.results.forEach(pokedata => {
        this.resultArray.push(pokedata);
      });
    },
    fetchNg(err) {
      console.log(err);
    },
  },
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
       :headers="headers"
       :items="resultArray"
      >
      </v-data-table>
      <MyButton @click="moveHome()">ホーム</MyButton>
      <MyButton @click="getPokemonList()">リスト取得</MyButton>
    </v-main>
  </v-app>
</template>

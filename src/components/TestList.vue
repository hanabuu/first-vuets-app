<script lang="ts">
import MyButton from './MyButton.vue'
import * as testType from '@/lib/interface/testType'

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      testArray: [] as testType.test[],
    }
  },
  methods: {
    moveHome() {
      this.$router.push('/Home')
    },
    getTestList() {

    },
  },
}
</script>

<template>
  <!-- <ul>
    <li v-for="test in testArray">
      <input type="text" v-model="test.test1" />
      <span>{{ test.test2 }}</span>
    </li>
  </ul> -->
  <MyButton @click="moveHome()">ホーム</MyButton>
  <MyButton @click="getTestList()">リスト取得</MyButton>
</template>

<script lang="ts">
import MyButton from './MyButton.vue'
import * as testType from '../lib/interface/testType'
import testDao from '../lib/dao/testData'
import * as dbutil from '../common/sqliteUtility'

export default {
  components: {
    MyButton,
  },
  props: {
    testArray?: testType.cTest[],
  },
  methods: {
    openEditMode() {
      this.$router.push('/Home')
    },
    getTestList() {
      let dbc = new dbutil.dbCommon('../testDb.db');
      new testDao(dbc.getConnection());
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="test in testArray">
      <!--
      <input type="text" v-model="test.test2" />
      <span>{{ test.text2 }}</span>
      -->
      <MyButton @click="openEditMode()">ホーム</MyButton>
    </li>
  </ul>
</template>

<script>
import MyButton from './MyButton.vue'
import * as testType from '@/lib/interface/testType'

export default {
  components: {
    MyButton,
  },
  props: {
    testArray: testType.cTest[],
  },
  methods: {
    openEditMode(todo) {
      this.$router.push('/edit')
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="test in testArray">
      <input type="text" v-model="test.test1" />
      <span>{{ test.text2 }}</span>
      <MyButton @click="openEditMode(todo)">編集</MyButton>
    </li>
  </ul>
</template>

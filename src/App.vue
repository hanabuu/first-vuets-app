<script setup lang="ts">
// import Home from '@/components/pages/Home.vue'
// export default {
//   components: { Home },
// }
</script>

<template>
  <!--router-linkはVue Router利用時におけるaリンクに変わるカスタムコンポーネントです。
    router-linkを用いることで実際に画面をリロードすることなく内部の処理による画面遷移を実現します。
    つまりaによるリンクはVueによるシングルページアプリケーションでは使わないようにする必要があります。-->
  <router-link to="/">Home</router-link> 
  <router-link to="/edit">Edit</router-link>
  <h1>My ToDo App</h1>
  <router-view />
</template>

<style scoped>
body {
  background-color: #eee;
}
</style>

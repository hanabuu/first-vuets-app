<script setup lang="ts">
// import Home from '@/components/pages/Home.vue'
// export default {
//   components: { Home },
// }
import { ref } from 'vue'

const drawer = ref(null)

</script>

<script lang="ts">
  export default {
    data: () => ({ drawer: null }),
  }
</script>  

<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/edit">Edit</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <svg class="v-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
        </svg>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->

      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  background-color: #eee;
}
</style>

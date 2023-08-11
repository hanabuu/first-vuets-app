// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Edit from '@/components/Edit.vue'
import TestList from '@/components/TestList.vue'
import testChart from '@/components/DoughnutChart.vue'
import population from '@/components/populationChartinUnited.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/edit', name: 'Edit', component: Edit },
    { path: '/test', name: 'Test', component: TestList },
    { path: '/chart', name: 'Chart', component: testChart },
    { path: '/population', name: 'population', component: population },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router
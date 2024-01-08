<!-- <template>
  <SideBar />
  <main>
    <div class="wrapperContent">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.scss'
</script>

<style lang="scss">
  :root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px !important;
  }
 
  .wrapperContent{
    width: 100vw;
    max-width: 100vw;
  }
</style> -->

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.scss'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout || 'DefaultLayout'
})

</script>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.scss'

</script>

<template>
  <SideBar />
  <main>
    <div class="wrapperContent">
      <RouterView />
    </div>
  </main>
</template>

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
</style>

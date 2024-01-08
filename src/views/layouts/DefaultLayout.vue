<template>
  <SideBar />
  <main>
    <nav>
      <h1>Hospital Name</h1>
      <div class="dropdown profile ms-auto">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div class="imgProfile">
            <img src="/src/assets/logo.svg" alt="">
          </div>
          Kenneth Osborne
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">ข้อมูลส่วนตัว</a></li>
          <li><router-link to="/" class="dropdown-item">Logout</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="wrapperContent">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from '../../components/SideBar.vue'

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
    width: auto;
    max-width: 100vw;
    padding: 2rem;
  }
</style>

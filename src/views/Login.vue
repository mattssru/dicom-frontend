<template>
  <div class="container-fluid">
    <div class="titleLogin">
      <img src="/src/assets/logo.svg" alt="">Dicom Frontend</div>
    <div class="loginPage">
      <h2>Login</h2>
      <form action="">
        <div class="userBox">
          <input type="text" name="" required="">
          <label>Username</label>
        </div>
        <div class="userBox">
          <input type="password" name="" required="">
          <label>Password</label>
        </div>
        <button @click="handleLogin" class="btn btnLogin">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  router.push('/patient')
}
</script>

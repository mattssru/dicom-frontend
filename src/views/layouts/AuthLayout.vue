<template>
  <div class="auth-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss">
.auth-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(#141e30, #243b55);
  .titleLogin{
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
    img{
      max-width: 40px;
      margin-right: 10px;
    }
  }
  .loginPage{
    max-width: 600px;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    background-color: rgba(0,0,0,.5);
    padding: 3rem;
    margin: 0 auto;
    h2{
      margin: 0 0 30px;
      font-weight: 600;
      padding: 0;
      color: #fff;
      text-align: center;
    }
    .userBox{
      position: relative;
      input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
        &:focus ~ label, &:valid ~ label{
          top: -20px;
          left: 0;
          color: #03e9f4;
          font-size: 12px;
        }
      }
      label{
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
      }
    }
    button.btnLogin{
      background-color: #40b883;
      font-weight: 700;
      color: #fff;
      border-radius: 6px;
      max-width: 150px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      height: 40px;
    }
  }
}
</style>

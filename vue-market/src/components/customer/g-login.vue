<template>
  <div class="g-login">
    <h2>Войти</h2>
    
    <form action="" class="authform">
      
      <div class="form-label">Логин</div>
      <input type="text" class="authform-text">

      <div class="form-label">Пароль</div>
      <input type="password" class="authform-text">
    
      <div class="forgot-password">
        <a href="/recovery" class="g-login-recovery">Забыли логин или пароль?</a>
      </div>

      <input type="submit" value="Войти" class="g-login-btn">
    </form>

    <div class="authpage-switcher">
      <span class="g-login-register">У нас впервые?<a href="/register" class="gold"> Создать аккаунт</a></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'g-login',
}
</script>

<style lang="scss">


</style>

<template>
  <div class="g-register">
    <h2>Регистрация</h2>
    
    <form action="" class="authform">
      
      <div class="form-label">E-mail</div>
      <input type="email" class="authform-text">

      <div class="form-label">Пароль</div>
      <input type="password" class="authform-text">

      <input type="submit" value="Создать аккаунт" class="g-register-btn">
    </form>

    <div class="authpage-switcher">
      <span class="g-login-register">Есть логин?<a href="/register" class="gold"> Войти</a></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'g-register',
}
</script>

<style lang="scss">

</style>

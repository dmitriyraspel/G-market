<template>
  <div class="g-customer">
    <div class="authpage">
      <g-login/>
      <hr>
      <g-register/>
      <hr>
      <g-recovery/>
    </div>
    <div class="container">
      <g-user/>
    </div>

  </div>
</template>

<script>
import gLogin from './g-login.vue'
import gRegister from './g-register.vue'
import gRecovery from './g-recovery.vue'
import gUser from './g-user.vue'

export default {
  name: 'g-customer',
  components: {
    gLogin,
    gRegister,
    gRecovery,
    gUser
  }
}
</script>

<style lang="scss">
.authpage {
  width: 90%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.authpage h2 {
  font-size: 20px;
}
.authform {
  width: 100%;
  max-width: 100%;
}
.form-label {
  position: relative;
  margin-bottom: 4px;
  font-size: 14px;
  color: #666;
  padding-left: 16px;
}
.authpage input[type=name],
.authpage input[type=text],
.authpage input[type=password],
.authpage input[type=email],
.authpage input[type=tel] {
  display: block;
  height: 36px;
  margin: 0 0 16px 0;
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 18px;
  border: 1px solid rgba(102, 102, 102, 0.5);
  outline: transparent;
  color: #666;
}
.authpage input[type=name]:focus,
.authpage input[type=text]:focus,
.authpage input[type=password]:focus,
.authpage input[type=email]:focus,
.authpage input[type=tel]:focus {
  border: 1px solid #c39b6a;
  color: #333;
}
.forgot-password {
  margin: 14px 0;
  padding-left: 16px;
}
.forgot-password a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
}
.authpage-switcher {
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: 16px;
}
.authpage-switcher a {
  text-decoration: none;
}
.authpage input[type=submit] {
  width: 100%;
}
.g-register-btn {
  margin-top: 14px;
}
</style>

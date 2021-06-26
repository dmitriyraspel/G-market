<template>
  <div class="g-user">
      <div class="about-user">
        <h2>О вас:</h2>
        
        <form class="about-user-form">
            <div class="form-label">ФИО</div>
            <input type="email" class="authform-text" placeholder="Dmitriy Raspel">

            <div class="form-label">E-mail</div>
            <input type="email" class="authform-text" placeholder="dmitriy@goldtech.pro">

            <div class="form-label phonemask_plugin">Телефон</div>
            <input type="tel" class="authform-text" placeholder="+7 000 00 00">

            <div class="form-label phonemask_plugin">Дата рождения</div>
            <input placeholder="" title="Дата рождения" type="date"  value="">

            <div class="form-label">Город</div>
            <input type="text" class="authform-text" placeholder="Анапа">

            <div class="form-label">Адрес</div>
            <input type="text" class="authform-text" placeholder="улица...">

            <div class="form-label">Новый пароль</div>
            <input type="password" name="" placeholder="******" class="authform-text">

            <input type="submit" value="Обновить информацию" class="g-user-btn">
        </form>
      </div>

  </div>
</template>

<script>
export default {
  name: 'g-user',
}
</script>

<style lang="scss">
.about-user-form {
    max-width: 320px;
}
.about-user-form input {
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
.about-user-form input:focus {
  border: 1px solid #c39b6a;
  color: #333;
}
</style>

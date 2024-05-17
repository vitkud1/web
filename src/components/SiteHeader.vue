<template>
  <header class="site-header">
    <img src="https://pspu.ru/bitrix/templates/pggpu/logo.svg" alt="Пермский государственный гуманитарно педагогический университет" width="300" height="93">
    <div class="right">
      <button @click="goHome">Главная</button>
      <button @click="toggleLoginForm">Войти</button>
      <button @click="register">Зарегистрироваться</button>
    </div>
    <div v-if="showLoginForm" class="login-form-container">
      <form @submit.prevent="login">
        <div>
          <label for="username">Логин:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      showLoginForm: false,
      username: '',
      password: ''
    };
  },
  methods: {
    goHome() {
      window.location.href = '/';
    },
    toggleLoginForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    login() {
      // Обработка логина
      console.log('Логин:', this.username);
      console.log('Пароль:', this.password);
      // Реализуйте логику авторизации здесь
    },
    register() {
      // Обработка регистрации
    }
  }
};
</script>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid #f48100;
}

.right {
  display: flex;
  align-items: center;
}

.right button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #f48100;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.right button:hover {
  background-color: #3e2b85;
}

.login-form-container {
  position: absolute;
  top: 100%;
  right: 20px;
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-form-container form {
  display: flex;
  flex-direction: column;
}

.login-form-container form div {
  margin-bottom: 10px;
}

.login-form-container form button {
  padding: 10px 20px;
  background-color: #f48100;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form-container form button:hover {
  background-color: #3e2b85;
}
</style>

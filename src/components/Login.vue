<template>
    <div class="login-container">
      <h2>Вход</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Логин" required>
        <input type="password" v-model="password" placeholder="Пароль" required>
        <button type="submit">Войти</button>
      </form>
      <div>
        <button @click="register">Зарегистрироваться</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm', // Используем новое имя компонента
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Логика входа пользователя
      },
      register() {
        // Логика перехода на страницу регистрации
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .login-container h2 {
    margin-bottom: 20px;
  }
  .login-container input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  .login-container button {
    width: 100%;
    padding: 10px;
    background-color: #f48100;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .login-container button:hover {
    background-color: #3e2b85;
  }
  </style>
  
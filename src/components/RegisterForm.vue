<template>
    <div class="register-container">
    <h2>Зарегистрироваться</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="phone" placeholder="Номер телефона" required>
      <input type="email" v-model="email" placeholder="Почта" required>
      <input type="password" v-model="password" placeholder="Пароль" required>
      <input type="password" v-model="confirmPassword" placeholder="Повторите пароль" required>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
    name: 'RegisterForm',
    data() {
      return {
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      ...mapActions({
        getlogin: 'auth/login',
        getregister: 'auth/register'
      }),
      login() {
        const formData = {
          username: this.username,
          password: this.password
        };
        this.getlogin(formData);
      },
      register() {
        if (this.password !== this.confirmPassword) {
          alert("Пароли не совпадают!");
          return;
        }
        const formData = {
          username: this.username,
          phone: this.phone,
          email: this.email,
          password: this.password
        };
        this.getregister(formData);
      },
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .register-container h2 {
    margin-bottom: 20px;
  }
  
  .register-container input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .register-container button {
    width: 100%;
    padding: 10px;
    background-color: #f48100;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .register-container button:hover {
    background-color: #3e2b85;
  }
  </style>
  
<template>
  <div class="login-container">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Логин" required>
      <input type="password" v-model="password" placeholder="Пароль" required>
      <button type="submit">Войти</button>
      <ExcelParser />
    </form>
  </div>
</template>

<script>
import ExcelParser from './ExcelParser.vue';
import { mapActions } from 'vuex';
export default {
  name: 'LoginForm', 
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapActions({
      getlogin: 'auth/login'
    }),
    login() {
      const formData = {
        username: this.username,
        password: this.password
      }

      this.getlogin(formData)
    }
  },
  components: {
    ExcelParser
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
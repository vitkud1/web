<template>
    <div>
      <h2>Добро пожаловать, {{ username }}</h2>
      <button @click="logout">Выйти</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
  name: 'UserPage',
  computed: {
    ...mapGetters('auth', ['user']),
    username() {
      return this.user ? this.user.username : '';
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleLogout() {
      this.logout();
      this.$router.push({ name: 'home' });
    }
  }
};
  </script>
  
  <style scoped>
  </style>
  
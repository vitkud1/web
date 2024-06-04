<template>
    <div class="admin-container">
      <h2>Добавить новую запись</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="newRow.name" placeholder="Имя" required>
        <input type="email" v-model="newRow.email" placeholder="Email" required>
        <input type="text" v-model="newRow.phone" placeholder="Телефон" required>
        <button type="submit">Добавить</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newRow: {
          name: '',
          email: '',
          phone: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('add-row', { ...this.newRow });
        this.newRow = {
          name: '',
          email: '',
          phone: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-form {
    margin-bottom: 20px;
  }
  
  .admin-form h2 {
    margin-bottom: 10px;
  }
  
  .admin-form input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .admin-form button {
    width: 100%;
    padding: 10px;
    background-color: #f48100;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .admin-form button:hover {
    background-color: #3e2b85;
  }
  </style>
  
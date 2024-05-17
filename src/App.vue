<template>
  <div id="app">
    <SiteHeader />
    <main class="main-content">
      <div class="button-container" data-aos="fade-up" data-aos-delay="200">
        <button class="center-button" @click="goToLogin"> <!-- Добавляем обработчик события click -->
          Войти
        </button>
        <button class="center-button" @click="fetchExcelData">
          Загрузить расписание
        </button>
      </div>
      <!-- Добавляем компонент LoginForm -->
      <LoginForm />
    </main>
    <SiteFooter />
  </div>
</template>


<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import LoginForm from './components/Login.vue'; // Переименованный компонент
import router from './router'; // Импорт объекта роутера

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
    LoginForm // Используем новое имя компонента
  },
  methods: {
    fetchExcelData() {
      // Ваша логика загрузки и парсинга Excel-файла
    },
    goToLogin() {
      // Вызываем метод router.push() для перехода на страницу авторизации
      router.push('/login');
    }
  }
};
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}

.button-container {
  text-align: center;
}

.center-button {
  padding: 15px 30px;
  background-color: #f48100;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  display: inline-block;
}

.center-button:hover {
  background-color: #3e2b85;
}
</style>

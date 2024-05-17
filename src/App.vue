<template>
  <div id="app">
    <SiteHeader />
    <main class="main-content">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>


<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
  methods: {
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

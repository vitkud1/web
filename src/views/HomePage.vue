<template>
    <div>
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
    </div>
</template>

<script>
export default {
    methods: {
        goToLogin() { },
        fetchExcelData() { }
    }
}
</script>
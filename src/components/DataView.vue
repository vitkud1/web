<template>
  <div>
    <h1>Данные из таблицы</h1>
    <div v-if="isLoading">Загрузка данных...</div>
    <div v-else-if="hasError">Ошибка при загрузке данных.</div>
    <div v-else>
      <table v-if="headers.length > 0">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>Данные отсутствуют.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isLoading: true,
      hasError: false
    };
  },
  computed: {
    ...mapGetters('csvData', ['csvData']),
    headers() {
      return this.csvData.length ? Object.keys(this.csvData[0]) : [];
    },
    rows() {
      return this.csvData;
    }
  },
  watch: {
    csvData: {
      handler(newData) {
        console.log('New CSV data received:', newData);
        this.isLoading = false;
        if (!newData || newData.length === 0) {
          this.hasError = true;
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>

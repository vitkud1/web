<template>
  <div>
    <button @click="fetchXlsxData">Загрузить таблицу XLSX</button>
    <div v-if="isLoading">Загрузка данных...</div>
    <div v-else-if="hasError">Ошибка при загрузке данных. {{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import * as XLSX from 'xlsx';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isLoading: false,
      hasError: false,
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions('csvData', ['updateCsvData']),
    async fetchXlsxData() {
      this.isLoading = true;
      this.hasError = false;
      this.errorMessage = '';
      const url = 'https://docs.google.com/spreadsheets/d/1_fsm-OxH9E9LgHnLC0iju5OlaHIv0agmM87GLvRKIAg/export?format=xlsx&id=1_fsm-OxH9E9LgHnLC0iju5OlaHIv0agmM87GLvRKIAg';

      try {
        console.log('Fetching data from:', url);
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        console.log('Response data:', response.data);
        this.parseXlsxData(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        this.hasError = true;
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    parseXlsxData(data) {
      console.log('Parsing XLSX data:', data);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log('Parsed data:', jsonData);
      if (jsonData.length) {
        const headers = jsonData[0];
        const rows = jsonData.slice(1).map(row => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        this.updateCsvData(rows);
        this.$router.push({ name: 'data-view' });
      } else {
        this.hasError = true;
        this.errorMessage = 'No data found in XLSX';
      }
    }
  }
};
</script>

<style scoped>
</style>

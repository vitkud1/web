<template>
    <div>
      <button @click="fetchExcelData">Загрузить таблицу Excel</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  
  export default {
    methods: {
      fetchExcelData() {
        axios.get('https://docs.google.com/spreadsheets/d/1_fsm-OxH9E9LgHnLC0iju5OlaHIv0agmM87GLvRKIAg/edit#gid=0', { responseType: 'arraybuffer' })
          .then(response => {
            this.parseExcelData(response.data);
          })
          .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
          });
      },
      parseExcelData(data) {
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
        console.log(jsonData);
      }
    }
  };
  </script>
  
  <style>
  /* Стили компонента */
  </style>
  
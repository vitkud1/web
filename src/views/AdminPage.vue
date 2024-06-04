<template>
  <div class="admin-page">
    <h1>Админская страница</h1>
    <AdminForm @add-row="addRow"/>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="true"
      :globalSearch="true"
      @on-row-click="onRowClick"
    />
  </div>
</template>

<script>
import axios from 'axios';
import AdminForm from '@/components/AdminForm.vue';
import { VueGoodTable } from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';

export default {
  components: {
    AdminForm,
    VueGoodTable
  },
  data() {
    return {
      columns: [
        { label: 'Имя', field: 'name', editable: true },
        { label: 'Фамилия', field: 'surname', editable: true }
      ],
    };
  },
  created() {
    this.fetchRows();
  },
  methods: {
    async fetchRows() {
      try {
        const response = await axios.get('http://localhost:3000/api/users/get-users');
        this.rows = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
    async addRow(newRow) {
      try {
        const response = await axios.post('http://localhost:3000/api/users/add-user', newRow);
        this.rows.push(response.data);
      } catch (error) {
        console.error('Ошибка при добавлении данных:', error);
      }
    },
    onRowClick(params) {
      console.log('Row clicked', params.row);
    }
  }
};
</script>

<style scoped>
.admin-page {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.admin-page h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
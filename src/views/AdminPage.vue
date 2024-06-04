<template>
  <div class="admin-container">
    <h1>Админская страница</h1>
    <AdminForm @add-row="addRow" />
    <vue-good-table :columns="columns" :rows="rows" :paginate="true" :lineNumbers="true" :globalSearch="true"
      @on-row-click="onRowClick" />
  </div>
</template>

<script>
import AdminForm from '../components/AdminForm.vue';
// import { VueGoodTable } from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';

export default {
  components: {
    AdminForm,
    // VueGoodTable
  },
  data() {
    return {
      columns: [
        { label: 'ID', field: 'id', type: 'number', editable: true },
        { label: 'Имя', field: 'name', editable: true },
        { label: 'Email', field: 'email', editable: true },
        { label: 'Телефон', field: 'phone', editable: true }
      ],
      rows: [
        { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', phone: '1234567890' },
        { id: 2, name: 'Петр Петров', email: 'petr@example.com', phone: '0987654321' }
      ]
    };
  },
  methods: {
    addRow(newRow) {
      this.rows.push(newRow);
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
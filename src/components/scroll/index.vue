<template>
  <oz-table
      :rows="rows"
      :total-pages="100"
      :current-page="currentPage"
      :static-paging="false"

      @getPage="infGetPage"
  >
    <oz-table-column prop="id" title="ID" />
    <oz-table-column prop="animal" title="animal" />

    <oz-table-column prop="image">
      <template #title>
        <b>URL</b>
      </template>

      <template #body="{ row }">
        <a :href="`${row.images[0]}`">{{ row.images[0] }}</a>
      </template>
    </oz-table-column>

    <oz-table-column prop="description" title="Description" />
  </oz-table>
</template>

<script>
import OzTable from './oz-table';
import OzTableColumn from './oz-table-column';

export default {
  name: 'PagingWrapper',
  components: {
    OzTableColumn,
    OzTable
  },
  created() {
    this.blockingPromise = this.getPage(1);
  },
  data() {
    return {
      rows: [],
      currentPage: 1
    };
  },
  methods: {
    async getPage(number) {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${number}`);
      const res2 = await res.json()
      this.rows = res2.pets;
      this.currentPage = number;
      // console.log(number)
    },
    async infGetPage() {
      this.blockingPromise && await this.blockingPromise;
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.currentPage + 1}`);
      const res2 = await res.json()
      const newRows = res2.pets;
      this.rows = [...this.rows, ...newRows];
      this.currentPage++;
    }
  }
};
</script>

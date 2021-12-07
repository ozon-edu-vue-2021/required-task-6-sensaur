<template>
  <oz-table :rows="rows">
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
  name: 'SortWrapper',
  components: {
    OzTableColumn,
    OzTable
  },
  async created() {
    const res3 = await fetch(`http://pets-v2.dev-apis.com/pets`)
    const res3j = await res3.json()
    this.rows = res3j.pets;
    // console.log(this.rows)
  },
  data() {
    return {
      rows: []
    };
  }
};
</script>

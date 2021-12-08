<template>
  <header>
    <div class="header">
      <router-link to="/sorting">
        <div>
          <h4>Сортировка и фильтрация</h4>
        </div>
      </router-link>
      <router-link to="/pagination">
        <div>
          <h4>Пагинация</h4>
        </div>
      </router-link>
      <router-link to="/scroll">
        <div>
          <h4>Скролл</h4>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {},
};
</script>

<style scoped>
</style>

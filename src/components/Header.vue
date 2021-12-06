<template>
  <header>
    <div class="header">
      <router-link to="/">
        <div>
          <h4>Главная</h4>
        </div>
      </router-link>
      <router-link to="/sorting">
        <div>
          <h4>Сортировка</h4>
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

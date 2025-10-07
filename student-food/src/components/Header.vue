<template>
  <header class="header">
    <h1>🍎 Student Meal Tracker</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/basket">My Basket</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem;
  background: #f5f5f5;
  text-align: center;
}
nav a {
  margin: 0 10px;
}
</style>

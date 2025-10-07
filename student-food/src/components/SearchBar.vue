<template>
  <div class="search-bar">
    <input v-model="query" @keyup.enter="search" placeholder="Search a recipe or ingredient..." />
    <button @click="search">🔍 Search</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')

const search = () => {
  if (query.value.trim()) {
    emit('search', query.value)
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>

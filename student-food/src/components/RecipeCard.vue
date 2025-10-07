<template>
  <div class="card">
    <h3>{{ recipe.title }}</h3>
    <img :src="recipe.image" alt="recipe image" />
    <p>Preparation Time: {{ recipe.readyInMinutes }} min</p>
    <p>Servings: {{ recipe.servings }}</p>

    <h4>Ingredients:</h4>
    <ul>
      <li v-for="(ing, i) in recipe.extendedIngredients" :key="i">
        {{ ing.original }}
      </li>
    </ul>

    <button @click="addIngredients">Add all to basket</button>
  </div>
</template>

<script setup>
const props = defineProps(['recipe'])
const emit = defineEmits(['add-ingredients'])

const addIngredients = () => {
  const ingredientsList = props.recipe.extendedIngredients.map(i => i.original)
  emit('add-ingredients', ingredientsList)
}
</script>

<style scoped>
</style>
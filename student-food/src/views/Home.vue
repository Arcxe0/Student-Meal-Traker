<template>
  <Header />
  <main class="home-container">
    <h1>🍽️ Welcome to <span class="highlight">Student Meal Tracker</span></h1>
    <p class="intro">
      Search for recipes, add all ingredients to your basket, and track your estimated costs 💸
    </p>
    
    <SearchBar @search="loadRecipes" />

    <div v-if="loading" class="loading">⏳ Loading...</div>
    <div v-if="error" class="error">❌ {{ error.message }}</div>

    <div class="recipes">
      <RecipeCard
        v-for="r in recipes"
        :key="r.id"
        :recipe="r"
        @add-ingredients="addToBasket"
      />
    </div>

    <section v-if="suggestions.length">
      <h2>✨ Recipe Suggestions</h2>
      <div class="recipes">
        <RecipeCard
          v-for="r in suggestions"
          :key="r.id"
          :recipe="r"
          @add-ingredients="addToBasket"
        />
      </div>
    </section>

    
  </main>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import SearchBar from '../components/SearchBar.vue'
import RecipeCard from '../components/RecipeCard.vue'
import { useBasketStore } from '../store'
import { searchRecipes } from '../services/spoonacularApi'

const recipes = ref([])
const suggestions = ref([])
const loading = ref(false)
const error = ref(null)
const store = useBasketStore()

const randomKeywords = ['chicken', 'pasta', 'salad', 'soup', 'quiche']
const getSuggestions = async () => {
  const rand = randomKeywords[Math.floor(Math.random() * randomKeywords.length)]
  try {
    suggestions.value = await searchRecipes(rand)
  } catch (e) {
    console.error(e)
  }
}

const loadRecipes = async (query) => {
  loading.value = true
  error.value = null
  try {
    recipes.value = await searchRecipes(query)
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

const addToBasket = (ingredients) => {
  ingredients.forEach((ing) => store.addItem(ing))
}

onMounted(() => {
  getSuggestions()
})
</script>

<style scoped>
</style>

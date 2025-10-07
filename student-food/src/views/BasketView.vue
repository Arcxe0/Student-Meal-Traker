<template>
  <Header />
  <div class="basket">
    <h2>🛒 Ingredients to Buy</h2>

    <ul>
      <li v-for="(item, i) in basket.items" :key="i" class="basket-item">
        <span class="price">{{ estimatePrice(item).toFixed(2) }} €</span>
        <span class="ingredient">{{ item }}</span>
        <button @click="basket.removeItem(item)">❌</button>
      </li>
    </ul>

    <p class="total"><strong>Total Estimated Cost:</strong> {{ getTotal().toFixed(2) }} €</p>
    <button class="clear" @click="basket.clearBasket">Clear Basket</button>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useBasketStore } from '../store'

const basket = useBasketStore()

const estimatePrice = (ingredient) => {
  const ing = ingredient.toLowerCase()

  if (ing.includes('egg')) return 0.30
  if (ing.includes('milk')) return 1.00
  if (ing.includes('rice')) return 1.50
  if (ing.includes('chicken')) return 3.50
  if (ing.includes('carrot')) return 0.40
  if (ing.includes('onion')) return 0.30
  if (ing.includes('cheese')) return 2.00
  if (ing.includes('tomato')) return 0.80
  if (ing.includes('pasta')) return 1.20
  if (ing.includes('lettuce')) return 1.00
  if (ing.includes('cream')) return 1.80
  if (ing.includes('bread')) return 1.00
  if (ing.includes('yogurt')) return 0.70
  if (ing.includes('beef')) return 4.00
  if (ing.includes('fish')) return 3.80

  return 1.00
}

const getTotal = () => {
  return basket.items.reduce((acc, ing) => acc + estimatePrice(ing), 0)
}
</script>

<style scoped>
.basket {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
}

.basket h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

.basket-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.4rem;
  border-bottom: 1px solid #eee;
}

.basket-item .price {
  flex-basis: 80px;
  font-weight: bold;
  color: #4caf50;
  text-align: left;
}

.basket-item .ingredient {
  flex: 1;
  padding: 0 1rem;
  text-align: left;
}

.basket-item button {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}

.basket-item button:hover {
  background-color: #d32f2f;
}

.total {
  font-size: 1.1rem;
  margin-top: 1.5rem;
  text-align: right;
}

.clear {
  margin-top: 1rem;
  background-color: #9e9e9e;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  float: right;
}

.clear:hover {
  background-color: #757575;
}
</style>

import axios from 'axios'

const BASE_URL = 'https://api.spoonacular.com'
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        query,
        number: 6,
        apiKey: API_KEY
      }
    })

    const enrichedRecipes = await Promise.all(
      response.data.results.map(async (recipe) => {
        const details = await getRecipeDetails(recipe.id)
        return details
      })
    )

    return enrichedRecipes
  } catch (error) {
    console.error('Erreur Spoonacular API:', error)
    throw error
  }
}

export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/${id}/information`, {
      params: {
        apiKey: API_KEY,
        includeNutrition: false
      }
    })
    return response.data
  } catch (error) {
    console.error('Erreur détails recette:', error)
    return null
  }
}

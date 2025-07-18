// import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// interface MealItem {
//   id: string
//   time: string
//   name: string
//   category: string
//   amount: string
// }

// interface RecommendedFood {
//   id: string
//   name: string
//   items: string
//   carbs: string
//   fats: string
//   icon: string
// }

// interface MealsState {
//   todayMeals: MealItem[]
//   recommendedFoods: RecommendedFood[]
// }

// const initialState: MealsState = {
//   todayMeals: [
//     {
//       id: "1",
//       time: "Breakfast",
//       name: "Bread with chocolate",
//       category: "Bread",
//       amount: "1 items",
//     },
//     {
//       id: "2",
//       time: "Lunch",
//       name: "Fried chicken spicy",
//       category: "Fruits",
//       amount: "2 items",
//     },
//     {
//       id: "3",
//       time: "Dinner",
//       name: "Brocolly with cabai",
//       category: "Vegetables",
//       amount: "4 items",
//     },
//   ],
//   recommendedFoods: [
//     {
//       id: "1",
//       name: "Hot fried chicken",
//       items: "2 items",
//       carbs: "Carbs",
//       fats: "Fats",
//       icon: "🍗",
//     },
//     {
//       id: "2",
//       name: "Bolu cake srikaya",
//       items: "2 items",
//       carbs: "Carbs",
//       fats: "Fats",
//       icon: "🧁",
//     },
//     {
//       id: "3",
//       name: "Milkshake",
//       items: "2 items",
//       carbs: "Carbs",
//       fats: "Fats",
//       icon: "🥤",
//     },
//   ],
// }

// const mealsSlice = createSlice({
//   name: "meals",
//   initialState,
//   reducers: {
//     addMeal: (state, action: PayloadAction<MealItem>) => {
//       state.todayMeals.push(action.payload)
//     },
//     removeMeal: (state, action: PayloadAction<string>) => {
//       state.todayMeals = state.todayMeals.filter((meal) => meal.id !== action.payload)
//     },
//   },
// })



// export const { addMeal, removeMeal } = mealsSlice.actions
// export default mealsSlice.reducer

import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

// --- Interfaces ---

// Interface for a meal item from TheMealDB API (used internally by thunk)
interface MealApiItem {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strMealThumb: string
}

// Interface for a meal item in todayMeals
interface MealItem {
  id: string
  time: string
  name: string
  category: string
  amount: string
}

// Interface for a recommended food item (can be static with icon or fetched with image)
export interface RecommendedFoodItem {
  id: string
  name: string
  items: string
  carbs: string
  fats: string
  icon?: string // For static emoji icons
  image?: string // For API fetched image URLs
}

// Combined state interface
interface MealsState {
  todayMeals: MealItem[]
  recommendedFoods: RecommendedFoodItem[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

// --- Initial State ---

const initialState: MealsState = {
  todayMeals: [
    { id: "1", time: "Breakfast", name: "Bread with chocolate", category: "Bread", amount: "1 items" },
    { id: "2", time: "Lunch", name: "Fried chicken spicy", category: "Fruits", amount: "2 items" },
    { id: "3", time: "Dinner", name: "Brocolly with cabai", category: "Vegetables", amount: "4 items" },
  ],
  // Initial recommendedFoods from user's provided slice, adapted to new interface
  recommendedFoods: [
    { id: "1", name: "Hot fried chicken", items: "2 items", carbs: "Carbs", fats: "Fats", icon: "🍗" },
    { id: "2", name: "Bolu cake srikaya", items: "2 items", carbs: "Carbs", fats: "Fats", icon: "🧁" },
    { id: "3", name: "Milkshake", items: "2 items", carbs: "Carbs", fats: "Fats", icon: "🥤" },
  ],
  status: "idle",
  error: null,
}

// --- Async Thunk ---

// Async thunk to fetch random meals from TheMealDB
export const fetchRecommendedMeals = createAsyncThunk<RecommendedFoodItem[], number>(
  "meals/fetchRecommendedMeals",
  async (count = 3) => {
    const meals: RecommendedFoodItem[] = []
    for (let i = 0; i < count; i++) {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      if (!response.ok) {
        throw new Error("Failed to fetch meal")
      }
      const data = await response.json()
      const meal: MealApiItem = data.meals[0] // The API returns an array even for a single random meal

      // Map API data to our RecommendedFoodItem structure, prioritizing 'image'
      meals.push({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb, // This will be the image URL
        items: meal.strCategory,
        carbs: `${Math.floor(Math.random() * 50) + 10}g Carbs`, // Dummy value
        fats: `${Math.floor(Math.random() * 30) + 5}g Fats`, // Dummy value
      })
    }
    return meals
  },
)

// --- Slice Definition ---

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<MealItem>) => {
      state.todayMeals.push(action.payload)
    },
    removeMeal: (state, action: PayloadAction<string>) => {
      state.todayMeals = state.todayMeals.filter((meal) => meal.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedMeals.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchRecommendedMeals.fulfilled, (state, action: PayloadAction<RecommendedFoodItem[]>) => {
        state.status = "succeeded"
        state.recommendedFoods = action.payload // Overwrite with fetched data
      })
      .addCase(fetchRecommendedMeals.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch recommended meals"
      })
  },
})

export const { addMeal, removeMeal } = mealsSlice.actions
export default mealsSlice.reducer

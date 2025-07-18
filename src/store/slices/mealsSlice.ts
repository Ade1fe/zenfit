import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface MealItem {
  id: string
  time: string
  name: string
  category: string
  amount: string
}

interface RecommendedFood {
  id: string
  name: string
  items: string
  carbs: string
  fats: string
  icon: string
}

interface MealsState {
  todayMeals: MealItem[]
  recommendedFoods: RecommendedFood[]
}

const initialState: MealsState = {
  todayMeals: [
    {
      id: "1",
      time: "Breakfast",
      name: "Bread with chocolate",
      category: "Bread",
      amount: "1 items",
    },
    {
      id: "2",
      time: "Lunch",
      name: "Fried chicken spicy",
      category: "Fruits",
      amount: "2 items",
    },
    {
      id: "3",
      time: "Dinner",
      name: "Brocolly with cabai",
      category: "Vegetables",
      amount: "4 items",
    },
  ],
  recommendedFoods: [
    {
      id: "1",
      name: "Hot fried chicken",
      items: "2 items",
      carbs: "Carbs",
      fats: "Fats",
      icon: "🍗",
    },
    {
      id: "2",
      name: "Bolu cake srikaya",
      items: "2 items",
      carbs: "Carbs",
      fats: "Fats",
      icon: "🧁",
    },
    {
      id: "3",
      name: "Milkshake",
      items: "2 items",
      carbs: "Carbs",
      fats: "Fats",
      icon: "🥤",
    },
  ],
}

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
})



export const { addMeal, removeMeal } = mealsSlice.actions
export default mealsSlice.reducer



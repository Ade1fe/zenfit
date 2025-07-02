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
// slices/mealsSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define strict literal types for meal properties
export type MealTime = "Breakfast" | "Lunch" | "Dinner";
// Added "Dairy", "Meat", "Snacks" to align with potential categories from API/fallbacks
export type MealCategory = "Bread" | "Fruits" | "Vegetables" | "Other" | "Dairy" | "Meat" | "Snacks";

// Define the Meal interface with all necessary properties
export interface Meal {
  id: string;
  name: string;
  time: MealTime;
  category: MealCategory;
  amount: string; // e.g., "200g", "1 piece", "1 cup"
}

// Define the state structure for the meals slice
export interface MealsState {
  todayMeals: Meal[]; // Ensure this matches what you're selecting in useSelector
  // You might have other meal-related states here, e.g., isLoading, error, etc.
}

const initialState: MealsState = {
  todayMeals: [
    // Example initial data (you would typically fetch this from an API)
    { id: 'm1', name: 'Oatmeal', time: 'Breakfast', category: 'Bread', amount: '1 cup' },
    { id: 'm2', name: 'Apple', time: 'Breakfast', category: 'Fruits', amount: '1 piece' },
    { id: 'm3', name: 'Chicken Salad', time: 'Lunch', category: 'Meat', amount: '200g' },
    { id: 'm4', name: 'Spinach', time: 'Lunch', category: 'Vegetables', amount: '100g' },
    { id: 'm5', name: 'Salmon with Asparagus', time: 'Dinner', category: 'Meat', amount: '150g' },
    { id: 'm6', name: 'Greek Yogurt', time: 'Dinner', category: 'Dairy', amount: '1 cup' },
  ],
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    // Action to add a new meal with fully typed payload
    addMeal: (state, action: PayloadAction<{ id: string; name: string; time: MealTime; category: MealCategory; amount: string }>) => {
      state.todayMeals.push(action.payload);
    },
    // Action to update meal time with type validation
    updateMealTime: (state, action: PayloadAction<{ id: string; newTime: string }>) => {
        const meal = state.todayMeals.find(m => m.id === action.payload.id);
        if (meal) {
            // Validate the incoming string against the MealTime union type
            if (action.payload.newTime === "Breakfast" || action.payload.newTime === "Lunch" || action.payload.newTime === "Dinner") {
                meal.time = action.payload.newTime; // Assignment is now safe
            } else {
                console.warn(`Attempted to set invalid meal time for meal ID ${action.payload.id}: "${action.payload.newTime}". Value not updated.`);
            }
        }
    },
    // Best practice: Action specifically for setting meal time with strict typing
    setMealTime: (state, action: PayloadAction<{ id: string; time: MealTime }>) => {
      const meal = state.todayMeals.find(m => m.id === action.payload.id);
      if (meal) {
        meal.time = action.payload.time; // Directly assign, type is guaranteed
      }
    },
    // You could add similar actions for updating category or amount if needed
    // updateMealCategory: (state, action: PayloadAction<{ id: string; newCategory: MealCategory }>) => { /* ... */ },
    // updateMealAmount: (state, action: PayloadAction<{ id: string; newAmount: string }>) => { /* ... */ },
  },
});

export const { addMeal, updateMealTime, setMealTime } = mealsSlice.actions;
export default mealsSlice.reducer;
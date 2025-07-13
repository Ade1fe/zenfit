import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Define interfaces here for consistency and reusability
interface FoodItem {
  id: number
  title: string
  image: string
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
  readyInMinutes?: number
  servings?: number
  instructions?: string
  category?: string
  area?: string
}

// Export MealEvent explicitly
export interface MealEvent {
  id: string
  title: string
  type: "meal"
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
  time: string
  date: string
  foods: FoodItem[]
  totalCalories: number
  totalProtein: number
  totalCarbs: number
  totalFat: number
}

type EventType = "workout" | "appointment" | "reminder"

interface RegularEvent {
  id: string
  title: string
  type: EventType
  time: string
  date: string
  description?: string
  duration?: string
  color: string
}

export type CalendarEvent = MealEvent | RegularEvent // Export for use in RootState

interface CalendarState {
  events: CalendarEvent[]
}

const initialEvents: CalendarEvent[] = [
  {
    id: "meal-1-20250108",
    title: "Healthy Breakfast",
    type: "meal",
    mealType: "breakfast",
    time: "08:00",
    date: "2025-01-08",
    foods: [
      {
        id: 1,
        title: "Oatmeal with Berries",
        image: "/placeholder.svg?height=100&width=100",
        calories: 300,
        protein: 10,
        carbs: 50,
        fat: 5,
      },
      {
        id: 2,
        title: "Greek Yogurt",
        image: "/placeholder.svg?height=100&width=100",
        calories: 150,
        protein: 15,
        carbs: 12,
        fat: 8,
      },
    ],
    totalCalories: 450,
    totalProtein: 25,
    totalCarbs: 62,
    totalFat: 13,
  } as MealEvent,
  {
    id: "meal-2-20250108",
    title: "Power Lunch",
    type: "meal",
    mealType: "lunch",
    time: "12:30",
    date: "2025-01-08",
    foods: [
      {
        id: 3,
        title: "Grilled Chicken Salad",
        image: "/placeholder.svg?height=100&width=100",
        calories: 350,
        protein: 35,
        carbs: 15,
        fat: 18,
      },
      {
        id: 4,
        title: "Quinoa",
        image: "/placeholder.svg?height=100&width=100",
        calories: 180,
        protein: 6,
        carbs: 32,
        fat: 3,
      },
    ],
    totalCalories: 530,
    totalProtein: 41,
    totalCarbs: 47,
    totalFat: 21,
  } as MealEvent,
  {
    id: "meal-3-20250108",
    title: "Nutritious Dinner",
    type: "meal",
    mealType: "dinner",
    time: "18:00",
    date: "2025-01-08",
    foods: [
      {
        id: 5,
        title: "Baked Salmon",
        image: "/placeholder.svg?height=100&width=100",
        calories: 280,
        protein: 25,
        carbs: 0,
        fat: 20,
      },
      {
        id: 6,
        title: "Roasted Vegetables",
        image: "/placeholder.svg?height=100&width=100",
        calories: 120,
        protein: 4,
        carbs: 25,
        fat: 2,
      },
      {
        id: 7,
        title: "Brown Rice",
        image: "/placeholder.svg?height=100&width=100",
        calories: 150,
        protein: 3,
        carbs: 30,
        fat: 1,
      },
    ],
    totalCalories: 550,
    totalProtein: 32,
    totalCarbs: 55,
    totalFat: 23,
  } as MealEvent,
  {
    id: "workout-1-20250108",
    title: "Morning Run",
    type: "workout",
    time: "07:00",
    date: "2025-01-08",
    description: "30 min outdoor run",
    duration: "30m",
    color: "bg-emerald-600",
  } as RegularEvent,
]

const initialState: CalendarState = {
  events: initialEvents,
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addCalendarEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events.push(action.payload)
    },
    updateCalendarEvent: (state, action: PayloadAction<CalendarEvent>) => {
      const index = state.events.findIndex((event) => event.id === action.payload.id)
      if (index !== -1) {
        state.events[index] = action.payload
      }
    },
    deleteCalendarEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter((event) => event.id !== action.payload)
    },
    addFoodToMealEvent: (state, action: PayloadAction<{ mealId: string; food: FoodItem }>) => {
      const { mealId, food } = action.payload
      const mealIndex = state.events.findIndex((event) => event.id === mealId && event.type === "meal")

      if (mealIndex !== -1) {
        const meal = state.events[mealIndex] as MealEvent
        const updatedFoods = [...meal.foods, { ...food, id: Date.now() + Math.random() }] // Ensure new ID for added food
        const updatedMeal: MealEvent = {
          ...meal,
          foods: updatedFoods,
          totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
          totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
          totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
          totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
        }
        state.events[mealIndex] = updatedMeal // Update immutably [^1]
      }
    },
    removeFoodFromMealEvent: (state, action: PayloadAction<{ mealId: string; foodId: number }>) => {
      const { mealId, foodId } = action.payload
      const mealIndex = state.events.findIndex((event) => event.id === mealId && event.type === "meal")

      if (mealIndex !== -1) {
        const meal = state.events[mealIndex] as MealEvent
        const updatedFoods = meal.foods.filter((food) => food.id !== foodId)

        if (updatedFoods.length === 0) {
          // If no foods left, remove the meal event entirely
          state.events = state.events.filter((event) => event.id !== mealId)
        } else {
          const updatedMeal: MealEvent = {
            ...meal,
            foods: updatedFoods,
            totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
            totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
            totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
            totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
          }
          state.events[mealIndex] = updatedMeal // Update immutably [^1]
        }
      }
    },
  },
})

export const {
  addCalendarEvent,
  updateCalendarEvent,
  deleteCalendarEvent,
  addFoodToMealEvent,
  removeFoodFromMealEvent,
} = calendarSlice.actions
export default calendarSlice.reducer

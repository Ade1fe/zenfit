

import { createContext, useContext, useState, type ReactNode } from "react"

// Meal plan data interface
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

interface MealEvent {
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

interface MealContextType {
  meals: MealEvent[]
  addMeal: (meal: MealEvent) => void
  updateMeal: (mealId: string, updatedMeal: MealEvent) => void
  deleteMeal: (mealId: string) => void
  getMealsForDate: (date: string) => MealEvent[]
  getTodayMeals: () => MealEvent[]
}

const MealContext = createContext<MealContextType | undefined>(undefined)

// Generate initial sample meal data
const generateInitialMealData = (): MealEvent[] => {
  const today = new Date()
  const mealData: MealEvent[] = []

  // Sample food items for different meal types
  const sampleFoods = {
    breakfast: [
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
    lunch: [
      {
        id: 4,
        title: "Grilled Chicken Salad",
        image: "/placeholder.svg?height=100&width=100",
        calories: 350,
        protein: 35,
        carbs: 15,
        fat: 18,
      },
      {
        id: 5,
        title: "Quinoa",
        image: "/placeholder.svg?height=100&width=100",
        calories: 180,
        protein: 6,
        carbs: 32,
        fat: 3,
      },
    ],
    dinner: [
      {
        id: 7,
        title: "Baked Salmon",
        image: "/placeholder.svg?height=100&width=100",
        calories: 280,
        protein: 25,
        carbs: 0,
        fat: 20,
      },
      {
        id: 8,
        title: "Roasted Vegetables",
        image: "/placeholder.svg?height=100&width=100",
        calories: 120,
        protein: 4,
        carbs: 25,
        fat: 2,
      },
    ],
    snack: [
      {
        id: 10,
        title: "Mixed Nuts",
        image: "/placeholder.svg?height=100&width=100",
        calories: 180,
        protein: 6,
        carbs: 8,
        fat: 16,
      },
    ],
  }

  // Generate data for the last 3 days including today
  for (let i = 0; i < 3; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    const dateString = date.toISOString().split("T")[0]

    // Add breakfast
    const breakfastFoods = sampleFoods.breakfast
    mealData.push({
      id: `meal-breakfast-${dateString}`,
      title: "Healthy Breakfast",
      type: "meal",
      mealType: "breakfast",
      time: "08:00",
      date: dateString,
      foods: breakfastFoods,
      totalCalories: breakfastFoods.reduce((sum, food) => sum + (food.calories || 0), 0),
      totalProtein: breakfastFoods.reduce((sum, food) => sum + (food.protein || 0), 0),
      totalCarbs: breakfastFoods.reduce((sum, food) => sum + (food.carbs || 0), 0),
      totalFat: breakfastFoods.reduce((sum, food) => sum + (food.fat || 0), 0),
    })

    // Add lunch
    const lunchFoods = sampleFoods.lunch
    mealData.push({
      id: `meal-lunch-${dateString}`,
      title: "Power Lunch",
      type: "meal",
      mealType: "lunch",
      time: "12:30",
      date: dateString,
      foods: lunchFoods,
      totalCalories: lunchFoods.reduce((sum, food) => sum + (food.calories || 0), 0),
      totalProtein: lunchFoods.reduce((sum, food) => sum + (food.protein || 0), 0),
      totalCarbs: lunchFoods.reduce((sum, food) => sum + (food.carbs || 0), 0),
      totalFat: lunchFoods.reduce((sum, food) => sum + (food.fat || 0), 0),
    })

    // Add dinner for today and yesterday only
    if (i < 2) {
      const dinnerFoods = sampleFoods.dinner
      mealData.push({
        id: `meal-dinner-${dateString}`,
        title: "Nutritious Dinner",
        type: "meal",
        mealType: "dinner",
        time: "18:00",
        date: dateString,
        foods: dinnerFoods,
        totalCalories: dinnerFoods.reduce((sum, food) => sum + (food.calories || 0), 0),
        totalProtein: dinnerFoods.reduce((sum, food) => sum + (food.protein || 0), 0),
        totalCarbs: dinnerFoods.reduce((sum, food) => sum + (food.carbs || 0), 0),
        totalFat: dinnerFoods.reduce((sum, food) => sum + (food.fat || 0), 0),
      })
    }
  }

  return mealData
}

export function MealProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<MealEvent[]>(generateInitialMealData())

  const addMeal = (meal: MealEvent) => {
    setMeals((prev) => [...prev, meal])
  }

  const updateMeal = (mealId: string, updatedMeal: MealEvent) => {
    setMeals((prev) => prev.map((meal) => (meal.id === mealId ? updatedMeal : meal)))
  }

  const deleteMeal = (mealId: string) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== mealId))
  }

  const getMealsForDate = (date: string) => {
    return meals.filter((meal) => meal.date === date).sort((a, b) => a.time.localeCompare(b.time))
  }

  const getTodayMeals = () => {
    const today = new Date().toISOString().split("T")[0]
    return getMealsForDate(today)
  }

  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
        updateMeal,
        deleteMeal,
        getMealsForDate,
        getTodayMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  )
}

export function useMealContext() {
  const context = useContext(MealContext)
  if (context === undefined) {
    throw new Error("useMealContext must be used within a MealProvider")
  }
  return context
}

// 

// import { useDispatch } from "react-redux"
// import { useCallback } from "react"
// import { addCalendarMeal, removeCalendarMeal, setCalendarMeals, updateCalendarMeal } from "../../store/slices/mealsSlice"
// // import { addCalendarMeal, updateCalendarMeal, removeCalendarMeal, setCalendarMeals } from "../store/mealsSlice"

// // Types from CalendarApp
// interface FoodItem {
//   id: number
//   title: string
//   image: string
//   calories?: number
//   protein?: number
//   carbs?: number
//   fat?: number
//   readyInMinutes?: number
//   servings?: number
//   instructions?: string
//   category?: string
//   area?: string
// }

// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   foods: FoodItem[]
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// export const useMealSync = () => {
//   const dispatch = useDispatch()

//   const syncMealToRedux = useCallback(
//     (meal: MealEvent) => {
//       dispatch(addCalendarMeal(meal))
//     },
//     [dispatch],
//   )

//   const updateMealInRedux = useCallback(
//     (meal: MealEvent) => {
//       dispatch(updateCalendarMeal(meal))
//     },
//     [dispatch],
//   )

//   const removeMealFromRedux = useCallback(
//     (mealId: string) => {
//       dispatch(removeCalendarMeal(mealId))
//     },
//     [dispatch],
//   )

//   const syncAllMealsToRedux = useCallback(
//     (meals: MealEvent[]) => {
//       dispatch(setCalendarMeals(meals))
//     },
//     [dispatch],
//   )

//   return {
//     syncMealToRedux,
//     updateMealInRedux,
//     removeMealFromRedux,
//     syncAllMealsToRedux,
//   }
// }

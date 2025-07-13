// // 

// // import { useState } from "react"
// // import { ChefHat, Save, Plus, Trash2 } from "lucide-react"
// // import { Button } from "./ui/button"
// // import { Badge } from "./ui/badge"
// // import { FoodSearch } from "./food-search"

// // interface FoodItem {
// //   id: number
// //   title: string
// //   image: string
// //   calories?: number
// //   protein?: number
// //   carbs?: number
// //   fat?: number
// //   readyInMinutes?: number
// //   servings?: number
// // }

// // interface MealPlan {
// //   id: string
// //   name: string
// //   date: string
// //   meals: {
// //     breakfast: FoodItem[]
// //     lunch: FoodItem[]
// //     dinner: FoodItem[]
// //     snacks: FoodItem[]
// //   }
// //   totalCalories: number
// //   totalProtein: number
// //   totalCarbs: number
// //   totalFat: number
// // }

// // const EnhancedMealPlanner = () => {
// //   const [currentView, setCurrentView] = useState<"planner" | "search">("planner")
// //   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
// //   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snacks">("breakfast")
// //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

// //   const [mealPlans, setMealPlans] = useState<MealPlan[]>([
// //     {
// //       id: "1",
// //       name: "Today's Meal Plan",
// //       date: new Date().toISOString().split("T")[0],
// //       meals: {
// //         breakfast: [],
// //         lunch: [],
// //         dinner: [],
// //         snacks: [],
// //       },
// //       totalCalories: 0,
// //       totalProtein: 0,
// //       totalCarbs: 0,
// //       totalFat: 0,
// //     },
// //   ])

// //   const getCurrentMealPlan = () => {
// //     return (
// //       mealPlans.find((plan) => plan.date === selectedDate) || {
// //         id: Date.now().toString(),
// //         name: "New Meal Plan",
// //         date: selectedDate,
// //         meals: {
// //           breakfast: [],
// //           lunch: [],
// //           dinner: [],
// //           snacks: [],
// //         },
// //         totalCalories: 0,
// //         totalProtein: 0,
// //         totalCarbs: 0,
// //         totalFat: 0,
// //       }
// //     )
// //   }

// //   const addFoodToMeal = (food: FoodItem) => {
// //     const currentPlan = getCurrentMealPlan()
// //     const updatedMeals = {
// //       ...currentPlan.meals,
// //       [selectedMealType]: [...currentPlan.meals[selectedMealType], food],
// //     }

// //     const totals = calculateTotals(updatedMeals)

// //     const updatedPlan: MealPlan = {
// //       ...currentPlan,
// //       meals: updatedMeals,
// //       ...totals,
// //     }

// //     setMealPlans((prev) => {
// //       const existingIndex = prev.findIndex((plan) => plan.date === selectedDate)
// //       if (existingIndex >= 0) {
// //         const updated = [...prev]
// //         updated[existingIndex] = updatedPlan
// //         return updated
// //       } else {
// //         return [...prev, updatedPlan]
// //       }
// //     })

// //     setCurrentView("planner")
// //   }

// //   const removeFoodFromMeal = (mealType: keyof MealPlan["meals"], foodId: number) => {
// //     const currentPlan = getCurrentMealPlan()
// //     const updatedMeals = {
// //       ...currentPlan.meals,
// //       [mealType]: currentPlan.meals[mealType].filter((food) => food.id !== foodId),
// //     }

// //     const totals = calculateTotals(updatedMeals)

// //     const updatedPlan: MealPlan = {
// //       ...currentPlan,
// //       meals: updatedMeals,
// //       ...totals,
// //     }

// //     setMealPlans((prev) => {
// //       const existingIndex = prev.findIndex((plan) => plan.date === selectedDate)
// //       if (existingIndex >= 0) {
// //         const updated = [...prev]
// //         updated[existingIndex] = updatedPlan
// //         return updated
// //       }
// //       return prev
// //     })
// //   }

// //   const calculateTotals = (meals: MealPlan["meals"]) => {
// //     const allFoods = [...meals.breakfast, ...meals.lunch, ...meals.dinner, ...meals.snacks]

// //     return {
// //       totalCalories: allFoods.reduce((sum, food) => sum + (food.calories || 0), 0),
// //       totalProtein: allFoods.reduce((sum, food) => sum + (food.protein || 0), 0),
// //       totalCarbs: allFoods.reduce((sum, food) => sum + (food.carbs || 0), 0),
// //       totalFat: allFoods.reduce((sum, food) => sum + (food.fat || 0), 0),
// //     }
// //   }

// //   const currentPlan = getCurrentMealPlan()

// //   const mealTypes = [
// //     { key: "breakfast" as const, label: "Breakfast", icon: "🌅", color: "bg-orange-100 text-orange-800" },
// //     { key: "lunch" as const, label: "Lunch", icon: "☀️", color: "bg-yellow-100 text-yellow-800" },
// //     { key: "dinner" as const, label: "Dinner", icon: "🌙", color: "bg-blue-100 text-blue-800" },
// //     { key: "snacks" as const, label: "Snacks", icon: "🍎", color: "bg-green-100 text-green-800" },
// //   ]

// //   if (currentView === "search") {
// //     return (
// //       <div className="p-6 space-y-6">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-4">
// //             <Button variant="outline" onClick={() => setCurrentView("planner")}>
// //               ← Back to Planner
// //             </Button>
// //             <div>
// //               <h2 className="text-xl font-bold text-gray-900">Add to {selectedMealType}</h2>
// //               <p className="text-gray-600">Search for foods to add to your meal plan</p>
// //             </div>
// //           </div>

// //           <div className="flex gap-2">
// //             <Button
// //               variant={searchType === "recipes" ? "default" : "outline"}
// //               size="sm"
// //               onClick={() => setSearchType("recipes")}
// //             >
// //               Recipes
// //             </Button>
// //             <Button
// //               variant={searchType === "ingredients" ? "default" : "outline"}
// //               size="sm"
// //               onClick={() => setSearchType("ingredients")}
// //             >
// //               Ingredients
// //             </Button>
// //           </div>
// //         </div>

// //         <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* Header */}
// //       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// //         <div>
// //           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
// //             <ChefHat className="w-8 h-8 text-purple-600" />
// //             Smart Meal Planner
// //           </h1>
// //           <p className="text-gray-600 mt-1">Plan your meals with real food data and nutrition tracking</p>
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <input
// //             type="date"
// //             value={selectedDate}
// //             onChange={(e) => setSelectedDate(e.target.value)}
// //             className="px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
// //           />
// //           <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
// //             <Save className="w-4 h-4 mr-2" />
// //             Save Plan
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Nutrition Summary */}
// //       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
// //         <h3 className="text-lg font-semibold mb-4">Daily Nutrition Summary</h3>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           <div className="bg-red-50 p-4 rounded-lg text-center">
// //             <div className="text-2xl font-bold text-red-600">{currentPlan.totalCalories}</div>
// //             <div className="text-sm text-red-700">Calories</div>
// //             <div className="text-xs text-gray-500 mt-1">Goal: 2000</div>
// //           </div>
// //           <div className="bg-blue-50 p-4 rounded-lg text-center">
// //             <div className="text-2xl font-bold text-blue-600">{Math.round(currentPlan.totalProtein)}g</div>
// //             <div className="text-sm text-blue-700">Protein</div>
// //             <div className="text-xs text-gray-500 mt-1">Goal: 150g</div>
// //           </div>
// //           <div className="bg-green-50 p-4 rounded-lg text-center">
// //             <div className="text-2xl font-bold text-green-600">{Math.round(currentPlan.totalCarbs)}g</div>
// //             <div className="text-sm text-green-700">Carbs</div>
// //             <div className="text-xs text-gray-500 mt-1">Goal: 250g</div>
// //           </div>
// //           <div className="bg-yellow-50 p-4 rounded-lg text-center">
// //             <div className="text-2xl font-bold text-yellow-600">{Math.round(currentPlan.totalFat)}g</div>
// //             <div className="text-sm text-yellow-700">Fat</div>
// //             <div className="text-xs text-gray-500 mt-1">Goal: 65g</div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Meal Planning Grid */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {mealTypes.map((mealType) => (
// //           <div key={mealType.key} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
// //             <div className="flex items-center justify-between mb-4">
// //               <div className="flex items-center gap-3">
// //                 <span className="text-2xl">{mealType.icon}</span>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-900">{mealType.label}</h3>
// //                   <Badge className={mealType.color}>
// //                     {currentPlan.meals[mealType.key].reduce((sum, food) => sum + (food.calories || 0), 0)} cal
// //                   </Badge>
// //                 </div>
// //               </div>
// //               <Button
// //                 size="sm"
// //                 onClick={() => {
// //                   setSelectedMealType(mealType.key)
// //                   setCurrentView("search")
// //                 }}
// //               >
// //                 <Plus className="w-4 h-4 mr-2" />
// //                 Add Food
// //               </Button>
// //             </div>

// //             <div className="space-y-3">
// //               {currentPlan.meals[mealType.key].length > 0 ? (
// //                 currentPlan.meals[mealType.key].map((food) => (
// //                   <div key={food.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
// //                     <img
// //                       src={food.image || "/placeholder.svg"}
// //                       alt={food.title}
// //                       className="w-12 h-12 rounded-lg object-cover"
// //                       onError={(e) => {
// //                         e.currentTarget.src = "/placeholder.svg?height=48&width=48"
// //                       }}
// //                     />
// //                     <div className="flex-1 min-w-0">
// //                       <h4 className="font-medium text-gray-900 truncate">{food.title}</h4>
// //                       <div className="flex items-center gap-4 text-xs text-gray-500">
// //                         <span>{food.calories} cal</span>
// //                         <span>{food.protein}g protein</span>
// //                         {food.readyInMinutes && <span>{food.readyInMinutes}m</span>}
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={() => removeFoodFromMeal(mealType.key, food.id)}
// //                       className="text-red-500 hover:text-red-700 p-1"
// //                     >
// //                       <Trash2 className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="text-center py-8 text-gray-500">
// //                   <ChefHat className="w-8 h-8 mx-auto mb-2 text-gray-300" />
// //                   <p className="text-sm">No foods added yet</p>
// //                   <p className="text-xs">Click "Add Food" to get started</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default EnhancedMealPlanner
// 

// import { useState } from "react"
// import { ChefHat, Save, Plus, Trash2, CalendarDays } from "lucide-react" // Added CalendarDays for header icon
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"
// import { FoodSearch } from "./food-search" // Assuming FoodSearch is correctly imported and styled

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
// }

// interface MealPlan {
//   id: string
//   name: string
//   date: string
//   meals: {
//     breakfast: FoodItem[]
//     lunch: FoodItem[]
//     dinner: FoodItem[]
//     snacks: FoodItem[]
//   }
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// const EnhancedMealPlanner = () => {
//   const [currentView, setCurrentView] = useState<"planner" | "search">("planner")
//   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
//   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snacks">("breakfast")
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([
//     {
//       id: "1",
//       name: "Today's Meal Plan",
//       date: new Date().toISOString().split("T")[0],
//       meals: {
//         breakfast: [
//           // Sample breakfast
//           { id: 101, title: "Oatmeal with Berries", image: "/placeholder.svg?height=100&width=100", calories: 300, protein: 10, carbs: 50, fat: 5 },
//         ],
//         lunch: [
//           // Sample lunch
//           { id: 102, title: "Grilled Chicken Salad", image: "/placeholder.svg?height=100&width=100", calories: 450, protein: 40, carbs: 20, fat: 20 },
//         ],
//         dinner: [],
//         snacks: [],
//       },
//       totalCalories: 750, // Updated to reflect sample data
//       totalProtein: 50,
//       totalCarbs: 70,
//       totalFat: 25,
//     },
//   ])

//   const getCurrentMealPlan = () => {
//     return (
//       mealPlans.find((plan) => plan.date === selectedDate) || {
//         id: Date.now().toString(),
//         name: "New Meal Plan",
//         date: selectedDate,
//         meals: {
//           breakfast: [],
//           lunch: [],
//           dinner: [],
//           snacks: [],
//         },
//         totalCalories: 0,
//         totalProtein: 0,
//         totalCarbs: 0,
//         totalFat: 0,
//       }
//     )
//   }

//   const calculateTotals = (meals: MealPlan["meals"]) => {
//     const allFoods = [...meals.breakfast, ...meals.lunch, ...meals.dinner, ...meals.snacks]

//     return {
//       totalCalories: allFoods.reduce((sum, food) => sum + (food.calories || 0), 0),
//       totalProtein: allFoods.reduce((sum, food) => sum + (food.protein || 0), 0),
//       totalCarbs: allFoods.reduce((sum, food) => sum + (food.carbs || 0), 0),
//       totalFat: allFoods.reduce((sum, food) => sum + (food.fat || 0), 0),
//     }
//   }

//   const addFoodToMeal = (food: FoodItem) => {
//     const currentPlan = getCurrentMealPlan()
//     const updatedMeals = {
//       ...currentPlan.meals,
//       [selectedMealType]: [...currentPlan.meals[selectedMealType], food],
//     }

//     const totals = calculateTotals(updatedMeals)

//     const updatedPlan: MealPlan = {
//       ...currentPlan,
//       meals: updatedMeals,
//       ...totals,
//     }

//     setMealPlans((prev) => {
//       const existingIndex = prev.findIndex((plan) => plan.date === selectedDate)
//       if (existingIndex >= 0) {
//         const updated = [...prev]
//         updated[existingIndex] = updatedPlan
//         return updated
//       } else {
//         return [...prev, updatedPlan]
//       }
//     })

//     setCurrentView("planner")
//   }

//   const removeFoodFromMeal = (mealType: keyof MealPlan["meals"], foodId: number) => {
//     const currentPlan = getCurrentMealPlan()
//     const updatedMeals = {
//       ...currentPlan.meals,
//       [mealType]: currentPlan.meals[mealType].filter((food) => food.id !== foodId),
//     }

//     const totals = calculateTotals(updatedMeals)

//     const updatedPlan: MealPlan = {
//       ...currentPlan,
//       meals: updatedMeals,
//       ...totals,
//     }

//     setMealPlans((prev) => {
//       const existingIndex = prev.findIndex((plan) => plan.date === selectedDate)
//       if (existingIndex >= 0) {
//         const updated = [...prev]
//         updated[existingIndex] = updatedPlan
//         return updated
//       }
//       return prev
//     })
//   }

//   const currentPlan = getCurrentMealPlan()

//   const mealTypes = [
//     { key: "breakfast" as const, label: "Breakfast", icon: "🌅", color: "bg-orange-100 text-orange-800" },
//     { key: "lunch" as const, label: "Lunch", icon: "☀️", color: "bg-yellow-100 text-yellow-800" },
//     { key: "dinner" as const, label: "Dinner", icon: "🌙", color: "bg-blue-100 text-blue-800" },
//     { key: "snacks" as const, label: "Snacks", icon: "🍎", color: "bg-green-100 text-green-800" },
//   ]

//   // --- Search View (no major changes needed as FoodSearch handles its own UI) ---
//   if (currentView === "search") {
//     return (
//       <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <div className="flex items-center gap-4">
//             <Button variant="outline" onClick={() => setCurrentView("planner")} className="shadow-sm hover:shadow-md">
//               ← Back to Planner
//             </Button>
//             <div>
//               <h2 className="text-xl font-bold text-gray-900">Add to {selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}</h2>
//               <p className="text-gray-600">Search for recipes or ingredients to build your meal.</p>
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <Button
//               variant={searchType === "recipes" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSearchType("recipes")}
//               className="min-w-[80px]"
//             >
//               Recipes
//             </Button>
//             <Button
//               variant={searchType === "ingredients" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSearchType("ingredients")}
//               className="min-w-[80px]"
//             >
//               Ingredients
//             </Button>
//           </div>
//         </div>

//         <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
//       </div>
//     )
//   }

//   // --- Main Planner View ---
//   return (
//     <div className="p-4 lg:p-6 space-y-8 bg-gray-50 min-h-screen font-sans">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-gray-200">
//         <div className="flex items-center gap-4">
//           <ChefHat className="w-10 h-10 text-purple-600 animate-bounce-slow" /> {/* Larger icon, subtle animation */}
//           <div>
//             <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
//               Smart Meal Planner
//             </h1>
//             <p className="text-gray-600 text-sm lg:text-base mt-1">
//               Plan your meals with real food data and nutrition tracking
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center gap-3">
//           <label htmlFor="meal-date" className="sr-only">Select Date</label>
//           <div className="relative">
//             <CalendarDays className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
//             <input
//               id="meal-date"
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800"
//             />
//           </div>
//           <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all px-6 py-2.5 shadow-md hover:shadow-lg">
//             <Save className="w-4 h-4 mr-2" />
//             Save Plan
//           </Button>
//         </div>
//       </div>

//       {/* Nutrition Summary */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3 border-gray-100">
//           Daily Nutrition Snapshot
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {/* Calorie Card */}
//           <div className="bg-red-50 p-5 rounded-lg text-center shadow-sm border border-red-100">
//             <div className="text-4xl font-extrabold text-red-700 mb-1 leading-none">{currentPlan.totalCalories}</div>
//             <div className="text-sm text-red-800 font-semibold uppercase tracking-wide">Calories</div>
//             <div className="text-xs text-gray-500 mt-2">Goal: 2000</div>
//           </div>
//           {/* Protein Card */}
//           <div className="bg-blue-50 p-5 rounded-lg text-center shadow-sm border border-blue-100">
//             <div className="text-4xl font-extrabold text-blue-700 mb-1 leading-none">{Math.round(currentPlan.totalProtein)}g</div>
//             <div className="text-sm text-blue-800 font-semibold uppercase tracking-wide">Protein</div>
//             <div className="text-xs text-gray-500 mt-2">Goal: 150g</div>
//           </div>
//           {/* Carbs Card */}
//           <div className="bg-green-50 p-5 rounded-lg text-center shadow-sm border border-green-100">
//             <div className="text-4xl font-extrabold text-green-700 mb-1 leading-none">{Math.round(currentPlan.totalCarbs)}g</div>
//             <div className="text-sm text-green-800 font-semibold uppercase tracking-wide">Carbs</div>
//             <div className="text-xs text-gray-500 mt-2">Goal: 250g</div>
//           </div>
//           {/* Fat Card */}
//           <div className="bg-yellow-50 p-5 rounded-lg text-center shadow-sm border border-yellow-100">
//             <div className="text-4xl font-extrabold text-yellow-700 mb-1 leading-none">{Math.round(currentPlan.totalFat)}g</div>
//             <div className="text-sm text-yellow-800 font-semibold uppercase tracking-wide">Fat</div>
//             <div className="text-xs text-gray-500 mt-2">Goal: 65g</div>
//           </div>
//         </div>
//       </div>

//       {/* Meal Planning Grid */}
//       <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6"> {/* Responsive columns */}
//         {mealTypes.map((mealType) => (
//           <div key={mealType.key} className="bg-white rounded-xl shadow-lg border border-gray-100 p-5">
//             <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
//               <div className="flex items-center gap-3">
//                 <span className="text-3xl">{mealType.icon}</span> {/* Larger icon */}
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 leading-tight">{mealType.label}</h3>
//                   <Badge className={`${mealType.color} mt-1 text-sm font-semibold px-2 py-0.5`}>
//                     {currentPlan.meals[mealType.key].reduce((sum, food) => sum + (food.calories || 0), 0)} cal
//                   </Badge>
//                 </div>
//               </div>
//               <Button
//                 size="sm"
//                 onClick={() => {
//                   setSelectedMealType(mealType.key)
//                   setCurrentView("search")
//                 }}
//                 className="shadow-sm hover:shadow-md"
//               >
//                 <Plus className="w-4 h-4" /> {/* Icon only for cleaner look */}
//               </Button>
//             </div>

//             <div className="space-y-4 pt-2"> {/* Increased space between food items */}
//               {currentPlan.meals[mealType.key].length > 0 ? (
//                 currentPlan.meals[mealType.key].map((food) => (
//                   <div key={food.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 transition-all hover:bg-gray-100">
//                     <img
//                       src={food.image || "/placeholder.svg"}
//                       alt={food.title}
//                       className="w-16 h-16 rounded-md object-cover flex-shrink-0 border border-gray-200"
//                       onError={(e) => {
//                         e.currentTarget.src = "/placeholder.svg?height=64&width=64"
//                       }}
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h4 className="font-semibold text-gray-900 text-base truncate mb-1">{food.title}</h4>
//                       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
//                         <span className="font-medium text-purple-700">{food.calories} cal</span>
//                         <span className="font-medium text-blue-700">{food.protein}g protein</span>
//                         {food.readyInMinutes && <span className="text-gray-500">{food.readyInMinutes}m</span>}
//                       </div>
//                     </div>
//                     <Button
//                       variant="ghost" // Use ghost variant for less prominent delete
//                       // size="icon"
//                       onClick={() => removeFoodFromMeal(mealType.key, food.id)}
//                       className="text-red-500 hover:text-red-700 opacity-80 hover:opacity-100 transition-opacity"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </Button>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-10 text-gray-500"> {/* Increased vertical padding */}
//                   <ChefHat className="w-10 h-10 mx-auto mb-3 text-gray-300" /> {/* Larger icon */}
//                   <p className="text-base font-medium mb-1">No foods added yet</p>
//                   <p className="text-sm text-gray-400">Click "Add Food" to start planning!</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default EnhancedMealPlanner
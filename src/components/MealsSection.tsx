// // import { useSelector } from "react-redux"
// // import type { RootState } from "../store/store"
// // import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// // import { Button } from "./ui/button"
// // import { MoreHorizontal, Link } from "lucide-react"

// // const mealEmojis = {
// //   Breakfast: "🌅",
// //   Lunch: "☀️",
// //   Dinner: "🌙",
// // }

// // const categoryColors = {
// //   Bread: "from-yellow-400 to-orange-500",
// //   Fruits: "from-green-400 to-emerald-500",
// //   Vegetables: "from-green-500 to-teal-600",
// // }

// // export default function MealsSection() {
// //   const { todayMeals } = useSelector((state: RootState) => state.meals)

// //   return (
// //     <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
// //       <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-2">
// //             <span className="text-xl sm:text-2xl">🍽️</span>
// //             <CardTitle className="text-lg sm:text-xl">Meal for today</CardTitle>
// //           </div>
// //           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
// //             <MoreHorizontal className="h-4 w-4" />
// //           </Button>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="p-4 sm:p-6">
// //         <div className="space-y-3 sm:space-y-4">
// //           {/* Desktop Table Header */}
// //           <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
// //             <span>Time</span>
// //             <span>Name food</span>
// //             <span>Categories</span>
// //             <span>Amount</span>
// //           </div>

// //           {/* Table Rows */}
// //           {todayMeals.map((meal, index) => (
// //             <div key={meal.id}>
// //               {/* Desktop Layout */}
// //               <div
// //                 className={`hidden md:grid md:grid-cols-4 gap-4 text-sm py-3 sm:py-4 px-3 rounded-xl transition-all hover:scale-105 ${
// //                   index % 2 === 0
// //                     ? "bg-gradient-to-r from-green-50 to-teal-50"
// //                     : "bg-gradient-to-r from-blue-50 to-indigo-50"
// //                 }`}
// //               >
// //                 <div className="flex items-center space-x-2">
// //                   <span className="text-base sm:text-lg">{mealEmojis[meal.time as keyof typeof mealEmojis]}</span>
// //                   <span className="font-semibold text-gray-800">{meal.time}</span>
// //                 </div>
// //                 <span className="font-medium text-gray-700">{meal.name}</span>
// //                 <div className="flex items-center space-x-2">
// //                   <span
// //                     className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
// //                       categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
// //                     }`}
// //                   >
// //                     {meal.category}
// //                   </span>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <span className="font-medium text-gray-700">{meal.amount}</span>
// //                   <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
// //                     <Link className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>

// //               {/* Mobile Layout */}
// //               <div
// //                 className={`md:hidden p-3 sm:p-4 rounded-xl transition-all ${
// //                   index % 2 === 0
// //                     ? "bg-gradient-to-r from-green-50 to-teal-50"
// //                     : "bg-gradient-to-r from-blue-50 to-indigo-50"
// //                 }`}
// //               >
// //                 <div className="flex items-center justify-between mb-2">
// //                   <div className="flex items-center space-x-2">
// //                     <span className="text-lg">{mealEmojis[meal.time as keyof typeof mealEmojis]}</span>
// //                     <span className="font-semibold text-gray-800 text-sm">{meal.time}</span>
// //                   </div>
// //                   <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
// //                     <Link className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //                 <div className="space-y-2">
// //                   <p className="font-medium text-gray-700 text-sm">{meal.name}</p>
// //                   <div className="flex items-center justify-between">
// //                     <span
// //                       className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
// //                         categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
// //                       }`}
// //                     >
// //                       {meal.category}
// //                     </span>
// //                     <span className="font-medium text-gray-700 text-sm">{meal.amount}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>
// //     </Card>
// //   )
// // }
// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal, Edit, Trash2, Clock, Utensils } from "lucide-react"

// // Meal plan data interface
// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   foods: Array<{
//     id: number
//     title: string
//     image: string
//     calories?: number
//     protein?: number
//     carbs?: number
//     fat?: number
//   }>
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface MealsSectionProps {
//   mealPlanData?: MealEvent[]
// }

// const mealEmojis = {
//   breakfast: "🌅",
//   lunch: "☀️",
//   dinner: "🌙",
//   snack: "🍎",
// }

// const mealColors = {
//   breakfast: "from-orange-400 to-amber-500",
//   lunch: "from-yellow-400 to-orange-500",
//   dinner: "from-emerald-400 to-indigo-500",
//   snack: "from-green-400 to-emerald-500",
// }

// const mealBgColors = {
//   breakfast: "from-orange-50 to-amber-50",
//   lunch: "from-yellow-50 to-orange-50",
//   dinner: "from-emerald-50 to-indigo-50",
//   snack: "from-green-50 to-emerald-50",
// }

// export default function MealsSection({ mealPlanData = [] }: MealsSectionProps) {
//   // Get today's meals
//   const today = new Date().toISOString().split("T")[0]
//   const todayMeals = mealPlanData.filter((meal) => meal.date === today).sort((a, b) => a.time.localeCompare(b.time))

//   const totalCaloriesToday = todayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)

//   return (
//     <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">🍽️</span>
//             <div>
//               <CardTitle className="text-lg sm:text-xl">Today's Meals</CardTitle>
//               <p className="text-green-100 text-sm">
//                 {todayMeals.length} meals • {totalCaloriesToday} calories
//               </p>
//             </div>
//           </div>
//           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-4 sm:p-6">
//         {todayMeals.length > 0 ? (
//           <div className="space-y-3 sm:space-y-4">
//             {/* Desktop Table Header */}
//             <div className="hidden md:grid md:grid-cols-5 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
//               <span>Meal Type</span>
//               <span>Foods</span>
//               <span>Time</span>
//               <span>Calories</span>
//               <span>Actions</span>
//             </div>

//             {/* Meal Rows */}
//             {todayMeals.map((meal, index) => (
//               <div key={meal.id}>
//                 {/* Desktop Layout */}
//                 <div
//                   className={`hidden md:grid md:grid-cols-5 gap-4 text-sm py-3 sm:py-4 px-4 rounded-xl transition-all hover:scale-[1.02] bg-gradient-to-r ${mealBgColors[meal.mealType]} border border-white/50`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div
//                       className={`w-10 h-10 rounded-full bg-gradient-to-r ${mealColors[meal.mealType]} flex items-center justify-center`}
//                     >
//                       <span className="text-lg">{mealEmojis[meal.mealType]}</span>
//                     </div>
//                     <div>
//                       <span className="font-semibold text-gray-800 capitalize">{meal.mealType}</span>
//                       <p className="text-xs text-gray-600">{meal.title}</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <span className="font-medium text-gray-700 text-sm">
//                       {meal.foods.length} item{meal.foods.length !== 1 ? "s" : ""}
//                     </span>
//                     <div className="flex -space-x-1 mt-1">
//                       {meal.foods.slice(0, 3).map((food, i) => (
//                         <img
//                           key={i}
//                           src={food.image || "/placeholder.svg?height=20&width=20"}
//                           alt={food.title}
//                           className="w-5 h-5 rounded-full border-2 border-white object-cover"
//                           title={food.title}
//                         />
//                       ))}
//                       {meal.foods.length > 3 && (
//                         <div className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
//                           <span className="text-xs text-gray-600">+{meal.foods.length - 3}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Clock className="w-4 h-4 text-gray-500" />
//                     <span className="font-medium text-gray-700">{meal.time}</span>
//                   </div>

//                   <div className="flex flex-col">
//                     <span className="font-bold text-lg text-gray-800">{meal.totalCalories}</span>
//                     <span className="text-xs text-gray-600">calories</span>
//                     <div className="flex gap-2 mt-1">
//                       <span className="text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
//                         {meal.totalProtein}g P
//                       </span>
//                       <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">
//                         {meal.totalCarbs}g C
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-100">
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Mobile Layout */}
//                 <div
//                   className={`md:hidden p-4 rounded-xl transition-all bg-gradient-to-r ${mealBgColors[meal.mealType]} border border-white/50`}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-3">
//                       <div
//                         className={`w-12 h-12 rounded-full bg-gradient-to-r ${mealColors[meal.mealType]} flex items-center justify-center`}
//                       >
//                         <span className="text-xl">{mealEmojis[meal.mealType]}</span>
//                       </div>
//                       <div>
//                         <span className="font-semibold text-gray-800 capitalize text-lg">{meal.mealType}</span>
//                         <p className="text-sm text-gray-600">{meal.time}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <span className="font-bold text-xl text-gray-800">{meal.totalCalories}</span>
//                       <p className="text-xs text-gray-600">calories</p>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <Utensils className="w-4 h-4 text-gray-500" />
//                         <span className="text-sm font-medium text-gray-700">
//                           {meal.foods.length} food item{meal.foods.length !== 1 ? "s" : ""}
//                         </span>
//                       </div>
//                       <div className="flex -space-x-1">
//                         {meal.foods.slice(0, 4).map((food, i) => (
//                           <img
//                             key={i}
//                             src={food.image || "/placeholder.svg?height=24&width=24"}
//                             alt={food.title}
//                             className="w-6 h-6 rounded-full border-2 border-white object-cover"
//                             title={food.title}
//                           />
//                         ))}
//                         {meal.foods.length > 4 && (
//                           <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
//                             <span className="text-xs text-gray-600">+{meal.foods.length - 4}</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="flex gap-2">
//                         <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
//                           {meal.totalProtein}g Protein
//                         </span>
//                         <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
//                           {meal.totalCarbs}g Carbs
//                         </span>
//                         <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
//                           {meal.totalFat}g Fat
//                         </span>
//                       </div>
//                       <div className="flex space-x-2">
//                         <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-100">
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-8">
//             <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl">🍽️</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">No meals planned today</h3>
//             <p className="text-gray-600 text-sm mb-4">Start planning your meals to see them here</p>
//             <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
//               Plan Your Meals
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }
// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal, Link } from "lucide-react"

// // Meal plan data interface
// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   foods: Array<{
//     id: number
//     title: string
//     image: string
//     calories?: number
//     protein?: number
//     carbs?: number
//     fat?: number
//   }>
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface MealsSectionProps {
//   mealPlanData?: MealEvent[]
// }

// const mealEmojis = {
//   Breakfast: "🌅",
//   Lunch: "☀️",
//   Dinner: "🌙",
//   Snack: "🍎",
// }

// const categoryColors = {
//   Protein: "from-red-400 to-pink-500",
//   Carbs: "from-yellow-400 to-orange-500",
//   Vegetables: "from-green-400 to-emerald-500",
//   Fruits: "from-green-500 to-teal-600",
//   Dairy: "from-blue-400 to-indigo-500",
//   Fats: "from-purple-400 to-violet-500",
// }

// // Helper function to determine food category
// const getFoodCategory = (food: any): string => {
//   // Simple categorization based on food title - you can enhance this logic
//   const title = food.title.toLowerCase()
//   if (title.includes("chicken") || title.includes("beef") || title.includes("fish") || title.includes("egg"))
//     return "Protein"
//   if (title.includes("rice") || title.includes("bread") || title.includes("pasta") || title.includes("potato"))
//     return "Carbs"
//   if (title.includes("apple") || title.includes("banana") || title.includes("berry") || title.includes("fruit"))
//     return "Fruits"
//   if (
//     title.includes("broccoli") ||
//     title.includes("spinach") ||
//     title.includes("carrot") ||
//     title.includes("vegetable")
//   )
//     return "Vegetables"
//   if (title.includes("milk") || title.includes("cheese") || title.includes("yogurt")) return "Dairy"
//   if (title.includes("oil") || title.includes("butter") || title.includes("nuts")) return "Fats"
//   return "Other"
// }

// export default function MealsSection({ mealPlanData = [] }: MealsSectionProps) {
//   // Get today's meals
//   const today = new Date().toISOString().split("T")[0]
//   const todayMeals = mealPlanData.filter((meal) => meal.date === today).sort((a, b) => a.time.localeCompare(b.time))

//   // Transform meals to match the expected format
//   const transformedMeals = todayMeals.map((meal) => ({
//     id: meal.id,
//     time: meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1), // Capitalize first letter
//     name: meal.foods.length > 0 ? meal.foods[0].title : meal.title,
//     category: meal.foods.length > 0 ? getFoodCategory(meal.foods[0]) : "Other",
//     amount: `${meal.totalCalories} cal`,
//   }))

//   return (
//     <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">🍽️</span>
//             <CardTitle className="text-lg sm:text-xl">Meal for today</CardTitle>
//           </div>
//           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-4 sm:p-6">
//         {transformedMeals.length > 0 ? (
//           <div className="space-y-3 sm:space-y-4">
//             {/* Desktop Table Header */}
//             <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
//               <span>Time</span>
//               <span>Name food</span>
//               <span>Categories</span>
//               <span>Amount</span>
//             </div>

//             {/* Table Rows */}
//             {transformedMeals.map((meal, index) => (
//               <div key={meal.id}>
//                 {/* Desktop Layout */}
//                 <div
//                   className={`hidden md:grid md:grid-cols-4 gap-4 text-sm py-3 sm:py-4 px-3 rounded-xl transition-all hover:scale-105 ${
//                     index % 2 === 0
//                       ? "bg-gradient-to-r from-green-50 to-teal-50"
//                       : "bg-gradient-to-r from-blue-50 to-indigo-50"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-base sm:text-lg">
//                       {mealEmojis[meal.time as keyof typeof mealEmojis] || "🍽️"}
//                     </span>
//                     <span className="font-semibold text-gray-800">{meal.time}</span>
//                   </div>

//                   <span className="font-medium text-gray-700">{meal.name}</span>

//                   <div className="flex items-center space-x-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
//                         categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
//                       }`}
//                     >
//                       {meal.category}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <span className="font-medium text-gray-700">{meal.amount}</span>
//                     <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                       <Link className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Mobile Layout */}
//                 <div
//                   className={`md:hidden p-3 sm:p-4 rounded-xl transition-all ${
//                     index % 2 === 0
//                       ? "bg-gradient-to-r from-green-50 to-teal-50"
//                       : "bg-gradient-to-r from-blue-50 to-indigo-50"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-lg">{mealEmojis[meal.time as keyof typeof mealEmojis] || "🍽️"}</span>
//                       <span className="font-semibold text-gray-800 text-sm">{meal.time}</span>
//                     </div>
//                     <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                       <Link className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   <div className="space-y-2">
//                     <p className="font-medium text-gray-700 text-sm">{meal.name}</p>
//                     <div className="flex items-center justify-between">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
//                           categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
//                         }`}
//                       >
//                         {meal.category}
//                       </span>
//                       <span className="font-medium text-gray-700 text-sm">{meal.amount}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-8">
//             <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl">🍽️</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">No meals planned today</h3>
//             <p className="text-gray-600 text-sm mb-4">Start planning your meals to see them here</p>
//             <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
//               Plan Your Meals
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }
// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal, Link, Utensils } from "lucide-react"

// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   foods: Array<{
//     id: number
//     title: string
//     image: string
//     calories?: number
//     protein?: number
//     carbs?: number
//     fat?: number
//   }>
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface MealsSectionProps {
//   mealPlanData?: MealEvent[]
// }

// const mealEmojis = {
//   breakfast: "🌅",
//   lunch: "☀️",
//   dinner: "🌙",
//   snack: "🍎",
// }

// // Function to categorize foods
// const categorizeFood = (foodTitle: string): string => {
//   const title = foodTitle.toLowerCase()

//   if (
//     title.includes("chicken") ||
//     title.includes("beef") ||
//     title.includes("fish") ||
//     title.includes("egg") ||
//     title.includes("protein") ||
//     title.includes("meat") ||
//     title.includes("salmon") ||
//     title.includes("tuna") ||
//     title.includes("turkey")
//   ) {
//     return "Protein"
//   }

//   if (
//     title.includes("rice") ||
//     title.includes("bread") ||
//     title.includes("pasta") ||
//     title.includes("oat") ||
//     title.includes("cereal") ||
//     title.includes("quinoa") ||
//     title.includes("potato") ||
//     title.includes("noodle")
//   ) {
//     return "Carbs"
//   }

//   if (
//     title.includes("apple") ||
//     title.includes("banana") ||
//     title.includes("orange") ||
//     title.includes("berry") ||
//     title.includes("grape") ||
//     title.includes("fruit") ||
//     title.includes("mango") ||
//     title.includes("pear") ||
//     title.includes("peach")
//   ) {
//     return "Fruits"
//   }

//   if (
//     title.includes("broccoli") ||
//     title.includes("spinach") ||
//     title.includes("carrot") ||
//     title.includes("lettuce") ||
//     title.includes("tomato") ||
//     title.includes("vegetable") ||
//     title.includes("pepper") ||
//     title.includes("onion") ||
//     title.includes("cucumber")
//   ) {
//     return "Vegetables"
//   }

//   if (
//     title.includes("milk") ||
//     title.includes("cheese") ||
//     title.includes("yogurt") ||
//     title.includes("butter") ||
//     title.includes("cream") ||
//     title.includes("dairy")
//   ) {
//     return "Dairy"
//   }

//   return "Other"
// }

// const categoryColors = {
//   Protein: "from-red-400 to-red-600",
//   Carbs: "from-yellow-400 to-orange-500",
//   Fruits: "from-green-400 to-emerald-500",
//   Vegetables: "from-green-500 to-teal-600",
//   Dairy: "from-blue-400 to-blue-600",
//   Other: "from-gray-400 to-gray-600",
// }

// export default function MealsSection({ mealPlanData = [] }: MealsSectionProps) {
//   // Get today's meals
//   const today = new Date().toISOString().split("T")[0]
//   const todayMeals = mealPlanData.filter((meal) => meal.date === today).sort((a, b) => a.time.localeCompare(b.time))

//   // Transform meal data to match the expected format
//   const transformedMeals = todayMeals.map((meal) => {
//     // Get the primary food category (most common category in the meal)
//     const categories = meal.foods.map((food) => categorizeFood(food.title))
//     const categoryCount = categories.reduce(
//       (acc, cat) => {
//         acc[cat] = (acc[cat] || 0) + 1
//         return acc
//       },
//       {} as Record<string, number>,
//     )

//     const primaryCategory = Object.entries(categoryCount).sort(([, a], [, b]) => b - a)[0]?.[0] || "Other"

//     return {
//       id: meal.id,
//       time: meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1),
//       name: meal.title || `${meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)} meal`,
//       category: primaryCategory,
//       amount: `${meal.totalCalories} cal`,
//     }
//   })

//   return (
//     <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">🍽️</span>
//             <CardTitle className="text-lg sm:text-xl">Meal for today</CardTitle>
//           </div>
//           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-4 sm:p-6">
//         {transformedMeals.length > 0 ? (
//           <div className="space-y-3 sm:space-y-4">
//             {/* Desktop Table Header */}
//             <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
//               <span>Time</span>
//               <span>Name food</span>
//               <span>Categories</span>
//               <span>Amount</span>
//             </div>

//             {/* Table Rows */}
//             {transformedMeals.map((meal, index) => (
//               <div key={meal.id}>
//                 {/* Desktop Layout */}
//                 <div
//                   className={`hidden md:grid md:grid-cols-4 gap-4 text-sm py-3 sm:py-4 px-3 rounded-xl transition-all hover:scale-105 ${
//                     index % 2 === 0
//                       ? "bg-gradient-to-r from-green-50 to-teal-50"
//                       : "bg-gradient-to-r from-blue-50 to-indigo-50"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-base sm:text-lg">
//                       {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
//                     </span>
//                     <span className="font-semibold text-gray-800">{meal.time}</span>
//                   </div>
//                   <span className="font-medium text-gray-700">{meal.name}</span>
//                   <div className="flex items-center space-x-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
//                         categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
//                       }`}
//                     >
//                       {meal.category}
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium text-gray-700">{meal.amount}</span>
//                     <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                       <Link className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Mobile Layout */}
//                 <div
//                   className={`md:hidden p-3 sm:p-4 rounded-xl transition-all ${
//                     index % 2 === 0
//                       ? "bg-gradient-to-r from-green-50 to-teal-50"
//                       : "bg-gradient-to-r from-blue-50 to-indigo-50"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-lg">
//                         {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
//                       </span>
//                       <span className="font-semibold text-gray-800 text-sm">{meal.time}</span>
//                     </div>
//                     <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
//                       <Link className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   <div className="space-y-2">
//                     <p className="font-medium text-gray-700 text-sm">{meal.name}</p>
//                     <div className="flex items-center justify-between">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
//                           categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
//                         }`}
//                       >
//                         {meal.category}
//                       </span>
//                       <span className="font-medium text-gray-700 text-sm">{meal.amount}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-12">
//             <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Utensils className="h-8 w-8 text-green-600" />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">No meals planned today</h3>
//             <p className="text-gray-600 text-sm mb-4">Start planning your meals to see them here</p>
//             <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
//               Plan Your Meals
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, Link } from 'lucide-react'

interface MealEvent {
  id: string
  title: string
  type: "meal"
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
  time: string
  date: string
  foods: Array<{
    id: number
    title: string
    image: string
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
  }>
  totalCalories: number
  totalProtein: number
  totalCarbs: number
  totalFat: number
}

interface MealsSectionProps {
  mealEvents?: MealEvent[]
}

const mealEmojis = {
  breakfast: "🌅",
  lunch: "☀️",
  dinner: "🌙",
  snack: "🍎",
}

const categoryColors = {
  Protein: "from-red-400 to-pink-500",
  Carbs: "from-yellow-400 to-orange-500",
  Fruits: "from-green-400 to-emerald-500",
  Vegetables: "from-green-500 to-teal-600",
  Dairy: "from-blue-400 to-indigo-500",
  Grains: "from-amber-400 to-yellow-500",
  Nuts: "from-orange-400 to-red-500",
  Other: "from-gray-400 to-gray-600",
}

// Function to categorize food based on title
const categorizeFood = (foodTitle: string): string => {
  const title = foodTitle.toLowerCase()
  
  if (title.includes('chicken') || title.includes('beef') || title.includes('fish') || 
      title.includes('egg') || title.includes('protein') || title.includes('meat')) {
    return 'Protein'
  }
  if (title.includes('rice') || title.includes('bread') || title.includes('pasta') || 
      title.includes('oat') || title.includes('cereal')) {
    return 'Carbs'
  }
  if (title.includes('apple') || title.includes('banana') || title.includes('orange') || 
      title.includes('berry') || title.includes('fruit')) {
    return 'Fruits'
  }
  if (title.includes('broccoli') || title.includes('spinach') || title.includes('carrot') || 
      title.includes('vegetable') || title.includes('salad')) {
    return 'Vegetables'
  }
  if (title.includes('milk') || title.includes('cheese') || title.includes('yogurt')) {
    return 'Dairy'
  }
  if (title.includes('almond') || title.includes('walnut') || title.includes('nut')) {
    return 'Nuts'
  }
  
  return 'Other'
}

export default function MealsSection({ mealEvents = [] }: MealsSectionProps) {
  // Get today's meals
  const today = new Date().toISOString().split("T")[0]
  const todayMeals = mealEvents.filter((meal) => meal.date === today)
    .sort((a, b) => a.time.localeCompare(b.time))

  // Transform meal data to match the expected format
  const transformedMeals = todayMeals.map((meal) => {
    // Get the primary food category (most common category in the meal)
    const categories = meal.foods.map(food => categorizeFood(food.title))
    const categoryCount = categories.reduce((acc, cat) => {
      acc[cat] = (acc[cat] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    const primaryCategory = Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Other'

    return {
      id: meal.id,
      time: meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1),
      name: meal.title || `${meal.mealType} meal`,
      category: primaryCategory,
      amount: `${meal.totalCalories} cal`,
    }
  })

  return (
    <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">🍽️</span>
            <CardTitle className="text-lg sm:text-xl">Meal for today</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        {transformedMeals.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {/* Desktop Table Header */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
              <span>Time</span>
              <span>Name food</span>
              <span>Categories</span>
              <span>Amount</span>
            </div>

            {/* Table Rows */}
            {transformedMeals.map((meal, index) => (
              <div key={meal.id}>
                {/* Desktop Layout */}
                <div
                  className={`hidden md:grid md:grid-cols-4 gap-4 text-sm py-3 sm:py-4 px-3 rounded-xl transition-all hover:scale-105 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-green-50 to-teal-50"
                      : "bg-gradient-to-r from-blue-50 to-indigo-50"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg">
                      {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
                    </span>
                    <span className="font-semibold text-gray-800">{meal.time}</span>
                  </div>
                  <span className="font-medium text-gray-700">{meal.name}</span>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                        categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
                      }`}
                    >
                      {meal.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{meal.amount}</span>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
                      <Link className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div
                  className={`md:hidden p-3 sm:p-4 rounded-xl transition-all ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-green-50 to-teal-50"
                      : "bg-gradient-to-r from-blue-50 to-indigo-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">{meal.time}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
                      <Link className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700 text-sm">{meal.name}</p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                          categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
                        }`}
                      >
                        {meal.category}
                      </span>
                      <span className="font-medium text-gray-700 text-sm">{meal.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No meals planned today</h3>
            <p className="text-gray-600 text-sm mb-4">Start planning your meals to see them here</p>
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
              Plan Your Meals
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

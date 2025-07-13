// // import { useSelector, useDispatch } from "react-redux"
// // import type { RootState } from "../store/store"
// // import { setPeriod } from "../store/slices/dashboardSlice"
// // import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// // import { Button } from "./ui/button"

// // export default function CaloriesGraph() {
// //   const dispatch = useDispatch()
// //   const { selectedPeriod, caloriesData } = useSelector((state: RootState) => state.dashboard)

// //   const fullLabels =
// //     selectedPeriod === "Weekly"
// //       ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// //       : selectedPeriod === "Monthly"
// //       ? ["Week 1", "Week 2", "Week 3", "Week 4"]
// //       : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// //   const fullData =
// //     caloriesData.length < fullLabels.length
// //       ? [...caloriesData, ...Array(fullLabels.length - caloriesData.length).fill(0)]
// //       : caloriesData

// //   const maxValue = Math.max(...fullData)
  

// //   return (
// //     <Card className="bg-gradient-to-br from-white to-purple-50 border-purple-100 shadow-xl w-full h-full flex flex-col">
// //       <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg px-4 py-3 sm:px-6 sm:py-4">
// //         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
// //           <div className="flex items-center space-x-2">
// //             <span className="text-xl sm:text-2xl">📊</span>
// //             <CardTitle className="text-lg sm:text-xl">Calories Graph</CardTitle>
// //           </div>
// //           <div className="flex flex-wrap gap-1 sm:gap-2">
// //             {(["Weekly", "Monthly", "Yearly"] as const).map((period) => (
// //               <Button
// //                 key={period}
// //                 aria-label={`Select ${period} data`}
// //                 variant={selectedPeriod === period ? "secondary" : "ghost"}
// //                 size="sm"
// //                 onClick={() => dispatch(setPeriod(period))}
// //                 className={`text-xs sm:text-sm ${
// //                   selectedPeriod === period
// //                     ? "bg-white text-purple-600 hover:bg-gray-100 font-semibold"
// //                     : "text-white/80 hover:text-white hover:bg-white/20"
// //                 }`}
// //               >
// //                 {period}
// //               </Button>
// //             ))}
// //           </div>
// //         </div>
// //       </CardHeader>

// //       <CardContent className="p-4 sm:p-6 flex-1">
// //         {/* <div className="relative h-full w-full overflow-x-auto"> */}
// //         <div className="relative h-full w-full overflow-x-auto custom-scrollbar">

// //           {/* Y-axis labels */}
// //           <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs font-medium text-gray-500 z-10">
// //             {[80, 60, 40, 20, 0].map((val) => (
// //               <span key={val}>{val}</span>
// //             ))}
// //           </div>

// //           {/* Chart area */}
// //           <div className="ml-8 h-full relative pr-4">
// //             <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
// //               {/* Grid lines */}
// //               {[0, 1, 2, 3, 4].map((i) => (
// //                 <line key={i} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#e5e7eb" strokeWidth="1" />
// //               ))}

// //               <defs>
// //                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
// //                   <stop offset="0%" stopColor="#8b5cf6" />
// //                   <stop offset="50%" stopColor="#3b82f6" />
// //                   <stop offset="100%" stopColor="#06b6d4" />
// //                 </linearGradient>
// //                 <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
// //                   <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
// //                   <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
// //                 </linearGradient>
// //               </defs>

// //               {/* Area under curve */}
// //               <path
// //                 fill="url(#areaGradient)"
// //                 d={`M 0,200 ${fullData
// //                   .map((value, index) => {
// //                     const x = (index * 400) / (fullData.length - 1)
// //                     const y = 160 - (value / maxValue) * 160
// //                     return `L ${x},${y}`
// //                   })
// //                   .join(" ")} L 400,200 Z`}
// //               />

// //               {/* Data line */}
// //               <polyline
// //                 fill="none"
// //                 stroke="url(#lineGradient)"
// //                 strokeWidth="3"
// //                 points={fullData
// //                   .map((value, index) => {
// //                     const x = (index * 400) / (fullData.length - 1)
// //                     const y = 160 - (value / maxValue) * 160
// //                     return `${x},${y}`
// //                   })
// //                   .join(" ")}
// //               />

// //               {/* Data points */}
// //               {fullData.map((value, index) => {
// //                 const x = (index * 400) / (fullData.length - 1)
// //                 const y = 160 - (value / maxValue) * 160
// //                 return (
// //                   <circle
// //                     key={index}
// //                     cx={x}
// //                     cy={y}
// //                     r="4"
// //                     fill="#8b5cf6"
// //                     stroke="white"
// //                     strokeWidth="2"
// //                     className="drop-shadow-sm"
// //                   />
// //                 )
// //               })}
// //             </svg>
// //           </div>

// //           {/* X-axis labels */}
// //           <div className="ml-8 mt-3 text-xs sm:text-sm text-gray-600 flex justify-between pr-4">
// //             {fullLabels.map((label, i) => (
// //               <span key={i} className="w-full text-center truncate">
// //                 {label}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   )
// // }
// 

// import { useSelector, useDispatch } from "react-redux"
// import type { RootState } from "../store/store"
// import { setPeriod } from "../store/slices/dashboardSlice"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

// // Meal plan data interface
// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface CaloriesGraphProps {
//   mealPlanData?: MealEvent[]
// }

// export default function CaloriesGraph({ mealPlanData = [] }: CaloriesGraphProps) {
//   const dispatch = useDispatch()
//   const { selectedPeriod } = useSelector((state: RootState) => state.dashboard)

//   // Generate meal plan calories data based on selected period
//   const generateMealPlanData = () => {
//     const today = new Date()
//     const dates: Date[] = []
//     const labels: string[] = []

//     if (selectedPeriod === "Weekly") {
//       // Get last 7 days
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date(today)
//         date.setDate(today.getDate() - i)
//         dates.push(date)
//         labels.push(date.toLocaleDateString("en-US", { weekday: "short" }))
//       }
//     } else if (selectedPeriod === "Monthly") {
//       // Get last 4 weeks
//       for (let i = 3; i >= 0; i--) {
//         const date = new Date(today)
//         date.setDate(today.getDate() - i * 7)
//         dates.push(date)
//         labels.push(`Week ${4 - i}`)
//       }
//     } else {
//       // Yearly - get last 12 months
//       for (let i = 11; i >= 0; i--) {
//         const date = new Date(today)
//         date.setMonth(today.getMonth() - i)
//         dates.push(date)
//         labels.push(date.toLocaleDateString("en-US", { month: "short" }))
//       }
//     }

//     // Calculate calories for each period
//     const caloriesData = dates.map((date) => {
//       const dateString = date.toISOString().split("T")[0]

//       if (selectedPeriod === "Weekly") {
//         // Daily calories
//         return mealPlanData
//           .filter((meal) => meal.date === dateString)
//           .reduce((sum, meal) => sum + meal.totalCalories, 0)
//       } else if (selectedPeriod === "Monthly") {
//         // Weekly average calories
//         const weekStart = new Date(date)
//         const weekEnd = new Date(date)
//         weekEnd.setDate(weekStart.getDate() + 6)

//         const weekMeals = mealPlanData.filter((meal) => {
//           const mealDate = new Date(meal.date)
//           return mealDate >= weekStart && mealDate <= weekEnd
//         })

//         const totalCalories = weekMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
//         const daysWithMeals = new Set(weekMeals.map((meal) => meal.date)).size
//         return daysWithMeals > 0 ? Math.round(totalCalories / daysWithMeals) : 0
//       } else {
//         // Monthly average calories
//         const monthStart = new Date(date.getFullYear(), date.getMonth(), 1)
//         const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0)

//         const monthMeals = mealPlanData.filter((meal) => {
//           const mealDate = new Date(meal.date)
//           return mealDate >= monthStart && mealDate <= monthEnd
//         })

//         const totalCalories = monthMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
//         const daysWithMeals = new Set(monthMeals.map((meal) => meal.date)).size
//         return daysWithMeals > 0 ? Math.round(totalCalories / daysWithMeals) : 0
//       }
//     })

//     return { labels, data: caloriesData }
//   }

//   const { labels: fullLabels, data: fullData } = generateMealPlanData()
//   const maxValue = Math.max(...fullData, 2500) // Minimum scale of 2500 calories

//   // Calculate key statistics
//   const avgCalories = fullData.length > 0 ? Math.round(fullData.reduce((a, b) => a + b, 0) / fullData.length) : 0
//   const hasData = fullData.some((val) => val > 0)

//   return (
//     <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col overflow-hidden">
//       {/* Simplified Header */}
//       <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//               <span className="text-xl">🔥</span>
//             </div>
//             <div>
//               <CardTitle className="text-xl font-bold">Calorie Trends</CardTitle>
//               {hasData && (
//                 <p className="text-emerald-100 text-sm font-medium">
//                   {avgCalories} avg calories • {selectedPeriod.toLowerCase()} view
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Period Selector */}
//           <div className="flex bg-white/10 rounded-lg p-1">
//             {(["Weekly", "Monthly", "Yearly"] as const).map((period) => (
//               <button
//                 key={period}
//                 onClick={() => dispatch(setPeriod(period))}
//                 className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
//                   selectedPeriod === period
//                     ? "bg-white text-emerald-600 shadow-sm"
//                     : "text-white/80 hover:text-white hover:bg-white/10"
//                 }`}
//               >
//                 {period.charAt(0)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="flex-1 p-0 relative">
//         {hasData ? (
//           <div className="h-full p-6">
//             {/* Chart Container */}
//             <div className="relative h-full">
//               <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
//                 {/* Clean Grid */}
//                 <defs>
//                   <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
//                     <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
//                   </linearGradient>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                     <feMerge>
//                       <feMergeNode in="coloredBlur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 {/* Subtle Grid Lines */}
//                 {[0.25, 0.5, 0.75].map((ratio) => (
//                   <line
//                     key={ratio}
//                     x1="0"
//                     y1={200 * ratio}
//                     x2="400"
//                     y2={200 * ratio}
//                     stroke="#f1f5f9"
//                     strokeWidth="1"
//                   />
//                 ))}

//                 {/* Goal Line */}
//                 <line
//                   x1="0"
//                   y1={200 - (2000 / maxValue) * 200}
//                   x2="400"
//                   y2={200 - (2000 / maxValue) * 200}
//                   stroke="#f59e0b"
//                   strokeWidth="2"
//                   strokeDasharray="8,4"
//                   opacity="0.6"
//                 />

//                 {/* Area Fill */}
//                 <path
//                   fill="url(#chartGradient)"
//                   d={`M 0,200 ${fullData
//                     .map((value, index) => {
//                       const x = fullData.length > 1 ? (index * 400) / (fullData.length - 1) : 200
//                       const y = 200 - (value / maxValue) * 200
//                       return `L ${x},${y}`
//                     })
//                     .join(" ")} L ${fullData.length > 1 ? 400 : 200},200 Z`}
//                 />

//                 {/* Main Line */}
//                 <polyline
//                   fill="none"
//                   stroke="#10b981"
//                   strokeWidth="3"
//                   filter="url(#glow)"
//                   points={fullData
//                     .map((value, index) => {
//                       const x = fullData.length > 1 ? (index * 400) / (fullData.length - 1) : 200
//                       const y = 200 - (value / maxValue) * 200
//                       return `${x},${y}`
//                     })
//                     .join(" ")}
//                 />

//                 {/* Data Points */}
//                 {fullData.map((value, index) => {
//                   const x = fullData.length > 1 ? (index * 400) / (fullData.length - 1) : 200
//                   const y = 200 - (value / maxValue) * 200
//                   return (
//                     <g key={index}>
//                       <circle
//                         cx={x}
//                         cy={y}
//                         r="6"
//                         fill="#10b981"
//                         stroke="white"
//                         strokeWidth="3"
//                         className="drop-shadow-lg"
//                       />
//                       <circle
//                         cx={x}
//                         cy={y}
//                         r="12"
//                         fill="transparent"
//                         className="hover:fill-emerald-50 cursor-pointer transition-all duration-200"
//                       >
//                         <title>{`${fullLabels[index]}: ${value} calories`}</title>
//                       </circle>
//                     </g>
//                   )
//                 })}

//                 {/* Goal Label */}
//                 <text
//                   x="20"
//                   y={200 - (2000 / maxValue) * 200 - 8}
//                   fontSize="12"
//                   fill="#f59e0b"
//                   className="font-semibold"
//                 >
//                   Goal: 2000
//                 </text>

//                 {/* Y-axis Values */}
//                 <text x="10" y="15" fontSize="12" fill="#64748b" className="font-medium">
//                   {Math.round(maxValue)}
//                 </text>
//                 <text x="10" y="105" fontSize="12" fill="#64748b" className="font-medium">
//                   {Math.round(maxValue / 2)}
//                 </text>
//                 <text x="10" y="195" fontSize="12" fill="#64748b" className="font-medium">
//                   0
//                 </text>
//               </svg>

//               {/* X-axis Labels */}
//               <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-2">
//                 {fullLabels.map((label, i) => (
//                   <span key={i} className="text-sm font-medium text-slate-600">
//                     {label}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom Stats */}
//             <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-slate-100">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-emerald-600">{Math.max(...fullData)}</div>
//                 <div className="text-xs text-slate-500 font-medium">Peak</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-slate-700">{avgCalories}</div>
//                 <div className="text-xs text-slate-500 font-medium">Average</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-orange-500">{Math.min(...fullData.filter((v) => v > 0))}</div>
//                 <div className="text-xs text-slate-500 font-medium">Lowest</div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="flex items-center justify-center h-full p-8">
//             <div className="text-center max-w-sm">
//               <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📊</span>
//               </div>
//               <h3 className="text-lg font-semibold text-slate-800 mb-2">No data to display</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 Start tracking your meals to see beautiful calorie trends and insights.
//               </p>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }


// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal } from "lucide-react"

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

// interface CaloriesGraphProps {
//   mealEvents?: MealEvent[]
// }

// export default function CaloriesGraph({ mealEvents = [] }: CaloriesGraphProps) {
//   // Get today's meals
//   const today = new Date().toISOString().split("T")[0]
//   const todayMeals = mealEvents.filter((meal) => meal.date === today)

//   // Calculate totals
//   const totalCalories = todayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
//   const totalProtein = todayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0)
//   const totalCarbs = todayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0)
//   const totalFat = todayMeals.reduce((sum, meal) => sum + meal.totalFat, 0)

//   // Daily goals (you can make these configurable)
//   const calorieGoal = 2000
//   const proteinGoal = 150
//   const carbsGoal = 250
//   const fatGoal = 67

//   // Calculate percentages
//   const caloriePercentage = Math.min((totalCalories / calorieGoal) * 100, 100)
//   const proteinPercentage = Math.min((totalProtein / proteinGoal) * 100, 100)
//   const carbsPercentage = Math.min((totalCarbs / carbsGoal) * 100, 100)
//   const fatPercentage = Math.min((totalFat / fatGoal) * 100, 100)

//   return (
//     <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">📊</span>
//             <CardTitle className="text-lg sm:text-xl">Daily Progress</CardTitle>
//           </div>
//           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-4 sm:p-6">
//         <div className="space-y-6">
//           {/* Calories */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-medium text-gray-700">Calories</span>
//               <span className="text-sm text-gray-600">
//                 {totalCalories} / {calorieGoal}
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full transition-all duration-500"
//                 style={{ width: `${caloriePercentage}%` }}
//               ></div>
//             </div>
//             <div className="text-xs text-gray-500">{Math.round(caloriePercentage)}% of daily goal</div>
//           </div>

//           {/* Protein */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-medium text-gray-700">Protein</span>
//               <span className="text-sm text-gray-600">
//                 {totalProtein}g / {proteinGoal}g
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
//                 style={{ width: `${proteinPercentage}%` }}
//               ></div>
//             </div>
//             <div className="text-xs text-gray-500">{Math.round(proteinPercentage)}% of daily goal</div>
//           </div>

//           {/* Carbs */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-medium text-gray-700">Carbohydrates</span>
//               <span className="text-sm text-gray-600">
//                 {totalCarbs}g / {carbsGoal}g
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
//                 style={{ width: `${carbsPercentage}%` }}
//               ></div>
//             </div>
//             <div className="text-xs text-gray-500">{Math.round(carbsPercentage)}% of daily goal</div>
//           </div>

//           {/* Fat */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-medium text-gray-700">Fat</span>
//               <span className="text-sm text-gray-600">
//                 {totalFat}g / {fatGoal}g
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div
//                 className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-500"
//                 style={{ width: `${fatPercentage}%` }}
//               ></div>
//             </div>
//             <div className="text-xs text-gray-500">{Math.round(fatPercentage)}% of daily goal</div>
//           </div>

//           {/* Summary */}
//           <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-100">
//             <div className="text-center">
//               <p className="text-sm text-gray-600 mb-1">Today's Progress</p>
//               <p className="text-2xl font-bold text-green-600">
//                 {Math.round((caloriePercentage + proteinPercentage + carbsPercentage + fatPercentage) / 4)}%
//               </p>
//               <p className="text-xs text-gray-500">Average completion</p>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
// 
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal, TrendingUp, Target } from "lucide-react"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler,
// } from "chart.js"
// import { Line, Bar, Doughnut } from "react-chartjs-2"

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler,
// )

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

// interface CaloriesGraphProps {
//   mealEvents?: MealEvent[]
// }

// export default function CaloriesGraph({ mealEvents = [] }: CaloriesGraphProps) {
//   // Get last 7 days of data
//   const getLast7Days = () => {
//     const days = []
//     for (let i = 6; i >= 0; i--) {
//       const date = new Date()
//       date.setDate(date.getDate() - i)
//       days.push(date.toISOString().split("T")[0])
//     }
//     return days
//   }

//   const last7Days = getLast7Days()
//   const today = new Date().toISOString().split("T")[0]

//   // Calculate daily totals for the last 7 days
//   const dailyData = last7Days.map((date) => {
//     const dayMeals = mealEvents.filter((meal) => meal.date === date)
//     return {
//       date,
//       calories: dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
//       protein: dayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
//       carbs: dayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
//       fat: dayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
//     }
//   })

//   // Get today's data
//   const todayMeals = mealEvents.filter((meal) => meal.date === today)
//   const todayTotals = {
//     calories: todayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
//     protein: todayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
//     carbs: todayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
//     fat: todayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
//   }

//   // Daily goals
//   const goals = {
//     calories: 2000,
//     protein: 150,
//     carbs: 250,
//     fat: 67,
//   }

//   // Chart configurations
//   const lineChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top" as const,
//         labels: {
//           usePointStyle: true,
//           padding: 20,
//           font: {
//             size: 12,
//             weight: "500",
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         titleColor: "white",
//         bodyColor: "white",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         borderWidth: 1,
//         cornerRadius: 8,
//         displayColors: true,
//         callbacks: {
//           label: (context: any) =>
//             `${context.dataset.label}: ${context.parsed.y}${context.dataset.label === "Calories" ? "" : "g"}`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 11,
//           },
//           color: "#6b7280",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0, 0, 0, 0.05)",
//         },
//         ticks: {
//           font: {
//             size: 11,
//           },
//           color: "#6b7280",
//         },
//       },
//     },
//   }

//   const lineChartData = {
//     labels: last7Days.map((date) => {
//       const d = new Date(date)
//       return d.toLocaleDateString("en-US", { weekday: "short" })
//     }),
//     datasets: [
//       {
//         label: "Calories",
//         data: dailyData.map((d) => d.calories),
//         borderColor: "rgb(59, 130, 246)",
//         backgroundColor: "rgba(59, 130, 246, 0.1)",
//         fill: true,
//         tension: 0.4,
//         pointBackgroundColor: "rgb(59, 130, 246)",
//         pointBorderColor: "white",
//         pointBorderWidth: 2,
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   }

//   // Macros bar chart
//   const macrosBarData = {
//     labels: ["Protein", "Carbs", "Fat"],
//     datasets: [
//       {
//         label: "Current",
//         data: [todayTotals.protein, todayTotals.carbs, todayTotals.fat],
//         backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(251, 191, 36, 0.8)", "rgba(168, 85, 247, 0.8)"],
//         borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
//         borderWidth: 2,
//         borderRadius: 6,
//         borderSkipped: false,
//       },
//       {
//         label: "Goal",
//         data: [goals.protein, goals.carbs, goals.fat],
//         backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(251, 191, 36, 0.2)", "rgba(168, 85, 247, 0.2)"],
//         borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
//         borderWidth: 1,
//         borderRadius: 6,
//         borderSkipped: false,
//       },
//     ],
//   }

//   const barChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top" as const,
//         labels: {
//           usePointStyle: true,
//           padding: 20,
//           font: {
//             size: 12,
//             weight: "500",
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         titleColor: "white",
//         bodyColor: "white",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         borderWidth: 1,
//         cornerRadius: 8,
//         callbacks: {
//           label: (context: any) => `${context.dataset.label}: ${context.parsed.y}g`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 11,
//             weight: "500",
//           },
//           color: "#374151",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0, 0, 0, 0.05)",
//         },
//         ticks: {
//           font: {
//             size: 11,
//           },
//           color: "#6b7280",
//           callback: (value: any) => value + "g",
//         },
//       },
//     },
//   }

//   // Calorie progress doughnut chart
//   const calorieProgress = Math.min((todayTotals.calories / goals.calories) * 100, 100)
//   const doughnutData = {
//     labels: ["Consumed", "Remaining"],
//     datasets: [
//       {
//         data: [todayTotals.calories, Math.max(0, goals.calories - todayTotals.calories)],
//         backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(229, 231, 235, 0.3)"],
//         borderColor: ["rgb(59, 130, 246)", "rgba(229, 231, 235, 0.5)"],
//         borderWidth: 2,
//         cutout: "70%",
//       },
//     ],
//   }

//   const doughnutOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         titleColor: "white",
//         bodyColor: "white",
//         borderColor: "rgba(255, 255, 255, 0.1)",
//         borderWidth: 1,
//         cornerRadius: 8,
//         callbacks: {
//           label: (context: any) => `${context.label}: ${context.parsed} calories`,
//         },
//       },
//     },
//   }

//   return (
//     <div className="space-y-6">
//       {/* Main Calorie Tracking Card */}
//       <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-xl">
//         <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <TrendingUp className="h-5 w-5" />
//               <CardTitle className="text-lg sm:text-xl">Calorie Trends</CardTitle>
//             </div>
//             <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </div>
//         </CardHeader>

//         <CardContent className="p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* 7-Day Calorie Trend */}
//             <div className="lg:col-span-2">
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">7-Day Calorie Trend</h3>
//                 <p className="text-sm text-gray-600">Track your daily calorie intake over the past week</p>
//               </div>
//               <div className="h-64">
//                 <Line data={lineChartData} options={lineChartOptions} />
//               </div>
//             </div>

//             {/* Today's Calorie Progress */}
//             <div className="flex flex-col">
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Progress</h3>
//                 <p className="text-sm text-gray-600">Daily calorie goal tracking</p>
//               </div>
//               <div className="flex-1 flex flex-col items-center justify-center">
//                 <div className="relative h-48 w-48">
//                   <Doughnut data={doughnutData} options={doughnutOptions} />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center">
//                     <span className="text-2xl font-bold text-blue-600">{todayTotals.calories}</span>
//                     <span className="text-sm text-gray-500">/ {goals.calories}</span>
//                     <span className="text-xs text-gray-400 mt-1">{Math.round(calorieProgress)}% complete</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Macronutrients Card */}
//       <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
//         <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Target className="h-5 w-5" />
//               <CardTitle className="text-lg sm:text-xl">Macronutrients</CardTitle>
//             </div>
//             <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </div>
//         </CardHeader>

//         <CardContent className="p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Macros Bar Chart */}
//             <div>
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Macros</h3>
//                 <p className="text-sm text-gray-600">Current vs goal breakdown</p>
//               </div>
//               <div className="h-64">
//                 <Bar data={macrosBarData} options={barChartOptions} />
//               </div>
//             </div>

//             {/* Macro Stats */}
//             <div className="space-y-4">
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">Detailed Breakdown</h3>
//                 <p className="text-sm text-gray-600">Progress towards daily goals</p>
//               </div>

//               {/* Protein */}
//               <div className="p-4 bg-green-50 rounded-lg border border-green-100">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="font-medium text-green-800">Protein</span>
//                   <span className="text-sm text-green-600">
//                     {todayTotals.protein}g / {goals.protein}g
//                   </span>
//                 </div>
//                 <div className="w-full bg-green-200 rounded-full h-2">
//                   <div
//                     className="bg-green-500 h-2 rounded-full transition-all duration-500"
//                     style={{ width: `${Math.min((todayTotals.protein / goals.protein) * 100, 100)}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-green-600 mt-1">
//                   {Math.round((todayTotals.protein / goals.protein) * 100)}% complete
//                 </div>
//               </div>

//               {/* Carbs */}
//               <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="font-medium text-yellow-800">Carbohydrates</span>
//                   <span className="text-sm text-yellow-600">
//                     {todayTotals.carbs}g / {goals.carbs}g
//                   </span>
//                 </div>
//                 <div className="w-full bg-yellow-200 rounded-full h-2">
//                   <div
//                     className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
//                     style={{ width: `${Math.min((todayTotals.carbs / goals.carbs) * 100, 100)}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-yellow-600 mt-1">
//                   {Math.round((todayTotals.carbs / goals.carbs) * 100)}% complete
//                 </div>
//               </div>

//               {/* Fat */}
//               <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="font-medium text-purple-800">Fat</span>
//                   <span className="text-sm text-purple-600">
//                     {todayTotals.fat}g / {goals.fat}g
//                   </span>
//                 </div>
//                 <div className="w-full bg-purple-200 rounded-full h-2">
//                   <div
//                     className="bg-purple-500 h-2 rounded-full transition-all duration-500"
//                     style={{ width: `${Math.min((todayTotals.fat / goals.fat) * 100, 100)}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-purple-600 mt-1">
//                   {Math.round((todayTotals.fat / goals.fat) * 100)}% complete
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, TrendingUp, Target } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  type ChartOptions,
  // ChartOptions,
} from "chart.js"
import { Line, Bar, Doughnut } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
)

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

interface CaloriesGraphProps {
  mealEvents?: MealEvent[]
}

export default function CaloriesGraph({ mealEvents = [] }: CaloriesGraphProps) {
  // Get last 7 days of data
  const getLast7Days = () => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      days.push(date.toISOString().split("T")[0])
    }
    return days
  }

  const last7Days = getLast7Days()
  const today = new Date().toISOString().split("T")[0]

  // Calculate daily totals for the last 7 days
  const dailyData = last7Days.map((date) => {
    const dayMeals = mealEvents.filter((meal) => meal.date === date)
    return {
      date,
      calories: dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
      protein: dayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
      carbs: dayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
      fat: dayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
    }
  })

  // Get today's data
  const todayMeals = mealEvents.filter((meal) => meal.date === today)
  const todayTotals = {
    calories: todayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
    protein: todayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
    carbs: todayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
    fat: todayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
  }

  // Daily goals
  const goals = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 67,
  }

  // Chart configurations with proper typing
  const lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.y}${context.dataset.label === "Calories" ? "" : "g"}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
        },
      },
    },
  }

  const lineChartData = {
    labels: last7Days.map((date) => {
      const d = new Date(date)
      return d.toLocaleDateString("en-US", { weekday: "short" })
    }),
    datasets: [
      {
        label: "Calories",
        data: dailyData.map((d) => d.calories),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  }

  // Macros bar chart
  const macrosBarData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        label: "Current",
        data: [todayTotals.protein, todayTotals.carbs, todayTotals.fat],
        backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(251, 191, 36, 0.8)", "rgba(168, 85, 247, 0.8)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Goal",
        data: [goals.protein, goals.carbs, goals.fat],
        backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(251, 191, 36, 0.2)", "rgba(168, 85, 247, 0.2)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  }

  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}g`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: "bold",
          },
          color: "#374151",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
          callback: (value) => value + "g",
        },
      },
    },
  }

  // Calorie progress doughnut chart
  const calorieProgress = Math.min((todayTotals.calories / goals.calories) * 100, 100)
  const doughnutData = {
    labels: ["Consumed", "Remaining"],
    datasets: [
      {
        data: [todayTotals.calories, Math.max(0, goals.calories - todayTotals.calories)],
        backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(229, 231, 235, 0.3)"],
        borderColor: ["rgb(59, 130, 246)", "rgba(229, 231, 235, 0.5)"],
        borderWidth: 2,
        cutout: "70%",
      },
    ],
  }

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed} calories`,
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      {/* Main Calorie Tracking Card */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <CardTitle className="text-lg sm:text-xl">Calorie Trends</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 7-Day Calorie Trend */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">7-Day Calorie Trend</h3>
                <p className="text-sm text-gray-600">Track your daily calorie intake over the past week</p>
              </div>
              <div className="h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            {/* Today's Calorie Progress */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Progress</h3>
                <p className="text-sm text-gray-600">Daily calorie goal tracking</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative h-48 w-48">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{todayTotals.calories}</span>
                    <span className="text-sm text-gray-500">/ {goals.calories}</span>
                    <span className="text-xs text-gray-400 mt-1">{Math.round(calorieProgress)}% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Macronutrients Card */}
      <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <CardTitle className="text-lg sm:text-xl">Macronutrients</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Macros Bar Chart */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Macros</h3>
                <p className="text-sm text-gray-600">Current vs goal breakdown</p>
              </div>
              <div className="h-64">
                <Bar data={macrosBarData} options={barChartOptions} />
              </div>
            </div>

            {/* Macro Stats */}
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Detailed Breakdown</h3>
                <p className="text-sm text-gray-600">Progress towards daily goals</p>
              </div>

              {/* Protein */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-green-800">Protein</span>
                  <span className="text-sm text-green-600">
                    {todayTotals.protein}g / {goals.protein}g
                  </span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.protein / goals.protein) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-green-600 mt-1">
                  {Math.round((todayTotals.protein / goals.protein) * 100)}% complete
                </div>
              </div>

              {/* Carbs */}
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-yellow-800">Carbohydrates</span>
                  <span className="text-sm text-yellow-600">
                    {todayTotals.carbs}g / {goals.carbs}g
                  </span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.carbs / goals.carbs) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-yellow-600 mt-1">
                  {Math.round((todayTotals.carbs / goals.carbs) * 100)}% complete
                </div>
              </div>

              {/* Fat */}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-800">Fat</span>
                  <span className="text-sm text-purple-600">
                    {todayTotals.fat}g / {goals.fat}g
                  </span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.fat / goals.fat) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-purple-600 mt-1">
                  {Math.round((todayTotals.fat / goals.fat) * 100)}% complete
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

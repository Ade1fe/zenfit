// "use client"
// import type React from "react"
// import { useState, useEffect, type JSX } from "react"
// import {
//   CalendarDays,
//   ChefHat,
//   PlusCircle,
//   ChevronLeft,
//   Clock,
//   Edit,
//   Trash2,
//   Dumbbell,
//   Calendar,
//   Briefcase,
//   BellRing,
//   Home,
//   Search,
//   Apple,
//   Utensils,
//   Activity,
//   AlertCircle,
//   FlameIcon as Fire,
//   Zap,
//   Star,
//   ArrowLeft,
//   ArrowRight,
//   TrendingUp,
//   Target,
//   ChevronRight,
//   ChevronDown,
// } from "lucide-react"

// // UI Components (reverted to original custom components)
// const Button = ({
//   children,
//   onClick,
//   variant = "default",
//   size = "default",
//   className = "",
//   disabled = false,
//   ...props
// }: {
//   children: React.ReactNode
//   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
//   variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger"
//   size?: "sm" | "default" | "lg"
//   className?: string
//   disabled?: boolean
//   [key: string]: any
// }) => {
//   const baseClasses =
//     "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//   const variants = {
//     default: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
//     primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm",
//     secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm",
//     outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-emerald-500",
//     ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
//     danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
//   }
//   const sizes = {
//     sm: "px-3 py-1.5 text-sm rounded-md",
//     default: "px-4 py-2 text-sm rounded-lg",
//     lg: "px-6 py-3 text-base rounded-lg",
//   }
//   return (
//     <button
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
//       onClick={onClick}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// const Card = ({
//   children,
//   className = "",
//   padding = "default",
// }: {
//   children: React.ReactNode
//   className?: string
//   padding?: "none" | "sm" | "default" | "lg"
// }) => {
//   const paddingClasses = {
//     none: "",
//     sm: "p-4",
//     default: "p-6",
//     lg: "p-8",
//   }
//   return (
//     <div className={`bg-white rounded-xl border border-gray-200 ${paddingClasses[padding]} ${className}`}>
//       {children}
//     </div>
//   )
// }

// const Badge = ({
//   children,
//   variant = "default",
//   className = "",
// }: {
//   children: React.ReactNode
//   variant?: "default" | "success" | "warning" | "error" | "info"
//   className?: string
// }) => {
//   const variants = {
//     default: "bg-gray-100 text-gray-800",
//     success: "bg-green-100 text-green-800",
//     warning: "bg-yellow-100 text-yellow-800",
//     error: "bg-red-100 text-red-800",
//     info: "bg-emerald-100 text-emerald-800",
//   }
//   return (
//     <span
//       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
//     >
//       {children}
//     </span>
//   )
// }

// const Progress = ({
//   value,
//   className = "",
//   color = "emerald",
// }: {
//   value: number
//   className?: string
//   color?: "emerald" | "green" | "yellow" | "red" | "purple"
// }) => {
//   // Updated colors to match the gradients used in the circular icons
//   const colors = {
//     emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
//     green: "bg-gradient-to-r from-green-500 to-green-600",
//     yellow: "bg-gradient-to-r from-yellow-500 to-orange-500",
//     red: "bg-gradient-to-r from-red-500 to-orange-500", // Changed to match dashboard icon gradient
//     purple: "bg-gradient-to-r from-purple-500 to-pink-500", // Changed to match dashboard icon gradient
//   }
//   return (
//     <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
//       <div
//         className={`h-3 rounded-full transition-all duration-700 ${colors[color]} shadow-sm`}
//         style={{ width: `${Math.min(value, 100)}%` }}
//       />
//     </div>
//   )
// }

// // Interfaces
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

// type EventType = "workout" | "appointment" | "reminder"

// interface RegularEvent {
//   id: string
//   title: string
//   type: EventType
//   time: string
//   date: string
//   description?: string
//   duration?: string
//   color: string // Tailwind CSS class for background color
// }

// type CalendarEvent = MealEvent | RegularEvent

// interface DayData {
//   date: number
//   dateString: string
//   isCurrentMonth: boolean
//   isToday: boolean
//   events: CalendarEvent[]
//   totalCalories: number
// }

// type View = "calendar" | "meal-planner" | "food-search" | "add-event" | "dashboard"

// interface MealDBMeal {
//   idMeal: string
//   strMeal: string
//   strMealThumb: string
//   strCategory?: string
//   strArea?: string
//   strInstructions?: string
// }

// interface MealDBResponse {
//   meals: MealDBMeal[] | null
// }

// // Food Search Component
// const FoodSearch = ({
//   onSelectFood,
//   searchType,
// }: {
//   onSelectFood: (food: FoodItem) => void
//   searchType: "recipes" | "ingredients"
// }) => {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [foods, setFoods] = useState<FoodItem[]>([])
//   const [error, setError] = useState<string | null>(null)
//   const [initialLoading, setInitialLoading] = useState(true)

//   const estimateNutrition = (meal: MealDBMeal): Partial<FoodItem> => {
//     const baseCalories = 250
//     const categoryMultipliers: { [key: string]: number } = {
//       Beef: 1.4,
//       Chicken: 1.1,
//       Dessert: 1.6,
//       Lamb: 1.5,
//       Miscellaneous: 1.0,
//       Pasta: 1.3,
//       Pork: 1.4,
//       Seafood: 1.0,
//       Side: 0.8,
//       Starter: 0.6,
//       Vegan: 0.9,
//       Vegetarian: 0.9,
//       Breakfast: 1.2,
//       Goat: 1.3,
//       Unknown: 1.0,
//     }
//     const multiplier = categoryMultipliers[meal.strCategory || "Unknown"] || 1.0
//     const estimatedCalories = Math.round(baseCalories * multiplier)
//     return {
//       calories: estimatedCalories,
//       protein: Math.round((estimatedCalories * 0.15) / 4),
//       carbs: Math.round((estimatedCalories * 0.5) / 4),
//       fat: Math.round((estimatedCalories * 0.35) / 9),
//       readyInMinutes: Math.floor(Math.random() * 30) + 15,
//       servings: Math.floor(Math.random() * 3) + 1,
//     }
//   }

//   const fetchWithTimeout = async (url: string, timeout = 10000): Promise<Response> => {
//     const controller = new AbortController()
//     const timeoutId = setTimeout(() => controller.abort(), timeout)
//     try {
//       const response = await fetch(url, {
//         signal: controller.signal,
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       clearTimeout(timeoutId)
//       return response
//     } catch (error) {
//       clearTimeout(timeoutId)
//       throw error
//     }
//   }

//   const fetchPopularFoods = async () => {
//     setInitialLoading(true)
//     setError(null)
//     try {
//       const popularSearch = "chicken" // A common search term for initial load
//       const allFoods: FoodItem[] = []
//       try {
//         const response = await fetchWithTimeout(
//           `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(popularSearch)}`,
//         )
//         if (response.ok) {
//           const data: MealDBResponse = await response.json()
//           if (data.meals) {
//             const meals = data.meals.slice(0, 8).map((meal, index) => {
//               const nutrition = estimateNutrition(meal)
//               const uniqueId = `${meal.idMeal}-${index}-${Date.now()}`
//               return {
//                 id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
//                 title: meal.strMeal,
//                 image: meal.strMealThumb,
//                 category: meal.strCategory,
//                 area: meal.strArea,
//                 instructions: meal.strInstructions,
//                 ...nutrition,
//               }
//             })
//             allFoods.push(...meals)
//           }
//         }
//       } catch (err) {
//         console.warn(`Failed to fetch ${popularSearch}:`, err)
//       }

//       if (allFoods.length > 0) {
//         const uniqueFoods = allFoods.map((food, index) => ({
//           ...food,
//           id: food.id || Date.now() + index,
//         }))
//         setFoods(uniqueFoods.slice(0, 8))
//       } else {
//         // Fallback to hardcoded data if API fails or returns no results
//         setFoods([
//           {
//             id: Date.now() + 1,
//             title: "Grilled Chicken Breast",
//             image: "/placeholder.svg?height=120&width=120",
//             calories: 165,
//             protein: 31,
//             carbs: 0,
//             fat: 4,
//             readyInMinutes: 15,
//             category: "Chicken",
//             area: "American",
//           },
//           {
//             id: Date.now() + 2,
//             title: "Greek Salad",
//             image: "/placeholder.svg?height=120&width=120",
//             calories: 150,
//             protein: 8,
//             carbs: 12,
//             fat: 10,
//             readyInMinutes: 10,
//             category: "Vegetarian",
//             area: "Greek",
//           },
//           {
//             id: Date.now() + 3,
//             title: "Salmon Fillet",
//             image: "/placeholder.svg?height=120&width=120",
//             calories: 206,
//             protein: 22,
//             carbs: 0,
//             fat: 12,
//             readyInMinutes: 20,
//             category: "Seafood",
//             area: "International",
//           },
//           {
//             id: Date.now() + 4,
//             title: "Quinoa Bowl",
//             image: "/placeholder.svg?height=120&width=120",
//             calories: 180,
//             protein: 6,
//             carbs: 32,
//             fat: 3,
//             readyInMinutes: 25,
//             category: "Vegetarian",
//             area: "International",
//           },
//           {
//             id: Date.now() + 5,
//             title: "Turkey Sandwich",
//             image: "/placeholder.svg?height=120&width=120",
//             calories: 250,
//             protein: 20,
//             carbs: 25,
//             fat: 8,
//             readyInMinutes: 5,
//             category: "Lunch",
//             area: "American",
//           },
//         ])
//       }
//     } catch (err) {
//       console.error("Error fetching popular foods:", err)
//       setError("Unable to load recipes. Using offline data.")
//       setFoods([
//         {
//           id: Date.now() + 1,
//           title: "Grilled Chicken Breast",
//           image: "/placeholder.svg?height=120&width=120",
//           calories: 165,
//           protein: 31,
//           carbs: 0,
//           fat: 4,
//           readyInMinutes: 15,
//           category: "Chicken",
//           area: "American",
//         },
//         {
//           id: Date.now() + 2,
//           title: "Greek Salad",
//           image: "/placeholder.svg?height=120&width=120",
//           calories: 150,
//           protein: 8,
//           carbs: 12,
//           fat: 10,
//           readyInMinutes: 10,
//           category: "Vegetarian",
//           area: "Greek",
//         },
//         {
//           id: Date.now() + 3,
//           title: "Salmon Fillet",
//           image: "/placeholder.svg?height=120&width=120",
//           calories: 206,
//           protein: 22,
//           carbs: 0,
//           fat: 12,
//           readyInMinutes: 20,
//           category: "Seafood",
//           area: "International",
//         },
//       ])
//     } finally {
//       setInitialLoading(false)
//     }
//   }

//   const searchMeals = async (query: string) => {
//     if (!query.trim()) {
//       setFoods([]) // Clear results if search query is empty
//       return
//     }
//     setIsLoading(true)
//     setError(null)
//     try {
//       let url: string
//       if (searchType === "recipes") {
//         url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
//       } else {
//         url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`
//       }
//       const response = await fetchWithTimeout(url)
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
//       const data: MealDBResponse = await response.json()
//       if (data.meals) {
//         const transformedFoods: FoodItem[] = data.meals.slice(0, 12).map((meal, index) => {
//           const nutrition = estimateNutrition(meal)
//           const uniqueId = `${meal.idMeal}-search-${index}-${Date.now()}`
//           return {
//             id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
//             title: meal.strMeal,
//             image: meal.strMealThumb,
//             category: meal.strCategory,
//             area: meal.strArea,
//             instructions: meal.strInstructions,
//             ...nutrition,
//           }
//         })
//         setFoods(transformedFoods)
//       } else {
//         setFoods([])
//       }
//     } catch (err) {
//       console.error("Error searching meals:", err)
//       if (err instanceof Error && err.name === "AbortError") {
//         setError("Search timed out. Please try again.")
//       } else {
//         setError("Failed to search recipes. Please check your connection and try again.")
//       }
//       setFoods([])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     // Initial load of popular foods
//     fetchPopularFoods()
//   }, [])

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (searchQuery.trim()) {
//         searchMeals(searchQuery)
//       } else {
//         // If search query is empty, show popular foods again
//         fetchPopularFoods()
//       }
//     }, 500) // Debounce search input
//     return () => clearTimeout(timeoutId)
//   }, [searchQuery, searchType]) // Re-run when search query or type changes

//   return (
//     <div className="space-y-6">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder={`Search ${searchType}...`}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
//         />
//       </div>
//       <div>
//         {!searchQuery.trim() && (
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">
//             Popular {searchType === "recipes" ? "Recipes" : "Foods"}
//           </h3>
//         )}
//         {initialLoading ? (
//           <div className="text-center py-12">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading popular recipes...</p>
//           </div>
//         ) : isLoading ? (
//           <div className="text-center py-12">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Searching recipes...</p>
//           </div>
//         ) : error ? (
//           <Card className="text-center py-8">
//             <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Error</h3>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <Button
//               onClick={() => (searchQuery.trim() ? searchMeals(searchQuery) : fetchPopularFoods())}
//               variant="primary"
//             >
//               Try Again
//             </Button>
//           </Card>
//         ) : foods.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
//             {foods.map((food) => (
//               <div
//                 key={`food-${food.id}-${food.title.replace(/\s+/g, "-")}`}
//                 className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
//               >
//                 <div className="relative">
//                   <img
//                     src={food.image || "/placeholder.svg?height=120&width=120"}
//                     alt={food.title}
//                     className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
//                   />
//                   <div className="absolute top-2 right-2">
//                     <Badge variant="success" className="bg-white/90 text-green-700 font-bold">
//                       {food.calories} cal
//                     </Badge>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{food.title}</h3>
//                   <div className="flex items-center gap-2 mb-3">
//                     {food.category && (
//                       <Badge variant="info" className="text-xs">
//                         {food.category}
//                       </Badge>
//                     )}
//                     {food.readyInMinutes && (
//                       <span className="text-xs text-gray-500 flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         {food.readyInMinutes}m
//                       </span>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
//                     <div className="text-center">
//                       <div className="font-medium text-emerald-600">{food.protein}g</div>
//                       <div>Protein</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="font-medium text-green-600">{food.carbs}g</div>
//                       <div>Carbs</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="font-medium text-purple-600">{food.fat}g</div>
//                       <div>Fat</div>
//                     </div>
//                   </div>
//                   <Button onClick={() => onSelectFood(food)} variant="primary" size="sm" className="w-full">
//                     <PlusCircle className="w-3 h-3 mr-1" />
//                     Add to Meal
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : searchQuery.trim() ? (
//           <Card className="text-center py-8">
//             <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
//             <p className="text-gray-600">
//               Try searching for "{searchType === "recipes" ? "chicken, pasta, or curry" : "tomato, beef, or rice"}" or
//               clear your search to see popular {searchType === "recipes" ? "recipes" : "foods"}.
//             </p>
//           </Card>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// // Helper function to get a random date within the current year
// const getRandomDate = (year: number) => {
//   const month = Math.floor(Math.random() * 12) // 0-11
//   const day = Math.floor(Math.random() * 28) + 1 // 1-28 to avoid issues with month lengths
//   const date = new Date(year, month, day)
//   const yyyy = date.getFullYear()
//   const mm = (date.getMonth() + 1).toString().padStart(2, "0")
//   const dd = date.getDate().toString().padStart(2, "0")
//   return `${yyyy}-${mm}-${dd}`
// }

// // Main Calendar App Component
// const CalendarApp = ({
//   mealEvents: initialMealEvents = [],
//   onMealEventsChange,
//   onNavigate,
// }: {
//   mealEvents?: MealEvent[]
//   onMealEventsChange?: (events: MealEvent[]) => void
//   onNavigate?: (view: string) => void
// }) => {
//   const [currentView, setCurrentView] = useState<View>("dashboard")
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
//   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
//   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
//   const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)
//   const [editingRegularEvent, setEditingRegularEvent] = useState<RegularEvent | null>(null)
//   const [newEvent, setNewEvent] = useState({
//     id: "", // Added for editing
//     title: "",
//     type: "workout" as EventType,
//     time: "",
//     date: selectedDate,
//     description: "",
//     duration: "",
//   })

//   // State for meal and regular events, with localStorage persistence
//   const [localMealEvents, setLocalMealEvents] = useState<MealEvent[]>(() => {
//     if (typeof window !== "undefined") {
//       const savedMeals = localStorage.getItem("mealEvents")
//       // Prioritize initialMealEvents if provided and not empty, otherwise use savedMeals
//       if (initialMealEvents && initialMealEvents.length > 0) {
//         return initialMealEvents
//       }
//       return savedMeals ? JSON.parse(savedMeals) : []
//     }
//     return initialMealEvents || [] // Fallback for SSR or if initialMealEvents is undefined
//   })

//   const [regularEvents, setRegularEvents] = useState<RegularEvent[]>(() => {
//     const currentYear = new Date().getFullYear()
//     const defaultEvents = [
//       {
//         id: "workout-1",
//         title: "Morning Run",
//         type: "workout",
//         time: "07:00",
//         date: getRandomDate(currentYear),
//         description: "30 min outdoor run in the park",
//         duration: "30m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-2",
//         title: "Strength Training",
//         type: "workout",
//         time: "18:00",
//         date: getRandomDate(currentYear),
//         description: "Full body workout at gym",
//         duration: "45m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-3",
//         title: "Yoga Session",
//         type: "workout",
//         time: "09:00",
//         date: getRandomDate(currentYear),
//         description: "Vinyasa flow class",
//         duration: "1h",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-4",
//         title: "Cycling",
//         type: "workout",
//         time: "16:00",
//         date: getRandomDate(currentYear),
//         description: "Outdoor cycling trail",
//         duration: "1h 30m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-1",
//         title: "Dentist Check-up",
//         type: "appointment",
//         time: "10:30",
//         date: getRandomDate(currentYear),
//         description: "Annual dental cleaning",
//         duration: "1h",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-1",
//         title: "Pay Bills",
//         type: "reminder",
//         time: "17:00",
//         date: getRandomDate(currentYear),
//         description: "Electricity and internet bills due",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-5",
//         title: "Swimming Laps",
//         type: "workout",
//         time: "06:30",
//         date: getRandomDate(currentYear),
//         description: "30 mins laps at the community pool",
//         duration: "30m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-2",
//         title: "Team Meeting",
//         type: "appointment",
//         time: "14:00",
//         date: getRandomDate(currentYear),
//         description: "Weekly project sync",
//         duration: "1h",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-2",
//         title: "Call Mom",
//         type: "reminder",
//         time: "20:00",
//         date: getRandomDate(currentYear),
//         description: "Quick catch-up call",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-6",
//         title: "HIIT Session",
//         type: "workout",
//         time: "07:30",
//         date: getRandomDate(currentYear),
//         description: "High-intensity interval training",
//         duration: "25m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-7",
//         title: "Pilates Class",
//         type: "workout",
//         time: "11:00",
//         date: getRandomDate(currentYear),
//         description: "Core strength and flexibility",
//         duration: "50m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-3",
//         title: "Doctor's Visit",
//         type: "appointment",
//         time: "09:00",
//         date: getRandomDate(currentYear),
//         description: "Annual physical check-up",
//         duration: "45m",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-3",
//         title: "Grocery Shopping",
//         type: "reminder",
//         time: "16:00",
//         date: getRandomDate(currentYear),
//         description: "Buy fresh produce and essentials",
//         duration: "1h",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-8",
//         title: "Boxing Training",
//         type: "workout",
//         time: "19:00",
//         date: getRandomDate(currentYear),
//         description: "Cardio and strength with boxing drills",
//         duration: "1h",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-9",
//         title: "20 Sit-ups",
//         type: "workout",
//         time: "08:00",
//         date: getRandomDate(currentYear),
//         description: "Quick core workout",
//         duration: "5m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-4",
//         title: "Haircut",
//         type: "appointment",
//         time: "13:00",
//         date: getRandomDate(currentYear),
//         description: "Appointment with stylist",
//         duration: "1h",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-4",
//         title: "Book Flight",
//         type: "reminder",
//         time: "10:00",
//         date: getRandomDate(currentYear),
//         description: "Confirm travel plans for vacation",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-10",
//         title: "Long Walk",
//         type: "workout",
//         time: "17:00",
//         date: getRandomDate(currentYear),
//         description: "Relaxing walk in the neighborhood",
//         duration: "40m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-11",
//         title: "Stretching Routine",
//         type: "workout",
//         time: "21:00",
//         date: getRandomDate(currentYear),
//         description: "Evening stretch for flexibility",
//         duration: "15m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-5",
//         title: "Client Call",
//         type: "appointment",
//         time: "11:00",
//         date: getRandomDate(currentYear),
//         description: "Discussion on Q3 strategy",
//         duration: "1h 30m",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-5",
//         title: "Water Plants",
//         type: "reminder",
//         time: "08:00",
//         date: getRandomDate(currentYear),
//         description: "Don't forget the indoor plants!",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-12",
//         title: "Dance Class",
//         type: "workout",
//         time: "19:30",
//         date: getRandomDate(currentYear),
//         description: "Beginner's hip-hop class",
//         duration: "1h",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-13",
//         title: "Push-ups Challenge",
//         type: "workout",
//         time: "07:00",
//         date: getRandomDate(currentYear),
//         description: "Daily 50 push-ups",
//         duration: "10m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-6",
//         title: "Car Service",
//         type: "appointment",
//         time: "15:00",
//         date: getRandomDate(currentYear),
//         description: "Oil change and tire rotation",
//         duration: "2h",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-6",
//         title: "Birthday Gift",
//         type: "reminder",
//         time: "12:00",
//         date: getRandomDate(currentYear),
//         description: "Buy gift for friend's birthday",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-14",
//         title: "Hiking Trail",
//         type: "workout",
//         time: "09:00",
//         date: getRandomDate(currentYear),
//         description: "Explore new mountain trail",
//         duration: "3h",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-15",
//         title: "Core Workout",
//         type: "workout",
//         time: "06:00",
//         date: getRandomDate(currentYear),
//         description: "Intense core session",
//         duration: "20m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-7",
//         title: "Parent-Teacher Conference",
//         type: "appointment",
//         time: "16:30",
//         date: getRandomDate(currentYear),
//         description: "Discuss child's progress",
//         duration: "30m",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-7",
//         title: "Renew Subscription",
//         type: "reminder",
//         time: "09:00",
//         date: getRandomDate(currentYear),
//         description: "Software subscription renewal",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-16",
//         title: "Circuit Training",
//         type: "workout",
//         time: "18:30",
//         date: getRandomDate(currentYear),
//         description: "Full body circuit at home",
//         duration: "40m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-17",
//         title: "Jump Rope Session",
//         type: "workout",
//         time: "07:00",
//         date: getRandomDate(currentYear),
//         description: "Cardio with jump rope",
//         duration: "20m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-8",
//         title: "Financial Advisor",
//         type: "appointment",
//         time: "10:00",
//         date: getRandomDate(currentYear),
//         description: "Review investment portfolio",
//         duration: "1h",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-8",
//         title: "Clean Apartment",
//         type: "reminder",
//         time: "14:00",
//         date: getRandomDate(currentYear),
//         description: "Deep clean living room and kitchen",
//         duration: "2h",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-18",
//         title: "Outdoor Sprint",
//         type: "workout",
//         time: "06:00",
//         date: getRandomDate(currentYear),
//         description: "Short, intense sprints at the track",
//         duration: "15m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "workout-19",
//         title: "Bodyweight Strength",
//         type: "workout",
//         time: "17:00",
//         date: getRandomDate(currentYear),
//         description: "Push-ups, squats, lunges",
//         duration: "30m",
//         color: "bg-emerald-600",
//       },
//       {
//         id: "appointment-9",
//         title: "Veterinarian",
//         type: "appointment",
//         time: "11:30",
//         date: getRandomDate(currentYear),
//         description: "Pet's annual check-up",
//         duration: "45m",
//         color: "bg-purple-600",
//       },
//       {
//         id: "reminder-9",
//         title: "Submit Report",
//         type: "reminder",
//         time: "17:00",
//         date: getRandomDate(currentYear),
//         description: "Monthly progress report due",
//         duration: "",
//         color: "bg-orange-600",
//       },
//       {
//         id: "workout-20",
//         title: "Zumba Class",
//         type: "workout",
//         time: "19:00",
//         date: getRandomDate(currentYear),
//         description: "Fun cardio dance workout",
//         duration: "1h",
//         color: "bg-emerald-600",
//       },
//     ]
//     if (typeof window !== "undefined") {
//       // FOR DEMO PURPOSES: Clear local storage to ensure pre-added events are always visible on first load.
//       // REMOVE THIS IN A PRODUCTION APPLICATION.
//       localStorage.removeItem("regularEvents")
//       const savedEvents = localStorage.getItem("regularEvents")
//       return savedEvents ? JSON.parse(savedEvents) : defaultEvents
//     }
//     return defaultEvents
//   })

//   // Effect to synchronize localMealEvents with initialMealEvents prop
//   // This runs only when initialMealEvents changes from the parent
//   useEffect(() => {
//     // Only update local state if initialMealEvents is provided and different
//     // This prevents an infinite loop if parent updates initialMealEvents based on onMealEventsChange
//     if (initialMealEvents !== undefined && JSON.stringify(initialMealEvents) !== JSON.stringify(localMealEvents)) {
//       setLocalMealEvents(initialMealEvents)
//     }
//   }, [initialMealEvents]) // Only depend on initialMealEvents

//   // Persist meal events to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("mealEvents", JSON.stringify(localMealEvents))
//     }
//     // Removed onMealEventsChange from here to prevent feedback loop
//   }, [localMealEvents])

//   // Persist regular events to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("regularEvents", JSON.stringify(regularEvents))
//     }
//   }, [regularEvents])

//   // Effect to populate newEvent state when editingRegularEvent changes
//   useEffect(() => {
//     if (editingRegularEvent) {
//       setNewEvent({
//         id: editingRegularEvent.id,
//         title: editingRegularEvent.title,
//         type: editingRegularEvent.type,
//         time: editingRegularEvent.time,
//         date: editingRegularEvent.date,
//         description: editingRegularEvent.description || "",
//         duration: editingRegularEvent.duration || "",
//       })
//       setSelectedDate(editingRegularEvent.date) // Ensure calendar view focuses on this date
//     } else {
//       // Reset newEvent when not editing
//       setNewEvent({
//         id: "",
//         title: "",
//         type: "workout",
//         time: "",
//         date: selectedDate, // Default to currently selected date
//         description: "",
//         duration: "",
//       })
//     }
//   }, [editingRegularEvent, selectedDate])

//   // Configuration
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ]
//   const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//   const mealTypeConfig = {
//     breakfast: {
//       icon: "🌅",
//       bgColor: "bg-white",
//       textColor: "text-black",
//       borderColor: "border-gray-200",
//       time: "08:00",
//       name: "Breakfast",
//       gradient: "white",
//     },
//     lunch: {
//       icon: "☀️",
//       bgColor: "bg-white",
//       textColor: "text-black",
//       borderColor: "border-gray-200",
//       time: "12:00",
//       name: "Lunch",
//       gradient: "white",
//     },
//     dinner: {
//       icon: "🌙",
//       bgColor: "bg-white",
//       textColor: "text-black",
//       borderColor: "border-gray-200",
//       time: "18:00",
//       name: "Dinner",
//       gradient: "white",
//     },
//     snack: {
//       icon: "🍎",
//       bgColor: "bg-white",
//       textColor: "text-black",
//       borderColor: "border-gray-200",
//       time: "15:00",
//       name: "Snack",
//       gradient: "white",
//     },
//   }

//   const eventTypeConfig: Record<EventType, { icon: JSX.Element; color: string; name: string }> = {
//     workout: {
//       icon: <Dumbbell className="w-4 h-4" />,
//       color: "bg-emerald-600",
//       name: "Workout",
//     },
//     appointment: {
//       icon: <Briefcase className="w-4 h-4" />,
//       color: "bg-purple-600",
//       name: "Appointment",
//     },
//     reminder: {
//       icon: <BellRing className="w-4 h-4" />,
//       color: "bg-orange-600",
//       name: "Reminder",
//     },
//   }

//   // Type guard function
//   const isRegularEvent = (event: CalendarEvent): event is RegularEvent => {
//     return event.type !== "meal"
//   }

//   // Combine meal events and regular events
//   const events: CalendarEvent[] = [...localMealEvents, ...regularEvents]

//   // Helper Functions
//   const generateCalendarDays = (): DayData[] => {
//     const year = currentDate.getFullYear()
//     const month = currentDate.getMonth()
//     const today = new Date()
//     const firstDay = new Date(year, month, 1)
//     const startDate = new Date(firstDay)
//     startDate.setDate(startDate.getDate() - firstDay.getDay()) // Adjust to start from Sunday

//     const days: DayData[] = []
//     const currentDayIterator = new Date(startDate)

//     for (let i = 0; i < 42; i++) {
//       // 6 weeks * 7 days = 42 cells
//       const isCurrentMonth = currentDayIterator.getMonth() === month
//       const isToday = currentDayIterator.toDateString() === today.toDateString()
//       const localYear = currentDayIterator.getFullYear()
//       const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
//       const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
//       const dateString = `${localYear}-${localMonth}-${localDay}`

//       // Sort events by time for consistent display
//       const dayEvents = events.filter((event) => event.date === dateString).sort((a, b) => a.time.localeCompare(b.time))

//       const totalCalories = dayEvents
//         .filter((event): event is MealEvent => event.type === "meal")
//         .reduce((sum, meal) => sum + meal.totalCalories, 0)

//       days.push({
//         date: currentDayIterator.getDate(),
//         dateString,
//         isCurrentMonth,
//         isToday,
//         events: dayEvents,
//         totalCalories,
//       })
//       currentDayIterator.setDate(currentDayIterator.getDate() + 1)
//     }
//     return days
//   }

//   const navigateMonth = (direction: "prev" | "next") => {
//     setCurrentDate((prev) => {
//       const newDate = new Date(prev)
//       newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
//       return newDate
//     })
//   }

//   const navigateDate = (direction: "prev" | "next") => {
//     const currentDateObj = new Date(selectedDate)
//     const newDate = new Date(currentDateObj)
//     newDate.setDate(currentDateObj.getDate() + (direction === "next" ? 1 : -1))
//     setSelectedDate(newDate.toISOString().split("T")[0])
//   }

//   const handleAddOrUpdateRegularEvent = () => {
//     if (newEvent.title && newEvent.date && newEvent.time) {
//       if (editingRegularEvent) {
//         // Update existing event
//         const updatedEvent: RegularEvent = {
//           ...newEvent,
//           id: editingRegularEvent.id, // Ensure ID remains the same
//           color: eventTypeConfig[newEvent.type].color,
//         }
//         setRegularEvents((prev) => prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)))
//         setEditingRegularEvent(null) // Clear editing state
//       } else {
//         // Add new event
//         const event: RegularEvent = {
//           id: `${newEvent.type}-${Date.now()}`,
//           title: newEvent.title,
//           type: newEvent.type,
//           time: newEvent.time,
//           date: newEvent.date,
//           description: newEvent.description,
//           duration: newEvent.duration,
//           color: eventTypeConfig[newEvent.type].color,
//         }
//         setRegularEvents((prev) => [...prev, event])
//       }
//       setNewEvent({ id: "", title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" }) // Reset form
//       setCurrentView("dashboard") // Go back to dashboard after adding/updating
//     }
//   }

//   const addFoodToMeal = (food: FoodItem) => {
//     let updatedMeals: MealEvent[]
//     if (editingMeal) {
//       const updatedFoods = [...editingMeal.foods, { ...food, id: Date.now() + Math.random() }]
//       const updatedMeal: MealEvent = {
//         ...editingMeal,
//         foods: updatedFoods,
//         totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//         totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//         totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//         totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//       }
//       updatedMeals = localMealEvents.map((meal) => (meal.id === editingMeal.id ? updatedMeal : meal))
//       setEditingMeal(updatedMeal) // Keep editing the same meal after adding food
//     } else {
//       const newMeal: MealEvent = {
//         id: `meal-${selectedMealType}-${Date.now()}`,
//         title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`,
//         type: "meal",
//         mealType: selectedMealType,
//         time: mealTypeConfig[selectedMealType].time,
//         date: selectedDate,
//         foods: [{ ...food, id: Date.now() + Math.random() }],
//         totalCalories: food.calories || 0,
//         totalProtein: food.protein || 0,
//         totalCarbs: food.carbs || 0,
//         totalFat: food.fat || 0,
//       }
//       updatedMeals = [...localMealEvents, newMeal]
//     }
//     setLocalMealEvents(updatedMeals) // Update internal state
//     if (onMealEventsChange) {
//       onMealEventsChange(updatedMeals) // Propagate change to parent
//     }
//     setCurrentView("dashboard") // Go back to dashboard after adding food
//   }

//   const removeFoodFromMeal = (mealId: string, foodId: number) => {
//     const updatedMeals = localMealEvents
//       .map((meal) => {
//         if (meal.id === mealId) {
//           const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
//           if (updatedFoods.length === 0) {
//             return null // Mark for removal
//           }
//           return {
//             ...meal,
//             foods: updatedFoods,
//             totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//             totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//             totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//             totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//           }
//         }
//         return meal
//       })
//       .filter(Boolean) as MealEvent[] // Filter out nulls (removed meals)
//     setLocalMealEvents(updatedMeals)
//     if (onMealEventsChange) {
//       onMealEventsChange(updatedMeals) // Propagate change to parent
//     }
//   }

//   const deleteEvent = (eventId: string) => {
//     let updatedMeals: MealEvent[] = localMealEvents
//     let updatedRegularEvents: RegularEvent[] = regularEvents
//     const isMealEvent = localMealEvents.some((meal) => meal.id === eventId)

//     if (isMealEvent) {
//       updatedMeals = localMealEvents.filter((meal) => meal.id !== eventId)
//       setLocalMealEvents(updatedMeals)
//       if (onMealEventsChange) {
//         onMealEventsChange(updatedMeals) // Only call for meal events
//       }
//     } else {
//       updatedRegularEvents = regularEvents.filter((event) => event.id !== eventId)
//       setRegularEvents(updatedRegularEvents)
//       // No onMealEventsChange for regular events, as it's specific to meals
//     }
//   }

//   const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
//     setSelectedDate(date)
//     setSelectedMealType(mealType)
//     setEditingMeal(null) // Ensure we're adding a new meal, not editing
//     setCurrentView("food-search")
//   }

//   const editMeal = (meal: MealEvent) => {
//     setEditingMeal(meal)
//     setSelectedDate(meal.date)
//     setSelectedMealType(meal.mealType)
//     setCurrentView("food-search")
//   }

//   const editRegularEvent = (event: RegularEvent) => {
//     setEditingRegularEvent(event)
//     setSelectedDate(event.date) // Set selected date to the event's date
//     setCurrentView("add-event")
//   }

//   // Derived State
//   const calendarDays = generateCalendarDays()
//   const selectedDateEvents = events.filter((event) => event.date === selectedDate)
//   const selectedDateMeals = selectedDateEvents.filter((event): event is MealEvent => event.type === "meal")
//   const selectedDateTotals = selectedDateMeals.reduce(
//     (totals, meal) => ({
//       calories: totals.calories + meal.totalCalories,
//       protein: totals.protein + meal.totalProtein,
//       carbs: totals.carbs + meal.totalCarbs,
//       fat: totals.fat + meal.totalFat,
//     }),
//     { calories: 0, protein: 0, carbs: 0, fat: 0 },
//   )

//   const dailyGoals = { calories: 2000, protein: 150, carbs: 250, fat: 65 } // Example daily goals
//   const progress = {
//     calories: Math.min((selectedDateTotals.calories / dailyGoals.calories) * 100, 100),
//     protein: Math.min((selectedDateTotals.protein / dailyGoals.protein) * 100, 100),
//     carbs: Math.min((selectedDateTotals.carbs / dailyGoals.carbs) * 100, 100),
//     fat: Math.min((selectedDateTotals.fat / dailyGoals.fat) * 100, 100),
//   }

//   // Get today's events for dashboard
//   const todayString = new Date().toISOString().split("T")[0]
//   const todayEvents = events.filter((event) => event.date === todayString)
//   const todayMeals = todayEvents.filter((event): event is MealEvent => event.type === "meal")
//   const todayTotals = todayMeals.reduce(
//     (totals, meal) => ({
//       calories: totals.calories + meal.totalCalories,
//       protein: totals.protein + meal.totalProtein,
//       carbs: totals.carbs + meal.totalCarbs,
//       fat: totals.fat + meal.totalFat,
//     }),
//     { calories: 0, protein: 0, carbs: 0, fat: 0 },
//   )
//   const todayProgress = {
//     calories: Math.min((todayTotals.calories / dailyGoals.calories) * 100, 100),
//     protein: Math.min((todayTotals.protein / dailyGoals.protein) * 100, 100),
//     carbs: Math.min((todayTotals.carbs / dailyGoals.carbs) * 100, 100),
//     fat: Math.min((todayTotals.fat / dailyGoals.fat) * 100, 100),
//   }

//   // Navigation buttons for switching between views
//   const NavigationButtons = () => (
//     <div className="flex flex-wrap gap-2 mb-6 py-4 bg-white sticky top-0 z-20 ">
//       {" "}
//       {/* Added shadow-sm */}
//       <Button
//         onClick={() => setCurrentView("dashboard")}
//         variant={currentView === "dashboard" ? "primary" : "outline"}
//         size="sm"
//       >
//         <Home className="w-4 h-4 mr-2" />
//         Dashboard
//       </Button>
//       <Button
//         onClick={() => setCurrentView("calendar")}
//         variant={currentView === "calendar" ? "primary" : "outline"}
//         size="sm"
//       >
//         <Calendar className="w-4 h-4 mr-2" />
//         Calendar
//       </Button>
//       <Button
//         onClick={() => setCurrentView("meal-planner")}
//         variant={currentView === "meal-planner" ? "primary" : "outline"}
//         size="sm"
//       >
//         <ChefHat className="w-4 h-4 mr-2" />
//         Meal Planner
//       </Button>
//       <Button
//         onClick={() => setCurrentView("food-search")}
//         variant={currentView === "food-search" ? "primary" : "outline"}
//         size="sm"
//       >
//         <Search className="w-4 h-4 mr-2" />
//         Food Search
//       </Button>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-white">
//       <NavigationButtons />
//       {/* Dashboard View */}
//       {currentView === "dashboard" && (
//         //  <main className="p-4 lg:p-6 max-w-7xl mx-auto"></main>
//         <main className=" bg-white">
//           {" "}
//           {/* Added max-w-7xl mx-auto for content centering */}
//           {/* Welcome Header */}
//           <div className="mb-8">
//             <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
//               Good {new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening"}! 👋
//             </h1>
//             <p className="text-gray-600 text-lg">
//               {new Date().toLocaleDateString("en-US", {
//                 weekday: "long",
//                 month: "long",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//             </p>
//           </div>
//           {/* Today's Overview */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             {/* Nutrition Progress */}
//             <Card className="lg:col-span-2">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                   <Target className="w-5 h-5 text-emerald-600" />
//                   Today's Nutrition
//                 </h2>
//                 <Badge variant={todayProgress.calories >= 80 ? "success" : "warning"}>
//                   {Math.round(todayProgress.calories)}% Complete
//                 </Badge>
//               </div>
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
//                     {" "}
//                     {/* Added shadow-md */}
//                     <Fire className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{todayTotals.calories}</div>
//                   <div className="text-gray-600 text-sm">Calories</div>
//                   <div className="text-xs text-gray-500">Goal: {dailyGoals.calories}</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
//                     {" "}
//                     {/* Added shadow-md */}
//                     <Zap className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{todayTotals.protein}g</div>
//                   <div className="text-gray-600 text-sm">Protein</div>
//                   <div className="text-xs text-gray-500">Goal: {dailyGoals.protein}g</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
//                     {" "}
//                     {/* Added shadow-md */}
//                     <Apple className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{todayTotals.carbs}g</div>
//                   <div className="text-gray-600 text-sm">Carbs</div>
//                   <div className="text-xs text-gray-500">Goal: {dailyGoals.carbs}g</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
//                     {" "}
//                     {/* Added shadow-md */}
//                     <Star className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{todayTotals.fat}g</div>
//                   <div className="text-gray-600 text-sm">Fat</div>
//                   <div className="text-xs text-gray-500">Goal: {dailyGoals.fat}g</div>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <div>
//                   <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
//                     <span>Calories</span>
//                     <span>
//                       {todayTotals.calories} / {dailyGoals.calories}
//                     </span>
//                   </div>
//                   <Progress value={todayProgress.calories} color="red" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
//                     <span>Protein</span>
//                     <span>
//                       {todayTotals.protein}g / {dailyGoals.protein}g
//                     </span>
//                   </div>
//                   <Progress value={todayProgress.protein} color="green" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
//                     <span>Carbs</span>
//                     <span>
//                       {todayTotals.carbs}g / {dailyGoals.carbs}g
//                     </span>
//                   </div>
//                   <Progress value={todayProgress.carbs} color="yellow" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
//                     <span>Fat</span>
//                     <span>
//                       {todayTotals.fat}g / {dailyGoals.fat}g
//                     </span>
//                   </div>
//                   <Progress value={todayProgress.fat} color="purple" />
//                 </div>
//               </div>
//             </Card>
//             {/* Quick Actions */}
//             <Card>
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                 <Zap className="w-5 h-5 text-emerald-600" />
//                 Quick Actions
//               </h2>
//               <div className="space-y-3">
//                 <Button
//                   onClick={() => {
//                     setSelectedDate(todayString)
//                     setCurrentView("meal-planner")
//                   }}
//                   variant="outline"
//                   className="w-full justify-start"
//                 >
//                   <ChefHat className="w-4 h-4 mr-3" />
//                   Plan Today's Meals
//                 </Button>
//                 <Button
//                   onClick={() => setCurrentView("food-search")}
//                   variant="outline"
//                   className="w-full justify-start"
//                 >
//                   <Search className="w-4 h-4 mr-3" />
//                   Find Recipes
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: todayString }))
//                     setEditingRegularEvent(null) // Ensure adding new
//                     setCurrentView("add-event")
//                   }}
//                   variant="outline"
//                   className="w-full justify-start"
//                 >
//                   <PlusCircle className="w-4 h-4 mr-3" />
//                   Add Event
//                 </Button>
//                 <Button onClick={() => setCurrentView("calendar")} variant="outline" className="w-full justify-start">
//                   <Calendar className="w-4 h-4 mr-3" />
//                   View Calendar
//                 </Button>
//               </div>
//             </Card>
//           </div>
//           {/* Today's Meals */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             <Card>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                   <ChefHat className="w-5 h-5 text-emerald-600" />
//                   Today's Meals
//                 </h2>
//                 <Button
//                   onClick={() => {
//                     setSelectedDate(todayString)
//                     setCurrentView("meal-planner")
//                   }}
//                   size="sm"
//                   variant="primary"
//                 >
//                   <PlusCircle className="w-4 h-4 mr-1" />
//                   Add Meal
//                 </Button>
//               </div>
//               {todayMeals.length > 0 ? (
//                 <div className="space-y-4">
//                   {Object.entries(mealTypeConfig).map(([type, config]) => {
//                     const meal = todayMeals.find((m) => m.mealType === type)
//                     return (
//                       <div key={type} className={`p-4 rounded-lg border-2 ${config.borderColor} ${config.bgColor}`}>
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <div className="text-2xl">{config.icon}</div>
//                             <div>
//                               <h3 className={`font-semibold ${config.textColor}`}>{config.name}</h3>
//                               <p className="text-xs text-gray-600">{config.time}</p>
//                             </div>
//                           </div>
//                           {meal ? (
//                             <div className="text-right">
//                               <Badge variant="success" className="mb-1">
//                                 {meal.totalCalories} cal
//                               </Badge>
//                               <p className="text-xs text-gray-600">{meal.foods.length} items</p>
//                             </div>
//                           ) : (
//                             <Button onClick={() => startNewMeal(todayString, type as any)} size="sm" variant="ghost">
//                               <PlusCircle className="w-4 h-4" />
//                             </Button>
//                           )}
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               ) : (
//                 <div className="text-center py-8">
//                   <ChefHat className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No meals planned</h3>
//                   <p className="text-gray-600 mb-4">Start planning your meals for today!</p>
//                   <Button
//                     onClick={() => {
//                       setSelectedDate(todayString)
//                       setCurrentView("meal-planner")
//                     }}
//                     variant="primary"
//                   >
//                     Plan Meals
//                   </Button>
//                 </div>
//               )}
//             </Card>
//             {/* Today's Events */}
//             <Card>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                   <Activity className="w-5 h-5 text-emerald-600" />
//                   Today's Events
//                 </h2>
//                 <Button
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: todayString }))
//                     setEditingRegularEvent(null) // Ensure adding new
//                     setCurrentView("add-event")
//                   }}
//                   size="sm"
//                   variant="primary"
//                 >
//                   <PlusCircle className="w-4 h-4 mr-1" />
//                   Add Event
//                 </Button>
//               </div>
//               {todayEvents.filter((e) => e.type !== "meal").length > 0 ? (
//                 <div className="space-y-3">
//                   {todayEvents
//                     .filter((e) => e.type !== "meal")
//                     .sort((a, b) => a.time.localeCompare(b.time))
//                     .map((event) => {
//                       if (isRegularEvent(event)) {
//                         return (
//                           <div
//                             key={event.id}
//                             className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-4 shadow-sm`}
//                           >
//                             {" "}
//                             {/* Added shadow-sm */}
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center gap-3">
//                                 {eventTypeConfig[event.type].icon}
//                                 <div>
//                                   <h3 className="font-semibold">{event.title}</h3>
//                                   <p className="text-sm text-white/90">
//                                     {event.time} {event.duration && `• ${event.duration}`}
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="flex gap-2">
//                                 <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
//                                   <Edit className="w-4 h-4 text-white/80" />
//                                 </Button>
//                                 <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
//                                   <Trash2 className="w-4 h-4 text-white/80" />
//                                 </Button>
//                               </div>
//                             </div>
//                             {event.description && <p className="text-sm text-white/90 mt-2">{event.description}</p>}
//                           </div>
//                         )
//                       }
//                       return null
//                     })}
//                 </div>
//               ) : (
//                 <div className="text-center py-8">
//                   <CalendarDays className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No events today</h3>
//                   <p className="text-gray-600 mb-4">Add workouts, appointments, or reminders!</p>
//                   <Button
//                     onClick={() => {
//                       setNewEvent((prev) => ({ ...prev, date: todayString }))
//                       setEditingRegularEvent(null) // Ensure adding new
//                       setCurrentView("add-event")
//                     }}
//                     variant="primary"
//                   >
//                     Add Event
//                   </Button>
//                 </div>
//               )}
//             </Card>
//           </div>
//           {/* Weekly Overview */}
//           <Card className="p-4 sm:p-6 shadow-md border border-gray-100 rounded-2xl">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-6">
//               <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-emerald-600" />
//                 This Week's Overview
//               </h2>
//               <Button
//                 onClick={() => setCurrentView("calendar")}
//                 variant="outline"
//                 size="sm"
//                 className="text-sm border-gray-300 hover:bg-emerald-50 hover:border-emerald-500"
//               >
//                 View Full Calendar
//                 <ChevronRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//             {/* Scrollable horizontal timeline */}
//             <div className="flex gap-3 overflow-x-auto pb-2 px-1 snap-x snap-mandatory -mx-1 sm:grid sm:grid-cols-7 sm:gap-2 sm:overflow-visible custom-scrollbar">
//               {Array.from({ length: 7 }, (_, i) => {
//                 const date = new Date()
//                 date.setDate(date.getDate() - date.getDay() + i)
//                 const dateString = date.toISOString().split("T")[0]
//                 const dayEvents = events.filter((event) => event.date === dateString)
//                 const dayMeals = dayEvents.filter((event): event is MealEvent => event.type === "meal")
//                 const dayCalories = dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
//                 const isToday = dateString === todayString
//                 return (
//                   <div
//                     key={i}
//                     className={`snap-start min-w-[90px] sm:min-w-0 bg-white p-3 rounded-xl border transition-all duration-200 text-center cursor-pointer group flex-shrink-0
//             ${isToday ? "border-emerald-500 bg-emerald-50 shadow-md" : ""}
//             ${!isToday && dayEvents.length > 0 ? "border-gray-200 bg-gray-50" : ""}
//             ${!isToday && dayEvents.length === 0 ? "border-gray-100 hover:bg-gray-50" : ""}
//           `}
//                     onClick={() => {
//                       setSelectedDate(dateString)
//                       setCurrentView("meal-planner")
//                     }}
//                   >
//                     <div className="text-xs font-semibold text-gray-500 group-hover:text-emerald-600">
//                       {date.toLocaleDateString("en-US", { weekday: "short" })}
//                     </div>
//                     <div className={`text-lg font-bold mb-1 ${isToday ? "text-emerald-600" : "text-gray-800"}`}>
//                       {date.getDate()}
//                     </div>
//                     {dayCalories > 0 && (
//                       <Badge
//                         variant="success"
//                         className="text-xs font-medium bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform"
//                       >
//                         {dayCalories} cal
//                       </Badge>
//                     )}
//                     {dayEvents.filter((e) => e.type !== "meal").length > 0 && (
//                       <div className="flex justify-center mt-1">
//                         <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                       </div>
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           </Card>
//         </main>
//       )}
//       {/* Calendar View */}
//       {currentView === "calendar" && (
//         <main className="w-full  py-4 bg-white">
//           {" "}
//           {/* Added max-w-7xl mx-auto */}
//           {/* Calendar Header */}
//           {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8"> */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 bg-white p-4 rounded-lg border">
//             <div className="flex items-center gap-4">
//               <Button onClick={() => navigateMonth("prev")} variant="outline" size="sm">
//                 <ArrowLeft className="w-4 h-4" />
//               </Button>
//               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                 {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//               </h1>
//               <Button onClick={() => navigateMonth("next")} variant="outline" size="sm">
//                 <ArrowRight className="w-4 h-4" />
//               </Button>
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 onClick={() => {
//                   setCurrentDate(new Date())
//                   setSelectedDate(new Date().toISOString().split("T")[0])
//                 }}
//                 variant="outline"
//                 size="sm"
//               >
//                 Today
//               </Button>
//               <Button
//                 onClick={() => {
//                   setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                   setEditingRegularEvent(null) // Ensure adding new
//                   setCurrentView("add-event")
//                 }}
//                 variant="primary"
//                 size="sm"
//               >
//                 <PlusCircle className="w-4 h-4 mr-1" />
//                 Add Event
//               </Button>
//             </div>
//           </div>
//           {/* Calendar Grid / List */}
//           <Card className="mb-8 border-none shadow-none" padding="none">
//             {/* Week Days Header - Hidden on small screens */}
//             <div className="hidden sm:grid grid-cols-7 ">
//               {weekDays.map((day) => (
//                 <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-white">
//                   {day}
//                 </div>
//               ))}
//             </div>
//             {/* Calendar Days - Responsive Grid/List */}
//             <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">
//               {calendarDays.map((day, index) => (
//                 <div
//                   key={`${day.dateString}-${index}`}
//                   className={`    p-4 gap-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-md border    ${!day.isCurrentMonth ? "bg-gray-50/50 text-gray-400" : ""}    ${day.isToday ? "bg-emerald-50 border-emerald-200" : ""}    ${selectedDate === day.dateString ? "ring-2 ring-emerald-500 ring-inset shadow-md" : ""}    sm:min-h-[120px] sm:p-2
//     ${(index + 1) % 7 !== 0 ? "sm:border-r" : ""}  `}
//                   onClick={() => {
//                     setSelectedDate(day.dateString)
//                     setCurrentView("meal-planner") // Navigate to meal planner on day click
//                   }}
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <span
//                       className={`text-sm font-medium ${
//                         day.isToday
//                           ? "bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center"
//                           : ""
//                       }`}
//                     >
//                       {day.date}
//                     </span>
//                     {day.totalCalories > 0 && (
//                       <Badge variant="success" className="text-xs">
//                         {day.totalCalories}
//                       </Badge>
//                     )}
//                   </div>
//                   {/* Events */}
//                   <div className="space-y-1">
//                     {day.events.slice(0, 3).map((event) => {
//                       if (event.type === "meal") {
//                         const mealEvent = event as MealEvent
//                         const config = mealTypeConfig[mealEvent.mealType]
//                         return (
//                           <div
//                             key={event.id}
//                             className={`text-xs p-1 rounded ${config.bgColor} ${config.textColor} truncate flex items-center gap-1`}
//                           >
//                             {config.icon} {mealEvent.time} {mealEvent.mealType}
//                           </div>
//                         )
//                       } else {
//                         const regularEvent = event as RegularEvent
//                         return (
//                           <div
//                             key={event.id}
//                             className={`text-xs p-1 rounded text-white truncate ${regularEvent.color} flex items-center gap-1`}
//                           >
//                             {eventTypeConfig[regularEvent.type].icon} {regularEvent.time} {regularEvent.title}
//                           </div>
//                         )
//                       }
//                     })}
//                     {day.events.length > 3 && (
//                       <div className="text-xs text-gray-500 font-medium">+{day.events.length - 3} more</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>
//           {/* Selected Date Details */}
//           {selectedDate && (
//             <Card>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   {new Date(selectedDate).toLocaleDateString("en-US", {
//                     weekday: "long",
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </h2>
//                 <Button
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                     setEditingRegularEvent(null) // Ensure adding new
//                     setCurrentView("add-event")
//                   }}
//                   variant="primary"
//                   size="sm"
//                 >
//                   <PlusCircle className="w-4 h-4 mr-1" />
//                   Add Event
//                 </Button>
//               </div>
//               {selectedDateEvents.length > 0 ? (
//                 <div className="space-y-4">
//                   {/* Meals */}
//                   {selectedDateMeals.length > 0 && (
//                     <div>
//                       <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                         <ChefHat className="w-4 h-4" />
//                         Meals ({selectedDateMeals.length})
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {selectedDateMeals.map((meal) => {
//                           const config = mealTypeConfig[meal.mealType]
//                           return (
//                             <div
//                               key={meal.id}
//                               className={`p-4 rounded-lg border-2 ${config.borderColor} ${config.bgColor} shadow-sm`}
//                             >
//                               {" "}
//                               {/* Added shadow-sm */}
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <span className="text-lg">{config.icon}</span>
//                                   <div>
//                                     <h4 className={`font-semibold ${config.textColor}`}>{config.name}</h4>
//                                     <p className="text-xs text-gray-600">{meal.time}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <Badge variant="success">{meal.totalCalories} cal</Badge>
//                                   <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
//                                     <Edit className="w-3 h-3" />
//                                   </Button>
//                                 </div>
//                               </div>
//                               <p className="text-sm text-gray-600">{meal.foods.length} items</p>
//                             </div>
//                           )
//                         })}
//                       </div>
//                     </div>
//                   )}
//                   {/* Other Events */}
//                   {selectedDateEvents.filter((e) => e.type !== "meal").length > 0 && (
//                     <div>
//                       <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                         <Activity className="w-4 h-4" />
//                         Events ({selectedDateEvents.filter((e) => e.type !== "meal").length})
//                       </h3>
//                       <div className="space-y-3">
//                         {selectedDateEvents
//                           .filter((e) => e.type !== "meal")
//                           .sort((a, b) => a.time.localeCompare(b.time))
//                           .map((event) => {
//                             if (isRegularEvent(event)) {
//                               return (
//                                 <div
//                                   key={event.id}
//                                   className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-4 shadow-sm`}
//                                 >
//                                   {" "}
//                                   {/* Added shadow-sm */}
//                                   <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-3">
//                                       {eventTypeConfig[event.type].icon}
//                                       <div>
//                                         <h4 className="font-semibold">{event.title}</h4>
//                                         <p className="text-sm text-white/90">
//                                           {event.time} {event.duration && `• ${event.duration}`}
//                                         </p>
//                                       </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                       <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
//                                         <Edit className="w-4 h-4 text-white/80" />
//                                       </Button>
//                                       <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
//                                         <Trash2 className="w-4 h-4 text-white/80" />
//                                       </Button>
//                                     </div>
//                                   </div>
//                                   {event.description && (
//                                     <p className="text-sm text-white/90 mt-2">{event.description}</p>
//                                   )}
//                                 </div>
//                               )
//                             }
//                             return null
//                           })}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="text-center py-8">
//                   <CalendarDays className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No events planned</h3>
//                   <p className="text-gray-600 mb-4">Add meals, workouts, or appointments for this day!</p>
//                   <div className="flex gap-2 justify-center">
//                     <Button
//                       onClick={() => {
//                         setSelectedDate(selectedDate)
//                         setCurrentView("meal-planner")
//                       }}
//                       variant="primary"
//                     >
//                       Plan Meals
//                     </Button>
//                     <Button
//                       onClick={() => {
//                         setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                         setEditingRegularEvent(null) // Ensure adding new
//                         setCurrentView("add-event")
//                       }}
//                       variant="outline"
//                     >
//                       Add Event
//                     </Button>
//                   </div>
//                 </div>
//               )}
//             </Card>
//           )}
//         </main>
//       )}
//       {/* Meal Planner View */}
//       {currentView === "meal-planner" && (
//         <main className="bg-white">
//           {" "}
//           {/* Added max-w-7xl mx-auto */}
//           {/* Enhanced Header with Date Navigation */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
//             <div className="flex items-center gap-4">
//               <Button onClick={() => navigateDate("prev")} variant="outline" size="sm">
//                 <ArrowLeft className="w-4 h-4" />
//               </Button>
//               <div className="text-center">
//                 <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
//                   {new Date(selectedDate).toLocaleDateString("en-US", {
//                     weekday: "long",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </h1>
//                 <p className="text-sm text-gray-600">Meal Plan</p>
//               </div>
//               <Button onClick={() => navigateDate("next")} variant="outline" size="sm">
//                 <ArrowRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//           {/* Enhanced Meal Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
//             {Object.entries(mealTypeConfig).map(([type, config]) => {
//               const meal = selectedDateMeals.find((m) => m.mealType === type)
//               return (
//                 <div key={type}>
//                   <Card
//                     className={`relative overflow-hidden ${
//                       meal ? "flex flex-col h-full min-h-[320px]" : "min-h-[200px]"
//                     }
//                      ${config.bgColor} border-2 ${config.borderColor} shadow-lg`}
//                   >
//                     {" "}
//                     {/* Increased shadow to shadow-lg */}
//                     {/* Decorative Background */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-5`} />
//                     <div className="relative z-10 flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2 lg:gap-3">
//                         <div
//                           className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold bg-white shadow-md`}
//                         >
//                           {" "}
//                           {/* Added shadow-md */}
//                           {config.icon}
//                         </div>
//                         <div>
//                           <h2 className={`text-lg lg:text-xl font-bold ${config.textColor}`}>{config.name}</h2>
//                           <p className="text-xs text-gray-600">{config.time}</p>
//                         </div>
//                       </div>
//                       {meal ? (
//                         <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
//                           <Edit className="w-4 h-4 text-gray-600" />
//                         </Button>
//                       ) : (
//                         <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
//                           <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
//                         </Button>
//                       )}
//                     </div>
//                     <div className="relative z-10 flex-1 flex flex-col">
//                       {meal ? (
//                         <>
//                           <div className="space-y-4">
//                             {/* Nutrition Summary */}
//                             <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-white/50 shadow-sm">
//                               {" "}
//                               {/* Added shadow-sm */}
//                               <div className="flex items-center justify-between mb-3">
//                                 <span className="text-gray-700 font-medium text-sm lg:text-base">Total Calories:</span>
//                                 <Badge variant="info" className="text-sm lg:text-base font-bold">
//                                   {meal.totalCalories} kcal
//                                 </Badge>
//                               </div>
//                               <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm text-gray-700">
//                                 <div className="text-center">
//                                   <div className="font-bold text-emerald-600">{meal.totalProtein}g</div>
//                                   <div>Protein</div>
//                                 </div>
//                                 <div className="text-center">
//                                   <div className="font-bold text-yellow-600">{meal.totalCarbs}g</div>
//                                   <div>Carbs</div>
//                                 </div>
//                                 <div className="text-center">
//                                   <div className="font-bold text-purple-600">{meal.totalFat}g</div>
//                                   <div>Fat</div>
//                                 </div>
//                               </div>
//                             </div>
//                             {/* Foods List */}
//                             <div>
//                               <h3 className="font-semibold text-gray-800 mb-3 text-sm lg:text-base flex items-center gap-2">
//                                 <Utensils className="w-4 h-4" />
//                                 Foods ({meal.foods.length})
//                               </h3>
//                               <div className="space-y-2 max-h-32 lg:max-h-40 overflow-y-auto pr-2 custom-scrollbar">
//                                 {meal.foods.map((food, index) => (
//                                   <div
//                                     key={`${food.id}-${index}`}
//                                     className="flex items-center justify-between text-xs lg:text-sm bg-white/50 rounded-lg p-2 shadow-xs"
//                                   >
//                                     {" "}
//                                     {/* Added shadow-xs (custom, or use shadow-sm if not available) */}
//                                     <div className="flex items-center gap-2">
//                                       <img
//                                         src={food.image || "/placeholder.svg?height=32&width=32"}
//                                         alt={food.title}
//                                         className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover"
//                                       />
//                                       <span className="font-medium text-gray-900 line-clamp-1">{food.title}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                       <span className="text-gray-600 font-medium">{food.calories} cal</span>
//                                       <Button
//                                         onClick={() => removeFoodFromMeal(meal.id, food.id)}
//                                         variant="ghost"
//                                         size="sm"
//                                         className="text-red-500 p-1 hover:bg-red-50"
//                                       >
//                                         <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
//                                       </Button>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                             <div className="flex gap-2 mt-4">
//                               <Button onClick={() => editMeal(meal)} variant="primary" size="sm" className="flex-1">
//                                 <PlusCircle className="w-3 h-3 mr-1" />
//                                 Add Food
//                               </Button>
//                               <Button onClick={() => deleteEvent(meal.id)} variant="danger" size="sm" className="px-3">
//                                 <Trash2 className="w-3 h-3" />
//                               </Button>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <div className="text-center py-8 text-gray-600 flex-1 flex flex-col items-center justify-center">
//                           <div
//                             className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} opacity-20 flex items-center justify-center mb-4`}
//                           >
//                             <Utensils className="w-8 h-8 text-gray-400" />
//                           </div>
//                           <p className="text-sm lg:text-base mb-4">No {config.name.toLowerCase()} planned</p>
//                           <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
//                             <PlusCircle className="w-4 h-4 mr-2" />
//                             Plan {config.name}
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                   </Card>
//                 </div>
//               )
//             })}
//           </div>
//           {/* Enhanced Daily Summary */}
//           <Card className="mb-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-lg">
//             {" "}
//             {/* Increased shadow to shadow-lg */}
//             <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//               <ChefHat className="w-5 h-5 text-gray-700" /> Daily Nutrition Summary
//             </h2>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
//                 {" "}
//                 {/* Added shadow-md */}
//                 <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
//                   {" "}
//                   {/* Added shadow-sm */}
//                   <Fire className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.calories}</div>
//                 <div className="text-gray-600 text-sm lg:text-base">Calories</div>
//                 <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.calories}</div>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
//                 {" "}
//                 {/* Added shadow-md */}
//                 <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
//                   {" "}
//                   {/* Added shadow-sm */}
//                   <Zap className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.protein}g</div>
//                 <div className="text-gray-600 text-sm lg:text-base">Protein</div>
//                 <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.protein}g</div>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
//                 {" "}
//                 {/* Added shadow-md */}
//                 <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
//                   {" "}
//                   {/* Added shadow-sm */}
//                   <Apple className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.carbs}g</div>
//                 <div className="text-gray-600 text-sm lg:text-base">Carbs</div>
//                 <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.carbs}g</div>
//               </div>
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
//                 {" "}
//                 {/* Added shadow-md */}
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
//                   {" "}
//                   {/* Added shadow-sm */}
//                   <Star className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.fat}g</div>
//                 <div className="text-gray-600 text-sm lg:text-base">Fat</div>
//                 <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.fat}g</div>
//               </div>
//             </div>
//             {/* Progress Bars */}
//             <div className="mt-6 space-y-4">
//               <div>
//                 <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
//                   <span>Daily Progress</span>
//                   <span>{Math.round((selectedDateTotals.calories / dailyGoals.calories) * 100)}% Complete</span>
//                 </div>
//                 <Progress value={progress.calories} color="red" className="h-2" />
//               </div>
//             </div>
//           </Card>
//           {/* Other Events for Selected Date */}
//           <Card>
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
//                 <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> Other Events
//               </h2>
//               <Button
//                 onClick={() => {
//                   setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                   setEditingRegularEvent(null) // Ensure adding new
//                   setCurrentView("add-event")
//                 }}
//                 size="sm"
//                 variant="primary"
//               >
//                 <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
//               </Button>
//             </div>
//             {selectedDateEvents.filter((e) => e.type !== "meal").length > 0 ? (
//               <div className="space-y-4">
//                 {selectedDateEvents
//                   .filter((e) => e.type !== "meal")
//                   .sort((a, b) => a.time.localeCompare(b.time))
//                   .map((event) => {
//                     if (isRegularEvent(event)) {
//                       return (
//                         <div
//                           key={event.id}
//                           className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-3 lg:p-4 shadow-md`}
//                         >
//                           {" "}
//                           {/* Increased shadow to shadow-md */}
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                               {eventTypeConfig[event.type].icon}
//                               <div>
//                                 <h3 className="font-semibold text-sm lg:text-base">{event.title}</h3>
//                                 <p className="text-xs lg:text-sm text-white/90">
//                                   {event.time} {event.duration && `• ${event.duration}`}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex gap-2">
//                               <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
//                                 <Edit className="w-4 h-4 text-white/80" />
//                               </Button>
//                               <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
//                                 <Trash2 className="w-4 h-4 text-white/80" />
//                               </Button>
//                             </div>
//                           </div>
//                           {event.description && (
//                             <p className="text-xs lg:text-sm text-white/90 mt-2">{event.description}</p>
//                           )}
//                         </div>
//                       )
//                     }
//                     return null
//                   })}
//               </div>
//             ) : (
//               <div className="text-center py-6 lg:py-8">
//                 <CalendarDays className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No other events</h3>
//                 <p className="text-gray-600 mb-4 text-sm lg:text-base">Add workouts, appointments, or reminders!</p>
//                 <Button
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                     setEditingRegularEvent(null) // Ensure adding new
//                     setCurrentView("add-event")
//                   }}
//                   variant="primary"
//                 >
//                   Add Event
//                 </Button>
//               </div>
//             )}
//           </Card>
//         </main>
//       )}
//       {/* Food Search View */}
//       {currentView === "food-search" && (
//         <main className="">
//           {" "}
//           {/* Added max-w-7xl mx-auto */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
//             <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
//               {editingMeal ? "Add Food to Meal" : "Find Food & Recipes"}
//             </h1>
//             <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
//               <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
//             </Button>
//           </div>
//           <div className="flex flex-wrap gap-2 mb-6">
//             <Button
//               onClick={() => setSearchType("recipes")}
//               variant={searchType === "recipes" ? "primary" : "outline"}
//               size="sm"
//             >
//               Recipes
//             </Button>
//             <Button
//               onClick={() => setSearchType("ingredients")}
//               variant={searchType === "ingredients" ? "primary" : "outline"}
//               size="sm"
//             >
//               Ingredients
//             </Button>
//           </div>
//           <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
//         </main>
//       )}
//       {/* Add Event View */}
//       {currentView === "add-event" && (
//         <main className="">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 ">
//             <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
//               {editingRegularEvent ? "Edit Event" : "Add New Event"}
//             </h1>
//             <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
//               <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
//             </Button>
//           </div>
//           <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
//             {/* Left side: Form */}
//             <div className="lg:col-span-1 lg:mx-auto lg:w-full">
//               <Card className="w-full shadow-lg p-0 overflow-hidden">
//                 <div className="bg-emerald-600 text-white p-6 sm:p-8 flex items-center gap-4 mb-2">
//                   <PlusCircle className="w-8 h-8" />
//                   <h2 className="text-xl md:text-2xl font-bold">
//                     {editingRegularEvent ? "Edit Event Details" : "Create New Event"}
//                   </h2>
//                 </div>
//                 <div className=" space-y-6">
//                   {/* Event Title */}
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                     <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-2">
//                       Event Title
//                     </label>
//                     <input
//                       type="text"
//                       id="event-title"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
//                       value={newEvent.title}
//                       onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                       placeholder="e.g., Gym Workout, Dentist Appointment"
//                     />
//                   </div>
//                   {/* Event Type */}
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                     <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
//                       Event Type
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="event-type"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white text-gray-900 appearance-none pr-10"
//                         value={newEvent.type}
//                         onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as EventType })}
//                       >
//                         {Object.entries(eventTypeConfig).map(([type, config]) => (
//                           <option key={type} value={type}>
//                             {config.name}
//                           </option>
//                         ))}
//                       </select>
//                       <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//                     </div>
//                   </div>
//                   {/* Date and Time */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                       <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-2">
//                         Date
//                       </label>
//                       <input
//                         type="date"
//                         id="event-date"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
//                         value={newEvent.date}
//                         onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                       />
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                       <label htmlFor="event-time" className="block text-sm font-medium text-gray-700 mb-2">
//                         Time
//                       </label>
//                       <input
//                         type="time"
//                         id="event-time"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
//                         value={newEvent.time}
//                         onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
//                       />
//                     </div>
//                   </div>
//                   {/* Duration */}
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                     <label htmlFor="event-duration" className="block text-sm font-medium text-gray-700 mb-2">
//                       Duration (optional)
//                     </label>
//                     <input
//                       type="text"
//                       id="event-duration"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
//                       value={newEvent.duration}
//                       onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
//                       placeholder="e.g., 1 hour, 30 min, 20 mins laps"
//                     />
//                   </div>
//                   {/* Description */}
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                     <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-2">
//                       Description (optional)
//                     </label>
//                     <textarea
//                       id="event-description"
//                       rows={3}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 resize-y bg-white"
//                       value={newEvent.description}
//                       onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
//                       placeholder="Any notes for this event..."
//                     ></textarea>
//                   </div>
//                   <Button onClick={handleAddOrUpdateRegularEvent} variant="primary" className="w-full py-3 text-base">
//                     {editingRegularEvent ? "Save Changes" : "Add Event"}
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//             {/* Right side: Image/Content (hidden on small screens) */}
//             <div className="hidden lg:flex lg:col-span-1 items-center justify-center p-4 shadow rounded-md">
//               <div className="bg-white rounded-2xl p-6 w-full ">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvjU4YPjwggKZFQ6oO9jhPWruiY8SiVmOjw&s"
//                   alt="Event planning illustration"
//                   className="rounded-xl w-full h-auto object-cover mb-5"
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Stay Organized, Effortlessly</h3>
//                 <p className="text-gray-600 text-sm mb-6">
//                   From workouts to appointments, manage everything in one place with a sleek and intuitive interface.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <CalendarDays className="w-5 h-5 text-emerald-500 mt-1" />
//                     <span className="text-sm text-gray-800">Plan your schedule with ease.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <Dumbbell className="w-5 h-5 text-emerald-500 mt-1" />
//                     <span className="text-sm text-gray-800">Track your fitness journey effortlessly.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <BellRing className="w-5 h-5 text-emerald-500 mt-1" />
//                     <span className="text-sm text-gray-800">Never miss a reminder or important moment.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </main>
//       )}
//     </div>
//   )
// }

// export default CalendarApp
"use client"
import type React from "react"
import { useState, useEffect, type JSX } from "react"
import {
  CalendarDays,
  ChefHat,
  PlusCircle,
  ChevronLeft,
  Clock,
  Edit,
  Trash2,
  Dumbbell,
  Calendar,
  Briefcase,
  BellRing,
  Home,
  Search,
  Apple,
  Utensils,
  Activity,
  AlertCircle,
  FlameIcon as Fire,
  Zap,
  Star,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

// UI Components (reverted to original custom components)
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "default" | "lg"
  className?: string
  disabled?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  // const variants = {
  //   default: "bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-200 focus:ring-fuchsia-400",
  //   primary: "bg-fuchsia-700 text-white hover:bg-fuchsia-800 focus:ring-fuchsia-900 shadow-sm",
  //   secondary: "bg-fuchsia-600 text-white hover:bg-fuchsia-700 focus:ring-fuchsia-800 shadow-sm",
  //   outline: "border border-fuchsia-300 bg-white text-fuchsia-700 hover:bg-fuchsia-50 focus:ring-fuchsia-500",
  //   ghost: "text-fuchsia-700 hover:text-fuchsia-900 hover:bg-fuchsia-100 focus:ring-fuchsia-400",
  //   danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm", // left red intact
  // }
  const variants = {
  default: "bg-fuchsia-700 text-black hover:bg-gray-100 focus:ring-black shadow-sm",
  primary: "bg-black text-white hover:bg-gray-900 focus:ring-black shadow-sm",
  secondary: "bg-white text-black border border-black hover:bg-gray-100 focus:ring-black shadow-sm",
  outline: "border border-gray-300 bg-white text-black hover:bg-gray-50 focus:ring-black shadow-sm",
  ghost: "text-black hover:text-gray-900 hover:bg-gray-100 focus:ring-black",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
}


  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    default: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}


const Card = ({
  children,
  className = "",
  padding = "default",
}: {
  children: React.ReactNode
  className?: string
  padding?: "none" | "sm" | "default" | "lg"
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  }
  return (
    <div className={`bg-white rounded-xl border border-gray-200 ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  className?: string
}) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-emerald-100 text-emerald-800",
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

const Progress = ({
  value,
  className = "",
  color = "emerald",
}: {
  value: number
  className?: string
  color?: "emerald" | "green" | "yellow" | "red" | "purple"
}) => {
  // Updated colors to match the gradients used in the circular icons
  const colors = {
    emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    yellow: "bg-gradient-to-r from-yellow-500 to-orange-500",
    red: "bg-gradient-to-r from-red-500 to-orange-500", // Changed to match dashboard icon gradient
    purple: "bg-gradient-to-r from-purple-500 to-pink-500", // Changed to match dashboard icon gradient
  }
  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
      <div
        className={`h-3 rounded-full transition-all duration-700 ${colors[color]} shadow-sm`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
}

// Interfaces
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

type EventType = "workout" | "appointment" | "reminder"

interface RegularEvent {
  id: string
  title: string
  type: EventType
  time: string
  date: string
  description?: string
  duration?: string
  color: string // Tailwind CSS class for background color
}

type CalendarEvent = MealEvent | RegularEvent

interface DayData {
  date: number
  dateString: string
  isCurrentMonth: boolean
  isToday: boolean
  events: CalendarEvent[]
  totalCalories: number
}

type View = "calendar" | "meal-planner" | "food-search" | "add-event" | "dashboard"

interface MealDBMeal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory?: string
  strArea?: string
  strInstructions?: string
}

interface MealDBResponse {
  meals: MealDBMeal[] | null
}

// Food Search Component
const FoodSearch = ({
  onSelectFood,
  searchType,
}: {
  onSelectFood: (food: FoodItem) => void
  searchType: "recipes" | "ingredients"
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [foods, setFoods] = useState<FoodItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)

  const estimateNutrition = (meal: MealDBMeal): Partial<FoodItem> => {
    const baseCalories = 250
    const categoryMultipliers: { [key: string]: number } = {
      Beef: 1.4,
      Chicken: 1.1,
      Dessert: 1.6,
      Lamb: 1.5,
      Miscellaneous: 1.0,
      Pasta: 1.3,
      Pork: 1.4,
      Seafood: 1.0,
      Side: 0.8,
      Starter: 0.6,
      Vegan: 0.9,
      Vegetarian: 0.9,
      Breakfast: 1.2,
      Goat: 1.3,
      Unknown: 1.0,
    }
    const multiplier = categoryMultipliers[meal.strCategory || "Unknown"] || 1.0
    const estimatedCalories = Math.round(baseCalories * multiplier)
    return {
      calories: estimatedCalories,
      protein: Math.round((estimatedCalories * 0.15) / 4),
      carbs: Math.round((estimatedCalories * 0.5) / 4),
      fat: Math.round((estimatedCalories * 0.35) / 9),
      readyInMinutes: Math.floor(Math.random() * 30) + 15,
      servings: Math.floor(Math.random() * 3) + 1,
    }
  }

  const fetchWithTimeout = async (url: string, timeout = 10000): Promise<Response> => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  const fetchPopularFoods = async () => {
    setInitialLoading(true)
    setError(null)
    try {
      const popularSearch = "chicken" // A common search term for initial load
      const allFoods: FoodItem[] = []
      try {
        const response = await fetchWithTimeout(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(popularSearch)}`,
        )
        if (response.ok) {
          const data: MealDBResponse = await response.json()
          if (data.meals) {
            const meals = data.meals.slice(0, 8).map((meal, index) => {
              const nutrition = estimateNutrition(meal)
              const uniqueId = `${meal.idMeal}-${index}-${Date.now()}`
              return {
                id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
                title: meal.strMeal,
                image: meal.strMealThumb,
                category: meal.strCategory,
                area: meal.strArea,
                instructions: meal.strInstructions,
                ...nutrition,
              }
            })
            allFoods.push(...meals)
          }
        }
      } catch (err) {
        console.warn(`Failed to fetch ${popularSearch}:`, err)
      }

      if (allFoods.length > 0) {
        const uniqueFoods = allFoods.map((food, index) => ({
          ...food,
          id: food.id || Date.now() + index,
        }))
        setFoods(uniqueFoods.slice(0, 8))
      } else {
        // Fallback to hardcoded data if API fails or returns no results
        setFoods([
          {
            id: Date.now() + 1,
            title: "Grilled Chicken Breast",
            image: "/placeholder.svg?height=120&width=120",
            calories: 165,
            protein: 31,
            carbs: 0,
            fat: 4,
            readyInMinutes: 15,
            category: "Chicken",
            area: "American",
          },
          {
            id: Date.now() + 2,
            title: "Greek Salad",
            image: "/placeholder.svg?height=120&width=120",
            calories: 150,
            protein: 8,
            carbs: 12,
            fat: 10,
            readyInMinutes: 10,
            category: "Vegetarian",
            area: "Greek",
          },
          {
            id: Date.now() + 3,
            title: "Salmon Fillet",
            image: "/placeholder.svg?height=120&width=120",
            calories: 206,
            protein: 22,
            carbs: 0,
            fat: 12,
            readyInMinutes: 20,
            category: "Seafood",
            area: "International",
          },
          {
            id: Date.now() + 4,
            title: "Quinoa Bowl",
            image: "/placeholder.svg?height=120&width=120",
            calories: 180,
            protein: 6,
            carbs: 32,
            fat: 3,
            readyInMinutes: 25,
            category: "Vegetarian",
            area: "International",
          },
          {
            id: Date.now() + 5,
            title: "Turkey Sandwich",
            image: "/placeholder.svg?height=120&width=120",
            calories: 250,
            protein: 20,
            carbs: 25,
            fat: 8,
            readyInMinutes: 5,
            category: "Lunch",
            area: "American",
          },
        ])
      }
    } catch (err) {
      console.error("Error fetching popular foods:", err)
      setError("Unable to load recipes. Using offline data.")
      setFoods([
        {
          id: Date.now() + 1,
          title: "Grilled Chicken Breast",
          image: "/placeholder.svg?height=120&width=120",
          calories: 165,
          protein: 31,
          carbs: 0,
          fat: 4,
          readyInMinutes: 15,
          category: "Chicken",
          area: "American",
        },
        {
          id: Date.now() + 2,
          title: "Greek Salad",
          image: "/placeholder.svg?height=120&width=120",
          calories: 150,
          protein: 8,
          carbs: 12,
          fat: 10,
          readyInMinutes: 10,
          category: "Vegetarian",
          area: "Greek",
        },
        {
          id: Date.now() + 3,
          title: "Salmon Fillet",
          image: "/placeholder.svg?height=120&width=120",
          calories: 206,
          protein: 22,
          carbs: 0,
          fat: 12,
          readyInMinutes: 20,
          category: "Seafood",
          area: "International",
        },
      ])
    } finally {
      setInitialLoading(false)
    }
  }

  const searchMeals = async (query: string) => {
    if (!query.trim()) {
      setFoods([]) // Clear results if search query is empty
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      let url: string
      if (searchType === "recipes") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`
      }
      const response = await fetchWithTimeout(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: MealDBResponse = await response.json()
      if (data.meals) {
        const transformedFoods: FoodItem[] = data.meals.slice(0, 12).map((meal, index) => {
          const nutrition = estimateNutrition(meal)
          const uniqueId = `${meal.idMeal}-search-${index}-${Date.now()}`
          return {
            id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
            title: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            ...nutrition,
          }
        })
        setFoods(transformedFoods)
      } else {
        setFoods([])
      }
    } catch (err) {
      console.error("Error searching meals:", err)
      if (err instanceof Error && err.name === "AbortError") {
        setError("Search timed out. Please try again.")
      } else {
        setError("Failed to search recipes. Please check your connection and try again.")
      }
      setFoods([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial load of popular foods
    fetchPopularFoods()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        searchMeals(searchQuery)
      } else {
        // If search query is empty, show popular foods again
        fetchPopularFoods()
      }
    }, 500) // Debounce search input
    return () => clearTimeout(timeoutId)
  }, [searchQuery, searchType]) // Re-run when search query or type changes

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={`Search ${searchType}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
        />
      </div>
      <div>
        {!searchQuery.trim() && (
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular {searchType === "recipes" ? "Recipes" : "Foods"}
          </h3>
        )}
        {initialLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading popular recipes...</p>
          </div>
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Searching recipes...</p>
          </div>
        ) : error ? (
          <Card className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Error</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button
              onClick={() => (searchQuery.trim() ? searchMeals(searchQuery) : fetchPopularFoods())}
              variant="primary"
            >
              Try Again
            </Button>
          </Card>
        ) : foods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {foods.map((food) => (
              <div
                key={`food-${food.id}-${food.title.replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={food.image || "/placeholder.svg?height=120&width=120"}
                    alt={food.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="success" className="bg-white/90 text-green-700 font-bold">
                      {food.calories} cal
                    </Badge>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{food.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {food.category && (
                      <Badge variant="info" className="text-xs">
                        {food.category}
                      </Badge>
                    )}
                    {food.readyInMinutes && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {food.readyInMinutes}m
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
                    <div className="text-center">
                      <div className="font-medium text-emerald-600">{food.protein}g</div>
                      <div>Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-green-600">{food.carbs}g</div>
                      <div>Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-purple-600">{food.fat}g</div>
                      <div>Fat</div>
                    </div>
                  </div>
                  <Button onClick={() => onSelectFood(food)} variant="primary" size="sm" className="w-full">
                    <PlusCircle className="w-3 h-3 mr-1" />
                    Add to Meal
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery.trim() ? (
          <Card className="text-center py-8">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">
              Try searching for "{searchType === "recipes" ? "chicken, pasta, or curry" : "tomato, beef, or rice"}" or
              clear your search to see popular {searchType === "recipes" ? "recipes" : "foods"}.
            </p>
          </Card>
        ) : null}
      </div>
    </div>
  )
}

// Helper function to get a random date within the current year
const getRandomDate = (year: number) => {
  const month = Math.floor(Math.random() * 12) // 0-11
  const day = Math.floor(Math.random() * 28) + 1 // 1-28 to avoid issues with month lengths
  const date = new Date(year, month, day)
  const yyyy = date.getFullYear()
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const dd = date.getDate().toString().padStart(2, "0")
  return `${yyyy}-${mm}-${dd}`
}

// Main Calendar App Component
const CalendarApp = ({
  mealEvents: initialMealEvents = [],
  onMealEventsChange,
  // onNavigate,
}: {
  mealEvents?: MealEvent[]
  onMealEventsChange?: (events: MealEvent[]) => void
  onNavigate?: (view: string) => void
}) => {
  const [currentView, setCurrentView] = useState<View>("dashboard")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
  const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
  const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)
  const [editingRegularEvent, setEditingRegularEvent] = useState<RegularEvent | null>(null)
  const [newEvent, setNewEvent] = useState({
    id: "", // Added for editing
    title: "",
    type: "workout" as EventType,
    time: "",
    date: selectedDate,
    description: "",
    duration: "",
  })

  // State for meal and regular events, with localStorage persistence
  const [localMealEvents, setLocalMealEvents] = useState<MealEvent[]>(() => {
    if (typeof window !== "undefined") {
      const savedMeals = localStorage.getItem("mealEvents")
      // Prioritize initialMealEvents if provided and not empty, otherwise use savedMeals
      if (initialMealEvents && initialMealEvents.length > 0) {
        return initialMealEvents
      }
      return savedMeals ? JSON.parse(savedMeals) : []
    }
    return initialMealEvents || [] // Fallback for SSR or if initialMealEvents is undefined
  })

  

  const [regularEvents, setRegularEvents] = useState<RegularEvent[]>(() => {
    const currentYear = new Date().getFullYear()
    const defaultEvents = [
      {
        id: "workout-1",
        title: "Morning Run",
        type: "workout",
        time: "07:00",
        date: getRandomDate(currentYear),
        description: "30 min outdoor run in the park",
        duration: "30m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-2",
        title: "Strength Training",
        type: "workout",
        time: "18:00",
        date: getRandomDate(currentYear),
        description: "Full body workout at gym",
        duration: "45m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-3",
        title: "Yoga Session",
        type: "workout",
        time: "09:00",
        date: getRandomDate(currentYear),
        description: "Vinyasa flow class",
        duration: "1h",
        color: "bg-emerald-600",
      },
      {
        id: "workout-4",
        title: "Cycling",
        type: "workout",
        time: "16:00",
        date: getRandomDate(currentYear),
        description: "Outdoor cycling trail",
        duration: "1h 30m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-1",
        title: "Dentist Check-up",
        type: "appointment",
        time: "10:30",
        date: getRandomDate(currentYear),
        description: "Annual dental cleaning",
        duration: "1h",
        color: "bg-purple-600",
      },
      {
        id: "reminder-1",
        title: "Pay Bills",
        type: "reminder",
        time: "17:00",
        date: getRandomDate(currentYear),
        description: "Electricity and internet bills due",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-5",
        title: "Swimming Laps",
        type: "workout",
        time: "06:30",
        date: getRandomDate(currentYear),
        description: "30 mins laps at the community pool",
        duration: "30m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-2",
        title: "Team Meeting",
        type: "appointment",
        time: "14:00",
        date: getRandomDate(currentYear),
        description: "Weekly project sync",
        duration: "1h",
        color: "bg-purple-600",
      },
      {
        id: "reminder-2",
        title: "Call Mom",
        type: "reminder",
        time: "20:00",
        date: getRandomDate(currentYear),
        description: "Quick catch-up call",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-6",
        title: "HIIT Session",
        type: "workout",
        time: "07:30",
        date: getRandomDate(currentYear),
        description: "High-intensity interval training",
        duration: "25m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-7",
        title: "Pilates Class",
        type: "workout",
        time: "11:00",
        date: getRandomDate(currentYear),
        description: "Core strength and flexibility",
        duration: "50m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-3",
        title: "Doctor's Visit",
        type: "appointment",
        time: "09:00",
        date: getRandomDate(currentYear),
        description: "Annual physical check-up",
        duration: "45m",
        color: "bg-purple-600",
      },
      {
        id: "reminder-3",
        title: "Grocery Shopping",
        type: "reminder",
        time: "16:00",
        date: getRandomDate(currentYear),
        description: "Buy fresh produce and essentials",
        duration: "1h",
        color: "bg-orange-600",
      },
      {
        id: "workout-8",
        title: "Boxing Training",
        type: "workout",
        time: "19:00",
        date: getRandomDate(currentYear),
        description: "Cardio and strength with boxing drills",
        duration: "1h",
        color: "bg-emerald-600",
      },
      {
        id: "workout-9",
        title: "20 Sit-ups",
        type: "workout",
        time: "08:00",
        date: getRandomDate(currentYear),
        description: "Quick core workout",
        duration: "5m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-4",
        title: "Haircut",
        type: "appointment",
        time: "13:00",
        date: getRandomDate(currentYear),
        description: "Appointment with stylist",
        duration: "1h",
        color: "bg-purple-600",
      },
      {
        id: "reminder-4",
        title: "Book Flight",
        type: "reminder",
        time: "10:00",
        date: getRandomDate(currentYear),
        description: "Confirm travel plans for vacation",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-10",
        title: "Long Walk",
        type: "workout",
        time: "17:00",
        date: getRandomDate(currentYear),
        description: "Relaxing walk in the neighborhood",
        duration: "40m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-11",
        title: "Stretching Routine",
        type: "workout",
        time: "21:00",
        date: getRandomDate(currentYear),
        description: "Evening stretch for flexibility",
        duration: "15m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-5",
        title: "Client Call",
        type: "appointment",
        time: "11:00",
        date: getRandomDate(currentYear),
        description: "Discussion on Q3 strategy",
        duration: "1h 30m",
        color: "bg-purple-600",
      },
      {
        id: "reminder-5",
        title: "Water Plants",
        type: "reminder",
        time: "08:00",
        date: getRandomDate(currentYear),
        description: "Don't forget the indoor plants!",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-12",
        title: "Dance Class",
        type: "workout",
        time: "19:30",
        date: getRandomDate(currentYear),
        description: "Beginner's hip-hop class",
        duration: "1h",
        color: "bg-emerald-600",
      },
      {
        id: "workout-13",
        title: "Push-ups Challenge",
        type: "workout",
        time: "07:00",
        date: getRandomDate(currentYear),
        description: "Daily 50 push-ups",
        duration: "10m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-6",
        title: "Car Service",
        type: "appointment",
        time: "15:00",
        date: getRandomDate(currentYear),
        description: "Oil change and tire rotation",
        duration: "2h",
        color: "bg-purple-600",
      },
      {
        id: "reminder-6",
        title: "Birthday Gift",
        type: "reminder",
        time: "12:00",
        date: getRandomDate(currentYear),
        description: "Buy gift for friend's birthday",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-14",
        title: "Hiking Trail",
        type: "workout",
        time: "09:00",
        date: getRandomDate(currentYear),
        description: "Explore new mountain trail",
        duration: "3h",
        color: "bg-emerald-600",
      },
      {
        id: "workout-15",
        title: "Core Workout",
        type: "workout",
        time: "06:00",
        date: getRandomDate(currentYear),
        description: "Intense core session",
        duration: "20m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-7",
        title: "Parent-Teacher Conference",
        type: "appointment",
        time: "16:30",
        date: getRandomDate(currentYear),
        description: "Discuss child's progress",
        duration: "30m",
        color: "bg-purple-600",
      },
      {
        id: "reminder-7",
        title: "Renew Subscription",
        type: "reminder",
        time: "09:00",
        date: getRandomDate(currentYear),
        description: "Software subscription renewal",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-16",
        title: "Circuit Training",
        type: "workout",
        time: "18:30",
        date: getRandomDate(currentYear),
        description: "Full body circuit at home",
        duration: "40m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-17",
        title: "Jump Rope Session",
        type: "workout",
        time: "07:00",
        date: getRandomDate(currentYear),
        description: "Cardio with jump rope",
        duration: "20m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-8",
        title: "Financial Advisor",
        type: "appointment",
        time: "10:00",
        date: getRandomDate(currentYear),
        description: "Review investment portfolio",
        duration: "1h",
        color: "bg-purple-600",
      },
      {
        id: "reminder-8",
        title: "Clean Apartment",
        type: "reminder",
        time: "14:00",
        date: getRandomDate(currentYear),
        description: "Deep clean living room and kitchen",
        duration: "2h",
        color: "bg-orange-600",
      },
      {
        id: "workout-18",
        title: "Outdoor Sprint",
        type: "workout",
        time: "06:00",
        date: getRandomDate(currentYear),
        description: "Short, intense sprints at the track",
        duration: "15m",
        color: "bg-emerald-600",
      },
      {
        id: "workout-19",
        title: "Bodyweight Strength",
        type: "workout",
        time: "17:00",
        date: getRandomDate(currentYear),
        description: "Push-ups, squats, lunges",
        duration: "30m",
        color: "bg-emerald-600",
      },
      {
        id: "appointment-9",
        title: "Veterinarian",
        type: "appointment",
        time: "11:30",
        date: getRandomDate(currentYear),
        description: "Pet's annual check-up",
        duration: "45m",
        color: "bg-purple-600",
      },
      {
        id: "reminder-9",
        title: "Submit Report",
        type: "reminder",
        time: "17:00",
        date: getRandomDate(currentYear),
        description: "Monthly progress report due",
        duration: "",
        color: "bg-orange-600",
      },
      {
        id: "workout-20",
        title: "Zumba Class",
        type: "workout",
        time: "19:00",
        date: getRandomDate(currentYear),
        description: "Fun cardio dance workout",
        duration: "1h",
        color: "bg-emerald-600",
      },
    ]
    if (typeof window !== "undefined") {
      // FOR DEMO PURPOSES: Clear local storage to ensure pre-added events are always visible on first load.
      // REMOVE THIS IN A PRODUCTION APPLICATION.
      localStorage.removeItem("regularEvents")
      const savedEvents = localStorage.getItem("regularEvents")
      return savedEvents ? JSON.parse(savedEvents) : defaultEvents
    }
    return defaultEvents
  })


  // Effect to synchronize localMealEvents with initialMealEvents prop
  // This runs only when initialMealEvents changes from the parent
  useEffect(() => {
    // Only update local state if initialMealEvents is provided and different
    // This prevents an infinite loop if parent updates initialMealEvents based on onMealEventsChange
    if (initialMealEvents !== undefined && JSON.stringify(initialMealEvents) !== JSON.stringify(localMealEvents)) {
      setLocalMealEvents(initialMealEvents)
    }
  }, [initialMealEvents]) // Only depend on initialMealEvents

  // Persist meal events to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mealEvents", JSON.stringify(localMealEvents))
    }
    // Removed onMealEventsChange from here to prevent feedback loop
  }, [localMealEvents])

  // Persist regular events to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("regularEvents", JSON.stringify(regularEvents))
    }
  }, [regularEvents])

  // Effect to populate newEvent state when editingRegularEvent changes
  useEffect(() => {
    if (editingRegularEvent) {
      setNewEvent({
        id: editingRegularEvent.id,
        title: editingRegularEvent.title,
        type: editingRegularEvent.type,
        time: editingRegularEvent.time,
        date: editingRegularEvent.date,
        description: editingRegularEvent.description || "",
        duration: editingRegularEvent.duration || "",
      })
      setSelectedDate(editingRegularEvent.date) // Ensure calendar view focuses on this date
    } else {
      // Reset newEvent when not editing
      setNewEvent({
        id: "",
        title: "",
        type: "workout",
        time: "",
        date: selectedDate, // Default to currently selected date
        description: "",
        duration: "",
      })
    }
  }, [editingRegularEvent, selectedDate])

  // Configuration
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const mealTypeConfig = {
    breakfast: {
      icon: "🌅",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-gray-200",
      time: "08:00",
      name: "Breakfast",
      gradient: "white",
    },
    lunch: {
      icon: "☀️",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-gray-200",
      time: "12:00",
      name: "Lunch",
      gradient: "white",
    },
    dinner: {
      icon: "🌙",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-gray-200",
      time: "18:00",
      name: "Dinner",
      gradient: "white",
    },
    snack: {
      icon: "🍎",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-gray-200",
      time: "15:00",
      name: "Snack",
      gradient: "white",
    },
  }

  const eventTypeConfig: Record<EventType, { icon: JSX.Element; color: string; name: string }> = {
    workout: {
      icon: <Dumbbell className="w-4 h-4" />,
      color: "bg-emerald-600",
      name: "Workout",
    },
    appointment: {
      icon: <Briefcase className="w-4 h-4" />,
      color: "bg-purple-600",
      name: "Appointment",
    },
    reminder: {
      icon: <BellRing className="w-4 h-4" />,
      color: "bg-orange-600",
      name: "Reminder",
    },
  }

  // Type guard function
  const isRegularEvent = (event: CalendarEvent): event is RegularEvent => {
    return event.type !== "meal"
  }

  // Combine meal events and regular events
  const events: CalendarEvent[] = [...localMealEvents, ...regularEvents]

  // Helper Functions
  const generateCalendarDays = (): DayData[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const today = new Date()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay()) // Adjust to start from Sunday

    const days: DayData[] = []
    const currentDayIterator = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      // 6 weeks * 7 days = 42 cells
      const isCurrentMonth = currentDayIterator.getMonth() === month
      const isToday = currentDayIterator.toDateString() === today.toDateString()
      const localYear = currentDayIterator.getFullYear()
      const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
      const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
      const dateString = `${localYear}-${localMonth}-${localDay}`

      // Sort events by time for consistent display
      const dayEvents = events.filter((event) => event.date === dateString).sort((a, b) => a.time.localeCompare(b.time))

      const totalCalories = dayEvents
        .filter((event): event is MealEvent => event.type === "meal")
        .reduce((sum, meal) => sum + meal.totalCalories, 0)

      days.push({
        date: currentDayIterator.getDate(),
        dateString,
        isCurrentMonth,
        isToday,
        events: dayEvents,
        totalCalories,
      })
      currentDayIterator.setDate(currentDayIterator.getDate() + 1)
    }
    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
      return newDate
    })
  }

  const navigateDate = (direction: "prev" | "next") => {
    const currentDateObj = new Date(selectedDate)
    const newDate = new Date(currentDateObj)
    newDate.setDate(currentDateObj.getDate() + (direction === "next" ? 1 : -1))
    setSelectedDate(newDate.toISOString().split("T")[0])
  }

  const handleAddOrUpdateRegularEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      if (editingRegularEvent) {
        // Update existing event
        const updatedEvent: RegularEvent = {
          ...newEvent,
          id: editingRegularEvent.id, // Ensure ID remains the same
          color: eventTypeConfig[newEvent.type].color,
        }
        setRegularEvents((prev) => prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)))
        setEditingRegularEvent(null) // Clear editing state
      } else {
        // Add new event
        const event: RegularEvent = {
          id: `${newEvent.type}-${Date.now()}`,
          title: newEvent.title,
          type: newEvent.type,
          time: newEvent.time,
          date: newEvent.date,
          description: newEvent.description,
          duration: newEvent.duration,
          color: eventTypeConfig[newEvent.type].color,
        }
        setRegularEvents((prev) => [...prev, event])
      }
      setNewEvent({ id: "", title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" }) // Reset form
      setCurrentView("dashboard") // Go back to dashboard after adding/updating
    }
  }

  const addFoodToMeal = (food: FoodItem) => {
    let updatedMeals: MealEvent[]
    if (editingMeal) {
      const updatedFoods = [...editingMeal.foods, { ...food, id: Date.now() + Math.random() }]
      const updatedMeal: MealEvent = {
        ...editingMeal,
        foods: updatedFoods,
        totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
        totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
        totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
        totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
      }
      updatedMeals = localMealEvents.map((meal) => (meal.id === editingMeal.id ? updatedMeal : meal))
      setEditingMeal(updatedMeal) // Keep editing the same meal after adding food
    } else {
      const newMeal: MealEvent = {
        id: `meal-${selectedMealType}-${Date.now()}`,
        title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`,
        type: "meal",
        mealType: selectedMealType,
        time: mealTypeConfig[selectedMealType].time,
        date: selectedDate,
        foods: [{ ...food, id: Date.now() + Math.random() }],
        totalCalories: food.calories || 0,
        totalProtein: food.protein || 0,
        totalCarbs: food.carbs || 0,
        totalFat: food.fat || 0,
      }
      updatedMeals = [...localMealEvents, newMeal]
    }
    setLocalMealEvents(updatedMeals) // Update internal state
    if (onMealEventsChange) {
      onMealEventsChange(updatedMeals) // Propagate change to parent
    }
    setCurrentView("dashboard") // Go back to dashboard after adding food
  }

  const removeFoodFromMeal = (mealId: string, foodId: number) => {
    const updatedMeals = localMealEvents
      .map((meal) => {
        if (meal.id === mealId) {
          const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
          if (updatedFoods.length === 0) {
            return null // Mark for removal
          }
          return {
            ...meal,
            foods: updatedFoods,
            totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
            totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
            totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
            totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
          }
        }
        return meal
      })
      .filter(Boolean) as MealEvent[] // Filter out nulls (removed meals)
    setLocalMealEvents(updatedMeals)
    if (onMealEventsChange) {
      onMealEventsChange(updatedMeals) // Propagate change to parent
    }
  }

  const deleteEvent = (eventId: string) => {
    let updatedMeals: MealEvent[] = localMealEvents
    let updatedRegularEvents: RegularEvent[] = regularEvents
    const isMealEvent = localMealEvents.some((meal) => meal.id === eventId)

    if (isMealEvent) {
      updatedMeals = localMealEvents.filter((meal) => meal.id !== eventId)
      setLocalMealEvents(updatedMeals)
      if (onMealEventsChange) {
        onMealEventsChange(updatedMeals) // Only call for meal events
      }
    } else {
      updatedRegularEvents = regularEvents.filter((event) => event.id !== eventId)
      setRegularEvents(updatedRegularEvents)
      // No onMealEventsChange for regular events, as it's specific to meals
    }
  }

  const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
    setSelectedDate(date)
    setSelectedMealType(mealType)
    setEditingMeal(null) // Ensure we're adding a new meal, not editing
    setCurrentView("food-search")
  }

  const editMeal = (meal: MealEvent) => {
    setEditingMeal(meal)
    setSelectedDate(meal.date)
    setSelectedMealType(meal.mealType)
    setCurrentView("food-search")
  }

  const editRegularEvent = (event: RegularEvent) => {
    setEditingRegularEvent(event)
    setSelectedDate(event.date) // Set selected date to the event's date
    setCurrentView("add-event")
  }

  // Derived State
  const calendarDays = generateCalendarDays()
  const selectedDateEvents = events.filter((event) => event.date === selectedDate)
  const selectedDateMeals = selectedDateEvents.filter((event): event is MealEvent => event.type === "meal")
  const selectedDateTotals = selectedDateMeals.reduce(
    (totals, meal) => ({
      calories: totals.calories + meal.totalCalories,
      protein: totals.protein + meal.totalProtein,
      carbs: totals.carbs + meal.totalCarbs,
      fat: totals.fat + meal.totalFat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  )

  const dailyGoals = { calories: 2000, protein: 150, carbs: 250, fat: 65 } // Example daily goals
  const progress = {
    calories: Math.min((selectedDateTotals.calories / dailyGoals.calories) * 100, 100),
    protein: Math.min((selectedDateTotals.protein / dailyGoals.protein) * 100, 100),
    carbs: Math.min((selectedDateTotals.carbs / dailyGoals.carbs) * 100, 100),
    fat: Math.min((selectedDateTotals.fat / dailyGoals.fat) * 100, 100),
  }

  // Get today's events for dashboard
  const todayString = new Date().toISOString().split("T")[0]
  const todayEvents = events.filter((event) => event.date === todayString)
  const todayMeals = todayEvents.filter((event): event is MealEvent => event.type === "meal")
  const todayTotals = todayMeals.reduce(
    (totals, meal) => ({
      calories: totals.calories + meal.totalCalories,
      protein: totals.protein + meal.totalProtein,
      carbs: totals.carbs + meal.totalCarbs,
      fat: totals.fat + meal.totalFat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  )
  const todayProgress = {
    calories: Math.min((todayTotals.calories / dailyGoals.calories) * 100, 100),
    protein: Math.min((todayTotals.protein / dailyGoals.protein) * 100, 100),
    carbs: Math.min((todayTotals.carbs / dailyGoals.carbs) * 100, 100),
    fat: Math.min((todayTotals.fat / dailyGoals.fat) * 100, 100),
  }

 // Navigation buttons for switching between views
// Navigation buttons for switching between views
const NavigationButtons = () => (
  <div className="flex flex-wrap gap-2 mb-6 py-4 bg-white sticky top-0 z-20">
    <Button
      onClick={() => setCurrentView("dashboard")}
      size="sm"
      className={`flex items-center ${
        currentView === "dashboard"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-white  border border-sky-500 text-sky-600 hover:bg-sky-50"
      }`}
    >
      <Home className="w-4 h-4 mr-2" />
      Dashboard
    </Button>

    <Button
      onClick={() => setCurrentView("calendar")}
      size="sm"
      className={`flex items-center ${
        currentView === "calendar"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-white   border border-sky-500 text-sky-600 hover:bg-sky-50"
      }`}
    >
      <Calendar className="w-4 h-4 mr-2" />
      Calendar
    </Button>

    <Button
      onClick={() => setCurrentView("meal-planner")}
      size="sm"
      className={`flex items-center ${
        currentView === "meal-planner"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-white  border border-sky-500 text-sky-600 hover:bg-sky-50"
      }`}
    >
      <ChefHat className="w-4 h-4 mr-2" />
      Meal Planner
    </Button>

    <Button
      onClick={() => setCurrentView("food-search")}
      size="sm"
      className={`flex items-center ${
        currentView === "food-search"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-white  border border-sky-500 text-sky-600 hover:bg-sky-50"
      }`}
    >
      <Search className="w-4 h-4 mr-2" />
      Food Search
    </Button>
  </div>
);



  return (
    <div className="min-h-screen bg-white">
      <NavigationButtons />
      {/* Dashboard View */}
      {currentView === "dashboard" && (
        //  <main className="p-4 lg:p-6 max-w-7xl mx-auto"></main>
        <main className=" bg-white">
          {" "}
          {/* Added max-w-7xl mx-auto for content centering */}
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
              Good {new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening"}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          {/* Today's Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Nutrition Progress */}
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Today's Nutrition
                </h2>
                <Badge variant={todayProgress.calories >= 80 ? "success" : "warning"}>
                  {Math.round(todayProgress.calories)}% Complete
                </Badge>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    {" "}
                    {/* Added shadow-md */}
                    <Fire className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{todayTotals.calories}</div>
                  <div className="text-gray-600 text-sm">Calories</div>
                  <div className="text-xs text-gray-500">Goal: {dailyGoals.calories}</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    {" "}
                    {/* Added shadow-md */}
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{todayTotals.protein}g</div>
                  <div className="text-gray-600 text-sm">Protein</div>
                  <div className="text-xs text-gray-500">Goal: {dailyGoals.protein}g</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    {" "}
                    {/* Added shadow-md */}
                    <Apple className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{todayTotals.carbs}g</div>
                  <div className="text-gray-600 text-sm">Carbs</div>
                  <div className="text-xs text-gray-500">Goal: {dailyGoals.carbs}g</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    {" "}
                    {/* Added shadow-md */}
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{todayTotals.fat}g</div>
                  <div className="text-gray-600 text-sm">Fat</div>
                  <div className="text-xs text-gray-500">Goal: {dailyGoals.fat}g</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>Calories</span>
                    <span>
                      {todayTotals.calories} / {dailyGoals.calories}
                    </span>
                  </div>
                  <Progress value={todayProgress.calories} color="red" />
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>Protein</span>
                    <span>
                      {todayTotals.protein}g / {dailyGoals.protein}g
                    </span>
                  </div>
                  <Progress value={todayProgress.protein} color="green" />
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>Carbs</span>
                    <span>
                      {todayTotals.carbs}g / {dailyGoals.carbs}g
                    </span>
                  </div>
                  <Progress value={todayProgress.carbs} color="yellow" />
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>Fat</span>
                    <span>
                      {todayTotals.fat}g / {dailyGoals.fat}g
                    </span>
                  </div>
                  <Progress value={todayProgress.fat} color="purple" />
                </div>
              </div>
            </Card>
            {/* Quick Actions */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setSelectedDate(todayString)
                    setCurrentView("meal-planner")
                  }}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <ChefHat className="w-4 h-4 mr-3" />
                  Plan Today's Meals
                </Button>
                <Button
                  onClick={() => setCurrentView("food-search")}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Search className="w-4 h-4 mr-3" />
                  Find Recipes
                </Button>
                <Button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: todayString }))
                    setEditingRegularEvent(null) // Ensure adding new
                    setCurrentView("add-event")
                  }}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <PlusCircle className="w-4 h-4 mr-3" />
                  Add Event
                </Button>
                <Button onClick={() => setCurrentView("calendar")} variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-3" />
                  View Calendar
                </Button>
              </div>
            </Card>
          </div>
          {/* Today's Meals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-emerald-600" />
                  Today's Meals
                </h2>
                <Button
                  onClick={() => {
                    setSelectedDate(todayString)
                    setCurrentView("meal-planner")
                  }}
                  size="sm"
                  variant="primary"
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Meal
                </Button>
              </div>
              {todayMeals.length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(mealTypeConfig).map(([type, config]) => {
                    const meal = todayMeals.find((m) => m.mealType === type)
                    return (
                      <div key={type} className={`p-4 rounded-lg border-2 ${config.borderColor} ${config.bgColor}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{config.icon}</div>
                            <div>
                              <h3 className={`font-semibold ${config.textColor}`}>{config.name}</h3>
                              <p className="text-xs text-gray-600">{config.time}</p>
                            </div>
                          </div>
                          {meal ? (
                            <div className="text-right">
                              <Badge variant="success" className="mb-1">
                                {meal.totalCalories} cal
                              </Badge>
                              <p className="text-xs text-gray-600">{meal.foods.length} items</p>
                            </div>
                          ) : (
                            <Button onClick={() => startNewMeal(todayString, type as any)} size="sm" variant="ghost">
                              <PlusCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <ChefHat className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No meals planned</h3>
                  <p className="text-gray-600 mb-4">Start planning your meals for today!</p>
                  <Button
                    onClick={() => {
                      setSelectedDate(todayString)
                      setCurrentView("meal-planner")
                    }}
                    variant="primary"
                  >
                    Plan Meals
                  </Button>
                </div>
              )}
            </Card>
            {/* Today's Events */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  Today's Events
                </h2>
                <Button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: todayString }))
                    setEditingRegularEvent(null) // Ensure adding new
                    setCurrentView("add-event")
                  }}
                  size="sm"
                  variant="primary"
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Event
                </Button>
              </div>
              {todayEvents.filter((e) => e.type !== "meal").length > 0 ? (
                <div className="space-y-3">
                  {todayEvents
                    .filter((e) => e.type !== "meal")
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((event) => {
                      if (isRegularEvent(event)) {
                        return (
                          <div
                            key={event.id}
                            className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-4 shadow-sm`}
                          >
                            {" "}
                            {/* Added shadow-sm */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {eventTypeConfig[event.type].icon}
                                <div>
                                  <h3 className="font-semibold">{event.title}</h3>
                                  <p className="text-sm text-white/90">
                                    {event.time} {event.duration && `• ${event.duration}`}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
                                  <Edit className="w-4 h-4 text-white/80" />
                                </Button>
                                <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4 text-white/80" />
                                </Button>
                              </div>
                            </div>
                            {event.description && <p className="text-sm text-white/90 mt-2">{event.description}</p>}
                          </div>
                        )
                      }
                      return null
                    })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarDays className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No events today</h3>
                  <p className="text-gray-600 mb-4">Add workouts, appointments, or reminders!</p>
                  <Button
                    onClick={() => {
                      setNewEvent((prev) => ({ ...prev, date: todayString }))
                      setEditingRegularEvent(null) // Ensure adding new
                      setCurrentView("add-event")
                    }}
                    variant="primary"
                  >
                    Add Event
                  </Button>
                </div>
              )}
            </Card>
          </div>
          {/* Weekly Overview */}
          <Card className="p-4 sm:p-6 shadow-md border border-gray-100 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                This Week's Overview
              </h2>
              <Button
                onClick={() => setCurrentView("calendar")}
                variant="outline"
                size="sm"
                className="text-sm border-gray-300 hover:bg-emerald-50 hover:border-emerald-500"
              >
                View Full Calendar
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            {/* Scrollable horizontal timeline */}
            <div className="flex gap-3 overflow-x-auto pb-2 px-1 snap-x snap-mandatory -mx-1 sm:grid sm:grid-cols-7 sm:gap-2 sm:overflow-visible custom-scrollbar">
              {Array.from({ length: 7 }, (_, i) => {
                const date = new Date()
                date.setDate(date.getDate() - date.getDay() + i)
                const dateString = date.toISOString().split("T")[0]
                const dayEvents = events.filter((event) => event.date === dateString)
                const dayMeals = dayEvents.filter((event): event is MealEvent => event.type === "meal")
                const dayCalories = dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)
                const isToday = dateString === todayString
                return (
                  <div
                    key={i}
                    className={`snap-start min-w-[90px] sm:min-w-0 bg-white p-3 rounded-xl border transition-all duration-200 text-center cursor-pointer group flex-shrink-0
            ${isToday ? "border-emerald-500 bg-emerald-50 shadow-md" : ""}
            ${!isToday && dayEvents.length > 0 ? "border-gray-200 bg-gray-50" : ""}
            ${!isToday && dayEvents.length === 0 ? "border-gray-100 hover:bg-gray-50" : ""}
          `}
                    onClick={() => {
                      setSelectedDate(dateString)
                      setCurrentView("meal-planner")
                    }}
                  >
                    <div className="text-xs font-semibold text-gray-500 group-hover:text-emerald-600">
                      {date.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className={`text-lg font-bold mb-1 ${isToday ? "text-emerald-600" : "text-gray-800"}`}>
                      {date.getDate()}
                    </div>
                    {dayCalories > 0 && (
                      <Badge
                        variant="success"
                        className="text-xs font-medium bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform"
                      >
                        {dayCalories} cal
                      </Badge>
                    )}
                    {dayEvents.filter((e) => e.type !== "meal").length > 0 && (
                      <div className="flex justify-center mt-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </Card>
        </main>
      )}
      {/* Calendar View */}
      {currentView === "calendar" && (
        <main className="w-full  py-4 bg-white">
          {" "}
          {/* Added max-w-7xl mx-auto */}
          {/* Calendar Header */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8"> */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigateMonth("prev")} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <Button onClick={() => navigateMonth("next")} variant="outline" size="sm">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setCurrentDate(new Date())
                  setSelectedDate(new Date().toISOString().split("T")[0])
                }}
                variant="outline"
                size="sm"
              >
                Today
              </Button>
              <Button
                onClick={() => {
                  setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                  setEditingRegularEvent(null) // Ensure adding new
                  setCurrentView("add-event")
                }}
                variant="primary"
                size="sm"
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                Add Event
              </Button>
            </div>
          </div>
          {/* Calendar Grid / List */}
          <Card className="mb-8 border-none shadow-none" padding="none">
            {/* Week Days Header - Hidden on small screens */}
            <div className="hidden sm:grid grid-cols-7 ">
              {weekDays.map((day) => (
                <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-white">
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar Days - Responsive Grid/List */}
            <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">
              {calendarDays.map((day, index) => (
                <div
                  key={`${day.dateString}-${index}`}
                  className={`    p-4 gap-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-md border    ${!day.isCurrentMonth ? "bg-gray-50/50 text-gray-400" : ""}    ${day.isToday ? "bg-emerald-50 border-emerald-200" : ""}    ${selectedDate === day.dateString ? "ring-2 ring-emerald-500 ring-inset shadow-md" : ""}    sm:min-h-[120px] sm:p-2
    ${(index + 1) % 7 !== 0 ? "sm:border-r" : ""}  `}
                  onClick={() => {
                    setSelectedDate(day.dateString)
                    setCurrentView("meal-planner") // Navigate to meal planner on day click
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium ${
                        day.isToday
                          ? "bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center"
                          : ""
                      }`}
                    >
                      {day.date}
                    </span>
                    {day.totalCalories > 0 && (
                      <Badge variant="success" className="text-xs">
                        {day.totalCalories}
                      </Badge>
                    )}
                  </div>
                  {/* Events */}
                  <div className="space-y-1">
                    {day.events.slice(0, 3).map((event) => {
                      if (event.type === "meal") {
                        const mealEvent = event as MealEvent
                        const config = mealTypeConfig[mealEvent.mealType]
                        return (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded ${config.bgColor} ${config.textColor} truncate flex items-center gap-1`}
                          >
                            {config.icon} {mealEvent.time} {mealEvent.mealType}
                          </div>
                        )
                      } else {
                        const regularEvent = event as RegularEvent
                        return (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded text-white truncate ${regularEvent.color} flex items-center gap-1`}
                          >
                            {eventTypeConfig[regularEvent.type].icon} {regularEvent.time} {regularEvent.title}
                          </div>
                        )
                      }
                    })}
                    {day.events.length > 3 && (
                      <div className="text-xs text-gray-500 font-medium">+{day.events.length - 3} more</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          {/* Selected Date Details */}
          {selectedDate && (
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h2>
                <Button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                    setEditingRegularEvent(null) // Ensure adding new
                    setCurrentView("add-event")
                  }}
                  variant="primary"
                  size="sm"
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Event
                </Button>
              </div>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {/* Meals */}
                  {selectedDateMeals.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <ChefHat className="w-4 h-4" />
                        Meals ({selectedDateMeals.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedDateMeals.map((meal) => {
                          const config = mealTypeConfig[meal.mealType]
                          return (
                            <div
                              key={meal.id}
                              className={`p-4 rounded-lg border-2 ${config.borderColor} ${config.bgColor} shadow-sm`}
                            >
                              {" "}
                              {/* Added shadow-sm */}
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">{config.icon}</span>
                                  <div>
                                    <h4 className={`font-semibold ${config.textColor}`}>{config.name}</h4>
                                    <p className="text-xs text-gray-600">{meal.time}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="success">{meal.totalCalories} cal</Badge>
                                  <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
                                    <Edit className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{meal.foods.length} items</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  {/* Other Events */}
                  {selectedDateEvents.filter((e) => e.type !== "meal").length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Events ({selectedDateEvents.filter((e) => e.type !== "meal").length})
                      </h3>
                      <div className="space-y-3">
                        {selectedDateEvents
                          .filter((e) => e.type !== "meal")
                          .sort((a, b) => a.time.localeCompare(b.time))
                          .map((event) => {
                            if (isRegularEvent(event)) {
                              return (
                                <div
                                  key={event.id}
                                  className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-4 shadow-sm`}
                                >
                                  {" "}
                                  {/* Added shadow-sm */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      {eventTypeConfig[event.type].icon}
                                      <div>
                                        <h4 className="font-semibold">{event.title}</h4>
                                        <p className="text-sm text-white/90">
                                          {event.time} {event.duration && `• ${event.duration}`}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
                                        <Edit className="w-4 h-4 text-white/80" />
                                      </Button>
                                      <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
                                        <Trash2 className="w-4 h-4 text-white/80" />
                                      </Button>
                                    </div>
                                  </div>
                                  {event.description && (
                                    <p className="text-sm text-white/90 mt-2">{event.description}</p>
                                  )}
                                </div>
                              )
                            }
                            return null
                          })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarDays className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No events planned</h3>
                  <p className="text-gray-600 mb-4">Add meals, workouts, or appointments for this day!</p>
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={() => {
                        setSelectedDate(selectedDate)
                        setCurrentView("meal-planner")
                      }}
                      variant="primary"
                    >
                      Plan Meals
                    </Button>
<Button
  onClick={() => {
    setNewEvent((prev) => ({ ...prev, date: selectedDate }));
    setEditingRegularEvent(null);
    setCurrentView("add-event");
  }}
  className="border border-[#00AEEF] text-[#00AEEF] hover:bg-[#E0F7FF] transition-all duration-200"
>
  Add Event
</Button>

                  </div>
                </div>
              )}
            </Card>
          )}
        </main>
      )}
      {/* Meal Planner View */}
      {currentView === "meal-planner" && (
        <main className="bg-white">
          {" "}
          {/* Added max-w-7xl mx-auto */}
          {/* Enhanced Header with Date Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigateDate("prev")} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="text-center">
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
                <p className="text-sm text-gray-600">Meal Plan</p>
              </div>
              <Button onClick={() => navigateDate("next")} variant="outline" size="sm">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {/* Enhanced Meal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {Object.entries(mealTypeConfig).map(([type, config]) => {
              const meal = selectedDateMeals.find((m) => m.mealType === type)
              return (
                <div key={type}>
                  <Card
                    className={`relative overflow-hidden ${
                      meal ? "flex flex-col h-full min-h-[320px]" : "min-h-[200px]"
                    }
                     ${config.bgColor} border-2 ${config.borderColor} shadow-lg`}
                  >
                    {" "}
                    {/* Increased shadow to shadow-lg */}
                    {/* Decorative Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-5`} />
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div
                          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold bg-white shadow-md`}
                        >
                          {" "}
                          {/* Added shadow-md */}
                          {config.icon}
                        </div>
                        <div>
                          <h2 className={`text-lg lg:text-xl font-bold ${config.textColor}`}>{config.name}</h2>
                          <p className="text-xs text-gray-600">{config.time}</p>
                        </div>
                      </div>
                      {meal ? (
                        <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </Button>
                      ) : (
                        <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
                          <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
                        </Button>
                      )}
                    </div>
                    <div className="relative z-10 flex-1 flex flex-col">
                      {meal ? (
                        <>
                          <div className="space-y-4">
                            {/* Nutrition Summary */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-white/50 shadow-sm">
                              {" "}
                              {/* Added shadow-sm */}
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-700 font-medium text-sm lg:text-base">Total Calories:</span>
                                <Badge variant="info" className="text-sm lg:text-base font-bold">
                                  {meal.totalCalories} kcal
                                </Badge>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm text-gray-700">
                                <div className="text-center">
                                  <div className="font-bold text-emerald-600">{meal.totalProtein}g</div>
                                  <div>Protein</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-yellow-600">{meal.totalCarbs}g</div>
                                  <div>Carbs</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-purple-600">{meal.totalFat}g</div>
                                  <div>Fat</div>
                                </div>
                              </div>
                            </div>
                            {/* Foods List */}
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-3 text-sm lg:text-base flex items-center gap-2">
                                <Utensils className="w-4 h-4" />
                                Foods ({meal.foods.length})
                              </h3>
                              <div className="space-y-2 max-h-32 lg:max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                {meal.foods.map((food, index) => (
                                  <div
                                    key={`${food.id}-${index}`}
                                    className="flex items-center justify-between text-xs lg:text-sm bg-white/50 rounded-lg p-2 shadow-xs"
                                  >
                                    {" "}
                                    {/* Added shadow-xs (custom, or use shadow-sm if not available) */}
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={food.image || "/placeholder.svg?height=32&width=32"}
                                        alt={food.title}
                                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover"
                                      />
                                      <span className="font-medium text-gray-900 line-clamp-1">{food.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-gray-600 font-medium">{food.calories} cal</span>
                                      <Button
                                        onClick={() => removeFoodFromMeal(meal.id, food.id)}
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 p-1 hover:bg-red-50"
                                      >
                                        <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button onClick={() => editMeal(meal)} variant="primary" size="sm" className="flex-1">
                                <PlusCircle className="w-3 h-3 mr-1" />
                                Add Food
                              </Button>
                              <Button onClick={() => deleteEvent(meal.id)} variant="danger" size="sm" className="px-3">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8 text-gray-600 flex-1 flex flex-col items-center justify-center">
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} opacity-20 flex items-center justify-center mb-4`}
                          >
                            <Utensils className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="text-sm lg:text-base mb-4">No {config.name.toLowerCase()} planned</p>
                          <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Plan {config.name}
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
          {/* Enhanced Daily Summary */}
          <Card className="mb-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-lg">
            {" "}
            {/* Increased shadow to shadow-lg */}
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-gray-700" /> Daily Nutrition Summary
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                {" "}
                {/* Added shadow-md */}
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {" "}
                  {/* Added shadow-sm */}
                  <Fire className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.calories}</div>
                <div className="text-gray-600 text-sm lg:text-base">Calories</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.calories}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                {" "}
                {/* Added shadow-md */}
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {" "}
                  {/* Added shadow-sm */}
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.protein}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Protein</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.protein}g</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                {" "}
                {/* Added shadow-md */}
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {" "}
                  {/* Added shadow-sm */}
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.carbs}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Carbs</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.carbs}g</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                {" "}
                {/* Added shadow-md */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {" "}
                  {/* Added shadow-sm */}
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.fat}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Fat</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.fat}g</div>
              </div>
            </div>
            {/* Progress Bars */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Daily Progress</span>
                  <span>{Math.round((selectedDateTotals.calories / dailyGoals.calories) * 100)}% Complete</span>
                </div>
                <Progress value={progress.calories} color="red" className="h-2" />
              </div>
            </div>
          </Card>
          {/* Other Events for Selected Date */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> Other Events
              </h2>
              <Button
                onClick={() => {
                  setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                  setEditingRegularEvent(null) // Ensure adding new
                  setCurrentView("add-event")
                }}
                size="sm"
                variant="primary"
              >
                <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
              </Button>
            </div>
            {selectedDateEvents.filter((e) => e.type !== "meal").length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents
                  .filter((e) => e.type !== "meal")
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((event) => {
                    if (isRegularEvent(event)) {
                      return (
                        <div
                          key={event.id}
                          className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-3 lg:p-4 shadow-md`}
                        >
                          {" "}
                          {/* Increased shadow to shadow-md */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {eventTypeConfig[event.type].icon}
                              <div>
                                <h3 className="font-semibold text-sm lg:text-base">{event.title}</h3>
                                <p className="text-xs lg:text-sm text-white/90">
                                  {event.time} {event.duration && `• ${event.duration}`}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button onClick={() => editRegularEvent(event)} variant="ghost" size="sm">
                                <Edit className="w-4 h-4 text-white/80" />
                              </Button>
                              <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
                                <Trash2 className="w-4 h-4 text-white/80" />
                              </Button>
                            </div>
                          </div>
                          {event.description && (
                            <p className="text-xs lg:text-sm text-white/90 mt-2">{event.description}</p>
                          )}
                        </div>
                      )
                    }
                    return null
                  })}
              </div>
            ) : (
              <div className="text-center py-6 lg:py-8">
                <CalendarDays className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No other events</h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Add workouts, appointments, or reminders!</p>
                <Button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                    setEditingRegularEvent(null) // Ensure adding new
                    setCurrentView("add-event")
                  }}
                  variant="primary"
                >
                  Add Event
                </Button>
              </div>
            )}
          </Card>
        </main>
      )}
      {/* Food Search View */}
      {currentView === "food-search" && (
        <main className="">
          {" "}
          {/* Added max-w-7xl mx-auto */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
              {editingMeal ? "Add Food to Meal" : "Find Food & Recipes"}
            </h1>
            <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              onClick={() => setSearchType("recipes")}
              variant={searchType === "recipes" ? "primary" : "outline"}
              size="sm"
            >
              Recipes
            </Button>
            <Button
              onClick={() => setSearchType("ingredients")}
              variant={searchType === "ingredients" ? "primary" : "outline"}
              size="sm"
            >
              Ingredients
            </Button>
          </div>
          <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
        </main>
      )}
      {/* Add Event View */}
      {currentView === "add-event" && (
        <main className="">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 ">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
              {editingRegularEvent ? "Edit Event" : "Add New Event"}
            </h1>
            <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
            </Button>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
            {/* Left side: Form */}
            <div className="lg:col-span-1 lg:mx-auto lg:w-full">
              <Card className="w-full shadow-lg p-0 overflow-hidden">
                <div className="bg-emerald-600 text-white p-6 sm:p-8 flex items-center gap-4 mb-2">
                  <PlusCircle className="w-8 h-8" />
                  <h2 className="text-xl md:text-2xl font-bold">
                    {editingRegularEvent ? "Edit Event Details" : "Create New Event"}
                  </h2>
                </div>
                <div className=" space-y-6">
                  {/* Event Title */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      id="event-title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="e.g., Gym Workout, Dentist Appointment"
                    />
                  </div>
                  {/* Event Type */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <div className="relative">
                      <select
                        id="event-type"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white text-gray-900 appearance-none pr-10"
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as EventType })}
                      >
                        {Object.entries(eventTypeConfig).map(([type, config]) => (
                          <option key={type} value={type}>
                            {config.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        id="event-date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      />
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <label htmlFor="event-time" className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        id="event-time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                      />
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label htmlFor="event-duration" className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (optional)
                    </label>
                    <input
                      type="text"
                      id="event-duration"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 bg-white"
                      value={newEvent.duration}
                      onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
                      placeholder="e.g., 1 hour, 30 min, 20 mins laps"
                    />
                  </div>
                  {/* Description */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description (optional)
                    </label>
                    <textarea
                      id="event-description"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 resize-y bg-white"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      placeholder="Any notes for this event..."
                    ></textarea>
                  </div>
                  <Button onClick={handleAddOrUpdateRegularEvent} variant="primary" className="w-full py-3 text-base">
                    {editingRegularEvent ? "Save Changes" : "Add Event"}
                  </Button>
                </div>
              </Card>
            </div>
            {/* Right side: Image/Content (hidden on small screens) */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center p-4 shadow rounded-md">
              <div className="bg-white rounded-2xl p-6 w-full ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvjU4YPjwggKZFQ6oO9jhPWruiY8SiVmOjw&s"
                  alt="Event planning illustration"
                  className="rounded-xl w-full h-auto object-cover mb-5"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Stay Organized, Effortlessly</h3>
                <p className="text-gray-600 text-sm mb-6">
                  From workouts to appointments, manage everything in one place with a sleek and intuitive interface.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CalendarDays className="w-5 h-5 text-emerald-500 mt-1" />
                    <span className="text-sm text-gray-800">Plan your schedule with ease.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Dumbbell className="w-5 h-5 text-emerald-500 mt-1" />
                    <span className="text-sm text-gray-800">Track your fitness journey effortlessly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BellRing className="w-5 h-5 text-emerald-500 mt-1" />
                    <span className="text-sm text-gray-800">Never miss a reminder or important moment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default CalendarApp

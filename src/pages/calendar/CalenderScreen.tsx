
// import { useState } from "react"
// import {
//   CalendarDays,
//   ChefHat,
//   PlusCircle,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   Edit,
//   Trash2,
//   Dumbbell,
//   Calendar,
//   Briefcase,
//   BellRing,
// } from "lucide-react"
// import { Button } from "../../components/ui/button"
// import { FoodSearch } from "../../components/food-search"
// import { Badge } from "../../components/ui/badge"

// // --- Interfaces (Remain the same) ---
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

// interface MealEvent {
//   id: string
//   title: string
//   type: "meal"
//   mealType: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string // ISO-MM-DD
//   foods: FoodItem[]
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface RegularEvent {
//   id: string
//   title: string
//   type: "workout" | "appointment" | "reminder"
//   time: string
//   date: string // ISO-MM-DD
//   description?: string
//   duration?: string
//   color: string // Tailwind color class, e.g., "bg-blue-500"
// }

// type CalendarEvent = MealEvent | RegularEvent

// interface DayData {
//   date: number
//   dateString: string // ISO-MM-DD
//   isCurrentMonth: boolean
//   isToday: boolean
//   events: CalendarEvent[]
//   totalCalories: number
// }

// type View = "calendar" | "meal-planner" | "food-search" | "add-event"

// // --- Main CalendarScreen Component ---
// const CalendarScreen = () => {
//   const [currentView, setCurrentView] = useState<View>("calendar")
//   const [currentDate, setCurrentDate] = useState(new Date())
//   // Initialize selectedDate to today's date in ISO-MM-DD format
//   const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
//   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
//   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
//   const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)

//   // New event form state
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     type: "workout" as "workout" | "appointment" | "reminder",
//     time: "",
//     date: selectedDate, // Pre-fill with currently selected date
//     description: "",
//     duration: "",
//   })

//   // Sample Data (Pre-populating for demonstration)
//   const [events, setEvents] = useState<CalendarEvent[]>([
//     {
//       id: "meal-1-20250628",
//       title: "Morning Oats",
//       type: "meal",
//       mealType: "breakfast",
//       time: "08:00",
//       date: "2025-06-28", // Today
//       foods: [
//         {
//           id: 1,
//           title: "Oatmeal with Berries",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 300,
//           protein: 10,
//           carbs: 50,
//           fat: 5,
//         },
//       ],
//       totalCalories: 300,
//       totalProtein: 10,
//       totalCarbs: 50,
//       totalFat: 5,
//     } as MealEvent,
//     {
//       id: "workout-1-20250628",
//       title: "Morning Run",
//       type: "workout",
//       time: "07:00",
//       date: "2025-06-28", // Today
//       description: "30 min outdoor run",
//       duration: "30m",
//       color: "bg-blue-600",
//     } as RegularEvent,
//     {
//       id: "meal-2-20250629",
//       title: "Chicken Salad Lunch",
//       type: "meal",
//       mealType: "lunch",
//       time: "13:00",
//       date: "2025-06-29", // Tomorrow
//       foods: [
//         {
//           id: 2,
//           title: "Grilled Chicken Salad",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 450,
//           protein: 40,
//           carbs: 20,
//           fat: 20,
//         },
//       ],
//       totalCalories: 450,
//       totalProtein: 40,
//       totalCarbs: 20,
//       totalFat: 20,
//     } as MealEvent,
//     {
//       id: "appointment-1-20250629",
//       title: "Dentist Check-up",
//       type: "appointment",
//       time: "10:00",
//       date: "2025-06-29", // Tomorrow
//       description: "Routine dental cleaning",
//       duration: "1h",
//       color: "bg-purple-600",
//     } as RegularEvent,
//     {
//       id: "reminder-1-20250629",
//       title: "Pay Bills",
//       type: "reminder",
//       time: "17:00",
//       date: "2025-06-29", // Tomorrow
//       description: "Electricity and internet bills due",
//       color: "bg-orange-500",
//     } as RegularEvent,
//     {
//       // Adding sample event for June 1st specifically to test the fix for "1"
//       id: "test-event-20250601",
//       title: "Sample Event",
//       type: "appointment",
//       time: "10:00",
//       date: "2025-06-01",
//       description: "Testing date display for first of month",
//       duration: "1h",
//       color: "bg-green-600",
//     } as RegularEvent,
//     {
//       id: "meal-3-20250601", // Another meal on June 1st
//       title: "Pasta Dinner",
//       type: "meal",
//       mealType: "dinner",
//       time: "19:00",
//       date: "2025-06-01",
//       foods: [
//         {
//           id: 3,
//           title: "Spaghetti Bolognese",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 600,
//           protein: 30,
//           carbs: 80,
//           fat: 25,
//         },
//       ],
//       totalCalories: 600,
//       totalProtein: 30,
//       totalCarbs: 80,
//       totalFat: 25,
//     } as MealEvent,
//     {
//       id: "snack-20250601", // Snack on June 1st
//       title: "Fruit Smoothie",
//       type: "meal",
//       mealType: "snack",
//       time: "16:00",
//       date: "2025-06-01",
//       foods: [
//         {
//           id: 4,
//           title: "Berry Smoothie",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 180,
//           protein: 5,
//           carbs: 30,
//           fat: 2,
//         },
//       ],
//       totalCalories: 180,
//       totalProtein: 5,
//       totalCarbs: 30,
//       totalFat: 2,
//     } as MealEvent,
//   ])

//   // --- Configuration Objects ---
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
//   const weekDaysMobile = ["S", "M", "T", "W", "T", "F", "S"] // Shorter for mobile

//   const mealTypeConfig = {
//     breakfast: { icon: "🌅", color: "bg-orange-100 text-orange-800", time: "08:00", initial: "B" },
//     lunch: { icon: "☀️", color: "bg-yellow-100 text-yellow-800", time: "12:00", initial: "L" },
//     dinner: { icon: "🌙", color: "bg-blue-100 text-blue-800", time: "18:00", initial: "D" },
//     snack: { icon: "🍎", color: "bg-green-100 text-green-800", time: "15:00", initial: "S" },
//   }

//   const eventTypeConfig = {
//     workout: { icon: <Dumbbell className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />, color: "bg-blue-600" },
//     appointment: { icon: <Briefcase className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />, color: "bg-purple-600" },
//     reminder: { icon: <BellRing className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />, color: "bg-orange-500" },
//   }

//   // --- Helper Functions ---
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
//       // 6 weeks * 7 days
//       const isCurrentMonth = currentDayIterator.getMonth() === month
//       const isToday = currentDayIterator.toDateString() === today.toDateString()

//       // Ensure dateString is always the ISO-MM-DD part of the local date
//       const localYear = currentDayIterator.getFullYear()
//       const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
//       const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
//       const dateString = `${localYear}-${localMonth}-${localDay}`

//       const dayEvents = events.filter((event) => event.date === dateString)
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

//   const addRegularEvent = () => {
//     if (newEvent.title && newEvent.date && newEvent.time) {
//       const event: RegularEvent = {
//         id: Date.now().toString(),
//         title: newEvent.title,
//         type: newEvent.type,
//         time: newEvent.time,
//         date: newEvent.date,
//         description: newEvent.description,
//         duration: newEvent.duration,
//         color: eventTypeConfig[newEvent.type].color,
//       }

//       setEvents((prev) => [...prev, event])
//       setNewEvent({ title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" })
//       setCurrentView("meal-planner") // Return to meal planner after adding
//     }
//   }

//   const addFoodToMeal = (food: FoodItem) => {
//     if (editingMeal) {
//       // Add to existing meal
//       const updatedFoods = [...editingMeal.foods, food]
//       const updatedMeal: MealEvent = {
//         ...editingMeal,
//         foods: updatedFoods,
//         totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//         totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//         totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//         totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//       }

//       setEvents((prev) => prev.map((event) => (event.id === editingMeal.id ? updatedMeal : event)))
//       setEditingMeal(updatedMeal) // Update editingMeal state
//     } else {
//       // Create new meal
//       const newMeal: MealEvent = {
//         id: Date.now().toString(),
//         title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`, // Just meal type title, food items are listed inside
//         type: "meal",
//         mealType: selectedMealType,
//         time: mealTypeConfig[selectedMealType].time,
//         date: selectedDate,
//         foods: [food],
//         totalCalories: food.calories || 0,
//         totalProtein: food.protein || 0,
//         totalCarbs: food.carbs || 0,
//         totalFat: food.fat || 0,
//       }

//       setEvents((prev) => [...prev, newMeal])
//     }

//     setCurrentView("meal-planner")
//   }

//   const removeFoodFromMeal = (mealId: string, foodId: number) => {
//     setEvents(
//       (prev) =>
//         prev
//           .map((event) => {
//             if (event.type === "meal" && event.id === mealId) {
//               const meal = event as MealEvent
//               const updatedFoods = meal.foods.filter((food) => food.id !== foodId)

//               // If no foods left, delete the meal event entirely
//               if (updatedFoods.length === 0) {
//                 return null // Mark for removal
//               }

//               return {
//                 ...meal,
//                 foods: updatedFoods,
//                 totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//                 totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//                 totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//                 totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//               }
//             }

//             return event
//           })
//           .filter(Boolean) as CalendarEvent[], // Filter out nulls
//     )
//   }

//   const deleteEvent = (eventId: string) => {
//     setEvents((prev) => prev.filter((event) => event.id !== eventId))
//   }

//   const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
//     setSelectedDate(date)
//     setSelectedMealType(mealType)
//     setEditingMeal(null) // Ensure we're creating a new meal, not editing
//     setCurrentView("food-search")
//   }

//   const editMeal = (meal: MealEvent) => {
//     setEditingMeal(meal)
//     setSelectedDate(meal.date)
//     setSelectedMealType(meal.mealType)
//     setCurrentView("food-search") // Go to food search to add/remove foods from this meal
//   }

//   // --- Derived State for current view ---
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

//   // --- Conditional Rendering for Views ---

//   // Add Event View
//   if (currentView === "add-event") {
//     return (
//       <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 bg-gray-50 min-h-screen font-sans">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200">
//           <div className="flex items-center gap-3 sm:gap-4">
//             <Button
//               variant="outline"
//               onClick={() => setCurrentView("meal-planner")}
//               className="shadow-sm hover:shadow-md text-sm sm:text-base"
//             >
//               ← Back
//             </Button>
//             <div>
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Add New Event</h2>
//               <p className="text-gray-600 text-xs sm:text-sm">
//                 Create a workout, appointment, or reminder for {new Date(newEvent.date).toLocaleDateString()}.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-1">
//                 Event Title
//               </label>
//               <input
//                 id="event-title"
//                 type="text"
//                 className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="e.g., Yoga Session, Project Deadline"
//               />
//             </div>

//             <div>
//               <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
//                 Event Type
//               </label>
//               <select
//                 id="event-type"
//                 className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 value={newEvent.type}
//                 onChange={(e) => setNewEvent((prev) => ({ ...prev, type: e.target.value as any }))}
//               >
//                 <option value="workout">🏋️ Workout</option>
//                 <option value="appointment">👥 Appointment</option>
//                 <option value="reminder">⏰ Reminder</option>
//               </select>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-1">
//                   Date
//                 </label>
//                 <input
//                   id="event-date"
//                   type="date"
//                   className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                   value={newEvent.date}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, date: e.target.value }))}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="event-time" className="block text-sm font-medium text-gray-700 mb-1">
//                   Time
//                 </label>
//                 <input
//                   id="event-time"
//                   type="time"
//                   className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                   value={newEvent.time}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, time: e.target.value }))}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="event-duration" className="block text-sm font-medium text-gray-700 mb-1">
//                 Duration (optional)
//               </label>
//               <input
//                 id="event-duration"
//                 type="text"
//                 className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 value={newEvent.duration}
//                 onChange={(e) => setNewEvent((prev) => ({ ...prev, duration: e.target.value }))}
//                 placeholder="e.g., 1h, 30m"
//               />
//             </div>

//             <div>
//               <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-1">
//                 Description (optional)
//               </label>
//               <textarea
//                 id="event-description"
//                 className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 rows={3}
//                 value={newEvent.description}
//                 onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
//                 placeholder="Add more details about the event..."
//               />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-3 mt-6">
//             <Button
//               variant="outline"
//               onClick={() => setCurrentView("meal-planner")}
//               className="flex-1 shadow-sm hover:shadow-md"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={addRegularEvent}
//               className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
//             >
//               Add Event
//             </Button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Food Search View
//   if (currentView === "food-search") {
//     return (
//       <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 bg-gray-50 min-h-screen font-sans">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200">
//           <div className="flex items-center gap-3 sm:gap-4">
//             <Button
//               variant="outline"
//               onClick={() => setCurrentView("meal-planner")}
//               className="shadow-sm hover:shadow-md text-sm sm:text-base"
//             >
//               ← Back
//             </Button>
//             <div>
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
//                 Add Food to <span className="capitalize">{selectedMealType}</span>
//               </h2>
//               <p className="text-gray-600 text-xs sm:text-sm">Search for recipes or ingredients to build your meal.</p>
//             </div>
//           </div>

//           <div className="flex gap-1 p-1 bg-gray-100 rounded-lg shadow-sm w-full sm:w-auto">
//             <Button
//               variant={searchType === "recipes" ? "default" : "ghost"}
//               size="sm"
//               onClick={() => setSearchType("recipes")}
//               className={`flex-1 sm:flex-none min-w-[80px] text-xs sm:text-sm ${searchType === "recipes" ? "bg-purple-600 text-white hover:bg-purple-700" : "text-gray-700 hover:bg-gray-200"}`}
//             >
//               Recipes
//             </Button>
//             <Button
//               variant={searchType === "ingredients" ? "default" : "ghost"}
//               size="sm"
//               onClick={() => setSearchType("ingredients")}
//               className={`flex-1 sm:flex-none min-w-[80px] text-xs sm:text-sm ${searchType === "ingredients" ? "bg-purple-600 text-white hover:bg-purple-700" : "text-gray-700 hover:bg-gray-200"}`}
//             >
//               Ingredients
//             </Button>
//           </div>
//         </div>

//         {/* FoodSearch component needs to handle its own loading/empty states */}
//         <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
//       </div>
//     )
//   }

//   // Meal Planner View
//   if (currentView === "meal-planner") {
//     // Explicitly create a Date object interpreted as UTC midnight, then convert to local string
//     const displayDate = new Date(selectedDate + "T00:00:00Z")

//     return (
//       <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8 bg-gray-50 min-h-screen font-sans">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200">
//           <div className="flex items-center gap-3 sm:gap-4">
//             <Button
//               variant="outline"
//               onClick={() => setCurrentView("calendar")}
//               className="shadow-sm hover:shadow-md text-sm sm:text-base"
//             >
//               ← Back
//             </Button>
//             <div>
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Meal & Event Plan</h2>
//               <p className="text-gray-600 text-xs sm:text-sm mt-1">
//                 {displayDate.toLocaleDateString("en-US", {
//                   weekday: "long",
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Daily Nutrition Summary */}
//         {selectedDateMeals.length > 0 || selectedDateEvents.filter((e) => e.type !== "meal").length > 0 ? (
//           <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
//             <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 border-b pb-2 sm:pb-3 border-gray-100">
//               Daily Nutrition
//             </h3>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//               {/* Calorie Card */}
//               <div className="bg-red-50 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm border border-red-100">
//                 <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-700 mb-1 leading-none">
//                   {Math.round(selectedDateTotals.calories)}
//                 </div>
//                 <div className="text-xs sm:text-sm text-red-800 font-semibold uppercase tracking-wide">Calories</div>
//                 <div className="text-xs text-gray-500 mt-1 sm:mt-2">Goal: 2000</div>
//               </div>

//               {/* Protein Card */}
//               <div className="bg-blue-50 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm border border-blue-100">
//                 <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-700 mb-1 leading-none">
//                   {Math.round(selectedDateTotals.protein)}g
//                 </div>
//                 <div className="text-xs sm:text-sm text-blue-800 font-semibold uppercase tracking-wide">Protein</div>
//                 <div className="text-xs text-gray-500 mt-1 sm:mt-2">Goal: 150g</div>
//               </div>

//               {/* Carbs Card */}
//               <div className="bg-green-50 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm border border-green-100">
//                 <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-700 mb-1 leading-none">
//                   {Math.round(selectedDateTotals.carbs)}g
//                 </div>
//                 <div className="text-xs sm:text-sm text-green-800 font-semibold uppercase tracking-wide">Carbs</div>
//                 <div className="text-xs text-gray-500 mt-1 sm:mt-2">Goal: 250g</div>
//               </div>

//               {/* Fat Card */}
//               <div className="bg-yellow-50 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm border border-yellow-100">
//                 <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-700 mb-1 leading-none">
//                   {Math.round(selectedDateTotals.fat)}g
//                 </div>
//                 <div className="text-xs sm:text-sm text-yellow-800 font-semibold uppercase tracking-wide">Fat</div>
//                 <div className="text-xs text-gray-500 mt-1 sm:mt-2">Goal: 65g</div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-8 sm:py-10 bg-white rounded-xl shadow-lg border border-gray-100 text-gray-500">
//             <CalendarDays className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-300" />
//             <p className="text-base sm:text-lg font-semibold mb-2">No plans for this day yet!</p>
//             <p className="text-sm text-gray-400">Add a meal or an event to get started.</p>
//           </div>
//         )}

//         {/* All Events for Selected Date */}
//         <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
//           {/* Meals Section */}
//           <div className="space-y-4 sm:space-y-6">
//             <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
//               <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600" />
//               Meals
//             </h3>

//             {Object.entries(mealTypeConfig).map(([mealType, config]) => {
//               const typedMealType = mealType as keyof typeof mealTypeConfig
//               const mealsOfType = selectedDateMeals.filter((meal) => meal.mealType === typedMealType)

//               return (
//                 <div key={mealType} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-5">
//                   <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100">
//                     <div className="flex items-center gap-2 sm:gap-3">
//                       <span className="text-2xl sm:text-3xl">{config.icon}</span>
//                       <div>
//                         <span className="font-bold capitalize text-base sm:text-lg text-gray-900">{mealType}</span>
//                         {mealsOfType.length > 0 && (
//                           <Badge className={`${config.color} ml-2 text-xs sm:text-sm px-2 py-0.5`}>
//                             {mealsOfType.reduce((sum, meal) => sum + meal.totalCalories, 0)} cal
//                           </Badge>
//                         )}
//                       </div>
//                     </div>
//                     <Button
//                       size="sm"
//                       onClick={() => startNewMeal(selectedDate, typedMealType)}
//                       className="shadow-sm hover:shadow-md text-xs sm:text-sm"
//                     >
//                       <PlusCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Add
//                     </Button>
//                   </div>

//                   <div className="space-y-2 sm:space-y-3 pt-2">
//                     {mealsOfType.length > 0 ? (
//                       mealsOfType.map((meal) => (
//                         <div
//                           key={meal.id}
//                           className="border border-gray-200 rounded-lg p-3 shadow-sm transition-all hover:bg-gray-50"
//                         >
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="font-medium text-sm sm:text-base text-gray-900 truncate">
//                               {meal.title}
//                             </span>
//                             <div className="flex gap-1 sm:gap-2">
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 onClick={() => editMeal(meal)}
//                                 className="text-blue-500 hover:text-blue-700 opacity-80 hover:opacity-100 p-1 sm:p-2"
//                               >
//                                 <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
//                               </Button>
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 onClick={() => deleteEvent(meal.id)}
//                                 className="text-red-500 hover:text-red-700 opacity-80 hover:opacity-100 p-1 sm:p-2"
//                               >
//                                 <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
//                               </Button>
//                             </div>
//                           </div>

//                           <div className="text-xs text-gray-600 flex items-center gap-2 sm:gap-4 flex-wrap">
//                             <span className="flex items-center gap-1">
//                               <Clock className="w-3 h-3" /> {meal.time}
//                             </span>
//                             <span className="font-medium">{meal.foods.length} items</span>
//                             <span className="font-bold text-purple-700">{meal.totalCalories} cal</span>
//                           </div>

//                           {/* Display specific foods within the meal event */}
//                           {meal.foods.length > 0 && (
//                             <div className="mt-2 text-gray-500 w-full">
//                               <span className="font-semibold text-gray-700 text-xs sm:text-sm mb-1 block">Items:</span>
//                               <ul className="list-disc list-inside text-xs space-y-1">
//                                 {meal.foods.map((food) => (
//                                   <li
//                                     key={food.id}
//                                     className="flex justify-between items-center bg-gray-100 p-1.5 rounded-md"
//                                   >
//                                     <span className="truncate text-xs">
//                                       {food.title} ({food.calories} cal)
//                                     </span>
//                                     <button
//                                       onClick={(e) => {
//                                         e.stopPropagation()
//                                         removeFoodFromMeal(meal.id, food.id)
//                                       }}
//                                       className="text-red-400 hover:text-red-600 ml-2 p-0.5"
//                                     >
//                                       <Trash2 className="w-3 h-3" />
//                                     </button>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )}
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-center py-6 sm:py-8 text-gray-500">
//                         <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gray-300" />
//                         <p className="text-sm sm:text-base font-medium mb-1">No {mealType} planned yet</p>
//                         <p className="text-xs sm:text-sm text-gray-400">Click 'Add' to track your food!</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Other Events Section */}
//           <div className="space-y-4 sm:space-y-6">
//             <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
//               <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
//               Other Events
//             </h3>

//             <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-5">
//               <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100">
//                 <span className="font-bold text-base sm:text-lg text-gray-900">Workouts & Appointments</span>
//                 <Button
//                   size="sm"
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: selectedDate })) // Ensure date is pre-filled
//                     setCurrentView("add-event")
//                   }}
//                   className="shadow-sm hover:shadow-md text-xs sm:text-sm"
//                 >
//                   <PlusCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Add
//                 </Button>
//               </div>

//               <div className="space-y-2 sm:space-y-3 pt-2">
//                 {selectedDateEvents
//                   .filter((event): event is RegularEvent => event.type !== "meal")
//                   .map((event) => (
//                     <div
//                       key={event.id}
//                       className="flex items-start gap-3 sm:gap-4 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 transition-all hover:bg-gray-100"
//                     >
//                       <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${event.color} flex-shrink-0 mt-1`} />
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center justify-between mb-1">
//                           <h4 className="text-sm sm:text-base font-semibold text-gray-900 truncate flex items-center">
//                             {eventTypeConfig[event.type].icon} {event.title}
//                           </h4>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => deleteEvent(event.id)}
//                             className="text-red-500 hover:text-red-700 opacity-80 hover:opacity-100 p-1 sm:p-2"
//                           >
//                             <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
//                           </Button>
//                         </div>
//                         <div className="text-xs text-gray-600 flex items-center gap-2 sm:gap-4 flex-wrap">
//                           <span className="flex items-center gap-1">
//                             <Clock className="w-3 h-3" /> {event.time}
//                           </span>
//                           {event.duration && <span className="font-medium text-gray-500">{event.duration}</span>}
//                         </div>
//                         {event.description && (
//                           <p className="text-xs text-gray-500 mt-2 leading-tight line-clamp-2">{event.description}</p>
//                         )}
//                       </div>
//                     </div>
//                   ))}

//                 {selectedDateEvents.filter((event) => event.type !== "meal").length === 0 && (
//                   <div className="text-center py-6 sm:py-8 text-gray-500">
//                     <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gray-300" />
//                     <p className="text-sm sm:text-base font-medium mb-1">No other events planned</p>
//                     <p className="text-xs sm:text-sm text-gray-400">Click 'Add' to schedule something new!</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // --- Default Calendar View ---
//   return (
//     <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 lg:space-y-8 bg-gray-50 min-h-screen font-sans">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-3 sm:pb-4 border-b border-gray-200">
//         <div className="flex items-center gap-3 sm:gap-4">
//           <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
//           <div>
//             <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900">Your Daily Planner</h1>
//             <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">
//               Plan your meals and track your events for the month.
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
//           <Button
//             variant="outline"
//             onClick={() => navigateMonth("prev")}
//             className="shadow-sm hover:shadow-md p-2 sm:p-3"
//             size="sm"
//           >
//             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//           </Button>
//           <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 w-32 sm:w-36 text-center">
//             {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//           </span>
//           <Button
//             variant="outline"
//             onClick={() => navigateMonth("next")}
//             className="shadow-sm hover:shadow-md p-2 sm:p-3"
//             size="sm"
//           >
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//           </Button>
//         </div>
//       </div>

//       {/* Calendar Grid */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 sm:p-4 lg:p-6">
//         {/* Week day headers */}
//         <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
//           {(window.innerWidth < 640 ? weekDaysMobile : weekDays).map((day, index) => (
//             <div key={index} className="text-center font-bold text-gray-600 text-xs sm:text-sm py-2">
//               {day}
//             </div>
//           ))}
//         </div>

//         {/* Calendar days */}
//         <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3">
//           {calendarDays.map((day) => {
//             const mealEvents = day.events.filter((e): e is MealEvent => e.type === "meal")
//             const otherEvents = day.events.filter((e): e is RegularEvent => e.type !== "meal")
//             const visibleEvents = []
//             const maxVisibleItems = window.innerWidth < 640 ? 2 : 3 // Fewer items on mobile

//             // Add meals first (prioritize meals for visibility)
//             for (const meal of mealEvents) {
//               if (visibleEvents.length < maxVisibleItems) {
//                 visibleEvents.push(meal)
//               } else {
//                 break
//               }
//             }

//             // Add other events if there's still space
//             for (const event of otherEvents) {
//               if (visibleEvents.length < maxVisibleItems) {
//                 visibleEvents.push(event)
//               } else {
//                 break
//               }
//             }

//             // Calculate remaining events for the "+X more" badge
//             const remainingEventsCount = day.events.length - visibleEvents.length

//             return (
//               <div
//                 key={day.dateString}
//                 onClick={() => {
//                   setSelectedDate(day.dateString)
//                   setCurrentView("meal-planner")
//                 }}
//                 className={`
//                   p-1 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 
//                   flex flex-col items-center justify-between h-20 sm:h-28 md:h-32 lg:h-40 relative
//                   ${day.isCurrentMonth ? "bg-gray-50 hover:bg-gray-100" : "bg-white text-gray-400 cursor-not-allowed"}
//                   ${day.isToday ? "border-2 border-purple-500 ring-2 ring-purple-200 shadow-md" : "border border-gray-200"}
//                 `}
//               >
//                 <div
//                   className={`text-sm sm:text-lg lg:text-xl font-bold ${day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}`}
//                 >
//                   {day.date}
//                 </div>

//                 {/* Event indicators */}
//                 <div className="flex flex-col items-start w-full px-0.5 sm:px-1 max-h-12 sm:max-h-16 overflow-hidden">
//                   {/* Display meals with initials, image, and calories */}
//                   {visibleEvents.map((event) => {
//                     if (event.type === "meal") {
//                       const mealConf = mealTypeConfig[event.mealType]
//                       // Use a default placeholder if no image is available
//                       const firstFoodImage =
//                         event.foods.length > 0 && event.foods[0].image ? event.foods[0].image : "/placeholder.svg"

//                       return (
//                         <div
//                           key={event.id}
//                           className={`flex items-center gap-0.5 sm:gap-1 w-full truncate ${mealConf.color.replace("bg-", "bg-opacity-80 border border-opacity-90 ")} rounded-full text-xs px-1 sm:px-2 py-0.5 mb-0.5 shadow-sm text-black`}
//                         >
//                           <span className="font-bold text-black text-xs">{mealConf.initial}</span>
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={firstFoodImage || "/placeholder.svg"}
//                             alt={event.title}
//                             className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full object-cover"
//                           />
//                           <span className="flex-1 truncate text-xs">{event.totalCalories} cal</span>
//                         </div>
//                       )
//                     } else {
//                       // Display other events (workouts, appointments, reminders)
//                       const eventConf = eventTypeConfig[event.type]

//                       return (
//                         <Badge
//                           key={event.id}
//                           className={`text-xs px-1 sm:px-2 py-0.5 rounded-full ${eventConf.color} text-white mb-0.5 shadow-sm truncate w-full flex justify-center`}
//                         >
//                           {event.type === "workout" ? "🏋️" : event.type === "appointment" ? "👥" : "⏰"}
//                           <span className="ml-1 truncate text-xs">{event.title}</span>
//                         </Badge>
//                       )
//                     }
//                   })}

//                   {/* "+X more" indicator */}
//                   {remainingEventsCount > 0 && (
//                     <Badge className="text-xs px-1 sm:px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 shadow-sm w-full flex justify-center">
//                       +{remainingEventsCount} more
//                     </Badge>
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CalendarScreen
// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import {
//   CalendarDays,
//   ChefHat,
//   PlusCircle,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   Edit,
//   Trash2,
//   Dumbbell,
//   Calendar,
//   Briefcase,
//   BellRing,
//   Home,
//   Search,
//   User,
//   Target,
//   TrendingUp,
//   Apple,
//   Utensils,
//   Activity,
//   AlertCircle,
//   FlameIcon as Fire,
//   Zap,
//   Star,
//   List,
//   Grid3X3,
// } from "lucide-react"

// // Modern Clean Components
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
//   onClick?: () => void
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
//     primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
//     secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm",
//     outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
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
//     <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${paddingClasses[padding]} ${className}`}>
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
//     info: "bg-blue-100 text-blue-800",
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
//   color = "blue",
// }: {
//   value: number
//   className?: string
//   color?: "blue" | "green" | "yellow" | "red" | "purple"
// }) => {
//   const colors = {
//     blue: "bg-blue-600",
//     green: "bg-green-600",
//     yellow: "bg-yellow-600",
//     red: "bg-red-600",
//     purple: "bg-purple-600",
//   }

//   return (
//     <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
//       <div
//         className={`h-2 rounded-full transition-all duration-500 ${colors[color]}`}
//         style={{ width: `${Math.min(value, 100)}%` }}
//       />
//     </div>
//   )
// }

// // Interfaces (keeping the same)
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

// interface RegularEvent {
//   id: string
//   title: string
//   type: "workout" | "appointment" | "reminder"
//   time: string
//   date: string
//   description?: string
//   duration?: string
//   color: string
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

// // Enhanced Food Search Component with Premeditated Searches
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

//   // Premeditated searches
//   const popularSearches = {
//     recipes: [
//       "Chicken Curry",
//       "Pasta Carbonara",
//       "Greek Salad",
//       "Beef Stir Fry",
//       "Salmon Teriyaki",
//       "Vegetable Soup",
//       "Pancakes",
//       "Caesar Salad",
//     ],
//     ingredients: ["Chicken", "Salmon", "Beef", "Broccoli", "Rice", "Pasta", "Eggs", "Avocado"],
//   }

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

//   const searchMeals = async (query: string) => {
//     if (!query.trim()) {
//       setFoods([])
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

//       const response = await fetch(url)
//       if (!response.ok) throw new Error("Failed to fetch meals")

//       const data: MealDBResponse = await response.json()

//       if (data.meals) {
//         const transformedFoods: FoodItem[] = data.meals.slice(0, 20).map((meal) => {
//           const nutrition = estimateNutrition(meal)
//           return {
//             id: Number.parseInt(meal.idMeal),
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
//       console.error("Error fetching meals:", err)
//       setError("Failed to search meals. Please try again.")
//       setFoods([])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       searchMeals(searchQuery)
//     }, 500)
//     return () => clearTimeout(timeoutId)
//   }, [searchQuery, searchType])

//   return (
//     <div className="space-y-6">
//       {/* Search Input */}
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder={`Search ${searchType}...`}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//         />
//       </div>

//       {/* Popular Searches - Show when no search query */}
//       {!searchQuery.trim() && !isLoading && (
//         <div>
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             Popular {searchType === "recipes" ? "Recipes" : "Ingredients"}
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {popularSearches[searchType].map((search) => (
//               <button
//                 key={search}
//                 onClick={() => setSearchQuery(search)}
//                 className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
//               >
//                 {search}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Results */}
//       <div className="space-y-4">
//         {isLoading ? (
//           <div className="text-center py-12">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Searching recipes...</p>
//           </div>
//         ) : error ? (
//           <Card className="text-center py-8">
//             <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Error</h3>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <Button onClick={() => searchMeals(searchQuery)} variant="primary">
//               Try Again
//             </Button>
//           </Card>
//         ) : foods.length > 0 ? (
//           <div className="space-y-4">
//             {foods.map((food) => (
//               <Card key={food.id} className="hover:shadow-md transition-shadow">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={food.image || "/placeholder.svg?height=80&width=80"}
//                     alt={food.title}
//                     className="w-16 h-16 rounded-lg object-cover"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-semibold text-gray-900 truncate">{food.title}</h3>
//                     <div className="flex items-center gap-2 mt-1">
//                       {food.category && <Badge variant="info">{food.category}</Badge>}
//                       {food.readyInMinutes && (
//                         <span className="text-sm text-gray-500 flex items-center gap-1">
//                           <Clock className="w-3 h-3" />
//                           {food.readyInMinutes}m
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex items-center gap-3 mt-2">
//                       <span className="text-sm font-medium text-red-600">{food.calories} cal</span>
//                       <span className="text-sm text-gray-500">{food.protein}g protein</span>
//                       <span className="text-sm text-gray-500">{food.carbs}g carbs</span>
//                     </div>
//                   </div>
//                   <Button onClick={() => onSelectFood(food)} variant="primary" size="sm">
//                     <PlusCircle className="w-4 h-4 mr-1" />
//                     Add
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         ) : searchQuery.trim() ? (
//           <Card className="text-center py-8">
//             <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
//             <p className="text-gray-600">
//               Try searching for "{searchType === "recipes" ? "chicken, pasta, or curry" : "tomato, beef, or rice"}"
//             </p>
//           </Card>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// const CalendarApp = () => {
//   const [currentView, setCurrentView] = useState<View>("dashboard")
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
//   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
//   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
//   const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)
//   const [calendarViewMode, setCalendarViewMode] = useState<"grid" | "list">("grid")
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     type: "workout" as "workout" | "appointment" | "reminder",
//     time: "",
//     date: selectedDate,
//     description: "",
//     duration: "",
//   })

//   const [events, setEvents] = useState<CalendarEvent[]>([
//     {
//       id: "meal-1-20250628",
//       title: "Healthy Breakfast",
//       type: "meal",
//       mealType: "breakfast",
//       time: "08:00",
//       date: "2025-06-28",
//       foods: [
//         {
//           id: 1,
//           title: "Oatmeal with Berries",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 300,
//           protein: 10,
//           carbs: 50,
//           fat: 5,
//         },
//       ],
//       totalCalories: 300,
//       totalProtein: 10,
//       totalCarbs: 50,
//       totalFat: 5,
//     } as MealEvent,
//     {
//       id: "workout-1-20250628",
//       title: "Morning Run",
//       type: "workout",
//       time: "07:00",
//       date: "2025-06-28",
//       description: "30 min outdoor run",
//       duration: "30m",
//       color: "bg-blue-600",
//     } as RegularEvent,
//   ])

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
//       color: "orange",
//       bgColor: "bg-orange-50",
//       textColor: "text-orange-700",
//       borderColor: "border-orange-200",
//       time: "08:00",
//       name: "Breakfast",
//     },
//     lunch: {
//       icon: "☀️",
//       color: "yellow",
//       bgColor: "bg-yellow-50",
//       textColor: "text-yellow-700",
//       borderColor: "border-yellow-200",
//       time: "12:00",
//       name: "Lunch",
//     },
//     dinner: {
//       icon: "🌙",
//       color: "blue",
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-700",
//       borderColor: "border-blue-200",
//       time: "18:00",
//       name: "Dinner",
//     },
//     snack: {
//       icon: "🍎",
//       color: "green",
//       bgColor: "bg-green-50",
//       textColor: "text-green-700",
//       borderColor: "border-green-200",
//       time: "15:00",
//       name: "Snack",
//     },
//   }

//   const eventTypeConfig = {
//     workout: {
//       icon: <Dumbbell className="w-4 h-4" />,
//       color: "bg-blue-600",
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

//   // Helper Functions
//   const generateCalendarDays = (): DayData[] => {
//     const year = currentDate.getFullYear()
//     const month = currentDate.getMonth()
//     const today = new Date()
//     const firstDay = new Date(year, month, 1)
//     const startDate = new Date(firstDay)
//     startDate.setDate(startDate.getDate() - firstDay.getDay())

//     const days: DayData[] = []
//     const currentDayIterator = new Date(startDate)

//     for (let i = 0; i < 42; i++) {
//       const isCurrentMonth = currentDayIterator.getMonth() === month
//       const isToday = currentDayIterator.toDateString() === today.toDateString()
//       const localYear = currentDayIterator.getFullYear()
//       const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
//       const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
//       const dateString = `${localYear}-${localMonth}-${localDay}`

//       const dayEvents = events.filter((event) => event.date === dateString)
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

//   const addRegularEvent = () => {
//     if (newEvent.title && newEvent.date && newEvent.time) {
//       const event: RegularEvent = {
//         id: Date.now().toString(),
//         title: newEvent.title,
//         type: newEvent.type,
//         time: newEvent.time,
//         date: newEvent.date,
//         description: newEvent.description,
//         duration: newEvent.duration,
//         color: eventTypeConfig[newEvent.type].color,
//       }

//       setEvents((prev) => [...prev, event])
//       setNewEvent({ title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" })
//       setCurrentView("meal-planner")
//     }
//   }

//   const addFoodToMeal = (food: FoodItem) => {
//     if (editingMeal) {
//       const updatedFoods = [...editingMeal.foods, food]
//       const updatedMeal: MealEvent = {
//         ...editingMeal,
//         foods: updatedFoods,
//         totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//         totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//         totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//         totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//       }

//       setEvents((prev) => prev.map((event) => (event.id === editingMeal.id ? updatedMeal : event)))
//       setEditingMeal(updatedMeal)
//     } else {
//       const newMeal: MealEvent = {
//         id: Date.now().toString(),
//         title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`,
//         type: "meal",
//         mealType: selectedMealType,
//         time: mealTypeConfig[selectedMealType].time,
//         date: selectedDate,
//         foods: [food],
//         totalCalories: food.calories || 0,
//         totalProtein: food.protein || 0,
//         totalCarbs: food.carbs || 0,
//         totalFat: food.fat || 0,
//       }

//       setEvents((prev) => [...prev, newMeal])
//     }
//     setCurrentView("meal-planner")
//   }

//   const removeFoodFromMeal = (mealId: string, foodId: number) => {
//     setEvents(
//       (prev) =>
//         prev
//           .map((event) => {
//             if (event.type === "meal" && event.id === mealId) {
//               const meal = event as MealEvent
//               const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
//               if (updatedFoods.length === 0) return null

//               return {
//                 ...meal,
//                 foods: updatedFoods,
//                 totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
//                 totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
//                 totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
//                 totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
//               }
//             }
//             return event
//           })
//           .filter(Boolean) as CalendarEvent[],
//     )
//   }

//   const deleteEvent = (eventId: string) => {
//     setEvents((prev) => prev.filter((event) => event.id !== eventId))
//   }

//   const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
//     setSelectedDate(date)
//     setSelectedMealType(mealType)
//     setEditingMeal(null)
//     setCurrentView("food-search")
//   }

//   const editMeal = (meal: MealEvent) => {
//     setEditingMeal(meal)
//     setSelectedDate(meal.date)
//     setSelectedMealType(meal.mealType)
//     setCurrentView("food-search")
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

//   const dailyGoals = { calories: 2000, protein: 150, carbs: 250, fat: 65 }
//   const progress = {
//     calories: Math.min((selectedDateTotals.calories / dailyGoals.calories) * 100, 100),
//     protein: Math.min((selectedDateTotals.protein / dailyGoals.protein) * 100, 100),
//     carbs: Math.min((selectedDateTotals.carbs / dailyGoals.carbs) * 100, 100),
//     fat: Math.min((selectedDateTotals.fat / dailyGoals.fat) * 100, 100),
//   }

//   // Modern Bottom Navigation
//   const BottomNav = () => (
//     <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
//       <div className="flex justify-around items-center max-w-md mx-auto px-4 py-2">
//         {[
//           { view: "dashboard", icon: Home, label: "Home" },
//           { view: "calendar", icon: Calendar, label: "Calendar" },
//           { view: "food-search", icon: Search, label: "Search" },
//           { view: "meal-planner", icon: ChefHat, label: "Plan" },
//         ].map(({ view, icon: Icon, label }) => (
//           <button
//             key={view}
//             onClick={() => setCurrentView(view as View)}
//             className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
//               currentView === view ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900"
//             }`}
//           >
//             <Icon className="w-5 h-5 mb-1" />
//             <span className="text-xs font-medium">{label}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   )

//   // Enhanced Dashboard View with Fat Progress
//   if (currentView === "dashboard") {
//     const todayEvents = events.filter((event) => event.date === new Date().toISOString().split("T")[0])
//     const todayMeals = todayEvents.filter((event): event is MealEvent => event.type === "meal")
//     const todayTotals = todayMeals.reduce(
//       (totals, meal) => ({
//         calories: totals.calories + meal.totalCalories,
//         protein: totals.protein + meal.totalProtein,
//         carbs: totals.carbs + meal.totalCarbs,
//         fat: totals.fat + meal.totalFat,
//       }),
//       { calories: 0, protein: 0, carbs: 0, fat: 0 },
//     )

//     return (
//       <div className="pb-20 min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200">
//           <div className="px-4 py-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">Good Morning!</h1>
//                 <p className="text-gray-600">{"Let's plan your healthy day"}</p>
//               </div>
//               <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                 <User className="w-5 h-5 text-gray-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 py-6 space-y-6">
//           {/* Enhanced Today's Progress with Fat */}
//           <Card>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Target className="w-4 h-4 text-blue-600" />
//               </div>
//               <h2 className="text-lg font-semibold text-gray-900">{"Today's Progress"}</h2>
//             </div>
//             <div className="space-y-4">
//               {/* Calories */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-600 flex items-center gap-1">
//                     <Fire className="w-4 h-4 text-red-500" />
//                     Calories
//                   </span>
//                   <span className="text-lg font-semibold text-gray-900">{Math.round(todayTotals.calories)}</span>
//                 </div>
//                 <Progress value={(todayTotals.calories / dailyGoals.calories) * 100} color="red" />
//                 <span className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.calories}</span>
//               </div>

//               {/* Protein */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-600 flex items-center gap-1">
//                     <Zap className="w-4 h-4 text-green-500" />
//                     Protein
//                   </span>
//                   <span className="text-lg font-semibold text-gray-900">{Math.round(todayTotals.protein)}g</span>
//                 </div>
//                 <Progress value={(todayTotals.protein / dailyGoals.protein) * 100} color="green" />
//                 <span className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.protein}g</span>
//               </div>

//               {/* Fat */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-600 flex items-center gap-1">
//                     <Star className="w-4 h-4 text-purple-500" />
//                     Fat
//                   </span>
//                   <span className="text-lg font-semibold text-gray-900">{Math.round(todayTotals.fat)}g</span>
//                 </div>
//                 <Progress value={(todayTotals.fat / dailyGoals.fat) * 100} color="purple" />
//                 <span className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.fat}g</span>
//               </div>
//             </div>
//           </Card>

//           {/* Enhanced Quick Actions */}
//           <Card>
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.entries(mealTypeConfig).map(([mealType, config]) => (
//                 <button
//                   key={mealType}
//                   onClick={() => startNewMeal(new Date().toISOString().split("T")[0], mealType as any)}
//                   className={`group relative p-6 rounded-xl border-2 border-dashed ${config.borderColor} ${config.bgColor} hover:bg-opacity-80 transition-all duration-200 hover:scale-105 hover:shadow-lg`}
//                 >
//                   <div className="text-center">
//                     <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
//                       {config.icon}
//                     </div>
//                     <div className={`text-sm font-semibold ${config.textColor} mb-1`}>{config.name}</div>
//                     <div className="text-xs text-gray-500">{config.time}</div>
//                   </div>
//                   <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-200"></div>
//                 </button>
//               ))}
//             </div>
//           </Card>

//           {/* Today's Schedule */}
//           <Card>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                 <Clock className="w-4 h-4 text-green-600" />
//               </div>
//               <h2 className="text-lg font-semibold text-gray-900">{"Today's Schedule"}</h2>
//             </div>
//             {todayEvents.length > 0 ? (
//               <div className="space-y-3">
//                 {todayEvents.slice(0, 3).map((event) => (
//                   <div key={event.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                     <div className="flex-1">
//                       <div className="font-medium text-gray-900">{event.title}</div>
//                       <div className="text-sm text-gray-600">{event.time}</div>
//                     </div>
//                     {event.type === "meal" && <Badge variant="success">{(event as MealEvent).totalCalories} cal</Badge>}
//                   </div>
//                 ))}
//                 {todayEvents.length > 3 && (
//                   <Button variant="outline" onClick={() => setCurrentView("meal-planner")} className="w-full">
//                     View all {todayEvents.length} events
//                   </Button>
//                 )}
//               </div>
//             ) : (
//               <div className="text-center py-8">
//                 <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">No events scheduled</h3>
//                 <p className="text-gray-600 mb-4">Start planning your day!</p>
//                 <Button variant="primary" onClick={() => setCurrentView("meal-planner")}>
//                   Plan Your Day
//                 </Button>
//               </div>
//             )}
//           </Card>
//         </div>

//         <BottomNav />
//       </div>
//     )
//   }

//   // Enhanced Food Search View
//   if (currentView === "food-search") {
//     return (
//       <div className="pb-20 min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200">
//           <div className="px-4 py-4">
//             <div className="flex items-center gap-3">
//               <Button variant="ghost" onClick={() => setCurrentView("meal-planner")} size="sm">
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-900">
//                   Add to <span className="capitalize text-blue-600">{selectedMealType}</span>
//                 </h1>
//                 <p className="text-sm text-gray-600">Search for recipes or ingredients</p>
//               </div>
//             </div>

//             {/* Search Type Toggle */}
//             <div className="flex gap-2 mt-4 p-1 bg-gray-100 rounded-lg">
//               <button
//                 onClick={() => setSearchType("recipes")}
//                 className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
//                   searchType === "recipes" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <Utensils className="w-4 h-4" />
//                 Recipes
//               </button>
//               <button
//                 onClick={() => setSearchType("ingredients")}
//                 className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
//                   searchType === "ingredients"
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <Apple className="w-4 h-4" />
//                 Ingredients
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 py-6">
//           <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
//         </div>

//         <BottomNav />
//       </div>
//     )
//   }

//   // Enhanced Add Event View
//   if (currentView === "add-event") {
//     return (
//       <div className="pb-20 min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200">
//           <div className="px-4 py-4">
//             <div className="flex items-center gap-3">
//               <Button variant="ghost" onClick={() => setCurrentView("meal-planner")} size="sm">
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-900">Add New Event</h1>
//                 <p className="text-sm text-gray-600">Create a workout, appointment, or reminder</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 py-6">
//           <Card>
//             <div className="space-y-6">
//               {/* Event Title */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                   value={newEvent.title}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
//                   placeholder="e.g., Yoga Session, Project Deadline"
//                 />
//               </div>

//               {/* Event Type */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-3">Event Type</label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {Object.entries(eventTypeConfig).map(([type, config]) => (
//                     <button
//                       key={type}
//                       onClick={() => setNewEvent((prev) => ({ ...prev, type: type as any }))}
//                       className={`p-4 rounded-lg border-2 transition-colors ${
//                         newEvent.type === type ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <div
//                         className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${
//                           newEvent.type === type ? "bg-blue-600 text-white" : config.color + " text-white"
//                         }`}
//                       >
//                         {config.icon}
//                       </div>
//                       <div
//                         className={`text-sm font-medium ${newEvent.type === type ? "text-blue-900" : "text-gray-700"}`}
//                       >
//                         {config.name}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Date and Time */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                     value={newEvent.date}
//                     onChange={(e) => setNewEvent((prev) => ({ ...prev, date: e.target.value }))}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
//                   <input
//                     type="time"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                     value={newEvent.time}
//                     onChange={(e) => setNewEvent((prev) => ({ ...prev, time: e.target.value }))}
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Description (optional)</label>
//                 <textarea
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
//                   rows={3}
//                   value={newEvent.description}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
//                   placeholder="Add more details about the event..."
//                 />
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-3 pt-4">
//                 <Button variant="outline" onClick={() => setCurrentView("meal-planner")} className="flex-1">
//                   Cancel
//                 </Button>
//                 <Button onClick={addRegularEvent} variant="primary" className="flex-1">
//                   Add Event
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         </div>

//         <BottomNav />
//       </div>
//     )
//   }

//   // Redesigned Meal Planner View
//   if (currentView === "meal-planner") {
//     const displayDate = new Date(selectedDate + "T00:00:00Z")

//     return (
//       <div className="pb-20 min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200">
//           <div className="px-4 py-4">
//             <div className="flex items-center gap-3">
//               <Button variant="ghost" onClick={() => setCurrentView("calendar")} size="sm">
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-900">Daily Plan</h1>
//                 <p className="text-sm text-gray-600">
//                   {displayDate.toLocaleDateString("en-US", {
//                     weekday: "long",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 py-6 space-y-4">
//           {/* Nutrition Summary */}
//           {selectedDateMeals.length > 0 && (
//             <Card padding="sm">
//               <div className="flex items-center gap-2 mb-3">
//                 <TrendingUp className="w-4 h-4 text-green-600" />
//                 <h2 className="text-sm font-semibold text-gray-900">Nutrition Summary</h2>
//               </div>
//               <div className="grid grid-cols-3 gap-3 text-center">
//                 <div>
//                   <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.calories)}</div>
//                   <div className="text-xs text-gray-600">Calories</div>
//                   <Progress value={progress.calories} color="red" className="mt-1" />
//                 </div>
//                 <div>
//                   <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.protein)}g</div>
//                   <div className="text-xs text-gray-600">Protein</div>
//                   <Progress value={progress.protein} color="green" className="mt-1" />
//                 </div>
//                 <div>
//                   <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.fat)}g</div>
//                   <div className="text-xs text-gray-600">Fat</div>
//                   <Progress value={progress.fat} color="purple" className="mt-1" />
//                 </div>
//               </div>
//             </Card>
//           )}

//           {/* Streamlined Meals Section */}
//           <div className="space-y-3">
//             {Object.entries(mealTypeConfig).map(([mealType, config]) => {
//               const typedMealType = mealType as keyof typeof mealTypeConfig
//               const mealsOfType = selectedDateMeals.filter((meal) => meal.mealType === typedMealType)

//               return (
//                 <Card key={mealType} padding="sm">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-8 h-8 ${config.bgColor} rounded-lg flex items-center justify-center`}>
//                         <span className="text-sm">{config.icon}</span>
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-900">{config.name}</h3>
//                         {mealsOfType.length > 0 && (
//                           <p className="text-xs text-gray-600">
//                             {mealsOfType.reduce((sum, meal) => sum + meal.totalCalories, 0)} cal
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                     <Button onClick={() => startNewMeal(selectedDate, typedMealType)} variant="primary" size="sm">
//                       <PlusCircle className="w-3 h-3 mr-1" />
//                       Add
//                     </Button>
//                   </div>

//                   {mealsOfType.length > 0 ? (
//                     <div className="space-y-2">
//                       {mealsOfType.map((meal) => (
//                         <div key={meal.id} className="border border-gray-200 rounded-lg p-3">
//                           <div className="flex items-center justify-between mb-2">
//                             <div className="flex items-center gap-2">
//                               <Clock className="w-3 h-3 text-gray-500" />
//                               <span className="text-sm font-medium text-gray-700">{meal.time}</span>
//                               <Badge variant="success" className="text-xs">
//                                 {meal.totalCalories} cal
//                               </Badge>
//                             </div>
//                             <div className="flex gap-1">
//                               <Button variant="ghost" size="sm" onClick={() => editMeal(meal)}>
//                                 <Edit className="w-3 h-3" />
//                               </Button>
//                               <Button variant="ghost" size="sm" onClick={() => deleteEvent(meal.id)}>
//                                 <Trash2 className="w-3 h-3" />
//                               </Button>
//                             </div>
//                           </div>
//                           <div className="space-y-1">
//                             {meal.foods.map((food) => (
//                               <div key={food.id} className="flex items-center gap-2 text-sm">
//                                 <img
//                                   src={food.image || "/placeholder.svg?height=24&width=24"}
//                                   alt={food.title}
//                                   className="w-6 h-6 rounded object-cover"
//                                 />
//                                 <span className="flex-1 text-gray-700 truncate">{food.title}</span>
//                                 <span className="text-gray-500">{food.calories} cal</span>
//                                 <Button variant="ghost" size="sm" onClick={() => removeFoodFromMeal(meal.id, food.id)}>
//                                   <Trash2 className="w-3 h-3" />
//                                 </Button>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
//                       <span className="text-lg mb-1 block">{config.icon}</span>
//                       <p className="text-sm text-gray-600 mb-2">No {mealType} planned</p>
//                       <Button variant="outline" onClick={() => startNewMeal(selectedDate, typedMealType)} size="sm">
//                         Add {config.name}
//                       </Button>
//                     </div>
//                   )}
//                 </Card>
//               )
//             })}
//           </div>

//           {/* Other Events */}
//           <Card padding="sm">
//             <div className="flex items-center justify-between mb-3">
//               <h2 className="text-sm font-semibold text-gray-900">Other Events</h2>
//               <Button
//                 onClick={() => {
//                   setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                   setCurrentView("add-event")
//                 }}
//                 variant="primary"
//                 size="sm"
//               >
//                 <PlusCircle className="w-3 h-3 mr-1" />
//                 Add
//               </Button>
//             </div>

//             {selectedDateEvents.filter((event) => event.type !== "meal").length > 0 ? (
//               <div className="space-y-2">
//                 {selectedDateEvents
//                   .filter((event): event is RegularEvent => event.type !== "meal")
//                   .map((event) => (
//                     <div key={event.id} className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
//                       <div
//                         className={`w-6 h-6 ${eventTypeConfig[event.type].color} rounded flex items-center justify-center text-white`}
//                       >
//                         {eventTypeConfig[event.type].icon}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-sm font-medium text-gray-900 truncate">{event.title}</h4>
//                         <div className="flex items-center gap-1 text-xs text-gray-600">
//                           <Clock className="w-3 h-3" />
//                           <span>{event.time}</span>
//                           {event.duration && <span>• {event.duration}</span>}
//                         </div>
//                       </div>
//                       <Button variant="ghost" size="sm" onClick={() => deleteEvent(event.id)}>
//                         <Trash2 className="w-3 h-3" />
//                       </Button>
//                     </div>
//                   ))}
//               </div>
//             ) : (
//               <div className="text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
//                 <Activity className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                 <p className="text-sm text-gray-600 mb-2">No events scheduled</p>
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setNewEvent((prev) => ({ ...prev, date: selectedDate }))
//                     setCurrentView("add-event")
//                   }}
//                   size="sm"
//                 >
//                   Add Event
//                 </Button>
//               </div>
//             )}
//           </Card>
//         </div>

//         <BottomNav />
//       </div>
//     )
//   }

//   // Responsive Calendar View with List/Grid Toggle
//   return (
//     <div className="pb-20 min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="px-4 py-4">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <CalendarDays className="w-4 h-4 text-blue-600" />
//               </div>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-900">Calendar</h1>
//                 <p className="text-sm text-gray-600">Plan your meals and events</p>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 variant={calendarViewMode === "grid" ? "primary" : "outline"}
//                 size="sm"
//                 onClick={() => setCalendarViewMode("grid")}
//               >
//                 <Grid3X3 className="w-4 h-4" />
//               </Button>
//               <Button
//                 variant={calendarViewMode === "list" ? "primary" : "outline"}
//                 size="sm"
//                 onClick={() => setCalendarViewMode("list")}
//               >
//                 <List className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <Button variant="ghost" onClick={() => navigateMonth("prev")} size="sm">
//               <ChevronLeft className="w-4 h-4" />
//             </Button>
//             <h2 className="text-lg font-semibold text-gray-900">
//               {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//             </h2>
//             <Button variant="ghost" onClick={() => navigateMonth("next")} size="sm">
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 py-6">
//         {calendarViewMode === "grid" ? (
//           <Card padding="sm">
//             {/* Week Days Header */}
//             <div className="grid grid-cols-7 gap-1 mb-2">
//               {weekDays.map((day) => (
//                 <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">
//                   {day}
//                 </div>
//               ))}
//             </div>

//             {/* Calendar Days */}
//             <div className="grid grid-cols-7 gap-1">
//               {calendarDays.map((day) => {
//                 const mealEvents = day.events.filter((e): e is MealEvent => e.type === "meal")
//                 const otherEvents = day.events.filter((e): e is RegularEvent => e.type !== "meal")

//                 return (
//                   <div
//                     key={day.dateString}
//                     onClick={() => {
//                       if (day.isCurrentMonth) {
//                         setSelectedDate(day.dateString)
//                         setCurrentView("meal-planner")
//                       }
//                     }}
//                     className={`
//                       aspect-square p-2 rounded-lg cursor-pointer transition-colors
//                       flex flex-col items-center justify-start relative
//                       ${day.isCurrentMonth ? "hover:bg-gray-100" : "text-gray-400 cursor-not-allowed"}
//                       ${day.isToday ? "bg-blue-50 border-2 border-blue-200" : ""}
//                     `}
//                   >
//                     <div
//                       className={`text-sm font-medium mb-1 ${
//                         day.isToday ? "text-blue-600" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"
//                       }`}
//                     >
//                       {day.date}
//                     </div>

//                     <div className="flex flex-col items-center w-full space-y-1">
//                       {mealEvents.slice(0, 2).map((meal) => {
//                         const config = mealTypeConfig[meal.mealType]
//                         return (
//                           <div
//                             key={meal.id}
//                             className={`w-full text-xs px-1 py-0.5 rounded text-center ${config.bgColor} ${config.textColor} font-medium`}
//                           >
//                             {meal.totalCalories}
//                           </div>
//                         )
//                       })}

//                       {otherEvents.slice(0, 1).map((event) => (
//                         <div key={event.id} className={`w-2 h-2 rounded-full ${eventTypeConfig[event.type].color}`} />
//                       ))}

//                       {day.events.length > 3 && (
//                         <div className="text-xs text-gray-500 font-medium">+{day.events.length - 3}</div>
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </Card>
//         ) : (
//           <div className="space-y-3">
//             {calendarDays
//               .filter((day) => day.isCurrentMonth && day.events.length > 0)
//               .map((day) => (
//                 <Card key={day.dateString} padding="sm">
//                   <div
//                     className="cursor-pointer"
//                     onClick={() => {
//                       setSelectedDate(day.dateString)
//                       setCurrentView("meal-planner")
//                     }}
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center gap-2">
//                         <div
//                           className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm ${
//                             day.isToday ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
//                           }`}
//                         >
//                           {day.date}
//                         </div>
//                         <div>
//                           <div className="font-medium text-gray-900">
//                             {new Date(day.dateString).toLocaleDateString("en-US", { weekday: "long" })}
//                           </div>
//                           <div className="text-sm text-gray-600">{day.events.length} events</div>
//                         </div>
//                       </div>
//                       <ChevronRight className="w-4 h-4 text-gray-400" />
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {day.events.slice(0, 3).map((event) => (
//                         <Badge key={event.id} variant="info" className="text-xs">
//                           {event.type === "meal" ? `${(event as MealEvent).totalCalories} cal` : event.title}
//                         </Badge>
//                       ))}
//                       {day.events.length > 3 && (
//                         <Badge variant="default" className="text-xs">
//                           +{day.events.length - 3} more
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             {calendarDays.filter((day) => day.isCurrentMonth && day.events.length > 0).length === 0 && (
//               <Card className="text-center py-8">
//                 <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">No events this month</h3>
//                 <p className="text-gray-600 mb-4">Start planning your meals and activities!</p>
//                 <Button variant="primary" onClick={() => setCurrentView("meal-planner")}>
//                   Add Events
//                 </Button>
//               </Card>
//             )}
//           </div>
//         )}
//       </div>

//       <BottomNav />
//     </div>
//   )
// }

// export default CalendarApp
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  CalendarDays,
  ChefHat,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  Trash2,
  Dumbbell,
  Calendar,
  Briefcase,
  BellRing,
  Home,
  Search,
  User,
  Target,
  TrendingUp,
  Apple,
  Utensils,
  Activity,
  AlertCircle,
  FlameIcon as Fire,
  Zap,
  Star,
  Sparkles,
} from "lucide-react"

// Modern Clean Components
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
  onClick?: () => void
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "default" | "lg"
  className?: string
  disabled?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
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
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${paddingClasses[padding]} ${className}`}>
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
    info: "bg-blue-100 text-blue-800",
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
  color = "blue",
}: {
  value: number
  className?: string
  color?: "blue" | "green" | "yellow" | "red" | "purple"
}) => {
  const colors = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    yellow: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    red: "bg-gradient-to-r from-red-500 to-red-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600",
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

// Interfaces (keeping the same)
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

interface RegularEvent {
  id: string
  title: string
  type: "workout" | "appointment" | "reminder"
  time: string
  date: string
  description?: string
  duration?: string
  color: string
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

// Enhanced Food Search Component with API-fetched Pre-loaded Results
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

  // Fetch popular foods from API
  const fetchPopularFoods = async () => {
    setInitialLoading(true)
    setError(null)

    try {
      // Popular search terms to get variety
      const popularSearches = ["chicken", "pasta", "salad", "beef", "fish", "rice"]
      const allFoods: FoodItem[] = []

      // Fetch a few meals from each popular category
      for (const search of popularSearches.slice(0, 3)) {
        // Limit to 3 searches to avoid too many requests
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          if (response.ok) {
            const data: MealDBResponse = await response.json()
            if (data.meals) {
              // Take 2 meals from each search
              const meals = data.meals.slice(0, 2).map((meal) => {
                const nutrition = estimateNutrition(meal)
                return {
                  id: Number.parseInt(meal.idMeal),
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
          console.error(`Error fetching ${search}:`, err)
        }
      }

      // If we got foods from API, use them, otherwise fallback to a few hardcoded ones
      if (allFoods.length > 0) {
        setFoods(allFoods.slice(0, 6)) // Limit to 6 foods
      } else {
        // Fallback to minimal hardcoded data if API fails
        setFoods([
          {
            id: 1,
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
            id: 2,
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
        ])
      }
    } catch (err) {
      console.error("Error fetching popular foods:", err)
      setError("Failed to load popular foods")
      // Set minimal fallback data
      setFoods([
        {
          id: 1,
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
      ])
    } finally {
      setInitialLoading(false)
    }
  }

  const searchMeals = async (query: string) => {
    if (!query.trim()) {
      // If no search query, show the popular foods we fetched initially
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

      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch meals")

      const data: MealDBResponse = await response.json()

      if (data.meals) {
        const transformedFoods: FoodItem[] = data.meals.slice(0, 20).map((meal) => {
          const nutrition = estimateNutrition(meal)
          return {
            id: Number.parseInt(meal.idMeal),
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
      console.error("Error fetching meals:", err)
      setError("Failed to search meals. Please try again.")
      setFoods([])
    } finally {
      setIsLoading(false)
    }
  }

  // Load popular foods on component mount
  useEffect(() => {
    fetchPopularFoods()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchMeals(searchQuery)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [searchQuery, searchType])

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={`Search ${searchType}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Enhanced Results Grid */}
      <div>
        {!searchQuery.trim() && (
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular {searchType === "recipes" ? "Recipes" : "Foods"}
          </h3>
        )}

        {initialLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading popular recipes...</p>
          </div>
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
          <div className=" sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {foods.map((food) => (
              <div
                key={food.id}
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
                      <div className="font-medium text-blue-600">{food.protein}g</div>
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
              Try searching for "{searchType === "recipes" ? "chicken, pasta, or curry" : "tomato, beef, or rice"}"
            </p>
          </Card>
        ) : null}
      </div>
    </div>
  )
}

const CalendarApp = () => {
  const [currentView, setCurrentView] = useState<View>("dashboard")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
  const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
  const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "workout" as "workout" | "appointment" | "reminder",
    time: "",
    date: selectedDate,
    description: "",
    duration: "",
  })

  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "meal-1-20250628",
      title: "Healthy Breakfast",
      type: "meal",
      mealType: "breakfast",
      time: "08:00",
      date: "2025-06-28",
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
      ],
      totalCalories: 300,
      totalProtein: 10,
      totalCarbs: 50,
      totalFat: 5,
    } as MealEvent,
    {
      id: "workout-1-20250628",
      title: "Morning Run",
      type: "workout",
      time: "07:00",
      date: "2025-06-28",
      description: "30 min outdoor run",
      duration: "30m",
      color: "bg-blue-600",
    } as RegularEvent,
  ])

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
      color: "orange",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      time: "08:00",
      name: "Breakfast",
      gradient: "from-orange-400 to-amber-500",
    },
    lunch: {
      icon: "☀️",
      color: "yellow",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200",
      time: "12:00",
      name: "Lunch",
      gradient: "from-yellow-400 to-orange-500",
    },
    dinner: {
      icon: "🌙",
      color: "blue",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      time: "18:00",
      name: "Dinner",
      gradient: "from-blue-400 to-indigo-500",
    },
    snack: {
      icon: "🍎",
      color: "green",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      time: "15:00",
      name: "Snack",
      gradient: "from-green-400 to-emerald-500",
    },
  }

  const eventTypeConfig = {
    workout: {
      icon: <Dumbbell className="w-4 h-4" />,
      color: "bg-blue-600",
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

  // Helper Functions
  const generateCalendarDays = (): DayData[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const today = new Date()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days: DayData[] = []
    const currentDayIterator = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDayIterator.getMonth() === month
      const isToday = currentDayIterator.toDateString() === today.toDateString()
      const localYear = currentDayIterator.getFullYear()
      const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
      const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
      const dateString = `${localYear}-${localMonth}-${localDay}`

      const dayEvents = events.filter((event) => event.date === dateString)
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

  const addRegularEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const event: RegularEvent = {
        id: Date.now().toString(),
        title: newEvent.title,
        type: newEvent.type,
        time: newEvent.time,
        date: newEvent.date,
        description: newEvent.description,
        duration: newEvent.duration,
        color: eventTypeConfig[newEvent.type].color,
      }

      setEvents((prev) => [...prev, event])
      setNewEvent({ title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" })
      setCurrentView("meal-planner")
    }
  }

  const addFoodToMeal = (food: FoodItem) => {
    if (editingMeal) {
      const updatedFoods = [...editingMeal.foods, food]
      const updatedMeal: MealEvent = {
        ...editingMeal,
        foods: updatedFoods,
        totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
        totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
        totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
        totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
      }

      setEvents((prev) => prev.map((event) => (event.id === editingMeal.id ? updatedMeal : event)))
      setEditingMeal(updatedMeal)
    } else {
      const newMeal: MealEvent = {
        id: Date.now().toString(),
        title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`,
        type: "meal",
        mealType: selectedMealType,
        time: mealTypeConfig[selectedMealType].time,
        date: selectedDate,
        foods: [food],
        totalCalories: food.calories || 0,
        totalProtein: food.protein || 0,
        totalCarbs: food.carbs || 0,
        totalFat: food.fat || 0,
      }

      setEvents((prev) => [...prev, newMeal])
    }
    setCurrentView("meal-planner")
  }

  const removeFoodFromMeal = (mealId: string, foodId: number) => {
    setEvents(
      (prev) =>
        prev
          .map((event) => {
            if (event.type === "meal" && event.id === mealId) {
              const meal = event as MealEvent
              const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
              if (updatedFoods.length === 0) return null

              return {
                ...meal,
                foods: updatedFoods,
                totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
                totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
                totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
                totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
              }
            }
            return event
          })
          .filter(Boolean) as CalendarEvent[],
    )
  }

  const deleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId))
  }

  const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
    setSelectedDate(date)
    setSelectedMealType(mealType)
    setEditingMeal(null)
    setCurrentView("food-search")
  }

  const editMeal = (meal: MealEvent) => {
    setEditingMeal(meal)
    setSelectedDate(meal.date)
    setSelectedMealType(meal.mealType)
    setCurrentView("food-search")
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

  const dailyGoals = { calories: 2000, protein: 150, carbs: 250, fat: 65 }
  const progress = {
    calories: Math.min((selectedDateTotals.calories / dailyGoals.calories) * 100, 100),
    protein: Math.min((selectedDateTotals.protein / dailyGoals.protein) * 100, 100),
    carbs: Math.min((selectedDateTotals.carbs / dailyGoals.carbs) * 100, 100),
    fat: Math.min((selectedDateTotals.fat / dailyGoals.fat) * 100, 100),
  }

  // Modern Bottom Navigation
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200">
      <div className="flex justify-around items-center max-w-md mx-auto px-4 py-2">
        {[
          { view: "dashboard", icon: Home, label: "Home", color: "from-purple-500 to-pink-500" },
          { view: "calendar", icon: Calendar, label: "Calendar", color: "from-blue-500 to-cyan-500" },
          { view: "food-search", icon: Search, label: "Search", color: "from-green-500 to-emerald-500" },
          { view: "meal-planner", icon: ChefHat, label: "Plan", color: "from-orange-500 to-red-500" },
        ].map(({ view, icon: Icon, label, color }) => (
          <button
            key={view}
            onClick={() => setCurrentView(view as View)}
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
              currentView === view
                ? `bg-gradient-to-r ${color} text-white shadow-lg scale-105`
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )

  // Enhanced Dashboard View
  if (currentView === "dashboard") {
    const todayEvents = events.filter((event) => event.date === new Date().toISOString().split("T")[0])
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

    return (
      <div className="pb-14 min-h-screen">
        {/* Enhanced Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                  Good Morning! <Sparkles className="w-6 h-6 text-yellow-300" />
                </h1>
                <p className="text-purple-100 text-lg">{"Let's make today amazing"}</p>
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 -mt-4 space-y-6">
          {/* Enhanced Progress Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{"Today's Progress"}</h2>
                <p className="text-gray-600">Track your nutrition goals</p>
              </div>
            </div>

            <div className="space-y-6  md:flex justify-center gap-8">
              {/* Calories */}
              <div className="relative w-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Fire className="w-4 h-4 text-white" />
                    </div>
                    Calories
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{Math.round(todayTotals.calories)}</span>
                    <span className="text-gray-500 text-sm ml-1">/ {dailyGoals.calories}</span>
                  </div>
                </div>
                <Progress value={(todayTotals.calories / dailyGoals.calories) * 100} color="red" />
              </div>

              {/* Protein */}
              <div className="relative w-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    Protein
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{Math.round(todayTotals.protein)}</span>
                    <span className="text-gray-500 text-sm ml-1">g / {dailyGoals.protein}g</span>
                  </div>
                </div>
                <Progress value={(todayTotals.protein / dailyGoals.protein) * 100} color="green" />
              </div>

              {/* Fat */}
              <div className="relative w-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    Fat
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{Math.round(todayTotals.fat)}</span>
                    <span className="text-gray-500 text-sm ml-1">g / {dailyGoals.fat}g</span>
                  </div>
                </div>
                <Progress value={(todayTotals.fat / dailyGoals.fat) * 100} color="purple" />
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
                <p className="text-gray-600">Add meals to your day</p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 gap-4">
              {Object.entries(mealTypeConfig).map(([mealType, config]) => (
                <button
                  key={mealType}
                  onClick={() => startNewMeal(new Date().toISOString().split("T")[0], mealType as any)}
                  className={`group relative p-6 rounded-2xl ${config.bgColor} border-2 border-dashed ${config.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {config.icon}
                    </div>
                    <div className={`text-lg font-bold ${config.textColor} mb-1`}>{config.name}</div>
                    <div className="text-sm text-gray-600">{config.time}</div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Today's Schedule */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{"Today's Schedule"}</h2>
                <p className="text-gray-600">Your planned activities</p>
              </div>
            </div>
            {todayEvents.length > 0 ? (
              <div className="space-y-4">
                {todayEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-lg">{event.title}</div>
                      <div className="text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                    {event.type === "meal" && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {(event as MealEvent).totalCalories} cal
                      </div>
                    )}
                  </div>
                ))}
                {todayEvents.length > 3 && (
                  <Button
                    variant="primary"
                    onClick={() => setCurrentView("meal-planner")}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    View all {todayEvents.length} events
                  </Button>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No events scheduled</h3>
                <p className="text-gray-500 mb-6">Start planning your perfect day!</p>
                <Button
                  variant="primary"
                  onClick={() => setCurrentView("meal-planner")}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Plan Your Day
                </Button>
              </div>
            )}
          </div>
        </div>

        <BottomNav />
      </div>
    )
  }

  // Enhanced Food Search View
  if (currentView === "food-search") {
    return (
      <div className="pb-20 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setCurrentView("meal-planner")} size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Add to <span className="capitalize text-blue-600">{selectedMealType}</span>
                </h1>
                <p className="text-sm text-gray-600">Search for recipes or ingredients</p>
              </div>
            </div>

            {/* Search Type Toggle */}
            <div className="flex gap-2 mt-4 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setSearchType("recipes")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  searchType === "recipes" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Utensils className="w-4 h-4" />
                Recipes
              </button>
              <button
                onClick={() => setSearchType("ingredients")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  searchType === "ingredients"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Apple className="w-4 h-4" />
                Ingredients
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
        </div>

        <BottomNav />
      </div>
    )
  }

  // Add Event View (keeping same)
  if (currentView === "add-event") {
    return (
      <div className="pb-20 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setCurrentView("meal-planner")} size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Add New Event</h1>
                <p className="text-sm text-gray-600">Create a workout, appointment, or reminder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          <Card>
            <div className="space-y-6">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Yoga Session, Project Deadline"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Event Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(eventTypeConfig).map(([type, config]) => (
                    <button
                      key={type}
                      onClick={() => setNewEvent((prev) => ({ ...prev, type: type as any }))}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        newEvent.type === type ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                          newEvent.type === type ? "bg-blue-600 text-white" : config.color + " text-white"
                        }`}
                      >
                        {config.icon}
                      </div>
                      <div
                        className={`text-sm font-medium ${newEvent.type === type ? "text-blue-900" : "text-gray-700"}`}
                      >
                        {config.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, time: e.target.value }))}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description (optional)</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Add more details about the event..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setCurrentView("meal-planner")} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={addRegularEvent} variant="primary" className="flex-1">
                  Add Event
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <BottomNav />
      </div>
    )
  }

  // Meal Planner View (keeping same)
  if (currentView === "meal-planner") {
    const displayDate = new Date(selectedDate + "T00:00:00Z")

    return (
      <div className="pb-20 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setCurrentView("calendar")} size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Daily Plan</h1>
                <p className="text-sm text-gray-600">
                  {displayDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 space-y-4">
          {/* Nutrition Summary */}
          {selectedDateMeals.length > 0 && (
            <Card padding="sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <h2 className="text-sm font-semibold text-gray-900">Nutrition Summary</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.calories)}</div>
                  <div className="text-xs text-gray-600">Calories</div>
                  <Progress value={progress.calories} color="red" className="mt-1" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.protein)}g</div>
                  <div className="text-xs text-gray-600">Protein</div>
                  <Progress value={progress.protein} color="green" className="mt-1" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{Math.round(selectedDateTotals.fat)}g</div>
                  <div className="text-xs text-gray-600">Fat</div>
                  <Progress value={progress.fat} color="purple" className="mt-1" />
                </div>
              </div>
            </Card>
          )}

          {/* Streamlined Meals Section */}
          <div className="space-y-3">
            {Object.entries(mealTypeConfig).map(([mealType, config]) => {
              const typedMealType = mealType as keyof typeof mealTypeConfig
              const mealsOfType = selectedDateMeals.filter((meal) => meal.mealType === typedMealType)

              return (
                <Card key={mealType} padding="sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${config.bgColor} rounded-lg flex items-center justify-center`}>
                        <span className="text-sm">{config.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{config.name}</h3>
                        {mealsOfType.length > 0 && (
                          <p className="text-xs text-gray-600">
                            {mealsOfType.reduce((sum, meal) => sum + meal.totalCalories, 0)} cal
                          </p>
                        )}
                      </div>
                    </div>
                    <Button onClick={() => startNewMeal(selectedDate, typedMealType)} variant="primary" size="sm">
                      <PlusCircle className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  {mealsOfType.length > 0 ? (
                    <div className="space-y-2">
                      {mealsOfType.map((meal) => (
                        <div key={meal.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">{meal.time}</span>
                              <Badge variant="success" className="text-xs">
                                {meal.totalCalories} cal
                              </Badge>
                            </div>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm" onClick={() => editMeal(meal)}>
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => deleteEvent(meal.id)}>
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {meal.foods.map((food) => (
                              <div key={food.id} className="flex items-center gap-2 text-sm">
                                <img
                                  src={food.image || "/placeholder.svg?height=24&width=24"}
                                  alt={food.title}
                                  className="w-6 h-6 rounded object-cover"
                                />
                                <span className="flex-1 text-gray-700 truncate">{food.title}</span>
                                <span className="text-gray-500">{food.calories} cal</span>
                                <Button variant="ghost" size="sm" onClick={() => removeFoodFromMeal(meal.id, food.id)}>
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
                      <span className="text-lg mb-1 block">{config.icon}</span>
                      <p className="text-sm text-gray-600 mb-2">No {mealType} planned</p>
                      <Button variant="outline" onClick={() => startNewMeal(selectedDate, typedMealType)} size="sm">
                        Add {config.name}
                      </Button>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>

          {/* Other Events */}
          <Card padding="sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-900">Other Events</h2>
              <Button
                onClick={() => {
                  setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                  setCurrentView("add-event")
                }}
                variant="primary"
                size="sm"
              >
                <PlusCircle className="w-3 h-3 mr-1" />
                Add
              </Button>
            </div>

            {selectedDateEvents.filter((event) => event.type !== "meal").length > 0 ? (
              <div className="space-y-2">
                {selectedDateEvents
                  .filter((event): event is RegularEvent => event.type !== "meal")
                  .map((event) => (
                    <div key={event.id} className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
                      <div
                        className={`w-6 h-6 ${eventTypeConfig[event.type].color} rounded flex items-center justify-center text-white`}
                      >
                        {eventTypeConfig[event.type].icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{event.title}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{event.time}</span>
                          {event.duration && <span>• {event.duration}</span>}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => deleteEvent(event.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
                <Activity className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">No events scheduled</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                    setCurrentView("add-event")
                  }}
                  size="sm"
                >
                  Add Event
                </Button>
              </div>
            )}
          </Card>
        </div>

        <BottomNav />
      </div>
    )
  }

  // Responsive Calendar View - Auto List on Small Screens
  return (
    <div className="pb-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Calendar</h1>
                <p className="text-sm text-gray-600">Plan your meals and events</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigateMonth("prev")} size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-semibold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <Button variant="ghost" onClick={() => navigateMonth("next")} size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <Card padding="sm">
            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2 ">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day) => {
                const mealEvents = day.events.filter((e): e is MealEvent => e.type === "meal")
                const otherEvents = day.events.filter((e): e is RegularEvent => e.type !== "meal")

                return (
                  <div
                    key={day.dateString}
                    onClick={() => {
                      if (day.isCurrentMonth) {
                        setSelectedDate(day.dateString)
                        setCurrentView("meal-planner")
                      }
                    }}
                    className={`
                      aspect-square p-2 rounded-lg cursor-pointer transition-colors md:shadow-sm
                      flex flex-col items-center justify-start relative
                      ${day.isCurrentMonth ? "hover:bg-gray-100" : "text-gray-400 cursor-not-allowed"}
                      ${day.isToday ? "bg-blue-50 border-2 border-blue-200" : ""}
                    `}
                  >
                    <div
                      className={`text-sm font-medium mb-1 ${
                        day.isToday ? "text-blue-600" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {day.date}
                    </div>

                    <div className="flex flex-col items-center w-full space-y-1">
                      {mealEvents.slice(0, 2).map((meal) => {
                        const config = mealTypeConfig[meal.mealType]
                        return (
                          <div
                            key={meal.id}
                            className={`w-full text-xs px-1 py-0.5 rounded text-center ${config.bgColor} ${config.textColor} font-medium`}
                          >
                            {meal.totalCalories}
                          </div>
                        )
                      })}

                      {otherEvents.slice(0, 1).map((event) => (
                        <div key={event.id} className={`w-2 h-2 rounded-full ${eventTypeConfig[event.type].color}`} />
                      ))}

                      {day.events.length > 3 && (
                        <div className="text-xs text-gray-500 font-medium">+{day.events.length - 3}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Mobile List View */}
        {/* <div className="md:hidden space-y-3">
          {calendarDays
            .filter((day) => day.isCurrentMonth)
            .map((day) => (
              <Card key={day.dateString} padding="sm">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedDate(day.dateString)
                    setCurrentView("meal-planner")
                  }}
                >
                  <div className="flex items-center justify-between mb-2 ">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium text-sm ${
                          day.isToday ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {day.date}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {new Date(day.dateString).toLocaleDateString("en-US", { weekday: "long" })}
                        </div>
                        <div className="text-sm text-gray-600">
                          {day.events.length > 0 ? `${day.events.length} events` : "No events"}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  {day.events.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {day.events.slice(0, 3).map((event) => (
                        <Badge key={event.id} variant="info" className="text-xs">
                          {event.type === "meal" ? `${(event as MealEvent).totalCalories} cal` : event.title}
                        </Badge>
                      ))}
                      {day.events.length > 3 && (
                        <Badge variant="default" className="text-xs">
                          +{day.events.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          {calendarDays.filter((day) => day.isCurrentMonth && day.events.length > 0).length === 0 && (
            <Card className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No events this month</h3>
              <p className="text-gray-600 mb-4">Start planning your meals and activities!</p>
              <Button variant="primary" onClick={() => setCurrentView("meal-planner")}>
                Add Events
              </Button>
            </Card>
          )}
        </div> */}

        <div className="md:hidden space-y-3">
  {calendarDays
    .filter((day) => day.isCurrentMonth)
    .map((day) => (
      <div key={day.dateString} className="bg-white rounded-lg  px-4 py-3"> {/* Replaced Card with div */}
        <div
          className="cursor-pointer"
          onClick={() => {
            setSelectedDate(day.dateString);
            setCurrentView("meal-planner");
          }}
        >
          <div className="flex items-center justify-between mb-2 ">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium text-sm ${
                  day.isToday ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                {day.date}
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {new Date(day.dateString).toLocaleDateString("en-US", { weekday: "long" })}
                </div>
                <div className="text-sm text-gray-600">
                  {day.events.length > 0 ? `${day.events.length} events` : "No events"}
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          {day.events.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {day.events.slice(0, 3).map((event) => (
                <Badge key={event.id} variant="info" className="text-xs">
                  {event.type === "meal" ? `${(event as MealEvent).totalCalories} cal` : event.title}
                </Badge>
              ))}
              {day.events.length > 3 && (
                <Badge variant="default" className="text-xs">
                  +{day.events.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    ))}
  {calendarDays.filter((day) => day.isCurrentMonth && day.events.length > 0).length === 0 && (
    <div className="bg-white rounded-lg shadow text-center py-8"> {/* Replaced Card with div */}
      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No events this month</h3>
      <p className="text-gray-600 mb-4">Start planning your meals and activities!</p>
      <Button variant="primary" onClick={() => setCurrentView("meal-planner")}>
        Add Events
      </Button>
    </div>
  )}
</div>
      </div>

      <BottomNav />
    </div>
  )
}

export default CalendarApp

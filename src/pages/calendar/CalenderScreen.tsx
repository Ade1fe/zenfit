
// import { useState } from "react"
// import { CalendarDays, PlusCircle, ChevronLeft, ChevronRight, Clock, Trash2, Save } from "lucide-react"
// import { Button } from "../../components/ui/button"
// import { Badge } from "../../components/ui/badge"

// // import { Button } from "./ui/button"
// // import { Badge } from "./ui/badge"

// interface CalendarEvent {
//   id: string
//   title: string
//   type: "meal" | "workout" | "appointment"
//   time: string
//   date: string
//   color: string
//   description?: string
// }

// interface Plan {
//   id: string
//   title: string
//   type: "meal" | "workout"
//   items: string[]
//   description: string
// }

// const CalendarScreen = () => {
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [selectedDate, setSelectedDate] = useState<string>("")
//   const [events, setEvents] = useState<CalendarEvent[]>([
//     {
//       id: "1",
//       title: "Morning Workout",
//       type: "workout",
//       time: "07:00",
//       date: "2024-12-28",
//       color: "bg-blue-500",
//       description: "Full body strength training",
//     },
//     {
//       id: "2",
//       title: "Healthy Breakfast",
//       type: "meal",
//       time: "08:30",
//       date: "2024-12-28",
//       color: "bg-green-500",
//       description: "Oatmeal with fruits",
//     },
//   ])

//   const [showAddEvent, setShowAddEvent] = useState(false)
//   const [showPlans, setShowPlans] = useState(false)
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     type: "meal" as "meal" | "workout" | "appointment",
//     time: "",
//     date: "",
//     description: "",
//   })

//   // Built-in plans
//   const builtInPlans: Plan[] = [
//     {
//       id: "plan-1",
//       title: "7-Day Mediterranean Diet",
//       type: "meal",
//       description: "Healthy Mediterranean meals for a week",
//       items: [
//         "Greek Yogurt with Berries",
//         "Grilled Salmon with Quinoa",
//         "Mediterranean Chicken Bowl",
//         "Hummus and Veggie Wrap",
//         "Olive Oil Pasta with Vegetables",
//       ],
//     },
//     {
//       id: "plan-2",
//       title: "Beginner Workout Routine",
//       type: "workout",
//       description: "Perfect for fitness beginners",
//       items: ["Push-ups (3x8-12)", "Squats (3x10-15)", "Plank (3x30-60s)", "Walking (20 mins)", "Stretching (10 mins)"],
//     },
//     {
//       id: "plan-3",
//       title: "High Protein Meal Plan",
//       type: "meal",
//       description: "Protein-rich meals for muscle building",
//       items: [
//         "Protein Pancakes",
//         "Chicken & Rice Bowl",
//         "Lean Beef Stir Fry",
//         "Protein Smoothie",
//         "Grilled Fish with Vegetables",
//       ],
//     },
//   ]

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

//   const generateCalendarDays = () => {
//     const year = currentDate.getFullYear()
//     const month = currentDate.getMonth()
//     const today = new Date()

//     const firstDay = new Date(year, month, 1)
//     const lastDay = new Date(year, month + 1, 0)
//     const startDate = new Date(firstDay)
//     startDate.setDate(startDate.getDate() - firstDay.getDay())

//     const days = []
//     const currentDay = new Date(startDate)

//     for (let i = 0; i < 42; i++) {
//       const isCurrentMonth = currentDay.getMonth() === month
//       const isToday = currentDay.toDateString() === today.toDateString()
//       const dateString = currentDay.toISOString().split("T")[0]
//       const dayEvents = events.filter((event) => event.date === dateString)

//       days.push({
//         date: currentDay.getDate(),
//         dateString,
//         isCurrentMonth,
//         isToday,
//         events: dayEvents,
//       })

//       currentDay.setDate(currentDay.getDate() + 1)
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

//   const addEvent = () => {
//     if (newEvent.title && newEvent.date && newEvent.time) {
//       const event: CalendarEvent = {
//         id: Date.now().toString(),
//         title: newEvent.title,
//         type: newEvent.type,
//         time: newEvent.time,
//         date: newEvent.date,
//         description: newEvent.description,
//         color:
//           newEvent.type === "meal" ? "bg-green-500" : newEvent.type === "workout" ? "bg-blue-500" : "bg-purple-500",
//       }

//       setEvents((prev) => [...prev, event])
//       setNewEvent({ title: "", type: "meal", time: "", date: "", description: "" })
//       setShowAddEvent(false)
//     }
//   }

//   const deleteEvent = (eventId: string) => {
//     setEvents((prev) => prev.filter((event) => event.id !== eventId))
//   }

//   const addPlanToCalendar = (plan: Plan, startDate: string) => {
//     const newEvents = plan.items.map((item, index) => {
//       const eventDate = new Date(startDate)
//       eventDate.setDate(eventDate.getDate() + index)

//       return {
//         id: `${plan.id}-${index}-${Date.now()}`,
//         title: item,
//         type: plan.type as "meal" | "workout",
//         time: plan.type === "meal" ? "12:00" : "09:00",
//         date: eventDate.toISOString().split("T")[0],
//         color: plan.type === "meal" ? "bg-green-500" : "bg-blue-500",
//         description: `From ${plan.title}`,
//       }
//     })

//     setEvents((prev) => [...prev, ...newEvents])
//     setShowPlans(false)
//   }

//   const calendarDays = generateCalendarDays()
//   const todaysEvents = events.filter((event) => event.date === new Date().toISOString().split("T")[0])

//   return (
//     <div className="p-4 lg:p-6 space-y-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <CalendarDays className="w-8 h-8 text-purple-600" />
//             My Calendar & Plans
//           </h1>
//           <p className="text-gray-600 mt-1">Plan and track your meals, workouts, and appointments</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Button variant="outline" onClick={() => setShowPlans(true)}>
//             View Plans
//           </Button>
//           <Button onClick={() => setShowAddEvent(true)} className="bg-gradient-to-r from-purple-600 to-blue-600">
//             <PlusCircle className="w-4 h-4 mr-2" />
//             Add Event
//           </Button>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-4 gap-6">
//         {/* Main Calendar */}
//         <div className="lg:col-span-3">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//             {/* Calendar Header */}
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <h2 className="text-xl font-semibold">
//                     {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                   </h2>
//                   <div className="flex items-center gap-1">
//                     <button
//                       onClick={() => navigateMonth("prev")}
//                       className="p-2 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       <ChevronLeft className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => navigateMonth("next")}
//                       className="p-2 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Calendar Grid */}
//             <div className="p-4">
//               {/* Week Days Header */}
//               <div className="grid grid-cols-7 gap-1 mb-2">
//                 {weekDays.map((day) => (
//                   <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Days */}
//               <div className="grid grid-cols-7 gap-1">
//                 {calendarDays.map((day, index) => (
//                   <div
//                     key={index}
//                     className={`
//                       min-h-[80px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50
//                       ${!day.isCurrentMonth ? "text-gray-300 bg-gray-50/50" : ""}
//                       ${day.isToday ? "bg-blue-50 border-blue-200" : ""}
//                       ${selectedDate === day.dateString ? "ring-2 ring-purple-500" : ""}
//                     `}
//                     onClick={() => setSelectedDate(day.dateString)}
//                   >
//                     <div
//                       className={`
//                       text-sm font-medium mb-1
//                       ${day.isToday ? "text-blue-600" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
//                     `}
//                     >
//                       {day.date}
//                     </div>

//                     {/* Events */}
//                     <div className="space-y-1">
//                       {day.events.slice(0, 2).map((event) => (
//                         <div key={event.id} className={`text-xs px-2 py-1 rounded text-white truncate ${event.color}`}>
//                           {event.type === "meal" ? "🍽️" : event.type === "workout" ? "🏋️" : "📅"} {event.title}
//                         </div>
//                       ))}
//                       {day.events.length > 2 && (
//                         <div className="text-xs text-gray-500 px-2">+{day.events.length - 2} more</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           {/* Today's Schedule */}
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <Clock className="w-5 h-5 text-purple-600" />
//               Today's Schedule
//             </h3>

//             <div className="space-y-3">
//               {todaysEvents.length > 0 ? (
//                 todaysEvents.map((event) => (
//                   <div key={event.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className={`w-3 h-3 rounded-full ${event.color} mt-1 flex-shrink-0`} />
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center justify-between">
//                         <h4 className="text-sm font-medium text-gray-900 truncate">
//                           {event.type === "meal" ? "🍽️" : event.type === "workout" ? "🏋️" : "📅"} {event.title}
//                         </h4>
//                         <button onClick={() => deleteEvent(event.id)} className="text-red-500 hover:text-red-700 p-1">
//                           <Trash2 className="w-3 h-3" />
//                         </button>
//                       </div>
//                       <div className="text-xs text-gray-500 mt-1">{event.time}</div>
//                       {event.description && <div className="text-xs text-gray-500 mt-1">{event.description}</div>}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-6 text-gray-500">
//                   <CalendarDays className="w-8 h-8 mx-auto mb-2 text-gray-300" />
//                   <p className="text-sm">No events scheduled for today</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>

//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                   <span className="text-sm text-gray-600">Meals Planned</span>
//                 </div>
//                 <Badge variant="secondary">{events.filter((e) => e.type === "meal").length}</Badge>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-blue-500" />
//                   <span className="text-sm text-gray-600">Workouts</span>
//                 </div>
//                 <Badge variant="secondary">{events.filter((e) => e.type === "workout").length}</Badge>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-purple-500" />
//                   <span className="text-sm text-gray-600">Appointments</span>
//                 </div>
//                 <Badge variant="secondary">{events.filter((e) => e.type === "appointment").length}</Badge>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add Event Modal */}
//       {showAddEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold mb-4">Add New Event</h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={newEvent.title}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
//                   placeholder="Event title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
//                 <select
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={newEvent.type}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, type: e.target.value as any }))}
//                 >
//                   <option value="meal">Meal</option>
//                   <option value="workout">Workout</option>
//                   <option value="appointment">Appointment</option>
//                 </select>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={newEvent.date}
//                     onChange={(e) => setNewEvent((prev) => ({ ...prev, date: e.target.value }))}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
//                   <input
//                     type="time"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={newEvent.time}
//                     onChange={(e) => setNewEvent((prev) => ({ ...prev, time: e.target.value }))}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   rows={3}
//                   value={newEvent.description}
//                   onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
//                   placeholder="Optional description"
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3 mt-6">
//               <Button variant="outline" onClick={() => setShowAddEvent(false)} className="flex-1">
//                 Cancel
//               </Button>
//               <Button onClick={addEvent} className="flex-1">
//                 <Save className="w-4 h-4 mr-2" />
//                 Add Event
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Plans Modal */}
//       {showPlans && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">Built-in Plans</h3>
//               <button onClick={() => setShowPlans(false)} className="text-gray-500 hover:text-gray-700">
//                 ✕
//               </button>
//             </div>

//             <div className="space-y-4">
//               {builtInPlans.map((plan) => (
//                 <div key={plan.id} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex items-start justify-between mb-2">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//                         {plan.type === "meal" ? "🍽️" : "🏋️"} {plan.title}
//                       </h4>
//                       <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
//                     </div>
//                     <Badge variant="outline">{plan.type}</Badge>
//                   </div>

//                   <div className="mb-3">
//                     <h5 className="text-sm font-medium text-gray-700 mb-2">Includes:</h5>
//                     <div className="space-y-1">
//                       {plan.items.slice(0, 3).map((item, index) => (
//                         <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
//                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
//                           {item}
//                         </div>
//                       ))}
//                       {plan.items.length > 3 && (
//                         <div className="text-xs text-gray-500">+{plan.items.length - 3} more items</div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <input
//                       type="date"
//                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 text-sm"
//                       onChange={(e) => {
//                         if (e.target.value) {
//                           addPlanToCalendar(plan, e.target.value)
//                         }
//                       }}
//                     />
//                     <Button size="sm" variant="outline">
//                       Add to Calendar
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CalendarScreen
// "use client"

// import { useState } from "react"
// import { CalendarDays, ChefHat, PlusCircle, ChevronLeft, ChevronRight, Clock, Edit, Trash2 } from "lucide-react"
// import { Button } from "../../components/ui/button"
// import { Badge } from "../../components/ui/badge"
// import FoodSearch from "../../components/food-search"
// // import { Button } from "./ui/button"
// // import { Badge } from "./ui/badge"
// // import FoodSearch from "./food-search"

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
//   type: "breakfast" | "lunch" | "dinner" | "snack"
//   time: string
//   date: string
//   foods: FoodItem[]
//   totalCalories: number
//   totalProtein: number
//   totalCarbs: number
//   totalFat: number
// }

// interface DayData {
//   date: number
//   dateString: string
//   isCurrentMonth: boolean
//   isToday: boolean
//   meals: MealEvent[]
//   totalCalories: number
// }

// type View = "calendar" | "meal-planner" | "food-search"

// const CalendarScreen = () => {
//   const [currentView, setCurrentView] = useState<View>("calendar")
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [selectedDate, setSelectedDate] = useState<string>("")
//   const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
//   const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
//   const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)

//   const [mealEvents, setMealEvents] = useState<MealEvent[]>([
//     {
//       id: "1",
//       title: "Healthy Breakfast",
//       type: "breakfast",
//       time: "08:00",
//       date: "2024-12-28",
//       foods: [
//         {
//           id: 1,
//           title: "Greek Yogurt with Berries",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 150,
//           protein: 15,
//           carbs: 20,
//           fat: 3,
//         },
//       ],
//       totalCalories: 150,
//       totalProtein: 15,
//       totalCarbs: 20,
//       totalFat: 3,
//     },
//   ])

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
//     breakfast: { icon: "🌅", color: "bg-orange-100 text-orange-800", time: "08:00" },
//     lunch: { icon: "☀️", color: "bg-yellow-100 text-yellow-800", time: "12:00" },
//     dinner: { icon: "🌙", color: "bg-blue-100 text-blue-800", time: "18:00" },
//     snack: { icon: "🍎", color: "bg-green-100 text-green-800", time: "15:00" },
//   }

//   const generateCalendarDays = (): DayData[] => {
//     const year = currentDate.getFullYear()
//     const month = currentDate.getMonth()
//     const today = new Date()

//     const firstDay = new Date(year, month, 1)
//     const startDate = new Date(firstDay)
//     startDate.setDate(startDate.getDate() - firstDay.getDay())

//     const days: DayData[] = []
//     const currentDay = new Date(startDate)

//     for (let i = 0; i < 42; i++) {
//       const isCurrentMonth = currentDay.getMonth() === month
//       const isToday = currentDay.toDateString() === today.toDateString()
//       const dateString = currentDay.toISOString().split("T")[0]
//       const dayMeals = mealEvents.filter((meal) => meal.date === dateString)
//       const totalCalories = dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0)

//       days.push({
//         date: currentDay.getDate(),
//         dateString,
//         isCurrentMonth,
//         isToday,
//         meals: dayMeals,
//         totalCalories,
//       })

//       currentDay.setDate(currentDay.getDate() + 1)
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

//       setMealEvents((prev) => prev.map((meal) => (meal.id === editingMeal.id ? updatedMeal : meal)))
//       setEditingMeal(updatedMeal)
//     } else {
//       // Create new meal
//       const newMeal: MealEvent = {
//         id: Date.now().toString(),
//         title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)} - ${food.title}`,
//         type: selectedMealType,
//         time: mealTypeConfig[selectedMealType].time,
//         date: selectedDate,
//         foods: [food],
//         totalCalories: food.calories || 0,
//         totalProtein: food.protein || 0,
//         totalCarbs: food.carbs || 0,
//         totalFat: food.fat || 0,
//       }

//       setMealEvents((prev) => [...prev, newMeal])
//     }

//     setCurrentView("meal-planner")
//   }

//   const removeFoodFromMeal = (mealId: string, foodId: number) => {
//     setMealEvents((prev) =>
//       prev.map((meal) => {
//         if (meal.id === mealId) {
//           const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
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
//       }),
//     )
//   }

//   const deleteMeal = (mealId: string) => {
//     setMealEvents((prev) => prev.filter((meal) => meal.id !== mealId))
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
//     setSelectedMealType(meal.type)
//     setCurrentView("meal-planner")
//   }

//   const calendarDays = generateCalendarDays()
//   const selectedDateMeals = mealEvents.filter((meal) => meal.date === selectedDate)
//   const selectedDateTotals = selectedDateMeals.reduce(
//     (totals, meal) => ({
//       calories: totals.calories + meal.totalCalories,
//       protein: totals.protein + meal.totalProtein,
//       carbs: totals.carbs + meal.totalCarbs,
//       fat: totals.fat + meal.totalFat,
//     }),
//     { calories: 0, protein: 0, carbs: 0, fat: 0 },
//   )

//   // Food Search View
//   if (currentView === "food-search") {
//     return (
//       <div className="p-6 space-y-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Button variant="outline" onClick={() => setCurrentView("meal-planner")}>
//               ← Back
//             </Button>
//             <div>
//               <h2 className="text-xl font-bold text-gray-900">
//                 Add Food to {selectedMealType} - {new Date(selectedDate).toLocaleDateString()}
//               </h2>
//               <p className="text-gray-600">Search for foods to add to your meal</p>
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <Button
//               variant={searchType === "recipes" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSearchType("recipes")}
//             >
//               Recipes
//             </Button>
//             <Button
//               variant={searchType === "ingredients" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSearchType("ingredients")}
//             >
//               Ingredients
//             </Button>
//           </div>
//         </div>

//         <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
//       </div>
//     )
//   }

//   // Meal Planner View
//   if (currentView === "meal-planner") {
//     return (
//       <div className="p-6 space-y-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Button variant="outline" onClick={() => setCurrentView("calendar")}>
//               ← Back to Calendar
//             </Button>
//             <div>
//               <h2 className="text-xl font-bold text-gray-900">
//                 Meal Plan - {new Date(selectedDate).toLocaleDateString()}
//               </h2>
//               <p className="text-gray-600">Plan your meals for the day</p>
//             </div>
//           </div>
//         </div>

//         {/* Daily Nutrition Summary */}
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
//           <h3 className="text-lg font-semibold mb-4">Daily Nutrition Summary</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-red-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-red-600">{Math.round(selectedDateTotals.calories)}</div>
//               <div className="text-sm text-red-700">Calories</div>
//               <div className="text-xs text-gray-500 mt-1">Goal: 2000</div>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-blue-600">{Math.round(selectedDateTotals.protein)}g</div>
//               <div className="text-sm text-blue-700">Protein</div>
//               <div className="text-xs text-gray-500 mt-1">Goal: 150g</div>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-green-600">{Math.round(selectedDateTotals.carbs)}g</div>
//               <div className="text-sm text-green-700">Carbs</div>
//               <div className="text-xs text-gray-500 mt-1">Goal: 250g</div>
//             </div>
//             <div className="bg-yellow-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-yellow-600">{Math.round(selectedDateTotals.fat)}g</div>
//               <div className="text-sm text-yellow-700">Fat</div>
//               <div className="text-xs text-gray-500 mt-1">Goal: 65g</div>
//             </div>
//           </div>
//         </div>

//         {/* Meals for Selected Date */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {Object.entries(mealTypeConfig).map(([mealType, config]) => {
//             const typedMealType = mealType as keyof typeof mealTypeConfig
//             const mealsOfType = selectedDateMeals.filter((meal) => meal.type === typedMealType)

//             return (
//               <div key={mealType} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     <span className="text-2xl">{config.icon}</span>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 capitalize">{mealType}</h3>
//                       <Badge className={config.color}>
//                         {mealsOfType.reduce((sum, meal) => sum + meal.totalCalories, 0)} cal
//                       </Badge>
//                     </div>
//                   </div>
//                   <Button size="sm" onClick={() => startNewMeal(selectedDate, typedMealType)}>
//                     <PlusCircle className="w-4 h-4 mr-2" />
//                     Add
//                   </Button>
//                 </div>

//                 <div className="space-y-3">
//                   {mealsOfType.length > 0 ? (
//                     mealsOfType.map((meal) => (
//                       <div key={meal.id} className="border border-gray-200 rounded-lg p-3">
//                         <div className="flex items-center justify-between mb-2">
//                           <h4 className="font-medium text-gray-900">{meal.title}</h4>
//                           <div className="flex gap-1">
//                             <button onClick={() => editMeal(meal)} className="text-blue-500 hover:text-blue-700 p-1">
//                               <Edit className="w-4 h-4" />
//                             </button>
//                             <button onClick={() => deleteMeal(meal.id)} className="text-red-500 hover:text-red-700 p-1">
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           {meal.foods.map((food) => (
//                             <div key={food.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
//                               <img
//                                 src={food.image || "/placeholder.svg"}
//                                 alt={food.title}
//                                 className="w-8 h-8 rounded object-cover"
//                                 onError={(e) => {
//                                   e.currentTarget.src = "/placeholder.svg?height=32&width=32"
//                                 }}
//                               />
//                               <div className="flex-1 min-w-0">
//                                 <div className="text-sm font-medium text-gray-900 truncate">{food.title}</div>
//                                 <div className="text-xs text-gray-500">
//                                   {food.calories} cal • {food.protein}g protein
//                                 </div>
//                               </div>
//                               <button
//                                 onClick={() => removeFoodFromMeal(meal.id, food.id)}
//                                 className="text-red-500 hover:text-red-700 p-1"
//                               >
//                                 <Trash2 className="w-3 h-3" />
//                               </button>
//                             </div>
//                           ))}
//                         </div>

//                         {editingMeal?.id === meal.id && (
//                           <div className="mt-3 pt-3 border-t border-gray-200">
//                             <Button
//                               size="sm"
//                               variant="outline"
//                               onClick={() => {
//                                 setCurrentView("food-search")
//                               }}
//                               className="w-full"
//                             >
//                               <PlusCircle className="w-4 h-4 mr-2" />
//                               Add More Foods
//                             </Button>
//                           </div>
//                         )}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="text-center py-6 text-gray-500">
//                       <ChefHat className="w-8 h-8 mx-auto mb-2 text-gray-300" />
//                       <p className="text-sm">No {mealType} planned</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }

//   // Calendar View (Default)
//   return (
//     <div className="p-4 lg:p-6 space-y-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <CalendarDays className="w-8 h-8 text-purple-600" />
//             Meal Planning Calendar
//           </h1>
//           <p className="text-gray-600 mt-1">Plan and track your meals with real food data</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Button
//             variant="outline"
//             onClick={() => {
//               setSelectedDate(new Date().toISOString().split("T")[0])
//               setCurrentView("meal-planner")
//             }}
//           >
//             <ChefHat className="w-4 h-4 mr-2" />
//             Plan Today
//           </Button>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-4 gap-6">
//         {/* Main Calendar */}
//         <div className="lg:col-span-3">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//             {/* Calendar Header */}
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <h2 className="text-xl font-semibold">
//                     {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                   </h2>
//                   <div className="flex items-center gap-1">
//                     <button
//                       onClick={() => navigateMonth("prev")}
//                       className="p-2 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       <ChevronLeft className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => navigateMonth("next")}
//                       className="p-2 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Calendar Grid */}
//             <div className="p-4">
//               {/* Week Days Header */}
//               <div className="grid grid-cols-7 gap-1 mb-2">
//                 {weekDays.map((day) => (
//                   <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Days */}
//               <div className="grid grid-cols-7 gap-1">
//                 {calendarDays.map((day, index) => (
//                   <div
//                     key={index}
//                     className={`
//                       min-h-[100px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50
//                       ${!day.isCurrentMonth ? "text-gray-300 bg-gray-50/50" : ""}
//                       ${day.isToday ? "bg-blue-50 border-blue-200" : ""}
//                       ${selectedDate === day.dateString ? "ring-2 ring-purple-500" : ""}
//                     `}
//                     onClick={() => {
//                       setSelectedDate(day.dateString)
//                       setCurrentView("meal-planner")
//                     }}
//                   >
//                     <div
//                       className={`
//                       text-sm font-medium mb-1
//                       ${day.isToday ? "text-blue-600" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
//                     `}
//                     >
//                       {day.date}
//                     </div>

//                     {/* Meal indicators */}
//                     <div className="space-y-1">
//                       {day.meals.slice(0, 3).map((meal) => (
//                         <div
//                           key={meal.id}
//                           className={`text-xs px-2 py-1 rounded text-white truncate ${
//                             meal.type === "breakfast"
//                               ? "bg-orange-500"
//                               : meal.type === "lunch"
//                                 ? "bg-yellow-500"
//                                 : meal.type === "dinner"
//                                   ? "bg-blue-500"
//                                   : "bg-green-500"
//                           }`}
//                         >
//                           {mealTypeConfig[meal.type].icon} {meal.totalCalories} cal
//                         </div>
//                       ))}
//                       {day.meals.length > 3 && (
//                         <div className="text-xs text-gray-500 px-2">+{day.meals.length - 3} more</div>
//                       )}
//                     </div>

//                     {/* Daily total */}
//                     {day.totalCalories > 0 && (
//                       <div className="mt-2 text-xs text-center bg-gray-100 rounded px-2 py-1">
//                         {day.totalCalories} cal total
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           {/* Today's Meals */}
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <Clock className="w-5 h-5 text-purple-600" />
//               Today's Meals
//             </h3>

//             <div className="space-y-3">
//               {mealEvents
//                 .filter((meal) => meal.date === new Date().toISOString().split("T")[0])
//                 .sort((a, b) => a.time.localeCompare(b.time))
//                 .map((meal) => (
//                   <div key={meal.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <span className="text-lg">{mealTypeConfig[meal.type].icon}</span>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 truncate">{meal.title}</h4>
//                       <div className="text-xs text-gray-500">
//                         {meal.time} • {meal.totalCalories} cal • {meal.foods.length} items
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//               {mealEvents.filter((meal) => meal.date === new Date().toISOString().split("T")[0]).length === 0 && (
//                 <div className="text-center py-6 text-gray-500">
//                   <ChefHat className="w-8 h-8 mx-auto mb-2 text-gray-300" />
//                   <p className="text-sm">No meals planned for today</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>

//             <div className="space-y-2">
//               {Object.entries(mealTypeConfig).map(([mealType, config]) => (
//                 <Button
//                   key={mealType}
//                   variant="outline"
//                   className="w-full justify-start bg-transparent"
//                   size="sm"
//                   onClick={() => startNewMeal(new Date().toISOString().split("T")[0], mealType as any)}
//                 >
//                   {config.icon} Plan {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CalendarScreen
"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import FoodSearch from "../../components/food-search"

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

type View = "calendar" | "meal-planner" | "food-search" | "add-event"

const CalendarScreen = () => {
  const [currentView, setCurrentView] = useState<View>("calendar")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
  const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
  const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)

  // New event form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "workout" as "workout" | "appointment" | "reminder",
    time: "",
    date: "",
    description: "",
    duration: "",
  })

  const [events, setEvents] = useState<CalendarEvent[]>([
    // Sample meal event
    {
      id: "meal-1",
      title: "Healthy Breakfast",
      type: "meal",
      mealType: "breakfast",
      time: "08:00",
      date: "2024-12-28",
      foods: [
        {
          id: 1,
          title: "Greek Yogurt with Berries",
          image: "/placeholder.svg?height=100&width=100",
          calories: 150,
          protein: 15,
          carbs: 20,
          fat: 3,
        },
      ],
      totalCalories: 150,
      totalProtein: 15,
      totalCarbs: 20,
      totalFat: 3,
    } as MealEvent,
    // Sample regular events
    {
      id: "workout-1",
      title: "Morning Workout",
      type: "workout",
      time: "07:00",
      date: "2024-12-28",
      description: "Full body strength training",
      duration: "1h",
      color: "bg-blue-500",
    } as RegularEvent,
    {
      id: "appointment-1",
      title: "Doctor Appointment",
      type: "appointment",
      time: "14:00",
      date: "2024-12-28",
      description: "Annual checkup",
      duration: "30m",
      color: "bg-purple-500",
    } as RegularEvent,
  ])

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
    breakfast: { icon: "🌅", color: "bg-orange-100 text-orange-800", time: "08:00" },
    lunch: { icon: "☀️", color: "bg-yellow-100 text-yellow-800", time: "12:00" },
    dinner: { icon: "🌙", color: "bg-blue-100 text-blue-800", time: "18:00" },
    snack: { icon: "🍎", color: "bg-green-100 text-green-800", time: "15:00" },
  }

  const eventTypeConfig = {
    workout: { icon: "🏋️", color: "bg-blue-500" },
    appointment: { icon: "👥", color: "bg-purple-500" },
    reminder: { icon: "⏰", color: "bg-orange-500" },
  }

  const generateCalendarDays = (): DayData[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const today = new Date()

    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days: DayData[] = []
    const currentDay = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDay.getMonth() === month
      const isToday = currentDay.toDateString() === today.toDateString()
      const dateString = currentDay.toISOString().split("T")[0]
      const dayEvents = events.filter((event) => event.date === dateString)
      const totalCalories = dayEvents
        .filter((event): event is MealEvent => event.type === "meal")
        .reduce((sum, meal) => sum + meal.totalCalories, 0)

      days.push({
        date: currentDay.getDate(),
        dateString,
        isCurrentMonth,
        isToday,
        events: dayEvents,
        totalCalories,
      })

      currentDay.setDate(currentDay.getDate() + 1)
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

  // Add regular event
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
      setNewEvent({ title: "", type: "workout", time: "", date: "", description: "", duration: "" })
      setCurrentView("calendar")
    }
  }

  // Add food to meal
  const addFoodToMeal = (food: FoodItem) => {
    if (editingMeal) {
      // Add to existing meal
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
      // Create new meal
      const newMeal: MealEvent = {
        id: Date.now().toString(),
        title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)} - ${food.title}`,
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
    setEvents((prev) =>
      prev.map((event) => {
        if (event.type === "meal" && event.id === mealId) {
          const meal = event as MealEvent
          const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
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
      }),
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
    setCurrentView("meal-planner")
  }

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

  // Add Event View
  if (currentView === "add-event") {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setCurrentView("calendar")}>
              ← Back to Calendar
            </Button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Add New Event</h2>
              <p className="text-gray-600">Create a workout, appointment, or reminder</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                value={newEvent.title}
                onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Enter event title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <select
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                value={newEvent.type}
                onChange={(e) => setNewEvent((prev) => ({ ...prev, type: e.target.value as any }))}
              >
                <option value="workout">🏋️ Workout</option>
                <option value="appointment">👥 Appointment</option>
                <option value="reminder">⏰ Reminder</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, date: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, time: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration (optional)</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                value={newEvent.duration}
                onChange={(e) => setNewEvent((prev) => ({ ...prev, duration: e.target.value }))}
                placeholder="e.g., 1h, 30m"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                rows={3}
                value={newEvent.description}
                onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Event details..."
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => setCurrentView("calendar")} className="flex-1">
              Cancel
            </Button>
            <Button onClick={addRegularEvent} className="flex-1">
              Add Event
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Food Search View
  if (currentView === "food-search") {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setCurrentView("meal-planner")}>
              ← Back
            </Button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Add Food to {selectedMealType} - {new Date(selectedDate).toLocaleDateString()}
              </h2>
              <p className="text-gray-600">Search for foods to add to your meal</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={searchType === "recipes" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchType("recipes")}
            >
              Recipes
            </Button>
            <Button
              variant={searchType === "ingredients" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchType("ingredients")}
            >
              Ingredients
            </Button>
          </div>
        </div>

        {/* <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} /> */}
         <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
      </div>
    )
  }

  // Meal Planner View
  if (currentView === "meal-planner") {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setCurrentView("calendar")}>
              ← Back to Calendar
            </Button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {new Date(selectedDate).toLocaleDateString()} - All Events
              </h2>
              <p className="text-gray-600">Manage meals and events for this day</p>
            </div>
          </div>
        </div>

        {/* Daily Nutrition Summary */}
        {selectedDateMeals.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Daily Nutrition Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-600">{Math.round(selectedDateTotals.calories)}</div>
                <div className="text-sm text-red-700">Calories</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{Math.round(selectedDateTotals.protein)}g</div>
                <div className="text-sm text-blue-700">Protein</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{Math.round(selectedDateTotals.carbs)}g</div>
                <div className="text-sm text-green-700">Carbs</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">{Math.round(selectedDateTotals.fat)}g</div>
                <div className="text-sm text-yellow-700">Fat</div>
              </div>
            </div>
          </div>
        )}

        {/* All Events for Selected Date */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Meals Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-green-600" />
              Meals
            </h3>

            {Object.entries(mealTypeConfig).map(([mealType, config]) => {
              const typedMealType = mealType as keyof typeof mealTypeConfig
              const mealsOfType = selectedDateMeals.filter((meal) => meal.mealType === typedMealType)

              return (
                <div key={mealType} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{config.icon}</span>
                      <span className="font-medium capitalize">{mealType}</span>
                      {mealsOfType.length > 0 && (
                        <Badge className={config.color}>
                          {mealsOfType.reduce((sum, meal) => sum + meal.totalCalories, 0)} cal
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" onClick={() => startNewMeal(selectedDate, typedMealType)}>
                      <PlusCircle className="w-4 h-4" />
                    </Button>
                  </div>

                  {mealsOfType.length > 0 ? (
                    mealsOfType.map((meal) => (
                      <div key={meal.id} className="border border-gray-200 rounded-lg p-3 mb-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{meal.title}</span>
                          <div className="flex gap-1">
                            <button onClick={() => editMeal(meal)} className="text-blue-500 hover:text-blue-700 p-1">
                              <Edit className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => deleteEvent(meal.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {meal.time} • {meal.foods.length} items • {meal.totalCalories} cal
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-gray-500 text-sm">No {mealType} planned</div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Other Events Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Other Events
            </h3>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Workouts & Appointments</span>
                <Button
                  size="sm"
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                    setCurrentView("add-event")
                  }}
                >
                  <PlusCircle className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                {selectedDateEvents
                  .filter((event): event is RegularEvent => event.type !== "meal")
                  .map((event) => (
                    <div key={event.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${event.color}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {eventTypeConfig[event.type].icon} {event.title}
                          </h4>
                          <button onClick={() => deleteEvent(event.id)} className="text-red-500 hover:text-red-700 p-1">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-xs text-gray-500">
                          {event.time} {event.duration && `• ${event.duration}`}
                        </div>
                        {event.description && <div className="text-xs text-gray-500 mt-1">{event.description}</div>}
                      </div>
                    </div>
                  ))}

                {selectedDateEvents.filter((event) => event.type !== "meal").length === 0 && (
                  <div className="text-center py-4 text-gray-500 text-sm">No other events planned</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Calendar View (Default)
  return (
    <div className="p-4 lg:p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarDays className="w-8 h-8 text-purple-600" />
            Complete Calendar System
          </h1>
          <p className="text-gray-600 mt-1">Plan meals, workouts, and appointments all in one place</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setCurrentView("add-event")}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Event
          </Button>
          <Button
            onClick={() => {
              setSelectedDate(new Date().toISOString().split("T")[0])
              setCurrentView("meal-planner")
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600"
          >
            <ChefHat className="w-4 h-4 mr-2" />
            Plan Meals
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Calendar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => navigateMonth("prev")}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateMonth("next")}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      min-h-[100px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50
                      ${!day.isCurrentMonth ? "text-gray-300 bg-gray-50/50" : ""}
                      ${day.isToday ? "bg-blue-50 border-blue-200" : ""}
                      ${selectedDate === day.dateString ? "ring-2 ring-purple-500" : ""}
                    `}
                    onClick={() => {
                      setSelectedDate(day.dateString)
                      setCurrentView("meal-planner")
                    }}
                  >
                    <div
                      className={`
                      text-sm font-medium mb-1
                      ${day.isToday ? "text-blue-600" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                    `}
                    >
                      {day.date}
                    </div>

                    {/* Event indicators */}
                    <div className="space-y-1">
                      {day.events.slice(0, 3).map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs px-2 py-1 rounded text-white truncate ${
                            event.type === "meal"
                              ? mealTypeConfig[(event as MealEvent).mealType].icon === "🌅"
                                ? "bg-orange-500"
                                : mealTypeConfig[(event as MealEvent).mealType].icon === "☀️"
                                  ? "bg-yellow-500"
                                  : mealTypeConfig[(event as MealEvent).mealType].icon === "🌙"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                              : (event as RegularEvent).color
                          }`}
                        >
                          {event.type === "meal"
                            ? `${mealTypeConfig[(event as MealEvent).mealType].icon} ${(event as MealEvent).totalCalories} cal`
                            : `${eventTypeConfig[(event as RegularEvent).type].icon} ${event.title}`}
                        </div>
                      ))}
                      {day.events.length > 3 && (
                        <div className="text-xs text-gray-500 px-2">+{day.events.length - 3} more</div>
                      )}
                    </div>

                    {/* Daily calorie total */}
                    {day.totalCalories > 0 && (
                      <div className="mt-2 text-xs text-center bg-gray-100 rounded px-2 py-1">
                        {day.totalCalories} cal total
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Events */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              Today's Schedule
            </h3>

            <div className="space-y-3">
              {events
                .filter((event) => event.date === new Date().toISOString().split("T")[0])
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-lg">
                      {event.type === "meal"
                        ? mealTypeConfig[(event as MealEvent).mealType].icon
                        : eventTypeConfig[(event as RegularEvent).type].icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{event.title}</h4>
                      <div className="text-xs text-gray-500">
                        {event.time} •{" "}
                        {event.type === "meal"
                          ? `${(event as MealEvent).totalCalories} cal`
                          : (event as RegularEvent).duration || "Event"}
                      </div>
                    </div>
                  </div>
                ))}

              {events.filter((event) => event.date === new Date().toISOString().split("T")[0]).length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No events scheduled for today</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>

            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                size="sm"
                onClick={() => setCurrentView("add-event")}
              >
                <Dumbbell className="w-4 h-4 mr-2" />
                Add Workout
              </Button>

              {Object.entries(mealTypeConfig).map(([mealType, config]) => (
                <Button
                  key={mealType}
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  size="sm"
                  onClick={() => startNewMeal(new Date().toISOString().split("T")[0], mealType as any)}
                >
                  {config.icon} Plan {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarScreen

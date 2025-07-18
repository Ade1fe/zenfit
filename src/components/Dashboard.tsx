

// import { useState } from "react"
// import Header from "./Header"
// import Sidebar from "./Sidebar"
// import TrackerCards from "./TrackerCards"
// import CaloriesGraph from "./CaloriesGraph"
// import MealsSection from "./MealsSection"
// import CalendarScreen from "../pages/calendar/CalenderScreen"

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

// // Mock components for different sections (keep these as they are)
// const SchedulesView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 Schedules</h2>
//     <p className="text-gray-600">View and manage your meal schedules.</p>
//     <div className="mt-4 space-y-3">
//       {["Morning Workout", "Lunch Meeting", "Evening Meal Prep"].map((schedule, i) => (
//         <div
//           key={i}
//           className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg flex items-center justify-between"
//         >
//           <div>
//             <p className="font-semibold">{schedule}</p>
//             <p className="text-sm text-gray-600">{9 + i}:00 AM</p>
//           </div>
//           <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">Scheduled</span>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const MealsPlansView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Meal Plans</h2>
//     <p className="text-gray-600">Create and manage meal plans for your clients.</p>
//     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//       {["Keto Diet Plan", "Mediterranean Diet", "Vegetarian Plan", "High Protein Plan"].map((plan, i) => (
//         <div key={i} className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
//           <h3 className="font-semibold text-lg">{plan}</h3>
//           <p className="text-sm text-gray-600 mt-2">Customized meal plan with balanced nutrition</p>
//           <div className="mt-3 flex space-x-2">
//             <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">Popular</span>
//             <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Effective</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const CheckInView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Check In</h2>
//     <p className="text-gray-600">Track daily progress and check-ins.</p>
//     <div className="mt-4 space-y-4">
//       {["Weight Check", "Meal Compliance", "Exercise Completion", "Water Intake"].map((item, i) => (
//         <div
//           key={i}
//           className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-between"
//         >
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">✓</span>
//             </div>
//             <span className="font-medium">{item}</span>
//           </div>
//           <span className="text-green-600 font-semibold">Completed</span>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const MessagesView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Messages</h2>
//     <p className="text-gray-600">Communicate with your clients and team.</p>
//     <div className="mt-4 space-y-3">
//       {[
//         { name: "Sarah Johnson", message: "Thanks for the meal plan!", time: "2 min ago", unread: true },
//         { name: "Mike Chen", message: "Question about protein intake", time: "1 hour ago", unread: true },
//         { name: "Emma Davis", message: "Weekly progress update", time: "3 hours ago", unread: false },
//         { name: "Team Nutrition", message: "New recipes available", time: "1 day ago", unread: false },
//       ].map((msg, i) => (
//         <div
//           key={i}
//           className={`p-4 rounded-lg flex items-center space-x-3 ${
//             msg.unread ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400" : "bg-gray-50"
//           }`}
//         >
//           <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//             {msg.name.charAt(0)}
//           </div>
//           <div className="flex-1">
//             <div className="flex items-center justify-between">
//               <p className="font-semibold">{msg.name}</p>
//               <span className="text-xs text-gray-500">{msg.time}</span>
//             </div>
//             <p className="text-sm text-gray-600">{msg.message}</p>
//           </div>
//           {msg.unread && <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>}
//         </div>
//       ))}
//     </div>
//   </div>
// )

// export default function Dashboard() {
//   const [currentView, setCurrentView] = useState("dashboard")
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [mealEvents, setMealEvents] = useState<MealEvent[]>([])

//   const handleNavigation = (itemId: string) => {
//     setCurrentView(itemId)
//     setIsMobileMenuOpen(false) // Close mobile menu when navigating
//   }

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   const handleSearch = (query: string) => {
//     setSearchQuery(query)
//     // Implement search logic here
//     console.log("Searching for:", query)
//   }

//   const handleCollapseChange = (collapsed: boolean) => {
//     setSidebarCollapsed(collapsed)
//   }

//   const handleMealEventsChange = (events: MealEvent[]) => {
//     setMealEvents(events)
//   }

//   const renderCurrentView = () => {
//     switch (currentView) {
//       case "Calendar":
//         return <CalendarScreen onMealEventsChange={handleMealEventsChange} />
//           // return <CalendarScreen  />
//       case "schedules":
//         return <SchedulesView />
//       case "meals":
//         return <MealsPlansView />
//       case "checkin":
//         return <CheckInView />
//       case "messages":
//         return <MessagesView />
//       default:
//         return (
//           <>
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutrition Dashboard</h1>
//               <p className="text-gray-600">Track your daily nutrition and meal planning</p>
//             </div>

//             <TrackerCards />

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Calories Graph - Takes up more space */}
//               <div className="lg:col-span-1">
//                 <CaloriesGraph mealEvents={mealEvents} />
//               </div>

//               {/* Meals Section */}
//               <div className="lg:col-span-1">
//                 <MealsSection mealEvents={mealEvents} />
//               </div>
//             </div>
//           </>
//         )
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <Header
//         onMobileMenuToggle={handleMobileMenuToggle}
//         isMobileMenuOpen={isMobileMenuOpen}
//         sidebarCollapsed={sidebarCollapsed}
//         currentView={currentView}
//         onSearch={handleSearch}
//       />
//       <Sidebar onNavigate={handleNavigation} onCollapseChange={handleCollapseChange} isMobileMenuOpen={false} onMobileMenuClose={function (): void {
//         throw new Error("Function not implemented.")
//       } } />
//       {/* Main Content with proper spacing for fixed sidebar */}
//       <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64 xl:ml-72"}`}>
//         <main className="p-3 sm:p-4 lg:p-6">{renderCurrentView()}</main>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import Header from "./Header"
// import Sidebar from "./Sidebar"
// import TrackerCards from "./TrackerCards"
// import CaloriesGraph from "./CaloriesGraph"
// import MealsSection from "./MealsSection"
// import CalendarScreen from "../pages/calendar/CalenderScreen"

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

// // Mock components for different sections (keep these as they are)
// const SchedulesView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 Schedules</h2>
//     <p className="text-gray-600">View and manage your meal schedules.</p>
//     <div className="mt-4 space-y-3">
//       {["Morning Workout", "Lunch Meeting", "Evening Meal Prep"].map((schedule, i) => (
//         <div
//           key={i}
//           className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg flex items-center justify-between"
//         >
//           <div>
//             <p className="font-semibold">{schedule}</p>
//             <p className="text-sm text-gray-600">{9 + i}:00 AM</p>
//           </div>
//           <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">Scheduled</span>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const MealsPlansView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Meal Plans</h2>
//     <p className="text-gray-600">Create and manage meal plans for your clients.</p>
//     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//       {["Keto Diet Plan", "Mediterranean Diet", "Vegetarian Plan", "High Protein Plan"].map((plan, i) => (
//         <div key={i} className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
//           <h3 className="font-semibold text-lg">{plan}</h3>
//           <p className="text-sm text-gray-600 mt-2">Customized meal plan with balanced nutrition</p>
//           <div className="mt-3 flex space-x-2">
//             <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">Popular</span>
//             <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Effective</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const CheckInView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Check In</h2>
//     <p className="text-gray-600">Track daily progress and check-ins.</p>
//     <div className="mt-4 space-y-4">
//       {["Weight Check", "Meal Compliance", "Exercise Completion", "Water Intake"].map((item, i) => (
//         <div
//           key={i}
//           className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-between"
//         >
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">✓</span>
//             </div>
//             <span className="font-medium">{item}</span>
//           </div>
//           <span className="text-green-600 font-semibold">Completed</span>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const MessagesView = () => (
//   <div className="p-6 bg-white rounded-xl shadow-lg">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Messages</h2>
//     <p className="text-gray-600">Communicate with your clients and team.</p>
//     <div className="mt-4 space-y-3">
//       {[
//         { name: "Sarah Johnson", message: "Thanks for the meal plan!", time: "2 min ago", unread: true },
//         { name: "Mike Chen", message: "Question about protein intake", time: "1 hour ago", unread: true },
//         { name: "Emma Davis", message: "Weekly progress update", time: "3 hours ago", unread: false },
//         { name: "Team Nutrition", message: "New recipes available", time: "1 day ago", unread: false },
//       ].map((msg, i) => (
//         <div
//           key={i}
//           className={`p-4 rounded-lg flex items-center space-x-3 ${
//             msg.unread ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400" : "bg-gray-50"
//           }`}
//         >
//           <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//             {msg.name.charAt(0)}
//           </div>
//           <div className="flex-1">
//             <div className="flex items-center justify-between">
//               <p className="font-semibold">{msg.name}</p>
//               <span className="text-xs text-gray-500">{msg.time}</span>
//             </div>
//             <p className="text-sm text-gray-600">{msg.message}</p>
//           </div>
//           {msg.unread && <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>}
//         </div>
//       ))}
//     </div>
//   </div>
// )

// export default function Dashboard() {
//   const [currentView, setCurrentView] = useState("dashboard")
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")

//   // FIXED: Centralized meal events state with initial data
//   const [mealEvents, setMealEvents] = useState<MealEvent[]>([
//     {
//       id: "meal-1-20250108",
//       title: "Healthy Breakfast",
//       type: "meal",
//       mealType: "breakfast",
//       time: "08:00",
//       date: "2025-01-08",
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
//         {
//           id: 2,
//           title: "Greek Yogurt",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 150,
//           protein: 15,
//           carbs: 12,
//           fat: 8,
//         },
//       ],
//       totalCalories: 450,
//       totalProtein: 25,
//       totalCarbs: 62,
//       totalFat: 13,
//     },
//     {
//       id: "meal-2-20250108",
//       title: "Power Lunch",
//       type: "meal",
//       mealType: "lunch",
//       time: "12:30",
//       date: "2025-01-08",
//       foods: [
//         {
//           id: 3,
//           title: "Grilled Chicken Salad",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 350,
//           protein: 35,
//           carbs: 15,
//           fat: 18,
//         },
//         {
//           id: 4,
//           title: "Quinoa",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 180,
//           protein: 6,
//           carbs: 32,
//           fat: 3,
//         },
//       ],
//       totalCalories: 530,
//       totalProtein: 41,
//       totalCarbs: 47,
//       totalFat: 21,
//     },
//     {
//       id: "meal-3-20250108",
//       title: "Nutritious Dinner",
//       type: "meal",
//       mealType: "dinner",
//       time: "18:00",
//       date: "2025-01-08",
//       foods: [
//         {
//           id: 5,
//           title: "Baked Salmon",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 280,
//           protein: 25,
//           carbs: 0,
//           fat: 20,
//         },
//         {
//           id: 6,
//           title: "Roasted Vegetables",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 120,
//           protein: 4,
//           carbs: 25,
//           fat: 2,
//         },
//         {
//           id: 7,
//           title: "Brown Rice",
//           image: "/placeholder.svg?height=100&width=100",
//           calories: 150,
//           protein: 3,
//           carbs: 30,
//           fat: 1,
//         },
//       ],
//       totalCalories: 550,
//       totalProtein: 32,
//       totalCarbs: 55,
//       totalFat: 23,
//     },
//   ])

//   const handleNavigation = (itemId: string) => {
//     setCurrentView(itemId)
//     setIsMobileMenuOpen(false) // Close mobile menu when navigating
//   }

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   const handleSearch = (query: string) => {
//     setSearchQuery(query)
//     // Implement search logic here
//     console.log("Searching for:", query)
//   }

//   const handleCollapseChange = (collapsed: boolean) => {
//     setSidebarCollapsed(collapsed)
//   }

//   // FIXED: Updated to properly handle meal events changes
//   const handleMealEventsChange = (events: MealEvent[]) => {
//     console.log("Updating meal events:", events)
//     setMealEvents(events)
//   }

//   const renderCurrentView = () => {
//     switch (currentView) {
//       case "Calendar":
//         // FIXED: Pass meal events and update handler to CalendarScreen
//         return <CalendarScreen mealEvents={mealEvents} onMealEventsChange={handleMealEventsChange} />
//       case "schedules":
//         return <SchedulesView />
//       case "meals":
//         return <MealsPlansView />
//       case "checkin":
//         return <CheckInView />
//       case "messages":
//         return <MessagesView />
//       default:
//         return (
//           <>
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutrition Dashboard</h1>
//               <p className="text-gray-600">Track your daily nutrition and meal planning</p>
//             </div>
//             <TrackerCards />
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Calories Graph - Takes up more space */}
//               <div className="lg:col-span-1">
//                 <CaloriesGraph mealEvents={mealEvents} />
//               </div>
//               {/* Meals Section */}
//               <div className="lg:col-span-1">
//                 <MealsSection mealEvents={mealEvents} />
//               </div>
//             </div>
//           </>
//         )
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <Header
//         onMobileMenuToggle={handleMobileMenuToggle}
//         isMobileMenuOpen={isMobileMenuOpen}
//         sidebarCollapsed={sidebarCollapsed}
//         currentView={currentView}
//         onSearch={handleSearch}
//       />
//       <Sidebar
//         onNavigate={handleNavigation}
//         onCollapseChange={handleCollapseChange}
//         isMobileMenuOpen={false}
//         onMobileMenuClose={(): void => {
//           throw new Error("Function not implemented.")
//         }}
//       />
//       {/* Main Content with proper spacing for fixed sidebar */}
//       <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64 xl:ml-72"}`}>
//         <main className="p-3 sm:p-4 lg:p-6">{renderCurrentView()}</main>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TrackerCards from "./TrackerCards"
import CaloriesGraph from "./CaloriesGraph"
import MealsSection from "./MealsSection"
import CalendarScreen from "../pages/calendar/CalenderScreen"
import RecommendedFood from "./RecommendedFood"

// Meal plan data interface
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

// Mock components for different sections
const SchedulesView = () => (
  <div className="p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 Schedules</h2>
    <p className="text-gray-600">View and manage your meal schedules.</p>
    <div className="mt-4 space-y-3">
      {["Morning Workout", "Lunch Meeting", "Evening Meal Prep"].map((schedule, i) => (
        <div
          key={i}
          className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg flex items-center justify-between"
        >
          <div>
            <p className="font-semibold">{schedule}</p>
            <p className="text-sm text-gray-600">{9 + i}:00 AM</p>
          </div>
          <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">Scheduled</span>
        </div>
      ))}
    </div>
  </div>
)

const MealsPlansView = () => (
  <div className="p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Meal Plans</h2>
    <p className="text-gray-600">Create and manage meal plans for your clients.</p>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {["Keto Diet Plan", "Mediterranean Diet", "Vegetarian Plan", "High Protein Plan"].map((plan, i) => (
        <div key={i} className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
          <h3 className="font-semibold text-lg">{plan}</h3>
          <p className="text-sm text-gray-600 mt-2">Customized meal plan with balanced nutrition</p>
          <div className="mt-3 flex space-x-2">
            <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">Popular</span>
            <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Effective</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const CheckInView = () => (
  <div className="p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Check In</h2>
    <p className="text-gray-600">Track daily progress and check-ins.</p>
    <div className="mt-4 space-y-4">
      {["Weight Check", "Meal Compliance", "Exercise Completion", "Water Intake"].map((item, i) => (
        <div
          key={i}
          className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="font-medium">{item}</span>
          </div>
          <span className="text-green-600 font-semibold">Completed</span>
        </div>
      ))}
    </div>
  </div>
)

const MessagesView = () => (
  <div className="p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Messages</h2>
    <p className="text-gray-600">Communicate with your clients and team.</p>
    <div className="mt-4 space-y-3">
      {[
        { name: "Sarah Johnson", message: "Thanks for the meal plan!", time: "2 min ago", unread: true },
        { name: "Mike Chen", message: "Question about protein intake", time: "1 hour ago", unread: true },
        { name: "Emma Davis", message: "Weekly progress update", time: "3 hours ago", unread: false },
        { name: "Team Nutrition", message: "New recipes available", time: "1 day ago", unread: false },
      ].map((msg, i) => (
        <div
          key={i}
          className={`p-4 rounded-lg flex items-center space-x-3 ${
            msg.unread ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400" : "bg-gray-50"
          }`}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {msg.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{msg.name}</p>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </div>
            <p className="text-sm text-gray-600">{msg.message}</p>
          </div>
          {msg.unread && <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>}
        </div>
      ))}
    </div>
  </div>
)

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Centralized meal events state with initial data
  const [mealEvents, setMealEvents] = useState<MealEvent[]>([
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
    },
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
    },
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
    },
  ])

  const handleNavigation = (itemId: string) => {
    setCurrentView(itemId)
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    console.log("Searching for:", query)
  }

  const handleCollapseChange = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed)
  }

  const handleMealEventsChange = (events: MealEvent[]) => {
    console.log("Updating meal events:", events)
    setMealEvents(events)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "Calendar":
        return <CalendarScreen mealEvents={mealEvents} onMealEventsChange={handleMealEventsChange} />
      case "schedules":
        return <SchedulesView />
      case "meals":
        return <MealsPlansView />
      case "checkin":
        return <CheckInView />
      case "messages":
        return <MessagesView />
      default:
        return (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutrition Dashboard</h1>
              <p className="text-gray-600">Track your daily nutrition and meal planning</p>
            </div>
            <TrackerCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-1">
                <CaloriesGraph mealEvents={mealEvents} />
              </div>
               <div className="lg:col-span-1">
                <RecommendedFood  />
              </div>
              <div className="lg:col-span-1">
                <MealsSection mealEvents={mealEvents} />
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white ">
      <Header
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
        sidebarCollapsed={sidebarCollapsed}
        currentView={currentView}
        onSearch={handleSearch}
      />
      <Sidebar
        onNavigate={handleNavigation}
        onCollapseChange={handleCollapseChange}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64 xl:ml-72"}`}>
        <main className="p-3 sm:p-4 lg:p-6">{renderCurrentView()}</main>
      </div>
    </div>
  )
}

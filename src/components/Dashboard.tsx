
"use client"

import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TrackerCards from "./TrackerCards"
import CaloriesGraph from "./CaloriesGraph"
import ReportSection from "./ReportSection"
import MealsSection from "./MealsSection"
import RecommendedFood from "./RecommendedFood"
import CalenderScreen from "../pages/calendar/CalenderScreen"

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
          className={`p-4 rounded-lg flex items-center space-x-3 ${msg.unread ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400" : "bg-gray-50"}`}
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

  const handleNavigation = (itemId: string) => {
    setCurrentView(itemId)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Implement search logic here
    console.log("Searching for:", query)
  }

  const handleCollapseChange = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "calender":
        return <CalenderScreen />
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
            <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Welcome back Ruman! 🎉
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">4 January 2020, Saturday</p>
              </div>
              <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base">
                Create New Plan ✨
              </button>
            </div>

            <TrackerCards />

            <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2 xl:col-span-2">
                <CaloriesGraph />
              </div>
              <div className="lg:col-span-2 xl:col-span-1">
                <ReportSection />
              </div>
            </div>

            <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              <MealsSection />
              <RecommendedFood />
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
        sidebarCollapsed={sidebarCollapsed}
        currentView={currentView}
        onSearch={handleSearch}
      />
      <Sidebar onNavigate={handleNavigation} onCollapseChange={handleCollapseChange} />

      {/* Main Content with proper spacing for fixed sidebar */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64 xl:ml-72"}`}>
        <main className="p-3 sm:p-4 lg:p-6">{renderCurrentView()}</main>
      </div>
    </div>
  )
}



import type React from "react"

import { Search, Bell, MessageCircle, Filter, Menu, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import { Button } from "./ui/button"

import { Input } from "./ui/input"

interface HeaderProps {
  onMobileMenuToggle?: () => void
  isMobileMenuOpen?: boolean
  sidebarCollapsed?: boolean
  currentView?: string
  onSearch?: (query: string) => void
}

const viewTitles = {
  dashboard: "Dashboard",
  calender: "Calender",
  schedules: "Schedules",
  meals: "Meal Plans",
  checkin: "Check In",
  messages: "Messages",
}

const viewEmojis = {
  dashboard: "🏠",
  calender: "👥",
  schedules: "📅",
  meals: "🍽️",
  checkin: "✅",
  messages: "💬",
}

export default function Header({
  onMobileMenuToggle,
  isMobileMenuOpen = false,
  sidebarCollapsed = false,
  currentView = "dashboard",
  onSearch,
}: HeaderProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value)
  }

  return (
    <>
      <header
        className={`bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm transition-all duration-300 fixed top-0 left-0 right-0 z-40 h-16 sm:h-20 ${
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-64 xl:pl-72"
        }`}
      >
        <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => onMobileMenuToggle?.()}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm sm:text-lg">
                    {viewEmojis[currentView as keyof typeof viewEmojis] || "🏠"}
                  </span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {viewTitles[currentView as keyof typeof viewTitles] || "Dashboard"}
                  </span>
                  {currentView === "dashboard" && (
                    <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Daily Meal Tracker</p>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-purple-400" />
                <Input
                  placeholder={`Search ${currentView === "dashboard" ? "food" : currentView}...`}
                  className="pl-10 lg:pl-12 pr-10 lg:pr-12 h-10 lg:h-12 rounded-xl border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-purple-50/50 text-sm lg:text-base"
                  onChange={handleSearch}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 lg:right-2 top-1/2 -translate-y-1/2 text-purple-500 hover:bg-purple-100"
                >
                  <Filter className="h-3 w-3 lg:h-4 lg:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <nav className="hidden xl:flex items-center space-x-4 lg:space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm lg:text-base"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
                >
                  Upgrade
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm lg:text-base"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-sm lg:text-base"
                >
                  Download Apps
                </a>
              </nav>

              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                <Button variant="ghost" size="sm" className="relative hover:bg-red-50 text-red-500 p-1 sm:p-2">
                  <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-red-500 rounded-full animate-pulse"></span>
                </Button>

                <Button variant="ghost" size="sm" className="relative hover:bg-blue-50 text-blue-500 p-1 sm:p-2">
                  <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
                  {currentView === "messages" ? (
                    <span className="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-green-500 rounded-full"></span>
                  ) : (
                    <span className="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-blue-500 rounded-full animate-pulse"></span>
                  )}
                </Button>

                <div className="flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl px-2 lg:px-3 py-1 lg:py-2 hover:from-purple-200 hover:to-blue-200 transition-all cursor-pointer">
                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8 ring-2 ring-purple-300">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs sm:text-sm">
                      R
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block">
                    <span className="text-xs lg:text-sm font-semibold text-gray-700">Ruman</span>
                    <p className="text-xs text-purple-600">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:hidden mt-3 bg-white/80">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
              <Input
                placeholder={`Search ${currentView === "dashboard" ? "food" : currentView}...`}
                className="pl-10 pr-10 h-10 rounded-xl border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-purple-50/50"
                onChange={handleSearch}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-purple-500 hover:bg-purple-100"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div> */}

          {/* {currentView !== "dashboard" && (
            <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600">
              <span className="hover:text-purple-600 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-purple-600 font-medium">{viewTitles[currentView as keyof typeof viewTitles]}</span>
            </div>
          )} */}
        </div>
      </header>

      {/* Fixed Mobile Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
            onClick={() => onMobileMenuToggle?.()}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Mobile Menu */}
          <div
            className="lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <span className="text-white text-lg">🍽️</span>
                  </div>
                  <span className="text-xl font-bold">Daily Meal</span>
                </div>
            <Button
  variant="ghost"
  onClick={() => onMobileMenuToggle?.()}
  className="text-white hover:bg-white/20 h-14 w-14 p-0 rounded-xl transition-colors"
>
  <X className="w-8 h-8" />
</Button>

              </div>

              {/* User Profile in Mobile Menu */}
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <Avatar className="h-12 w-12 ring-2 ring-white/30">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
                    R
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">Ruman</p>
                  <p className="text-sm text-white/80">Admin</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Navigation */}
            <div className="p-6">
              {/* <nav className="space-y-2">
                {Object.entries(viewTitles).map(([key, title]) => (
                  <button
                    key={key}
                    onClick={() => {
                      onMobileMenuToggle?.()
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      currentView === key
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{viewEmojis[key as keyof typeof viewEmojis]}</span>
                    <span className="flex-1 text-left">{title}</span>
                    {key === "messages" && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">5</span>
                    )}
                  </button>
                ))}
              </nav> */}


                  <div className="md:hidden mt-3 bg-white/80">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
              <Input
                placeholder={`Search ${currentView === "dashboard" ? "food" : currentView}...`}
                className="pl-10 pr-10 h-10 rounded-xl border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-purple-50/50"
                onChange={handleSearch}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-purple-500 hover:bg-purple-100"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                    <span className="text-lg">➕</span>
                    <span>Create New Plan</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                    <span className="text-lg">📊</span>
                    <span>View Reports</span>
                  </button>
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span>❓</span>
                    <span>Help & Support</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <span>⭐</span>
                    <span>Upgrade Plan</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <span>🚪</span>
                    <span>Sign Out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

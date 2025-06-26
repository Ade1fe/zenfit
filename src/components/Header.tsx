import { Search, Bell, MessageCircle, Filter, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-sm">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Mobile menu button and logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-sm sm:text-lg">🍽️</span>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Daily Meal
            </span>
          </div>
        </div>

        {/* Search bar - hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-purple-400" />
            <Input
              placeholder="Search your food..."
              className="pl-10 lg:pl-12 pr-10 lg:pr-12 h-10 lg:h-12 rounded-xl border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-purple-50/50 text-sm lg:text-base"
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

        {/* Navigation and user section */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          {/* Desktop navigation - hidden on mobile/tablet */}
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

          {/* Notification buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            <Button variant="ghost" size="sm" className="relative hover:bg-red-50 text-red-500 p-1 sm:p-2">
              <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="sm" className="relative hover:bg-blue-50 text-blue-500 p-1 sm:p-2">
              <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-blue-500 rounded-full"></span>
            </Button>

            {/* User profile */}
            <div className="flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl px-2 lg:px-3 py-1 lg:py-2">
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8 ring-2 ring-purple-300">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs sm:text-sm">
                  R
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-xs lg:text-sm font-semibold text-gray-700">Ruman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
          <Input
            placeholder="Search your food..."
            className="pl-10 pr-10 h-10 rounded-xl border-purple-200 focus:border-purple-400 focus:ring-purple-400 bg-purple-50/50"
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
    </header>
  )
}

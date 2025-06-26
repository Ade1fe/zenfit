import {
  LayoutDashboard,
  Users,
  Calendar,
  UtensilsCrossed,
  CheckSquare,
  MessageCircle,
  Chrome,
  Clock,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, color: "from-purple-500 to-blue-500" },
  { icon: Users, label: "Clients", color: "from-green-500 to-teal-500" },
  { icon: Calendar, label: "Schedules", color: "from-orange-500 to-red-500" },
  { icon: UtensilsCrossed, label: "Meals plans", color: "from-pink-500 to-rose-500" },
  { icon: CheckSquare, label: "Check in", color: "from-indigo-500 to-purple-500" },
  { icon: MessageCircle, label: "Messages", color: "from-cyan-500 to-blue-500" },
]

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar - Fixed Position */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 xl:w-72 bg-white/90 backdrop-blur-lg border-r border-purple-100 shadow-lg z-50 overflow-y-auto">
        <div className="p-4 xl:p-6">
          <nav className="space-y-2 xl:space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 xl:space-x-4 px-3 xl:px-4 py-2 xl:py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                    : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-gray-800"
                }`}
              >
                <item.icon className="h-4 w-4 xl:h-5 xl:w-5" />
                <span className="text-xs xl:text-sm">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100">
            <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-6 p-2 xl:p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <Avatar className="h-10 w-10 xl:h-12 xl:w-12 ring-2 ring-purple-300">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm xl:text-base">
                  P
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs xl:text-sm font-semibold text-gray-800">Personal</p>
                <p className="text-xs text-purple-600">Only you</p>
              </div>
            </div>

            <div className="space-y-3 xl:space-y-4 text-xs">
              <div className="p-2 xl:p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Authorization Data:
                </p>
                <div className="flex items-start space-x-2 xl:space-x-3">
                  <Chrome className="h-3 w-3 xl:h-4 xl:w-4 text-green-600 mt-0.5" />
                  <div className="text-gray-600 text-xs">
                    <p>14:23, 13.05.2019</p>
                    <p>Chrome Browser</p>
                    <p>102.252.152.362</p>
                  </div>
                </div>
              </div>

              <div className="p-2 xl:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Server Time:
                </p>
                <div className="flex items-start space-x-2 xl:space-x-3">
                  <Clock className="h-3 w-3 xl:h-4 xl:w-4 text-orange-600 mt-0.5" />
                  <div className="text-gray-600 text-xs">
                    <p>21 April, 2019 16:55</p>
                    <p>GMT +02:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-purple-100 px-2 py-2 z-50">
        <nav className="flex justify-around items-center">
          {menuItems.slice(0, 5).map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-200 ${
                item.active
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{item.label.split(" ")[0]}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

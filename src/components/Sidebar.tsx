// import {
//   LayoutDashboard,
//   Users,
//   Calendar,
//   UtensilsCrossed,
//   CheckSquare,
//   MessageCircle,
//   Chrome,
//   Clock,
//   BookAIcon,
//   TicketPlus,
// } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// const menuItems = [
//   { icon: LayoutDashboard, label: "Dashboard", active: true, color: "from-purple-500 to-blue-500" },
//   { icon: Users, label: "Calender", color: "from-green-500 to-teal-500" },
//   { icon: Calendar, label: "Schedules", color: "from-orange-500 to-red-500" },
//   { icon: UtensilsCrossed, label: "Meals plans", color: "from-pink-500 to-rose-500" },
//   { icon: TicketPlus, label: "Tips", color: "from-indigo-500 to-purple-500" },
//     { icon: BookAIcon, label: "Food Diary", color: "from-cyan-500 to-blue-500" },
//   { icon: MessageCircle, label: "Messages", color: "from-cyan-500 to-blue-500" },
// ]

// export default function Sidebar() {
//   return (
//     <>
//       {/* Desktop Sidebar - Fixed Position */}
//       <div className="hidden lg:block fixed inset-y-0 left-0 w-64 xl:w-72 bg-white/90 backdrop-blur-lg border-r border-purple-100 shadow-lg z-50 overflow-y-auto">
//         <div className="p-4 xl:p-6">
//           <nav className="space-y-2 xl:space-y-3">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className={`flex items-center space-x-3 xl:space-x-4 px-3 xl:px-4 py-2 xl:py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
//                   item.active
//                     ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
//                     : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-gray-800"
//                 }`}
//               >
//                 <item.icon className="h-4 w-4 xl:h-5 xl:w-5" />
//                 <span className="text-xs xl:text-sm">{item.label}</span>
//               </a>
//             ))}
//           </nav>

//           <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100">
//             <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-6 p-2 xl:p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
//               <Avatar className="h-10 w-10 xl:h-12 xl:w-12 ring-2 ring-purple-300">
//                 <AvatarImage src="/placeholder.svg?height=48&width=48" />
//                 <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm xl:text-base">
//                   P
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-xs xl:text-sm font-semibold text-gray-800">Personal</p>
//                 <p className="text-xs text-purple-600">Only you</p>
//               </div>
//             </div>

//             <div className="space-y-3 xl:space-y-4 text-xs">
//               <div className="p-2 xl:p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
//                 <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                   Authorization Data:
//                 </p>
//                 <div className="flex items-start space-x-2 xl:space-x-3">
//                   <Chrome className="h-3 w-3 xl:h-4 xl:w-4 text-green-600 mt-0.5" />
//                   <div className="text-gray-600 text-xs">
//                     <p>14:23, 13.05.2019</p>
//                     <p>Chrome Browser</p>
//                     <p>102.252.152.362</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-2 xl:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
//                 <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
//                   Server Time:
//                 </p>
//                 <div className="flex items-start space-x-2 xl:space-x-3">
//                   <Clock className="h-3 w-3 xl:h-4 xl:w-4 text-orange-600 mt-0.5" />
//                   <div className="text-gray-600 text-xs">
//                     <p>21 April, 2019 16:55</p>
//                     <p>GMT +02:00</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Bottom Navigation */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-purple-100 px-2 py-2 z-50">
//         <nav className="flex justify-around items-center">
//           {menuItems.slice(0, 5).map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-200 ${
//                 item.active
//                   ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               <item.icon className="h-4 w-4" />
//               <span className="text-xs font-medium">{item.label.split(" ")[0]}</span>
//             </a>
//           ))}
//         </nav>
//       </div>
//     </>
//   )
// }
// "use client"

// import { useState } from "react"
// import {
//   LayoutDashboard,
//   Users,
//   Calendar,
//   UtensilsCrossed,
//   CheckSquare,
//   MessageCircle,
//   Chrome,
//   Clock,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
// import { Button } from "./ui/button"

// const menuItems = [
//   {
//     id: "dashboard",
//     icon: LayoutDashboard,
//     label: "Dashboard",
//     active: true,
//     color: "from-purple-500 to-blue-500",
//     badge: null,
//   },
//   {
//     id: "clients",
//     icon: Users,
//     label: "Clients",
//     active: false,
//     color: "from-green-500 to-teal-500",
//     badge: "12",
//   },
//   {
//     id: "schedules",
//     icon: Calendar,
//     label: "Schedules",
//     active: false,
//     color: "from-orange-500 to-red-500",
//     badge: "3",
//   },
//   {
//     id: "meals",
//     icon: UtensilsCrossed,
//     label: "Meals plans",
//     active: false,
//     color: "from-pink-500 to-rose-500",
//     badge: null,
//   },
//   {
//     id: "checkin",
//     icon: CheckSquare,
//     label: "Check in",
//     active: false,
//     color: "from-indigo-500 to-purple-500",
//     badge: null,
//   },
//   {
//     id: "messages",
//     icon: MessageCircle,
//     label: "Messages",
//     active: false,
//     color: "from-cyan-500 to-blue-500",
//     badge: "5",
//   },
// ]

// interface SidebarProps {
//   onNavigate?: (itemId: string) => void
// }

// export default function Sidebar({ onNavigate }: SidebarProps) {
//   const [activeItem, setActiveItem] = useState("dashboard")
//   const [isCollapsed, setIsCollapsed] = useState(false)

//   const handleItemClick = (itemId: string) => {
//     setActiveItem(itemId)
//     onNavigate?.(itemId)
//   }

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed)
//   }

//   return (
//     <>
//       {/* Desktop Sidebar - Fixed Position */}
//       <div
//         className={`hidden lg:block fixed inset-y-0 left-0 ${isCollapsed ? "w-20" : "w-64 xl:w-72"} bg-white/90 backdrop-blur-lg border-r border-purple-100 shadow-lg z-50 overflow-y-auto transition-all duration-300`}
//       >
//         {/* Collapse Toggle Button */}
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={toggleCollapse}
//           className="absolute top-4 -right-3 z-10 bg-white border border-purple-200 rounded-full p-1 shadow-md hover:shadow-lg transition-all"
//         >
//           {isCollapsed ? (
//             <ChevronRight className="h-4 w-4 text-purple-600" />
//           ) : (
//             <ChevronLeft className="h-4 w-4 text-purple-600" />
//           )}
//         </Button>

//         <div className="p-4 xl:p-6">
//           {/* Logo Section */}
//           {!isCollapsed && (
//             <div className="mb-6 flex items-center space-x-3">
//               <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
//                 <span className="text-white text-lg">🍽️</span>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Daily Meal
//               </span>
//             </div>
//           )}

//           {isCollapsed && (
//             <div className="mb-6 flex justify-center">
//               <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
//                 <span className="text-white text-lg">🍽️</span>
//               </div>
//             </div>
//           )}

//           <nav className="space-y-2 xl:space-y-3">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleItemClick(item.id)}
//                 className={`w-full flex items-center ${isCollapsed ? "justify-center px-2" : "space-x-3 xl:space-x-4 px-3 xl:px-4"} py-2 xl:py-3 rounded-xl text-sm font-medium transition-all duration-200 relative group ${
//                   activeItem === item.id
//                     ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
//                     : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-gray-800 hover:scale-105"
//                 }`}
//               >
//                 <item.icon className="h-4 w-4 xl:h-5 xl:w-5 flex-shrink-0" />
//                 {!isCollapsed && (
//                   <>
//                     <span className="text-xs xl:text-sm truncate">{item.label}</span>
//                     {item.badge && (
//                       <span
//                         className={`ml-auto px-2 py-1 text-xs rounded-full ${
//                           activeItem === item.id ? "bg-white/20 text-white" : "bg-purple-100 text-purple-600"
//                         }`}
//                       >
//                         {item.badge}
//                       </span>
//                     )}
//                   </>
//                 )}

//                 {/* Tooltip for collapsed state */}
//                 {isCollapsed && (
//                   <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
//                     {item.label}
//                     {item.badge && (
//                       <span className="ml-2 px-1 py-0.5 bg-purple-500 rounded-full text-xs">{item.badge}</span>
//                     )}
//                   </div>
//                 )}
//               </button>
//             ))}
//           </nav>

//           {!isCollapsed && (
//             <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100">
//               <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-6 p-2 xl:p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl cursor-pointer hover:from-purple-100 hover:to-blue-100 transition-all">
//                 <Avatar className="h-10 w-10 xl:h-12 xl:w-12 ring-2 ring-purple-300">
//                   <AvatarImage src="/placeholder.svg?height=48&width=48" />
//                   <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm xl:text-base">
//                     P
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="text-xs xl:text-sm font-semibold text-gray-800">Personal</p>
//                   <p className="text-xs text-purple-600">Only you</p>
//                 </div>
//               </div>

//               <div className="space-y-3 xl:space-y-4 text-xs">
//                 <div className="p-2 xl:p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all cursor-pointer">
//                   <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
//                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
//                     Authorization Data:
//                   </p>
//                   <div className="flex items-start space-x-2 xl:space-x-3">
//                     <Chrome className="h-3 w-3 xl:h-4 xl:w-4 text-green-600 mt-0.5" />
//                     <div className="text-gray-600 text-xs">
//                       <p>14:23, 13.05.2019</p>
//                       <p>Chrome Browser</p>
//                       <p>102.252.152.362</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-2 xl:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all cursor-pointer">
//                   <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
//                     <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
//                     Server Time:
//                   </p>
//                   <div className="flex items-start space-x-2 xl:space-x-3">
//                     <Clock className="h-3 w-3 xl:h-4 xl:w-4 text-orange-600 mt-0.5" />
//                     <div className="text-gray-600 text-xs">
//                       <p>{new Date().toLocaleString()}</p>
//                       <p>GMT +02:00</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {isCollapsed && (
//             <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100 flex justify-center">
//               <Avatar className="h-10 w-10 ring-2 ring-purple-300 cursor-pointer hover:ring-purple-400 transition-all">
//                 <AvatarImage src="/placeholder.svg?height=48&width=48" />
//                 <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
//                   P
//                 </AvatarFallback>
//               </Avatar>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Bottom Navigation */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-purple-100 px-2 py-2 z-50">
//         <nav className="flex justify-around items-center">
//           {menuItems.slice(0, 5).map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleItemClick(item.id)}
//               className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-200 relative ${
//                 activeItem === item.id
//                   ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               <item.icon className="h-4 w-4" />
//               <span className="text-xs font-medium">{item.label.split(" ")[0]}</span>
//               {item.badge && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {item.badge}
//                 </span>
//               )}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </>
//   )
// }
"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  Calendar,
  UtensilsCrossed,
  CheckSquare,
  MessageCircle,
  Chrome,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    color: "from-purple-500 to-blue-500",
    badge: null,
  },
  {
    id: "calender",
    icon: Users,
    label: "calender",
    active: false,
    color: "from-green-500 to-teal-500",
    badge: "12",
  },
  {
    id: "schedules",
    icon: Calendar,
    label: "Schedules",
    active: false,
    color: "from-orange-500 to-red-500",
    badge: "3",
  },
  {
    id: "meals",
    icon: UtensilsCrossed,
    label: "Meals plans",
    active: false,
    color: "from-pink-500 to-rose-500",
    badge: null,
  },
  {
    id: "checkin",
    icon: CheckSquare,
    label: "Check in",
    active: false,
    color: "from-indigo-500 to-purple-500",
    badge: null,
  },
  {
    id: "messages",
    icon: MessageCircle,
    label: "Messages",
    active: false,
    color: "from-cyan-500 to-blue-500",
    badge: "5",
  },
]

interface SidebarProps {
  onNavigate?: (itemId: string) => void
  onCollapseChange?: (collapsed: boolean) => void
}

export default function Sidebar({ onNavigate, onCollapseChange }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard")
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
    onNavigate?.(itemId)
  }

  const toggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  return (
    <>
      {/* Desktop Sidebar - Fixed Position */}
      <div
        className={`hidden lg:block fixed inset-y-0 left-0 ${isCollapsed ? "w-20" : "w-64 xl:w-72"} bg-white/90 backdrop-blur-lg border-r border-purple-100 shadow-lg z-50 overflow-y-auto transition-all duration-300`}
      >
        {/* Collapse Toggle Button - positioned below header */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleCollapse}
          className="absolute top-20 -right-3 z-10 bg-white border border-purple-200 rounded-full p-1 shadow-md hover:shadow-lg transition-all"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-purple-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-purple-600" />
          )}
        </Button>

        <div className="p-4 xl:p-6">
          {/* Logo Section */}
          {!isCollapsed && (
            <div className="mb-6 flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">🍽️</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Daily Meal
              </span>
            </div>
          )}

          {isCollapsed && (
            <div className="mb-6 flex justify-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">🍽️</span>
              </div>
            </div>
          )}

          <nav className="space-y-2 xl:space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center ${isCollapsed ? "justify-center px-2" : "space-x-3 xl:space-x-4 px-3 xl:px-4"} py-2 xl:py-3 rounded-xl text-sm font-medium transition-all duration-200 relative group ${
                  activeItem === item.id
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                    : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-gray-800 hover:scale-105"
                }`}
              >
                <item.icon className="h-4 w-4 xl:h-5 xl:w-5 flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="text-xs xl:text-sm truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`ml-auto px-2 py-1 text-xs rounded-full ${
                          activeItem === item.id ? "bg-white/20 text-white" : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 px-1 py-0.5 bg-purple-500 rounded-full text-xs">{item.badge}</span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </nav>

          {!isCollapsed && (
            <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100">
              <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-6 p-2 xl:p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl cursor-pointer hover:from-purple-100 hover:to-blue-100 transition-all">
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
                <div className="p-2 xl:p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all cursor-pointer">
                  <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
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

                <div className="p-2 xl:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all cursor-pointer">
                  <p className="font-semibold text-gray-700 mb-1 xl:mb-2 flex items-center text-xs">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                    Server Time:
                  </p>
                  <div className="flex items-start space-x-2 xl:space-x-3">
                    <Clock className="h-3 w-3 xl:h-4 xl:w-4 text-orange-600 mt-0.5" />
                    <div className="text-gray-600 text-xs">
                      <p>{new Date().toLocaleString()}</p>
                      <p>GMT +02:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-purple-100 flex justify-center">
              <Avatar className="h-10 w-10 ring-2 ring-purple-300 cursor-pointer hover:ring-purple-400 transition-all">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                  P
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-purple-100 px-2 py-2 z-50">
        <nav className="flex justify-around items-center">
          {menuItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-200 relative ${
                activeItem === item.id
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{item.label.split(" ")[0]}</span>
              {item.badge && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

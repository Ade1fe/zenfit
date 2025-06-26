// import { useSelector } from "react-redux"
// import type { RootState } from "../store/store"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { ChevronDown, ArrowRight } from "lucide-react"

// export default function ReportSection() {
//   const { reportData } = useSelector((state: RootState) => state.dashboard)

//   return (
//     <Card className="bg-gradient-to-br from-white to-indigo-50 border-indigo-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">📈</span>
//             <div>
//               <CardTitle className="text-lg sm:text-xl">Report</CardTitle>
//               <p className="text-xs sm:text-sm text-indigo-100">on this week</p>
//             </div>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-white/80 hover:text-white hover:bg-white/20 text-xs sm:text-sm"
//           >
//             <span className="hidden sm:inline">From 6-13, Nov 2021</span>
//             <span className="sm:hidden">Nov 2021</span>
//             <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent className="p-4 sm:p-6">
//         {/* Colorful Pie Chart */}
//         <div className="relative h-32 sm:h-36 lg:h-40 mb-4 sm:mb-6 flex items-center justify-center">
//           <div className="relative">
//             <svg width="100" height="100" className="sm:w-[120px] sm:h-[120px] transform -rotate-90">
//               <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="6" />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 fill="none"
//                 stroke="url(#pieGradient1)"
//                 strokeWidth="6"
//                 strokeDasharray="75 251"
//                 strokeDashoffset="0"
//                 className="drop-shadow-sm"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 fill="none"
//                 stroke="url(#pieGradient2)"
//                 strokeWidth="6"
//                 strokeDasharray="50 251"
//                 strokeDashoffset="-75"
//                 className="drop-shadow-sm"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 fill="none"
//                 stroke="url(#pieGradient3)"
//                 strokeWidth="6"
//                 strokeDasharray="38 251"
//                 strokeDashoffset="-125"
//                 className="drop-shadow-sm"
//               />
//               <defs>
//                 <linearGradient id="pieGradient1">
//                   <stop offset="0%" stopColor="#3b82f6" />
//                   <stop offset="100%" stopColor="#1d4ed8" />
//                 </linearGradient>
//                 <linearGradient id="pieGradient2">
//                   <stop offset="0%" stopColor="#ec4899" />
//                   <stop offset="100%" stopColor="#be185d" />
//                 </linearGradient>
//                 <linearGradient id="pieGradient3">
//                   <stop offset="0%" stopColor="#10b981" />
//                   <stop offset="100%" stopColor="#047857" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-lg sm:text-2xl">🎯</span>
//             </div>
//           </div>
//         </div>

//         {/* Colorful Metrics */}
//         <div className="space-y-3 sm:space-y-4">
//           <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
//               <span className="text-xs sm:text-sm font-medium text-gray-700">Calories</span>
//             </div>
//             <div className="text-right">
//               <p className="font-bold text-gray-800 text-xs sm:text-sm">Carbo</p>
//               <p className="text-xs text-blue-600 font-medium">
//                 {reportData.calories.value} {reportData.calories.unit}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl">
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-600"></div>
//               <span className="text-xs sm:text-sm font-medium text-gray-700">Heart</span>
//             </div>
//             <div className="text-right">
//               <p className="font-bold text-gray-800 text-xs sm:text-sm">Water</p>
//               <p className="text-xs text-pink-600 font-medium">
//                 {reportData.heart.value} {reportData.heart.unit}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
//               <span className="text-xs sm:text-sm font-medium text-gray-700">Exercise</span>
//             </div>
//             <div className="text-right">
//               <p className="font-bold text-gray-800 text-xs sm:text-sm">Full report</p>
//               <p className="text-xs text-green-600 font-medium">
//                 {reportData.exercise.value} {reportData.exercise.unit}
//               </p>
//             </div>
//           </div>
//         </div>

//         <Button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl text-xs sm:text-sm">
//           View Full Report
//           <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import { useState } from "react"

const dateRanges = ["This Week", "Last Week", "This Month", "Last 30 Days"]

export default function ReportSection() {
  const { reportData } = useSelector((state: RootState) => state.dashboard)
  const [selectedRange, setSelectedRange] = useState("This Week")
  const [openDropdown, setOpenDropdown] = useState(false)

  if (!reportData) return null

  return (
    <Card className="bg-gradient-to-br from-white to-indigo-50 border-indigo-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">📈</span>
            <div>
              <CardTitle className="text-lg sm:text-xl">Report</CardTitle>
              <p className="text-xs sm:text-sm text-indigo-100">based on selected range</p>
            </div>
          </div>

          {/* Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center px-3 py-1 text-xs sm:text-sm rounded-md text-white/80 hover:text-white hover:bg-white/20 transition"
            >
              {selectedRange}
              <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            {openDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {dateRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setSelectedRange(range)
                        setOpenDropdown(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        {/* Pie Chart */}
        <div className="relative h-32 sm:h-36 lg:h-40 mb-4 sm:mb-6 flex items-center justify-center">
          <div className="relative">
            <svg width="100" height="100" className="sm:w-[120px] sm:h-[120px] transform -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="6" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#pieGradient1)"
                strokeWidth="6"
                strokeDasharray="75 251"
                strokeDashoffset="0"
                className="drop-shadow-sm"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#pieGradient2)"
                strokeWidth="6"
                strokeDasharray="50 251"
                strokeDashoffset="-75"
                className="drop-shadow-sm"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#pieGradient3)"
                strokeWidth="6"
                strokeDasharray="38 251"
                strokeDashoffset="-125"
                className="drop-shadow-sm"
              />
              <defs>
                <linearGradient id="pieGradient1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="pieGradient2">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#be185d" />
                </linearGradient>
                <linearGradient id="pieGradient3">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-2xl">🎯</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3 sm:space-y-4">
          <MetricRow
            title="Calories"
            subtitle="Carbo"
            colorFrom="from-blue-400"
            colorTo="to-blue-600"
            bgFrom="from-blue-50"
            bgTo="to-blue-100"
            value={reportData.calories?.value}
            unit={reportData.calories?.unit}
          />
          <MetricRow
            title="Heart"
            subtitle="Water"
            colorFrom="from-pink-400"
            colorTo="to-pink-600"
            bgFrom="from-pink-50"
            bgTo="to-pink-100"
            value={reportData.heart?.value}
            unit={reportData.heart?.unit}
          />
          <MetricRow
            title="Exercise"
            subtitle="Full report"
            colorFrom="from-green-400"
            colorTo="to-green-600"
            bgFrom="from-green-50"
            bgTo="to-green-100"
            value={reportData.exercise?.value}
            unit={reportData.exercise?.unit}
          />
        </div>

        {/* View Full Report */}
        <Button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl text-xs sm:text-sm">
          View Full Report
          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

// Reusable row component
function MetricRow({
  title,
  subtitle,
  colorFrom,
  colorTo,
  bgFrom,
  bgTo,
  value,
  unit,
}: {
  title: string
  subtitle: string
  colorFrom: string
  colorTo: string
  bgFrom: string
  bgTo: string
  value: string | number
  unit: string
}) {
  return (
    <div
      className={`flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r ${bgFrom} ${bgTo} rounded-xl`}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${colorFrom} ${colorTo}`} />
        <span className="text-xs sm:text-sm font-medium text-gray-700">{title}</span>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-800 text-xs sm:text-sm">{subtitle}</p>
        <p className={`text-xs font-medium ${colorTo.replace("to-", "text-")}`}>
          {value ?? "--"} {unit ?? ""}
        </p>
      </div>
    </div>
  )
}

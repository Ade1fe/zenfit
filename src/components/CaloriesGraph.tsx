import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store/store"
import { setPeriod } from "../store/slices/dashboardSlice"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function CaloriesGraph() {
  const dispatch = useDispatch()
  const { selectedPeriod, caloriesData } = useSelector((state: RootState) => state.dashboard)

  const fullLabels =
    selectedPeriod === "Weekly"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      : selectedPeriod === "Monthly"
      ? ["Week 1", "Week 2", "Week 3", "Week 4"]
      : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const fullData =
    caloriesData.length < fullLabels.length
      ? [...caloriesData, ...Array(fullLabels.length - caloriesData.length).fill(0)]
      : caloriesData

  const maxValue = Math.max(...fullData)

  return (
    <Card className="bg-gradient-to-br from-white to-purple-50 border-purple-100 shadow-xl w-full h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">📊</span>
            <CardTitle className="text-lg sm:text-xl">Calories Graph</CardTitle>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {(["Weekly", "Monthly", "Yearly"] as const).map((period) => (
              <Button
                key={period}
                aria-label={`Select ${period} data`}
                variant={selectedPeriod === period ? "secondary" : "ghost"}
                size="sm"
                onClick={() => dispatch(setPeriod(period))}
                className={`text-xs sm:text-sm ${
                  selectedPeriod === period
                    ? "bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/20"
                }`}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 flex-1">
        {/* <div className="relative h-full w-full overflow-x-auto"> */}
        <div className="relative h-full w-full overflow-x-auto custom-scrollbar">

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs font-medium text-gray-500 z-10">
            {[80, 60, 40, 20, 0].map((val) => (
              <span key={val}>{val}</span>
            ))}
          </div>

          {/* Chart area */}
          <div className="ml-8 h-full relative pr-4">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#e5e7eb" strokeWidth="1" />
              ))}

              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Area under curve */}
              <path
                fill="url(#areaGradient)"
                d={`M 0,200 ${fullData
                  .map((value, index) => {
                    const x = (index * 400) / (fullData.length - 1)
                    const y = 160 - (value / maxValue) * 160
                    return `L ${x},${y}`
                  })
                  .join(" ")} L 400,200 Z`}
              />

              {/* Data line */}
              <polyline
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                points={fullData
                  .map((value, index) => {
                    const x = (index * 400) / (fullData.length - 1)
                    const y = 160 - (value / maxValue) * 160
                    return `${x},${y}`
                  })
                  .join(" ")}
              />

              {/* Data points */}
              {fullData.map((value, index) => {
                const x = (index * 400) / (fullData.length - 1)
                const y = 160 - (value / maxValue) * 160
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#8b5cf6"
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                )
              })}
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="ml-8 mt-3 text-xs sm:text-sm text-gray-600 flex justify-between pr-4">
            {fullLabels.map((label, i) => (
              <span key={i} className="w-full text-center truncate">
                {label}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

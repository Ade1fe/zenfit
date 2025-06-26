import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Card, CardContent } from "./ui/card"
import { TrendingUp, PieChart, Heart, Droplets, Dumbbell } from "lucide-react"

const trackerConfig = [
  {
    key: "calories" as const,
    label: "Calories tracker",
    icon: TrendingUp,
    gradient: "from-blue-400 to-purple-600",
    bgGradient: "from-blue-50 to-purple-100",
    unit: "cal",
    emoji: "🔥",
  },
  {
    key: "carbs" as const,
    label: "Carbo tracker",
    icon: PieChart,
    gradient: "from-green-400 to-teal-600",
    bgGradient: "from-green-50 to-teal-100",
    unit: "car",
    emoji: "🍞",
  },
  {
    key: "heart" as const,
    label: "Heart tracker",
    icon: Heart,
    gradient: "from-pink-400 to-red-600",
    bgGradient: "from-pink-50 to-red-100",
    unit: "bpm",
    emoji: "❤️",
  },
  {
    key: "water" as const,
    label: "Water tracker",
    icon: Droplets,
    gradient: "from-cyan-400 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-100",
    unit: "oz",
    emoji: "💧",
  },
  {
    key: "exercise" as const,
    label: "Exercise tracker",
    icon: Dumbbell,
    gradient: "from-orange-400 to-yellow-600",
    bgGradient: "from-orange-50 to-yellow-100",
    unit: "min",
    emoji: "💪",
  },
]

export default function TrackerCards() {
  const trackerData = useSelector((state: RootState) => state.dashboard.trackerData)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
      {trackerConfig.map((tracker) => (
        <Card
          key={tracker.key}
          className={`bg-gradient-to-br ${tracker.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        >
          <CardContent className="p-4 sm:p-5 lg:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${tracker.gradient} text-white shadow-lg`}>
                <tracker.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl">{tracker.emoji}</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">{tracker.label}</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                {trackerData[tracker.key].toLocaleString()}
              </p>
              <span className="text-xs sm:text-sm font-medium text-gray-600">{tracker.unit}</span>
            </div>
            <div className={`mt-2 sm:mt-3 h-1.5 sm:h-2 bg-white/50 rounded-full overflow-hidden`}>
              <div
                className={`h-full bg-gradient-to-r ${tracker.gradient} rounded-full transition-all duration-500`}
                style={{ width: "75%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

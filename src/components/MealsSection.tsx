import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, Link } from "lucide-react"

const mealEmojis = {
  Breakfast: "🌅",
  Lunch: "☀️",
  Dinner: "🌙",
}

const categoryColors = {
  Bread: "from-yellow-400 to-orange-500",
  Fruits: "from-green-400 to-emerald-500",
  Vegetables: "from-green-500 to-teal-600",
}

export default function MealsSection() {
  const { todayMeals } = useSelector((state: RootState) => state.meals)

  return (
    <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">🍽️</span>
            <CardTitle className="text-lg sm:text-xl">Meal for today</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {/* Desktop Table Header */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
            <span>Time</span>
            <span>Name food</span>
            <span>Categories</span>
            <span>Amount</span>
          </div>

          {/* Table Rows */}
          {todayMeals.map((meal, index) => (
            <div key={meal.id}>
              {/* Desktop Layout */}
              <div
                className={`hidden md:grid md:grid-cols-4 gap-4 text-sm py-3 sm:py-4 px-3 rounded-xl transition-all hover:scale-105 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-green-50 to-teal-50"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">{mealEmojis[meal.time as keyof typeof mealEmojis]}</span>
                  <span className="font-semibold text-gray-800">{meal.time}</span>
                </div>
                <span className="font-medium text-gray-700">{meal.name}</span>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                      categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
                    }`}
                  >
                    {meal.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{meal.amount}</span>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                className={`md:hidden p-3 sm:p-4 rounded-xl transition-all ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-green-50 to-teal-50"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{mealEmojis[meal.time as keyof typeof mealEmojis]}</span>
                    <span className="font-semibold text-gray-800 text-sm">{meal.time}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-700 text-sm">{meal.name}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                        categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"
                      }`}
                    >
                      {meal.category}
                    </span>
                    <span className="font-medium text-gray-700 text-sm">{meal.amount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

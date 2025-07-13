
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, Link } from "lucide-react"

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

interface MealsSectionProps {
  mealEvents?: MealEvent[]
}

const mealEmojis = {
  breakfast: "🌅",
  lunch: "☀️",
  dinner: "🌙",
  snack: "🍎",
}

const categoryColors = {
  Protein: "from-red-400 to-pink-500",
  Carbs: "from-yellow-400 to-orange-500",
  Fruits: "from-green-400 to-emerald-500",
  Vegetables: "from-green-500 to-teal-600",
  Dairy: "from-blue-400 to-indigo-500",
  Grains: "from-amber-400 to-yellow-500",
  Nuts: "from-orange-400 to-red-500",
  Other: "from-gray-400 to-gray-600",
}

// Function to categorize food based on title
const categorizeFood = (foodTitle: string): string => {
  const title = foodTitle.toLowerCase()
  if (
    title.includes("chicken") ||
    title.includes("beef") ||
    title.includes("fish") ||
    title.includes("egg") ||
    title.includes("protein") ||
    title.includes("meat")
  ) {
    return "Protein"
  }
  if (
    title.includes("rice") ||
    title.includes("bread") ||
    title.includes("pasta") ||
    title.includes("oat") ||
    title.includes("cereal")
  ) {
    return "Carbs"
  }
  if (
    title.includes("apple") ||
    title.includes("banana") ||
    title.includes("orange") ||
    title.includes("berry") ||
    title.includes("fruit")
  ) {
    return "Fruits"
  }
  if (
    title.includes("broccoli") ||
    title.includes("spinach") ||
    title.includes("carrot") ||
    title.includes("vegetable") ||
    title.includes("salad")
  ) {
    return "Vegetables"
  }
  if (title.includes("milk") || title.includes("cheese") || title.includes("yogurt")) {
    return "Dairy"
  }
  if (title.includes("almond") || title.includes("walnut") || title.includes("nut")) {
    return "Nuts"
  }
  return "Other"
}

export default function MealsSection({ mealEvents = [] }: MealsSectionProps) {
  // Get today's meals
  const today = new Date().toISOString().split("T")[0]
  const todayMeals = mealEvents.filter((meal) => meal.date === today).sort((a, b) => a.time.localeCompare(b.time))

  // Transform meal data to match the expected format
  const transformedMeals = todayMeals.map((meal) => {
    // Get the primary food category (most common category in the meal)
    const categories = meal.foods.map((food) => categorizeFood(food.title))
    const categoryCount = categories.reduce(
      (acc, cat) => {
        acc[cat] = (acc[cat] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const primaryCategory = Object.entries(categoryCount).sort(([, a], [, b]) => b - a)[0]?.[0] || "Other"

    return {
      id: meal.id,
      time: meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1),
      name: meal.title || `${meal.mealType} meal`,
      category: primaryCategory,
      amount: `${meal.totalCalories} cal`,
      foods: meal.foods, // <--- Added foods array here
    }
  })

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
        {transformedMeals.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {/* Desktop Table Header */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 text-sm font-semibold text-gray-600 pb-3 border-b-2 border-green-100">
              <span>Time</span>
              <span>Name food</span>
              <span>Categories</span>
              <span>Amount</span>
            </div>
            {/* Table Rows */}
            {transformedMeals.map((meal, index) => (
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
                    <span className="text-base sm:text-lg">
                      {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
                    </span>
                    <span className="font-semibold text-gray-800">{meal.time}</span>
                  </div>
                  <span className="font-medium text-gray-700 text-sm">
                    {meal.foods.map((food) => food.title).join(", ")}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"}`}
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
                      <span className="text-lg">
                        {mealEmojis[meal.time.toLowerCase() as keyof typeof mealEmojis] || "🍽️"}
                      </span>
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
                        className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[meal.category as keyof typeof categoryColors] || "from-gray-400 to-gray-600"}`}
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
        ) : (
          /* Empty State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No meals planned today</h3>
            <p className="text-gray-600 text-sm mb-4">Start planning your meals to see them here</p>
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
              Plan Your Meals
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

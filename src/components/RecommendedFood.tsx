import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, Plus } from "lucide-react"

const foodGradients = ["from-red-400 to-pink-500", "from-yellow-400 to-orange-500", "from-blue-400 to-indigo-500"]

export default function RecommendedFood() {
  const { recommendedFoods } = useSelector((state: RootState) => state.meals)

  return (
    <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">🍴</span>
            <CardTitle className="text-lg sm:text-xl">Recommend food</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {recommendedFoods.map((food, index) => (
            <div
              key={food.id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl border-2 border-transparent bg-gradient-to-r ${
                foodGradients[index % foodGradients.length]
              } bg-opacity-10 hover:border-current hover:scale-105 transition-all duration-200 shadow-md gap-3 sm:gap-4`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${
                    foodGradients[index % foodGradients.length]
                  } flex items-center justify-center text-lg sm:text-xl shadow-lg`}
                >
                  {food.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{food.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">{food.items}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                <div className="flex space-x-2 text-xs">
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{food.carbs}</div>
                  <div className="px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">{food.fats}</div>
                </div>
                <Button
                  size="sm"
                  className={`bg-gradient-to-r ${
                    foodGradients[index % foodGradients.length]
                  } hover:shadow-lg text-white font-semibold rounded-xl`}
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

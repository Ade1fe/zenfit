
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MoreHorizontal, TrendingUp, Target } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  type ChartOptions,
  // ChartOptions,
} from "chart.js"
import { Line, Bar, Doughnut } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
)

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

interface CaloriesGraphProps {
  mealEvents?: MealEvent[]
}

export default function CaloriesGraph({ mealEvents = [] }: CaloriesGraphProps) {
  // Get last 7 days of data
  const getLast7Days = () => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      days.push(date.toISOString().split("T")[0])
    }
    return days
  }

  const last7Days = getLast7Days()
  const today = new Date().toISOString().split("T")[0]

  // Calculate daily totals for the last 7 days
  const dailyData = last7Days.map((date) => {
    const dayMeals = mealEvents.filter((meal) => meal.date === date)
    return {
      date,
      calories: dayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
      protein: dayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
      carbs: dayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
      fat: dayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
    }
  })

  // Get today's data
  const todayMeals = mealEvents.filter((meal) => meal.date === today)
  const todayTotals = {
    calories: todayMeals.reduce((sum, meal) => sum + meal.totalCalories, 0),
    protein: todayMeals.reduce((sum, meal) => sum + meal.totalProtein, 0),
    carbs: todayMeals.reduce((sum, meal) => sum + meal.totalCarbs, 0),
    fat: todayMeals.reduce((sum, meal) => sum + meal.totalFat, 0),
  }

  // Daily goals
  const goals = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 67,
  }

  // Chart configurations with proper typing
  const lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.y}${context.dataset.label === "Calories" ? "" : "g"}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
        },
      },
    },
  }

  const lineChartData = {
    labels: last7Days.map((date) => {
      const d = new Date(date)
      return d.toLocaleDateString("en-US", { weekday: "short" })
    }),
    datasets: [
      {
        label: "Calories",
        data: dailyData.map((d) => d.calories),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  }

  // Macros bar chart
  const macrosBarData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        label: "Current",
        data: [todayTotals.protein, todayTotals.carbs, todayTotals.fat],
        backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(251, 191, 36, 0.8)", "rgba(168, 85, 247, 0.8)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Goal",
        data: [goals.protein, goals.carbs, goals.fat],
        backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(251, 191, 36, 0.2)", "rgba(168, 85, 247, 0.2)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(251, 191, 36)", "rgb(168, 85, 247)"],
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  }

  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}g`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: "bold",
          },
          color: "#374151",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#6b7280",
          callback: (value) => value + "g",
        },
      },
    },
  }

  // Calorie progress doughnut chart
  const calorieProgress = Math.min((todayTotals.calories / goals.calories) * 100, 100)
  const doughnutData = {
    labels: ["Consumed", "Remaining"],
    datasets: [
      {
        data: [todayTotals.calories, Math.max(0, goals.calories - todayTotals.calories)],
        backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(229, 231, 235, 0.3)"],
        borderColor: ["rgb(59, 130, 246)", "rgba(229, 231, 235, 0.5)"],
        borderWidth: 2,
        cutout: "70%",
      },
    ],
  }

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed} calories`,
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      {/* Main Calorie Tracking Card */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <CardTitle className="text-lg sm:text-xl">Calorie Trends</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 7-Day Calorie Trend */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">7-Day Calorie Trend</h3>
                <p className="text-sm text-gray-600">Track your daily calorie intake over the past week</p>
              </div>
              <div className="h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            {/* Today's Calorie Progress */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Progress</h3>
                <p className="text-sm text-gray-600">Daily calorie goal tracking</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative h-48 w-48">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{todayTotals.calories}</span>
                    <span className="text-sm text-gray-500">/ {goals.calories}</span>
                    <span className="text-xs text-gray-400 mt-1">{Math.round(calorieProgress)}% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Macronutrients Card */}
      <Card className="bg-gradient-to-br from-white to-green-50 border-green-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <CardTitle className="text-lg sm:text-xl">Macronutrients</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Macros Bar Chart */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Macros</h3>
                <p className="text-sm text-gray-600">Current vs goal breakdown</p>
              </div>
              <div className="h-64">
                <Bar data={macrosBarData} options={barChartOptions} />
              </div>
            </div>

            {/* Macro Stats */}
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Detailed Breakdown</h3>
                <p className="text-sm text-gray-600">Progress towards daily goals</p>
              </div>

              {/* Protein */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-green-800">Protein</span>
                  <span className="text-sm text-green-600">
                    {todayTotals.protein}g / {goals.protein}g
                  </span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.protein / goals.protein) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-green-600 mt-1">
                  {Math.round((todayTotals.protein / goals.protein) * 100)}% complete
                </div>
              </div>

              {/* Carbs */}
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-yellow-800">Carbohydrates</span>
                  <span className="text-sm text-yellow-600">
                    {todayTotals.carbs}g / {goals.carbs}g
                  </span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.carbs / goals.carbs) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-yellow-600 mt-1">
                  {Math.round((todayTotals.carbs / goals.carbs) * 100)}% complete
                </div>
              </div>

              {/* Fat */}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-800">Fat</span>
                  <span className="text-sm text-purple-600">
                    {todayTotals.fat}g / {goals.fat}g
                  </span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((todayTotals.fat / goals.fat) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-purple-600 mt-1">
                  {Math.round((todayTotals.fat / goals.fat) * 100)}% complete
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

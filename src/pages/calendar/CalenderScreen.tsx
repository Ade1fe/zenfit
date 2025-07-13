

import type React from "react"
import { useState, useEffect, useCallback, useMemo, type JSX } from "react"
import { CalendarDays, ChefHat, PlusCircle, ChevronLeft, ChevronRight, Clock, Edit, Trash2, Dumbbell, Calendar, Briefcase, BellRing, Home, Search, User, Target, TrendingUp, Apple, Utensils, Activity, AlertCircle, FlameIcon as Fire, Zap, Star, Sparkles, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'

// Modern Clean Components (keeping your original components)
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "default" | "lg"
  className?: string
  disabled?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    default: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-emerald-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
  }
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    default: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({
  children,
  className = "",
  padding = "default",
}: {
  children: React.ReactNode
  className?: string
  padding?: "none" | "sm" | "default" | "lg"
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  }

  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  className?: string
}) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-emerald-100 text-emerald-800",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

const Progress = ({
  value,
  className = "",
  color = "emerald",
}: {
  value: number
  className?: string
  color?: "emerald" | "green" | "yellow" | "red" | "purple"
}) => {
  const colors = {
    emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    yellow: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    red: "bg-gradient-to-r from-red-500 to-red-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600",
  }

  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
      <div
        className={`h-3 rounded-full transition-all duration-700 ${colors[color]} shadow-sm`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
}

// Fixed Interfaces with proper typing
interface FoodItem {
  id: number
  title: string
  image: string
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
  readyInMinutes?: number
  servings?: number
  instructions?: string
  category?: string
  area?: string
}

interface MealEvent {
  id: string
  title: string
  type: "meal"
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
  time: string
  date: string
  foods: FoodItem[]
  totalCalories: number
  totalProtein: number
  totalCarbs: number
  totalFat: number
}

type EventType = "workout" | "appointment" | "reminder"

interface RegularEvent {
  id: string
  title: string
  type: EventType
  time: string
  date: string
  description?: string
  duration?: string
  color: string
}

type CalendarEvent = MealEvent | RegularEvent

interface DayData {
  date: number
  dateString: string
  isCurrentMonth: boolean
  isToday: boolean
  events: CalendarEvent[]
  totalCalories: number
}

type View = "calendar" | "meal-planner" | "food-search" | "add-event" | "dashboard"

interface MealDBMeal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory?: string
  strArea?: string
  strInstructions?: string
}

interface MealDBResponse {
  meals: MealDBMeal[] | null
}

// Enhanced Food Search Component with better error handling and unique keys
const FoodSearch = ({
  onSelectFood,
  searchType,
}: {
  onSelectFood: (food: FoodItem) => void
  searchType: "recipes" | "ingredients"
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [foods, setFoods] = useState<FoodItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)

  const estimateNutrition = (meal: MealDBMeal): Partial<FoodItem> => {
    const baseCalories = 250
    const categoryMultipliers: { [key: string]: number } = {
      Beef: 1.4,
      Chicken: 1.1,
      Dessert: 1.6,
      Lamb: 1.5,
      Miscellaneous: 1.0,
      Pasta: 1.3,
      Pork: 1.4,
      Seafood: 1.0,
      Side: 0.8,
      Starter: 0.6,
      Vegan: 0.9,
      Vegetarian: 0.9,
      Breakfast: 1.2,
      Goat: 1.3,
      Unknown: 1.0,
    }

    const multiplier = categoryMultipliers[meal.strCategory || "Unknown"] || 1.0
    const estimatedCalories = Math.round(baseCalories * multiplier)

    return {
      calories: estimatedCalories,
      protein: Math.round((estimatedCalories * 0.15) / 4),
      carbs: Math.round((estimatedCalories * 0.5) / 4),
      fat: Math.round((estimatedCalories * 0.35) / 9),
      readyInMinutes: Math.floor(Math.random() * 30) + 15,
      servings: Math.floor(Math.random() * 3) + 1,
    }
  }

  // Improved API call with better error handling
  const fetchWithTimeout = async (url: string, timeout = 10000): Promise<Response> => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  // Fetch popular foods from API with reduced calls
  const fetchPopularFoods = async () => {
    setInitialLoading(true)
    setError(null)
    try {
      // Use only ONE popular search to reduce API calls
      const popularSearch = "chicken" // Single search term
      const allFoods: FoodItem[] = []

      try {
        const response = await fetchWithTimeout(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(popularSearch)}`,
        )
        if (response.ok) {
          const data: MealDBResponse = await response.json()
          if (data.meals) {
            // Take more meals from the single search (up to 8)
            const meals = data.meals.slice(0, 8).map((meal, index) => {
              const nutrition = estimateNutrition(meal)
              // Create unique ID by combining meal ID with index and timestamp
              const uniqueId = `${meal.idMeal}-${index}-${Date.now()}`
              return {
                id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
                title: meal.strMeal,
                image: meal.strMealThumb,
                category: meal.strCategory,
                area: meal.strArea,
                instructions: meal.strInstructions,
                ...nutrition,
              }
            })
            allFoods.push(...meals)
          }
        }
      } catch (err) {
        console.warn(`Failed to fetch ${popularSearch}:`, err)
      }

      if (allFoods.length > 0) {
        // Ensure unique IDs and limit to 8 foods
        const uniqueFoods = allFoods.map((food, index) => ({
          ...food,
          id: food.id || Date.now() + index,
        }))
        setFoods(uniqueFoods.slice(0, 8))
      } else {
        // Enhanced fallback with more variety
        setFoods([
          {
            id: Date.now() + 1,
            title: "Grilled Chicken Breast",
            image: "/placeholder.svg?height=120&width=120",
            calories: 165,
            protein: 31,
            carbs: 0,
            fat: 4,
            readyInMinutes: 15,
            category: "Chicken",
            area: "American",
          },
          {
            id: Date.now() + 2,
            title: "Greek Salad",
            image: "/placeholder.svg?height=120&width=120",
            calories: 150,
            protein: 8,
            carbs: 12,
            fat: 10,
            readyInMinutes: 10,
            category: "Vegetarian",
            area: "Greek",
          },
          {
            id: Date.now() + 3,
            title: "Salmon Fillet",
            image: "/placeholder.svg?height=120&width=120",
            calories: 206,
            protein: 22,
            carbs: 0,
            fat: 12,
            readyInMinutes: 20,
            category: "Seafood",
            area: "International",
          },
          {
            id: Date.now() + 4,
            title: "Quinoa Bowl",
            image: "/placeholder.svg?height=120&width=120",
            calories: 180,
            protein: 6,
            carbs: 32,
            fat: 3,
            readyInMinutes: 25,
            category: "Vegetarian",
            area: "International",
          },
          {
            id: Date.now() + 5,
            title: "Turkey Sandwich",
            image: "/placeholder.svg?height=120&width=120",
            calories: 250,
            protein: 20,
            carbs: 25,
            fat: 8,
            readyInMinutes: 5,
            category: "Lunch",
            area: "American",
          },
        ])
      }
    } catch (err) {
      console.error("Error fetching popular foods:", err)
      setError("Unable to load recipes. Using offline data.")
      // Set comprehensive fallback data
      setFoods([
        {
          id: Date.now() + 1,
          title: "Grilled Chicken Breast",
          image: "/placeholder.svg?height=120&width=120",
          calories: 165,
          protein: 31,
          carbs: 0,
          fat: 4,
          readyInMinutes: 15,
          category: "Chicken",
          area: "American",
        },
        {
          id: Date.now() + 2,
          title: "Greek Salad",
          image: "/placeholder.svg?height=120&width=120",
          calories: 150,
          protein: 8,
          carbs: 12,
          fat: 10,
          readyInMinutes: 10,
          category: "Vegetarian",
          area: "Greek",
        },
        {
          id: Date.now() + 3,
          title: "Salmon Fillet",
          image: "/placeholder.svg?height=120&width=120",
          calories: 206,
          protein: 22,
          carbs: 0,
          fat: 12,
          readyInMinutes: 20,
          category: "Seafood",
          area: "International",
        },
      ])
    } finally {
      setInitialLoading(false)
    }
  }

  const searchMeals = async (query: string) => {
    if (!query.trim()) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      let url: string
      if (searchType === "recipes") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`
      }

      const response = await fetchWithTimeout(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: MealDBResponse = await response.json()
      if (data.meals) {
        // Limit to 12 results instead of 20 to reduce processing
        const transformedFoods: FoodItem[] = data.meals.slice(0, 12).map((meal, index) => {
          const nutrition = estimateNutrition(meal)
          // Create unique ID for search results with timestamp
          const uniqueId = `${meal.idMeal}-search-${index}-${Date.now()}`
          return {
            id: Number.parseInt(uniqueId.replace(/\D/g, "")) || Date.now() + index,
            title: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            ...nutrition,
          }
        })
        setFoods(transformedFoods)
      } else {
        setFoods([])
      }
    } catch (err) {
      console.error("Error searching meals:", err)
      if (err instanceof Error && err.name === "AbortError") {
        setError("Search timed out. Please try again.")
      } else {
        setError("Failed to search recipes. Please check your connection and try again.")
      }
      setFoods([])
    } finally {
      setIsLoading(false)
    }
  }

  // Load popular foods on component mount
  useEffect(() => {
    fetchPopularFoods()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchMeals(searchQuery)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchQuery, searchType])

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={`Search ${searchType}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Enhanced Results Grid */}
      <div>
        {!searchQuery.trim() && (
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular {searchType === "recipes" ? "Recipes" : "Foods"}
          </h3>
        )}

        {initialLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading popular recipes...</p>
          </div>
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Searching recipes...</p>
          </div>
        ) : error ? (
          <Card className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Error</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button
              onClick={() => (searchQuery.trim() ? searchMeals(searchQuery) : fetchPopularFoods())}
              variant="primary"
            >
              Try Again
            </Button>
          </Card>
        ) : foods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {foods.map((food) => (
              <div
                key={`food-${food.id}-${food.title.replace(/\s+/g, "-")}`} // More unique key
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={food.image || "/placeholder.svg?height=120&width=120"}
                    alt={food.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="success" className="bg-white/90 text-green-700 font-bold">
                      {food.calories} cal
                    </Badge>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{food.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {food.category && (
                      <Badge variant="info" className="text-xs">
                        {food.category}
                      </Badge>
                    )}
                    {food.readyInMinutes && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {food.readyInMinutes}m
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
                    <div className="text-center">
                      <div className="font-medium text-emerald-600">{food.protein}g</div>
                      <div>Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-green-600">{food.carbs}g</div>
                      <div>Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-purple-600">{food.fat}g</div>
                      <div>Fat</div>
                    </div>
                  </div>
                  <Button onClick={() => onSelectFood(food)} variant="primary" size="sm" className="w-full">
                    <PlusCircle className="w-3 h-3 mr-1" />
                    Add to Meal
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery.trim() ? (
          <Card className="text-center py-8">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">
              Try searching for "{searchType === "recipes" ? "chicken, pasta, or curry" : "tomato, beef, or rice"}"
            </p>
          </Card>
        ) : null}
      </div>
    </div>
  )
}

// MODIFIED CalendarApp - Now accepts navigation props and doesn't render its own sidebar
const CalendarApp = ({
  onMealEventsChange,
  onNavigate,
}: {
  onMealEventsChange?: (events: MealEvent[]) => void
  onNavigate?: (view: string) => void
}) => {
  // ... keep all existing state and configuration exactly as they are ...
  const [currentView, setCurrentView] = useState<View>("meal-planner")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast")
  const [searchType, setSearchType] = useState<"recipes" | "ingredients">("recipes")
  const [editingMeal, setEditingMeal] = useState<MealEvent | null>(null)

  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "workout" as EventType,
    time: "",
    date: selectedDate,
    description: "",
    duration: "",
  })

  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "meal-1-20250108",
      title: "Healthy Breakfast",
      type: "meal",
      mealType: "breakfast",
      time: "08:00",
      date: "2025-01-08",
      foods: [
        {
          id: 1,
          title: "Oatmeal with Berries",
          image: "/placeholder.svg?height=100&width=100",
          calories: 300,
          protein: 10,
          carbs: 50,
          fat: 5,
        },
        {
          id: 2,
          title: "Greek Yogurt",
          image: "/placeholder.svg?height=100&width=100",
          calories: 150,
          protein: 15,
          carbs: 12,
          fat: 8,
        },
      ],
      totalCalories: 450,
      totalProtein: 25,
      totalCarbs: 62,
      totalFat: 13,
    } as MealEvent,
    {
      id: "meal-2-20250108",
      title: "Power Lunch",
      type: "meal",
      mealType: "lunch",
      time: "12:30",
      date: "2025-01-08",
      foods: [
        {
          id: 3,
          title: "Grilled Chicken Salad",
          image: "/placeholder.svg?height=100&width=100",
          calories: 350,
          protein: 35,
          carbs: 15,
          fat: 18,
        },
        {
          id: 4,
          title: "Quinoa",
          image: "/placeholder.svg?height=100&width=100",
          calories: 180,
          protein: 6,
          carbs: 32,
          fat: 3,
        },
      ],
      totalCalories: 530,
      totalProtein: 41,
      totalCarbs: 47,
      totalFat: 21,
    } as MealEvent,
    {
      id: "meal-3-20250108",
      title: "Nutritious Dinner",
      type: "meal",
      mealType: "dinner",
      time: "18:00",
      date: "2025-01-08",
      foods: [
        {
          id: 5,
          title: "Baked Salmon",
          image: "/placeholder.svg?height=100&width=100",
          calories: 280,
          protein: 25,
          carbs: 0,
          fat: 20,
        },
        {
          id: 6,
          title: "Roasted Vegetables",
          image: "/placeholder.svg?height=100&width=100",
          calories: 120,
          protein: 4,
          carbs: 25,
          fat: 2,
        },
        {
          id: 7,
          title: "Brown Rice",
          image: "/placeholder.svg?height=100&width=100",
          calories: 150,
          protein: 3,
          carbs: 30,
          fat: 1,
        },
      ],
      totalCalories: 550,
      totalProtein: 32,
      totalCarbs: 55,
      totalFat: 23,
    } as MealEvent,
    {
      id: "workout-1-20250108",
      title: "Morning Run",
      type: "workout",
      time: "07:00",
      date: "2025-01-08",
      description: "30 min outdoor run",
      duration: "30m",
      color: "bg-emerald-600",
    } as RegularEvent,
  ])

  // Add this useEffect after all the existing state declarations:
  useEffect(() => {
    if (onMealEventsChange) {
      const mealEvents = events.filter((event): event is MealEvent => event.type === "meal")
      onMealEventsChange(mealEvents)
    }
  }, [events]) // Remove onMealEventsChange from dependencies to prevent infinite loop

  // Configuration
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const mealTypeConfig = {
    breakfast: {
      icon: "🌅",
      color: "orange",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      time: "08:00",
      name: "Breakfast",
      gradient: "from-orange-400 to-amber-500",
    },
    lunch: {
      icon: "☀️",
      color: "yellow",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200",
      time: "12:00",
      name: "Lunch",
      gradient: "from-yellow-400 to-orange-500",
    },
    dinner: {
      icon: "🌙",
      color: "emerald",
      bgColor: "bg-gradient-to-br from-emerald-50 to-indigo-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      time: "18:00",
      name: "Dinner",
      gradient: "from-emerald-400 to-indigo-500",
    },
    snack: {
      icon: "🍎",
      color: "green",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      time: "15:00",
      name: "Snack",
      gradient: "from-green-400 to-emerald-500",
    },
  }

  const eventTypeConfig: Record<EventType, { icon: JSX.Element; color: string; name: string }> = {
    workout: {
      icon: <Dumbbell className="w-4 h-4" />,
      color: "bg-emerald-600",
      name: "Workout",
    },
    appointment: {
      icon: <Briefcase className="w-4 h-4" />,
      color: "bg-purple-600",
      name: "Appointment",
    },
    reminder: {
      icon: <BellRing className="w-4 h-4" />,
      color: "bg-orange-600",
      name: "Reminder",
    },
  }

  // Type guard function
  const isRegularEvent = (event: CalendarEvent): event is RegularEvent => {
    return event.type !== "meal"
  }

  // Helper Functions
  const generateCalendarDays = (): DayData[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const today = new Date()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days: DayData[] = []
    const currentDayIterator = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDayIterator.getMonth() === month
      const isToday = currentDayIterator.toDateString() === today.toDateString()
      const localYear = currentDayIterator.getFullYear()
      const localMonth = (currentDayIterator.getMonth() + 1).toString().padStart(2, "0")
      const localDay = currentDayIterator.getDate().toString().padStart(2, "0")
      const dateString = `${localYear}-${localMonth}-${localDay}`

      const dayEvents = events.filter((event) => event.date === dateString)
      const totalCalories = dayEvents
        .filter((event): event is MealEvent => event.type === "meal")
        .reduce((sum, meal) => sum + meal.totalCalories, 0)

      days.push({
        date: currentDayIterator.getDate(),
        dateString,
        isCurrentMonth,
        isToday,
        events: dayEvents,
        totalCalories,
      })

      currentDayIterator.setDate(currentDayIterator.getDate() + 1)
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
      return newDate
    })
  }

  const navigateDate = (direction: "prev" | "next") => {
    const currentDateObj = new Date(selectedDate)
    const newDate = new Date(currentDateObj)
    newDate.setDate(currentDateObj.getDate() + (direction === "next" ? 1 : -1))
    setSelectedDate(newDate.toISOString().split("T")[0])
  }

  const addRegularEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const event: RegularEvent = {
        id: `${newEvent.type}-${Date.now()}`,
        title: newEvent.title,
        type: newEvent.type,
        time: newEvent.time,
        date: newEvent.date,
        description: newEvent.description,
        duration: newEvent.duration,
        color: eventTypeConfig[newEvent.type].color,
      }

      setEvents((prev) => [...prev, event])
      setNewEvent({ title: "", type: "workout", time: "", date: selectedDate, description: "", duration: "" })
      setCurrentView("meal-planner")
    }
  }

  const addFoodToMeal = (food: FoodItem) => {
    if (editingMeal) {
      const updatedFoods = [...editingMeal.foods, { ...food, id: Date.now() + Math.random() }]
      const updatedMeal: MealEvent = {
        ...editingMeal,
        foods: updatedFoods,
        totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
        totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
        totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
        totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
      }

      setEvents((prev) => prev.map((event) => (event.id === editingMeal.id ? updatedMeal : event)))
      setEditingMeal(updatedMeal)
    } else {
      const newMeal: MealEvent = {
        id: `meal-${selectedMealType}-${Date.now()}`,
        title: `${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`,
        type: "meal",
        mealType: selectedMealType,
        time: mealTypeConfig[selectedMealType].time,
        date: selectedDate,
        foods: [{ ...food, id: Date.now() + Math.random() }],
        totalCalories: food.calories || 0,
        totalProtein: food.protein || 0,
        totalCarbs: food.carbs || 0,
        totalFat: food.fat || 0,
      }

      setEvents((prev) => [...prev, newMeal])
    }
    setCurrentView("meal-planner")
  }

  const removeFoodFromMeal = (mealId: string, foodId: number) => {
    setEvents(
      (prev) =>
        prev
          .map((event) => {
            if (event.type === "meal" && event.id === mealId) {
              const meal = event as MealEvent
              const updatedFoods = meal.foods.filter((food) => food.id !== foodId)
              if (updatedFoods.length === 0) return null

              return {
                ...meal,
                foods: updatedFoods,
                totalCalories: updatedFoods.reduce((sum, f) => sum + (f.calories || 0), 0),
                totalProtein: updatedFoods.reduce((sum, f) => sum + (f.protein || 0), 0),
                totalCarbs: updatedFoods.reduce((sum, f) => sum + (f.carbs || 0), 0),
                totalFat: updatedFoods.reduce((sum, f) => sum + (f.fat || 0), 0),
              }
            }
            return event
          })
          .filter(Boolean) as CalendarEvent[],
    )
  }

  const deleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId))
  }

  const startNewMeal = (date: string, mealType: "breakfast" | "lunch" | "dinner" | "snack") => {
    setSelectedDate(date)
    setSelectedMealType(mealType)
    setEditingMeal(null)
    setCurrentView("food-search")
  }

  const editMeal = (meal: MealEvent) => {
    setEditingMeal(meal)
    setSelectedDate(meal.date)
    setSelectedMealType(meal.mealType)
    setCurrentView("food-search")
  }

  // Derived State
  const calendarDays = generateCalendarDays()
  const selectedDateEvents = events.filter((event) => event.date === selectedDate)
  const selectedDateMeals = selectedDateEvents.filter((event): event is MealEvent => event.type === "meal")
  const selectedDateTotals = selectedDateMeals.reduce(
    (totals, meal) => ({
      calories: totals.calories + meal.totalCalories,
      protein: totals.protein + meal.totalProtein,
      carbs: totals.carbs + meal.totalCarbs,
      fat: totals.fat + meal.totalFat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  )

  const dailyGoals = { calories: 2000, protein: 150, carbs: 250, fat: 65 }

  const progress = {
    calories: Math.min((selectedDateTotals.calories / dailyGoals.calories) * 100, 100),
    protein: Math.min((selectedDateTotals.protein / dailyGoals.protein) * 100, 100),
    carbs: Math.min((selectedDateTotals.carbs / dailyGoals.carbs) * 100, 100),
    fat: Math.min((selectedDateTotals.fat / dailyGoals.fat) * 100, 100),
  }

  // Get today's events for dashboard
  const todayEvents = events.filter((event) => event.date === new Date().toISOString().split("T")[0])
  const todayMeals = todayEvents.filter((event): event is MealEvent => event.type === "meal")

  // Navigation buttons for switching between views
  const NavigationButtons = () => (
    <div className="flex gap-2 mb-6">
      <Button
        onClick={() => setCurrentView("dashboard")}
        variant={currentView === "dashboard" ? "primary" : "outline"}
        size="sm"
      >
        <Home className="w-4 h-4 mr-2" />
        Dashboard
      </Button>
      <Button
        onClick={() => setCurrentView("calendar")}
        variant={currentView === "calendar" ? "primary" : "outline"}
        size="sm"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Calendar
      </Button>
      <Button
        onClick={() => setCurrentView("meal-planner")}
        variant={currentView === "meal-planner" ? "primary" : "outline"}
        size="sm"
      >
        <ChefHat className="w-4 h-4 mr-2" />
        Meal Planner
      </Button>
      <Button
        onClick={() => setCurrentView("food-search")}
        variant={currentView === "food-search" ? "primary" : "outline"}
        size="sm"
      >
        <Search className="w-4 h-4 mr-2" />
        Food Search
      </Button>
    </div>
  )

  // MODIFIED: Return content without sidebar wrapper
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationButtons />

      {currentView === "dashboard" && (
        // Enhanced Dashboard View
        <div className="relative">
          {/* Enhanced Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-emerald-600 to-cyan-600"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative px-4 lg:px-6 py-6 lg:py-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2">
                    Good Morning! <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-300" />
                  </h1>
                  <p className="text-white/90 text-base lg:text-lg">{"Let's make today amazing"}</p>
                </div>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <User className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-6 -mt-4 space-y-6 pb-8">
            {/* Enhanced Progress Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-4 lg:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900">{"Today's Progress"}</h2>
                  <p className="text-gray-600 text-sm lg:text-base">Track your nutrition goals</p>
                </div>
              </div>

              <div className="space-y-6 lg:flex lg:space-y-0 justify-center gap-8">
                {/* Calories */}
                <div className="relative w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Fire className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </div>
                      Calories
                    </span>
                    <div className="text-right">
                      <span className="text-xl lg:text-2xl font-bold text-gray-900">
                        {Math.round(selectedDateTotals.calories)}
                      </span>
                      <span className="text-gray-500 text-xs lg:text-sm ml-1">/ {dailyGoals.calories}</span>
                    </div>
                  </div>
                  <Progress value={progress.calories} color="red" />
                </div>

                {/* Protein */}
                <div className="relative w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </div>
                      Protein
                    </span>
                    <div className="text-right">
                      <span className="text-xl lg:text-2xl font-bold text-gray-900">
                        {Math.round(selectedDateTotals.protein)}
                      </span>
                      <span className="text-gray-500 text-xs lg:text-sm ml-1">g / {dailyGoals.protein}g</span>
                    </div>
                  </div>
                  <Progress value={progress.protein} color="green" />
                </div>

                {/* Fat */}
                <div className="relative w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </div>
                      Fat
                    </span>
                    <div className="text-right">
                      <span className="text-xl lg:text-2xl font-bold text-gray-900">
                        {Math.round(selectedDateTotals.fat)}
                      </span>
                      <span className="text-gray-500 text-xs lg:text-sm ml-1">g / {dailyGoals.fat}g</span>
                    </div>
                  </div>
                  <Progress value={progress.fat} color="purple" />
                </div>
              </div>
            </div>

            {/* Today's Meals & Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Utensils className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> {"Today's Meals"}
                  </h2>
                  <Button onClick={() => setCurrentView("meal-planner")} size="sm" variant="primary">
                    <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> View Plan
                  </Button>
                </div>
                {todayMeals.length > 0 ? (
                  <div className="space-y-4">
                    {todayMeals
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((meal) => (
                        <div
                          key={meal.id}
                          className={`bg-white rounded-lg border ${
                            mealTypeConfig[meal.mealType].borderColor
                          } p-3 lg:p-4 flex items-center justify-between shadow-sm`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl lg:text-2xl">{mealTypeConfig[meal.mealType].icon}</span>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{meal.title}</h3>
                              <p className="text-xs lg:text-sm text-gray-600">{meal.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 lg:gap-3">
                            <Badge variant="info" className="text-xs">
                              {meal.totalCalories} cal
                            </Badge>
                            <div className="flex gap-1 lg:gap-2">
                              <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
                                <Edit className="w-3 h-3 lg:w-4 lg:h-4" />
                              </Button>
                              <Button onClick={() => deleteEvent(meal.id)} variant="ghost" size="sm">
                                <Trash2 className="w-3 h-3 lg:w-4 lg:h-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-6 lg:py-8">
                    <Apple className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No meals planned</h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">Time to nourish your body!</p>
                    <Button onClick={() => setCurrentView("meal-planner")} variant="primary">
                      Plan Meals
                    </Button>
                  </div>
                )}
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> {"Today's Events"}
                  </h2>
                  <Button
                    onClick={() => {
                      setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                      setCurrentView("add-event")
                    }}
                    size="sm"
                    variant="primary"
                  >
                    <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
                  </Button>
                </div>
                {todayEvents.filter((e) => e.type !== "meal").length > 0 ? (
                  <div className="space-y-4">
                    {todayEvents
                      .filter((e) => e.type !== "meal")
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((event) => {
                        if (isRegularEvent(event)) {
                          return (
                            <div
                              key={event.id}
                              className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-3 lg:p-4 shadow-sm`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {eventTypeConfig[event.type].icon}
                                  <div>
                                    <h3 className="font-semibold text-sm lg:text-base">{event.title}</h3>
                                    <p className="text-xs lg:text-sm text-white/90">
                                      {event.time} {event.duration && `• ${event.duration}`}
                                    </p>
                                  </div>
                                </div>
                                <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
                                  <Trash2 className="w-3 h-3 lg:w-4 lg:h-4 text-white/80" />
                                </Button>
                              </div>
                              {event.description && (
                                <p className="text-xs lg:text-sm text-white/90 mt-2">{event.description}</p>
                              )}
                            </div>
                          )
                        }
                        return null
                      })}
                  </div>
                ) : (
                  <div className="text-center py-6 lg:py-8">
                    <CalendarDays className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No other events</h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">Add workouts, appointments, or reminders!</p>
                    <Button
                      onClick={() => {
                        setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                        setCurrentView("add-event")
                      }}
                      variant="primary"
                    >
                      Add Event
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Monthly Overview */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> Monthly Overview
                </h2>
              </div>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Upcoming events for {monthNames[currentDate.getMonth()]}
              </p>
              {events.filter(
                (e) =>
                  new Date(e.date).getMonth() === currentDate.getMonth() &&
                  new Date(e.date).getFullYear() === currentDate.getFullYear(),
              ).length > 0 ? (
                <div className="space-y-3">
                  {events
                    .filter(
                      (e) =>
                        new Date(e.date).getMonth() === currentDate.getMonth() &&
                        new Date(e.date).getFullYear() === currentDate.getFullYear(),
                    )
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-gray-800">
                            {new Date(event.date).getDate()}{" "}
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                          </span>
                          <div>
                            <div className="font-medium text-gray-900 text-sm lg:text-base">{event.title}</div>
                            <div className="text-xs text-gray-600">
                              {event.time} {event.type === "meal" ? "• Meal" : `• ${event.type}`}
                            </div>
                          </div>
                        </div>
                        {event.type === "meal" && (
                          <Badge variant="info" className="text-xs">
                            {(event as MealEvent).totalCalories} cal
                          </Badge>
                        )}
                        {event.type !== "meal" && isRegularEvent(event) && (
                          <Badge className={`text-xs ${eventTypeConfig[event.type].color} text-white`}>
                            {eventTypeConfig[event.type].name}
                          </Badge>
                        )}
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Calendar className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm lg:text-base">No events planned for this month yet.</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      )}

      {currentView === "meal-planner" && (
        <div className="p-4 lg:p-6">
          {/* Enhanced Header with Date Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigateDate("prev")} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="text-center">
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
                <p className="text-sm text-gray-600">Meal Plan</p>
              </div>
              <Button onClick={() => navigateDate("next")} variant="outline" size="sm">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced Meal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {Object.entries(mealTypeConfig).map(([type, config]) => {
              const meal = selectedDateMeals.find((m) => m.mealType === type)
              return (
                <div key={type}>
                  <Card
                    className={`relative overflow-hidden ${meal ? "flex flex-col h-full min-h-[320px]" : "min-h-[200px]"} ${config.bgColor} border-2 ${config.borderColor}`}
                  >
                    {/* Decorative Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-5`} />
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div
                          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold bg-white shadow-sm`}
                        >
                          {config.icon}
                        </div>
                        <div>
                          <h2 className={`text-lg lg:text-xl font-bold ${config.textColor}`}>{config.name}</h2>
                          <p className="text-xs text-gray-600">{config.time}</p>
                        </div>
                      </div>
                      {meal ? (
                        <Button onClick={() => editMeal(meal)} variant="ghost" size="sm">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </Button>
                      ) : (
                        <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
                          <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
                        </Button>
                      )}
                    </div>
                    <div className="relative z-10 flex-1 flex flex-col">
                      {meal ? (
                        <>
                          <div className="space-y-4">
                            {/* Nutrition Summary */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-white/50">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-700 font-medium text-sm lg:text-base">Total Calories:</span>
                                <Badge variant="info" className="text-sm lg:text-base font-bold">
                                  {meal.totalCalories} kcal
                                </Badge>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm text-gray-700">
                                <div className="text-center">
                                  <div className="font-bold text-emerald-600">{meal.totalProtein}g</div>
                                  <div>Protein</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-yellow-600">{meal.totalCarbs}g</div>
                                  <div>Carbs</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-purple-600">{meal.totalFat}g</div>
                                  <div>Fat</div>
                                </div>
                              </div>
                            </div>
                            {/* Foods List */}
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-3 text-sm lg:text-base flex items-center gap-2">
                                <Utensils className="w-4 h-4" />
                                Foods ({meal.foods.length})
                              </h3>
                              <div className="space-y-2 max-h-32 lg:max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                {meal.foods.map((food, index) => (
                                  <div
                                    key={`${food.id}-${index}`}
                                    className="flex items-center justify-between text-xs lg:text-sm bg-white/50 rounded-lg p-2"
                                  >
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={food.image || "/placeholder.svg?height=32&width=32"}
                                        alt={food.title}
                                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover"
                                      />
                                      <span className="font-medium text-gray-900 line-clamp-1">{food.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-gray-600 font-medium">{food.calories} cal</span>
                                      <Button
                                        onClick={() => removeFoodFromMeal(meal.id, food.id)}
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 p-1 hover:bg-red-50"
                                      >
                                        <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button onClick={() => editMeal(meal)} variant="primary" size="sm" className="flex-1">
                                <PlusCircle className="w-3 h-3 mr-1" />
                                Add Food
                              </Button>
                              <Button onClick={() => deleteEvent(meal.id)} variant="danger" size="sm" className="px-3">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8 text-gray-600 flex-1 flex flex-col items-center justify-center">
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} opacity-20 flex items-center justify-center mb-4`}
                          >
                            <Utensils className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="text-sm lg:text-base mb-4">No {config.name.toLowerCase()} planned</p>
                          <Button onClick={() => startNewMeal(selectedDate, type as any)} variant="primary" size="sm">
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Plan {config.name}
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Enhanced Daily Summary */}
          <Card className="mb-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-gray-700" /> Daily Nutrition Summary
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Fire className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.calories}</div>
                <div className="text-gray-600 text-sm lg:text-base">Calories</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.calories}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.protein}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Protein</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.protein}g</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.carbs}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Carbs</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.carbs}g</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{selectedDateTotals.fat}g</div>
                <div className="text-gray-600 text-sm lg:text-base">Fat</div>
                <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoals.fat}g</div>
              </div>
            </div>
            {/* Progress Bars */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Daily Progress</span>
                  <span>{Math.round((selectedDateTotals.calories / dailyGoals.calories) * 100)}% Complete</span>
                </div>
                <Progress value={progress.calories} color="red" className="h-2" />
              </div>
            </div>
          </Card>

          {/* Other Events for Selected Date */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" /> Other Events
              </h2>
              <Button
                onClick={() => {
                  setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                  setCurrentView("add-event")
                }}
                size="sm"
                variant="primary"
              >
                <PlusCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1" /> Add
              </Button>
            </div>
            {selectedDateEvents.filter((e) => e.type !== "meal").length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents
                  .filter((e) => e.type !== "meal")
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((event) => {
                    if (isRegularEvent(event)) {
                      return (
                        <div
                          key={event.id}
                          className={`${eventTypeConfig[event.type].color} text-white rounded-lg p-3 lg:p-4 shadow-sm`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {eventTypeConfig[event.type].icon}
                              <div>
                                <h3 className="font-semibold text-sm lg:text-base">{event.title}</h3>
                                <p className="text-xs lg:text-sm text-white/90">
                                  {event.time} {event.duration && `• ${event.duration}`}
                                </p>
                              </div>
                            </div>
                            <Button onClick={() => deleteEvent(event.id)} variant="ghost" size="sm">
                              <Trash2 className="w-3 h-3 lg:w-4 lg:h-4 text-white/80" />
                            </Button>
                          </div>
                          {event.description && (
                            <p className="text-xs lg:text-sm text-white/90 mt-2">{event.description}</p>
                          )}
                        </div>
                      )
                    }
                    return null
                  })}
              </div>
            ) : (
              <div className="text-center py-6 lg:py-8">
                <CalendarDays className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No other events</h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Add workouts, appointments, or reminders!</p>
                <Button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, date: selectedDate }))
                    setCurrentView("add-event")
                  }}
                  variant="primary"
                >
                  Add Event
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}

      {currentView === "calendar" && (
        <div className="p-4 lg:p-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Monthly Calendar</h1>
          <Card>
            {/* Calendar Navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => navigateMonth("prev")} variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button onClick={() => navigateMonth("next")} variant="outline" size="sm">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 ml-1 lg:ml-2" />
              </Button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs lg:text-sm font-medium text-gray-500 p-2">
                  <span className="hidden sm:inline">{day}</span>
                  <span className="sm:hidden">{day.slice(0, 1)}</span>
                </div>
              ))}
            </div>

            {/* Days Grid (Desktop) */}
            <div className="hidden md:grid grid-cols-7 gap-2">
              {calendarDays.map((day) => (
                <div
                  key={day.dateString}
                  className={`min-h-[100px] lg:min-h-[120px] p-2 rounded-lg border ${
                    day.isCurrentMonth ? "bg-white border-gray-200" : "bg-gray-50 border-gray-100 text-gray-400"
                  } ${day.isToday ? "ring-2 ring-emerald-500 ring-offset-1" : ""}
                   relative group cursor-pointer transition-all duration-150 ease-in-out hover:shadow-md`}
                  onClick={() => {
                    setSelectedDate(day.dateString)
                    setCurrentView("meal-planner")
                  }}
                >
                  <div
                    className={`font-semibold text-sm mb-1 ${
                      day.isToday ? "text-emerald-700" : day.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {day.date}
                  </div>
                  {day.totalCalories > 0 && (
                    <Badge variant="info" className="mb-1 text-xs">
                      {day.totalCalories} cal
                    </Badge>
                  )}
                  <div className="space-y-1">
                    {day.events.slice(0, 2).map((event) => (
                      <div key={event.id} className="flex items-center gap-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            event.type === "meal"
                              ? "bg-orange-500"
                              : isRegularEvent(event)
                                ? eventTypeConfig[event.type].color
                                : "bg-gray-500"
                          }`}
                        ></span>
                        <span className="text-xs text-gray-700 line-clamp-1">{event.title}</span>
                      </div>
                    ))}
                    {day.events.length > 2 && (
                      <span className="text-xs text-gray-500">+{day.events.length - 2} more</span>
                    )}
                  </div>
                  <Button
                    onClick={(e: { stopPropagation: () => void }) => {
                      e.stopPropagation()
                      setSelectedDate(day.dateString)
                      setCurrentView("add-event")
                    }}
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Add event"
                  >
                    <PlusCircle className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Days List (Mobile) */}
            <div className="md:hidden space-y-3">
              {calendarDays
                .filter((day) => day.isCurrentMonth)
                .map((day) => (
                  <Card key={day.dateString} padding="sm">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedDate(day.dateString)
                        setCurrentView("meal-planner")
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium text-sm ${
                              day.isToday ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            {day.date}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {new Date(day.dateString).toLocaleDateString("en-US", { weekday: "long" })}
                            </div>
                            <div className="text-sm text-gray-600">
                              {day.events.length > 0 ? `${day.events.length} events` : "No events"}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                      {day.events.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {day.events.slice(0, 3).map((event) => (
                            <Badge key={event.id} variant="info" className="text-xs">
                              {event.type === "meal" ? `${(event as MealEvent).totalCalories} cal` : event.title}
                            </Badge>
                          ))}
                          {day.events.length > 3 && (
                            <Badge variant="default" className="text-xs">
                              +{day.events.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              {calendarDays.filter((day) => day.isCurrentMonth && day.events.length > 0).length === 0 && (
                <Card className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No events this month</h3>
                  <p className="text-gray-600 mb-4">Start planning your meals and activities!</p>
                  <Button variant="primary" onClick={() => setCurrentView("meal-planner")}>
                    Add Events
                  </Button>
                </Card>
              )}
            </div>
          </Card>
        </div>
      )}

      {currentView === "food-search" && (
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
              {editingMeal ? "Add Food to Meal" : "Find Food & Recipes"}
            </h1>
            <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
            </Button>
          </div>
          <div className="flex gap-2 mb-6">
            <Button
              onClick={() => setSearchType("recipes")}
              variant={searchType === "recipes" ? "primary" : "outline"}
              size="sm"
            >
              Recipes
            </Button>
            <Button
              onClick={() => setSearchType("ingredients")}
              variant={searchType === "ingredients" ? "primary" : "outline"}
              size="sm"
            >
              Ingredients
            </Button>
          </div>
          <FoodSearch onSelectFood={addFoodToMeal} searchType={searchType} />
        </div>
      )}

      {currentView === "add-event" && (
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">Add New Event</h1>
            <Button onClick={() => setCurrentView("meal-planner")} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1 lg:mr-2" /> Back
            </Button>
          </div>
          <Card className="max-w-xl mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  id="event-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g., Gym Workout, Dentist Appointment"
                />
              </div>
              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select
                  id="event-type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as EventType })}
                >
                  {Object.entries(eventTypeConfig).map(([type, config]) => (
                    <option key={type} value={type}>
                      {config.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="event-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="event-time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="event-duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (optional)
                </label>
                <input
                  type="text"
                  id="event-duration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  value={newEvent.duration}
                  onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
                  placeholder="e.g., 1 hour, 30 min"
                />
              </div>
              <div>
                <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description (optional)
                </label>
                <textarea
                  id="event-description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  placeholder="Any notes for this event..."
                ></textarea>
              </div>
              <Button onClick={addRegularEvent} variant="primary" className="w-full">
                Add Event
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default CalendarApp

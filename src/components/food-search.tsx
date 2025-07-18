// 

// import type React from "react"

// import { useState } from "react"
// import { Search, Plus, Info, Clock, Users } from "lucide-react"
// import { Button } from "./ui/button"

// interface FoodItem {
//   id: number
//   title: string
//   image: string
//   calories?: number
//   protein?: number
//   carbs?: number
//   fat?: number
//   readyInMinutes?: number
//   servings?: number
//   summary?: string
//   ingredients?: string[]
//   instructions?: string[]
// }

// interface FoodSearchProps {
//   onSelectFood: (food: FoodItem) => void
//   searchType: "recipes" | "ingredients"
// }

// export const FoodSearch = ({ onSelectFood, searchType }: FoodSearchProps) => {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [searchResults, setSearchResults] = useState<FoodItem[]>([])
//   const [loading, setLoading] = useState(false)
//   const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)

//   // Free APIs we can use
//   const searchRecipes = async (query: string) => {
//     setLoading(true)
//     try {
//       // Using TheMealDB API (completely free)
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
//       const data = await response.json()

//       if (data.meals) {
//         const formattedResults: FoodItem[] = data.meals.slice(0, 8).map((meal: any) => ({
//           id: Number.parseInt(meal.idMeal),
//           title: meal.strMeal,
//           image: meal.strMealThumb,
//           calories: Math.floor(Math.random() * 400) + 200, // Estimated calories
//           protein: Math.floor(Math.random() * 30) + 10,
//           carbs: Math.floor(Math.random() * 50) + 20,
//           fat: Math.floor(Math.random() * 20) + 5,
//           readyInMinutes: Math.floor(Math.random() * 45) + 15,
//           servings: Math.floor(Math.random() * 4) + 2,
//           summary: meal.strInstructions?.substring(0, 150) + "...",
//           ingredients: [
//             meal.strIngredient1,
//             meal.strIngredient2,
//             meal.strIngredient3,
//             meal.strIngredient4,
//             meal.strIngredient5,
//           ].filter(Boolean),
//           instructions: meal.strInstructions?.split("\r\n").filter(Boolean) || [],
//         }))
//         setSearchResults(formattedResults)
//       } else {
//         setSearchResults([])
//       }
//     } catch (error) {
//       console.error("Error searching recipes:", error)
//       // Fallback to sample data
//       setSearchResults(getSampleFoods(query))
//     }
//     setLoading(false)
//   }

//   const searchIngredients = async (query: string) => {
//     setLoading(true)
//     try {
//       // For ingredients, we'll use sample data or you can integrate with USDA FoodData Central
//       const sampleIngredients: FoodItem[] = [
//         {
//           id: 1,
//           title: "Chicken Breast",
//           image: "/placeholder.svg?height=200&width=200",
//           calories: 165,
//           protein: 31,
//           carbs: 0,
//           fat: 3.6,
//         },
//         {
//           id: 2,
//           title: "Brown Rice",
//           image: "/placeholder.svg?height=200&width=200",
//           calories: 216,
//           protein: 5,
//           carbs: 45,
//           fat: 1.8,
//         },
//         {
//           id: 3,
//           title: "Broccoli",
//           image: "/placeholder.svg?height=200&width=200",
//           calories: 34,
//           protein: 2.8,
//           carbs: 7,
//           fat: 0.4,
//         },
//       ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

//       setSearchResults(sampleIngredients)
//     } catch (error) {
//       console.error("Error searching ingredients:", error)
//     }
//     setLoading(false)
//   }

//   const getSampleFoods = (query: string): FoodItem[] => {
//     const sampleFoods: FoodItem[] = [
//       {
//         id: 1,
//         title: "Grilled Chicken Salad",
//         image: "/placeholder.svg?height=200&width=200",
//         calories: 320,
//         protein: 35,
//         carbs: 12,
//         fat: 15,
//         readyInMinutes: 20,
//         servings: 2,
//         summary: "A healthy and delicious grilled chicken salad with mixed greens and vegetables.",
//         ingredients: ["Chicken breast", "Mixed greens", "Tomatoes", "Cucumber", "Olive oil"],
//       },
//       {
//         id: 2,
//         title: "Quinoa Buddha Bowl",
//         image: "/placeholder.svg?height=200&width=200",
//         calories: 450,
//         protein: 18,
//         carbs: 65,
//         fat: 12,
//         readyInMinutes: 30,
//         servings: 2,
//         summary: "Nutritious quinoa bowl with roasted vegetables and tahini dressing.",
//         ingredients: ["Quinoa", "Sweet potato", "Chickpeas", "Spinach", "Tahini"],
//       },
//       {
//         id: 3,
//         title: "Salmon with Vegetables",
//         image: "/placeholder.svg?height=200&width=200",
//         calories: 380,
//         protein: 42,
//         carbs: 8,
//         fat: 18,
//         readyInMinutes: 25,
//         servings: 1,
//         summary: "Pan-seared salmon with steamed seasonal vegetables.",
//         ingredients: ["Salmon fillet", "Broccoli", "Carrots", "Lemon", "Herbs"],
//       },
//     ].filter((food) => food.title.toLowerCase().includes(query.toLowerCase()))

//     return sampleFoods
//   }

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       if (searchType === "recipes") {
//         searchRecipes(searchQuery)
//       } else {
//         searchIngredients(searchQuery)
//       }
//     }
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleSearch()
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {/* Search Bar */}
//       <div className="flex gap-2">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder={`Search ${searchType}...`}
//             className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//         </div>
//         <Button onClick={handleSearch} disabled={loading}>
//           {loading ? "Searching..." : "Search"}
//         </Button>
//       </div>

//       {/* Search Results */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {searchResults.map((food) => (
//           <div
//             key={food.id}
//             className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             <img
//               src={food.image || "/placeholder.svg"}
//               alt={food.title}
//               className="w-full h-48 object-cover"
//               onError={(e) => {
//                 e.currentTarget.src = "/placeholder.svg?height=200&width=200"
//               }}
//             />

//             <div className="p-4">
//               <h3 className="font-semibold text-gray-900 mb-2">{food.title}</h3>

//               {/* Nutrition Info */}
//               <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Calories:</span>
//                   <span className="font-medium">{food.calories}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Protein:</span>
//                   <span className="font-medium">{food.protein}g</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Carbs:</span>
//                   <span className="font-medium">{food.carbs}g</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Fat:</span>
//                   <span className="font-medium">{food.fat}g</span>
//                 </div>
//               </div>

//               {/* Recipe Info */}
//               {searchType === "recipes" && (
//                 <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-4 h-4" />
//                     {food.readyInMinutes}m
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="w-4 h-4" />
//                     {food.servings} servings
//                   </div>
//                 </div>
//               )}

//               {/* Summary */}
//               {food.summary && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{food.summary}</p>}

//               {/* Actions */}
//               <div className="flex gap-2">
//                 <Button size="sm" onClick={() => onSelectFood(food)} className="flex-1">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add to Plan
//                 </Button>
//                 <Button size="sm" variant="outline" onClick={() => setSelectedFood(food)}>
//                   <Info className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* No Results */}
//       {searchResults.length === 0 && searchQuery && !loading && (
//         <div className="text-center py-8 text-gray-500">
//           <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//           <h3 className="text-lg font-semibold mb-2">No results found</h3>
//           <p>Try searching for different {searchType}</p>
//         </div>
//       )}

//       {/* Food Detail Modal */}
//       {selectedFood && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//             <div className="relative">
//               <img
//                 src={selectedFood.image || "/placeholder.svg"}
//                 alt={selectedFood.title}
//                 className="w-full h-64 object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = "/placeholder.svg?height=300&width=600"
//                 }}
//               />
//               <button
//                 onClick={() => setSelectedFood(null)}
//                 className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="p-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedFood.title}</h2>

//               {/* Nutrition Grid */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-red-50 p-3 rounded-lg text-center">
//                   <div className="text-2xl font-bold text-red-600">{selectedFood.calories}</div>
//                   <div className="text-sm text-red-700">Calories</div>
//                 </div>
//                 <div className="bg-blue-50 p-3 rounded-lg text-center">
//                   <div className="text-2xl font-bold text-blue-600">{selectedFood.protein}g</div>
//                   <div className="text-sm text-blue-700">Protein</div>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-lg text-center">
//                   <div className="text-2xl font-bold text-green-600">{selectedFood.carbs}g</div>
//                   <div className="text-sm text-green-700">Carbs</div>
//                 </div>
//                 <div className="bg-yellow-50 p-3 rounded-lg text-center">
//                   <div className="text-2xl font-bold text-yellow-600">{selectedFood.fat}g</div>
//                   <div className="text-sm text-yellow-700">Fat</div>
//                 </div>
//               </div>

//               {/* Recipe Details */}
//               {searchType === "recipes" && (
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-6 text-sm text-gray-600">
//                     <div className="flex items-center gap-2">
//                       <Clock className="w-4 h-4" />
//                       <span>Ready in {selectedFood.readyInMinutes} minutes</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Users className="w-4 h-4" />
//                       <span>Serves {selectedFood.servings}</span>
//                     </div>
//                   </div>

//                   {selectedFood.ingredients && (
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-2">Ingredients</h3>
//                       <div className="grid grid-cols-2 gap-2">
//                         {selectedFood.ingredients.map((ingredient, index) => (
//                           <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-purple-400 rounded-full" />
//                             {ingredient}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="flex gap-3 mt-6">
//                 <Button onClick={() => setSelectedFood(null)} variant="outline" className="flex-1">
//                   Close
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     onSelectFood(selectedFood)
//                     setSelectedFood(null)
//                   }}
//                   className="flex-1"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add to Plan
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default FoodSearch


import type React from "react"
import { useState } from "react"
import { Search, Plus, Info, Clock, Users, XCircle } from "lucide-react" // Added XCircle for clear search
import { Button } from "./ui/button" // Assuming this is your shadcn/ui button

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
  summary?: string
  ingredients?: string[]
  instructions?: string[]
}

interface FoodSearchProps {
  onSelectFood: (food: FoodItem) => void
  searchType: "recipes" | "ingredients"
}

export const FoodSearch = ({ onSelectFood, searchType }: FoodSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<FoodItem[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)

  // --- API / Data Fetching Logic (No changes needed here for UI/Layout) ---
  const searchRecipes = async (query: string) => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()

      if (data.meals) {
        const formattedResults: FoodItem[] = data.meals.slice(0, 8).map((meal: any) => ({
          id: Number.parseInt(meal.idMeal),
          title: meal.strMeal,
          image: meal.strMealThumb,
          calories: Math.floor(Math.random() * 400) + 200, // Estimated calories
          protein: Math.floor(Math.random() * 30) + 10,
          carbs: Math.floor(Math.random() * 50) + 20,
          fat: Math.floor(Math.random() * 20) + 5,
          readyInMinutes: Math.floor(Math.random() * 45) + 15,
          servings: Math.floor(Math.random() * 4) + 2,
          summary: meal.strInstructions?.substring(0, 150) + "...",
          ingredients: [
            meal.strIngredient1, meal.strIngredient2, meal.strIngredient3,
            meal.strIngredient4, meal.strIngredient5,
          ].filter(Boolean),
          instructions: meal.strInstructions?.split("\r\n").filter(Boolean) || [],
        }))
        setSearchResults(formattedResults)
      } else {
        setSearchResults([])
      }
    } catch (error) {
      console.error("Error searching recipes:", error)
      setSearchResults(getSampleFoods(query))
    }
    setLoading(false)
  }

  const searchIngredients = async (query: string) => {
    setLoading(true)
    try {
      const sampleIngredients: FoodItem[] = [
        { id: 1, title: "Chicken Breast", image: "/placeholder.svg?height=200&width=200", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
        { id: 2, title: "Brown Rice", image: "/placeholder.svg?height=200&width=200", calories: 216, protein: 5, carbs: 45, fat: 1.8 },
        { id: 3, title: "Broccoli", image: "/placeholder.svg?height=200&width=200", calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
        { id: 4, title: "Olive Oil", image: "/placeholder.svg?height=200&width=200", calories: 120, protein: 0, carbs: 0, fat: 14 },
        { id: 5, title: "Spinach", image: "/placeholder.svg?height=200&width=200", calories: 7, protein: 0.9, carbs: 1.1, fat: 0.1 },
      ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

      setSearchResults(sampleIngredients)
    } catch (error) {
      console.error("Error searching ingredients:", error)
    }
    setLoading(false)
  }

  const getSampleFoods = (query: string): FoodItem[] => {
    const sampleFoods: FoodItem[] = [
      { id: 1, title: "Grilled Chicken Salad", image: "/placeholder.svg?height=200&width=200", calories: 320, protein: 35, carbs: 12, fat: 15, readyInMinutes: 20, servings: 2, summary: "A healthy and delicious grilled chicken salad with mixed greens and vegetables.", ingredients: ["Chicken breast", "Mixed greens", "Tomatoes", "Cucumber", "Olive oil"] },
      { id: 2, title: "Quinoa Buddha Bowl", image: "/placeholder.svg?height=200&width=200", calories: 450, protein: 18, carbs: 65, fat: 12, readyInMinutes: 30, servings: 2, summary: "Nutritious quinoa bowl with roasted vegetables and tahini dressing.", ingredients: ["Quinoa", "Sweet potato", "Chickpeas", "Spinach", "Tahini"] },
      { id: 3, title: "Salmon with Vegetables", image: "/placeholder.svg?height=200&width=200", calories: 380, protein: 42, carbs: 8, fat: 18, readyInMinutes: 25, servings: 1, summary: "Pan-seared salmon with steamed seasonal vegetables.", ingredients: ["Salmon fillet", "Broccoli", "Carrots", "Lemon", "Herbs"] },
      { id: 4, title: "Vegetable Stir-fry", image: "/placeholder.svg?height=200&width=200", calories: 280, protein: 10, carbs: 40, fat: 10, readyInMinutes: 20, servings: 2, summary: "Quick and healthy vegetable stir-fry with your choice of protein.", ingredients: ["Mixed vegetables", "Soy sauce", "Ginger", "Garlic", "Rice noodles"] },
    ].filter((food) => food.title.toLowerCase().includes(query.toLowerCase()))

    return sampleFoods
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      if (searchType === "recipes") {
        searchRecipes(searchQuery)
      } else {
        searchIngredients(searchQuery)
      }
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // --- UI/Layout Improvements Start Here ---

  const renderLoadingState = () => (
    <div className="text-center py-8 text-gray-500">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">Searching...</h3>
      <p>Please wait while we find your {searchType}.</p>
    </div>
  );

  const renderNoResults = () => (
    <div className="text-center py-8 text-gray-500">
      <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
      <h3 className="text-lg font-semibold mb-2">No results found</h3>
      <p>Try searching for different {searchType} or broaden your query.</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Search Bar with Clear Button */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 peer-focus:text-purple-500 transition-colors" />
          <input
            type="text"
            placeholder={`Search ${searchType}...`}
            className="peer w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button onClick={handleSearch} disabled={loading || !searchQuery.trim()} className="px-6 py-2">
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {/* Conditional Rendering for Search Results, Loading, and No Results */}
      {loading ? (
        renderLoadingState()
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap for more breathing room */}
          {searchResults.map((food) => (
            <div
              key={food.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1" // Slightly raised on hover
            >
              <img
                src={food.image || "/placeholder.svg"}
                alt={food.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=200&width=200" // Fallback image
                }}
              />

              <div className="p-5"> {/* Increased padding */}
                <h3 className="font-bold text-xl text-gray-900 mb-2 truncate" title={food.title}>
                  {food.title}
                </h3>

                {/* Nutrition Info - Better visual separation */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm font-medium">
                  <div className="flex justify-between items-center bg-gray-50 rounded-md px-3 py-2">
                    <span className="text-gray-600">Calories:</span>
                    <span className="text-gray-800">{food.calories}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 rounded-md px-3 py-2">
                    <span className="text-gray-600">Protein:</span>
                    <span className="text-gray-800">{food.protein}g</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 rounded-md px-3 py-2">
                    <span className="text-gray-600">Carbs:</span>
                    <span className="text-gray-800">{food.carbs}g</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 rounded-md px-3 py-2">
                    <span className="text-gray-600">Fat:</span>
                    <span className="text-gray-800">{food.fat}g</span>
                  </div>
                </div>

                {/* Recipe Info - More prominent icons */}
                {searchType === "recipes" && (
                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-500" /> {/* Larger, colored icon */}
                      <span className="font-medium">{food.readyInMinutes}m</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" /> {/* Larger, colored icon */}
                      <span className="font-medium">{food.servings} servings</span>
                    </div>
                  </div>
                )}

                {/* Summary - Improved readability */}
                {food.summary && <p className="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">{food.summary}</p>}

                {/* Actions - Wider buttons, clear focus */}
                <div className="flex gap-3 mt-4"> {/* Increased gap */}
                  <Button onClick={() => onSelectFood(food)} className="flex-1 py-2.5 text-base font-semibold transition-colors duration-200 ease-in-out hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Plan
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setSelectedFood(food)} className="px-4 py-2.5 border-gray-300 hover:bg-gray-100 transition-colors">
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        searchResults.length === 0 && searchQuery.trim() && !loading && renderNoResults()
      )}

      {/* Food Detail Modal - Enhanced Aesthetics and Accessibility */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col transform scale-95 animate-scale-in">
            <div className="relative flex-shrink-0">
              <img
                src={selectedFood.image || "/placeholder.svg"}
                alt={selectedFood.title}
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=600"
                }}
              />
              <button
                onClick={() => setSelectedFood(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-transform transform hover:scale-105"
                aria-label="Close food details"
              >
                ✕
              </button>
            </div>

            <div className="p-6 flex-grow overflow-y-auto"> {/* Allow content to scroll */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{selectedFood.title}</h2>

              {/* Nutrition Grid - More vibrant and distinct */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-red-100 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-red-700">{selectedFood.calories}</div>
                  <div className="text-sm text-red-800 font-semibold">Calories</div>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-blue-700">{selectedFood.protein}g</div>
                  <div className="text-sm text-blue-800 font-semibold">Protein</div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-green-700">{selectedFood.carbs}g</div>
                  <div className="text-sm text-green-800 font-semibold">Carbs</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-yellow-700">{selectedFood.fat}g</div>
                  <div className="text-sm text-yellow-800 font-semibold">Fat</div>
                </div>
              </div>

              {/* Recipe Details */}
              {searchType === "recipes" && (
                <div className="space-y-6"> {/* Increased space */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span>Ready in **{selectedFood.readyInMinutes} minutes**</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span>Serves **{selectedFood.servings}**</span>
                    </div>
                  </div>

                  {selectedFood.summary && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Summary</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedFood.summary}</p>
                    </div>
                  )}

                  {selectedFood.ingredients && selectedFood.ingredients.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">Ingredients</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-base text-gray-700 list-none p-0">
                        {selectedFood.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFood.instructions && selectedFood.instructions.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">Instructions</h3>
                      <ol className="list-decimal list-inside text-base text-gray-700 space-y-2">
                        {selectedFood.instructions.map((instruction, index) => (
                          <li key={index}>
                            <span className="font-medium text-gray-800">Step {index + 1}:</span> {instruction}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3 flex-shrink-0">
              <Button onClick={() => setSelectedFood(null)} variant="outline" className="flex-1 py-2.5 text-base hover:bg-gray-200">
                Close
              </Button>
              <Button
                onClick={() => {
                  onSelectFood(selectedFood)
                  setSelectedFood(null)
                }}
                className="flex-1 py-2.5 text-base bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add to Plan
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { MoreHorizontal, Plus } from "lucide-react"
// import type { AppDispatch, RootState } from "../store/store"
// import { fetchRecommendedMeals } from "../store/slices/mealsSlice"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"

// export default function RecommendedFood() {
//   const dispatch = useDispatch<AppDispatch>()
//   const { recommendedFoods, status, error } = useSelector((state: RootState) => state.meals)

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchRecommendedMeals(3))
//     }
//   }, [status, dispatch])

//   return (
//     <Card className="bg-white border border-gray-100 shadow-md rounded-xl">
//       <CardHeader  className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg p-4 sm:p-5">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">🍴</span>
//             <CardTitle className="text-lg sm:text-xl text-gray-800">Recommended Food</CardTitle>
//           </div>
//           <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-4 sm:p-6 space-y-4">
//         {status === "loading" && <p className="text-center text-sm text-gray-500">Loading recommended meals...</p>}
//         {status === "failed" && <p className="text-center text-sm text-red-500">Error: {error}</p>}
//         {status === "succeeded" && recommendedFoods.length === 0 && (
//           <p className="text-center text-sm text-gray-500">No recommended meals found.</p>
//         )}

//         {recommendedFoods.map((food) => (
//           <div
//             key={food.id}
//             className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center overflow-hidden shadow">
//                 <img
//                   src={food.image || "/placeholder.svg"}
//                   alt={food.name}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <div>
//                 <p className="font-medium text-sm sm:text-base text-gray-800">{food.name}</p>
//                 <p className="text-xs text-gray-500">{food.items}</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <div className="flex space-x-2 text-xs">
//                 <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">{food.carbs}</span>
//                 <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">{food.fats}</span>
//               </div>
//               <Button  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">
//                 <Plus className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   )
// }

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MoreHorizontal, Plus } from "lucide-react"
import type { AppDispatch, RootState } from "../store/store"
import { fetchRecommendedMeals } from "../store/slices/mealsSlice"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function RecommendedFood() {
  const dispatch = useDispatch<AppDispatch>()
  const { recommendedFoods, status, error } = useSelector((state: RootState) => state.meals)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecommendedMeals(3))
    }
  }, [status, dispatch])

  return (
    <Card className="bg-white border border-gray-100 shadow-md rounded-xl">
      <CardHeader className="bg-[#00AEEF] text-white rounded-t-lg p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">🍴</span>
            <CardTitle className="text-lg sm:text-xl text-white">Recommended Food</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:text-gray-100">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 space-y-4">
        {status === "loading" && <p className="text-center text-sm text-gray-500">Loading recommended meals...</p>}
        {status === "failed" && <p className="text-center text-sm text-red-500">Error: {error}</p>}
        {status === "succeeded" && recommendedFoods.length === 0 && (
          <p className="text-center text-sm text-gray-500">No recommended meals found.</p>
        )}

        {recommendedFoods.map((food) => (
          <div
            key={food.id}
            className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center overflow-hidden shadow">
                <img
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base text-gray-800">{food.name}</p>
                <p className="text-xs text-gray-500">{food.items}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex space-x-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full font-medium">
                  {food.carbs}
                </span>
                <span className="px-2 py-1 bg-gray-200 text-gray-900 rounded-full font-medium">
                  {food.fats}
                </span>
              </div>
              <Button className="bg-[#00AEEF] hover:bg-gray-800 text-white rounded-md">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

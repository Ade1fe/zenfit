// import { useSelector } from "react-redux"
// import type { RootState } from "../store/store"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { MoreHorizontal, Plus } from "lucide-react"

// const foodGradients = ["from-red-400 to-pink-500", "from-yellow-400 to-orange-500", "from-blue-400 to-indigo-500"]

// export default function RecommendedFood() {
//   const { recommendedFoods } = useSelector((state: RootState) => state.meals)

//   return (
//     <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-100 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl sm:text-2xl">🍴</span>
//             <CardTitle className="text-lg sm:text-xl">Recommend food</CardTitle>
//           </div>
//           <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20">
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent className="p-4 sm:p-6">
//         <div className="space-y-3 sm:space-y-4">
//           {recommendedFoods.map((food, index) => (
//             <div
//               key={food.id}
//               className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl border-2 border-transparent bg-gradient-to-r ${
//                 foodGradients[index % foodGradients.length]
//               } bg-opacity-10 hover:border-current hover:scale-105 transition-all duration-200 shadow-md gap-3 sm:gap-4`}
//             >
//               <div className="flex items-center space-x-3 sm:space-x-4">
//                 <div
//                   className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${
//                     foodGradients[index % foodGradients.length]
//                   } flex items-center justify-center text-lg sm:text-xl shadow-lg`}
//                 >
//                   {food.icon}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-800 text-sm sm:text-base">{food.name}</p>
//                   <p className="text-xs sm:text-sm text-gray-600 font-medium">{food.items}</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
//                 <div className="flex space-x-2 text-xs">
//                   <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{food.carbs}</div>
//                   <div className="px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">{food.fats}</div>
//                 </div>
//                 <Button
//                   size="sm"
//                   className={`bg-gradient-to-r ${
//                     foodGradients[index % foodGradients.length]
//                   } hover:shadow-lg text-white font-semibold rounded-xl`}
//                 >
//                   <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
// components/RecommendedFood.tsx
import React from 'react';
import { Apple } from 'lucide-react'; // Assuming you have lucide-react installed

// --- Minimal Mock UI Components (Replace with your actual UI component imports if applicable) ---
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'info'; className?: string }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    info: 'bg-blue-100 text-blue-800',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Button = ({ children, onClick, variant = 'default', size = 'default', className = '', ...props }: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'default';
  className?: string;
  [key: string]: any;
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    default: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    default: "px-4 py-2 text-sm rounded-lg",
  };
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
// --- End Mock UI Components ---


interface RecommendedFoodItem {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  type: string;
  tags: string[];
  image: string;
}

// Sample data for recommended food items.
// This array is explicitly initialized to prevent 'undefined' errors.
const recommendedItems: RecommendedFoodItem[] = [
  {
    id: 1,
    name: 'Grilled Salmon with Asparagus',
    calories: 450,
    protein: 40,
    carbs: 10,
    fat: 25,
    type: 'Dinner',
    tags: ['High Protein', 'Healthy Fat'],
    image: '/placeholder.svg?height=80&width=80', // Use a placeholder or actual image path
  },
  {
    id: 2,
    name: 'Quinoa Salad with Roasted Vegetables',
    calories: 320,
    protein: 12,
    carbs: 50,
    fat: 8,
    type: 'Lunch',
    tags: ['Vegetarian', 'Gluten-Free'],
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 3,
    name: 'Chicken Breast with Brown Rice',
    calories: 380,
    protein: 35,
    carbs: 30,
    fat: 10,
    type: 'Dinner',
    tags: ['Lean Protein', 'Complex Carbs'],
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 4,
    name: 'Greek Yogurt with Berries and Nuts',
    calories: 220,
    protein: 18,
    carbs: 20,
    fat: 8,
    type: 'Breakfast',
    tags: ['High Protein', 'Snack'],
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 5,
    name: 'Lentil Soup with Whole Wheat Bread',
    calories: 280,
    protein: 15,
    carbs: 45,
    fat: 5,
    type: 'Lunch',
    tags: ['Vegetarian', 'Fiber Rich'],
    image: '/placeholder.svg?height=80&width=80',
  },
];

const RecommendedFood = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Apple className="w-6 h-6 text-green-600" />
        Recommended Food
      </h3>
      <div className="space-y-4">
        {/* Defensive rendering: Check if recommendedItems has items before mapping */}
        {recommendedItems.length > 0 ? (
          recommendedItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
                // Add onError to gracefully handle missing images
                onError={(e) => { e.currentTarget.src = '/placeholder.svg?height=80&width=80'; }}
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  {item.calories} kcal • {item.protein}g P • {item.carbs}g C • {item.fat}g F
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
          ))
        ) : (
          // Message displayed if no recommended items are available
          <p className="text-center text-gray-500 py-4">No recommended food items available.</p>
        )}
      </div>
    </Card>
  );
};

export default RecommendedFood;
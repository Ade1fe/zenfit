// "use client"

// import { useState } from "react"
// import { Search, Filter, Star, Clock, ChefHat, Dumbbell, Edit, Calendar } from "lucide-react"
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"

// interface Plan {
//   id: string
//   title: string
//   type: "meal" | "workout"
//   category: string
//   duration: string
//   difficulty: "Beginner" | "Intermediate" | "Advanced"
//   rating: number
//   reviews: number
//   description: string
//   items: PlanItem[]
//   tags: string[]
//   author: "Built-in" | "Custom"
// }

// interface PlanItem {
//   id: string
//   name: string
//   time?: string
//   duration?: string
//   calories?: number
//   sets?: number
//   reps?: string
//   notes?: string
// }

// interface PlanLibraryProps {
//   onSelectPlan: (plan: Plan) => void
//   onEditPlan: (plan: Plan) => void
//   onSchedulePlan: (plan: Plan) => void
// }

// const PlanLibrary = ({ onSelectPlan, onEditPlan, onSchedulePlan }: PlanLibraryProps) => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedType, setSelectedType] = useState<"all" | "meal" | "workout">("all")
//   const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | "Beginner" | "Intermediate" | "Advanced">("all")

//   // Sample built-in plans
//   const builtInPlans: Plan[] = [
//     {
//       id: "meal-1",
//       title: "7-Day Mediterranean Diet",
//       type: "meal",
//       category: "Healthy Living",
//       duration: "7 days",
//       difficulty: "Beginner",
//       rating: 4.8,
//       reviews: 234,
//       description: "A complete Mediterranean diet plan focusing on fresh vegetables, lean proteins, and healthy fats.",
//       author: "Built-in",
//       tags: ["Mediterranean", "Heart Healthy", "Anti-inflammatory"],
//       items: [
//         { id: "1", name: "Greek Yogurt with Berries", time: "08:00", calories: 250 },
//         { id: "2", name: "Grilled Salmon with Quinoa", time: "12:30", calories: 450 },
//         { id: "3", name: "Mediterranean Chicken Bowl", time: "19:00", calories: 380 },
//       ],
//     },
//     {
//       id: "workout-1",
//       title: "Beginner Full Body Routine",
//       type: "workout",
//       category: "Strength Training",
//       duration: "45 mins",
//       difficulty: "Beginner",
//       rating: 4.6,
//       reviews: 189,
//       description: "Perfect for beginners looking to build strength and muscle with basic compound movements.",
//       author: "Built-in",
//       tags: ["Full Body", "Strength", "Beginner Friendly"],
//       items: [
//         { id: "1", name: "Push-ups", sets: 3, reps: "8-12", duration: "5 mins" },
//         { id: "2", name: "Squats", sets: 3, reps: "10-15", duration: "5 mins" },
//         { id: "3", name: "Plank", sets: 3, reps: "30-60 sec", duration: "3 mins" },
//       ],
//     },
//     {
//       id: "meal-2",
//       title: "High Protein Meal Prep",
//       type: "meal",
//       category: "Fitness",
//       duration: "5 days",
//       difficulty: "Intermediate",
//       rating: 4.7,
//       reviews: 156,
//       description: "High protein meals designed for muscle building and recovery.",
//       author: "Built-in",
//       tags: ["High Protein", "Meal Prep", "Muscle Building"],
//       items: [
//         { id: "1", name: "Protein Pancakes", time: "07:00", calories: 320 },
//         { id: "2", name: "Chicken & Rice Bowl", time: "13:00", calories: 520 },
//         { id: "3", name: "Lean Beef Stir Fry", time: "18:30", calories: 480 },
//       ],
//     },
//     {
//       id: "workout-2",
//       title: "HIIT Cardio Blast",
//       type: "workout",
//       category: "Cardio",
//       duration: "30 mins",
//       difficulty: "Advanced",
//       rating: 4.9,
//       reviews: 298,
//       description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
//       author: "Built-in",
//       tags: ["HIIT", "Cardio", "Fat Burning"],
//       items: [
//         { id: "1", name: "Burpees", sets: 4, reps: "30 sec on, 30 sec off", duration: "8 mins" },
//         { id: "2", name: "Mountain Climbers", sets: 4, reps: "30 sec on, 30 sec off", duration: "8 mins" },
//         { id: "3", name: "Jump Squats", sets: 4, reps: "30 sec on, 30 sec off", duration: "8 mins" },
//       ],
//     },
//   ]

//   const filteredPlans = builtInPlans.filter((plan) => {
//     const matchesSearch =
//       plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       plan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       plan.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

//     const matchesType = selectedType === "all" || plan.type === selectedType
//     const matchesDifficulty = selectedDifficulty === "all" || plan.difficulty === selectedDifficulty

//     return matchesSearch && matchesType && matchesDifficulty
//   })

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "bg-green-100 text-green-800"
//       case "Intermediate":
//         return "bg-yellow-100 text-yellow-800"
//       case "Advanced":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <ChefHat className="w-8 h-8 text-purple-600" />
//             Plan Library
//           </h1>
//           <p className="text-gray-600 mt-1">Choose from our curated plans or create your own</p>
//         </div>

//         <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
//           Create Custom Plan
//         </Button>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* Search */}
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search plans, ingredients, exercises..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Type Filter */}
//           <div className="flex gap-2">
//             {["all", "meal", "workout"].map((type) => (
//               <Button
//                 key={type}
//                 variant={selectedType === type ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedType(type as any)}
//                 className="capitalize"
//               >
//                 {type === "meal" && <ChefHat className="w-4 h-4 mr-2" />}
//                 {type === "workout" && <Dumbbell className="w-4 h-4 mr-2" />}
//                 {type === "all" && <Filter className="w-4 h-4 mr-2" />}
//                 {type}
//               </Button>
//             ))}
//           </div>

//           {/* Difficulty Filter */}
//           <select
//             className="px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//             value={selectedDifficulty}
//             onChange={(e) => setSelectedDifficulty(e.target.value as any)}
//           >
//             <option value="all">All Levels</option>
//             <option value="Beginner">Beginner</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>
//         </div>
//       </div>

//       {/* Plans Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredPlans.map((plan) => (
//           <div
//             key={plan.id}
//             className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
//           >
//             {/* Plan Header */}
//             <div
//               className={`p-4 ${plan.type === "meal" ? "bg-gradient-to-r from-green-500 to-emerald-600" : "bg-gradient-to-r from-blue-500 to-indigo-600"} text-white`}
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   {plan.type === "meal" ? <ChefHat className="w-5 h-5" /> : <Dumbbell className="w-5 h-5" />}
//                   <span className="text-sm font-medium">{plan.category}</span>
//                 </div>
//                 <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
//                   {plan.author}
//                 </Badge>
//               </div>
//               <h3 className="text-lg font-bold">{plan.title}</h3>
//               <div className="flex items-center gap-4 mt-2 text-sm">
//                 <div className="flex items-center gap-1">
//                   <Clock className="w-4 h-4" />
//                   {plan.duration}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Star className="w-4 h-4 fill-current" />
//                   {plan.rating} ({plan.reviews})
//                 </div>
//               </div>
//             </div>

//             {/* Plan Content */}
//             <div className="p-4">
//               <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

//               {/* Difficulty & Tags */}
//               <div className="flex items-center gap-2 mb-4">
//                 <Badge className={getDifficultyColor(plan.difficulty)}>{plan.difficulty}</Badge>
//                 {plan.tags.slice(0, 2).map((tag) => (
//                   <Badge key={tag} variant="outline" className="text-xs">
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               {/* Plan Items Preview */}
//               <div className="space-y-2 mb-4">
//                 <h4 className="text-sm font-semibold text-gray-700">
//                   {plan.type === "meal" ? "Sample Meals:" : "Sample Exercises:"}
//                 </h4>
//                 {plan.items.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex items-center justify-between text-sm">
//                     <span className="text-gray-600">{item.name}</span>
//                     <span className="text-gray-400">
//                       {plan.type === "meal" ? `${item.calories} cal` : `${item.sets}x${item.reps}`}
//                     </span>
//                   </div>
//                 ))}
//                 {plan.items.length > 3 && <p className="text-xs text-gray-500">+{plan.items.length - 3} more items</p>}
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="flex-1 bg-transparent"
//                   onClick={() => onSelectPlan(plan)}
//                 >
//                   View Details
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={() => onEditPlan(plan)}>
//                   <Edit className="w-4 h-4" />
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={() => onSchedulePlan(plan)}>
//                   <Calendar className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredPlans.length === 0 && (
//         <div className="text-center py-12">
//           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Search className="w-8 h-8 text-gray-400" />
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">No plans found</h3>
//           <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
//           <Button variant="outline">Clear Filters</Button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default PlanLibrary

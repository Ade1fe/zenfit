// 

// import { useState } from "react"
// import { Plus, Trash2, Save, ArrowLeft, Target } from "lucide-react"
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"

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

// interface Plan {
//   id: string
//   title: string
//   type: "meal" | "workout"
//   category: string
//   duration: string
//   difficulty: "Beginner" | "Intermediate" | "Advanced"
//   description: string
//   items: PlanItem[]
//   tags: string[]
// }

// interface PlanEditorProps {
//   plan?: Plan
//   onSave: (plan: Plan) => void
//   onCancel: () => void
// }

// const PlanEditor = ({ plan, onSave, onCancel }: PlanEditorProps) => {
//   const [editedPlan, setEditedPlan] = useState<Plan>(
//     plan || {
//       id: `plan-${Date.now()}`,
//       title: "",
//       type: "meal",
//       category: "",
//       duration: "",
//       difficulty: "Beginner",
//       description: "",
//       items: [],
//       tags: [],
//     },
//   )

//   const [newTag, setNewTag] = useState("")

//   const addItem = () => {
//     const newItem: PlanItem = {
//       id: `item-${Date.now()}`,
//       name: "",
//       ...(editedPlan.type === "meal" ? { time: "", calories: 0 } : { sets: 0, reps: "", duration: "" }),
//     }
//     setEditedPlan((prev) => ({
//       ...prev,
//       items: [...prev.items, newItem],
//     }))
//   }

//   const updateItem = (itemId: string, updates: Partial<PlanItem>) => {
//     setEditedPlan((prev) => ({
//       ...prev,
//       items: prev.items.map((item) => (item.id === itemId ? { ...item, ...updates } : item)),
//     }))
//   }

//   const removeItem = (itemId: string) => {
//     setEditedPlan((prev) => ({
//       ...prev,
//       items: prev.items.filter((item) => item.id !== itemId),
//     }))
//   }

//   const addTag = () => {
//     if (newTag.trim() && !editedPlan.tags.includes(newTag.trim())) {
//       setEditedPlan((prev) => ({
//         ...prev,
//         tags: [...prev.tags, newTag.trim()],
//       }))
//       setNewTag("")
//     }
//   }

//   const removeTag = (tagToRemove: string) => {
//     setEditedPlan((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }))
//   }

//   const handleSave = () => {
//     if (editedPlan.title && editedPlan.items.length > 0) {
//       onSave(editedPlan)
//     }
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="sm" onClick={onCancel}>
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">{plan ? "Edit Plan" : "Create New Plan"}</h1>
//             <p className="text-gray-600">
//               {plan ? "Customize this plan to fit your needs" : "Build your custom meal or workout plan"}
//             </p>
//           </div>
//         </div>
//         <Button onClick={handleSave} className="bg-gradient-to-r from-purple-600 to-blue-600">
//           <Save className="w-4 h-4 mr-2" />
//           Save Plan
//         </Button>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* Plan Details */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold mb-4">Plan Details</h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Plan Title</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={editedPlan.title}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, title: e.target.value }))}
//                   placeholder="Enter plan title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
//                 <select
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={editedPlan.type}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, type: e.target.value as "meal" | "workout" }))}
//                 >
//                   <option value="meal">Meal Plan</option>
//                   <option value="workout">Workout Plan</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={editedPlan.category}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, category: e.target.value }))}
//                   placeholder="e.g., Healthy Living, Strength Training"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={editedPlan.duration}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, duration: e.target.value }))}
//                   placeholder="e.g., 7 days, 45 mins"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
//                 <select
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   value={editedPlan.difficulty}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, difficulty: e.target.value as any }))}
//                 >
//                   <option value="Beginner">Beginner</option>
//                   <option value="Intermediate">Intermediate</option>
//                   <option value="Advanced">Advanced</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                 <textarea
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                   rows={3}
//                   value={editedPlan.description}
//                   onChange={(e) => setEditedPlan((prev) => ({ ...prev, description: e.target.value }))}
//                   placeholder="Describe your plan..."
//                 />
//               </div>

//               {/* Tags */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
//                 <div className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={newTag}
//                     onChange={(e) => setNewTag(e.target.value)}
//                     placeholder="Add tag"
//                     onKeyPress={(e) => e.key === "Enter" && addTag()}
//                   />
//                   <Button size="sm" onClick={addTag}>
//                     Add
//                   </Button>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {editedPlan.tags.map((tag) => (
//                     <Badge key={tag} variant="outline" className="cursor-pointer" onClick={() => removeTag(tag)}>
//                       {tag} ×
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Plan Items */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">{editedPlan.type === "meal" ? "Meals" : "Exercises"}</h3>
//               <Button size="sm" onClick={addItem}>
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add {editedPlan.type === "meal" ? "Meal" : "Exercise"}
//               </Button>
//             </div>

//             <div className="space-y-4">
//               {editedPlan.items.map((item, index) => (
//                 <div key={item.id} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-sm font-medium text-gray-500">
//                       {editedPlan.type === "meal" ? `Meal ${index + 1}` : `Exercise ${index + 1}`}
//                     </span>
//                     <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
//                       <Trash2 className="w-4 h-4" />
//                     </Button>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                         value={item.name}
//                         onChange={(e) => updateItem(item.id, { name: e.target.value })}
//                         placeholder={editedPlan.type === "meal" ? "Meal name" : "Exercise name"}
//                       />
//                     </div>

//                     {editedPlan.type === "meal" ? (
//                       <>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
//                           <input
//                             type="time"
//                             className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                             value={item.time || ""}
//                             onChange={(e) => updateItem(item.id, { time: e.target.value })}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
//                           <input
//                             type="number"
//                             className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                             value={item.calories || ""}
//                             onChange={(e) => updateItem(item.id, { calories: Number.parseInt(e.target.value) || 0 })}
//                             placeholder="0"
//                           />
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Sets</label>
//                           <input
//                             type="number"
//                             className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                             value={item.sets || ""}
//                             onChange={(e) => updateItem(item.id, { sets: Number.parseInt(e.target.value) || 0 })}
//                             placeholder="0"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Reps</label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                             value={item.reps || ""}
//                             onChange={(e) => updateItem(item.id, { reps: e.target.value })}
//                             placeholder="e.g., 10-12, 30 sec"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                             value={item.duration || ""}
//                             onChange={(e) => updateItem(item.id, { duration: e.target.value })}
//                             placeholder="e.g., 5 mins"
//                           />
//                         </div>
//                       </>
//                     )}

//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
//                       <textarea
//                         className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                         rows={2}
//                         value={item.notes || ""}
//                         onChange={(e) => updateItem(item.id, { notes: e.target.value })}
//                         placeholder="Additional notes or instructions..."
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {editedPlan.items.length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                   <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//                   <p>No {editedPlan.type === "meal" ? "meals" : "exercises"} added yet</p>
//                   <p className="text-sm">
//                     Click "Add {editedPlan.type === "meal" ? "Meal" : "Exercise"}" to get started
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PlanEditor

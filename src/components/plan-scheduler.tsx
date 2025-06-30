// "use client"

// import { useState } from "react"
// import { Calendar, Clock, Repeat, Save, ArrowLeft } from "lucide-react"
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"

// interface Plan {
//   id: string
//   title: string
//   type: "meal" | "workout"
//   duration: string
//   items: any[]
// }

// interface PlanSchedulerProps {
//   plan: Plan
//   onSchedule: (scheduleData: any) => void
//   onCancel: () => void
// }

// const PlanScheduler = ({ plan, onSchedule, onCancel }: PlanSchedulerProps) => {
//   const [startDate, setStartDate] = useState("")
//   const [startTime, setStartTime] = useState("")
//   const [repeatType, setRepeatType] = useState<"none" | "daily" | "weekly" | "custom">("none")
//   const [repeatDays, setRepeatDays] = useState<string[]>([])
//   const [endDate, setEndDate] = useState("")

//   const weekDays = [
//     { value: "monday", label: "Mon" },
//     { value: "tuesday", label: "Tue" },
//     { value: "wednesday", label: "Wed" },
//     { value: "thursday", label: "Thu" },
//     { value: "friday", label: "Fri" },
//     { value: "saturday", label: "Sat" },
//     { value: "sunday", label: "Sun" },
//   ]

//   const toggleRepeatDay = (day: string) => {
//     setRepeatDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
//   }

//   const handleSchedule = () => {
//     const scheduleData = {
//       planId: plan.id,
//       startDate,
//       startTime,
//       repeatType,
//       repeatDays: repeatType === "custom" ? repeatDays : [],
//       endDate: repeatType !== "none" ? endDate : null,
//     }
//     onSchedule(scheduleData)
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
//             <h1 className="text-2xl font-bold text-gray-900">Schedule Plan</h1>
//             <p className="text-gray-600">Add "{plan.title}" to your calendar</p>
//           </div>
//         </div>
//         <Button onClick={handleSchedule} className="bg-gradient-to-r from-purple-600 to-blue-600">
//           <Save className="w-4 h-4 mr-2" />
//           Schedule Plan
//         </Button>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* Plan Preview */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold mb-4">Plan Preview</h3>

//             <div
//               className={`p-4 rounded-lg ${plan.type === "meal" ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200"} mb-4`}
//             >
//               <h4 className="font-semibold text-gray-900">{plan.title}</h4>
//               <div className="flex items-center gap-2 mt-2">
//                 <Badge variant="outline">{plan.type}</Badge>
//                 <Badge variant="outline">{plan.duration}</Badge>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <h5 className="text-sm font-medium text-gray-700">
//                 {plan.type === "meal" ? "Meals" : "Exercises"} ({plan.items.length})
//               </h5>
//               {plan.items.slice(0, 5).map((item, index) => (
//                 <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
//                   <div className="w-2 h-2 bg-gray-300 rounded-full" />
//                   {item.name}
//                 </div>
//               ))}
//               {plan.items.length > 5 && <p className="text-xs text-gray-500">+{plan.items.length - 5} more items</p>}
//             </div>
//           </div>
//         </div>

//         {/* Scheduling Options */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
//             <h3 className="text-lg font-semibold mb-4">Scheduling Options</h3>

//             <div className="space-y-6">
//               {/* Start Date & Time */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Calendar className="w-4 h-4 inline mr-2" />
//                     Start Date
//                   </label>
//                   <input
//                     type="date"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Clock className="w-4 h-4 inline mr-2" />
//                     Start Time
//                   </label>
//                   <input
//                     type="time"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={startTime}
//                     onChange={(e) => setStartTime(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* Repeat Options */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <Repeat className="w-4 h-4 inline mr-2" />
//                   Repeat
//                 </label>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                   {[
//                     { value: "none", label: "No Repeat" },
//                     { value: "daily", label: "Daily" },
//                     { value: "weekly", label: "Weekly" },
//                     { value: "custom", label: "Custom" },
//                   ].map((option) => (
//                     <Button
//                       key={option.value}
//                       variant={repeatType === option.value ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setRepeatType(option.value as any)}
//                       className="justify-center"
//                     >
//                       {option.label}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               {/* Custom Repeat Days */}
//               {repeatType === "custom" && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Select Days</label>
//                   <div className="flex gap-2">
//                     {weekDays.map((day) => (
//                       <Button
//                         key={day.value}
//                         variant={repeatDays.includes(day.value) ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => toggleRepeatDay(day.value)}
//                         className="w-12 h-12 p-0"
//                       >
//                         {day.label}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* End Date */}
//               {repeatType !== "none" && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">End Date (Optional)</label>
//                   <input
//                     type="date"
//                     className="w-full max-w-xs px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                   />
//                   <p className="text-xs text-gray-500 mt-1">Leave empty to repeat indefinitely</p>
//                 </div>
//               )}

//               {/* Schedule Summary */}
//               {startDate && (
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Schedule Summary</h4>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>
//                       Plan: <span className="font-medium">{plan.title}</span>
//                     </p>
//                     <p>
//                       Start:{" "}
//                       <span className="font-medium">
//                         {startDate} {startTime && `at ${startTime}`}
//                       </span>
//                     </p>
//                     {repeatType !== "none" && (
//                       <p>
//                         Repeat:{" "}
//                         <span className="font-medium">
//                           {repeatType === "daily" && "Every day"}
//                           {repeatType === "weekly" && "Every week"}
//                           {repeatType === "custom" && `${repeatDays.join(", ")}`}
//                         </span>
//                         {endDate && ` until ${endDate}`}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PlanScheduler

// import Header from "./Header"
// import Sidebar from "./Sidebar"
// import TrackerCards from "./TrackerCards"
// import CaloriesGraph from "./CaloriesGraph"
// import ReportSection from "./ReportSection"
// import MealsSection from "./MealsSection"
// import RecommendedFood from "./RecommendedFood"

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
//       <Header />
//       <div className="flex flex-col lg:flex-row">
//         <Sidebar />
//         <main className="flex-1 p-3 sm:p-4 lg:p-6">
//           <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="space-y-1 sm:space-y-2">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Welcome back Ruman! 🎉
//               </h1>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg">4 January 2020, Saturday</p>
//             </div>
//             <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base">
//               Create New Plan ✨
//             </button>
//           </div>

//           <TrackerCards />

//           <div className="mt-6 lg:mt-8 grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
//             <div className="xl:col-span-2">
//               <CaloriesGraph />
//             </div>
//             <div className="xl:col-span-1">
//               <ReportSection />
//             </div>
//           </div>

//           <div className="mt-6 lg:mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
//             <MealsSection />
//             <RecommendedFood />
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
import Header from "./Header"
import Sidebar from "./Sidebar"
import TrackerCards from "./TrackerCards"
import CaloriesGraph from "./CaloriesGraph"
import ReportSection from "./ReportSection"
import MealsSection from "./MealsSection"
import RecommendedFood from "./RecommendedFood"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      <Sidebar />

      {/* Main Content with proper spacing for fixed sidebar */}
      <div className="lg:pl-64 xl:pl-72">
        <main className="p-3 sm:p-4 lg:p-6">
          <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome back Ruman! 🎉
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">4 January 2020, Saturday</p>
            </div>
            <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base">
              Create New Plan ✨
            </button>
          </div>

          <TrackerCards />

          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 xl:col-span-2">
              <CaloriesGraph />
            </div>
            <div className="lg:col-span-2 xl:col-span-1">
              <ReportSection />
            </div>
          </div>

          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            <MealsSection />
            <RecommendedFood />
          </div>
        </main>
      </div>
    </div>
  )
}

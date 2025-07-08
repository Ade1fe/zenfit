// import { configureStore } from "@reduxjs/toolkit"
// import dashboardReducer from "./slices/dashboardSlice"
// import mealsReducer from "./slices/mealsSlice"

// export const store = configureStore({
//   reducer: {
//     dashboard: dashboardReducer,
//     meals: mealsReducer,
//   },
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from "./slices/dashboardSlice"
import mealsReducer from "./slices/mealsSlice"

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    dashboard: dashboardReducer, // Include your dashboard reducer here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {meals: MealsState, dashboard: DashboardState}
export type AppDispatch = typeof store.dispatch;
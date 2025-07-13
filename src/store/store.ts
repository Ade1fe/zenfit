
import { configureStore } from "@reduxjs/toolkit"
import calendarReducer from "./slices/calendarSlice"
import dashboardReducer from "./slices/dashboardSlice"
import mealsReducer from "./slices/mealsSlice"

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    dashboard: dashboardReducer,
    calendar: calendarReducer,
  },
  // Add middleware for better debugging
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Optional: Add this for debugging
if (typeof window !== "undefined") {
  console.log("Store initialized:", store.getState())
}

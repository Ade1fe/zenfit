import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./slices/dashboardSlice"
import mealsReducer from "./slices/mealsSlice"

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    meals: mealsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

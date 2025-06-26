import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface TrackerData {
  calories: number
  carbs: number
  heart: number
  water: number
  exercise: number
}

interface DashboardState {
  trackerData: TrackerData
  selectedPeriod: "Weekly" | "Monthly" | "Yearly"
  caloriesData: number[]
  reportData: {
    calories: { value: number; unit: string }
    carbs: { value: number; unit: string }
    heart: { value: number; unit: string }
    water: { value: number; unit: string }
    exercise: { value: number; unit: string }
  }
}

const initialState: DashboardState = {
  trackerData: {
    calories: 5490,
    carbs: 5490,
    heart: 5490,
    water: 5490,
    exercise: 5490,
  },
  selectedPeriod: "Monthly",
  caloriesData: [20, 40, 20, 30, 60, 25, 40, 60, 40],
  reportData: {
    calories: { value: 358, unit: "cal" },
    carbs: { value: 439, unit: "car" },
    heart: { value: 140, unit: "bpm" },
    water: { value: 543, unit: "oz" },
    exercise: { value: 654, unit: "min" },
  },
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateTrackerData: (state, action: PayloadAction<Partial<TrackerData>>) => {
      state.trackerData = { ...state.trackerData, ...action.payload }
    },
    setPeriod: (state, action: PayloadAction<"Weekly" | "Monthly" | "Yearly">) => {
      state.selectedPeriod = action.payload
    },
  },
})

export const { updateTrackerData, setPeriod } = dashboardSlice.actions
export default dashboardSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export interface IDashboardStateInterface {

}

const initialState: any = {
    isLoading: false,
    error: '',
    success: '',
    sketchColor: 'rgba(150, 47, 123, 0.51)',
    oldsketchColor: 'rgba(13, 13, 13, 1)',
}

export const dashboardRedux = createSlice({
    name: 'dashboardRedux',
    initialState,
    reducers: {
        setDashboardState: (state: any, action: any) => {
            const newState = {
                ...state,
            }
            newState[action.payload.key] = action.payload.value
            return newState
        },
    },
})

export const {
    setDashboardState,
} = dashboardRedux.actions

export default dashboardRedux.reducer

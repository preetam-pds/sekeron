import { createSlice } from '@reduxjs/toolkit'
import { FeedJson } from '../../utils/json/HomeJson'

export interface IHomeState {
  isLoading: boolean
  error: string
  success: string
  mediaContent: any
}

const initialState: IHomeState = {
  isLoading: false,
  error: '',
  success: '',
  mediaContent: FeedJson,
}

export const HomeRedux = createSlice({
  name: 'HomeRedux',
  initialState,
  reducers: {
    setHomeState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },
    resetHomeState: (state: any) => {
      const newState = {
        ...state,
      }
      return newState
    },
  },
})

export const { setHomeState, resetHomeState } = HomeRedux.actions

export default HomeRedux.reducer

import { createSlice } from '@reduxjs/toolkit'
import { FeedJson } from '../../utils/json/HomeJson'

export interface ISearchState {
  isLoading: boolean
  error: string
  success: string
  searchKey: string
}

const initialState: ISearchState = {
  isLoading: false,
  error: '',
  success: '',
  searchKey: '',
}

export const searchRedux = createSlice({
  name: 'searchRedux',
  initialState,
  reducers: {
    setSearchState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },
    resetSearchState: (state: any) => {
      const newState = {
        ...state,
      }
      return newState
    },
  },
})

export const { setSearchState, resetSearchState } = searchRedux.actions

export default searchRedux.reducer

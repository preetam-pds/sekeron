import { createSlice } from '@reduxjs/toolkit'
import { ExploreData } from '../../utils/json/ExploreJson'

export interface IExploreState {
  exploreData: any
}

const initialState: IExploreState = {
  exploreData: ExploreData,
}

export const ExploreRedux = createSlice({
  name: 'ExploreRedux',
  initialState,
  reducers: {
    setExploreState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },
  },
})

export const { setExploreState } = ExploreRedux.actions

export default ExploreRedux.reducer

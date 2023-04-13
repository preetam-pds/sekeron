import { createSlice } from '@reduxjs/toolkit'

export interface ILoginState {
  isLoading: boolean
  error: string
  success: string
  isTokenSet: boolean
  userDetails: any
  userDetailsErrors: any
  email: string
  otp: any
  emailError: string
}

const initialState: ILoginState = {
  isLoading: false,
  error: '',
  success: '',
  isTokenSet: false,
  userDetails: {
    fullName: '',
    gender: '',
    phoneNumber: {
      number: '',
      countryCode: '+91',
    },
    dateOfBirth: null,
    otp: '',
    userName: '',
    roles: [],
  },
  userDetailsErrors: {
    fullName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    userName: '',
    roles: '',
  },
  email: '',
  emailError: '',
  otp: '',
}

export const loginRedux = createSlice({
  name: 'loginRedux',
  initialState,
  reducers: {
    loginRequest: (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: true,
      }
      //   newState[action.payload.key] = action.payload.value;
      return newState
    },
    loginSuccess: (state: any, action: any) => {
      const newState = {
        ...state,
        // success:action.
      }
      return newState
    },
    loginFailure: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      return newState
    },
    setLoginState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  setLoginState,
} = loginRedux.actions

export default loginRedux.reducer

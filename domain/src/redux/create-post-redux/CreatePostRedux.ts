import { createSlice } from '@reduxjs/toolkit'

export interface IMediaContent {
  mediaType: string
  publicUrl: string
  text?: string
  isPlaying?: boolean
  isMute?: boolean
  totalDuration?: any
  isRecorded?: boolean
  backgroundColor?: string
}
export interface IUploadPostState {
  isLoading: boolean
  error: string
  success: string
  routeName: any
  selectedMedia: IMediaContent[]
  postDetails: {
    title: string
    description: string
    backgroundColor: string
    oldBackgroundColor: string
    cardBackgroundColor: string
    oldCardBackgroundColor: string
    mediaContent: IMediaContent[]
    timestamp: any
  }
}

const initialState: IUploadPostState = {
  isLoading: false,
  error: '',
  success: '',
  selectedMedia: [],
  postDetails: {
    title: '',
    description: '',
    backgroundColor: 'rgba(150, 47, 123, 0.51)',
    oldBackgroundColor: 'rgba(13, 13, 13, 1)',
    cardBackgroundColor: 'rgba(150, 47, 123, 0.51)',
    oldCardBackgroundColor: 'rgba(13, 13, 13, 1)',
    mediaContent: [],
    timestamp: [], // for mobile ,
  },
  routeName: '', //mobile
}

export const CreatePostRedux = createSlice({
  name: 'CreatePostRedux',
  initialState,
  reducers: {
    uploadPostRequest: (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: true,
      }
      return newState
    },

    uploadPostSuccess: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      return newState
    },

    uploadPostFailure: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      return newState
    },

    setCreatePostState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },

    resetCreatePostState: (state: any) => {
      const newState = {
        ...state,
      }
      return newState
    },
  },
})

export const {
  uploadPostRequest,
  uploadPostSuccess,
  uploadPostFailure,
  setCreatePostState,
  resetCreatePostState,
} = CreatePostRedux.actions

export default CreatePostRedux.reducer

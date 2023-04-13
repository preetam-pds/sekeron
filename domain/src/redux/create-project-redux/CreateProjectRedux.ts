import { createSlice } from '@reduxjs/toolkit'
import { IUploadPostState } from './CreateProjectInteface'

const initialState: IUploadPostState = {
  isLoading: false,
  error: '',
  success: '',
  textCardBackgroundColor: 'rgba(150, 47, 123, 0.51)',
  previousBackgroundColor: 'rgba(13, 13, 13, 1)',
  artistData: {
    selectedArtists: [],
    selectedArtistsType: [],
  },
  basicInfoErrors: {
    projectName: '',
    category: '',
    ownershipType: '',
    revenueShareType: '',
    startDate: '',
    endDate: '',
  },
  projectDetails: {
    coverImage: 'https://picsum.photos/seed/picsum/200/300',
    basicInfo: {
      projectName: '',
      category: '',
      ownershipType: '',
      revenueShareType: '',
      startDate: null,
      // formattedStartDate: null,
      endDate: null,
      description: '',
      offline: false,
      online: false,
      adress: '',
    },
    mediaContent: [],
    collaborators: {
      totalNumberOfRequiredArtist: 0,
      artists: [],
    },
  },
}

export const CreateProjectRedux = createSlice({
  name: 'CreateProjectRedux',
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
    setCreateProjectState: (state: any, action: any) => {
      const newState = {
        ...state,
      }
      newState[action.payload.key] = action.payload.value
      return newState
    },
  },
})

export const {
  uploadPostRequest,
  uploadPostSuccess,
  uploadPostFailure,
  setCreateProjectState,
} = CreateProjectRedux.actions

export default CreateProjectRedux.reducer

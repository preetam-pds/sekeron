import { createSlice } from "@reduxjs/toolkit";
export interface IuploadPostState {
  isLoading: boolean;
  error: string | null;
  success: string;
  profileDetails: any;
  loginId: number;
  profileInfoReduxState: any;
}

const initialState: IuploadPostState = {
  isLoading: false,
  error: "",
  success: "",
  profileDetails: {
    username: "",
    userId: "",
    skills: [],
  },
  loginId: 7,
  profileInfoReduxState: {
    profileImage:'',
    coverImage:'',
    userName: "StaceyKibbler",
    name: "Stacey Kibbler",
    skills: [
      "Pionist",
      "Guitarist",
      "Visual Designer",
      "Actor",
      "Bass Guitarist",
      "Pionist",
    ],
    gender: { _index: 0, label: "Male", value: "Male" },
    describeInfo:
      "About the user and any link if given by the user and if there is more it goes like About the user and any link if given by the user and if there is more it goesAbout the user and any link if given by the user and if there is more it goes like About the user and any link if like",
    websiteLink: "www.google.com",
    addCollege: "",
    addHighSchool: "",
    country: "",
    city: "",
    instagramUrl: "",
    pinterestUrl: "",
    youtubeUrl: "",
    facebookUrl: "",
  },
};

export const ProfileRedux = createSlice({
  name: "ProfileRedux",
  initialState,
  reducers: {
    // get - profile by id
    getProfileByIdRequest: (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    },

    getProfileByIdSuccess: (state: any, action: any) => {
      const response = action.response;
      const newState = {
        ...state,
        error: null,
        profileDetails: response.data,
        isLoading: false,
      };
      return newState;
    },

    getProfileByIdFailure: (state: any, action: any) => {
      const newState = {
        ...state,
      };
      return newState;
    },

    // update - profile
    updateProfileRequest: (state: any) => {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    },

    updateProfileSuccess: (state: any, action: any) => {
      const response = action.response;
      const newState = {
        ...state,
        error: null,
        profileDetails: response.data,
        isLoading: false,
      };
      return newState;
    },

    updateProfileFailure: (state: any, action: any) => {
      const newState = {
        ...state,
      };
      return newState;
    },

    // set-profile-state
    setProfileByIdState: (state: any, action: any) => {
      const newState = {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      return newState;
    },
  },
});

export const {
  getProfileByIdRequest,
  getProfileByIdSuccess,
  getProfileByIdFailure,

  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,

  setProfileByIdState,
} = ProfileRedux.actions;

export default ProfileRedux.reducer;

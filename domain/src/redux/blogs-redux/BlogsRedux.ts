import { createSlice } from "@reduxjs/toolkit";
import { BlogsJson } from "../../utils/json/BlogsJson";
import { FeedJson } from "../../utils/json/HomeJson";

export interface ISearchState {
  isLoading: boolean;
  error: string;
  success: string;
  blogsData: any;
  isDarkTheme: boolean;
}

const initialState: ISearchState = {
  isLoading: false,
  error: "",
  success: "",
  blogsData: BlogsJson,
  isDarkTheme: true,
};

export const blogsRedux = createSlice({
  name: "blogsRedux",
  initialState,
  reducers: {
    setBlogState: (state: any, action: any) => {
      const newState = {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      return newState;
    },
    resetBlogsState: (state: any) => {
      const newState = {
        ...state,
      };
      return newState;
    },
  },
});

export const { setBlogState, resetBlogsState } = blogsRedux.actions;

export default blogsRedux.reducer;

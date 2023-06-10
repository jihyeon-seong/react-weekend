import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  loading: false,
  hasError: false,
};

const CommentsSlice = createSlice({
  initialState,
  name: 'comments',
  reducers: {
    getCommentsStart: (state, action) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.comments = action.payload;
    },
    getCommentsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } =
  CommentsSlice.actions;

export const fetchComments = (id) => {
  return async (dispatch) => {
    dispatch(getCommentsStart());

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );

      dispatch(getCommentsSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(getCommentsFailure());
    }
  };
};

export default CommentsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  post: {},
  loading: false,
  hasError: false,
};

const PostDetailsSlice = createSlice({
  initialState,
  name: 'postDetails',
  reducers: {
    getPostDetailsStart: (state, action) => {
      state.loading = true;
    },
    getPostDetailsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.post = action.payload;
    },
    getPostDetailsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const {
  getPostDetailsStart,
  getPostDetailsSuccess,
  getPostDetailsFailure,
} = PostDetailsSlice.actions;

export const fetchPostDetails = (id) => {
  return async (dispatch) => {
    dispatch(getPostDetailsStart());

    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );

      let post = response.data;

      response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`,
      );

      post.username = response.data.username;
      post.email = response.data.email;

      dispatch(getPostDetailsSuccess(post));
    } catch (error) {
      console.error(error);
      dispatch(getPostDetailsFailure());
    }
  };
};

export default PostDetailsSlice.reducer;

// 목적 : reduceer를 default로 export
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// initial state
const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

// RTK에서는 slice 객체를 생성하면, action creator, reducer를 자동으로 만들어 줌
// slice 객체가 action creator와 reducer를 속성으로 갖게 됨
// create slice
const postListSlice = createSlice({
  initialState,
  name: 'postList',
  reducers: {
    // 함수 내용들이 reducer의 각각 case 부분이라 생각하셈
    // name은 action creator를 만들 때 사용되고 함수 내용은 reducer 함수의 switch~case 기능
    getPostsStart: (state, action) => {
      state.loading = true;
    },
    getPostsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

// export action creator
export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postListSlice.actions;

// thunk middleware 에서 호출할 dispatch 함수를 return
export const fetchPostList = () => {
  return async (dispatch) => {
    dispatch(getPostsStart()); // * postListSlice.actions.getPostsStart임. postListSlice reducers의 getPostsStart가 아님! *

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(getPostsFailure());
    }
  };
};

// export reducer
export default postListSlice.reducer;

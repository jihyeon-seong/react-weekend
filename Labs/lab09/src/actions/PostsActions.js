import axios from 'axios';

// define action type
export const GET_POSTS = 'GET_POSTS'; // 포스트 목록 요청 중
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 포스트 목록 응답 성공
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'; // 포스트 목록 응답 에러

// action creator : action object return
export const getPosts = () => ({ type: GET_POSTS });

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE });

// Thunk middleware에서 사용될 async function을 return
export const fetchPosts = () => {
  return async (dispatch) => {
    // 목록 요청 중 액션을 store reducer에 전달
    dispatch(getPosts());

    try {
      const reponse = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      const posts = reponse.data;

      // 목록 요청 성공 액션을 payload와 함께 store reducer에 전달
      dispatch(getPostsSuccess(posts));

      // 목록 요청 실패 액션을 store reducer에 전달
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
};

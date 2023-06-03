import * as Actions from '../actions/PostsActions';

// initial state
const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

// reducer
// action type에 따라서 전달받은 state를 변경한 새로운 객체를 return
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS:
      return {
        ...state,
        loading: true,
      };

    case Actions.GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        hasErrors: false,
      };

    case Actions.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };

    default:
      return state;
  }
};

export default postReducer;

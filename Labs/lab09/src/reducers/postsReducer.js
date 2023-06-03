// initial state
const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

// reducer
// action type에 따라서 전달받은 state를 변경한 새로운 객체를 return
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      break;

    default:
      return state;
  }
};

export default postReducer;

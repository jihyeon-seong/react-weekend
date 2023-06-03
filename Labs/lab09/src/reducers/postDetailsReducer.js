import * as Actions from '../actions/PostDetailsActions';

const initialState = {
  post: {},
  loading: false,
  hasErrors: false,
};

const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POST_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case Actions.GET_POST_DETAILS_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        hasErrors: false,
      };

    case Actions.GET_POST_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };

    default:
      return state;
  }
};

export default postDetailsReducer;

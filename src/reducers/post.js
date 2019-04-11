import {GET_POSTS, POSTS_SUCCESS} from '../actions/PostActions'

const initialState = {
  initial: {
    userId: 0,
    id: 0,
    title: 'Comming soon',
    body: '...',
  },
  loaded: []
};

export function postReducer(state = initialState, action){
  switch (action.type) {
    case GET_POSTS:
      return { ...state };
    case POSTS_SUCCESS:
      return { loaded: action.json};
    default:
      return state;
  }
}
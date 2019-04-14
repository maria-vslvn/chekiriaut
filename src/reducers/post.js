import {GET_POSTS, POSTS_SUCCESS, DELETE_POST, CREATE_POST} from '../actions/PostActions'

const initialState = {};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {...state};

    case POSTS_SUCCESS:
      return {...state, ...action.json};

    case DELETE_POST:
      let temp = {...state};
      let newState = Object.values(temp);
      newState.splice(action.item, 1);
      state = newState;
      return {...newState};


    case CREATE_POST:
      let temp1 = {...state};
      let newState1 = Object.values(temp1);
      let item = {title: action.text, body: action.body};
      console.log(action.text);
      newState1.push(item);
      state = newState;
      return {...newState1};

    default:
      return state;
  }
}
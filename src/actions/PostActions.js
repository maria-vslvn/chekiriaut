export const GET_POSTS = 'GET_POSTS';
export const POSTS_SUCCESS ='POSTS_SUCCESS';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_MODE_POST = 'EDIT_MODE_POST';
export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';
export const EDIT_SAVE_POST = 'EDIT_SAVE_POST';
export const SAVE_POST = 'SAVE_POST';

export const getPosts = () => ({
  type: GET_POSTS,
});

export function rmPost(item){
  return{
    type: DELETE_POST,
    item: item
  }
}
export function handleEditMode(itemId){
  return{
    type: EDIT_MODE_POST,
    itemId,
  }
}
export function savePost(itemId){
  return{
    type: SAVE_POST,
    itemId,
  }
}

export function textEdit(itemId, itemValue){
  return{
    type: HANDLE_TEXT_CHANGE,
    itemId, itemValue
  }
}

export const createPostTitle = (text, body, userId, id) =>({
  type: CREATE_POST,
  text,
  body,
  userId,
  id
});

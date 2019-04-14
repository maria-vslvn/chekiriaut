export const GET_POSTS = 'GET_POSTS';
export const POSTS_SUCCESS ='POSTS_SUCCESS';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

export const getPosts = () => ({
  type: GET_POSTS,
});

export function rmPost(item){
  return{
    type: DELETE_POST,
    item: item
  }
}
export const createPostTitle = (text, body) =>({
  type: CREATE_POST,
  text,
  body
});

import { CREATE_POST, DELETE_POST } from './actionTypes'

let createNewPost = (post) => {
  return {
    type: CREATE_POST,
    payload: {
      id: post.id,
      title: post.title,
      author: post.author
    }
  }
}

let deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id
  }
}
export { deletePost, createNewPost }

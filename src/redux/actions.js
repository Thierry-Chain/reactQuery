import {
  CREATE_POST,
  DELETE_POST,
  GET_DATA_DONE,
  DELETE_POST_ERROR
} from './actionTypes'

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

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id
  }
}
const deletePostError = (err) => {
  return {
    type: DELETE_POST_ERROR,
    payload: err
  }
}
const getDataDone = (dt) => {
  console.log('all right boss')
  return {
    type: GET_DATA_DONE,
    payload: dt
  }
}
export { deletePost, createNewPost, getDataDone, deletePostError }

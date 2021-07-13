import {
  CREATE_POST,
  DELETE_POST,
  GET_DATA_DONE,
  DELETE_POST_ERROR,
  SET_SELECTED_USER
} from '../actionTypes'

let initialState = {
  posts: [],
  errorOfDeletion: '',
  good: 'yes',
  selectedUser: null
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      let { id, title, author } = action.payload
      let oldPosts = [...state.posts]
      let newPosts = oldPosts.push({ id, title, author })
      return {
        ...state,
        posts: newPosts
      }

    case DELETE_POST:
      return {
        ...state,
        posts: action.payload
      }
    case GET_DATA_DONE:
      return {
        ...state,
        posts: action.payload
      }
    case DELETE_POST_ERROR:
      return {
        ...state,
        errorOfDeletion: action.payload
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      }
    default:
      return { ...state }
  }
}
export default postReducer

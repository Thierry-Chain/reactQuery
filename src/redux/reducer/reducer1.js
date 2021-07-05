import { CREATE_POST, DELETE_POST } from '../actionTypes'

let initialState = {
  posts: [],
  good: 'yes'
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

    default:
      return { ...state }
  }
}
export default postReducer

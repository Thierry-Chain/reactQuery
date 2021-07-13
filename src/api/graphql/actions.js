import { gql, GraphQLClient } from 'graphql-request'
import { store } from '../../redux/store'
import { setSelectedUser } from '../../redux/actions'
const endPoint = 'http://localhost:3000/'

const client = new GraphQLClient(endPoint, { headers: {} })

const test = () => {
  const query = gql`
    query {
      allUsers(page: 0, perPage: 67) {
        id
        name
        Posts {
          id
          title
          views
          user_id
        }
      }
    }
  `
  return client
    .request(query)
    .then((resp) => {
      return resp
    })
    .catch((err) => {
      //console.log(err)
    })
}
const getUserQuery = gql`
  query ($ide: ID!) {
    User(id: $ide) {
      id
      name
      Posts {
        id
        title
        user_id
      }
    }
  }
`
const getUser = (vars) => {
  client
    .request(getUserQuery, vars)
    .then((resp) => {
      //console.log('user is', resp)
      store.dispatch(setSelectedUser(resp.User))
    })
    .catch((err) => {
      //console.error('error occured boss', err)
    })
}
const createUserQuery = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`
const createUser = (vars) => {
  client
    .request(createUserQuery, vars)
    .then((resp) => {
      console.log('created', resp)
    })
    .catch((err) => {
      console.warn({ err }, 'sorry')
    })
}
export { test, getUser, createUser }

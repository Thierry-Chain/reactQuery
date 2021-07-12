import { gql, GraphQLClient } from 'graphql-request'
const endPoint = 'http://localhost:3000/'

const client = new GraphQLClient(endPoint, { headers: {} })

//client.request(query, variables).then((data) => console.log(data))

const test = async () => {
  const query = gql`
    query {
      Post(id: 2) {
        id
        title
        views
        user_id
        Comments {
          id
          post_id
          body
          date
        }
      }
    }
  `
  const resp = await client.request(query)
  return resp
}
export { test }

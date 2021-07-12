//const axios = require('axios').default

function getData(query, variables) {
  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })
    .then((res) => {
      return res.json()
    })
    .then((dt) => {
      console.log(dt.data)
    })
    .catch((err) => {
      console.error('sorry boss ', err)
    })
}

const sample = `{
  allUsers(page: 0, perPage: 67) {
    id
    name
    Posts {
      id
      title
      views
      user_id, User{id,name,Posts{id,title,user_id}}
    }
  }
}`
getData(sample)
//////////////////////////////
const p1 = `query($id:ID!){
  Post(id:$id){
    id,title,views,user_id,Comments{id, post_id,body,date}
  }
}`
const getUser1 = () => {
  getData(p1, { id: 1 })
} ////////////////////////////
const p2 = `query($id:ID!){
  Post(id:$id){
    id,title,views,user_id,Comments{id, post_id,body,date}
  }
}`
const getUser2 = () => {
  getData(p2, { id: 2 })
}
////////////////////
const p3 = `query($id:ID!){
  Post(id:$id){
    id,title,views,user_id,Comments{id, post_id,body,date}
  }
}`
const getUser3 = () => {
  getData(p3, { id: 3 })
}

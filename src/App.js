import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Admin from './components/Admin'
import ErrorPage from './components/ErrorPage'
import Main from './components/Main'
import NavBar from './components/NavBar'
import Post from './components/Post'
import { ReactQueryDevtools } from 'react-query/devtools'
import DisplayGraphqlData from './components/DisplayGraphqlData'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/admin" component={Admin} />
        <Route path="/post/:id" component={Post} />
        <Route path="/graphql" component={DisplayGraphqlData} />
        <Route path="/:*" component={ErrorPage} />
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  )
}

export default App

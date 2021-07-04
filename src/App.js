import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Admin from './components/Admin'
import ErrorPage from './components/ErrorPage'
import Main from './components/Main'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/:hgd" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

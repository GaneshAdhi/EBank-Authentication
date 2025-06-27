import './App.css'

import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/ebank/login" component={Login} />
        <ProtectedRoutes exact path="/" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App

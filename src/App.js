import React from 'react'
import './App.css'
import Post from './Post'
import Get from './Get'
import Edit from './Edit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Get />
            </Route>
            <Route exact path="/post">
              <Post />
            </Route>
            <Route exact path="/edit">
              <Edit />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App

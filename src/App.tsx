import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { auth, firebase } from './services/firebase'

import { AuthContextProvider } from './contexts/AuthContextProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App

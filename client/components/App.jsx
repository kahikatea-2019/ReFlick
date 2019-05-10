import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Base from './page-layout/Base'
import PlayBase from './page-layout/PlayBase'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Base} />
        <Route exact path='/play' component={PlayBase} />
      </Switch>
    </Router>
  )
}

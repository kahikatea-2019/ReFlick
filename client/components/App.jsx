import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { Container, Row } from 'react-bootstrap'

import Base from '../components/layout/Base'
import PlayBase from '../components/layout/PlayBase'

export default function App () {
  return (
    <Router>
      <div className="page">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Base} />
            <Route exact path='/play' component={PlayBase} />
            <Route path='/play/:id' component={PlayBase} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

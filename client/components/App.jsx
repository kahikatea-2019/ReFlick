import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { Container, Col, Row } from 'react-bootstrap'

import Base from '../components/layout/Base'
import PlayBase from '../components/layout/PlayBase'

export default function App () {
  return (
    <Router>
      <Container>

        <Row className="header" ><Header/></Row>
        <Row>

          <Switch>
            <Route exact path='/' component={Base} />
            <Route path='/play/:id' component={PlayBase} />
          </Switch>
        </Row>
        <Row><Footer/></Row>

      </Container>
    </Router>
  )
}

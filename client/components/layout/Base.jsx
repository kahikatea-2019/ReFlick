import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Canvas from '../create/canvas/Canvas'
import Toolbar from '../Toolbar'

export default class Base extends React.Component {
  render () {
    return (

      <Container>
        <Row>
          <Col><Canvas/></Col>
          <Col><Toolbar/></Col>
        </Row>
      </Container>

    )
  }
}

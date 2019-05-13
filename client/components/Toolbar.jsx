import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import Frames from './create/frames/Frames'
import Colours from './create/colours/Colours'

export default class Toolbar extends React.Component {
  render () {
    return (

      <Container>
        <Row>
          <Col><Frames /></Col>

          <Col> <Colours/> </Col>
        </Row>
      </Container>
    )
  }
}

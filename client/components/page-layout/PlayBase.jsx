import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import PlayCanvas from '../canvas/PlayCanvas'

export default class Base extends React.Component {
  render () {
    return (
      <Container>
        <Row><Header/></Row>
        <Row>
          <Col><PlayCanvas/></Col>
        </Row>
        <Row><Footer/></Row>
      </Container>
    )
  }
}

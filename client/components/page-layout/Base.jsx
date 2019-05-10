import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import Colours from '../colours/Colours'
import Frames from '../frames/Frames'
import Canvas from '../canvas/Canvas'

export default class Base extends React.Component {
  render () {
    return (
      <Container>
        <Row><Header/></Row>
        <Row>
          <Col ><Colours/></Col>
          <Col xs={8}><Canvas/></Col>
          <Col ><Frames/></Col>
        </Row>
        <Row><Footer/></Row>
      </Container>
    )
  }
}

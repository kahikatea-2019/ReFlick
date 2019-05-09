import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Canvas from './Canvas'
import Colours from './Colours'
import Header from './Header'
import Footer from './Footer'
import Frames from './Frames'

export default function App () {
  return (
    <>
      <Container>
        <Row><Header/></Row>
        <Row>
          <Col ><Colours/></Col>
          <Col xs={8}><Canvas/></Col>
          <Col ><Frames/></Col>
        </Row>
        <Row><Footer/></Row>
      </Container>
    </>
  )
}

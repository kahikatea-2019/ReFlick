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
          <Col sm><Colours/></Col>
          <Col xl><Canvas/></Col>
          <Col sm><Frames/></Col>
        </Row>
        <Row><Footer/></Row>
      </Container>
    </>
  )
}

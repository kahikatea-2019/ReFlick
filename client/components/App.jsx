import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Canvas from './canvas/Canvas'
import Colours from './colours/Colours'
import Header from './page-layout/Header'
import Footer from './page-layout/Footer'
import Frames from './frames/Frames'

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

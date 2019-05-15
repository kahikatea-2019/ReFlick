import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

export default function Header () {
  return (
    <Container className="header">
      <Row>
        <Col xs={12} md={8} className="title"> REFLICK </Col>
        <Col xs={6} md={4} className="nav">
          <Link to ='/'>Create! </Link>
          <Link to ='/play/1'>Play!</Link>
        </Col>
      </Row>
    </Container>
  )
}

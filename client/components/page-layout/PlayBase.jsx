import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import PlayCanvas from '../canvas/PlayCanvas'

export default class Base extends React.Component {
  render () {
    const { id } = this.props.match.params
    return (
      <Container>
        <Row><Header/></Row>
        <Row>
          <Col><PlayCanvas id={id}/></Col>
        </Row>
        <Row><Footer/></Row>
      </Container>
    )
  }
}

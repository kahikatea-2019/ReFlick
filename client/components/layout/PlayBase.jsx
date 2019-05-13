import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import GameList from './GameList'
import PlayCanvas from '../../components/create/canvas/PlayCanvas'

export default class Base extends React.Component {
  render () {
    const { id } = this.props.match.params
    return (
      <Container>

        <Row>
          <Col><PlayCanvas id={id}/></Col>
        </Row>
        <GameList />
      </Container>
    )
  }
}

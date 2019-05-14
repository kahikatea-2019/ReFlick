import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import GameList from './GameList'
import PlayCanvas from '../../components/create/canvas/PlayCanvas'

export default class Base extends React.Component {
  state = {
    showGame: false,
    showList: true
  }

  showGame = () => {
    this.setState({
      showGame: true,
      showList: false
    })
  }

  showList = () => {
    this.setState({
      showGame: false,
      showList: true
    })
  }
  render () {
    const { id } = this.props.match.params
    return (
      <Container>
        <Row>
          {this.state.showGame && <Col><PlayCanvas id={id} showList={this.showList}/></Col>}
        </Row>
        {this.state.showList && <GameList showGame={this.showGame}/>}
      </Container>
    )
  }
}

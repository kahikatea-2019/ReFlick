import React, { Component } from 'react'
import { getGameIds } from '../../api/games'
import { Link } from 'react-router-dom'
export default class GameList extends Component {
  state = {
    Ids: []
  }

  componentDidMount () {
    this.fetchIds()
  }
  fetchIds () {
    getGameIds()
      .then(Ids => {
        this.setState({
          Ids
        })
      })
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.Ids.map(id =>
            <li key={id.id}>
              <Link to ={`/play/${id.id}`} onClick={this.props.showGame}>{id.id}</Link>
            </li>)}
        </ul>
      </div>
    )
  }
}

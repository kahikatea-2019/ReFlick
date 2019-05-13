import React, { Component } from 'react'
import { getGameIds } from '../../api/games'
export default class GameList extends Component {
  state = {
    ids: ''
  }
  componentDidMount () {
    return getGameIds()
      .then(res => this.setState({
        ids: res
      }),
      console.log(this.state))
  }
  render () {
    return (
      <div>
        <ul>
          {/* {this.state.ids.map(id => <li>{id}</li>)} */}
        </ul>
      </div>
    )
  }
}

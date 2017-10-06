import React from 'react';
import PlayerDetails from '../models/playerDetails.js'

class PlayerCard extends React.Component {
  constructor(props){
    super(props)
    this.playerDetails = new PlayerDetails()
    this.players = this.playerDetails.PLAYERS_INFO;

  }
  render(){

    return(
    <div className="player-card">
      <img src={this.props.image}></img>
      <h4>name: {this.props.name}</h4>
      <p>team: {this.props.team}</p>
      <p>height: {this.props.height}</p>
    </div>

  )
  }
}


export default PlayerCard;

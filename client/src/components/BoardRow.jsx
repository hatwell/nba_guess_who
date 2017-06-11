import React from 'react'
import PlayerCard from './PlayerCard.jsx'
import PlayerDetails from '../models/playerDetails.js'

class BoardRow extends React.Component {
  constructor(props){
    super(props)
    this.playerDetails = new PlayerDetails();
    this.players = this.playerDetails.PLAYERS_INFO;
  }


  render(){
    var board = this.props.board;

    var card = (index) => (
      console.log(this.players[index].name),
      <PlayerCard
        id ={index}
        image = {this.players[index].image.bind(this)}
        name = {this.players[index].name.bind(this)}
        height = {this.players[index].height.bind(this)}
        team = {this.players[index].team.bind(this)}/>
    )

    return(
      <div>
        {card(this.props.firstCell)}
        {card(this.props.firstCell + 1)}
        {card(this.props.firstCell + 2)}
      </div>
    )
  }
}

export default BoardRow;

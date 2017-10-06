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
      <PlayerCard
        id ={index}
        log = {console.log(index, " + ", this.players[index].name)}
        image = {this.players[index].image}
        name = {this.players[index].name}
        height = {this.players[index].height}
        team = {this.players[index].team}/>
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

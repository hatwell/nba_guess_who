import React from 'react'
import BoardRow from './BoardRow.jsx'
import PlayerCard from './PlayerCard.jsx'
import PlayerDetails from '../models/playerDetails.js'

class GameBoard extends React.Component {
  constructor(props){
    super(props)
    this.createBoard = this.createBoard.bind(this);
    this.playerDetails = new PlayerDetails();
  }

  createBoard(){
    const players = this.playerDetails.PLAYERS_INFO;
    players.forEach(function(player){
      console.log(<PlayerCard img ={player.image} id={player.index} name={player.name} height={player.height}/>)
    })
  }

  render() {
  var board = this.props.board;

  var row = (firstCell) => (
      <BoardRow
        firstCell={firstCell}
        board={this.props.board}
      />
  )

  return (
    <div>
      <h1>nba basketball lads board</h1>
      <div>
          {row(0)}
          {row(3)}
          {row(6)}
      </div>
    </div>
  )
}
}

export default GameBoard;

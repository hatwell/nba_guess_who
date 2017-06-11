import React from 'react';

class PlayerCard extends React.Component {
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

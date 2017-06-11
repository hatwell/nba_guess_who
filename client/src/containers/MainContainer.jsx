import React from 'react';
import GameBoard from '../components/GameBoard.jsx'
import QuestionSection from '../components/QuestionSection.jsx'

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
  return (
    <div>
      <h2>ITS BASKETBALL TIME</h2>
      <GameBoard/>
      <QuestionSection />
    </div>
  );
}


}

export default MainContainer;

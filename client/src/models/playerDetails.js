class PlayerDetails = function(){
  constructor(){
    this.PLAYERS_INFO = [
      {
        name: "LeBron James",
       team: "Cleveland Cavaliers",
       height: 203
     },
      {
        name: "Steph Curry",
       team: "Golden State Warriors",
       height: 190
     },
      {
        name: "Kevin Durant",
       team: "Golden State Warriors",
       height: 206
     },
      {
        name: "Russell Westbrook",
       team: "Oklahoma City Thunder",
       height: 191
     }
    ]
  }
}

getTeams(){
  const allTeams = this.PLAYERS_INFO.map(function(player){
    return player.team;
  })
  return allTeams;
}

export default PlayerDetails;

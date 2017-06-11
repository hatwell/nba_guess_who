class PlayerDetails {
  constructor(){
    this.PLAYERS_INFO = [
      {
        name: "LeBron James",
       team: "Cleveland Cavaliers",
       height: 203,
       image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254'
     },
      {
        name: "Steph Curry",
       team: "Golden State Warriors",
       height: 190,
       image: 'client/build/img/steph_curry.png'
     },
      {
        name: "Kevin Durant",
       team: "Golden State Warriors",
       height: 206,
       image: 'client/build/img/kevin_durant.png'
     },
      {
        name: "Russell Westbrook",
       team: "Oklahoma City Thunder",
       height: 191,
       image: 'client/build/img/russell_westbrook.png'
     }
    ]
  }

  getTeams(){
    const allTeams = this.PLAYERS_INFO.map(function(player){
      return player.team;
    })
    return allTeams;
  }
}

export default PlayerDetails;

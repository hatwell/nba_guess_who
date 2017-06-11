var assert = require('assert');

var PlayerDetails = require ('../playerDetails.js');


beforeEach(function(){
  playerDetails = new PlayerDetails();
})

describe(function(){
  it('player details are in the constructor', function(){
    assert.equal(4, PlayerDetails.PLAYERS_INFO.length);
  });


})

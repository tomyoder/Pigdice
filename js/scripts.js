

function Player (turnTotal, gameTotal){
this.turnTotal = turnTotal;
this.gameTotal = gameTotal;
};

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);
var rollAmount = 0;
var rollValue = 0;
function hold () {
  player1.gameTotal = player1.turnTotal + player1.Gametotal;

};

Player.prototype.roll = function (){
  rollValue = Math.ceil(Math.random()*6);

if (rollValue === 1){
  alert("You rolled a one, switch player now!");
  return this.turnTotal = 0;
};
  return this.turnTotal;
};

//
// function newFunction() {
//   rollValue = Math.ceil(Math.random()*6);
//   var rollAmount = player1.roll();
//   $(".dice1 p").text(rollAmount);
//   player1.turnTotal += rollAmount;
//   console.log(player1.turnTotal);
// };

$(function(){
  $("#roll1").click(function(){
    player1.roll();
    player1.turnTotal += rollValue;
    $(".dice p").text(player1.turnTotal);
  });

  $("#hold1").click(function(){
    var holdAmount = hold();
    $(".gameTotal1 p").text(player1.gameTotal);
    player1.turnTotal += player1.gameTotal;
    console.log(player1.gameTotal);
  });
});

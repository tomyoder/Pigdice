

function Player (turnTotal, gameTotal){
this.turnTotal = turnTotal;
this.gameTotal = gameTotal;
};

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

function hold () {
  player1.gameTotal = player1.turnTotal + player1.Gametotal;

};

function roll (){
var d = Math.ceil(Math.random()*6);
return d;
};

$(function(){

  $("#roll1").click(function(){
    var rollAmount = roll();
    $(".dice1 p").text(rollAmount);
    player1.turnTotal += rollAmount;
    console.log(player1.turnTotal);
  });

  $("#hold1").click(function(){
    var holdAmount = player1.hold();
    $(".gameTotal1 p").text(gameTotal)
  })
});

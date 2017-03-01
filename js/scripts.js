function play (){


}

function roll (){
var d = Math.floor(Math.random()*6)+1;
    D1.push(d);
};

$(function(){
  $("#roll1").click(function(){
    roll();
    $(".dice1 p").text(D1);
  });
});

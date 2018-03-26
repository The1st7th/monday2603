var suits = ["spades","clubs","diamonds","hearts"];
var values = ["ace of","2 of","3 of","4 of","5 of","6 of","7 of","8 of","9 of","10 of","jack of","queen of","king of"];
var deck = [];

function initial(){
  suits.forEach(function(suit){
  values.forEach(function(value){
  deck.push(value + " " + suit);
    });
  });
};



$(document).ready(function(){
  initial();

  deck.forEach(function(deck){

    $("body").append("<p>"+ deck +"</p>");
  });
  console.log(deck);
});

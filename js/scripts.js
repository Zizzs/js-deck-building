var cards = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
var combinedArray = [];
var cardArrayLength = parseInt(cards.length);
var suitArrayLength = parseInt(suits.length);
var combinedArrayLength = parseInt(combinedArray.length);

$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
      event.preventDefault();
        suits.forEach(function(suit) {
            cards.forEach(function(card) {
              combinedCard = (card + " of " + suit);
              combinedArray.push(combinedCard);
              if (combinedArrayLength < 52) {
                $("#output").append("<li>"+combinedCard);
              };
            });
        });
})});

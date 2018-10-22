cards = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
combinedArray = [];
var cardArrayLength = parseInt(cards.length);
var suitArrayLength = parseInt(suits.length);
var combinedArrayLength = parseInt(combinedArray.length);

$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
      event.preventDefault();
        suits.forEach(function(suit) {
          var newSuit = suit;
            cards.forEach(function(card) {
              var newCard = card;
              combinedCard = (newCard + " of " + newSuit);
              combinedArray.push(combinedCard);
              if (combinedArrayLength < 52) {
                $("#output").append("<li>"+combinedCard);
              };
            });
        });
})});

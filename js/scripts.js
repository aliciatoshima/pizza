// Business Logic for PigDice ---------
function Player() {
  this.total = total;
  this.current_total = current_total;
}

Player.prototype.add = function() {
  this.total =  this.total + this.current_total;
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

var current_total = 0
var total = 0

$(document).ready(function(){

var Player1 = new Player(total, current_total);
var Player2 = new Player(total, current_total);
var img = new Image();

  // when roll is clicked, show the roll of the dice
  //console.log(Player1.current_total)

  $("#p1-roll").click(function() {

    //debugger;
    roll1 = randInt(1,7);
    $(".p1-roll").text(roll1)

    if (roll1 === 1) {
      Player1.current_total = 0
      $(".p1-roll").empty()
      alert("Player 2's turn!")
    } else {
      //debugger
      //console.log(Player1.current_total)
     Player1.current_total = Player1.current_total + roll1
    }

    $(".p1-current").text(Player1.current_total)
    });


    $("#p2-roll").click(function() {
      //debugger;
      roll2 = randInt(1,7);
      $(".p2-roll").text(roll2)

      if (roll2 === 1) {
        Player2.current_total = 0
        $(".p2-roll").empty()
        alert("Player 1's turn!")
      } else {
        if (roll2 === 2) {
          img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_2-512.png";
          img.alt = "dice2";
          img.style.width = "300px";

          $(".img").empty().append(img);
          $(".img").show()
        } else if (roll2 === 3) {
          img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-512.png";
          img.alt = "dice3";
          img.style.width = "300px";

          $(".img").empty().append(img);
          $(".img").show()
        } else if (roll2 === 4) {
          img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_4-512.png";
          img.alt = "dice4";
          img.style.width = "300px";

          $(".img").empty().append(img);
          $(".img").show()
        } else if (roll2 === 5) {
          img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png";
          img.alt = "dice5";
          img.style.width = "300px";

          $(".img").empty().append(img);
          $(".img").show()
        } else if (roll2 === 6) {
          img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png";
          img.alt = "dice6";
          img.style.width = "300px";

          $(".img").empty().append(img);
          $(".img").show()
        }


       Player2.current_total = Player2.current_total + roll2;
      }

      $(".p2-current").text(Player2.current_total)
      });

  $("#p1-hold").click(function() {

    Player1.add()

    $(".p1-total").text(Player1.total)
    //p2-roll").empty()
    Player1.current_total = 0

    if (Player1.total >= 100) {
      //alert("Player 1 has won!")
      $(".who-won").text("1")
      $(".winner").show()
    } else {
      alert("Player 2's turn!")
    }
  });



  $("#p2-hold").click(function() {

    Player2.add()

    $(".p2-total").text(Player2.total)
    //p2-roll").empty()
    Player2.current_total = 0
    //alert("Player 1's turn!")

    if (Player2.total >= 100) {
      //alert("Player 1 has won!")
      $(".who-won").text("2")
      $(".winner").show()
    } else {
      alert("Player 1's turn!")
    }

  });



});

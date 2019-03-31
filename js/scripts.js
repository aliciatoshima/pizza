// Business Logic for PigDice ---------
function Pizza() {
  this.size = size;
  this.sizePrice = sizePrice;
  this.toppings = toppings;
  this.toppingsPrice = toppingsPrice;
  this.price = price;
}

Player.prototype.total = function() {
  this.price =  this.sizePrice + this.toppingsPrice;
}


var sizePrice = 0.0
var toppingsPrice = 0.0

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val()
    var toppings =

    var Pizza1 = new Pizza(size, sizePrice, toppings, toppingsPrice);

    if (size === "small") {
      Pizza1.sizePrice = 15
    } else if (size === "medium") {
      Pizza1.sizePrice = 20
    } else if (size === "large") {
      Pizza1.sizePrice = 25
    } else {
      Pizza.sizePrice = 30
    }


    //var Pizza1 = new Pizza(size, sizePrice, toppings, toppingsPrice);


    //debugger;
    roll1 = randInt(1,7);
    $(".p1-roll").text(roll1)

    if (roll1 === 1) {
      Player1.current_total = 0
      $(".p1-roll").empty()
      alert("Player 2's turn!")
      $(".img").empty()
    } else {
      img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_" +roll1 + "-512.png";
      img.alt = "dice2";
      img.style.width = "300px";

      $(".img").empty().append(img);
      $(".img").show()

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
        $(".img").empty()
      } else {

        img.src = "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_" +roll2 + "-512.png";
        img.alt = "dice2";
        img.style.width = "300px";

        $(".img").empty().append(img);
        $(".img").show()


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
      $(".reset").show()
    } else {
      alert("Player 2's turn!")
      $(".img").empty()
    }
  });



  $("#p2-hold").click(function() {

    Player2.add()

    $(".p2-total").text(Player2.total)
    //p2-roll").empty()
    Player2.current_total = 0

    if (Player2.total >= 100) {
      //alert("Player 1 has won!")
      $(".who-won").text("2")
      $(".winner").show()
      $(".reset").show()
    } else {
      alert("Player 1's turn!")
      $(".img").empty()
    }

  });

  $("#reset").click(function() {
    location.reload();
  });


});

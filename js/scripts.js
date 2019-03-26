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
// var current_total = 0
//
//
// var total = 0


var Player1 = new Player(total, current_total);
var Player2 = new Player(total, current_total);

  // when roll is clicked, show the roll of the dice
  //console.log(Player1.current_total)

  $("#p1-roll").click(function() {
    //debugger;
    roll1 = randInt(1,7);
    $(".p1-roll").text(roll1)

    if (roll1 === 1) {
      Player1.current_total = 0
      $(".p1-roll").empty()
      alert("Other player's turn!")
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
      $(".p2-roll").text(roll1)

      if (roll2 === 1) {
        Player2.current_total = 0
        $(".p2-roll").empty()
        alert("Other player's turn!")
      } else {
        //debugger
        //console.log(Player1.current_total)
       Player2.current_total = Player2.current_total + roll2
      }

      $(".p2-current").text(Player2.current_total)
      });

  $("#p1-hold").click(function() {

    Player1.add()

    $(".p1-total").text(Player1.total)
    //p2-roll").empty()
    Player1.current_total = 0
  });

  $("#p2-hold").click(function() {

    Player2.add()

    $(".p2-total").text(Player2.total)
    //p2-roll").empty()
    Player2.current_total = 0
  });

  // when hold is clicked, return the sum of the rolls for the turn
  // also return the total sum
  // $('#p1-hold').click(function() {
  //   event.preventDefault();


    // var newContact = new Contact();
    // newContact.firstName = $('#fname').val();
    // newContact.lastName = $('#lname').val();
    // //newContact.phoneNumber = $('#pnum').val();
    //
    // // var newAddress = new Address();
    // // newAddress.street = $('#street').val();
    // // newAddress.city = $('#city').val();
    // // newAddress.state = $('#state').val();
    //
    // $(".new-address").each(function() {
    //   //var newAddress = new Address();
    //   //debugger;
    //   var newStreet = $(this).find("input#street").val();
    //   var newCity = $(this).find("input#city").val();
    //   var newState = $(this).find("input#state").val();
    //   var newAddress = new Address(newStreet, newCity, newState);
    //   newContact.address.push(newAddress);
    // });
    //
    //
    //
    // var fname = newContact.fullName();
    //
    //
    //
    // addressBook1.contacts.push(newContact);
    //
    // $('#contactlist').append(`<li><span class='contact'>Name: ${fname} </span></li>`).hide().fadeIn();
    //
    // $(".contact").last().click(function() {
    //   //debugger;
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(fname);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   //$("ul#addresses").append(`<li> ${newAddress.fullAddress()} </li>`);
    //   $("ul#addresses").text("")
    //   // var test = newContact.address[0];
    //   // return test
    //   newContact.address.forEach(function(address1) {
    //
    // });


  // });


// });

});

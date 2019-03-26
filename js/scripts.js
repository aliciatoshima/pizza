// Business Logic for PigDice ---------
// function Player() {
//   this.total = total;
//   this.current = currentScore;
// }
//
// Player.prototype.add = function(contact) {
//   this.contacts.push(contact);
// }
//
//
// var addressBook1 = new AddressBook();
//
//
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}





$(document).ready(function(){
var current_total1 = 0
var current_total2 = 0

var total1 = 0
var total2 = 0

  // when roll is clicked, show the roll of the dice
  $("#p1-roll").click(function() {
      roll1 = randInt(1,7);
      $(".p1-roll").text(roll1)


      if (roll1 === 1) {
        current_total1 = 0
        $(".p1-roll").empty()
        alert("Other player's turn!")
      } else {
        current_total1 = current_total1 + roll1
        // ask player to roll or hold
      }
      $(".p1-current").text(current_total1)

      });


  $("#p2-roll").click(function() {
      roll2 = randInt(1,7);
      $(".p2-roll").text(roll2)


      if (roll2 === 1) {
        current_total2 = 0
        $(".p2-roll").empty()
        alert("Other player's turn!")
      } else {
        current_total2 = current_total2 + roll2
        // ask player to roll or hold
      }
      $(".p2-current").text(current_total2)

      });

  $("#p1-hold").click(function() {
    total1 = total1 + current_total1
    $(".p1-total").text(total1)
    //p2-roll").empty()
    current_total1 = 0
  });

  $("#p2-hold").click(function() {
    total2 = total2 + current_total2
    $(".p2-total").text(total2)
    //p2-roll").empty()
    current_total2 = 0
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

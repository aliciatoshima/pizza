// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.phoneNumber = phoneNumber
// }

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

var addressBook1 = new AddressBook();



$(document).ready(function(){

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group" id="input4">' +
                                   '<label for="street">Street</label>' +
                                   '<input type="text" id="street" class="form-control">' +
                                 '</div>' +
                                 '<div class="form-group"id="input5">' +
                                   '<label for="city">City</label>' +
                                   '<input type="text" id="city" class="form-control">' +
                                 '</div>' +
                                 '<div class="form-group"id="input6">' +
                                   '<label for="state">State</label>' +
                                   '<input type="text" id="state" class="form-control">' +
                                 '</div>' +
                               '</div>');

    });

  $('form#inputform').submit(function(event){
    event.preventDefault();


    var newContact = new Contact();
    newContact.firstName = $('#fname').val();
    newContact.lastName = $('#lname').val();
    //newContact.phoneNumber = $('#pnum').val();

    // var newAddress = new Address();
    // newAddress.street = $('#street').val();
    // newAddress.city = $('#city').val();
    // newAddress.state = $('#state').val();

    $(".new-address").each(function() {
      //var newAddress = new Address();
      //debugger;
      var newStreet = $(this).find("input#street").val();
      var newCity = $(this).find("input#city").val();
      var newState = $(this).find("input#state").val();
      var newAddress = new Address(newStreet, newCity, newState);
      newContact.address.push(newAddress);
    });



    var fname = newContact.fullName();

    //console.log(newContact);

    addressBook1.contacts.push(newContact);
    //newContact.address.push(newAddress);

    //console.log(addressBook1[0]);

    // $('#contactlist').append(`<li>Name: ${fname}, Phone Number: ${newContact.phoneNumber}, </li>`).hide().fadeIn();
    $('#contactlist').append(`<li><span class='contact'>Name: ${fname} </span></li>`).hide().fadeIn();

    $(".contact").last().click(function() {
      //debugger;
      $("#show-contact").show();
      $("#show-contact h2").text(fname);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      //$("ul#addresses").append(`<li> ${newAddress.fullAddress()} </li>`);
      $("ul#addresses").text("")
      // var test = newContact.address[0];
      // return test
      newContact.address.forEach(function(address1) {
        //debugger;
        $("ul#addresses").append("<li>" + address1.fullAddress() + "</li>");
    });

   //  $("input#fname").val("");
   // $("input#lname").val("");
   // $("input#street").val("");
   // $("input#city").val("");
   // $("input#state").val("");


  });


});

});

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
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
  this.addresses = [];
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

  $('form#inputform').submit(function(event){
    event.preventDefault();


    var newContact = new Contact();
    newContact.firstName = $('#fname').val();
    newContact.lastName = $('#lname').val();
    //newContact.phoneNumber = $('#pnum').val();

    var newAddress = new Address();
    newAddress.street = $('#street').val();
    newAddress.city = $('#city').val();
    newAddress.state = $('#state').val();


    var fname = newContact.fullName();

    console.log(newContact);

    addressBook1.contacts.push(newContact);

    console.log(addressBook1[0]);

    // $('#contactlist').append(`<li>Name: ${fname}, Phone Number: ${newContact.phoneNumber}, </li>`).hide().fadeIn();
    $('#contactlist').append(`<li>Name: ${fname}, Address: ${newAddress.fullAddress()} </li>`).hide().fadeIn();

  });


});

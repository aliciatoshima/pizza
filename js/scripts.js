// Business Logic for PigDice ---------

function Order() {
  this.Pizza = []
}

function Pizza() {
  this.size = size;
  this.sizePrice = sizePrice;
  this.toppings = toppings;
  this.toppingsPrice = toppingsPrice;
  this.price = price;
}

Pizza.prototype.total = function() {
  this.price =  this.sizePrice + this.toppingsPrice;
}

var sizePrice = 0
var toppingsPrice = 0
var price = 0
var size
var toppings = []

$(document).ready(function() {
  var Orders = new Order()

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    size = $("input:radio[name=size]:checked").val()


    $("input:checkbox[name=pizza-toppping]:checked").each(function(){
      var top = $(this).val()
      toppings.push(top);
    });


    var Pizza1 = new Pizza(size, sizePrice, toppings, toppingsPrice, price);

    Pizza1.toppings = toppings;

    if (size === "small") {
      Pizza1.sizePrice = 15
    } else if (size === "medium") {
      Pizza1.sizePrice = 20
    } else if (size === "large") {
      Pizza1.sizePrice = 25
    } else {
      Pizza.sizePrice = 30
    }

    if (toppings.length <= 2) {
      Pizza1.toppingsPrice = 0
    } else {
      Pizza1.toppingsPrice = toppings.length * 3 - 6
    }

    Pizza1.total();

    $(".pizza-size").text(Pizza1.size)
    $(".pizza-toppings").text(Pizza1.toppings)
    $(".pizza-price").text(Pizza1.price)

    $(".order").show()

  });

});

// Business Logic for PigDice ---------

function Order() {
  this.Pizza = []
  this.quantity = cost
  this.cost = cost
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

var sizePrice = 0;
var toppingsPrice = 0;
var price = 0;
var size;
var toppings = [];
var cost = 0;
var quantity = 0


$(document).ready(function() {
  var Orders = new Order()

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    $("ul.pizzas").empty();
    cost = 0
    size = $("input:radio[name=size]:checked").val()

    var Pizza1 = new Pizza(size, sizePrice, toppings, toppingsPrice, price);


    $("input:checkbox[name=pizza-toppping]:checked").each(function(){
      var top = $(this).val()
      toppings.push(top);
    });
    Pizza1.toppings = toppings;

    if (size === "small") {
      Pizza1.sizePrice = 15
    } else if (size === "medium") {
      Pizza1.sizePrice = 20
    } else if (size === "large") {
      Pizza1.sizePrice = 25
    } else {
      Pizza1.sizePrice = 30
    }

    if (toppings.length <= 2) {
      Pizza1.toppingsPrice = 0
    } else {
      Pizza1.toppingsPrice = toppings.length * 3 - 6
    }

    Pizza1.total();

    Orders.Pizza.push(Pizza1);
    //console.log(Orders.Pizza) //this is showing the correct things!!!

    // Orders.Pizza.forEach(function(pizza) {
    //   //debugger
    //   cost = cost + pizza.price
    //   //console.log(cost)
    //   $("ul.pizzas").append("<li" + "id=" + Orders.Pizza[pizza] + ">" + pizza.size + ", " +  pizza.toppings.length + " topping pizza" + "</li>");
    // });

    for (i = 0; i < Orders.Pizza.length; i++ ) {
      //debugger
      cost = cost + Orders.Pizza[i].price
      //console.log(cost)
      $("ul.pizzas").append("<li data-id=" + i + ">" + Orders.Pizza[i].size + ", " +  Orders.Pizza[i].toppings.length + " topping pizza" + "</li>");
    };

    quantity = Orders.Pizza.length
    $(".pizza-quantity").text(quantity);
    //debugger
    $(".total").text(cost);


    $("ul.pizzas").children("li").click(function() {
    var id = parseInt($(this).data("id"))
     // console.log(parseInt($(this).data("id")))
      ///Order.Pizza[i] is obviously the way to go.... I just don't know how......s
     $(".pizza-size").text(Orders.Pizza[id].size)
     $(".pizza-toppings").text(Orders.Pizza[id].toppings)
     $(".pizza-price").text(Orders.Pizza[id].price)

     $(".order").show()
   });




    document.getElementById("pizza-order").reset();
    toppings = []
  });

});

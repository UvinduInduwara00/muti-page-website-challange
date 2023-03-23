
var package = [9, 12, 15];
var service = [1, 2, 2];

var cardPrice = [];


$(".card2").click(function () {
  selector(this);
})



function selector(selectedOne) {



  $(selectedOne).toggleClass("select");

  var numberOfSelected = ($(".select").length);

  if (numberOfSelected === 1) {
    $(".addancor").html('<a href="step3.html"><button type="button" class="btn btn-lg btn-primary ms-auto mt-auto btn-next">Next Step</button></a>');

    $(".addancor-yearly").html('<a href="step3Yearly.html"><button type="button" class="btn btn-lg btn-primary ms-auto mt-auto btn-next">Next Step</button></a>');


  }
  else {
    $(".addancor").html('<button type="button" class="btn btn-lg btn-primary ms-auto mt-auto btn-next">Next Step</button>');
  }

  var pricePackage = ($(".select").slice(0, 1));

  var selectedPricePackage = ($(".card2").index($(pricePackage)));

  var packagePrice = package.slice(selectedPricePackage, selectedPricePackage + 1);

  console.log(packagePrice);

  cardPrice = [];

  cardPrice.push(packagePrice);

  console.log(cardPrice);

  localStorage.setItem("ddf", cardPrice)

};



$(".add").click(function () {
  var selectedAddNumber = ($(".add").index($(this)));
  var selectedAdd = $(".checkbox-row").slice(selectedAddNumber, selectedAddNumber + 1);
  $(selectedAdd).toggleClass("select");

  var firstService = $(".first-service").hasClass("select");
  var secondService = $(".second-service").hasClass("select");
  var thirdService = $(".third-service").hasClass("select");

  localStorage.setItem("firstAdd", firstService);
  localStorage.setItem("secondAdd", secondService);
  localStorage.setItem("thirdAdd", thirdService);

  console.log(firstService);
  console.log(secondService);
  console.log(thirdService);

});




function step2() {
  location.replace("step2.html")
}


function step2Yealy() {
  location.replace("step2Yealy.html")
}


// step4

// packege

var finalPackagePrice = Number(localStorage.getItem('ddf'));

$(".price-of-package").html("$" + finalPackagePrice + "/mo");
$(".price-of-package-yearly").html("$" + finalPackagePrice * 10 + "/yr");


// service


var add1 = localStorage.getItem('firstAdd');
var add2 = localStorage.getItem('secondAdd');
var add3 = localStorage.getItem('thirdAdd');


if (add1 == "true") {
  $(".add-one").html("Online service");
  $(".add-price-one").html("+$1/mo");
  $(".add-price-one-yr").html("+$10/yr");
  var add1Price = Number(1);

} else {
  add1Price = 0;
}

if (add2 == "true") {
  $(".add-two").html("Larger storage");
  $(".add-price-two").html("+$2/mo");
  $(".add-price-two-yr").html("+$20/yr");
  var add2Price = Number(2);

} else {
  add2Price = 0;
}

if (add3 == "true") {
  $(".add-three").html("Costumizable profile");
  $(".add-price-three").html("+$2/mo");
  $(".add-price-three-yr").html("+$20/yr");
  var add3Price = Number(2);
} else {
  add3Price = 0;
}

console.log(add1Price);
console.log(add2Price);
console.log(add3Price);

$(".final-price-monthly").html("+$" + (finalPackagePrice + add1Price + add2Price + add3Price) + "/mo");
$(".final-price-yearly").html("+$" + (finalPackagePrice + add1Price + add2Price + add3Price) * 10 + "/yr");

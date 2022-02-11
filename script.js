var sum = 0;
function product_prompt() {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;
  var product = parseInt(prompt("Please enter product number", "1"));
  var quantity = parseInt(prompt("Please enter quantity", "3"));
  switch (product) {
    case 1: price = 2.98;
      var a = quantity * price;
      document.getElementById("p1").innerHTML = (a) + " $";
      sum = sum + a;
      break;
    case 2: price = 4.50;
      var b = quantity * price;
      document.getElementById("p2").innerHTML = (b) + " $";
      sum = sum + b;
      break;
    case 3: price = 9.98;
      var c = quantity * price;
      document.getElementById("p3").innerHTML = (c) + " $";
      sum = sum + c;
      break;
    case 4: price = 4.49;
      var d = quantity * price;
      document.getElementById("p4").innerHTML = (d) + " $";
      sun = sum + d;
      break;
    case 5: price = 6.87;
      var e = quantity * price;
      document.getElementById("p5").innerHTML = (e) + " $";
      sum = sum + e;
      break;
  }
  document.getElementById("tot").innerHTML = sum;
}

var countdownGenerator = function (x) {

   var inner = function() {
    if (x < 0){
      console.log("Rockets already gone, bub!");
    }
    if (x === 0){
      console.log("Blast Off!");
      x--;
    }
    if (x > 0){
      console.log("T-minus " + x);
    x--;
    }
  }
  return inner;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
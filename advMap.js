var words = ["ground", "control", "to", "major", "tom"];

var length = Array.prototype.map.call(words, function(word) {
  return word.length;
});

var uppered = Array.prototype.map.call(words, function(word) {
  return word.toUpperCase();
});

var reversed = Array.prototype.map.call(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(length);
console.log(uppered);
console.log(reversed);
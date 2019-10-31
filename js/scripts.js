function romanConvert(userInput) {
  var arrRomans = ["M", "D", "C", "L", "X", "V", "I"];
  var arrValues = [1000, 500, 100, 50, 10, 5, 1];
  var arrRomanized ="";
  arrValues.forEach(function(arrValue, i){
    if (userInput > arrValue)
    userInput = userInput - arrValue;
    arrRomanized = arrRomanized + arrRomans[i];

  });
  console.log(arrRomanized);
  return arrRomanized;
}







$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = romanConvert(userInput);
  })
});



// while (userInput >= 1000) {
//   userInput = userInput - 1000
//   arrRomanized.push(arrRomans[0]);
//   if (userInput < 1000){


// if (userInput < 1 || userInput > 3999 || userInput === NaN) {
//   alert("not a number");
//
// } else if (userInput === 4){
//   arrRomanized.push(arrRomans[6]);
//   arrRomanized.push(arrRomans[5]);
//   console.log(arrRomanized);
// } else if
//   (userInput === 9) {
//   arrRomanized.push(arrRomans[6]);
//   arrRomanized.push(arrRomans[4]);

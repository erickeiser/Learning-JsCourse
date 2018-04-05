var age = 32;
if(age < 20) {
  // console.log("John is a teenager ");
} else if(age >= 20 && age <= 30) {
  // console.log("John is a young man ");
} else {
  // console.log("John is a man");
}

// Now to write the same as above with switch statments //


/*var job = prompt("What does John do for a living? ");



switch (job) {
  case "programmer":
  console.log("John builds websites");
  break;
  case "driver":
  console.log("John drives a cab in Lisbon");
  break;
  case "cop": M
  console.log("john fights crime for a living ");
  break;
  default: 
  console.log('John does something else');
} */

var height = 220;
var fheight = 101;
var P3height = 101;
var age = 28;
var fAge = 27;
var p3Age = 34;
var total = (age * 5) + height;
var fTotal = (fAge * 5) + fheight;
var p3Total = (p3Age * 5) + P3height;

if(total > fTotal && total > p3Total) {
  console.log("John beat out both of the other chaps with a total score of " + total);
} else if(fTotal > total && fTotal > p3Total) {
  console.log("John's fried wins this time with a score of " + fTotal);
} else if(p3Total > total && p3Total > fTotal) {
  console.log("Newly entered player 3 wins this competition with a score of " + p3Total);
} else {
  console.log("There is no clear winner in this competion today");
}




  


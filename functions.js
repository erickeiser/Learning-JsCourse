////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                                     LECTURE: FUNCTIONS!!!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcAge(birthYear) {
  var age = 2018- birthYear;
  return age;
}

var Eric = calcAge(1996);
var Emma = calcAge(2011);
var Braylen = calcAge(2015);
console.log("In 2018 Eric will be "+ Eric);
console.log("In 2018 Emma will be "+ Emma);
console.log("In 2018 Braylen will be "+ Braylen);

function retirementAge(name, birthYear) {
  var age = calcAge(birthYear);
  var retire = 65 - age;
  if(retire >= 0) {
    console.log(name + " can retire in " + retire + " years");
  } else {
    console.log(name + " is already retired ")
  }
  
}
retirementAge('Eric', 1982);
retirementAge('Emma', 2011);
retirementAge('Braylen', 2015);
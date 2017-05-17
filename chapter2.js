//JS Statements
//keeping internal state --> variables
var caught = 5 * 5

var one = 1, two = 2
console.log(one + two)


//functions - piece of programming wrapped in a value
//environment comes with default functions
// alert("Good Morning")
//
// console.log("Good Morning")
//
// confirm("Shall we?")
//
// prompt("Tell me everything")

//conditionals
//programs run from top to bottom unless there are conditionals

var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  console.log("small");
else if (num < 100)
  console.log("medium");
else
  console.log("large")


// while and do loops

var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//{} is called a block


//do loop
do {
  var yourName = prompt("Who are you?");
} while (!"Rachael");
console.log(yourName);



//for loops
for (var number = 0; number <=12; number = number +2)
  console.log(number)

  //Use break to get out of the loops

//switch

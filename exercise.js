// 1. write a loop that outputs a triangle
// #
// ##
// ###
// ####
// #####
// # # # # # #
// # # # # # # #

//while loop
var pounds = "#"
while (pounds.length < 8) {
  console.log(pounds);
  pounds = pounds + "#";
}


//for loop
for (var pounds = "#"; pounds.length < 8; pounds = pounds + "#")
  console.log(pounds)


// 2. FizzBuzz
//print 1-100; if divisible by 3 print fizz;
//if divisible by 5 print "buzz"

for (var number = 1; number <= 100; number ++)
  if (number%3 == 0){
    console.log("fizz")
  }
  else if (number%5 ==0) {
    console.log("buzz")
  }
  else
    console.log(number)


// 3. Chess board

var columns = 4
var size = 8
var square = " " + "#"
for (rows=1; rows <= size/2; rows++)
  console.log(square.repeat(columns));
  console.log(square.repeat(columns).slice(1))

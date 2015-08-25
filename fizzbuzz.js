// Ryan Atkinson - Coder

// "Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”."
//
// for (var i = 1; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("fizzbuzz");
//   }else if(i % 3 === 0){
//     console.log("fizz");
//   }else if(i % 5 === 0){
//     console.log("buzz");
//   }else{
//     console.log(i);
//   }
// }

// Adventure Mode: do not include an additional check for fizzbuzz

for (var i = 1; i <= 100; i++){
  var fizzbuzz = '';                   //Blank string to hold fizz and/or buzz
  if(i % 3 === 0){                     //Fizz added to string if divisible by 3
    fizzbuzz += 'Fizz';
  }
  if(i % 5 === 0){                     //Buzz added to string if divisible by 5
    fizzbuzz += 'Buzz';
  }
  console.log(fizzbuzz || i);          //Exploits javascript's labeling of a blank string as 'falsy'
}

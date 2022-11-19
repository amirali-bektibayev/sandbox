/* 1)
In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
*/

function filter_list(l) {
  return l.filter( str => typeof str != 'string');
}

/* 2)
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner" output: "B---eg---in---n---er---"
*/

function unscrambleEggs(word){
  return word.replace(/(egg)/gi,'');
}

/* 3)
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
   var sum = 0;
 for(var i = 0; i < arr.length; i++) {
   if(arr[i] > 0) {
    sum += arr[i];
  }
 }
return sum;
}

/* 3)
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if(number % 2 == 0) {
    return 'Even'
  } else {
    return "Odd"
  }
}


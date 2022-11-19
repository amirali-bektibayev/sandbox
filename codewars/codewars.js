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
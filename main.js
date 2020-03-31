/*

Ask the user for a name, insert it in a populated array. Then print it AZ sorted and show the i of the newly inserted value.

*/

//Declare variables
 var usersArray = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
 var usersArraySorted;
 var usersInput;
 var usersInputInArray;


//Force a non-empty input
 do {
   usersInput = prompt('Your surname, sir?');
 } while (usersInput == '');

//Add the input to the array and sort it, giving a before/after output
usersArray.push(usersInput);
usersInputInArray =  usersArray.indexOf(usersInput);
console.log('Original position is ', usersInputInArray, 'in the array ', usersArray);
usersArraySorted = usersArray.sort();
console.log('Sorted position is ', usersArraySorted.indexOf(usersInput), 'in the array ', usersArraySorted);

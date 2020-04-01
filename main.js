/*

Ask the user for a name, insert it in a populated array. Then print it AZ sorted and show the i of the newly inserted value.

*/

//Declare references
var fieldBefore = document.getElementById('list-before');
var fieldAfter = document.getElementById('list-after');
var fieldBeforePos = document.getElementById('pos-before');
var fieldAfterPos = document.getElementById('pos-after');

//Declare variables
 var usersArray = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
 var usersArraySorted;
 var usersInputRaw;
 var usersInput;
 var usersInputInArray;
 var fieldAfterOld;
 var fieldBeforeOld;

//Force a non-empty input
 do {
   usersInputRaw = prompt('Your surname, sir?');
 } while (usersInputRaw == '' || !isNaN(usersInputRaw) || usersInputRaw[0] == ' ');

//Capitalize the first letter of the input
usersInput = usersInputRaw.charAt(0).toUpperCase() + usersInputRaw.slice(1);

//Add the input to the array and sort it, giving a before/after output
usersArray.push(usersInput);
usersInputInArray =  usersArray.indexOf(usersInput);
for (var i = 0; i < usersArray.length; i++) {
  fieldBeforeOld = fieldBefore.innerHTML;
  fieldBefore.innerHTML = fieldBeforeOld + '<li>' + (i+1) + '. ' + usersArray[i] + '</li>';
}

fieldBeforePos.innerHTML = 'Original position was ' + (usersInputInArray+1);

//console.log('Original position was ', usersInputInArray, 'in the array ', usersArray);

usersArraySorted = usersArray.sort();
for (var i = 0; i < usersArraySorted.length; i++) {
  fieldAfterOld = fieldAfter.innerHTML;
  fieldAfter.innerHTML = fieldAfterOld + '<li>' + (i+1) + '. ' +  usersArraySorted[i] + '</li>';
}

fieldAfterPos.innerHTML = 'Sorted position is ' + (usersArraySorted.indexOf(usersInput)+1);

//console.log('Sorted position is ', usersArraySorted.indexOf(usersInput), 'in the array ', usersArraySorted);

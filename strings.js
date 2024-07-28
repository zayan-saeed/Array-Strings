console.log(' ');
console.log('--------String Methods-------');
console.log(' ');
//concat() add two strings together
const str1= 'hello'
const str2= 'world'
const str3= str1.concat(" ",str2)
console.log(str3);

//includes() check whether the eleent is there in that string
const string='Hi how are you'
console.log(string.includes('y'));

//indexOf() returns the index of the first occurance of the specified string and can give the starting index to search, also return -1 if element doesnt exist
const string1='are you ok'
console.log(string1.indexOf('o',6));

//lastIndexOf() returns the index of the last occurance of the specified string
const  string2='im Fine ok ok'
console.log(string2.lastIndexOf('ok'));

//padEnd() it add value to the back of string till the specified lenght
const char='hi'
console.log(char.padEnd(11,' ho'));

//padstart() it add value to the start of string till the specified lenght
const char1='ji'
console.log(char1.padStart(8,'ra'));

//repeat() here it repeats the string till specied number
const repeat='zayan '
console.log(repeat.repeat(5));

//replace() it replaces the string with other string
const replace='You'
console.log(replace.replace('You','Me'));

//search() searches the element and return the index of the 1st element matched
const search='Search is over buddy!!'
console.log(search.search('!'));
//here it does not differentiate it by upper case & lowercase it looks for the works or element and return the index of first match
const search1='Hello bro hello'
console.log(search1.search(/hello/i));

//slice() it slice the string from the start & end position default start is 0
const sliced='Book My Show'
const slice1=sliced.slice(5,10)
console.log(slice1);

//split() it splits the string with the specified element which is to be in the string and result into an array
splitted='how are you doing now'
console.log(splitted.split(' '));

//startsWith() it return true/false according to the element & position we give default position is 0 True when the elements position is equal to the position given or the default
const start='how did you do'
console.log(start.startsWith('d',4));

//substr() it return a string from a specified position and returns a specified amount of elements
const sub='You are awesome'
console.log(sub.substr(2,7)); 

//substring() it return the elements from the start and end position where end position is excluded
const sub1='YOUAREAWESOME'
console.log(sub1.substring(1,10));

//tolowercase() converts uppercase to lowercase
const lower='OK da'
console.log(lower.toLowerCase());

//touppercase() converts lowercase to uppercase
const upper='OK da'
console.log(upper.toUpperCase());

//trim() it removes whitespace from both sides of a string.
const trims='  Hello String  '
console.log(trims);
console.log(trims.trim());

//trimend or trimright it removes whitespace from right sides of a string.
const trimright='   hello string   '
console.log(trimright);
console.log(trimright.trimEnd());

//trimstart or trimleft it removes whitespace from left sides of a string.
trimleft='   hello string   '
console.log(trimleft);
console.log(trimleft.trimStart());

//charAt() it reurn the character on the position that is specified
const charat='Hello hi'
console.log(charat.charAt(4));

//charCodeAt it eturns the Unicode of the character at a specified position in a string.
const codeat='Brother'
console.log(codeat.charCodeAt(1));
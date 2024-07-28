//CONCAT()
const arr=[2,3,4,5,6,7]
const arr2=[8,7,6,5,4]
const sum=arr.concat(arr2)
console.log(sum);

//EVERY() return True/False if the condition satisfies all elements in an array
function check(age){
    return age>18
}
const  array1=[12,23,34,45]
const num=array1.every(check)
console.log(num);

//SOME check whether any one element satisfies the conditon and it also check till the condition get false
function check(age,index){ 
    console.log(index);
    return age>18
}
const numSome=array1.some(check)
console.log(numSome);

//FILL()  replace the element with given element & overwrites the  original array
const fill=array1.fill(55,1,2)
console.log(fill);


//FIND() return the first element that passes the condition
function checknum(value){
    return value>18
}
array=[2,5,23,43,1,3]
console.log(array.find(checknum));

//FIND INDEX()  return the first index of an element which passes the test
function index(value){
    return value>23
}
console.log(array.findIndex(index));

//FLAT() concatinating sub arrays into new array
myarr=[1,2,[[3,4],5]]
console.log('before concatinating sub arrays',myarr);
const myarr1=myarr.flat()
console.log('after concatinating sub array',myarr1);
console.log('after concatinating sub array',myarr1.flat())

//INCLUDES()  checks whether the given value is in the array & returns True/False 
number=[2,3,4,5,6]
console.log(number.includes(5)); 

//INDEXOF() return the  first postion of the element that is given returns value -1 if not found
numbr=[2,3,4,5,6]
console.log(numbr.indexOf(5));

//JOIN() changes the array elements into string joins the array elements with given element
arrytostring=[23,43,12,54,8]
console.log(arrytostring.join('/'));

//LAST INDEXOF() return the  last postion of the element that is given returns value -1 if not found
const nums=[1,2,3,4,5,6,4,7]
console.log(nums.lastIndexOf(4));

//POP() pop out the last element in the array
const names=['afnan','mishal','afzl']
console.log('before popping',names);
console.log('popped element :',names.pop());
console.log('after popping',names);

//PUSH() pushes a new element to the back of an  array  i.e given
names.push('zayan')
console.log('after pushing',names);

//REVERSE() 
console.log('before reversing',names);
console.log('after reversing',names.reverse());

//UNSHIFT() pushes an element to the front of an array 
console.log('before unshifting',names);
 names.unshift('afzl')
console.log('after shifting',names);

//SHIFT() pop out the element from the front of array
console.log('before shifting',names);
names.shift()
console.log('after shifting',names);

//SORT() sorting elements in alphabetic order and ascending order
const numbrs=[1,4,2,5,7,3,2]
console.log('before sorting',numbrs);
console.log('before sorting',numbrs.sort());
const fruits=['kiwi','apple','banana']
console.log('before sorting',fruits);
console.log('before sorting',fruits.sort());

//SLICE() slicing the elements(or showing) in the array without changing the original array
const slice=['mom','dad','sister','brother']
console.log('before slicing',slice);
console.log('sliced elements',slice.slice(1,3));
console.log('after slicing',slice);

//SPLICE() splicing or cutting the elements from the array and it manipulates the array
const splice=['mom','dad','sister','brother']
console.log('before splicing',splice);
console.log('spliced elements',splice.splice(1,3));
console.log('after splicing',splice);

//TO STRING() converting the array elemnts into a string
string=['mom','dad','sister','brother']
console.log('before converting into string',string);
console.log('after converting into string :',string.toString());

//FILTER()  it removes the elements which does not satisfies the function/condition 
function filtered(item){
    return item>=10
}
const filter=[9,15,34,41,5]
console.log('before filtering',filter);
console.log('after filtering',filter.filter(filtered));

//REDUCE
const reduce=[3,2,5,31,8,10]
 function red(acc,ele){
    return acc+ele
 }
 console.log('after doing sum using ',reduce.reduce(red));

 //MAP 
 const mapping=[3,56,21,34,11]
 function map(acc){
    return acc*3
 }
console.log(mapping.map(map));

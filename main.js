var numsArray = [1,2,3,4,5,6,7,8,9,10];
//Write a function called each

// each(list, iteratee, [context]) Alias: forEach 
// Iterates over a list of elements, yielding each in turn to an 
// iteratee function. The iteratee is bound to the context object, 
// if one is passed. Each invocation of iteratee is called with two 
// arguments: (element, index). If list is a JavaScript object, 
// iteratee's arguments will be (value, key, list). Returns the list for 
// chaining.

//examples
// each([1, 2, 3], alert);//=> alerts each number in turn...

// each({one: 1, two: 2, three: 3}, alert);
//=> alerts each number value in turn...



//EACH
function each(coll, f){
	
}
// map(list, iteratee) 
// Produces a new array of values by mapping each value in list 
// through a transformation function (iteratee). The iteratee is 
// passed three arguments: the value, then the index (or key) of the 
// iteration, and finally a reference to the entire list.

//examples
//map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]

// map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
//=> [3, 6, 9]

//map([[1, 2], [3, 4]], _.first);
//=> [1, 3]

//Write map

function map(coll, f){
	
}

// filter(list, predicate) 
// Looks through each value in the list, returning an array of all 
// the values that pass a truth test (predicate).

//example

//var evens = filter([1, 2, 3, 4, 5, 6], function(num){ 
	// return num % 2 == 0; 
// });
// => [2, 4, 6]

// write Filter
function filter(coll, predicate){
		
}

// write a function using filter that doubles the number of all the
// even indexed number - you could also include map

function doubleNumbersWithEvenIndex(array) {
	
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 13},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 19}
];

// write a function using filter that returns only thos people over
// 21

function under21(coll) {
  
}

// reduce(list, iteratee, [start],) 
// reduce boils down a list of values into a single value. Start is the 
// initial state of the reduction, and each successive step of it 
// should be returned by iteratee. The iteratee is passed three 
// arguments: the start, then the value and index (or key) of the 
// iteration.

// If no start is passed to the initial invocation of reduce, the 
// iteratee is not invoked on the first element of the list. The first 
// element is instead passed as the start in the invocation of the 
// iteratee on the next element in the list.

// var sum = reduce([1, 2, 3], function(acc, num){ 
// 	return acc + num;
// 	 }, 0);
// => 6

// Write Reduce

function reduce(arr, f, acc){
	
}

// write a function using reduce that returns the sum of only the
// even indes nunbers

function sumOfEvenIndexOnly(array) {
	
}


// write a function that takes in an array of numbers and returns true
// if all the numbers in the array are true or false if they are not

function everyEvenNumber(arr){
	
}

var arr1 = [1,2,3];
var arr2 = [4,5,6];

// write a fuction using reduce that takes in two arrays and returns
// a single array 
//i.e [1,2,3]
// [4,5,6]
// returns [1,2,3,4,5,6]

function arrayBuilder (arr1,arr2){
	
}


// some(list, [predicate]) 
// Returns true if any of the values in the list pass the predicate 
// truth test. Short-circuits and stops traversing the list if a true 
// element is found.

// some([null, 0, 'yes', false], function(value) {
// 	return value === 'yes';
// });​

// Write out the function some that behaves as above
function some(array, predicate) {
	
}

// write  function using some that check an array to see if there
// is at least one even number
function isaNumberEven(array){
	
}

// every(list, [predicate])  
// Returns true if all of the values in the list pass the predicate 
// truth test. Short-circuits and stops traversing the list if a 
// false element is found.

// every([2, 4, 5], function(num) { return num % 2 == 0; });
// => false

// write out the every function that behaves as above
function every(array, predicate){
	
}

// write a function using every to see if every item in the array
// is even
	function isEveryNumberEven(array){
		
	}

// ​reject(list, predicate, [context]) 
// Returns the values in list without the elements that the truth 
// test (predicate) passes. The opposite of filter.

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ 
// 	return num % 2 == 0; });
// => [1, 3, 5]


//Write out the function reject that behaves as above
function reject(array, func) {

}


//write a function that uses reject that rejects all the even numbers
function allEvenNumbersReject(array) {
	
}


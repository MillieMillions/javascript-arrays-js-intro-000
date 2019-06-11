var chocolateBars = ["snickers", "hundred grand", "kitkat",]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift('foo');
  return array;
}

// let cookiesAndCream = ['cookies', 'cream'];
//
// cookiesAndCream.unshift('ketchup');
//
// let milliesShampoo = cookiesAndCream
//
// let dessert = [...cookiesAndCream, 'avocado']

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

functon destructivelyAddElementToEndOfArray() {
  
}

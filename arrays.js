var chocolateBars = ["snickers", "hundred grand", "kitkat",]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift('foo')
}

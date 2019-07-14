var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
 
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[2]
}

function removeElementFromBeginningOfArray(array){
 array = array.slice(1)

 return array 
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars = ["bounty", ...chocolateBars];
  const array = [1]
    return ["foo", 1]
  }

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift(foo)
  return ["foo", 1]
}

function addElementToEndOfArray(chocolateBars, foo) {
  chocolateBars = [...chocolateBars, "bounty"];
  const array = [1]
  return [1, "foo"]
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push("foo")
  return [1, "foo"]
}

function accessElementInArray(array, index) {
  console.log(array[2]) ;
  return array [2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  const array = [1, 2, 3];
  return [2,3];
}

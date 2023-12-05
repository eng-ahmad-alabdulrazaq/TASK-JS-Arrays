/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthEven(numbers) {
  // Your code here

  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function isArrayLengthOdd(numbers) {
  // Your code here
  if (isArrayLengthEven(numbers) == true) {
    return false;
  } else {
    return true;
  }
}

//
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));
//

// console.log(isArrayLengthOdd([1, 2, 3, 4]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
// function isArrayLengthEven(numbers) {
//   // Your code here
//   n = numbers.length;
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructorCopy = instructors;
  instructorCopy.push("Laila");
  return instructorCopy;
}

console.log(addLailaToArray(["Mshary", "Hasan"]));

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

//
// , fruits.length + 1
//
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 == 0) {
    return fruits.slice(fruits.length / 2);
  } else {
    // if (fruits.length > 0) {
    //   fruits.pop();
    // } else {
    // let emptyFruits = ["[]"];
    // fruits = emptyFruits;
    // return fruits;
    return [];
  }
}

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here

  let index = shout.indexOf("!");
  if (index == -1) {
    return shout;
  } else {
    // console.log(index);
    return shout.slice(0, index + 1);
  }
  // shout.push("!");

  // == "!") {
  //   shout.pop();
  // } else {
  //   shout.push("!");
  // }
}

// if or for (shout[shout.length -1] == "!") {
//   shout.pop();

// } else {
//   shout.push("!");
// }
// }

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));

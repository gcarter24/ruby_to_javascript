// # Given an array, write a function that returns an array that contains the original array’s values in reverse.

// # Input: [1, 2, 3, 4, 5]
// # Output: [5, 4, 3, 2, 1]

// def reverse(arr)
//   i = arr.length
//   new_arr = []
//   while i >= arr[0]
//     i -= 1
//     new_arr << arr[i]
//   end
//   return new_arr
// end

// p reverse([1, 2, 3, 4, 5])

function reverse(arr) {
  var newArr = new Array();
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverse([1, 2, 3, 4, 5]));

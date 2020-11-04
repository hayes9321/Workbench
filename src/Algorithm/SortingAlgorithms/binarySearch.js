/*
  Definition:
  In computer science, binary search, also known as half-interval search[1] or logarithmic search,
  [2] is a search algorithm that finds the position of a target value within a sorted array.
  [3][4] Binary search compares the target value to the middle element of the array; if they are unequal, 
  the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful or the remaining half is empty.

  Binary search runs in at worst logarithmic time, making O(log n) comparisons, 
  where n is the number of elements in the array and log is the logarithm. 
  Binary search takes only constant (O(1)) space, 
  meaning that the space taken by the algorithm is the same for any number of elements in the array.
  [5] Although specialized data structures designed for fast searching—such as hash tables—can be searched more efficiently, 
  binary search applies to a wider range of search problems.
*/


function binarySearch(sortedArray, targetNumber){
  var min = 0;

  var max = sortedArray.length;

  var guess;

  console.log('searching array ', sortedArray, 'for', targetNumber);

  //
  while(min <= max){
    guess = Math.floor((min + max) / 2);
    console.log()
    if(sortedArray[guess] === targetNumber){
      return guess;
    }
    else if(sortedArray[guess] < targetNumber){
      min = guess;
    }
    else{
      max = guess;
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4));

/*
  runtime complexity: O(log n)
  space complexity: O(1)-constant runtime
*/
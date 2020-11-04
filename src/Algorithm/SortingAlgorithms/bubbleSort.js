/*
Definition:
  Bubble sort is a sorting algorithm that works by repeatedly stepping through lists that need to be sorted, 
  comparing each pair of adjacent items and swapping them if they are in the wrong order. 
  This passing procedure is repeated until no swaps are required, indicating that the list is sorted. 
  Bubble sort gets its name because smaller elements bubble toward the top of the list.

  Bubble sort is also referred to as sinking sort or comparison sort.
*/

function bubbleSort(list){
  //set a varible to keep track of state of program
  var swapped;
  do {
    //set inital value to false if array is sorted
    swapped = false;
    //loop through arrays
    for(var i = 0; i < list.length-1; i++){
      //compare element a and element b throughout the array,
      //if b > a enter if statement, if not array is sorted
      if(list[i] > list[i+1]) {
        //temporarily store element a
        var temp = list[i];
        //set element b to the element a postion
        list[i] = list[i+1];
        //set the element a to the the element b position
        list[i+1] = temp;
        //swapped eauql to true to continue this process until the array is completely sorted
        swapped = true; 
      }
    }
  }
  //If swapped equals true continue to the do loop else the program is sorted 
  while(swapped);
  //return the sorted list.
  return list;
};
console.log(bubbleSort([34,203,3,746,200,984,198,764,9]));
console.log(bubbleSort([333,3203,33,7346,2300,39384,1938,7634,93]));

/*
  Worst case time complexity: O(n^2)
*/
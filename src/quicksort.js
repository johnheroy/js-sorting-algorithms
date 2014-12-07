module.exports = {
  quicksort: quicksortInPlace
};

// simplest solution with extra storage arrays
function naiveQuicksort(array){
  var less = [];
  var equal = [];
  var greater = [];
  if (array.length > 1){
    var pivot = array[0];
    for (var i = 0; i < array.length; i++){
      var x = array[i];
      if (x > pivot){
        greater.push(x);
      } else if (x === pivot){
        equal.push(x);
      } else if (x < pivot){
        less.push(x);
      }
    }
    array = naiveQuicksort(less).concat(equal).concat(naiveQuicksort(greater));
  }
  return array;
}

// in-place sort
function quicksortInPlace(array, start, end){
  if (array.length <= 1 || (end - start) < 1){
    return;
  }

  var leftIndex, rightIndex;
  if (start === undefined){
    leftIndex = start = 0;
  } else {
    leftIndex = start;
  }
  if (end === undefined){
    rightIndex = end = array.length - 1;
  } else {
    rightIndex = end;
  }

  var pivot = array[leftIndex];

  while (leftIndex <= rightIndex){
    while (array[leftIndex] < pivot){
      leftIndex++;
    }
    while (array[rightIndex] > pivot){
      rightIndex--;
    }
    if (leftIndex <= rightIndex){
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  quicksortInPlace(array, start, rightIndex);
  quicksortInPlace(array, leftIndex, end);
  return array;
}

// utility
function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = {
  quicksort: naiveQuicksort
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
function quicksortInPlace(array){

}

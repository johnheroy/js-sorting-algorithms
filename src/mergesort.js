module.exports = {
  mergesort: mergesort
};

function mergesort(array){

  if (!Array.isArray(array)){
    throw new Error('input is not an array');
  }

  if (array.length <= 1){
    return array.slice();
  }

  var middleIndex = Math.floor(array.length / 2);

  var firstHalf = array.slice(0, middleIndex);
  var secondHalf = array.slice(middleIndex);

  return merge(mergesort(firstHalf), mergesort(secondHalf));

}

function merge(array1, array2){

  var merged = [];

  while (array1.length > 0 || array2.length > 0){

    if (array2.length === 0 || array1[0] <= array2[0]){
      merged.push(array1.shift());
    } else {
      merged.push(array2.shift());
    }

  }

  return merged;

}

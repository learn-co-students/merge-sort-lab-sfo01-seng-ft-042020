function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  return array.splice(minIndex, 1);
}

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

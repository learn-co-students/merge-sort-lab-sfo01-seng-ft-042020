function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(arr1, arr2) {
    let result = [];
    while (!!arr1.length && !!arr2.length) {
        if (arr1[0] > arr2[0]) {
            result.push(findMinAndRemoveSorted(arr2))
        } else {
            result.push(findMinAndRemoveSorted(arr1))
        }
    }
    return [...result, ...arr1, ...arr2];
}

function mergeSort(array){
    let split = array.map(x=>[x])
    
    while (split.length > 1) {
        let first = split.shift();
        let second = split.shift();
        split.unshift(merge(first, second))
    }
    return split[0]
}
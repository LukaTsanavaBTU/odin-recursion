const merge = function (arr1, arr2) {
    let finalArr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            finalArr[k] = arr1[i];
            k++;
            i++;
        } else {
            finalArr[k] = arr2[j];
            k++;
            j++;
        }
    }
    for (; i < arr1.length; i++) {
        finalArr[k] = arr1[i];
        k++;
    }
    for (; j < arr2.length; j++) {
        finalArr[k] = arr2[j];
        k++;
    }
    return finalArr;
}


const mergeSort = function(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const sortedLeft = mergeSort(arr.slice(0, mid));
        console.log(sortedLeft);
        const sortedRight = mergeSort(arr.slice(mid, arr.length));
        console.log(sortedRight);
        return merge(sortedLeft, sortedRight);
    }
};

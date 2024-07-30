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
        i++;
    }
    for (; j < arr2.length; j++) {
        finalArr[k] = arr2[j];
        k++;
        j++;
    }
    return finalArr;
}

let arr1 = [2, 6, 9, 11, 13];
let arr2 = [0, 1, 3, 7, 8];

console.log(merge(arr1, arr2));
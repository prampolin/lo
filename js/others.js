/* return all dozens odd */
function allOdd(arr) {
    var i = 0, len = arr.length, newArr = [];
    for (; i < len; i++) {
        if (isOdd(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* return all dozens evens */
function allEven(arr) {
    var i = 0, len = arr.length, newArr = [];
    for (; i < len; i++) {
        if (!isOdd(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* return amount of dozens odd */
function totalAllOdd(arr) {
    var odd = allOdd(arr);
    return totalArr(odd);
}

/* return amount of dozens even */
function totalAllEven(arr) {
    var even = allEven(arr);
    return totalArr(even);
} 
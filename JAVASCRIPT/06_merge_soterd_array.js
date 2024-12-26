// 6.Two sorted arrays will be given. 
// Create an array consisting of the elements of two arrays with duplicate elements removed in sorted order.
// Note: Use only one loop. No sorting.

const mergeSortedArrays = (arr1, arr2) => {
    let i = 0, j = 0, lastAdded = null;
    const result = [];

    while (i < arr1.length || j < arr2.length) {
        let val;
        if (i >= arr1.length) val = arr2[j++];
        else if (j >= arr2.length) val = arr1[i++];
        else if (arr1[i] < arr2[j]) val = arr1[i++];
        else if (arr1[i] > arr2[j]) val = arr2[j++];
        else {
            val = arr1[i++];
            j++;
        }
        if (val !== lastAdded) {
            result.push(val);
            lastAdded = val;
        }
    }
    return result;
};

// Test cases

const arr1 = [1, 5, 10, 75];
const arr2 = [2, 3, 9, 33, 76];
console.log(mergeSortedArrays(arr1, arr2));
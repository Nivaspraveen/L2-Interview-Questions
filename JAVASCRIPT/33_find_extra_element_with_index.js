// 33. Find the extra element and its index
// Input : 
// [ 10, 20, 30, 12, 5 ] [ 10, 5, 30, 20 ]
// Output : 12 is the extra element in array 1 at index 4

// Input : [ -1, 0, 3, 2 ] [ 3, 4, 0, -1, 2 ]
// Output : 4 is the extra element in array 3 at index 5

const findExtraElement = (arr1, arr2) => {
    const map = new Map();
    arr2.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    for (let i = 0; i < arr1.length; i++) {
        if (!map.has(arr1[i]) || map.get(arr1[i]) === 0) return `${arr1[i]} is the extra element in array 1 at index ${i}`;
        map.set(arr1[i], map.get(arr1[i]) - 1);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!map.has(arr2[i]) || map.get(arr2[i]) === 0) return `${arr2[i]} is the extra element in array 2 at index ${i}`;
        map.set(arr2[i], map.get(arr2[i]) - 1);
    }
};

console.log(findExtraElement([10, 20, 30, 12, 5], [10, 5, 30, 20]));
console.log(findExtraElement([-1, 0, 3, 2], [3, 4, 0, -1, 2]));
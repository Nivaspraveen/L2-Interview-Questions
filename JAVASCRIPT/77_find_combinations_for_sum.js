// 77.
// Given unsorted array find all combination of the elementfor a given sum. Order should be maintained.
// Input :8 3 4 7 9
// N=7
// Output{3 4 } {7}

const findCombinations = (arr, target) => {
    const result = [];
    const backtrack = (start, currSum, currCombo) => {
        if (currSum === target) {
            result.push([...currCombo]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if (currSum + arr[i] > target) continue;
            currCombo.push(arr[i]);
            backtrack(i + 1, currSum + arr[i], currCombo);
            currCombo.pop();
        }
    };
    backtrack(0, 0, []);
    return result;
};

const arr = [8, 3, 4, 7, 9];
const N = 7;
const combinations = findCombinations(arr, N);
combinations.forEach(combination => console.log(combination));
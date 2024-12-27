const removeDigits = (nums, digits) => {
    const result = [];
    for (let digit of digits) {
        nums = nums.map(num => {
            const newNumStr = num.toString().split(digit).join(''); 
            return newNumStr === '' ? 0 : parseInt(newNumStr); 
        }).filter(num => num !== 0); 
        result.push([...nums]);
    }
    return result;
};

// Example Usage
const nums = [122, 467, 987, 345], digits = ['1', '2', '9', '5'];
console.log(removeDigits(nums, digits));

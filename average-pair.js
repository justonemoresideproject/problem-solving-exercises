// add whatever parameters you deem necessary

/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
 */

function averagePair(arr, num) {
    if(arr.length < 2) return false
    let i = 0;
    let j = 1;
    let inverse = 1;
    while(i != 0 || inverse == 1){
        if(i >= arr.length - 1) inverse = -1;
        if(j >= arr.length) j = i - 1;
        if((arr[i] + arr[j]) / 2 == num && arr[i] != arr[j]) return true;
        i+=inverse;
        console.log((arr[i] + arr[j]) / 2)
        if((arr[i] + arr[j]) / 2 == num && arr[i] != arr[j]) return true;
        j+=2 ;
    };
    return false;
};
// add whatever parameters you deem necessary

/**
 * longestFall
Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.

Examples:

longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
 */

function isSubsequence(arr) {
    let total = 0;
    let highestTotal = 0;
    let j = 1;
    for(let i = 0; i < arr.length ; i++){
        if(arr[j] < arr[i]) {
            total++;
        }
        if(arr[j] >= arr[i] || j == arr.length) {
            console.log(`total: ${total}`)
            console.log(`highestTotal: ${highestTotal}`)
            if(total > highestTotal){
                highestTotal = total;
            } 
            total = 0;
        }
        j++;
    }

    if(highestTotal >= 1) return highestTotal + 1

    return highestTotal;
}

// add whatever parameters you deem necessary
/**
 * constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

function helper(str){
    const freq = {};
    const arr = Array.from(str) // Does Array.from work for O(M + N)? Should I make a helper function?

    for(let i = 0; i < arr.length; i++){
        freq[arr[i]] ? freq[arr[i]] = freq[arr[i]] + 1 : freq[arr[i]] = 1;
    }

    return freq;
}

function constructNote(stringOne, stringTwo) {
    const freqOne = helper(stringOne)
    const freqTwo = helper(stringTwo)

    const keys = Object.keys(freqOne)

    for(let i = 0; i < keys.length; i++) {
        if(freqOne[keys[i]] <=! freqTwo[[keys[i]]]) return false
    }

    return true
}

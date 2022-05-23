function freqCounter(num) {
    let obj = {}
    let size = 0
    while(num > 9) {
        if(obj[num % 10]){
            obj[num % 10] = 0
            size++
        }
        obj[num % 10] = obj[num % 10] + 1
        num = Math.floor(num / 10) 
    }

    obj[num % 10] ? obj[num % 10] = obj[num % 10] + 1 : obj[num % 10] = 1

    obj["size"] = size
    return obj
}

function sameFrequency(numOne, numTwo){
    const objOne = freqCounter(numOne)
    const objTwo = freqCounter(numTwo)

    const keysOne = []
    const keysTwo = []

    for(let i = 0; i < 9; i++){
        if(objOne[i]){
            keysOne.push(`${i}`)
        }
        if(objTwo[i]){
            keysTwo.push(`${i}`)
        }
    }

    if(keysOne.length != keysTwo.length) return false

    for(let i = 0; i < keysOne.length; i++) {
        if(objOne[keysOne[i]] != objTwo[keysOne[i]]) {
            return false
        }
    }

    return true
}
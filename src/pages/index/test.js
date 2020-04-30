

// aaaaaaabbbccccddaa
// a7b3c4d2a2
// FIXME dd
// TODO test

function getNum(str) {
    let arr = str.split('')
    // console.log(arr, 'arr')
    let temp = arr[0]
    let count = 1
    let result = arr[0]
    for(let i=1; i<arr.length; i++ ) {
        const cur = arr[i]
        if(temp===cur) {
            count ++ 
        } else {
            temp = cur
            result = result + count + temp
            count = 1
        }
    }
    return result + count
}

console.log(getNum('aaaaaaabbbccccddaa'), 'ttt')
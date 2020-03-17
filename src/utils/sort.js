
function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

function bubbleSort(arr) {
    let runCount = 0
    let allCount = 0
    for (let i = arr.length - 1; i > 0; i--) {
        console.log(i, 'i')
        for (let j = 0; j < i; j++) {
            console.log(i, j, 'i j')
            allCount++
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                runCount++
            }
        }
    }
    // console.log(allCount, runCount, 'allCount, runCount')

    return arr;
}

// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// const arr = [30, 20, 31, 77, 81, 24];
const arr = [9, 3, 4, 7, 5, 6, 8, 2, 1, 0];
console.log(bubbleSort(arr));

function quickSort(arr) {
    let runCount = 0
    let leftCount = 0
    let rightCount = 0
    if(arr.length<=0) {
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    // console.log(pivotIndex, pivot, 'pivotIndex, pivot')
    let left = []
    let right = []
    arr.forEach(el=> {
        runCount++
        if(el<pivot) {
            left.push(el)
            leftCount++
        } else {
            right.push(el)
            rightCount++
        }
    })
    // console.log(runCount, 'run all')
    // console.log(leftCount, 'run left')
    // console.log(rightCount, 'run right')
    return quickSort(left).concat([pivot], quickSort(right))
}

// console.log(quickSort(arr), 'arr')

function quickSort2(arr, i, j) {
    let runCount = 0
    if(i < j) {
        let left = i;
        let right = j;
        let pivot = arr[left];
        while(i < j) {
            while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
                j--;
            }
            if(i < j) {
                arr[i++] = arr[j];
                runCount++
            }
            while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
                i++;
            }
            if(i < j) {
                arr[j--] = arr[i];
                runCount++
            }
        }
        arr[i] = pivot;
        quickSort2(arr, left, i-1);
        quickSort2(arr, i+1, right);
        console.log(runCount, 'run all')
        return arr;
    }
}

function quickSort3(arr, i, j) {
    let runCount = 0
    if(i < j) {
        let left = i;
        let right = j;
        let mid = Math.floor((left+right)/2);
        let temp = arr[left];
        arr[left] = arr[mid];
        arr[mid] = temp;
        let pivot = arr[left];
        while(i < j) {
            while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
                j--;
            }
            if(i < j) {
                console.log(i, j, arr, 'i, j arr ++1')
                arr[i++] = arr[j];
                console.log(i, j, arr, 'i, j arr ++2')
                runCount++
            }
            while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
                i++;
            }
            if(i < j) {
                console.log(i, j, arr, 'i, j arr --1')
                arr[j--] = arr[i];
                console.log(i, j, arr, 'i, j arr --1')
                runCount++
            }
        }
        arr[i] = pivot;
        quickSort3(arr, left, i-1);
        quickSort3(arr, i+1, right);
        console.log(runCount, 'run all')
        return arr;
    }
}
// console.log(quickSort3(arr, 0 , arr.length-1), 'arr');

function bubbleSort2(arr) {
    let i = arr.length - 1;

    while (i > 0) {
        let pos = 0;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                console.log(pos, i, j, arr, 'pos, i, j, arr')
                swap(arr, j, j + 1);
                console.log(pos, i, j, arr, 'pos, i, j, arr swap')
            }
        }
        i = pos;
    }

    return arr;
}

// console.log(bubbleSort2(arr), 'arr')

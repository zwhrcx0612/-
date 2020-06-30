// 冒泡排序
function bubbleSort(arr) {
    // 总共执行arr.length-1次
    for(let i = arr.length; i >= 2; i--) {
        // j < i - 1是因为每次排序最后一个数字都会排好(最大或者最小)，下次就不再需要排序了
        for(let j = 0; j < i-1; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

let arr = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32]
bubbleSort(arr)
console.log(arr)
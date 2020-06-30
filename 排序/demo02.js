// 选择排序  最小的元素会放到数组中的第一个位置
function selectionSort(arr) {
    let min
    let temp
    for(let i = 0; i < arr.length - 1; i++) {
        min = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}
let arr = [72,54,59,30,31,78,2,77,82,72]
selectionSort(arr)
console.log(arr)
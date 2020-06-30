// 插入排序  5 3 4 7 2
function insertionSort(arr) {
    let temp, inner
    for(let i = 1;i < arr.length; i++) {
        temp = arr[i]
        inner = i
        while(inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1]
            inner--
        }
        arr[inner] = temp 
    }
}
let arr = [6, 10, 0, 6, 5, 8, 7, 4, 2, 7]
insertionSort(arr)
console.log(arr)
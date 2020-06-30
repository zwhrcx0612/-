// 快速排序
function qSort(list) { 
    if (list.length == 0) {
        return []; 
    }
    var lesser = []; 
    var greater = []; 
    var pivot = list[0]; 
    for (var i = 1; i < list.length; i++) { 
        if (list[i] < pivot) { 
            lesser.push(list[i]); 
        } else { 
            greater.push(list[i]); 
        } 
    }
    return qSort(lesser).concat(pivot, qSort(greater)); 
}

// let arr = [3,1,2,6,4]
let arr = [9,3,93,9,65,94,50,90,12,65]
qSort(arr)
console.log(qSort(arr))
// 归并排序
function mergeSort(arr) { 
    if (arr.length < 2) { 
        return; 
    } 
    var step = 1; 
    var left, right; 
    while (step < arr.length) { 
        left = 0; right = step; 
        while (right + step <= arr.length) { 
            mergeArrays(arr, left, left + step, right, right + step); 
            left = right + step;
            right = left + step; 
        } 
        if (right < arr.length) { 
            mergeArrays(arr, left, left + step, right, arr.length); 
        }
        step *= 2; 
    } 
}


function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) { 
    var rightArr = new Array(stopRight - startRight + 1); 
    var leftArr = new Array(stopLeft - startLeft + 1); 
    
    for (var i = 0,k = startRight; i < (rightArr.length-1); ++i) { 
        rightArr[i] = arr[k]; ++k; 
    }
    for (var i = 0,k = startLeft ; i < (leftArr.length-1); ++i) { 
        leftArr[i] = arr[k]; ++k; 
    }
    rightArr[rightArr.length-1] = Infinity; // 哨兵值 
    leftArr[leftArr.length-1] = Infinity; // 哨兵值 
    var m = 0; 
    var n = 0; 
    for (var k = startLeft; k < stopRight; ++k) { 
        if (leftArr[m] <= rightArr[n]) { 
            arr[k] = leftArr[m]; m++; 
        }else { 
            arr[k] = rightArr[n]; n++; 
        } 
    }
    console.log("left array - ", leftArr); 
    console.log("right array - ", rightArr); 
}

var nums = [6,10,1,9,4,8,2,7,3,5]; 
console.log(nums); 
console.log(); 
mergeSort(nums); 
console.log(); 
console.log(nums);
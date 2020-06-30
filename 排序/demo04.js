// 希尔排序
function shellsort() { 
    for (let g = 0; g < this.gaps.length; ++g) { 
        for (let i = this.gaps[g]; i < this.dataStore.length; ++i) { 
            let temp = this.dataStore[i]; 
            let j = i
            for (; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) { 
                this.dataStore[j] = this.dataStore[j - this.gaps[g]]; 
            }
            this.dataStore[j] = temp; 
        }
        console.log(this.dataStore) 
    } 
}
global.gaps = [5,3,1]
// global.dataStore = [61,85,19,88,68,8,70,29]
global.dataStore = [8,9,1,7,2,3,5,4,6,0]
shellsort()



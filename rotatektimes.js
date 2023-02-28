// Rotate an array by k times
// divide and conquer method
let arr = [1,2,3,4,5,6,7,8,9,10]
let k = 3;
let n = arr.length
let ans="";
(function(){

    k = k % n
    for(let i=0; i< n; i++){
        if(i < k){
           ans +=  arr[n + i - k] + " " 
        }else{
            ans +=  arr[i - k] + " "
        }
    }
 

 
console.log(ans)
})();

// output : 8 9 10 1 2 3 4 5 6 7 
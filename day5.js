// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times


// 1 . Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10]

let odd = (function(){
    for(let i of arr)
    if(i % 2 !=0){
        console.log(i);
    }
})();
// output = 1 3 5 7 9

// 2.Convert all the strings to title caps in a string array

let strgArr = ['i','am','guvi','iit','student']

let titleCaps = (function(){
    for(let i=0; i<strgArr.length; i++){
        strgArr[i] = strgArr[i][0].toUpperCase() + strgArr[i].slice(1)
        console.log(strgArr[i])
    }
})()
// Output : I Am Guvi Iit Student

// 3.Sum of all numbers in an array

let numArr = [1,2,3,4,5,6,7,8,9,10]

let v = 0;

let Sum = (function(){
    for(let i of numArr){
        v = v + i
        console.log(i)
    }
})()
// output : 55

//4 .Return all the prime numbers in an array

let pArr = 10;
let flag;
(function (){
   
    for(let i =2; i <= pArr; i++){
        flag = true
       for(let j =2; j < i-1; j++){
        if(i % j ==0){
            flag= false
        }
       }
       if(flag){
        console.log(i)
       }
    }
  
})()

// output :  2 3 5 7



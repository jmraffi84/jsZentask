// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array


arr = [1,2,3,4,5,6,7]

let res = arr.filter((odd)=>{
    if(odd % 2 !==0){
        return odd
    }
})
console.log(res.join(" "))

// output: 1 3 5 7
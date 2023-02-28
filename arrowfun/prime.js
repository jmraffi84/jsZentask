// Return all the prime numbers in an array

let arr = [1,2,3,4,5,6,7];

let output = num => {
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false
        }
    }
    return num != 1
}
let myPrime = arr.filter(output);
console.log(myPrime.join(" "))

// output : 2 3 5 7
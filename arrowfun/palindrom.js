// Return all the palindromes in an array

let arr = [1,2,1]
let num = arr;
let result=0;

let output = arr.every(x =>{
    while(x > 0){
        let temp = x % 10;
        result = result *10 + temp;
        x = parseInt(num/10);
        return result
    }
    return x
}
)
if(arr === output){
    console.log(true);
    
}else{
    console.log(false)
}

// 121 ===output: true
// 123 ===output : false
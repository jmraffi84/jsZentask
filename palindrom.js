// Return all the palindromes in an array

let a = 121;
let num = a;
let result=0;

while(num>0){
    let temp = num%10;
    result = result *10 + temp;
    num = parseInt(num/10);
}
if(a === result){
    console.log(true);
    
}else{
    console.log(false)
}

// Return median of two sorted arrays of the same size.

let a = [1,2,3,4,5]
let b = [6,7,8,9,10]

let pointer1=0;
let pointer2=0;
let ans =[];
(function(){


while(pointer1<a.length && pointer2<b.length){
    if(a[pointer1] < b[pointer2]){
        ans.push(a[pointer1])
        pointer1++;
    }else
    {
        ans.push(b[pointer2])
        pointer2++;
    }
}
while(pointer1 < a.length){
    ans.push(a[pointer1])
    pointer1++;
}
while(pointer2 < b.length){
    ans.push(b[pointer2])
    pointer2++;
}

let n = ans.length;
let res =0;
(function(){
  if (n % 2 === 1) {
   res =  ans[(n-1)/2];    
}else{
    res =  Math.trunc((ans[n/2-1] + ans[n/2])/2);
}

  })();
console.log(res)
})();

// output : 5



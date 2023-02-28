
// Remove duplicates from an array

let a = [1,1,2,2,3,4,5,5,6,7,7,8,9,10]

let ans=[]

(function(){
    for(let i =0; i<a.length; i++){
        if(!ans.includes(a[i])){
            ans.push(a[i])
            console.log(ans)
        }
    }
})();

// output: 1	2	3	4	5	6	7	8	9	10

// Convert all the strings to title caps in a string array

let arr = ['one','two','three']

let output = arr.map(ele => ele[0].toUpperCase() + ele.slice(1))

console.log(output.join(" "))
// output : One Two Three
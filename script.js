// Find Missing Number In an array

function findMissingNumber(arr){
    let n = arr.length + 1
    sum = Math.floor(n*(n+1)/2)

    actualSum =arr.reduce((a,b)=>a+b, 0)
    return sum - actualSum
    
}
arr =[1,2,4,5,6]
console.log(findMissingNumber(arr))



// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered
//  from the old array.

// Note: if looping is needed, use only primitive for/while/do-while loop ( forearch, map, etc are not allowed).
function isPrime(num){
    if(num % 2 ==0 || num < 2)return false;
    for(let i = 2; i<= Math.sqrt(num);i++){
        if(num % i == 0 ){
            return false
        }
    }
    return true;
}

function primeNumbers (arr){
    let prime = [];
    for(i = 0;i<arr.length;i++){
        if(isPrime(arr[i])){
            prime.push(arr[i])
        }
    }
   return prime;
}
console.log(primeNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,15,14,16,20]))
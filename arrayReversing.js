// Write a Javascript function that takes an array of numbers and return a reversed version

// Note: if looping is needed, use only primitive for/while/do-while loop ( forearch, map, etc are not allowed).

//Reversing an array
function reverseArry(numbers){
    const reversed = [];
    for(i = numbers.length -1; i>=0;i--){
        reversed.push(numbers[i]);
    }
   return reversed;
}
// console.log(reverseArry([1,2,3,4,5,6,7,8,9,10]));

// 4. Inplace Array reversing

// Write a Javascript function that takes an array of numbers and return a reversed version. 
// Note: here you are not allowed to use an intermediary array. 
// You need to use the same array passed in the parameter and just reverse its content.
//  Do not use inbuilt functions like reverse(). 
// Just use loops and conditions.

const inPlaceReversing = (list) => {
    let start = 0;
    let end = list.length - 1;
    while(start < end){
            list[start] = list[start] + list[end];
            list[end] = list[start] - list[end]
            list[start] = list[start] - list[end];
            start++;
            end--;
    }
    console.log(list);
}
inPlaceReversing([1,2,3,4,5,6,7,8,9,10]);
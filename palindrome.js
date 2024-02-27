// Palindrome

// Write a function that takes a string and returns true/false based on whether it is a palindrome or not 
// (you can use a dictionary to know what a palyndrom is).

// Note: if looping is needed, use only primitive for/while/do-while loop ( forearch, map, etc are not allowed).

//Reversing a stiring
function reverseString(string){
    const reversed = [];
    let newSting;
    for(i = string.length -1; i>=0;i--){
        reversed.push(string[i]);
    }
    newSting = reversed.join('');
   return newSting;
}

const isPalindrome =(str) => {
    if(reverseString(str) == str){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome("deified"));

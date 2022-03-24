//isPalindrome() checks if the inputted string, when reversed, is the same word
function isPalindrome(string){
    if(typeof(string) !== 'string')
        return console.log(`${string} is not a string.`)

    const reverseString = reverse(string)
    if (string == reverseString) 
        return true
    else 
        return false
}

//reverse() from HW1-3
function reverse(string){
    return string.split("").reverse().join("")
}

let string = "densel"
console.log(`is ${string} a palindrome?: ${isPalindrome(string)}`)

string = "racecar"
console.log(`is ${string} a palindrome?: ${isPalindrome(string)}`)


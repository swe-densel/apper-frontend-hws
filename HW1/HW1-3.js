//reverse() - firstly does split() which splits the string into an array of sub strings
//            next does reverse() to reverse the array of sub strings
//            finally does join() to join all sub strings into a string

function reverse(string){
    if(typeof(string) !== 'string')
        return console.log(`${string} is not a string.`)

    return string.split("").reverse().join("")
}

const string = "densel"
const reverseString = reverse(string)
console.log(`${string} -> ${reverseString}`)


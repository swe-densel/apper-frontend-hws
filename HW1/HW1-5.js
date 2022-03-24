//convertToVowels() - uses regular expression (regex) that forms a search pattern 
//                    based on the sequence of characters. 
//                  - replaces all non-vowels into ''

function convertToVowels(string){
    return string.replace(/[^aeiou]/gi, '')
}

const string = "hello world"
console.log(`${string} -> ${convertToVowels(string)}`)
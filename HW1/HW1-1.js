//When sorting numbers, sort needs to pass a compare function parameter 
//Compare function: function(a,b){return a-b}
//the result of the compare function is sorted depending on 
//whether the value is positive, negative, or a zero value.

//transform() accepts an array of integers, squares its elements, and 
//arranges the elements in ascending order.

function transform(arrayInt){
    if(!arrayInt.some(isNaN))  //checks if the array only contains integers
        return arrayInt
            .map(num => num*num)
            .sort(function(num1, num2){return num1-num2})
    else
        return 'The array is not an array of integers.'
}


const arrayInt = [8,2,5]
console.log(transform(arrayInt))
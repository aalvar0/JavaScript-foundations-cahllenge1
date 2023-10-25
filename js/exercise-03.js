/* 
    1. Define function 'getTypeOf', which receives a value as parameter and returns the type of this value
        Use typeof to check the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

function getTypeOf(value) {
    return typeof value;
}

console.log(getTypeOf(5)); // Output: number
console.log(getTypeOf('Alvaro')); // Output: string
console.log(getTypeOf(false)); // Output: boolean
console.log(getTypeOf(null)); // Output: object
console.log(getTypeOf(undefined)); // Output: undefined
console.log(getTypeOf({})); // Output: object
console.log(getTypeOf([])); // Output: object
console.log(getTypeOf(5)); // Output: number

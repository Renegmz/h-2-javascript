/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let i = 1;
while (i < 8) {
    result.unshift(i)
    i += 2
}
console.log(result)

//export result
module.exports = result;
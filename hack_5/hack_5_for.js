/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

for (let i = 1; i < 8; i += 2) {
    result.unshift(i);
}
console.log(result)

//export result
module.exports = result;
/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let values = new Map();

values.set('7',7);
values.set('5',5);
values.set('3',3);
values.set('1',1);

for (i of values.values()) {
    result.push(i);
}
console.log(result);

//export result
module.exports = result;
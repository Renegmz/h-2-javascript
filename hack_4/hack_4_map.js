/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let values = new Map();

values.set('1',1);
values.set('3',3);
values.set('5',5);
values.set('7',7);

for (i of values.values()) {
    result.push(i);
}
console.log(result);

//export result
module.exports = result;
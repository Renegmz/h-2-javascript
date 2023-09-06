/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let arr_slice = arr.slice(1,4)
let result = [];

for (let i in arr_slice) {
    let str = arr_slice[i][0] + arr_slice[i][1].replace('a', '@') + arr_slice[i][2]
    result.push(str)
}
result[result.length - 1] = arr_slice[arr_slice.length - 1].toUpperCase()
console.log(result)
//export result
module.exports = result;
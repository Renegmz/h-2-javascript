/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

for (let i in arr) {
    if (!arr[i].startsWith('b')){
        continue
    }
    result += 1
}
console.log(result)
//export result
module.exports = result;
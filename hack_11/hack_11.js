/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let map_number_array = new Map()
let map_string_array = new Map()

map_number_array.set(1,'one')
map_number_array.set(3,'three')
map_number_array.set(5,'five')

map_string_array.set('foo','f00')
map_string_array.set('bar','Bar')
map_string_array.set('baz','b@z')
map_string_array.set('qux','quX')
map_string_array.set('echo','3ch0')

for (var i = 0; i < numberArray.length; i++) {
    if (map_number_array.has(numberArray[i])) {
        numberArray[i] = map_number_array.get(numberArray[i])
    }
}

for (var i = 0; i < stringArray.length; i++) {
    if (map_string_array.has(stringArray[i])) {
        stringArray[i] = map_string_array.get(stringArray[i])
    }
}

result = [...numberArray, 'h@ck' ,...stringArray]
result.unshift('h@ck')
result.push('h@ck')
console.log(result)

//export result
module.exports = result;
/*

Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares 
consecutivos a partir de X, um valor por linha, inclusive o X ser for o 
caso.

Entrada => A entrada será um valor inteiro positivo.

Saída => A saída será uma sequência de seis números ímpares.

*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());


var y = x % 2;

if (y == 0){
    x = x + 1;
}

for (const i of Array(6).keys()){
    console.log(x);   
    x = x + 2;
}
    
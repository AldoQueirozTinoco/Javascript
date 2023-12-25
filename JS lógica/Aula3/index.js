//Short circuit em js
console.log("Maria" && 0 && "Jhon" && null)
//retorna 0, o primeiro valor "False"
console.log("Maria" && 1 && "Jhon")
//todos true === retorna "Jhon",o ultimo valor "True"

/*FALSY
false
0
"" '' ``
null / undefined
NaN
*/

function falaDele(){
    return "Oi";
}
const vaiExecutar = true;
console.log(vaiExecutar && falaDele())

console.log(0 || null || false || "Marcos" || true)
//Retorna o primeiro valor true
console.log(null||0||undefined)
//Retorna o ultimo valor false
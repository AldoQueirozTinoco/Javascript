function soma (x=1, y=1){
    const result = x+y;
    return result;
}
console.log(soma(1,1))
function multi(x,y){
    console.log(x*y)
}
multi(2,3)
//tambem podemos fazer:
console.log(soma(5))
//assim, x assume o valor de 5 e y continua 1
const sqrt = n => n ** 0.5;
/* Ou

const sqrt = (n) =>{
    return n ** 0.5;
}

*/
console.log(sqrt(4))
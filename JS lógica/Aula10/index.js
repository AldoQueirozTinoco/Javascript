/*let a= 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numeros = [b,c,a];

[a, b ,c] = numeros;

console.log(a,b,c);*/
//               0,1,2,3,4,5,6,7,8
const numeros = [1,2,3,4,5,6,7,8,9]
let [um,dois,...resto] = numeros;
let[ , ,tres] = numeros;
console.log(um, dois,tres, resto);

// ...rest operator, ... spread operator

array = [[1,2,3], [4,5,6],[7,8,9]];

console.log(array[0][1])

const [list1,list2,list3] = array;
console.log(list2[0])


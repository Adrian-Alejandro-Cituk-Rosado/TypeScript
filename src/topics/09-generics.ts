export function whatMyType<T>(argument: T):T {

    return argument;

}



let amIString = whatMyType<string>('Hola Mundo');
let amINumber = whatMyType<number>(100);
let amIArray = whatMyType<number[]>([1, 2, 3, 4, 5]);




console.log(amIString.split(' ')); // Hola Mundo
console.log(amINumber.toFixed()); // 100
console.log(amIArray.join('-')); // 1,2,3,4,5,
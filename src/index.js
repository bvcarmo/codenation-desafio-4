'use strict'

const fibonacci = () => {
    let array = [0,1];
    let proximoNumero = 0;
    let lenArray = array.length;
    while((array[lenArray - 1] + array[lenArray - 2]) <= 350){
    
        proximoNumero = array[lenArray - 1] + array[lenArray - 2];
        array.push(proximoNumero);
        lenArray = array.length;

    }

    return array;
}

const isFibonnaci = (num) => {
    let arrayFibonacci = fibonacci();
    let retorno = false;
    arrayFibonacci.map(pos => {
        if(pos === num){
            retorno = true;
        }
    })

    return retorno ? retorno : false;
}

module.exports = {
    fibonacci,
    isFibonnaci
}

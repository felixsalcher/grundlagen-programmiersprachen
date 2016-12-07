function isPositiveNumber(value) {
    return value > 0;
}

function calcQuersumme(value) {
    let quersumme = 0;

    while(value !== 0){
        quersumme+=(value % 10);
        value = parseInt(value / 10);
    }

    return quersumme;
}

function calcGGT1(x, y) {
    let z = 0;

    while(x !== y){
        if(x < y){
            z = x;
            x = y;
            y = z;
        }
        x -= y;
    }

    return x;
}

function calcGGT2(x, y) {
    let rest = 0;

    while(y !== 0){
        rest= x % y;
        x = y;
        y = rest;
    }

    return x;
}

function isPrimzahl(value) {

    for(let j=2;j < value;j++){
        if(value % j === 0){
            return false;
        }
    }
    return true;
}
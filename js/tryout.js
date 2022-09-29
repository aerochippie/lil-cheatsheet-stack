function makeFunction(x){
    return function (y){
            return x + y;
    }
}

const add5 = makeFunction(5);
console.log(add5(2));
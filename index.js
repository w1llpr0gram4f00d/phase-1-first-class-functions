function receivesAFunction(callback) {
    return callback();
}

let namedFunction = function () {
    return ''};

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() { 
    return function () {};
}

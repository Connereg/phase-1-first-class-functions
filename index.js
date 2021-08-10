
function receivesAFunction(callback) {
        return callback();
    
}


function returnsANamedFunction() {
    return function oogle(){
        console.log("Did this work?")
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        console.log("I think it worked!")
    }
}
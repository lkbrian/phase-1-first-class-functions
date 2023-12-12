function receivesAFunction(callback){

    return callback();
}
receivesAFunction(() => 4 *2);

function returnsANamedFunction(){
    return (function namedFunc(){
        console.log(`named function`)
    })
}
 const returnsAnAnonymousFunction = function(){
    return function(){
        console.log(`anonymus func`)
    }
 }
 returnsAnAnonymousFunction();
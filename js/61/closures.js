/* jshint devel:true */
'use strict';


function multiply(x,y)   {

console.log(x*y);
} 
multiply(7,8);
multiply(4,3);
multiply(5,7);

function multiplyBetter() {
    return function (x,y)   {
        console.log(x*y);
    };
} 
var better= multiplyBetter();
better(7,8);

function multiplyBest(x) {
    return function (y) {
        console.log(x*y);
    };

}

var best=multiplyBest(9);
best(8);
// SL - indentation is wrong. Very hard to follow.
function mapping(arrayOne, callback)   {
    'use strict';

     let arrayTwo= [];
     for (let i=0;i <arrayOne.length;i++) {

      arrayTwo[i]= callback(arrayOne[i]);

}
         return arrayTwo;
}
let arrayNums= [3,6,17];
function double(x)    {
  'use strict';
  return x *2;
}


console.log(mapping(arrayNums, double));

let arrayLetters= ['a', 'b', 'c'];
function turnIntoZ(x)  {
  'use strict';
  return 'z';
}
console.log(mapping(arrayLetters,turnIntoZ));

// SL - nice
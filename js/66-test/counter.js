window.app= (function (theModule) {
    'use strict';
// SL - indentation is bad here
let counter=0;
 theModule.addToCount = function add (number) {
     counter+= number;

  };
 theModule.total= function counterTotal ()  {
   // SL - should return value, not console log. Who says caller wants to console log it?
      console.log('total is ' + counter );



 };
}) (window.app || {});
window.app.theModule.addToCount(3);
window.app.counterTotal();

// SL - ok - missing part b...

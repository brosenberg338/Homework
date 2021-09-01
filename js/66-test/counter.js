window.app= (function (theModule) {
    'use strict';
let counter=0;
 theModule.addToCount = function add (number) {
     counter+= number;

  };
 theModule.total= function counterTotal ()  {   
      console.log('total is ' + counter );
  


 };
}) (window.app || {});
window.app.theModule.addToCount(3);
window.app.counterTotal();

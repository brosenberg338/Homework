import $ from 'jquery';

(function () {
    'use strict';
    
 
    
    let number = 0;
    
    $('#button').on("click", function () {
        number++;
       $('#box').text(`I was clicked ${number} times`);    
        console.log(number);
    });        
    
  
    


})();
(function () {

    'use strict';

    $(document.body).append('<div id= fileDiv>load</div>');
    fetch('test.js')
      /*  .then(r => ('#fileDiv'.text)=(r).text);  */
        .then(r => console.log((r).text));
;
    
    $(document.body).append('<button id= loadButton>load</button>');
 
   
    function loadFile() {
        console.log('we are loading your file');
        
    }
   $('loadButton').on('click', loadFile);
}());

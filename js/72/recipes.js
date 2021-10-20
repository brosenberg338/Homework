(function pizza  ()   {
'use strict';

fetch('pizza.json')
.then(r => r.json())
.then(t => 
    {console.log(t);
       let div= document.getElementById('page');
       div.append(t);
       
        

   });
             
  function j ()   {
     let submitVal= document.getElementById('recipes');
     
    let t= document.body.getElementById('submit');
    let textBox=submitVal.innerText;
    t.addEventListener('click') ,() =>  {fetch({'textBox'}.json);
       
    ));

  }


})();

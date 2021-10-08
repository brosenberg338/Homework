function colorChange(elem, newColor)       {
    'use strict';
    
    
    setTimeout(function()  {
      elem.style.color=newColor;
  },5000);}

const h= 'hello';

const g= document.createElement('div');
g.innerText= h;

document.body.appendChild(g);
g.style.color='lightGreen';
colorChange(g, 'yellow');
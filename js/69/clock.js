


const clock = document.getElementById('clock');
document.body.appendChild(clock);
function setClock() {
    'use strict';

    let d = new Date();


    let hours = d.getHours();
    if (hours > 12) {
        hours -= 12;
    } if (hours === 0) {
        hours = 12;
    }

    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    /*if  (minutes <10) {
        minutes= '0' + minutes;
    
     }
     if  (seconds <10) {
        seconds= '0' + seconds;   
    
     }   */
    let variables = [minutes, seconds];
    for (let i = 0; i < variables.length; i++) {
        if (variables[i] < 10) {
            variables[i] = '0' + variables[i];
        }

    }


    /*clock.innerText= hours + ':' + minutes + ':' + seconds;  */
    clock.innerText = hours + ':' + variables[0] + ':' + variables[1];
}


setInterval(setClock, 1000);





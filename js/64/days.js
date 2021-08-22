'use strict';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday'];

function getDay(index) {
  return days[index - 1];
}

function getIndex(dayName) {
  return days.findIndex(d => d.toLowerCase() === dayName.toLowerCase()) + 1;
}



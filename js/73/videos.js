
(async function () {
  'use strict';

  let response = await fetch('videoList.json');
  let videos = await response.json();
  let videoChoices = document.getElementById('videoChoices');
  const videoNameElem = document.getElementById('video').h3;
  const videoPictureElem = document.getElementById('video').img;



  videos.forEach(video => {

    $(`<span>${video.name}</span>`)

      .appendTo(videoChoices);
    console.log(videoChoices.length);
   
   
   
   
    /* .click(function () {
       videoChoices.attr('src', video.url);
       //videoElem[0].play();        */
  });







  /* videoChoices.append(`<option value="${video.id}">${video.name}</option>`);
 });                          
 
   videoChoices.on("change", function () {
   loadVideo(this.value);
 }
 );



async function loadVideo(videoToLoad) {
  
 let response2 =  await fetch('{videoToLoad}.json');
 let videoToLoadNow = await fetch(response2);
 console.log(videoToLoadNow);
}

("kolZman.mp4").play();   */

})();

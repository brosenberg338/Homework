/* global google */

(async function () {
    'use strict';
     let r = await fetch("http://api.geonames.org/wikipediaSearch?q=JFK airport &maxRows=10&username=baruchr6&type=json");
     let t= await r.json();
     console.log(t);    
     let v = await fetch("http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=baruchr6&type=json");
     let w= await v.json();
     console.log(w); 
    
    const darchei = { lat: 40.59741939832381, lng: -73.7494925680825 };
    const shorYoshuv = { lat: 40.605117099678225, lng: -73.73997223135193 };
    const jFK =     {lat: 40.650187303843545, lng: -73.77987663180319};
   
    let map = new google.maps.Map(document.getElementById('map'), {
        center: darchei,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.SATELLITE
            
    });
   
   const infoWindow = new google.maps.InfoWindow();

    const marker1 = new google.maps.Marker({
        position: darchei,
        map: map,
        animation: google.maps.Animation.DROP
    });
    const marker2 = new google.maps.Marker({
        position: shorYoshuv,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
    marker2.addListener('click',  () => {
    infoWindow.setContent(` Welcome to Shor Yoshuv
        <br> <a target= "_blank" href= "https://www.shoryoshuv.org"> more info here</a>
       
        `); 
        infoWindow.open(map,marker2);
    });
  
        const marker3 = new google.maps.Marker({
        position: jFK,
        map: map,
        animation: google.maps.Animation.DROP
        
      });  marker3.addListener('click',  () => {
            infoWindow.setContent(` John F. Kennedy International Airport (IATA: JFK, ICAO: KJFK, FAA LID: JFK) (colloquially referred 
                to as JFK Airport, New York-JFK, or JFK) is an international airport in New York City. The airport is the busiest 
                international air passenger gateway into North America,[5] the 20th-busiest airport in the world, 
                the sixth-busiest airport in the United States, and the busiest airport in the New York airport system, 
                having handled over 62.5 million passengers in 2019.[6] More than ninety airlines operate from the airport, 
                with nonstop or direct flights to destinations in all six inhabited continents.[7][8]
                <br> <a target= "_blank" href= "https://en.wikipedia.org/wiki/John_F._Kennedy_International_Airport"> more info here</a>

           
            
            
            
            `);
            infoWindow.open(map,marker3);   
            });
    map.addListener('center_changed', () => {
        const center = map.getCenter();
        console.log('center changed', center.lat(), center.lng());
       
    
      



        
        
        
       

       

        

    });
      const bounds= new google.maps.LatLngBounds();
 bounds.extend(darchei);
 bounds.extend(shorYoshuv);
 bounds.extend(jFK);
 map.fitBounds(bounds);


})();
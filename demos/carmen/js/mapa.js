var map, geocoder, infoWindow, marker;

function initialize()
{
  var myOptions = {
    center: new google.maps.LatLng(6.2656458395431045, -75.57490825653076),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  geocoder = new google.maps.Geocoder();
  //var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  google.maps.event.addListener(map, 'click', function(event)
  {
    placeMarker(event.latLng);
  });


}
function placeMarker(location)
{  
  if(marker)
    { //on vérifie si le marqueur existe
      marker.setPosition(location); //on change sa position
    }
    else
    {
        marker = new google.maps.Marker({ //on créé le marqueur
          position: location, 
          map: map
        });        
      }
      document.getElementById('lat').value=location.lat();
      document.getElementById('lng').value=location.lng();
      getAddress(location);
    }

    function getAddress(latLng)
    {
      var resul;
      geocoder.geocode( {'latLng': latLng}, function(results, status)
      {
        if(status == google.maps.GeocoderStatus.OK)
        {
          if(results[0]) {
            resul = results[0].formatted_address
            document.getElementById("address").value = resul;
            infoWindow.setPosition(latLng);
            infoWindow.setContent(resul);
          }
          else
          {
            resul="No results"
            document.getElementById("address").value = resul;
            infoWindow.setPosition(latLng);
            infoWindow.setContent(resul);
          }
        }
        else {
          resul=status;
          document.getElementById("address").value = resul;
          infoWindow.setPosition(latLng);
          infoWindow.setContent(resul);
        }
      });
      return resul;
    }

    function initMap() 
    {
      map = new google.maps.Map(document.getElementById('mapa'), {
        center: {lat: 6.2656458395431045, lng: -75.57490825653076},
        zoom: 15
      });
      infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };        

        infoWindow.setPosition(pos);
        infoWindow.setContent(getAddress(pos));

        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }    
    initialize();
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }


  //google.maps.event.addDomListener(window, 'load', initMap);


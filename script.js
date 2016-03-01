


 function initMap() {
        console.log("running map fn");
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    
  


$( "#cityfield" ).keyup(function() {
  window.alert("hi there");

  var url = "https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q="+$("#cityfield").val();
$.getJSON(url,function(data) {
    var everything;
    everything = "<ul>";
    $.each(data, function(i,item) {
      everything += "<li> "+data[i].city;
    });
    everything += "</ul>";
    $("#txtHint").html(everything);
  })
  .done(function() { console.log('getJSON request succeeded!'); })
  .fail(function(jqXHR, textStatus, errorThrown) { 
    console.log('getJSON request failed! ' + textStatus); 
    console.log("incoming "+jqXHR.responseText);
  })
  .always(function() { console.log('getJSON request ended!');
  })
  .complete(function() { console.log("complete"); });
});

$("#button").click(function(e){
  var value = $("#cityfield").val();
  console.log(value);
  e.preventDefault();
   $("#dispcity").text(value);
   $('#address').value(value);
   $('submit').submit;


 var myurl="https://api.wunderground.com/api/b96962310e363a8f/geolookup/conditions/q/Utah/"
 
myurl += value;
  myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_string = parsed_json['current_observation']['temperature_string'];
      var current_weather = parsed_json['current_observation']['weather'];
      everything = "<ul>";
      everything += "<li>Location: "+location;
      everything += "<li>Temperature: "+temp_string;
      everything += "<li>Weather: "+current_weather;
      everything += "</ul>";
      $("#weather").html(everything);

  var newTitle;
  newTitle=value + "'s Current Weather";

      $("#title").html(newTitle);

      var newCss= "background:url (https://wtpho.files.wordpress.com/2012/07/20120709-075556.jpg);     background-repeat: no-repeat;";


      var number = Math.floor(Math.random() * 4) + 1  
      //var number=2; 

      if(number===2){
        $("#picture").html("<img src='http://vignette3.wikia.nocookie.net/alomarr/images/4/4a/Raining_fire.jpg/revision/latest?cb=20120825170333' height='200' width='300'>");
      }
      if(number===3){
        $("#picture").html("<img src='http://img1.jurko.net/wall/paper/TornadoLightning.jpg' height='200' width='300'>");
      }
      if(number===4){
        $("#picture").html("<img src='http://kidslovescience.weebly.com/uploads/6/2/0/1/6201848/5122497.jpg?413' height='200' width='300'>");
      }
    }



   

  });


});
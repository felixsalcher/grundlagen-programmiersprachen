var map;
var geocoder;
var cities = ["Bregenz"];
var coordinates = [];

//TODO: Create Database
//TODO: Create Table (id, city_name, lat, lng)
//TODO: Read from Database and create Markers accordingly
//TODO: Add new Citys to Database and check if the entered city is already in the database

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0 },
        zoom: 1
    });

    geocoder = new google.maps.Geocoder();

    document.getElementById('get_coordinates').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('city_name').value;
    geocoder.geocode(
        { 'address': address },
        function(results, status) {
            if (status === 'OK') {
                //resultsMap.setCenter(results[0].geometry.location);
                let result = results[0].geometry.location;
                let lng = result.lng();
                let lat = result.lat();
                let coordinate = {lat, lng};
                coordinates.push(coordinate);

                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: coordinate
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        }
    );
}

function getCoordinates() {
    cities.forEach(city => {
        geocoder.geocode({
            address: city
        }, function(results, status) {
            if(status === 'OK') {
                let result = results[0].geometry.location;
                let lng = result.lng();
                let lat = result.lat();
                let coordinate = {lat, lng};
                coordinates.push(coordinate);

                return new google.maps.Marker({
                    map: map,
                    position: coordinate
                });
            }
        });
    });
    console.log(coordinates);
}

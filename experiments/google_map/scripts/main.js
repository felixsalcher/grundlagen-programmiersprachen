var map;
var geocoder;
var db;

function openDB() {
    db = openDatabase('berghuette', '1.0', 'Database that holds all the visitors locations', 1 * 1024 * 1024);
}

function createTable(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS locations(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, city_name TEXT NOT NULL UNIQUE, lat REAL NOT NULL, lng REAL NOT NULL);', [], SQLSuccess, SQLFail);
}

function getAllEntries(tx) {
    tx.executeSql('SELECT * FROM locations', [], addMarkers, SQLFail);
}

function addMarkers(tx, result) {
    var marker;

    //create a marker for every entry in the database
    for(let location in result.rows) {
        if(result.rows.hasOwnProperty(location)) {
            marker = new google.maps.Marker({
                map: map, //marker gets a reference to the map
                position: { lat: result.rows[location].lat, lng: result.rows[location].lng }
            });
        }
    }
}

function SQLSuccess() {
    console.log("Erfolg!");
}

function SQLFail() {
    console.log("Misserfolg!");
}

//initMap gets called by the Google Maps Callback
function initMap() {

    //create the actual map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0 },
        zoom: 1
    });

    //init geocoder to transform names into coordinates
    geocoder = new google.maps.Geocoder();

    //Init DB
    openDB();

    //Create Table If not exists
    db.transaction(createTable);

    //Get all locations from the database and create Map Markers
    db.transaction(getAllEntries);

    //Event Handler
    document.getElementById('get_coordinates').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('city_name').value;

    geocoder.geocode(
        { 'address': address },
        function(results, status) {
            if (status === 'OK') {

                let result = results[0].geometry.location;
                let coordinate = {lat: result.lat(), lng: result.lng()};

                //add marker for new location
                let marker = new google.maps.Marker({
                    map: resultsMap,
                    position: coordinate
                });

                //save new location into database
                db.transaction(function(tx) {
                    tx.executeSql('INSERT INTO locations(city_name, lat, lng) VALUES (?, ?, ?);', [address, coordinate.lat, coordinate.lng], SQLSuccess, SQLFail);
                });

            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        }
    );
}
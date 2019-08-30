// This file initializes the map using Google Maps API to create a map overlay that is triggered by a marker in './html/recyclingNearbyMap.html'

var map;
var service;
var infowindow;
// Hardcoded in a latitude and longitude, however, you could easily ask user for location.
var lat = 37.539;
var long = -122.062;


function initMap() {
    var start = new google.maps.LatLng(lat, long);

    infowindow = new google.maps.InfoWindow();

    // Creating a map with dark mode CSS.
    map = new google.maps.Map(
        document.getElementById('map'), {center: start, zoom: 12,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]

        });

    //This is how we filter for local recycling centers, using keyword as constraint.
    var request = {
        location: start,
        radius: 10000,
        keyword: "recycle"
    };

    service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i])
                createMarker(results[i]);

            }

            map.setCenter(results[0].geometry.location);
        }
    });
}

//Creates red markers on the map based upon information from the place parameter.
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,

    });


    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);

        infowindow.open(map, this);
    });

}

// Regenerates the map based upon the latitude and longitude value that is in the form at the time.
function regenerateMat() {
    lat = document.getElementById("enterLat").value;
    console.log(lat);
    long = document.getElementById("enterLong").value;
    initMap();

}
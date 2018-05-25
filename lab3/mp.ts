let map : any;

//interface
interface LatLng {
    lat: number,
    lng: number,
}

let Toronto : LatLng = { lat: 43, lng: -79.38};

$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function(data) {
        for (let i of data) {
            addMarkerWithGeocoder(i.address);
        }
    }
});

function initMap() {

    let geocoder: object = new google.maps.Geocoder();

    map = new google.maps.Map(
        document.getElementById("google_map"),
        {
            //center: {lat: 43, lng: -79.38},
            center: Toronto,
            zoom: 8
        }
    );
}

function addMarkerWithGeocoder(address : string) {
    let resultLatlng : LatLng = {lat: 0, lng: 0};

    geocoder = new google.maps.Geocoder();

    geocoder.geocode(
        {'address': address},
        function (results, status) {

            if (status == 'OK') {
                resultLatlng.lat = results[0].geometry.location.lat();
                resultLatlng.lng = results[0].geometry.location.lng();
                addMarker(resultLatlng);
            }
        }
    );
}

function addMarker (location) {
    market = new google.maps.Marker({
        position: location,
        map: map,
    });
}

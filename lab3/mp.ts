let map : any;
let index = 0;
let mapMarkers : MapMarker[] = []


//interface
interface LatLng {
    lat: number,
    lng: number,
}

class MapMarker {
    Address : string;
    Latlng : LatLng;

    public constructor(address:string) {
        this.Address = address;
    };
}

let Toronto : LatLng = { lat: 43, lng: -79.38};

$.ajax({
    url: './locations.json',
    dataType: 'json',
    success: function(data) {
        for (let i of data) {
            let newMapMaker: MapMarker = new MapMarker(i.address);
            mapMarkers.push(newMapMaker);
        }

    }
});

window.onload = function () {
    addMarkerWithGeocoder();
}

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



function addMarkerWithGeocoder() {
    let resultLatlng : LatLng = {lat: 0, lng: 0};

    geocoder = new google.maps.Geocoder();

    if (index < mapMarkers.length) {
        console.log(index);
        let address : string = mapMarkers[index].Address;
        geocoder.geocode(
            {'address': address},
            function (results, status) {

                if (status == 'OK') {
                    index ++;
                    resultLatlng.lat = results[0].geometry.location.lat();
                    resultLatlng.lng = results[0].geometry.location.lng();
                    addMarker(resultLatlng);
                    addMarkerWithGeocoder();
                } else {
                    setTimeout(function(){addMarkerWithGeocoder()}, 500);
                }
            }
        );
    }
}

function addMarker (location) {
    market = new google.maps.Marker({
        position: location,
        map: map,
    });
}

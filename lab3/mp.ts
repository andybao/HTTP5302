let map : any;

//interface
interface LatLng {
    lat: number,
    lng: number,
}

let Toronto : LatLng = { lat: 43, lng: -79.38};

function initMap() {
    map = new google.maps.Map(
        document.getElementById("google_map"),
        {
            //center: {lat: 43, lng: -79.38},
            center: Toronto,
            zoom: 8
        }
    );
}
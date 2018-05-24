var map;
var Toronto = { lat: 43, lng: -79.38 };
function initMap() {
    map = new google.maps.Map(document.getElementById("google_map"), {
        //center: {lat: 43, lng: -79.38},
        center: Toronto,
        zoom: 8
    });
}

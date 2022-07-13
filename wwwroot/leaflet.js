var map;
let initialized = false;
var marker;
function initializeMap() {
    map = L.map('map').setView([47.406940, 9.744520], 10);
    var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3NzaS01NyIsImEiOiJjbDB6OWJwZWoxc241M2Jsem94OW9qcGduIn0.2ZSTtTnSYDRPj6ZEbG1xRg', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
}

function setSelection(Lat, Lon) {
    map?.remove();
    initializeMap();
    marker = L.marker([Lat, Lon]).addTo(map)
        .bindPopup('Selected Location').openPopup();
    map.setView([Lat, Lon], 10);
}
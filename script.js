var map = L.map('map').setView([14.590666, 120.985197], 18);
var osmtogeojson = require('osmtogeojson');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var bbox = map.getBounds().toBBoxString();

bbox = bbox.split(',')
let validBbox = bbox[1] + ',' + bbox[0] + ',' + bbox[3] + ',' + bbox[2]

var overpassUrl = 'https://overpass-api.de/api/interpreter?data=[out:json];way["highway"](' + validBbox + ');out body;>;out skel qt;';

console.log(overpassUrl)
fetch(overpassUrl)
  .then(response => response.json())
  .then(data => {
    var geojson = osmtogeojson(data);

    // add the GeoJSON data to the Leaflet map
    L.geoJSON(geojson).addTo(map);
});

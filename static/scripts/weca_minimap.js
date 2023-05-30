// Mapbox API token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2VjYS10aGVvIiwiYSI6ImNsaTA1YmZkbDAzbW0zcG80MGpkbnB1dnAifQ.8TLXZTUVFf7LuKfYcpJj0A';

// Map object
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-2.59, 51.45],
    maxBounds: [
        [-5.75, 49.95],  // SW bounds
        [-0.91, 52.12]  // NE bounds
    ],
    zoom: 9,
    maxZoom: 17,
    minZoom: 7
});

// basemap list
const layerList = document.getElementById('basemap_menu');
const inputs = layerList.getElementsByTagName('input');
// for all basemap inputs, change style on click
for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}

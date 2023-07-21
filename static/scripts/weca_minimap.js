// map object
var map = L.map('map', {
    center: [51.45, -2.59],
    zoom: 10,
    maxZoom: 18,
    minZoom: 7,
    maxBounds: L.latLngBounds(
      [49.95, -5.75],  // SW bounds
      [52.12, -0.91]  // NE bounds
    )
  });
  
  // replace with your Mapbox API Access token. Only include a token if you will be using Mapbox tiles.
  var token = 'pk.eyJ1Ijoid2VjYS10aGVvIiwiYSI6ImNsaTA1YmZkbDAzbW0zcG80MGpkbnB1dnAifQ.8TLXZTUVFf7LuKfYcpJj0A';
  var mb_gl_light = L.mapboxGL({
    accessToken: token,
    //style: 'https://api.maptiler.com/maps/streets/style.json?key=gbetYLSD5vR8MdtZ88AQ'
    style: 'mapbox://styles/mapbox/light-v11',
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
  })//.addTo(map);
  
  var mb_gl_dark = L.mapboxGL({
    accessToken: token,
    //style: 'https://api.maptiler.com/maps/streets/style.json?key=gbetYLSD5vR8MdtZ88AQ'
    style: 'mapbox://styles/mapbox/dark-v11',
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
  })//.addTo(map);
  
  var mb_gl_satellite = L.mapboxGL({
    accessToken: token,
    //style: 'https://api.maptiler.com/maps/streets/style.json?key=gbetYLSD5vR8MdtZ88AQ'
    style: 'mapbox://styles/mapbox/satellite-v9',
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>, &copy; Maxar'
  })//.addTo(map);
  
  var mb_osm = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=' + token, {
      attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
  })//.addTo(map);
  
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })//.addTo(map);
  
  var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  var basemaps = {
    "Streets": osm,
    "Light": Stadia_AlidadeSmooth,
    "Dark": mb_gl_dark,
    "Satellite": mb_gl_satellite
  };
  
  // layer control
  var layerControl = L.control.layers(basemaps).addTo(map);
  
  // scale bar
  L.control.scale().addTo(map);
  
  // ruler
  var ruler_options = {
      position: 'topleft',
      lengthUnit: {
        factor: 1000,    //  from km to m
        display: 'metres',
        decimal: 2
      },
      circleMarker: {
          colour: 'black',
          radius: 2
      },
      lineStyle: {
          color: 'black',
          dashArray: '1,6'
      }
    };
  L.control.ruler(ruler_options).addTo(map);
  
  // to PDF
  var print_options = {
      position: 'topleft',
      title: 'Print...'
  }
  var browserControl = L.control.browserPrint(print_options).addTo(map);
  
  // layers
  var marker_bristol = L.marker([51.45, -2.59]).bindPopup('Bristol'),
      marker_bath = L.marker([51.37, -2.35]).bindPopup('Bath'),
      marker_thornbury = L.marker([51.60, -2.51]).bindPopup('Thornbury'),
      marker_wsm = L.marker([51.35, -2.96]).bindPopup('Weston Super-Mare');
  
  var cities = L.layerGroup([marker_bristol, marker_bath, marker_thornbury, marker_wsm]).addTo(map);
  
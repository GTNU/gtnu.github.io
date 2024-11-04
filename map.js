// Map initialization 


//ESRI layer basemap
var basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var Base = {
  "Basemap": basemap
};


// Layer group

var NatureBasedSolutions = new L.layerGroup();
var NatureAgrémentale = new L.LayerGroup();
var PolitiquesDeLaNature = new L.layerGroup();

var overlays = {
  "Solutions fondées sur la nature": NatureBasedSolutions,
  "Nature agrémentale": NatureAgrémentale,
  "Politiques de la nature": PolitiquesDeLaNature

  //   "<img src='./icons/leaf-orange.png'/> <span class='my-layer-item'>NatureBasedSolutions</span>": NatureBasedSolutions,
  //   "<img src='./icons/leaf-green.png'/> <span class='my-layer-item'>NatureAgrémentale</span>": NatureAgrémentale,
  //   "<img src='./icons/leaf-red.png'/> <span class='my-layer-item'>PolitiquesDeLaNature</span>": PolitiquesDeLaNature
};


// Icons
var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: './icons/leaf-shadow.png',
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  }
});

var greenIcon = new LeafIcon({ iconUrl: './icons/leaf-green.png' }),
  redIcon = new LeafIcon({ iconUrl: './icons/leaf-red.png' }),
  orangeIcon = new LeafIcon({ iconUrl: './icons/leaf-orange.png' });

L.icon = function (options) {
  return new L.Icon(options);
};



// var citeDescartes = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           [
//             [
//               2.577604710126792,
//               48.84290956809923
//             ],
//             [
//               2.577840013079765,
//               48.842181725794404
//             ],
//             [
//               2.5805913206683897,
//               48.84258406030031
//             ],
//             [
//               2.58182129077926,
//               48.83953549914935
//             ],
//             [
//               2.582292343163175,
//               48.83745134773798
//             ],
//             [
//               2.582875974039382,
//               48.83567392013191
//             ],
//             [
//               2.583898205125962,
//               48.835141241356126
//             ],
//             [
//               2.5876037928154005,
//               48.83445435773251
//             ],
//             [
//               2.593142497298004,
//               48.8336199271217
//             ],
//             [
//               2.5957309412358427,
//               48.8408158824264
//             ],
//             [
//               2.5936874328638453,
//               48.841174532280064
//             ],
//             [
//               2.5922660361443377,
//               48.84204182981864
//             ],
//             [
//               2.590810531352588,
//               48.84248737287203
//             ],
//             [
//               2.5888472923316215,
//               48.8427992506511
//             ],
//             [
//               2.5870532980542578,
//               48.842888358231306
//             ],
//             [
//               2.584920814289717,
//               48.8427992506511
//             ],
//             [
//               2.583837647933308,
//               48.84275469680159
//             ],
//             [
//               2.583600705293236,
//               48.84320023351336
//             ],
//             [
//               2.580418904121359,
//               48.842910635101305
//             ],
//             [
//               2.580148112532271,
//               48.84320023351336
//             ],
//             [
//               2.577604710126792,
//               48.84290956809923
//             ]
//           ]
//         ],
//         "type": "Polygon"
//       }
//     }
//   ]
// }

// L.geoJSON(citeDescartes).addTo(map);



// // Marker add vimeo


// var Vilette = L.marker([48.886005, 2.374572], { icon: greenIcon }).addTo(NatureAgrémentale)
//   .bindPopup('<h1>Cours d’eau urbains et baignade en eau libre</h1><iframe src="https://player.vimeo.com/video/910529133?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var Bassée = L.marker([48.408809, 3.136201], { icon: redIcon }).addTo(PolitiquesDeLaNature)
//   .bindPopup('<h1>Territoire servis, territoires servants : face aux grands projets, quel avenir pour la Bassée ?</h1><iframe src="https://player.vimeo.com/video/910517811?h=d9e60603dc" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var Morbras = L.marker([48.778111, 2.528954], { icon: redIcon }).addTo(PolitiquesDeLaNature)
//   .bindPopup(
//     '<h1>Le Morbras, une petite rivière urbaine sous pression ou opportunité pour redécouvrir la nature en ville ?</h1>\
//     <h2>Par Laurent Lespez</h2>\
//     <h3>Professeur des Universités en Géographie de l’environnement à l’Université de Paris-Est Créteil et Directeur adjoint du Laboratoire de Géographie Physique du CNRS</h3>\
//   <iframe src="https://player.vimeo.com/video/910353131?h=9700b3b9a8" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var Bobigny = L.marker([48.899369, 2.434745], { icon: redIcon }).addTo(PolitiquesDeLaNature)
//   .bindPopup('<h1>Les jardins partagés : des nouvelles manières de produire la ville</h1><iframe src="https://player.vimeo.com/video/910385853?h=4c3aa747a5" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var Compans = L.marker([48.995722, 2.647588], { icon: orangeIcon }).addTo(NatureBasedSolutions)
//   .bindPopup('<h1>Solutions fondées sur la nature pour la gestion durable des ruissellements de voirie</h1><iframe src="https://player.vimeo.com/video/910418837?h=7c1baf663e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


//   var FenBrie = L.marker([48.995722, 2.647588], { icon: orangeIcon }).addTo(NatureAgrémentale)
//   .bindPopup('<h1>La nature des zones logistique : Ferrière-en-Brie (Seine-et-Marne)</h1><iframe src="https://player.vimeo.com/video/910368493?h=88c7953337" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var LacChamps = L.marker([48.863325, 2.598717], { icon: greenIcon }).addTo(NatureAgrémentale)
//   .bindPopup('<h1>Plans d’eau urbains et accès à la nature : Le lac de Champs-sur-Marne</h1><iframe src="https://player.vimeo.com/video/870659723?h=e47f679bc6" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });



// // Cité Descartes


// var PipiCaca = L.marker([48.839750, 2.588353], { icon: orangeIcon }).addTo(NatureBasedSolutions)
//   .bindPopup('<h1>Pipi, caca, matières fertiles ? Quand les citadins désertent le tout-à-l’égout</h1><iframe src="https://player.vimeo.com/video/910480155?h=80877d0394" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>', {
//     maxWidth: 640
//   });


// var ArbresDePluie = L.marker([48.841776, 2.589672], { icon: orangeIcon }).addTo(NatureBasedSolutions)
//   .bindPopup('<h1>Jardin et arbres de pluie pour la gestion &agrave; la source des eaux pluviales urbaines, les dispositifs de SenseCity</h1><iframe src="https://player.vimeo.com/video/910567830?h=7cd44aef18" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>', {
//     maxWidth: 640
//   });



// Marker add canal-u

var Vilette = L.marker([48.886005, 2.374572], { icon: greenIcon }).addTo(NatureAgrémentale)
  .bindPopup(
    '<h1><a href="https://gtnu.hypotheses.org/1462">Cours d’eau urbains et baignade en eau libre</a></h1>\
    <h2>Par Brigitte Vinçon-Leite et Arthur Guillot-Le Goff</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157472?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });

  

var Bassée = L.marker([48.408809, 3.136201], { icon: redIcon }).addTo(PolitiquesDeLaNature)
  .bindPopup(
    '<h1><a href="https://gtnu.hypotheses.org/1471">Territoire servis, territoires servants : face aux grands projets, quel avenir pour la Bassée ?</a></h1>\
    <h2>Par Julie Gobert et José-Frédéric Deroubaix</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157437?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });


var Morbras = L.marker([48.778111, 2.528954], { icon: redIcon }).addTo(PolitiquesDeLaNature)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1409"><h1>Le Morbras, une petite rivière urbaine sous pression ou opportunité pour redécouvrir la nature en ville ?</a></h1>\
    <h2>Par Laurent Lespez</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157439?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });


var Bobigny = L.marker([48.899369, 2.434745], { icon: redIcon }).addTo(PolitiquesDeLaNature)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1405"><h1>Les jardins partagés : des nouvelles manières de produire la ville</a></h1>\
    <h2>Par Ana-Cristina Torres</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157443?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });


var Compans = L.marker([48.995722, 2.647588], { icon: orangeIcon }).addTo(NatureBasedSolutions)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1424"><h1>Solutions fondées sur la nature pour la gestion durable des ruissellements de voirie</a></h1>\
    <h2>Par Marie-Christine Gromaire et Mohamed Saad</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/156515?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });


var FenBrie = L.marker([48.825693, 2.717854], { icon: greenIcon }).addTo(NatureAgrémentale)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1415"><h1>La nature des zones logistique : Ferrière-en-Brie (Seine-et-Marne)</a></h1>\
    <h2>Par Jean Estebanez</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/156833?t=0" allowfullscreen></iframe>', {
    maxWidth: 560 
});


var LacChamps = L.marker([48.863325, 2.598717], { icon: greenIcon }).addTo(NatureAgrémentale)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1447"><h1>Plans d’eau urbains et accès à la nature : Le lac de Champs-sur-Marne</a></h1>\
    <h2>Par Brigitte Vinçon-Leite et Arthur Guillot-Le Goff</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157473?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });


// Cité Descartes

  
var ArbresDePluie = L.marker([48.841776, 2.589672], { icon: orangeIcon }).addTo(NatureBasedSolutions)
.bindPopup(
  '<a href="https://gtnu.hypotheses.org/1360"><h1>Jardin et arbres de pluie pour la gestion &agrave; la source des eaux pluviales urbaines, les dispositifs de SenseCity</a></h1>\
  <h2>Par Marie-Christine Gromaire et Martin Seidl</h2>\
  <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157441?t=0" allowfullscreen></iframe>',  { 
  maxWidth : 560 
});


var PipiCaca = L.marker([48.839750, 2.588353], { icon: orangeIcon }).addTo(NatureBasedSolutions)
  .bindPopup(
    '<a href="https://gtnu.hypotheses.org/1387"><h1>Pipi, caca, matières fertiles ? Quand les citadins désertent le tout-à-l’égout</a></h1>\
    <h2>Par Marine Legrand</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157435?t=0" allowfullscreen></iframe>', {
    maxWidth: 560
  });




// var map

var map = L.map('map', {
  center: [48.840265, 2.584583],
  minZoom: 9,
  zoom: 9,
  gestureHandling: true,
//   gestureHandlingOptions: {
//     text: {
//         touch: "Hey bro, use two fingers to move the map",
//         scroll: "Hey bro, use ctrl + scroll to zoom the map",
//         scrollMac: "Hey bro, use \u2318 + scroll to zoom the map"
//     }
// },
  layers: [
    basemap,
    NatureBasedSolutions,
    NatureAgrémentale,
    PolitiquesDeLaNature
  ]
});


// Reset zoom 

L.control.resetView({
    position: "topleft",
    title: "Reset view",
    latlng: L.latLng([48.840265, 2.584583]),
    zoom: 9,
}).addTo(map);


// Cité Descartes

var button = document.getElementById('refreshButton');
button.addEventListener('click', () => map.flyTo([48.840897, 2.589177], 16));

// // Leaflet mouse wheel zoom only after click on map
// // https://gis.stackexchange.com/questions/111887/leaflet-mouse-wheel-zoom-only-after-click-on-map


// map.on('focus', function() { map.scrollWheelZoom.enable(); });
// map.on('blur', function() { map.scrollWheelZoom.disable(); });
// map.once('focus', function() { map.scrollWheelZoom.enable(); });

// map.on('click', function() {
//   if (map.scrollWheelZoom.enabled()) {
//     map.scrollWheelZoom.disable();
//     }
//     else {
//     map.scrollWheelZoom.enable();
//     }
//   });


L.control.layers(Base, overlays, { collapsed: false, hideSingleBase: true, position: "bottomleft" }).addTo(map);

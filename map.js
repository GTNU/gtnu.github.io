
	// const map = L.map('map').setView([48.840265, 2.584583], 9);

	// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	// }).addTo(map);



  //ESRI layer basemap
var basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var Base = {
  "Basemap": basemap
};

 // var map

 var map = L.map('map', {
  center: [48.840265, 2.584583],
  minZoom: 9,
  zoom: 9,
  gestureHandling: true,
  gestureHandlingOptions: {
    text: {
        touch: "Hey bro, use two fingers to move the map",
        scroll: "Hey bro, use ctrl + scroll to zoom the map",
        scrollMac: "Hey bro, use \u2318 + scroll to zoom the map"
    }
},
  layers: [
    basemap
  ]
});

// icons

const LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: './icons/leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});

  const icon_array = [
    './icons/leaf1.png',
    './icons/leaf2.png',
    './icons/leaf3.png',
    './icons/leaf4.png',
    './icons/leaf5.png',
    './icons/leaf6.png',
    './icons/leaf7.png',
    './icons/leaf8.png',
    './icons/leaf9.png'
  ];

  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
  
 var icon_array_shuffled = (shuffle(icon_array))

 // Vidéos


 var Vilette = L.marker([48.886005, 2.374572], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[1])})}).addTo(map)
  .bindPopup(
    '<h1>Cours d’eau urbains et baignade en eau libre</h1>\
    <h2>Par Brigitte Vinçon-Leite et Arthur Guillot-Le Goff</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157472?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/cours-d-eau-urbains-et-baignade-en-eau-libre" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var Bassée = L.marker([48.408809, 3.136201], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[2])})}).addTo(map)
  .bindPopup(
    '<h1>Territoire servis, territoires servants : face aux grands projets, quel avenir pour la Bassée ?</h1>\
    <h2>Par Julie Gobert et José-Frédéric Deroubaix</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157437?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/territoire-servis-territoires-servants-face-aux-grands-projets-quel-avenir-pour-la" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var Morbras = L.marker([48.778111, 2.528954], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[3])})}).addTo(map)
  .bindPopup(
    '<h1>Le Morbras, une petite rivière urbaine sous pression ou opportunité pour redécouvrir la nature en ville ?</h1>\
    <h2>Par Laurent Lespez</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157439?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/le-morbras-une-petite-riviere-urbaine-sous-pression-ou-opportunite-pour-redecouvrir-la" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var Bobigny = L.marker([48.899369, 2.434745], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[4])})}).addTo(map)
  .bindPopup(
    '<h1>Les jardins partagés : des nouvelles manières de produire la ville</h1>\
    <h2>Par Ana-Cristina Torres</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157443?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/les-jardins-partages-des-nouvelles-manieres-de-produire-la-ville" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var Compans = L.marker([48.995722, 2.647588], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[5])})}).addTo(map)
  .bindPopup(
    '<h1>Solutions fondées sur la nature pour la gestion durable des ruissellements de voirie</h1>\
    <h2>Par Marie-Christine Gromaire et Mohamed Saad</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157792?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/solutions-fondees-sur-la-nature-pour-la-gestion-durable-des-ruissellements-de-voirie-0" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var FenBrie = L.marker([48.825693, 2.717854], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[6])})}).addTo(map)
  .bindPopup(
    '<h1>La nature des zones logistique : Ferrière-en-Brie (Seine-et-Marne)</h1>\
    <h2>Par Jean Estebanez</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/156833?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/la-nature-des-zones-logistiques-l-exemple-de-ferrieres-en-brie" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var LacChamps = L.marker([48.863325, 2.598717], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[7])})}).addTo(map)
  .bindPopup(
    '<h1>Plans d’eau urbains et accès à la nature : Le lac de Champs-sur-Marne</h1>\
    <h2>Par Brigitte Vinçon-Leite et Arthur Guillot-Le Goff</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157473?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/plans-d-eau-urbains-et-acces-a-la-nature-le-lac-de-champs-sur-marne" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
  });

var ArbresDePluie = L.marker([48.841776, 2.589672], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[8])})}).addTo(map)
.bindPopup(
  '<h1>Jardin et arbres de pluie pour la gestion &agrave; la source des eaux pluviales urbaines, les dispositifs de SenseCity</h1>\
  <h2>Par Marie-Christine Gromaire et Martin Seidl</h2>\
  <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157441?t=0" allowfullscreen></iframe>\
  <a href="https://www.canal-u.tv/chaines/nu/jardins-et-arbres-de-pluie-pour-la-gestion-a-la-source-des-eaux-pluviales-urbaines-les" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>',  { 
  maxWidth : 560 
});

var PipiCaca = L.marker([48.839750, 2.588353], {icon: new LeafIcon({iconUrl: (icon_array_shuffled[0])})}).addTo(map)
  .bindPopup(
    '<h1>Pipi, caca, matières fertiles ? Quand les citadins désertent le tout-à-l’égout</h1>\
    <h2>Par Marine Legrand</h2>\
    <iframe width="560" height="315" src="https://www.canal-u.tv/chaines/nu/embed/157435?t=0" allowfullscreen></iframe>\
    <a href="https://www.canal-u.tv/chaines/nu/pipi-caca-matieres-fertiles-quand-les-citadins-desertent-le-tout-a-l-egout" target="_blank"><p>Visionner la vidéo en plein écran dans un nouvel onglet</p></a>', {
    maxWidth: 560
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


// Map initialization 
var map = L.map('map').setView([48.840265, 2.584583], 9);

//osm layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

//Cité Descartes

var citeDescartes = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              2.577604710126792,
              48.84290956809923
            ],
            [
              2.577840013079765,
              48.842181725794404
            ],
            [
              2.5805913206683897,
              48.84258406030031
            ],
            [
              2.58182129077926,
              48.83953549914935
            ],
            [
              2.582292343163175,
              48.83745134773798
            ],
            [
              2.582875974039382,
              48.83567392013191
            ],
            [
              2.583898205125962,
              48.835141241356126
            ],
            [
              2.5876037928154005,
              48.83445435773251
            ],
            [
              2.593142497298004,
              48.8336199271217
            ],
            [
              2.5957309412358427,
              48.8408158824264
            ],
            [
              2.5936874328638453,
              48.841174532280064
            ],
            [
              2.5922660361443377,
              48.84204182981864
            ],
            [
              2.590810531352588,
              48.84248737287203
            ],
            [
              2.5888472923316215,
              48.8427992506511
            ],
            [
              2.5870532980542578,
              48.842888358231306
            ],
            [
              2.584920814289717,
              48.8427992506511
            ],
            [
              2.583837647933308,
              48.84275469680159
            ],
            [
              2.583600705293236,
              48.84320023351336
            ],
            [
              2.580418904121359,
              48.842910635101305
            ],
            [
              2.580148112532271,
              48.84320023351336
            ],
            [
              2.577604710126792,
              48.84290956809923
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

L.geoJSON(citeDescartes).addTo(map);

//Marker add


var markerVideo = L.marker([48.886005, 2.374572]).addTo(map)
.bindPopup('<h1>Cours d’eau urbains et baignade en eau libre</h1><iframe src="https://player.vimeo.com/video/870659723?h=e47f679bc6" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.408809, 3.136201]).addTo(map)
.bindPopup('<h1>Territoire servis, territoires servants : face aux grands projets, quel avenir pour la Bassée ?</h1><iframe src="https://player.vimeo.com/video/910517811?h=d9e60603dc" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.778111, 2.528954]).addTo(map)
.bindPopup('<h1>Le Morbras, une petite rivière urbaine sous pression ou opportunité pour redécouvrir la nature en ville ?</h1><iframe src="https://player.vimeo.com/video/910353131?h=9700b3b9a8" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.899369, 2.434745]).addTo(map)
.bindPopup('<h1>Les jardins partagés : des nouvelles manières de produire la ville</h1><iframe src="https://player.vimeo.com/video/910385853?h=4c3aa747a5" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.995722, 2.647588]).addTo(map)
.bindPopup('<h1>Solutions fondées sur la nature pour la gestion durable des ruissellements de voirie</h1><iframe src="https://player.vimeo.com/video/910418837?h=7c1baf663e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.825693, 2.717854]).addTo(map)
.bindPopup('<h1>La nature des zones logistique : Ferrière-en-Brie (Seine-et-Marne)</h1><iframe src="https://player.vimeo.com/video/910368493?h=88c7953337" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.863325, 2.598717]).addTo(map)
.bindPopup('<h1>Plans d’eau urbains et accès à la nature : Le lac de Champs-sur-Marne</h1><iframe src="https://player.vimeo.com/video/870659723?h=e47f679bc6" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});



// Cité Descartes


var markerVideo = L.marker([48.841497, 2.587606]).addTo(map)
.bindPopup('<h1>Pipi, caca, matières fertiles ? Quand les citadins désertent le tout-à-l’égout</h1><iframe src="https://player.vimeo.com/video/910480155?h=80877d0394" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"vallowfullscreen></iframe>',  { 
  maxWidth : 640 
});


var markerVideo = L.marker([48.841776, 2.589672]).addTo(map)
// .bindPopup('<h1>Jardin et arbres de pluie pour la gestion &agrave; la source des eaux pluviales urbaines, les dispositifs de SenseCity</h1><iframe width="560" height="315" src="https://www.canal-u.tv/embed/132756" frameborder="0" allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture" encrypted-media" allowfullscreen></iframe>',  { 
//   maxWidth : 560 
// });
.bindPopup('<h1>Jardin et arbres de pluie pour la gestion &agrave; la source des eaux pluviales urbaines, les dispositifs de SenseCity</h1><iframe src="https://player.vimeo.com/video/910567830?h=7cd44aef18" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',  { 
  maxWidth : 640 
});


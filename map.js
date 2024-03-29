    // Map initialization 
    var map = L.map('map').setView([48.840265, 2.584583], 12);

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
    var markerRondPoint = L.marker([48.840265, 2.584583])
    .bindPopup('<h1>Rond-Point</h1><iframe width="300" height="300" src="https://www.youtube.com/embed/pag3B783kik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    .addTo(map);
    // .openPopup();

    var markerGare = L.marker([48.843005, 2.580443])
    .bindPopup('<h1>Future Gare</h1><iframe width="300" height="300" src="https://www.youtube.com/embed/-fOhgOvoEEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    .addTo(map);

    // var markerVideo = L.marker([48.886005, 2.374572])
    // .bindPopup('<h1>Cours d’eau urbains et baignade en eau libre</h1><iframe width="300" height="300" src="https://vimeo.com/870659723/0c95655e94?share=copy" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    // .addTo(map);

    var markerVideo = L.marker([48.886005, 2.374572])
    .bindPopup('<h1>Cours d’eau urbains et baignade en eau libre</h1><iframe width="640" height="360" title="vimeo-player" src="https://player.vimeo.com/video/870659723?h=e47f679bc6" frameborder="0" allowfullscreen></iframe>')
    // https://player.vimeo.com/video/713012499?h=e47f679bc6
    .addTo(map);

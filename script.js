var map = L.map('map').setView([14.590666, 120.985197], 18);

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
    console.log(data)
});

var geoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "way/4350721",
            "properties": {
                "bridge": "yes",
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "hgv": "no",
                "highway": "secondary",
                "lanes": "2",
                "layer": "1",
                "lit": "yes",
                "maxspeed": "60",
                "maxweight": "15",
                "name": "Ayala Boulevard",
                "oneway": "yes",
                "ref": "180",
                "surface": "concrete",
                "id": "way/4350721"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9866766,
                        14.5917792
                    ],
                    [
                        120.9861293,
                        14.5907001
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/4350722",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "oneway": "yes",
                "postal_code": "1005",
                "ref": "180",
                "surface": "concrete",
                "id": "way/4350722"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9867639,
                        14.5917377
                    ],
                    [
                        120.987047,
                        14.5922443
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/7286859",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "highway": "secondary",
                "lanes": "3",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "id": "way/7286859"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9859223,
                        14.5902903
                    ],
                    [
                        120.9860688,
                        14.5904427
                    ],
                    [
                        120.9861164,
                        14.5905005
                    ],
                    [
                        120.986164,
                        14.5905673
                    ],
                    [
                        120.9861935,
                        14.590614
                    ],
                    [
                        120.9862166,
                        14.5906586
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/12804722",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "destination:street": "Taft Avenue",
                "highway": "secondary",
                "lanes": "3",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "id": "way/12804722"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9861293,
                        14.5907001
                    ],
                    [
                        120.9861043,
                        14.5906647
                    ],
                    [
                        120.9860788,
                        14.5906335
                    ],
                    [
                        120.9860272,
                        14.5905842
                    ],
                    [
                        120.9858817,
                        14.5904525
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/28462811",
            "properties": {
                "highway": "residential",
                "lanes": "2",
                "lit": "yes",
                "motorcar": "yes",
                "name": "Mercedes Street",
                "oneway": "yes",
                "postal_code": "1000",
                "surface": "asphalt",
                "id": "way/28462811"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9852028,
                        14.5895765
                    ],
                    [
                        120.9852902,
                        14.5893572
                    ],
                    [
                        120.9854313,
                        14.5890034
                    ],
                    [
                        120.9857025,
                        14.5883233
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/28596739",
            "properties": {
                "bridge": "yes",
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "hgv": "no",
                "highway": "secondary",
                "lanes": "2",
                "layer": "1",
                "lit": "yes",
                "maxspeed": "60",
                "maxweight": "15",
                "name": "Ayala Boulevard",
                "oneway": "yes",
                "ref": "180",
                "surface": "concrete",
                "id": "way/28596739"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9862166,
                        14.5906586
                    ],
                    [
                        120.9864738,
                        14.5911658
                    ],
                    [
                        120.9867639,
                        14.5917377
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/28596743",
            "properties": {
                "bridge": "yes",
                "foot": "permissive",
                "highway": "service",
                "lane_markings": "no",
                "lanes": "2",
                "layer": "1",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/28596743"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9865614,
                        14.5911283
                    ],
                    [
                        120.9865163,
                        14.5911476
                    ],
                    [
                        120.9864738,
                        14.5911658
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/32003778",
            "properties": {
                "highway": "residential",
                "lanes": "2",
                "lit": "yes",
                "motorcar": "yes",
                "name": "Trinidad Street",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/32003778"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9862024,
                        14.5896437
                    ],
                    [
                        120.9858923,
                        14.5895388
                    ],
                    [
                        120.9852902,
                        14.5893572
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/89432771",
            "properties": {
                "covered": "yes",
                "highway": "service",
                "service": "driveway",
                "id": "way/89432771"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9841571,
                        14.5895007
                    ],
                    [
                        120.9839218,
                        14.5894047
                    ],
                    [
                        120.9822395,
                        14.5893697
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/151187602",
            "properties": {
                "highway": "service",
                "id": "way/151187602"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9902494,
                        14.590969
                    ],
                    [
                        120.9901891,
                        14.5909949
                    ],
                    [
                        120.9900744,
                        14.591021
                    ],
                    [
                        120.9897824,
                        14.5910548
                    ],
                    [
                        120.9894683,
                        14.5910954
                    ],
                    [
                        120.9892764,
                        14.591135
                    ],
                    [
                        120.988899,
                        14.5911552
                    ],
                    [
                        120.9887703,
                        14.5911578
                    ],
                    [
                        120.9884404,
                        14.5911474
                    ],
                    [
                        120.9880641,
                        14.591135
                    ],
                    [
                        120.9877698,
                        14.5911267
                    ],
                    [
                        120.9875357,
                        14.591122
                    ],
                    [
                        120.9873245,
                        14.5910857
                    ],
                    [
                        120.9872763,
                        14.5910076
                    ],
                    [
                        120.9872404,
                        14.590828
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/158627301",
            "properties": {
                "cycleway": "lane",
                "cycleway:lane": "advisory",
                "cycleway:separation:both": "solid_line",
                "destination:street:backward": "Taft Avenue",
                "goods": "designated",
                "hgv": "designated",
                "highway": "secondary",
                "lanes": "4",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "postal_code": "1000",
                "ref": "180",
                "surface": "asphalt",
                "id": "way/158627301"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9845996,
                        14.5887555
                    ],
                    [
                        120.9851307,
                        14.5894771
                    ],
                    [
                        120.9852028,
                        14.5895765
                    ],
                    [
                        120.985285,
                        14.5896874
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/163844191",
            "properties": {
                "highway": "tertiary",
                "lanes": "3",
                "maxspeed": "40",
                "name": "San Marcelino Street",
                "oneway": "yes",
                "postal_code": "1000",
                "source:maxspeed": "PH:urban",
                "id": "way/163844191"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9842455,
                        14.5895368
                    ],
                    [
                        120.9845996,
                        14.5887555
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/163844197",
            "properties": {
                "alt_name": "Natividad Almeda-Lopez Street",
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "name:etymology": "Natividad Almeda-López",
                "name:etymology:wikidata": "Q16008135",
                "oneway": "yes",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/163844197"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9854706,
                        14.5904195
                    ],
                    [
                        120.9854297,
                        14.5904288
                    ],
                    [
                        120.9853807,
                        14.5904322
                    ],
                    [
                        120.9846757,
                        14.5904262
                    ],
                    [
                        120.98458,
                        14.5904243
                    ],
                    [
                        120.9844359,
                        14.5904215
                    ],
                    [
                        120.984296,
                        14.5904187
                    ],
                    [
                        120.9841205,
                        14.590418
                    ],
                    [
                        120.9838343,
                        14.5904125
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/178853137",
            "properties": {
                "destination": "Malacañang",
                "highway": "secondary_link",
                "lanes": "1",
                "oneway": "yes",
                "surface": "asphalt",
                "id": "way/178853137"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.987047,
                        14.5922443
                    ],
                    [
                        120.9871078,
                        14.5922759
                    ],
                    [
                        120.987163,
                        14.5922962
                    ],
                    [
                        120.9872113,
                        14.5923094
                    ],
                    [
                        120.9872711,
                        14.5923194
                    ],
                    [
                        120.9873328,
                        14.5923246
                    ],
                    [
                        120.9874582,
                        14.5923296
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/179402963",
            "properties": {
                "highway": "service",
                "id": "way/179402963"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9873324,
                        14.5907605
                    ],
                    [
                        120.9873862,
                        14.5907938
                    ],
                    [
                        120.9874762,
                        14.5908267
                    ],
                    [
                        120.9875749,
                        14.5908296
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/179402964",
            "properties": {
                "highway": "service",
                "lane_markings": "no",
                "lanes": "2",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/179402964"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9875753,
                        14.5906494
                    ],
                    [
                        120.9874925,
                        14.5906505
                    ],
                    [
                        120.9873965,
                        14.5906842
                    ],
                    [
                        120.9873324,
                        14.5907605
                    ],
                    [
                        120.9872404,
                        14.590828
                    ],
                    [
                        120.9869617,
                        14.590928
                    ],
                    [
                        120.9865614,
                        14.5911283
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/179404122",
            "properties": {
                "highway": "service",
                "lanes": "1",
                "motorcar": "yes",
                "service": "alley",
                "surface": "concrete",
                "id": "way/179404122"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9848632,
                        14.5899273
                    ],
                    [
                        120.9851307,
                        14.5894771
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/179566245",
            "properties": {
                "highway": "footway",
                "id": "way/179566245"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9840774,
                        14.59515
                    ],
                    [
                        120.9840678,
                        14.5951426
                    ],
                    [
                        120.9838556,
                        14.5949807
                    ],
                    [
                        120.9835515,
                        14.5948454
                    ],
                    [
                        120.9833322,
                        14.5947199
                    ],
                    [
                        120.9835951,
                        14.5942427
                    ],
                    [
                        120.9839577,
                        14.5937617
                    ],
                    [
                        120.9845967,
                        14.5930951
                    ],
                    [
                        120.9851186,
                        14.5926223
                    ],
                    [
                        120.9852297,
                        14.5925208
                    ],
                    [
                        120.9858751,
                        14.5921155
                    ],
                    [
                        120.9860727,
                        14.5919918
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/603213627",
            "properties": {
                "alt_name": "Natividad Almeda-Lopez Street",
                "highway": "tertiary",
                "lanes": "4",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "name:etymology": "Natividad Almeda-López",
                "name:etymology:wikidata": "Q16008135",
                "oneway": "no",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/603213627"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9838343,
                        14.5904125
                    ],
                    [
                        120.9835972,
                        14.5904099
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/654628155",
            "properties": {
                "highway": "service",
                "id": "way/654628155"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9846757,
                        14.5904262
                    ],
                    [
                        120.9846997,
                        14.5910982
                    ],
                    [
                        120.9845856,
                        14.5912241
                    ],
                    [
                        120.9844802,
                        14.5913273
                    ],
                    [
                        120.9845862,
                        14.5914486
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/673298895",
            "properties": {
                "highway": "service",
                "id": "way/673298895"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9835972,
                        14.5904099
                    ],
                    [
                        120.9835938,
                        14.5905089
                    ],
                    [
                        120.983583,
                        14.590736
                    ],
                    [
                        120.9835829,
                        14.5907548
                    ],
                    [
                        120.9835852,
                        14.5915619
                    ],
                    [
                        120.9836378,
                        14.5917552
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/689607581",
            "properties": {
                "access": "private",
                "highway": "service",
                "id": "way/689607581"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9830728,
                        14.5917273
                    ],
                    [
                        120.9830543,
                        14.5913324
                    ],
                    [
                        120.9820236,
                        14.5913108
                    ],
                    [
                        120.9818809,
                        14.5913102
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/693154763",
            "properties": {
                "access": "private",
                "highway": "service",
                "id": "way/693154763"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9834596,
                        14.5923013
                    ],
                    [
                        120.983123,
                        14.5922701
                    ],
                    [
                        120.9828548,
                        14.592261
                    ],
                    [
                        120.9828401,
                        14.5922675
                    ],
                    [
                        120.9828307,
                        14.5922818
                    ],
                    [
                        120.982805,
                        14.5924188
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/693154767",
            "properties": {
                "access": "private",
                "highway": "service",
                "id": "way/693154767"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9832504,
                        14.5927451
                    ],
                    [
                        120.9833899,
                        14.59247
                    ],
                    [
                        120.9834022,
                        14.5924326
                    ],
                    [
                        120.9834596,
                        14.5923013
                    ],
                    [
                        120.9833926,
                        14.5921624
                    ],
                    [
                        120.9832853,
                        14.5921598
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/745787645",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "oneway": "yes",
                "postal_code": "1005",
                "ref": "180",
                "surface": "concrete",
                "id": "way/745787645"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9869688,
                        14.5922833
                    ],
                    [
                        120.9866766,
                        14.5917792
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/745787648",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "destination:lanes": "Quiapo;Carriedo|Santa Mesa;Nagtahan;Cubao",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "oneway": "yes",
                "postal_code": "1005",
                "ref": "180",
                "surface": "asphalt",
                "id": "way/745787648"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.987047,
                        14.5922443
                    ],
                    [
                        120.9871671,
                        14.5924683
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/769206217",
            "properties": {
                "alt_name": "Natividad Almeda-Lopez Street",
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "name:etymology": "Natividad Almeda-López",
                "name:etymology:wikidata": "Q16008135",
                "oneway": "yes",
                "postal_code": "1000",
                "source:maxspeed": "PH:urban",
                "surface": "concrete",
                "id": "way/769206217"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9820306,
                        14.5903948
                    ],
                    [
                        120.9820535,
                        14.5903787
                    ],
                    [
                        120.9820804,
                        14.5903675
                    ],
                    [
                        120.9822631,
                        14.5903671
                    ],
                    [
                        120.9831564,
                        14.5903783
                    ],
                    [
                        120.9832642,
                        14.5903796
                    ],
                    [
                        120.9835562,
                        14.5903866
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/787332303",
            "properties": {
                "highway": "tertiary",
                "lanes": "3",
                "maxspeed": "40",
                "name": "San Marcelino Street",
                "oneway": "yes",
                "id": "way/787332303"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9838343,
                        14.5904125
                    ],
                    [
                        120.9838602,
                        14.5903852
                    ],
                    [
                        120.9838837,
                        14.5903432
                    ],
                    [
                        120.9839053,
                        14.5903007
                    ],
                    [
                        120.9842455,
                        14.5895368
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/809323040",
            "properties": {
                "alt_name": "Natividad Almeda-Lopez Street",
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "name:etymology": "Natividad Almeda-López",
                "name:etymology:wikidata": "Q16008135",
                "oneway": "yes",
                "postal_code": "1000",
                "source:maxspeed": "PH:urban",
                "surface": "concrete",
                "id": "way/809323040"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9835972,
                        14.5904099
                    ],
                    [
                        120.9835752,
                        14.5904261
                    ],
                    [
                        120.9835537,
                        14.5904349
                    ],
                    [
                        120.9832612,
                        14.5904336
                    ],
                    [
                        120.9831538,
                        14.5904323
                    ],
                    [
                        120.9820784,
                        14.59042
                    ],
                    [
                        120.9820554,
                        14.590412
                    ],
                    [
                        120.9820306,
                        14.5903948
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467423",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "destination:lanes": "Taft Avenue;Rizal Park;Intramuros;Roxas Boulevard;US Embassy;Port Area|Taft Avenue;Rizal Park;Intramuros;Roxas Boulevard;US Embassy;Port Area|Manila City Hall;Taft Avenue;Rizal Park;Intramuros;Roxas Boulevard;US Embassy;Port Area|Manila City Hall",
                "destination:street": "Taft Avenue",
                "highway": "secondary",
                "lanes": "4",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "turn:lanes": "through|through|through;right|right",
                "id": "way/863467423"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9858817,
                        14.5904525
                    ],
                    [
                        120.9857217,
                        14.5903041
                    ],
                    [
                        120.9856518,
                        14.5902398
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467426",
            "properties": {
                "alt_name": "Natividad Almeda-Lopez Street",
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "name:etymology": "Natividad Almeda-López",
                "name:etymology:wikidata": "Q16008135",
                "oneway": "yes",
                "postal_code": "1000",
                "surface": "asphalt",
                "id": "way/863467426"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9856518,
                        14.5902398
                    ],
                    [
                        120.9855486,
                        14.5903655
                    ],
                    [
                        120.9855089,
                        14.5904012
                    ],
                    [
                        120.9854706,
                        14.5904195
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467427",
            "properties": {
                "destination": "San Miguel;Quiapo;Santa Mesa",
                "destination:ref": "180",
                "highway": "secondary_link",
                "lanes": "1",
                "maxspeed": "40",
                "oneway": "yes",
                "surface": "concrete",
                "id": "way/863467427"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9858405,
                        14.5900342
                    ],
                    [
                        120.9858508,
                        14.590076
                    ],
                    [
                        120.9858592,
                        14.5901206
                    ],
                    [
                        120.9858637,
                        14.5901482
                    ],
                    [
                        120.9858779,
                        14.5901975
                    ],
                    [
                        120.9858942,
                        14.5902313
                    ],
                    [
                        120.9859223,
                        14.5902903
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467428",
            "properties": {
                "highway": "secondary",
                "lanes": "2",
                "name": "D. Romualdez Sr. Street",
                "oneway": "yes",
                "ref": "182",
                "surface": "concrete",
                "id": "way/863467428"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9857468,
                        14.5901323
                    ],
                    [
                        120.9856518,
                        14.5902398
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467429",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "designation": "national_secondary_road",
                "destination": "Malacañan;Department of Budget;Santa Mesa/Cubao;Nagtahan;Quiapo",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "id": "way/863467429"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9857468,
                        14.5901323
                    ],
                    [
                        120.985819,
                        14.5901973
                    ],
                    [
                        120.9859223,
                        14.5902903
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467430",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "destination": "Malacañang;Quiapo;Carriedo;Santa Mesa;Nagtahan;Cubao",
                "goods": "designated",
                "hgv": "designated",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "turn:lanes": "through|through",
                "id": "way/863467430"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9856702,
                        14.5900659
                    ],
                    [
                        120.9857468,
                        14.5901323
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467432",
            "properties": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "footway": "crossing",
                "highway": "footway",
                "id": "way/863467432"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9856702,
                        14.5900659
                    ],
                    [
                        120.9855734,
                        14.5901678
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467433",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "destination:street": "Taft Avenue",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "asphalt",
                "id": "way/863467433"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9855734,
                        14.5901678
                    ],
                    [
                        120.9855006,
                        14.5900895
                    ],
                    [
                        120.9853599,
                        14.5899119
                    ],
                    [
                        120.9853203,
                        14.5898432
                    ],
                    [
                        120.9853009,
                        14.5897809
                    ],
                    [
                        120.985285,
                        14.5896874
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/863467434",
            "properties": {
                "destination": "Manila City Hall",
                "goods": "designated",
                "hgv": "designated",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "40",
                "name": "D. Romualdez Sr. Street",
                "old_name": "Calle de Marques de Comillas",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "182",
                "source:maxspeed": "PH:urban",
                "surface": "concrete",
                "id": "way/863467434"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9858405,
                        14.5900342
                    ],
                    [
                        120.9857468,
                        14.5901323
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901459674",
            "properties": {
                "highway": "service",
                "id": "way/901459674"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9864637,
                        14.5898834
                    ],
                    [
                        120.98663,
                        14.5899983
                    ],
                    [
                        120.9866186,
                        14.5900436
                    ],
                    [
                        120.9865972,
                        14.5900644
                    ],
                    [
                        120.986567,
                        14.5900858
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901459675",
            "properties": {
                "highway": "service",
                "id": "way/901459675"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9864235,
                        14.5899249
                    ],
                    [
                        120.986567,
                        14.5900858
                    ],
                    [
                        120.9865737,
                        14.5901481
                    ],
                    [
                        120.9865107,
                        14.5902532
                    ],
                    [
                        120.9864235,
                        14.5903389
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901459676",
            "properties": {
                "highway": "service",
                "service": "parking_aisle",
                "id": "way/901459676"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9863266,
                        14.5900041
                    ],
                    [
                        120.9865107,
                        14.5902532
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901459677",
            "properties": {
                "highway": "service",
                "id": "way/901459677"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9862032,
                        14.590105
                    ],
                    [
                        120.9864235,
                        14.5903389
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901459678",
            "properties": {
                "highway": "service",
                "id": "way/901459678"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9861618,
                        14.5897017
                    ],
                    [
                        120.9862679,
                        14.589764
                    ],
                    [
                        120.9863967,
                        14.5898379
                    ],
                    [
                        120.9864637,
                        14.5898834
                    ],
                    [
                        120.9864235,
                        14.5899249
                    ],
                    [
                        120.9863266,
                        14.5900041
                    ],
                    [
                        120.9862032,
                        14.590105
                    ],
                    [
                        120.9860949,
                        14.5901935
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/901576874",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "destination": "Malacañang;Quiapo;Carriedo;Santa Mesa;Nagtahan;Cubao",
                "goods": "designated",
                "hgv": "designated",
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "asphalt",
                "id": "way/901576874"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.985285,
                        14.5896874
                    ],
                    [
                        120.9853505,
                        14.5897459
                    ],
                    [
                        120.9853861,
                        14.5897879
                    ],
                    [
                        120.9854626,
                        14.5898698
                    ],
                    [
                        120.9855863,
                        14.5899904
                    ],
                    [
                        120.9856702,
                        14.5900659
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/916902959",
            "properties": {
                "cycleway:lane": "advisory",
                "cycleway:right": "lane",
                "cycleway:separation:both": "solid_line",
                "destination:street": "Taft Avenue",
                "highway": "secondary",
                "lanes": "3",
                "lit": "yes",
                "maxspeed": "60",
                "name": "Ayala Boulevard",
                "name:en": "Ayala Boulevard",
                "name:es": "Bulevar Ayala",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "180",
                "surface": "concrete",
                "turn:lanes": "none|none|merge_to_left",
                "id": "way/916902959"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9856518,
                        14.5902398
                    ],
                    [
                        120.9855734,
                        14.5901678
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/916902960",
            "properties": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "footway": "crossing",
                "highway": "footway",
                "id": "way/916902960"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9858637,
                        14.5901482
                    ],
                    [
                        120.985819,
                        14.5901973
                    ],
                    [
                        120.9857217,
                        14.5903041
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/930713223",
            "properties": {
                "highway": "service",
                "service": "driveway",
                "id": "way/930713223"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9842455,
                        14.5895368
                    ],
                    [
                        120.9841704,
                        14.5895063
                    ],
                    [
                        120.9841571,
                        14.5895007
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1065666350",
            "properties": {
                "highway": "residential",
                "lanes": "2",
                "lit": "yes",
                "motorcar": "yes",
                "name": "Sylvia Street",
                "postal_code": "1000",
                "surface": "concrete",
                "id": "way/1065666350"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9854313,
                        14.5890034
                    ],
                    [
                        120.9863385,
                        14.5892734
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1066220802",
            "properties": {
                "highway": "tertiary_link",
                "lanes": "2",
                "surface": "concrete",
                "id": "way/1066220802"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9832642,
                        14.5903796
                    ],
                    [
                        120.9832612,
                        14.5904336
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1066220803",
            "properties": {
                "highway": "service",
                "id": "way/1066220803"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9844359,
                        14.5904215
                    ],
                    [
                        120.9844427,
                        14.5901468
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1066220807",
            "properties": {
                "alt_name": "Romualdez Street",
                "goods": "designated",
                "hgv": "designated",
                "highway": "secondary",
                "lanes": "4",
                "lit": "yes",
                "maxspeed": "40",
                "name": "D. Romualdez Sr. Street",
                "old_name": "Calle de Marques de Comillas",
                "oneway": "yes",
                "postal_code": "1000",
                "ref": "182",
                "source:maxspeed": "PH:urban",
                "surface": "concrete",
                "id": "way/1066220807"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9868658,
                        14.5877363
                    ],
                    [
                        120.9867071,
                        14.5882382
                    ],
                    [
                        120.9865717,
                        14.5885955
                    ],
                    [
                        120.9863385,
                        14.5892734
                    ],
                    [
                        120.9862618,
                        14.5895106
                    ],
                    [
                        120.9862024,
                        14.5896437
                    ],
                    [
                        120.9861618,
                        14.5897017
                    ],
                    [
                        120.9861159,
                        14.5897518
                    ],
                    [
                        120.9859923,
                        14.5898785
                    ],
                    [
                        120.9858405,
                        14.5900342
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1079261137",
            "properties": {
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "40",
                "name": "Natividad Lopez Street",
                "oneway": "yes",
                "id": "way/1079261137"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9835562,
                        14.5903866
                    ],
                    [
                        120.9835787,
                        14.5903953
                    ],
                    [
                        120.9835972,
                        14.5904099
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1079261138",
            "properties": {
                "highway": "tertiary_link",
                "lanes": "2",
                "surface": "concrete",
                "id": "way/1079261138"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9831538,
                        14.5904323
                    ],
                    [
                        120.9831564,
                        14.5903783
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1085241286",
            "properties": {
                "highway": "service",
                "service": "driveway",
                "id": "way/1085241286"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.98458,
                        14.5904637
                    ],
                    [
                        120.98458,
                        14.5904243
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1085241661",
            "properties": {
                "highway": "service",
                "service": "driveway",
                "id": "way/1085241661"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9838342,
                        14.5904903
                    ],
                    [
                        120.9838343,
                        14.5904125
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1088737705",
            "properties": {
                "highway": "service",
                "id": "way/1088737705"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9862618,
                        14.5895106
                    ],
                    [
                        120.9863618,
                        14.5895693
                    ],
                    [
                        120.9868178,
                        14.5898788
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1092884206",
            "properties": {
                "bridge": "viaduct",
                "highway": "proposed",
                "lanes": "2",
                "layer": "2",
                "maxspeed": "80",
                "name": "Southern Access Link Expressway",
                "oneway": "yes",
                "proposed": "motorway_link",
                "short_name": "SALEX",
                "surface": "asphalt",
                "id": "way/1092884206"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9799549,
                        14.5766218
                    ],
                    [
                        120.980428,
                        14.5768373
                    ],
                    [
                        120.9807161,
                        14.5769984
                    ],
                    [
                        120.9809582,
                        14.5771421
                    ],
                    [
                        120.9812719,
                        14.5773218
                    ],
                    [
                        120.9818481,
                        14.5776441
                    ],
                    [
                        120.982313,
                        14.577882
                    ],
                    [
                        120.9827317,
                        14.5781224
                    ],
                    [
                        120.9833822,
                        14.578462
                    ],
                    [
                        120.984125,
                        14.5788561
                    ],
                    [
                        120.9851366,
                        14.5793816
                    ],
                    [
                        120.9855758,
                        14.5796059
                    ],
                    [
                        120.9862494,
                        14.5799554
                    ],
                    [
                        120.9870497,
                        14.5803321
                    ],
                    [
                        120.9878565,
                        14.5806977
                    ],
                    [
                        120.9879611,
                        14.5807637
                    ],
                    [
                        120.9880234,
                        14.5808338
                    ],
                    [
                        120.988076,
                        14.5809134
                    ],
                    [
                        120.9881037,
                        14.5809944
                    ],
                    [
                        120.9881099,
                        14.5810773
                    ],
                    [
                        120.9880843,
                        14.5811747
                    ],
                    [
                        120.988043,
                        14.5812721
                    ],
                    [
                        120.9879333,
                        14.5814872
                    ],
                    [
                        120.9876119,
                        14.5822245
                    ],
                    [
                        120.9872905,
                        14.5828888
                    ],
                    [
                        120.9868871,
                        14.5837005
                    ],
                    [
                        120.9864799,
                        14.5846027
                    ],
                    [
                        120.9861354,
                        14.5853983
                    ],
                    [
                        120.9857295,
                        14.5862956
                    ],
                    [
                        120.9853466,
                        14.587168
                    ],
                    [
                        120.9849624,
                        14.5880628
                    ],
                    [
                        120.9847844,
                        14.5884445
                    ],
                    [
                        120.9846961,
                        14.5886093
                    ],
                    [
                        120.9846743,
                        14.5886737
                    ],
                    [
                        120.9846717,
                        14.5887245
                    ],
                    [
                        120.9846986,
                        14.5888113
                    ],
                    [
                        120.9849048,
                        14.5891025
                    ],
                    [
                        120.9851609,
                        14.5894606
                    ],
                    [
                        120.985394,
                        14.5898374
                    ],
                    [
                        120.9859344,
                        14.5903839
                    ],
                    [
                        120.9861418,
                        14.5905896
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "id": "way/1092884208",
            "properties": {
                "bridge": "viaduct",
                "highway": "proposed",
                "lanes": "2",
                "layer": "2",
                "maxspeed": "80",
                "name": "Southern Access Link Expressway",
                "oneway": "yes",
                "proposed": "motorway",
                "short_name": "SALEX",
                "surface": "asphalt",
                "id": "way/1092884208"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        120.9861152,
                        14.5906055
                    ],
                    [
                        120.985368,
                        14.5898525
                    ],
                    [
                        120.985141,
                        14.5894847
                    ],
                    [
                        120.9848824,
                        14.589126
                    ],
                    [
                        120.9846643,
                        14.5888258
                    ],
                    [
                        120.9846352,
                        14.5887285
                    ],
                    [
                        120.9846368,
                        14.5886714
                    ],
                    [
                        120.9846558,
                        14.5885992
                    ],
                    [
                        120.9847383,
                        14.5884292
                    ],
                    [
                        120.984913,
                        14.5880555
                    ],
                    [
                        120.9852993,
                        14.5871566
                    ],
                    [
                        120.9856709,
                        14.5862935
                    ],
                    [
                        120.9860815,
                        14.5853947
                    ],
                    [
                        120.9868472,
                        14.5836835
                    ],
                    [
                        120.9872489,
                        14.5828758
                    ],
                    [
                        120.9875575,
                        14.5822183
                    ],
                    [
                        120.987865,
                        14.5814698
                    ],
                    [
                        120.9879716,
                        14.5812596
                    ],
                    [
                        120.9880099,
                        14.5811605
                    ],
                    [
                        120.9880347,
                        14.5810779
                    ],
                    [
                        120.9880306,
                        14.5810212
                    ],
                    [
                        120.9880095,
                        14.5809489
                    ],
                    [
                        120.9879068,
                        14.5808088
                    ],
                    [
                        120.9878262,
                        14.5807489
                    ],
                    [
                        120.9870218,
                        14.5803873
                    ],
                    [
                        120.9862198,
                        14.580019
                    ],
                    [
                        120.9855414,
                        14.5796597
                    ],
                    [
                        120.9840996,
                        14.5789038
                    ],
                    [
                        120.9833524,
                        14.5785128
                    ],
                    [
                        120.9827033,
                        14.5781716
                    ],
                    [
                        120.9822806,
                        14.5779388
                    ],
                    [
                        120.9818136,
                        14.5776993
                    ],
                    [
                        120.9806847,
                        14.5770598
                    ],
                    [
                        120.9803963,
                        14.5768959
                    ],
                    [
                        120.9799343,
                        14.5766814
                    ]
                ]
            }
        }
    ]
}


L.geoJSON(geoJSON).addTo(map)
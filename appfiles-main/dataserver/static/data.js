var APP_DATA = {
  "scenes": [
    {
      "id": "0-near-lift",
      "name": "Near Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.4766170040175233,
        "pitch": 0.033607270443603454,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.5284240829733413,
          "pitch": -0.2606171148150267,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.9475008645036311,
        "pitch": -0.1698419443322372,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.9989374060645098,
          "pitch": -0.17565011605612924,
          "rotation": 0,
          "target": "0-near-lift"
        },
        {
          "yaw": 1.6240216192191692,
          "pitch": 0.02327035540263367,
          "rotation": 0,
          "target": "2-near-cafteria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-near-cafteria",
      "name": "Near Cafteria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.8509474451187558,
        "pitch": 0.0342451316588388,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.7941895557005338,
          "pitch": -0.01169138157241889,
          "rotation": 0,
          "target": "3-ceo-room"
        },
        {
          "yaw": 1.3411208501650904,
          "pitch": 0.06252515883582532,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6466695648622824,
          "pitch": -0.22642533567409018,
          "title": "Cafteria",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-ceo-room",
      "name": "CEO Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.082125112514877,
        "pitch": 0.07184411996159312,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.0006343173512917133,
          "pitch": 0.12776022541827103,
          "rotation": 0,
          "target": "2-near-cafteria"
        },
        {
          "yaw": 2.409375347930691,
          "pitch": 0.1328232916411718,
          "rotation": 6.283185307179586,
          "target": "13-gnss-2"
        },
        {
          "yaw": 3.0656020014366945,
          "pitch": 0.034757636406459014,
          "rotation": 0,
          "target": "5-computational-lab-outside"
        },
        {
          "yaw": -3.0336947516719412,
          "pitch": 0.1792976472848462,
          "rotation": 1.5707963267948966,
          "target": "6-near-coffee-machine"
        },
        {
          "yaw": 1.1572016122139328,
          "pitch": 0.043326561110786486,
          "rotation": 0,
          "target": "0-meeting-room"
        },

      ],
      "infoHotspots": [
        {
          "yaw": 1.38063138172733,
          "pitch": 0.20896358481128097,
          "title": "Front Desk",
          "text": "Text"
        },
        {
          "yaw": 0.5553228658789848,
          "pitch": 0.04621804938408225,
          "title": "CEO Room",
          "text": "Text"
        },
        {
          "yaw": 2.812463625418925,
          "pitch": 0.088485004597743,
          "title": "Lidar Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-gnss-3",
      "name": "GNSS 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.10207829843071536,
        "pitch": 0.07079509138860018,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.9808870773474325,
          "pitch": -0.03823107781267154,
          "rotation": 0,
          "target": "3-ceo-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2002160734939373,
          "pitch": -0.19892606726859796,
          "title": "saranya",
          "text": "Text"
        },
        {
          "yaw": -1.8084333727413515,
          "pitch": -0.10377779990718139,
          "title": "sujanth sir",
          "text": "Text"
        },
        {
          "yaw": -2.514190024775978,
          "pitch": -0.16279216003056796,
          "title": "prasanna",
          "text": "Text"
        },
        {
          "yaw": -0.4302509340069456,
          "pitch": -0.12993742399506836,
          "title": "Device 1",
          "text": "Text"
        },
        {
          "yaw": 0.38547216958323105,
          "pitch": -0.20027853878831792,
          "title": "Device 2",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-computational-lab-outside",
      "name": "Computational Lab Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.718757659484095,
        "pitch": -0.11084651488796204,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.6062316455269405,
          "pitch": -0.031053235763963016,
          "rotation": 4.71238898038469,
          "target": "6-near-coffee-machine"
        },
        {
          "yaw": 1.8793701568289451,
          "pitch": -0.021477606879058087,
          "rotation": 0,
          "target": "3-ceo-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.131184263110267,
          "pitch": -0.18782998940253748,
          "title": "AI/ML",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-near-coffee-machine",
      "name": "Near Coffee Machine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 1.699945407232888,
        "pitch": -0.08375747014824775,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.8242483625794383,
          "pitch": -0.006097394302905457,
          "rotation": 0,
          "target": "3-ceo-room"
        },
        {
          "yaw": 0.3787694820835199,
          "pitch": -0.03568478595343905,
          "rotation": 1.5707963267948966,
          "target": "7-near-project-director-room"
        },
          {
          "yaw": 1.120945968475013,
          "pitch": -0.06666179376719938,
          "rotation": 0,
          "target": "0-geo-intel"
        }
      ],
      "infoHotspots": [

        {
          "yaw": -0.17783225648626022,
          "pitch": -0.11612616239833962,
          "title": "Admin Room",
          "text": "Text"
        },
        {
          "yaw": -0.810430399734603,
          "pitch": -0.19458222039247453,
          "title": "Meeting Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-near-project-director-room",
      "name": "Near Project Director Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 3.057536430889871,
        "pitch": -0.04330835254750376,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.724395682446021,
          "pitch": 0.0017235226186187447,
          "rotation": 0,
          "target": "6-near-coffee-machine"
        },
        {
          "yaw": 1.4281633850748356,
          "pitch": -0.06238206314342065,
          "rotation": 0,
          "target": "8-labs-outside"
        },
        {
          "yaw": 2.1355879959586144,
          "pitch": -0.1920957147996117,
          "rotation": 0,
          "target": "0-geo-intel-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9719785704276234,
          "pitch": -0.11347382209719292,
          "title": "P D Room",
          "text": "Text"
        },
        {
          "yaw": 2.254646488136096,
          "pitch": 0.10989569177959879,
          "title": "Front Desk",
          "text": "Text"
        },

      ]
    },
    {
      "id": "8-labs-outside",
      "name": "Labs Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.9216511768738087,
        "pitch": 0.01038088614201449,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.7616879176957045,
          "pitch": 0.055499351308556655,
          "rotation": 0,
          "target": "9-near-advisory-room"
        },
        {
          "yaw": 3.032481299395875,
          "pitch": -0.07720261395064654,
          "rotation": 1.5707963267948966,
          "target": "10-gis-lab"
        },
        {
          "yaw": -0.3808777124168099,
          "pitch": 0.008617663780954743,
          "rotation": 0,
          "target": "7-near-project-director-room"
        },
        {
          "yaw": 1.506418650369536,
          "pitch": -0.2099819882862537,
          "rotation": 0,
          "target": "0-cv-lab"
          

        },
        {
          "yaw": -2.2400077259434585,
          "pitch": -0.244356489725007,
          "rotation": 0,
          "target": "1-geo-intel-21"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "9-near-advisory-room",
      "name": "Near Advisory Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.6905784128939985,
        "pitch": -0.1105345925521597,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.5508618478706957,
          "pitch": -0.11022303707253123,
          "rotation": 4.71238898038469,
          "target": "10-gis-lab"
        },
        {
          "yaw": 0.14553734547720865,
          "pitch": -0.1454292043355654,
          "rotation": 1.5707963267948966,
          "target": "11-gym-outside"
        },
        {
          "yaw": 2.969052528127621,
          "pitch": -0.02862951127971236,
          "rotation": 0,
          "target": "8-labs-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8229595519950106,
          "pitch": -0.11093493095649265,
          "title": "Advisory",
          "text": "Text"
        },
        {
          "yaw": -0.6412503786025248,
          "pitch": -0.09101555640181047,
          "title": "Steps",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-gis-lab",
      "name": "GIS Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6721822376354183,
          "pitch": 0.09403808236458921,
          "rotation": 0,
          "target": "11-gym-outside"
        },
        {
          "yaw": -2.078527659303507,
          "pitch": 0.06803689645785838,
          "rotation": 0,
          "target": "8-labs-outside"
        }
      ],
      "infoHotspots": [
          {
          "yaw": 0.7896226340369079,
          "pitch": 0.08179694315372288,
          "title": "Manu Raj J H",
          "text": "Working On Operation Dronagiri"
        },
        {
          "yaw": 1.0797512828005225,
          "pitch": 0.09052835885396249,
          "title": "Dr. Abijith Devanantham",
          "text": "Technology Manager - GIS &amp; RS"
        },
        {
          "yaw": 1.5505044488962332,
          "pitch": 0.023560540349505388,
          "title": "Ayshika Savool",
          "text": "Senior GIS Engineer"
        },
        {
          "yaw": 1.9734401922604592,
          "pitch": 0.033349931638655406,
          "title": "P S JAYA SURYA",
          "text": "Developing Web and Mobile Applications ( Frontend + Backend)"
        },
        {
          "yaw": 2.334409955546062,
          "pitch": 0.013831674650237602,
          "title": "Contour",
          "text": "This Device is used for 3D Mapping &amp; Visualization."
        },
        {
          "yaw": 0.2303373092061154,
          "pitch": 0.05132500145357177,
          "title": "Lidar Data Analyst",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-gym-outside",
      "name": "GYM Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9042293907636054,
          "pitch": 0.047437695670204505,
          "rotation": 4.71238898038469,
          "target": "9-near-advisory-room"
        },
        {
          "yaw": -2.0837425294648533,
          "pitch": -0.1912573668386539,
          "rotation": 0,
          "target": "10-gis-lab"
        },
        {
          "yaw": 2.739625134269666,
          "pitch": -0.16945477071666026,
          "rotation": 0,
          "target": "12-gym"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22244097462594326,
          "pitch": -0.10138541683968683,
          "title": "Steps",
          "text": "Text"
        }
      ]
    },
    {
      "id": "12-gym",
      "name": "GYM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.496321995936169,
          "pitch": 0.011312272984632443,
          "rotation": 0,
          "target": "11-gym-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-gnss-2",
      "name": "GNSS 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.6435234223662896,
        "pitch": 0.015865579955287146,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.071822471851876,
          "pitch": 0.010499627773565834,
          "rotation": 0,
          "target": "3-ceo-room"
        },
        {
          "yaw": -0.2238606309519504,
          "pitch": -0.051077352057983916,
          "rotation": 0,
          "target": "4-gnss-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5498370386669151,
          "pitch": -0.18949035941825976,
          "title": "Prasanna",
          "text": "Text"
        },
        {
          "yaw": -0.8344821722069149,
          "pitch": -0.03154959991682915,
          "title": "sujanth",
          "text": "Text"
        },
        {
          "yaw": -0.6687312831556582,
          "pitch": -0.15439550051507744,
          "title": "saranya",
          "text": "Text"
        }
      ]
    },

    {
      "id": "0-meeting-room",
      "name": "Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.606157421486344,
          "pitch": 0.19712849177832048,
          "rotation": 0,
          "target": "3-ceo-room"
        }
      ],
      "infoHotspots": []
    },
        {
      "id": "0-geo-intel",
      "name": "geo intel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.9317354330198526,
        "pitch": -0.009074692655090644,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.860697792012971,
          "pitch": 0.06312711203903731,
          "rotation": 0,
          "target": "6-near-coffee-machine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-geo-intel-2",
      "name": "geo intel 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3346325112195068,
          "pitch": 0.007075986958025027,
          "rotation": 0,
          "target": "7-near-project-director-room"
        },
        {
          "yaw": 1.5263954924511607,
          "pitch": 0.4720954450540553,
          "rotation": 1.5707963267948966,
          "target": "1-geo-intel-21"
        },
        {
          "yaw": 0.9693123468541884,
          "pitch": 0.02074257665501733,
          "rotation": 4.71238898038469,
          "target": "8-labs-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-geo-intel-21",
      "name": "geo intel 2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.6650276942472786,
        "pitch": 0.24966810708639464,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.3648924615405518,
          "pitch": 0.0074459402121203055,
          "rotation": 0,
          "target": "8-labs-outside"
        },
        {
          "yaw": 1.940706932462458,
          "pitch": 0.610228619256068,
          "rotation": 4.71238898038469,
          "target": "0-geo-intel-2"
        },
        {
          "yaw": 1.0697790817301271,
          "pitch": 0.010156396466630468,
          "rotation": 5.497787143782138,
          "target": "7-near-project-director-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-cv-lab",
      "name": "cv lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.952122340344287,
        "pitch": 0.1690018220025138,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.9390683981420818,
          "pitch": 0.027835880108616706,
          "rotation": 0,
          "target": "8-labs-outside"
        },
        {
          "yaw": 0.3330118286500152,
          "pitch": 0.017264591779607485,
          "rotation": 0,
          "target": "9-near-advisory-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.334936313806173,
          "pitch": 0.02502651080745899,
          "title": "venkat sir",
          "text": "Text"
        },
        {
          "yaw": 2.6422574942763433,
          "pitch": 0.0006272196619683257,
          "title": "balaji",
          "text": "Text"
        },
        {
          "yaw": -2.771216508681725,
          "pitch": -0.011178552941345288,
          "title": "chandana",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

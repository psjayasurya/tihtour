var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
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
      "faceSize": 1632.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.114056543916515,
          "pitch": 0.05860360769600703,
          "rotation": 0,
          "target": "1-outside-1"
        },
        {
          "yaw": 0.713056543916515,
          "pitch": 0.05860360769600703,
          "rotation": 0,
          "target": "0-outdoor-2"
        }
        
        
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outside-1",
      "name": "Outside 1",
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
        "yaw": 1.4942135601445274,
        "pitch": 0.07656855256170658,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.0015040552595344536,
          "pitch": 0.23964805503890219,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 3.002578766644671,
          "pitch": 0.3193044418446753,
          "rotation": 0,
          "target": "2-outside-2"
        },
                {
            "yaw": 1.1572016122139328,
          "pitch": 0.043326561110786486,
          "rotation": 0,
          "target": "0-meeting-room"
        },
        {
          "yaw": 3.07770100659715,
          "pitch": 0.06001562011978301,
          "target": "0-outside-4"

        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5465820599470561,
          "pitch": 0.035156906566221835,
          "title": "CEO Room",
          "text": "Text"
        },
        {
          "yaw": 1.1872016122139328,
          "pitch": 0.053326561110786486,
          "title": "Meeting Room",
          "text": "Text"
        },
        {
          "yaw": 1.3885759571073244,
          "pitch": 0.06740931322618948,
          "title": "Front Desk",
          "text": "Text"
        },
        {
          "yaw": 2.396799497220959,
          "pitch": -0.015656185821494972,
          "title": "GNSS Lab",
          "text": "Text"
        },
        {
          "yaw": 2.810408580288544,
          "pitch": 0.072270981012581,
          "title": "Lidar Lab",
          "text": "Text"
        },

      ]
    },
    {
      "id": "2-outside-2",
      "name": "Outside 2",
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
        "yaw": -0.0038311042280163576,
        "pitch": -0.05476754305670539,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.2865616354190408,
          "pitch": 0.2148444710843762,
          "rotation": 0,
          "target": "1-outside-1"
        },
        {
          "yaw": -1.3991079585896653,
          "pitch": 0.16500425926759554,
          "rotation": 0,
          "target": "0-outside-5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8412830065311665,
          "pitch": 0.031844016680441456,
          "title": "Coffee Machine",
          "text": "Text"
        },
        {
          "yaw": -2.5844112918970428,
          "pitch": 0.055545064071997885,
          "title": "Meeting Room",
          "text": "Text"
        },
        {
          "yaw": -1.9915571142523678,
          "pitch": -0.07735179181264051,
          "title": "Admin Room",
          "text": "Text"
        },
        {
          "yaw": -0.6211856796079278,
          "pitch": -0.05289329815992083,
          "title": "Geo - Intel Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-outside-3",
      "name": "Outside 3",
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
      "faceSize": 1632.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5552550441681827,
          "pitch": 0.1691062601819091,
          "rotation": 0,
          "target": "2-outside-2"
        },
        {
          "yaw": -0.9503687364048297,
          "pitch": 0.08949779092950827,
          "rotation": 0,
          "target": "6-gis--remote-sensing-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.949717112050454,
          "pitch": -0.2380137399295137,
          "title": "GIS &amp; Remote Sensing Lab",
          "text": "Text"
        },
        {
          "yaw": 2.114032149148966,
          "pitch": -0.19080723392154297,
          "title": "CV Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-gym",
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
          "yaw": -1.50816569288763,
          "pitch": 0.03240833331289039,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9756927425557755,
          "pitch": -0.20986097657366543,
          "title": "GYM Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-outdoor",
      "name": "Outdoor",
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
          "yaw": 2.525325570669713,
          "pitch": 0.11991400642918748,
          "rotation": 0,
          "target": "4-gym"
        },
        {
          "yaw": -2.2941571676600514,
          "pitch": 0.25481459954581,
          "rotation": 0,
          "target": "6-gis--remote-sensing-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gis--remote-sensing-lab",
      "name": "GIS & Remote Sensing Lab",
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
        "yaw": 1.6444503937660642,
        "pitch": -0.05293724307282588,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.6681993021118959,
          "pitch": 0.1762812519337995,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": -2.082065467817481,
          "pitch": 0.12376065014621496,
          "rotation": 0,
          "target": "3-outside-3"
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
          "target": "1-outside-1"
        }
      ],
      "infoHotspots": []
    },



        {
      "id": "0-outside-4",
      "name": "Outside 4",
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
          "yaw": -0.24725851139000987,
          "pitch": 0.265634990272801,
          "rotation": 10.995574287564278,
          "target": "2-outside-2"
        },
        {
          "yaw": -0.06078372997930437,
          "pitch": 0.12246724720827373,
          "rotation": 1.5707963267948966,
          "target": "1-outside-1"
        },
        {
          "yaw": -0.055840200074516844,
          "pitch": -0.05594167488138169,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9739324766005311,
          "pitch": 0.1277813189213859,
          "title": "Computational Lab",
          "text": "Text"
        },
        {
          "yaw": -2.30578561063947,
          "pitch": -0.4031975306547171,
          "title": "Ladies Washroom",
          "text": "Text"
        },
        {
          "yaw": -0.6334549603483879,
          "pitch": -0.33656922477951134,
          "title": "Gents Washroom",
          "text": "Text"
        }
      ]
    },





     {
      "id": "0-outside-5",
      "name": "Outside 5",
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
          "yaw": 1.587989638794026,
          "pitch": 0.24255676323423003,
          "rotation": 4.71238898038469,
          "target": "2-outside-2"
        },
        {
          "yaw": -1.592556653935688,
          "pitch": 0.24278359963191498,
          "rotation": 0,
          "target": "3-outside-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2290539401068994,
          "pitch": 0.07178484980483191,
          "title": "P D Room",
          "text": "Text"
        },
        {
          "yaw": -0.4704947971742808,
          "pitch": 0.1711949669317967,
          "title": "Front desk",
          "text": "Text"
        }
      ]
     },

     {
      "id": "0-steps",
      "name": "steps",
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
          "yaw": 2.2265953413103414,
          "pitch": 0.27459108214692485,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.3755893299144102,
          "pitch": 0.456225667939016,
          "rotation": 0,
          "target": "0-steps"
        }
      ],
      "infoHotspots": []
    },


        {
      "id": "0-outdoor-2",
      "name": "Outdoor 2",
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
        "yaw": -0.1721793482865852,
        "pitch": -0.056343749648307906,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.588103923035244,
          "pitch": 0.09930776629337146,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
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

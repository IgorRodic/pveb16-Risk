var map;
var teritories;
const TERITORIES_CNT = 42;
const PLAYERS_CNT = 2;
var tanksTeritories = Array(TERITORIES_CNT).fill(1); 
var playersColor = ["blue","red","green","yellow","violet","orange"];
var playersList = [];

var isStarted = false;
var isInitialized = false;

var CURRENT_PLAYER;
var CURRENT_PHASE; 
var tanksCnt = {
  "2" : 10,
  "3" : 14,
  "4" : 11,
  "5" : 9,
  "6" : 7
}

var connectorData = [    
    {  points: [   -7.158523106832249   ,  70.02038088034011 ,    -2.77566619288671 ,   69.86196436537823 ]},   
    {  points: [   -7.911001552901207   ,  64.67382350037644 ,    -2.439031098592698,  68.20519164640183 ]},   
    {  points: [   -0.769057003369475   ,  62.23156889471402 ,    -0.663445993394884,  67.11607810603887 ]},   
    {  points: [   -4.623858867442038   ,  56.76619912852897 ,    -11.38296350581588,  61.17545879496815 ]},   
    {  points: [    5.679815293204016   ,  53.690278463019006 ,    1.514781087331075,   56.62098398981391  ]},   
    {  points: [   21.44885922003515   ,   77.18212749424214 , 29.105657443193028 ,   71.9147783717594 ]},   
    {  points: [  20.498360130263816   ,   66.0137631894291  ,    18.333334425784695 ,  73.08970085772671 ]},   
    {  points: [   8.900951097429031   ,   15.63731143154902  ,    9.67323160786823 ,   17.333688279265893 ]},   
    {  points: [    -1.161797946712465   , 16.911244239367527 ,    -7.940704649456539 ,  20.47231548194827 ]},   
    {  points: [    -13.930829121452891   ,13.551493984550849 ,    -12.845015925151626 ,17.868344017262267 ]},   
    {  points: [    -3.18160851247654   ,  -26.13514335746349  ,  3.980138101425415 , -13.310006333674092  ]},   
    {  points: [   24.13203894220208   ,   9.475569068343914 , 23.735997654797362 ,  9.865009667625218  ]},   
    {  points: [   21.35479941427657   ,   5.845190600467433 , 18.902643776429034 ,   5.78908475141843  ]},   
    {  points: [  24.23930012420758   ,    0.98048345351283 ,    21.67823313232375 ,   -0.78850096356157 ]},   
    {  points: [    21.387802854893618   , -7.613612483169515  ,    20.252484497666764 , -7.481598720701276  ]},   
    {  points: [    30.523155217695756   , -8.438698498596018  ,    29.480246494196663 , -8.267080607387308  ]},   
    {  points: [    33.401055239503364   , -6.484894814066079  ,    31.948903852352736 , -3.923827822182249  ]},   
    {  points: [     43.2888860483744   ,  -14.445324690900865 ,    43.97535761320925 ,  1.105896527857645 ]},   
    {  points: [    36.49677796938353   ,  -2.432072306291158 ,    32.78059055590261 ,  -3.171349376113294 ]},   
    {  points: [    36.93242338552872   ,  -9.065763870320144 ,    41.88293947808766 ,  -14.43872400277745 ]},   
    {  points: [    36.091928856382424   , -7.351781733558264  ,    37.0558572896513 ,   -3.191669547871557 ]},     
    {  points: [    54.40656908849134   ,  -45.74403656914904 ,    50.944036690038686 , -50.39879624032898  ]},   
    {  points: [    34.8743350459379   ,   -40.93707767166348 ,    40.25204104206949 , -34.443244015957404 ]},   
    {  points: [    37.05110106382979   ,  -58.40035348162473 ,    52.45334568423598 ,  -38.81104472920696 ]},
    {  points: [    36.18602339078117   ,   -94.52033621772085,    36.26450660479788, -98.86307405997894 ]},   
    {  points: [    33.890389380790543   ,  84.34944879419865 ,    33.988493398311443 ,  99.12391383284474 ]},
    {  points: [    46.263910481140776   , -20.61848095986404  ,    43.422858256769366 , -16.35690262330693  ]}   
];

var tanksMarkerData = [
    {lat: -15.5, long: 62 , "id": "AU.WA" },
    {lat: -15, long: 75 , "id": "AU.EA" },
    {lat: -12, long: 20 , "id": "AF.MA" },
    {lat: 14, long: 6 , "id": "AF.EG" },
    {lat: 6, long: 12 , "id": "AF.EA" },
    {lat: -14, long: 7 , "id": "AF.SA" },
    {lat: -1, long: 6 , "id": "AF.CO" },
    {lat: 11, long: -7 , "id": "AF.NA" },
    {lat: 37, long: 37 , "id": "AS.UR" },
    {lat: 40, long: 50 , "id": "AS.SI" },
    {lat: 45, long: 67 , "id": "AS.YA" },
    {lat: 42, long: 84 , "id": "AS.KA" },
    {lat: 36, long: 62 , "id": "AS.IR" },
    {lat: 20, long: 49 , "id": "AS.CH" },
    {lat: 26, long: 63 , "id": "AS.MO" },
    {lat: 8.5, long: 51 , "id": "AS.SA" },
    {lat: 26, long: 30 , "id": "AS.AF" },
    {lat: 13, long: 37 , "id": "AS.IN" },
    {lat: 19, long: 18 , "id": "AS.ME" },
    {lat: 32.5, long: -8 , "id": "EU.GB" },
    {lat: 42, long: -16.8 , "id": "EU.IC" },
    {lat: 41.5, long: 2.5 , "id": "EU.SC" },
    {lat: 25.5, long: -5.5 , "id": "EU.WE" },
    {lat: 24.8, long: 6.3 , "id": "EU.SE" },
    {lat: 35, long: 16.5 , "id": "EU.RU" },
    {lat: 31, long: 1.5 , "id": "EU.CE" },
    {lat: 19, long: 76 , "id": "AS.JA" },
    {lat: -3.3, long: 73 , "id": "AU.NG" },
    {lat: 32, long: -46 , "id": "NA.QU" },
    {lat: 33, long: -59 , "id": "NA.ON" },
    {lat: 12, long: -63 , "id": "NA.CA" }, 
    {lat: 23, long: -68 , "id": "NA.WUS" },
    {lat: 23, long: -56 , "id": "NA.EUS" },
    {lat: 33, long: -72 , "id": "NA.ALB" },
    {lat: 53, long: -29 , "id": "NA.GR" },
    {lat: 43, long: -90 , "id": "NA.ALA" },
    {lat: 42, long: -72 , "id": "NA.NT" },
    {lat: -0.4, long: 57.4 , "id": "AU.IN" },
    {lat: -22, long: -44 , "id": "SA.AR" },
    {lat: -6, long: -35 , "id": "SA.BR" },
    {lat: -11, long: -42 , "id": "SA.PE" },
    {lat: 2.7, long: -44.7 , "id": "SA.VE" }
];

var teritoriesData = [
            {"id": "AU.WA", "value": 100},
            {"id": "AU.EA", "value": 100},
            {"id": "AF.MA", "value": 200},
            {"id": "AF.EG", "value": 200},
            {"id": "AF.EA", "value": 200},
            {"id": "AF.SA", "value": 200},
            {"id": "AF.CO", "value": 200},
            {"id": "AF.NA", "value": 200},
            {"id": "AS.UR", "value": 300},
            {"id": "AS.SI", "value": 300},
            {"id": "AS.YA", "value": 300},
            {"id": "AS.KA", "value": 300},
            {"id": "AS.IR", "value": 300},
            {"id": "AS.CH", "value": 300},
            {"id": "AS.MO", "value": 300},
            {"id": "AS.SA", "value": 300},
            {"id": "AS.AF", "value": 300},
            {"id": "AS.IN", "value": 300},
            {"id": "AS.ME", "value": 300},
            {"id": "EU.GB", "value": 400},
            {"id": "EU.IC", "value": 400},
            {"id": "EU.SC", "value": 400},
            {"id": "EU.WE", "value": 400},
            {"id": "EU.SE", "value": 400},
            {"id": "EU.RU", "value": 400},
            {"id": "EU.CE", "value": 400},
            {"id": "AS.JA", "value": 300},
            {"id": "AU.NG", "value": 100},
            {"id": "NA.QU", "value": 500},
            {"id": "NA.ON", "value": 500},
            {"id": "NA.CA", "value": 500},
            {"id": "NA.WUS", "value": 500},
            {"id": "NA.EUS", "value": 500},
            {"id": "NA.ALB", "value": 500},
            {"id": "NA.GR", "value": 500},
            {"id": "NA.ALA", "value": 500},
            {"id": "NA.NT", "value": 500},
            {"id": "AU.IN", "value": 100},
            {"id": "SA.AR", "value": 600},
            {"id": "SA.BR", "value": 600},
            {"id": "SA.PE", "value": 600},
            {"id": "SA.VE", "value": 600}
 ];




var teritoriesColor = [
    {less:100,color:'#aa7799'},
    {from:100, to:200, color:'#eca367'},
    {from:200, to:300, color:'#f4f9ab'},
    {from:300, to:400, color:'#f0696f'},
    {from:400, to:500, color:'#87e3f0'},
    {greater:500, color:'#b5f087'}
];

var tanksColor = {
    "default" : {
        src : "./images/tank.png",
        mode : "fitMax"
    },
    "orange" : {
        src : "./images/tank_orange.png",
        mode : "fitMax"
    },
    "blue" : {
        src : "./images/tank_blue.png",
        mode : "fitMax"
    },
    "green" : {
        src : "./images/tank_green.png",
        mode : "fitMax"
    },
    "red" : {
        src : "./images/tank_red.png",
        mode : "fitMax"
    },
    "yellow" : {
        src : "./images/tank_yellow.png",
        mode : "fitMax"
    },
    "violet" : {
        src : "./images/tank_violet.png",
        mode : "fitMax"
    }
}

var idIndexMap = {
    "AU.WA" : 0, 
    "AU.EA" : 1, 
    "AF.MA" : 2, 
    "AF.EG" : 3, 
    "AF.EA" : 4, 
    "AF.SA" : 5, 
    "AF.CO" : 6, 
    "AF.NA" : 7, 
    "AS.UR" : 8, 
    "AS.SI" : 9, 
    "AS.YA" : 10, 
    "AS.KA" : 11, 
    "AS.IR" : 12, 
    "AS.CH" : 13, 
    "AS.MO" : 14, 
    "AS.SA" : 15, 
    "AS.AF" : 16, 
    "AS.IN" : 17, 
    "AS.ME" : 18, 
    "EU.GB" : 19, 
    "EU.IC" : 20, 
    "EU.SC" : 21, 
    "EU.WE" : 22, 
    "EU.SE" : 23, 
    "EU.RU" : 24, 
    "EU.CE" : 25, 
    "AS.JA" : 26, 
    "AU.NG" : 27, 
    "NA.QU" : 28, 
    "NA.ON" : 29, 
    "NA.CA" : 30, 
    "NA.WUS" : 31,
    "NA.EUS" : 32,
    "NA.ALB" : 33,
    "NA.GR" : 34, 
    "NA.ALA" : 35,
    "NA.NT" : 36, 
    "AU.IN" : 37, 
    "SA.AR" : 38, 
    "SA.BR" : 39, 
    "SA.PE" : 40, 
    "SA.VE" : 41
}

var indexArray = ["AU.WA", "AU.EA", "AF.MA", "AF.EG", "AF.EA", "AF.SA", "AF.CO", "AF.NA", "AS.UR", 
    "AS.SI", "AS.YA", "AS.KA", "AS.IR", "AS.CH", "AS.MO", "AS.SA", "AS.AF", "AS.IN", "AS.ME", "EU.GB", 
    "EU.IC", "EU.SC", "EU.WE", "EU.SE", "EU.RU", "EU.CE", "AS.JA", "AU.NG", "NA.QU", "NA.ON", "NA.CA", 
    "NA.WUS", "NA.EUS", "NA.ALB", "NA.GR", "NA.ALA", "NA.NT", "AU.IN", "SA.AR", "SA.BR", "SA.PE", "SA.VE"]


var neighborsMap = {
    "AU.WA" : ["AU.EA","AU.IN","AU.NG"], 
    "AU.EA" : ["AU.WA","AU.NG"], 
    "AF.MA" : ["AF.SA","AF.EA"], 
    "AF.EG" : ["AF.NA","AF.EA","EU.SE","AS.ME"], 
    "AF.EA" : ["AF.NA","AF.EG","AF.CO","AF.MA","AF.SA","AS.ME"], 
    "AF.SA" : ["AF.CO","AF.MA","AF.EA"], 
    "AF.CO" : ["AF.NA","AF.EA","AF.SA"], 
    "AF.NA" : ["AF.EA","AF.EG","AF.CO","EU.WE","EU.SE","SA.BR"], 
    "AS.UR" : ["AS.AF","AS.CH","AS.SI","EU.RU"], 
    "AS.SI" : ["AS.UR","AS.CH","AS.YA","AS.IR","AS.MO"], 
    "AS.YA" : ["AS.SI","AS.KA","AS.IR"], 
    "AS.KA" : ["NA.ALA","AS.YA","AS.IR","AS.MO","AS.JA"], 
    "AS.IR" : ["AS.YA","AS.KA","AS.MO","AS.SI"], 
    "AS.CH" : ["AS.MO","AS.SI","AS.AF","AS.UR","AS.IN","AS.SA"], 
    "AS.MO" : ["AS.KA","AS.IR","AS.SI","AS.JA","AS.CH"], 
    "AS.SA" : ["AS.IN","AS.CH","AU.IN"], 
    "AS.AF" : ["AS.UR","AS.ME","AS.IN","AS.CH"], 
    "AS.IN" : ["AS.ME","AS.AF","AS.CH","AS.SA"], 
    "AS.ME" : ["AS.AF","AS.IN","AF.EA","AF.EG","EU.RU","EU.SE"], 
    "EU.GB" : ["EU.IC","EU.WE","EU.CE","EU.SC"], 
    "EU.IC" : ["EU.GB","EU.SC","NA.GR"], 
    "EU.SC" : ["EU.IC","EU.GB","EU.CE","EU.RU"], 
    "EU.WE" : ["EU.GB","EU.CE","EU.SE","AF.NA"], 
    "EU.SE" : ["AF.NA","AF.EG","EU.WE","EU.CE","EU.RU","AS.ME"], 
    "EU.RU" : ["EU.SC","EU.CE","EU.SE","AS.UR","AS.AF","AS.ME"], 
    "EU.CE" : ["EU.GB","EU.SC","EU.WE","EU.SE","EU.RU"], 
    "AS.JA" : ["AS.KA","AS.MO"], 
    "AU.NG" : ["AU.IN","AU.WA","AU.EA"], 
    "NA.QU" : ["NA.GR","NA.ON","NA.EUS"], 
    "NA.ON" : ["NA.NT","NA.ALB","NA.EUS","NA.WUS","NA.QU","NA.GR"], 
    "NA.CA" : ["NA.EUS","NA.WUS","SA.VE"], 
    "NA.WUS" : ["NA.CE","NA.EUS","NA.ALB","NA.ON"],
    "NA.EUS" : ["NA.CE","NA.WUS","NA.ON","NA.QU"],
    "NA.ALB" : ["NA.ALA","NA.WUS","NA.ON","NA.NT"],
    "NA.GR" : ["NA.NT","NA.ON","NA.QU","EU.IC"], 
    "NA.ALA" : ["AS.KA","NA.NT","NA.ALB"],
    "NA.NT" : ["NA.ALA","NA.ALB","NA.ON","NA.GR"], 
    "AU.IN" : ["AU.WA","AU.NG","AS.SA"], 
    "SA.AR" : ["SA.BR","SA.PE"], 
    "SA.BR" : ["SA.AR","SA.PE","SA.VE","AF.NA"], 
    "SA.PE" : ["SA.BR","SA.AR","SA.VE"],
    "SA.VE" : ["SA.BR","SA.PE","NA.CE"]
}



anychart.onDocumentReady(function() {   
            var data = anychart.data.set([    
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

            ]);

            map = anychart.map();

            var series_connector = map.connector(data);
            series_connector.color("#c9c5c2");
            series_connector.curvature(0.15);
            series_connector.markers({ size: 0});
            series_connector.hoverMarkers({size: 0});
            series_connector.selectMarkers({size: 0});

            var dataSet_lat_long = anychart.data.set([
              {lat: 11, long: -7, name: 1, value: 321},
            ]);
            tanks_marker = map.marker(dataSet_lat_long);
            //tanks_marker.labels(false);

            var tank_img_default = "tank.png";
            var tank_img_orange = "tank_orange.png";
            var tank_img_blue = "tank_blue.png";
            var tank_img_green = "tank_green.png";
            var tank_img_red = "tank_red.png";
            var tank_img_yellow = "tank_yellow.png";
            var tank_img_violet = "tank_violet.png";

            var img = {
                src : tank_img_default,
                mode : "fitMax"
            }
            tanks_marker.stroke(null);
            tanks_marker.type("square");
            tanks_marker.fill(img);
            tanks_marker.hoverFill(img);
            tanks_marker.size(20);
            tanks_marker.hoverSize(20);
            tanks_marker.selectSize(20);
            
            // series_id.labels().textFormatter(function(e){
            //     return this.name;
            //  });

            var btn = document.getElementById("click");
            btn.addEventListener("click", function(){
                dataSet_lat_long.a[0].name ++;
                tanks_marker.data({});
                tanks_marker = map.marker(dataSet_lat_long);
                tanks_marker.stroke(null);
                tanks_marker.type("square");
                tanks_marker.fill(img);
                tanks_marker.hoverFill(img);
                tanks_marker.size(20);
                tanks_marker.hoverSize(20);
                tanks_marker.selectSize(20);
                tanks_marker.interactivity().selectionMode("none");

            });

            var connector_tooltip = series_connector.tooltip();
            connector_tooltip.enabled(false);

            var dataSet = anychart.data.set([
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
            ]);

            var series = map.choropleth(dataSet);
            //var series_lat_long = map.marker(dataSet_lat_long);

            series.geoIdField('id');
            //series.colorScale(anychart.scales.linearColor('#deebf7', '#deebfb'));
            series.hoverFill('#403c39');
            series.stroke("1.5 white 0");
            series.colorScale(anychart.scales.ordinalColor([
                {less:100,color:'#aa7799'},
                {from:100, to:200, color:'#eca367'},
                {from:200, to:300, color:'#f4f9ab'},
                {from:300, to:400, color:'#f0696f'},
                {from:400, to:500, color:'#87e3f0'},
                {greater:500, color:'#b5f087'}
            ]));
    
            series.labels(false);

            map.geoData(anychart.maps['risk_map']);

            map.container('container');
            map.draw();
        });
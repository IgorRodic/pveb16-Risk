anychart.onDocumentReady(function() {
    //pravljenje mape
    var map = anychart.map();

    //iskljucivanje zoom-a
    map.zoom = function(){};
    
    //postavljanje linija
    var connData = anychart.data.set(connectorData);
    var connectors = map.connector(connData);
    connectors.color("#c9c5c2");
    connectors.curvature(0.15);
    connectors.markers({ size: 0});
    connectors.hoverMarkers({size: 0});
    connectors.selectionMode('none'); 
    connectors.tooltip().enabled(false);

    // var tanksData = anychart.data.set(tanksMarkerData);
    // var tanksMarkers = map.marker(tanksData);
    // console.log(tanksMarkers);
    // console.log(tanksData);


    // tanksMarkers.stroke(null);
    // tanksMarkers.type("square");
    // tanksMarkers.fill(tanksColor["default"]);
    // tanksMarkers.hoverFill(tanksColor["default"]);
    // tanksMarkers.size(12);
    // tanksMarkers.hoverSize(12);
    // tanksMarkers.selectionMode('none');
    

    // var markersTooltip = tanksMarkers.tooltip();
    // markersTooltip.title(false);
    // markersTooltip.separator(false);
    // markersTooltip.fontSize(14);
    // markersTooltip.textFormatter(function(e){
    //     return this.name;
    // });

    
    // tanksMarkers.labels().textFormatter(function(e){
    //     let id = idIndexMap[this.id]
    //     return tanksTeritories[id];
    // });

    // var btn = document.getElementById("click");
    // btn.addEventListener("click", function(){
    //     tanksData.a[0].name ++;
    //     tanksMarkers.data({});
    //     tanksMarkers = map.marker(tanksData);
    //     tanksMarkers.stroke(null);
    //     tanksMarkers.type("square");
    //     tanksMarkers.fill(img);
    //     tanksMarkers.hoverFill(img);
    //     tanksMarkers.size(12);
    //     tanksMarkers.hoverSize(12);
    //     tanksMarkers.selectionMode('none');
    //     tanksMarkers.tooltip().enabled(false);

    // });

    // tanksMarkers.listen("mouseOver", function(e){  
    //     if(e.markerIndex == 0 || e.markerIndex)
    //         teritories.hover(e.markerIndex);
    // });
	// tanksMarkers.labels().listen("mouseOver", function(e){  
    //     if(e.labelIndex == 0 || e.labelIndex)
    //         teritories.hover(e.labelIndex);
    // });

    var td = anychart.data.set(teritoriesData);
    var teritories = map.choropleth(td);
    teritories.geoIdField('id');
    teritories.hoverFill('#403c39');
    teritories.stroke("1.5 white 0");


    teritories.colorScale(anychart.scales.ordinalColor(teritoriesColor));
    teritories.labels(false);
    tooltipTeritories = teritories.tooltip();
    tooltipTeritories.title(false);
    tooltipTeritories.separator(false);
    tooltipTeritories.fontSize(14);
    tooltipTeritories.textFormatter(function(e){
        return this.name;
    });

     teritories.listen("dblСlick",function(event){
        console.log("double click");
        console.log(event)
    });


    var player1 = new Player("red");
    player1.setTeritories([5,12,40]);
    player1.setMarkers(map,teritories);

    var player2 = new Player("blue");
    player2.setTeritories([10,24,33]);
    player2.setMarkers(map,teritories);

    var mode = "attack";
    teritories.listen("click",function(e){
        switch (mode) {
            case "attack":
                 ++tanksTeritories[e.pointIndex];
                 tanksMarkers.labels().textFormatter(function(e){
                    let id = idIndexMap[this.id]
                    return tanksTeritories[id];
                });

                tanksMarkers.listen("mouseOver", function(e){  
                if(e.markerIndex == 0 || e.markerIndex)
                    teritories.hover(e.markerIndex);
                });
                tanksMarkers.labels().listen("mouseOver", function(e){  
                    if(e.labelIndex == 0 || e.labelIndex)
                        teritories.hover(e.labelIndex);
                });
                break;
        
            default:
                break;
        }
    });


    map.geoData(anychart.maps['risk_map']);
    map.container('container');
       
    map.draw();
});
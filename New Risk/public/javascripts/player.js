var Player = function (name,color) {
    this.name = name;   
    this.color = color;
    // tenkovi na teritorijama
    this.tanksTeritories = [];
    //teritorije koje poseduje
    this.teritories = [];
    // podaci za pravljenje markera
    this.sourceData = [];
    this.tanksData = {};

    this.tanksMarkers = {};
    this.markersTooltip = {};
    this.tanksImg = tanksColor[color];
    this.isSet = false;

    var _this = this;

    this.setMarkers = function (map, teritories) {
        
        if(this.isSet)
            this.tanksMarkers.data({});

        this.tanksData = anychart.data.set(this.sourceData);
        this.isSet = true;
        
        this.tanksMarkers = map.marker(this.tanksData);
        this.tanksMarkers.stroke(null);
        this.tanksMarkers.type("square");
        this.tanksMarkers.fill(this.tanksImg);
        this.tanksMarkers.hoverFill(this.tanksImg);
        this.tanksMarkers.size(15);
        this.tanksMarkers.hoverSize(15);
        this.tanksMarkers.selectionMode('none');

        this.markersTooltip = this.tanksMarkers.tooltip();
        this.markersTooltip.title(false);
        this.markersTooltip.separator(false);
        this.markersTooltip.fontSize(14);
        this.markersTooltip.textFormatter(function(e){
            return this.name;
        });

        this.tanksMarkers.listen("mouseOver", function(e){  
            if(e.markerIndex == 0 || e.markerIndex)
                teritories.hover(_this.teritories[e.markerIndex]);
        });

        this.tanksMarkers.labels().listen("mouseOver", function(e){  
            if(e.labelIndex == 0 || e.labelIndex)
                teritories.hover(_this.teritories[e.labelIndex]);
        });
    }

    this.setTeritories = function (array) {
        this.teritories = [];
        this.sourceData = [];
        for (let i = 0; i < array.length; i++) {
            this.sourceData[i] = tanksMarkerData[array[i]];
            this.teritories[i] = array[i];
            this.tanksTeritories[i] = 1;
        }
    }

    this.addTeritory = function (index){
        this.sourceData.push(tanksMarkerData[index]);
        this.teritories.push(index);
        this.tanksTeritories.push(1);
    }

    this.removeTerotiry = function(index){
        this.sourceData.splice(index,1);
        this.teritories.splice(index,1);
        this.tanksTeritories.splice(index,1);
    }

    this.setTanksCnt = function (array) {
        this.tanksMarkers.labels().textFormatter(function(e){
            return array[e.index]
        });
    }
}
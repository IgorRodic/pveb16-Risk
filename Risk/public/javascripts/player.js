var Player = function (color) {
    this.color = color; 
    this.teritories = [];
    this.sourceData = [];
    this.tanksData = {};
    this.tanksMarkers = {};
    this.markersTooltip = {};
    this.tanksImg = tanksColor[color];

    var _this = this;

    this.setMarkers = function (map, teritories, reset) {

        this.tanksData = anychart.data.set(this.sourceData);
        if (reset == "reset")
            this.tanksMarkers.data({});
        this.tanksMarkers = map.marker(this.tanksData);
        this.tanksMarkers.stroke(null);
        this.tanksMarkers.type("square");
        this.tanksMarkers.fill(this.tanksImg);
        this.tanksMarkers.hoverFill(this.tanksImg);
        this.tanksMarkers.size(12);
        this.tanksMarkers.hoverSize(12);
        this.tanksMarkers.selectionMode('none');

        this.markersTooltip = this.tanksMarkers.tooltip();
        this.markersTooltip.title(false);
        this.markersTooltip.separator(false);
        this.markersTooltip.fontSize(14);
        this.markersTooltip.textFormatter(function(e){
            return this.name;
        });

        

        this.tanksMarkers.labels().textFormatter(function(e){
            var id = idIndexMap[this.id];
            return tanksTeritories[id];
        });

        this.tanksMarkers.listen("mouseOver", function(e){  
            if(e.markerIndex == 0 || e.markerIndex)
                teritories.hover(_this.teritories[e.markerIndex]);
        });

        this.tanksMarkers.labels().listen("mouseOver", function(e){  
            if(e.labelIndex == 0 || e.labelIndex)
                teritories.hover(_this.teritories[e.labelIndex]);
        });

        this.tanksMarkers.listen("click", function(e){  
            if(e.markerIndex == 0 || e.markerIndex)
                teritories.hover(_this.teritories[e.markerIndex]);
        });

        this.tanksMarkers.labels().listen("click", function(e){  
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
        }
    }
}
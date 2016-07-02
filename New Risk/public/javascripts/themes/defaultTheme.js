(function() {
    function r() {
        return window.anychart.color.setThickness(this.sourceColor, 1.5)
    }

    function t() {
        return this.seriesName + ":\n  Open: " + parseFloat(this.open).toFixed(2) + "\n  High: " + parseFloat(this.high).toFixed(2) + "\n  Low: " + parseFloat(this.low).toFixed(2) + "\n  Close: " + parseFloat(this.close).toFixed(2)
    }

    function k() {
        return this.seriesName + ":\n  High: " + parseFloat(this.high).toFixed(2) + "\n  Low: " + parseFloat(this.low).toFixed(2)
    }

    function u() {
        return "Open: " + parseFloat(this.open).toFixed(2) + "\nHigh: " +
            parseFloat(this.high).toFixed(2) + "\nLow: " + parseFloat(this.low).toFixed(2) + "\nClose: " + parseFloat(this.close).toFixed(2)
    }

    function g() {
        return parseFloat(this.high).toFixed(2)
    }

    function h() {
        return "High: " + parseFloat(this.high).toFixed(2) + "\nLow: " + parseFloat(this.low).toFixed(2)
    }

    function p() {
        return window.anychart.color.setThickness(window.anychart.color.lighten(this.sourceColor), 1.5)
    }

    function q() {
        return window.anychart.color.setThickness(this.sourceColor, 1.5)
    }

    function f() {
        return window.anychart.color.lighten(this.sourceColor)
    }

    function e() {
        return window.anychart.color.darken(this.sourceColor)
    }

    function l() {
        return window.anychart.color.setOpacity(this.sourceColor, .65, !0)
    }

    function d() {
        return this.sourceColor
    }

    function m() {
        return (new Date(this.x)).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        })
    }

    function n() {
        return this.x
    }

    function v() {
        return this.name || this.getDataValue("id")
    }

    function c() {
        return this.value
    }
    window.anychart = window.anychart || {};
    window.anychart.themes = window.anychart.themes || {};
    window.anychart.themes.defaultTheme = {
        palette: {
            type: "distinct",
            items: "#64b5f6 #1976d2 #ef6c00 #ffd54f #455a64 #96a6a6 #dd2c00 #00838f #00bfa5 #ffa000".split(" ")
        },
        hatchFillPalette: {
            items: "backwardDiagonal forwardDiagonal horizontal vertical dashedBackwardDiagonal grid dashedForwardDiagonal dashedHorizontal dashedVertical diagonalCross diagonalBrick divot horizontalBrick verticalBrick checkerBoard confetti plaid solidDiamond zigZag weave percent05 percent10 percent20 percent25 percent30 percent40 percent50 percent60 percent70 percent75 percent80 percent90".split(" ")
        },
        hatchFillPaletteFor3D: {
            items: "backwardDiagonal forwardDiagonal dashedBackwardDiagonal grid dashedForwardDiagonal dashedHorizontal dashedVertical diagonalCross diagonalBrick divot horizontalBrick verticalBrick checkerBoard confetti plaid solidDiamond zigZag weave percent05 percent10 percent20 percent25 percent30 percent40 percent50 percent60 percent70 percent75 percent80 percent90 horizontal vertical".split(" ")
        },
        markerPalette: {
            items: "circle diamond square triangleDown triangleUp diagonalCross pentagon cross vline star5 star4 trapezium star7 star6 star10".split(" ")
        },
        defaultOrdinalColorScale: {
            autoColors: function(a) {
                return window.anychart.color.blendedHueProgression("#90caf9", "#01579b", a)
            }
        },
        defaultLinearColorScale: {
            colors: ["#90caf9", "#01579b"]
        },
        defaultFontSettings: {
            fontSize: 13,
            fontFamily: "Verdana, Helvetica, Arial, sans-serif",
            fontColor: "#7c868e",
            textDirection: "ltr",
            fontOpacity: 1,
            fontDecoration: "none",
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            letterSpacing: "normal",
            lineHeight: "normal",
            textIndent: 0,
            vAlign: "top",
            hAlign: "start",
            textWrap: "byLetter",
            textOverflow: "",
            selectable: !1,
            disablePointerEvents: !1,
            useHtml: !1
        },
        defaultBackground: {
            enabled: !1,
            fill: "#ffffff",
            stroke: "none",
            cornerType: "round",
            corners: 0
        },
        defaultSeparator: {
            enabled: !1,
            fill: "#CECECE 0.3",
            width: "100%",
            height: 1,
            margin: {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
            },
            orientation: "top",
            stroke: "none",
            zIndex: 1
        },
        defaultLabelFactory: {
            enabled: !1,
            offsetX: 0,
            offsetY: 0,
            fontSize: 12,
            minFontSize: 8,
            maxFontSize: 72,
            adjustFontSize: {
                width: !1,
                height: !1
            },
            anchor: "center",
            padding: {
                top: 4,
                right: 4,
                bottom: 4,
                left: 4
            },
            rotation: 0,
            textFormatter: c,
            positionFormatter: c
        },
        defaultMarkerFactory: {
            anchor: "center",
            size: 6,
            offsetX: 0,
            offsetY: 0,
            rotation: 0,
            positionFormatter: c
        },
        defaultTitle: {
            enabled: !1,
            fontSize: 16,
            text: "Title text",
            width: null,
            height: null,
            align: "center",
            hAlign: "center",
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        defaultTooltip: {
            enabled: !0,
            title: {
                enabled: !1,
                fontColor: "#ffffff",
                text: "",
                fontSize: 14,
                rotation: 0,
                width: null,
                height: null,
                align: "left",
                hAlign: "left",
                orientation: "top",
                zIndex: 1
            },
            content: {
                enabled: !0,
                fontSize: 12,
                minFontSize: 9,
                maxFontSize: 13,
                fontColor: "#ffffff",
                hAlign: "left",
                text: "Tooltip Text",
                width: null,
                height: null,
                anchor: "leftTop",
                offsetX: 0,
                offsetY: 0,
                position: "leftTop",
                adjustFontSize: {
                    width: !1,
                    height: !1
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                rotation: 0,
                zIndex: 1
            },
            fontSize: 12,
            minFontSize: 9,
            maxFontSize: 13,
            fontColor: "#ffffff",
            hAlign: "left",
            text: "Tooltip Text",
            width: null,
            height: null,
            adjustFontSize: {
                width: !1,
                height: !1
            },
            background: {
                enabled: !0,
                fill: "#212121 0.7",
                corners: 3,
                zIndex: 0
            },
            offsetX: 10,
            offsetY: 10,
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10
            },
            valuePrefix: "",
            valuePostfix: "",
            position: "leftTop",
            anchor: "leftTop",
            hideDelay: 0,
            titleFormatter: c,
            textFormatter: function() {
                return this.valuePrefix + this.value + this.valuePostfix
            }
        },
        defaultAxis: {
            enabled: !0,
            startAngle: 0,
            drawLastLabel: !0,
            drawFirstLabel: !0,
            staggerMaxLines: 2,
            staggerMode: !1,
            staggerLines: null,
            width: null,
            overlapMode: "noOverlap",
            stroke: "#CECECE",
            title: {
                padding: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5
                },
                enabled: !1,
                fontSize: 13,
                text: "Axis title",
                fontColor: "#545f69",
                zIndex: 35
            },
            labels: {
                enabled: !0,
                textFormatter: c,
                positionFormatter: c,
                zIndex: 35
            },
            minorLabels: {
                enabled: !1,
                fontSize: 9,
                textFormatter: c,
                positionFormatter: c,
                zIndex: 35
            },
            ticks: {
                enabled: !0,
                length: 6,
                position: "outside",
                stroke: "#CECECE",
                zIndex: 35
            },
            minorTicks: {
                enabled: !1,
                length: 4,
                position: "outside",
                stroke: "#EAEAEA",
                zIndex: 35
            },
            zIndex: 35
        },
        defaultGridSettings: {
            enabled: !0,
            isMinor: !1,
            drawFirstLine: !0,
            drawLastLine: !0,
            oddFill: "none",
            evenFill: "none",
            stroke: "#CECECE",
            scale: 1,
            zIndex: 11
        },
        defaultMinorGridSettings: {
            isMinor: !0,
            stroke: "#EAEAEA",
            zIndex: 10
        },
        defaultLineMarkerSettings: {
            enabled: !0,
            value: 0,
            layout: null,
            stroke: {
                color: "#7c868e",
                thickness: 2,
                opacity: 1,
                dash: "",
                lineJoin: "miter",
                lineCap: "square"
            },
            zIndex: 25.2,
            scale: 1
        },
        defaultTextMarkerSettings: {
            enabled: !0,
            fontSize: 12,
            value: 0,
            anchor: "center",
            align: "center",
            layout: null,
            offsetX: 0,
            offsetY: 0,
            text: "Text marker",
            width: null,
            height: null,
            zIndex: 25.3,
            scale: 1
        },
        defaultRangeMarkerSettings: {
            enabled: !0,
            from: 0,
            to: 0,
            layout: null,
            fill: "#c1c1c1 0.4",
            zIndex: 25.1,
            scale: 1
        },
        defaultLegend: {
            enabled: !1,
            vAlign: "bottom",
            fontSize: 12,
            itemsLayout: "horizontal",
            itemsSpacing: 15,
            items: null,
            itemsFormatter: null,
            itemsTextFormatter: null,
            itemsSourceMode: "default",
            inverted: !1,
            hoverCursor: "pointer",
            iconTextSpacing: 5,
            iconSize: 15,
            width: null,
            height: null,
            position: "top",
            align: "center",
            padding: {
                top: 0,
                right: 10,
                bottom: 10,
                left: 10
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            title: {
                fontSize: 15
            },
            paginator: {
                enabled: !0,
                fontSize: 12,
                fontColor: "#545f69",
                orientation: "right",
                layout: "horizontal",
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 5
                },
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                zIndex: 30,
                buttonsSettings: {
                    normal: {
                        stroke: "#757575",
                        fill: "#9e9e9e"
                    },
                    hover: {
                        stroke: "#546e7a",
                        fill: "#7c868e"
                    },
                    pushed: {
                        stroke: "#7c868e",
                        fill: "#9e9e9e"
                    },
                    disabled: {
                        stroke: null,
                        fill: "#e0e0e0"
                    }
                }
            },
            titleFormatter: null,
            tooltip: {
                enabled: !1,
                allowLeaveScreen: !1,
                title: {
                    enabled: !1
                }
            },
            zIndex: 20
        },
        defaultCrosshairLabel: {
            x: 0,
            y: 0,
            axisIndex: 0,
            anchor: null,
            textFormatter: c,
            enabled: !0,
            fontSize: 12,
            minFontSize: 8,
            maxFontSize: 16,
            fontColor: "#ffffff",
            fontWeight: 400,
            disablePointerEvents: !0,
            text: "Label text",
            background: {
                enabled: !0,
                fill: "#212121 0.7",
                corners: 3,
                zIndex: 0
            },
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10
            },
            width: null,
            height: null,
            offsetX: 0,
            offsetY: 0,
            adjustFontSize: {
                width: !1,
                height: !1
            },
            rotation: 0
        },
        defaultColorRange: {
            enabled: !1,
            stroke: "#B9B9B9",
            orientation: "bottom",
            title: {
                enabled: !1
            },
            colorLineSize: 10,
            padding: {
                top: 10,
                right: 0,
                bottom: 0,
                left: 0
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            align: "center",
            length: "50%",
            marker: {
                padding: {
                    top: 3,
                    right: 3,
                    bottom: 3,
                    left: 3
                },
                positionFormatter: c,
                enabled: !0,
                disablePointerEvents: !1,
                position: "center",
                rotation: 0,
                anchor: "center",
                offsetX: 0,
                offsetY: 0,
                type: "triangleDown",
                fill: "#333 0.85",
                stroke: "none",
                size: 7
            },
            labels: {
                offsetX: 0,
                offsetY: 0,
                fontSize: 11,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            ticks: {
                stroke: "#B9B9B9",
                position: "outside",
                length: 5,
                enabled: !0
            },
            minorTicks: {
                stroke: "#B9B9B9",
                position: "outside",
                length: 3,
                enabled: !1
            }
        },
        defaultScroller: {
            enabled: !1,
            fill: "#f7f7f7",
            selectedFill: "#ddd",
            outlineStroke: "none",
            height: 16,
            minHeight: null,
            maxHeight: null,
            autoHide: !1,
            orientation: "bottom",
            position: "afterAxes",
            allowRangeChange: !0,
            thumbs: {
                enabled: !0,
                autoHide: !1,
                fill: "#E9E9E9",
                stroke: "#7c868e",
                hoverFill: "#ffffff",
                hoverStroke: "#757575"
            },
            inverted: !1,
            zIndex: 35
        },
        defaultGroupingSettings: {
            enabled: !0,
            forced: !1,
            levels: [{
                unit: "millisecond",
                count: 1
            }, {
                unit: "millisecond",
                count: 5
            }, {
                unit: "millisecond",
                count: 10
            }, {
                unit: "millisecond",
                count: 25
            }, {
                unit: "millisecond",
                count: 50
            }, {
                unit: "millisecond",
                count: 100
            }, {
                unit: "millisecond",
                count: 250
            }, {
                unit: "millisecond",
                count: 500
            }, {
                unit: "second",
                count: 1
            }, {
                unit: "second",
                count: 5
            }, {
                unit: "second",
                count: 10
            }, {
                unit: "second",
                count: 20
            }, {
                unit: "second",
                count: 30
            }, {
                unit: "minute",
                count: 1
            }, {
                unit: "minute",
                count: 5
            }, {
                unit: "minute",
                count: 15
            }, {
                unit: "minute",
                count: 30
            }, {
                unit: "hour",
                count: 1
            }, {
                unit: "hour",
                count: 2
            }, {
                unit: "hour",
                count: 6
            }, {
                unit: "hour",
                count: 12
            }, {
                unit: "day",
                count: 1
            }, {
                unit: "week",
                count: 1
            }, {
                unit: "month",
                count: 1
            }, {
                unit: "month",
                count: 3
            }, {
                unit: "month",
                count: 6
            }, {
                unit: "year",
                count: 1
            }],
            maxVisiblePoints: 500,
            minPixPerPoint: NaN
        },
        chart: {
            enabled: !0,
            padding: {
                top: 10,
                right: 20,
                bottom: 5,
                left: 10
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            background: {
                enabled: !0,
                zIndex: 1
            },
            contextMenu: {
                fromTheme: !0,
                enabled: !0
            },
            title: {
                text: "Chart Title",
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 10,
                    left: 0
                },
                zIndex: 80,
                background: {
                    zIndex: 0
                }
            },
            animation: {
                enabled: !1,
                duration: 1E3
            },
            interactivity: {
                hoverMode: "single",
                selectionMode: "multiSelect",
                spotRadius: 2,
                allowMultiSeriesSelection: !0
            },
            tooltip: {
                allowLeaveScreen: !1,
                allowLeaveChart: !0,
                displayMode: "single",
                positionMode: "float",
                title: {
                    enabled: !0
                },
                separator: {
                    enabled: !0
                },
                titleFormatter: function() {
                    return this.points[0].x
                },
                textFormatter: function() {
                    return this.formattedValues.join("\n")
                }
            },
            bounds: {
                top: null,
                right: null,
                bottom: null,
                left: null,
                width: null,
                height: null,
                minWidth: null,
                minHeight: null,
                maxWidth: null,
                maxHeight: null
            },
            credits: {
                enabled: null,
                text: "AnyChart",
                url: "http://anychart.com",
                alt: "AnyChart.com",
                inChart: !1,
                logoSrc: "https://static.anychart.com/logo.png"
            },
            defaultSeriesSettings: {
                base: {
                    enabled: !0,
                    background: {
                        enabled: !0
                    },
                    tooltip: {
                        enabled: !0,
                        title: {
                            enabled: !0
                        },
                        separator: {
                            enabled: !0
                        },
                        titleFormatter: function() {
                            return this.x
                        },
                        textFormatter: function() {
                            return this.seriesName + ": " + this.valuePrefix + this.value + this.valuePostfix
                        }
                    },
                    hatchFill: !1,
                    hoverHatchFill: null,
                    selectHatchFill: null,
                    labels: {
                        anchor: "centerBottom",
                        position: "centerTop"
                    },
                    hoverLabels: {
                        enabled: null
                    },
                    selectLabels: {
                        enabled: null
                    },
                    markers: {
                        enabled: !1,
                        disablePointerEvents: !1,
                        position: "center",
                        positionFormatter: c,
                        size: 4
                    },
                    hoverMarkers: {
                        enabled: null,
                        size: 6
                    },
                    selectMarkers: {
                        enabled: null,
                        fill: "#333 0.85",
                        stroke: "1.5 #212121",
                        size: 6
                    },
                    legendItem: {
                        enabled: !0,
                        iconType: "square"
                    },
                    fill: l,
                    hoverFill: d,
                    selectFill: "#333 0.85",
                    stroke: q,
                    hoverStroke: p,
                    selectStroke: "#333 0.85",
                    lowStroke: q,
                    hoverLowStroke: p,
                    selectLowStroke: "#333 0.85",
                    highStroke: q,
                    hoverHighStroke: p,
                    selectHighStroke: "#333 0.85",
                    clip: !0,
                    color: null,
                    xScale: null,
                    yScale: null,
                    error: {
                        mode: "both",
                        xError: null,
                        xUpperError: null,
                        xLowerError: null,
                        valueError: null,
                        valueUpperError: null,
                        valueLowerError: null,
                        xErrorWidth: 10,
                        valueErrorWidth: 10,
                        xErrorStroke: e,
                        valueErrorStroke: e
                    },
                    pointWidth: null,
                    connectMissingPoints: !1
                },
                marker: {
                    fill: d,
                    stroke: r,
                    hoverFill: f,
                    hoverStroke: r,
                    selectFill: "#333 0.85",
                    selectStroke: "1.5 #212121",
                    size: 4,
                    hoverSize: 6,
                    selectSize: 6,
                    legendItem: {
                        iconStroke: "none"
                    },
                    labels: {
                        anchor: "bottom",
                        offsetY: 3
                    }
                },
                bubble: {
                    fill: function() {
                        return window.anychart.color.setOpacity(this.sourceColor, .7, !0)
                    },
                    hoverFill: function() {
                        return window.anychart.color.setOpacity(this.sourceColor, .5, !0)
                    },
                    hoverMarkers: {
                        position: "center"
                    },
                    displayNegative: !1,
                    negativeFill: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))
                    },
                    hoverNegativeFill: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))))
                    },
                    selectNegativeFill: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))
                    },
                    negativeStroke: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))))
                    },
                    hoverNegativeStroke: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))))
                    },
                    selectNegativeStroke: function() {
                        return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))))
                    },
                    negativeHatchFill: !1,
                    hoverNegativeHatchFill: null,
                    selectNegativeHatchFill: null,
                    legendItem: {
                        iconStroke: "none"
                    },
                    labels: {
                        position: "center",
                        anchor: "center"
                    }
                },
                areaLike: {
                    fill: l,
                    hoverFill: l,
                    markers: {
                        position: "centerTop"
                    },
                    hoverMarkers: {
                        enabled: !0
                    },
                    selectMarkers: {
                        enabled: !0
                    },
                    legendItem: {
                        iconStroke: "none"
                    },
                    labels: {
                        anchor: "leftBottom"
                    }
                },
                barLike: {
                    fill: function() {
                        return window.anychart.color.setOpacity(this.sourceColor, .85, !0)
                    },
                    hoverFill: l,
                    legendItem: {
                        iconStroke: "none"
                    },
                    labels: {
                        anchor: "centerBottom",
                        position: "centerTop"
                    }
                },
                lineLike: {
                    labels: {
                        anchor: "leftBottom"
                    },
                    hoverMarkers: {
                        enabled: !0
                    },
                    selectMarkers: {
                        enabled: !0
                    }
                },
                rangeArea: {
                    labels: {
                        textFormatter: g
                    },
                    tooltip: {
                        titleFormatter: n,
                        textFormatter: h
                    }
                },
                rangeSplineArea: {
                    labels: {
                        textFormatter: g
                    },
                    tooltip: {
                        titleFormatter: n,
                        textFormatter: h
                    }
                },
                rangeStepArea: {
                    labels: {
                        textFormatter: g
                    },
                    tooltip: {
                        titleFormatter: n,
                        textFormatter: h
                    }
                },
                candlestick: {
                    risingFill: "#64b5f6",
                    risingStroke: "#64b5f6",
                    hoverRisingFill: f,
                    hoverRisingStroke: e,
                    fallingFill: "#ef6c00",
                    fallingStroke: "#ef6c00",
                    hoverFallingFill: f,
                    hoverFallingStroke: e,
                    risingHatchFill: !1,
                    hoverRisingHatchFill: null,
                    selectRisingHatchFill: null,
                    fallingHatchFill: !1,
                    hoverFallingHatchFill: null,
                    selectFallingHatchFill: null,
                    selectFallingFill: "#333 0.85",
                    selectRisingFill: "#333 0.85",
                    selectRisingStroke: "#333 0.85",
                    selectFallingStroke: "#333 0.85",
                    tooltip: {
                        textFormatter: u
                    },
                    markers: {
                        position: "centerTop"
                    },
                    labels: {
                        position: "centerTop",
                        anchor: "bottom",
                        textFormatter: n
                    }
                },
                column: {
                    markers: {
                        position: "centerTop"
                    },
                    hoverMarkers: {
                        position: "centerTop"
                    },
                    labels: {
                        offsetY: 3,
                        anchor: "centerBottom"
                    }
                },
                rangeColumn: {
                    markers: {
                        position: "centerTop"
                    },
                    hoverMarkers: {
                        position: "centerTop"
                    },
                    labels: {
                        position: "centerTop",
                        anchor: "bottom",
                        textFormatter: g
                    },
                    tooltip: {
                        textFormatter: h
                    }
                },
                ohlc: {
                    risingStroke: "#64b5f6",
                    hoverRisingStroke: e,
                    fallingStroke: "#ef6c00",
                    hoverFallingStroke: e,
                    selectRisingStroke: "3 #333 0.85",
                    selectFallingStroke: "3 #333 0.85",
                    tooltip: {
                        textFormatter: u
                    },
                    markers: {
                        position: "centerTop"
                    },
                    hoverMarkers: {
                        enabled: null,
                        position: "centerTop"
                    },
                    selectMarkers: {
                        enabled: null,
                        position: "centerTop"
                    },
                    labels: {
                        position: "centerTop",
                        anchor: "bottom",
                        textFormatter: function() {
                            return this.x
                        }
                    }
                }
            },
            defaultLabelSettings: {
                enabled: !0,
                text: "Chart label",
                width: null,
                height: null,
                anchor: "leftTop",
                position: "leftTop",
                offsetX: 0,
                offsetY: 0,
                minFontSize: 8,
                maxFontSize: 72,
                adjustFontSize: {
                    width: !1,
                    height: !1
                },
                rotation: 0,
                zIndex: 50
            },
            chartLabels: [],
            maxBubbleSize: "20%",
            minBubbleSize: "5%"
        },
        cartesianBase: {
            defaultSeriesSettings: {
                bar: {
                    markers: {
                        position: "right"
                    },
                    hoverMarkers: {
                        position: "right"
                    },
                    labels: {
                        offsetX: 3,
                        anchor: "leftCenter",
                        position: "right"
                    }
                },
                rangeBar: {
                    markers: {
                        position: "right"
                    },
                    hoverMarkers: {
                        position: "right"
                    },
                    labels: {
                        anchor: "leftCenter",
                        offsetX: 3,
                        textFormatter: g,
                        position: "right"
                    },
                    tooltip: {
                        textFormatter: h
                    }
                },
                box: {
                    medianStroke: e,
                    hoverMedianStroke: d,
                    selectMedianStroke: "#333 0.85",
                    stemStroke: e,
                    hoverStemStroke: d,
                    selectStemStroke: "#333 0.85",
                    whiskerStroke: e,
                    hoverWhiskerStroke: e,
                    selectWhiskerStroke: "#333 0.85",
                    whiskerWidth: 0,
                    hoverWhiskerWidth: null,
                    selectWhiskerWidth: null,
                    outlierMarkers: {
                        enabled: !0,
                        disablePointerEvents: !1,
                        position: "center",
                        rotation: 0,
                        anchor: "center",
                        offsetX: 0,
                        offsetY: 0,
                        type: "circle",
                        size: 3,
                        positionFormatter: c
                    },
                    hoverOutlierMarkers: {
                        enabled: null,
                        size: 4
                    },
                    selectOutlierMarkers: {
                        enabled: null,
                        size: 4,
                        fill: "#333 0.85",
                        stroke: "1.5 #212121"
                    },
                    labels: {
                        textFormatter: function() {
                            return "Highest: " + parseFloat(this.highest).toFixed(2) + "\nMedian: " + parseFloat(this.median).toFixed(2) + "\nLowest: " + parseFloat(this.lowest).toFixed(2)
                        }
                    },
                    tooltip: {
                        titleFormatter: function() {
                            return this.name || this.x
                        },
                        textFormatter: function() {
                            return "Lowest: " + this.valuePrefix + parseFloat(this.lowest).toFixed(2) + this.valuePostfix + "\nQ1: " + this.valuePrefix + parseFloat(this.q1).toFixed(2) + this.valuePostfix + "\nMedian: " + this.valuePrefix + parseFloat(this.median).toFixed(2) + this.valuePostfix + "\nQ3: " + this.valuePrefix + parseFloat(this.q3).toFixed(2) + this.valuePostfix + "\nHighest: " + this.valuePrefix + parseFloat(this.highest).toFixed(2) + this.valuePostfix
                        }
                    }
                }
            },
            defaultXAxisSettings: {
                orientation: "bottom",
                title: {
                    text: "X-Axis",
                    padding: {
                        top: 5,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                scale: 0
            },
            defaultYAxisSettings: {
                orientation: "left",
                title: {
                    text: "Y-Axis",
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 5,
                        left: 0
                    }
                },
                scale: 1
            },
            xAxes: [{}],
            yAxes: [{}],
            grids: [],
            minorGrids: [],
            series: [],
            lineAxesMarkers: [],
            rangeAxesMarkers: [],
            textAxesMarkers: [],
            xScale: 0,
            yScale: 1,
            barsPadding: .4,
            barGroupsPadding: .8,
            maxBubbleSize: "20%",
            minBubbleSize: "5%",
            barChartMode: !1,
            scales: [{
                type: "ordinal",
                inverted: !1,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            crosshair: {
                enabled: !1,
                displayMode: "float",
                xStroke: "#969EA5",
                yStroke: "#969EA5",
                zIndex: 41
            },
            xZoom: {
                continuous: !0,
                startRatio: 0,
                endRatio: 1
            }
        },
        cartesian: {
            defaultSeriesType: "line",
            xAxes: [],
            yAxes: []
        },
        area: {
            defaultSeriesType: "area",
            tooltip: {
                displayMode: "union"
            },
            interactivity: {
                hoverMode: "byX"
            }
        },
        bar: {
            barChartMode: !0,
            defaultSeriesType: "bar",
            defaultXAxisSettings: {
                orientation: "left"
            },
            defaultYAxisSettings: {
                orientation: "bottom"
            },
            scales: [{
                type: "ordinal",
                inverted: !0,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            tooltip: {
                displayMode: "single",
                position: "right",
                anchor: "left",
                offsetX: 10,
                offsetY: 0
            },
            xScroller: {
                orientation: "left"
            }
        },
        column: {
            defaultSeriesType: "column",
            tooltip: {
                displayMode: "single",
                position: "centerTop",
                anchor: "bottom",
                offsetX: 0,
                offsetY: 10
            }
        },
        line: {
            defaultSeriesType: "line",
            tooltip: {
                displayMode: "union"
            },
            interactivity: {
                hoverMode: "byX"
            }
        },
        box: {
            defaultSeriesType: "box"
        },
        financial: {
            defaultSeriesType: "candlestick",
            defaultSeriesSettings: {
                candlestick: {
                    tooltip: {
                        titleFormatter: m
                    },
                    labels: {
                        textFormatter: m
                    }
                },
                ohlc: {
                    tooltip: {
                        titleFormatter: m
                    },
                    labels: {
                        textFormatter: m
                    }
                }
            },
            xAxes: [{
                labels: {
                    textFormatter: function() {
                        var a = new Date(this.tickValue),
                            b = [" ", a.getUTCDate(), ", ", a.getUTCFullYear()].join("");
                        switch (a.getUTCMonth()) {
                            case 0:
                                return "Jan" + b;
                            case 1:
                                return "Feb" + b;
                            case 2:
                                return "Mar" + b;
                            case 3:
                                return "Apr" + b;
                            case 4:
                                return "May" + b;
                            case 5:
                                return "Jun" + b;
                            case 6:
                                return "Jul" + b;
                            case 7:
                                return "Aug" + b;
                            case 8:
                                return "Sep" + b;
                            case 9:
                                return "Oct" + b;
                            case 10:
                                return "Nov" + b;
                            case 11:
                                return "Dec" + b
                        }
                        return "Invalid date"
                    }
                }
            }],
            scales: [{
                type: "dateTime",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    count: 4
                },
                minorTicks: {
                    count: 4
                }
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }]
        },
        cartesian3d: {
            defaultSeriesType: "column",
            zAngle: 45,
            zAspect: "50%",
            zDistribution: !1,
            zPadding: 10,
            defaultSeriesSettings: {
                base: {
                    stroke: "none",
                    fill: d,
                    hoverStroke: d,
                    hoverFill: f,
                    selectStroke: d,
                    selectFill: "#333"
                }
            }
        },
        bar3d: {
            defaultSeriesType: "bar",
            grids: [{}, {
                enabled: !0,
                layout: "horizontal",
                scale: 0
            }]
        },
        column3d: {
            defaultSeriesType: "column",
            grids: [{}, {
                enabled: !0,
                layout: "vertical",
                scale: 0
            }]
        },
        area3d: {
            defaultSeriesType: "area",
            zDistribution: !0,
            zPadding: 5,
            grids: [{}, {
                enabled: !0,
                layout: "vertical",
                scale: 0
            }]
        },
        pieFunnelPyramidBase: {
            fill: d,
            stroke: "none",
            hoverFill: f,
            hoverStroke: d,
            selectFill: "#333 0.85",
            selectStroke: "1.5 #212121",
            connectorStroke: "#CECECE",
            overlapMode: "noOverlap",
            connectorLength: 20,
            hatchFill: null,
            forceHoverLabels: !1,
            labels: {
                enabled: !0,
                fontColor: null,
                position: "inside",
                disablePointerEvents: !1,
                anchor: "center",
                rotation: 0,
                autoRotate: !1,
                width: null,
                height: null,
                zIndex: 34,
                positionFormatter: c,
                textFormatter: function() {
                    return this.name ? this.name : this.x
                }
            },
            outsideLabels: {
                disablePointerEvents: !1,
                autoColor: "#545f69"
            },
            insideLabels: {
                disablePointerEvents: !0,
                autoColor: "#ffffff"
            },
            hoverLabels: {
                enabled: null
            },
            selectLabels: {
                enabled: null
            },
            legend: {
                enabled: !0,
                padding: {
                    top: 10,
                    right: 10,
                    bottom: 0,
                    left: 10
                },
                position: "bottom"
            },
            markers: {
                enabled: !1,
                position: "center",
                positionFormatter: c,
                zIndex: 33
            },
            hoverMarkers: {
                enabled: null
            },
            selectMarkers: {
                enabled: null
            },
            tooltip: {
                enabled: !0,
                title: {
                    enabled: !0
                },
                separator: {
                    enabled: !0
                },
                titleFormatter: function() {
                    return this.name || this.x
                },
                textFormatter: function() {
                    return "Value: " + this.value + "\nPercent Value: " + (100 * this.value / this.getStat("sum")).toFixed(1) + "%"
                }
            },
            interactivity: {
                hoverMode: "single"
            }
        },
        pie: {
            title: {
                text: "Pie Chart"
            },
            group: !1,
            sort: "none",
            radius: "45%",
            innerRadius: 0,
            startAngle: 0,
            explode: 15,
            outsideLabelsCriticalAngle: 60,
            outsideLabelsSpace: 30,
            insideLabelsOffset: "50%",
            labels: {
                textFormatter: function() {
                    return (100 * this.value / this.getStat("sum")).toFixed(1) + "%"
                }
            }
        },
        funnel: {
            title: {
                text: "Funnel Chart"
            },
            baseWidth: "70%",
            neckWidth: "30%",
            neckHeight: "25%",
            pointsPadding: 0,
            labels: {
                position: "outsideLeftInColumn"
            }
        },
        pyramid: {
            title: {
                text: "Pyramid Chart"
            },
            baseWidth: "70%",
            pointsPadding: 0,
            legend: {
                inverted: !0
            },
            labels: {
                position: "outsideLeftInColumn"
            },
            reversed: !1
        },
        pie3d: {
            explode: "5%",
            connectorLength: "15%",
            legendItem: {
                iconStroke: null
            }
        },
        scatter: {
            defaultSeriesType: "marker",
            legend: {
                enabled: !1
            },
            defaultSeriesSettings: {
                base: {
                    clip: !0,
                    color: null,
                    tooltip: {
                        titleFormatter: function() {
                            return this.seriesName
                        },
                        textFormatter: function() {
                            return "x: " + this.x + "\ny: " + this.valuePrefix + this.value + this.valuePostfix
                        }
                    },
                    xScale: null,
                    yScale: null
                },
                bubble: {
                    displayNegative: !1,
                    negativeFill: e,
                    hoverNegativeFill: e,
                    negativeStroke: e,
                    hoverNegativeStroke: e,
                    negativeHatchFill: null,
                    hoverNegativeHatchFill: void 0,
                    hatchFill: !1,
                    tooltip: {
                        textFormatter: function() {
                            return "X: " + this.x + "\nY: " + this.valuePrefix + this.value + this.valuePostfix +
                                "\nSize: " + this.size
                        }
                    }
                },
                line: {
                    connectMissingPoints: !1
                },
                marker: {
                    size: 5,
                    hoverSize: 7,
                    selectSize: 7
                }
            },
            defaultXAxisSettings: {
                orientation: "bottom",
                scale: 0,
                title: {
                    text: "X-Axis"
                }
            },
            defaultYAxisSettings: {
                orientation: "left",
                scale: 1,
                title: {
                    text: "Y-Axis"
                }
            },
            series: [],
            grids: [],
            minorGrids: [],
            xAxes: [{}],
            yAxes: [{}],
            lineAxesMarkers: [],
            rangeAxesMarkers: [],
            textAxesMarkers: [],
            scales: [{
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            xScale: 0,
            yScale: 1,
            maxBubbleSize: "20%",
            minBubbleSize: "5%",
            crosshair: {
                enabled: !1,
                displayMode: "float",
                xStroke: "#969EA5",
                yStroke: "#969EA5",
                zIndex: 41
            }
        },
        marker: {},
        bubble: {},
        radar: {
            defaultSeriesType: "line",
            defaultSeriesSettings: {
                base: {
                    enabled: !0,
                    hatchFill: null
                },
                area: {},
                line: {},
                marker: {}
            },
            xAxis: {
                scale: 0,
                zIndex: 25
            },
            startAngle: 0,
            grids: [{}, {
                layout: "circuit"
            }],
            minorGrids: [],
            scales: [{
                type: "ordinal",
                inverted: !1,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            xScale: 0,
            yScale: 1
        },
        polar: {
            defaultSeriesType: "marker",
            defaultSeriesSettings: {
                base: {
                    enabled: !0,
                    hatchFill: null,
                    closed: !0
                },
                area: {},
                line: {},
                marker: {}
            },
            xAxis: {
                scale: 0,
                zIndex: 25
            },
            startAngle: 0,
            grids: [{}, {
                layout: "circuit"
            }],
            minorGrids: [],
            scales: [{
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            xScale: 0,
            yScale: 1
        },
        bullet: {
            background: {
                enabled: !0
            },
            layout: "horizontal",
            defaultRangeMarkerSettings: {
                enabled: !0,
                from: 0,
                to: 0,
                zIndex: 2
            },
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            defaultMarkerSettings: {
                fill: "#64b5f6",
                stroke: "2 #64b5f6",
                zIndex: 2
            },
            rangePalette: {
                type: "distinct",
                items: ["#828282", "#a8a8a8", "#c2c2c2", "#d4d4d4", "#e1e1e1"]
            },
            markerPalette: {
                items: ["bar", "line", "x", "ellipse"]
            },
            axis: {
                enabled: !1,
                title: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 10,
                        left: 0
                    }
                },
                labels: {
                    fontSize: 9,
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                minorLabels: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                ticks: {
                    enabled: !1
                },
                orientation: null,
                zIndex: 3
            },
            title: {
                rotation: 0
            },
            scale: {
                type: "linear",
                ticks: {
                    mode: "linear",
                    base: 0,
                    explicit: null,
                    minCount: 2,
                    maxCount: 5,
                    interval: NaN
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    explicit: null,
                    count: 5,
                    interval: NaN
                },
                stackMode: "none",
                stickToZero: !0,
                minimumGap: 0,
                maximumGap: 0,
                softMinimum: null,
                softMaximum: null,
                minimum: null,
                maximum: null,
                inverted: !1
            },
            ranges: []
        },
        sparkline: {
            background: {
                enabled: !0
            },
            title: {
                enabled: !1,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                orientation: "right",
                rotation: 0
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            hatchFill: null,
            markers: {},
            firstMarkers: {
                fill: "#64b5f6"
            },
            lastMarkers: {
                fill: "#64b5f6"
            },
            negativeMarkers: {
                fill: "#ef6c00"
            },
            minMarkers: {
                fill: "#455a64"
            },
            maxMarkers: {
                fill: "#dd2c00"
            },
            labels: {},
            firstLabels: {},
            lastLabels: {},
            negativeLabels: {},
            minLabels: {
                fontSize: 9,
                padding: {
                    top: 3,
                    right: 0,
                    bottom: 3,
                    left: 0
                },
                fontColor: "#303f46"
            },
            maxLabels: {
                fontSize: 9,
                padding: {
                    top: 3,
                    right: 0,
                    bottom: 3,
                    left: 0
                },
                fontColor: "#9b1f00"
            },
            lineAxesMarkers: [],
            rangeAxesMarkers: [],
            textAxesMarkers: [],
            scales: [{
                type: "ordinal",
                inverted: !1,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "linear",
                inverted: !1,
                maximum: null,
                minimum: null,
                minimumGap: .1,
                maximumGap: .1,
                softMinimum: null,
                softMaximum: null,
                ticks: {
                    mode: "linear",
                    base: 0,
                    minCount: 4,
                    maxCount: 6
                },
                minorTicks: {
                    mode: "linear",
                    base: 0,
                    count: 5
                },
                stackMode: "none",
                stickToZero: !0
            }],
            xScale: 0,
            yScale: 1,
            clip: !0,
            seriesType: "line",
            connectMissingPoints: !1,
            pointWidth: "95%",
            tooltip: {
                title: !1,
                separator: !1,
                titleFormatter: function() {
                    return this.x
                },
                textFormatter: function() {
                    return "x: " + this.x + "\ny: " + this.value
                }
            },
            defaultSeriesSettings: {
                base: {
                    markers: {
                        enabled: !1,
                        position: "center",
                        anchor: "center",
                        type: "circle",
                        size: 1.8,
                        stroke: "none"
                    },
                    hoverMarkers: {
                        enabled: !0
                    },
                    labels: {
                        enabled: !1,
                        fontSize: 8,
                        background: {
                            enabled: !1
                        },
                        position: "center",
                        anchor: "centerBottom"
                    },
                    minLabels: {
                        position: "bottom",
                        anchor: "centerBottom"
                    },
                    maxLabels: {
                        position: "centerTop",
                        anchor: "topCenter"
                    },
                    color: "#64b5f6"
                },
                area: {
                    stroke: "#64b5f6",
                    fill: "#64b5f6 0.5"
                },
                column: {
                    markers: {
                        position: "centerTop"
                    },
                    labels: {
                        position: "centerTop",
                        anchor: "centerBottom"
                    },
                    negativeMarkers: {
                        position: "centerBottom"
                    },
                    negativeLabels: {
                        position: "centerBottom",
                        anchor: "centerTop"
                    },
                    fill: "#64b5f6",
                    negativeFill: "#ef6c00"
                },
                line: {
                    stroke: "#64b5f6"
                },
                winLoss: {
                    markers: {
                        position: "centerTop",
                        anchor: "centerTop"
                    },
                    labels: {
                        position: "centerTop",
                        anchor: "centerTop"
                    },
                    negativeMarkers: {
                        position: "centerBottom",
                        anchor: "centerBottom"
                    },
                    negativeLabels: {
                        position: "centerBottom",
                        anchor: "centerBottom"
                    },
                    fill: "#64b5f6",
                    negativeFill: "#ef6c00"
                }
            }
        },
        map: {
            defaultSeriesSettings: {
                base: {
                    fill: function() {
                        var a;
                        this.colorScale ? (a = this.iterator.get(this.referenceValueNames[1]), a = this.colorScale.valueToColor(a)) : a = this.sourceColor;
                        return a
                    },
                    hoverFill: "#757575",
                    selectFill: "#333 0.85",
                    stroke: e,
                    hoverStroke: {
                        thickness: .5,
                        color: "#545f69"
                    },
                    selectStroke: {
                        thickness: .5,
                        color: "#545f69"
                    },
                    hatchFill: !1,
                    labels: {
                        enabled: !1,
                        adjustFontSize: {
                            width: !0,
                            height: !0
                        },
                        textFormatter: function() {
                            return this.getDataValue("name") ? this.getDataValue("name") : this.name ? this.name : this.getDataValue("id") ? this.getDataValue("id") : "lat: " + this.lat + "\nlong: " + this["long"]
                        }
                    },
                    hoverLabels: {
                        enabled: null
                    },
                    selectLabels: {
                        enabled: null
                    },
                    markers: {
                        enabled: !1,
                        disablePointerEvents: !1
                    },
                    hoverMarkers: {
                        enabled: null
                    },
                    selectMarkers: {
                        enabled: null
                    },
                    color: null,
                    allowPointsSelect: null,
                    tooltip: {
                        titleFormatter: function() {
                            return this.name || this.getDataValue("name") || "Tooltip title"
                        },
                        textFormatter: function() {
                            return "Id: " + this.id + "\nValue: " + this.valuePrefix + this.value + this.valuePostfix
                        }
                    },
                    xScale: null,
                    yScale: null
                },
                choropleth: {
                    labels: {
                        fontColor: "#212121"
                    },
                    colorScale: {}
                },
                connector: {
                    startSize: 0,
                    endSize: 0,
                    curvature: .3,
                    stroke: d,
                    hoverStroke: f,
                    selectStroke: "2 #333 0.85",
                    markers: {
                        position: "middle",
                        enabled: !0,
                        size: 15,
                        stroke: "1.5 #f7f7f7",
                        rotation: null,
                        anchor: null,
                        type: "arrowhead"
                    },
                    hoverMarkers: {
                        stroke: "1.5 #f7f7f7",
                        size: 15
                    },
                    selectMarkers: {
                        fill: "#333 0.85",
                        stroke: "1.5 #f7f7f7",
                        size: 15
                    },
                    labels: {
                        enabled: !1,
                        position: "middle",
                        anchor: null,
                        textFormatter: function() {
                            return "from: " + this.startPoint.lat + "," + this.startPoint["long"] + "\nto: " + this.endPoint.lat + "," + this.endPoint["long"]
                        }
                    },
                    tooltip: {
                        title: {
                            enabled: !1
                        },
                        separator: {
                            enabled: !1
                        },
                        textFormatter: function() {
                            return "from: " + this.startPoint.lat + ", " + this.startPoint["long"] +
                                "\nto: " + this.endPoint.lat + ", " + this.endPoint["long"]
                        }
                    }
                },
                bubble: {
                    hoverFill: "#757575",
                    selectFill: "#333 0.85",
                    tooltip: {
                        textFormatter: function() {
                            return "Id: " + this.id + "\nValue: " + this.valuePrefix + this.size + this.valuePostfix
                        }
                    }
                },
                marker: {
                    labels: {
                        enabled: !0
                    },
                    hoverLabels: {
                        fontWeight: "bold"
                    },
                    selectLabels: {
                        fontWeight: "bold"
                    },
                    tooltip: {
                        textFormatter: function() {
                            var a;
                            a = this.id ? "Id: " + this.id : "lat: " + this.lat + "\nlong: " + this["long"];
                            this.value && (a += "\nValue: " + this.valuePrefix + this.value + this.valuePostfix);
                            return a
                        }
                    }
                }
            },
            colorRange: {
                zIndex: 50
            },
            unboundRegions: {
                enabled: !0,
                fill: "#F7F7F7",
                stroke: "#e0e0e0"
            },
            legend: {
                enabled: !1
            },
            maxBubbleSize: "20%",
            minBubbleSize: "5%",
            geoIdField: "id",
            interactivity: {
                copyFormatter: function(a) {
                    a = a.seriesStatus;
                    for (var b = "", c = 0, e = a.length; c < e; c++) {
                        var d = a[c];
                        if (0 != d.points.length) {
                            for (var b = b + ("Series " + d.series.index() + ":\n"), f = 0, g = d.points.length; f < g; f++) {
                                var h = d.points[f],
                                    b = b + ("id: " + h.id + " index: " + h.index);
                                f != g - 1 && (b += "\n")
                            }
                            c != e - 1 && (b += "\n")
                        }
                    }
                    return b || "no selected points"
                },
                drag: !0,
                mouseWheel: !1
            },
            crsAnimation: {
                enabled: !0,
                duration: 300
            }
        },
        choropleth: {},
        bubbleMap: {},
        markerMap: {},
        connector: {},
        circularGauge: {
            title: {
                enabled: !1
            },
            defaultAxisSettings: {
                startAngle: null,
                labels: {
                    position: "inside",
                    adjustFontSize: !0
                },
                minorLabels: {
                    position: "inside",
                    adjustFontSize: !0
                },
                fill: "#CECECE",
                ticks: {
                    hatchFill: !1,
                    type: "line",
                    position: "center",
                    length: null,
                    fill: "#545f69",
                    stroke: "none"
                },
                minorTicks: {
                    hatchFill: !1,
                    type: "line",
                    position: "center",
                    length: null,
                    fill: "#545f69",
                    stroke: "none"
                },
                zIndex: 10
            },
            defaultPointerSettings: {
                base: {
                    enabled: !0,
                    fill: "#545f69",
                    stroke: "#545f69",
                    hatchFill: !1,
                    axisIndex: 0
                },
                bar: {
                    position: "center"
                },
                marker: {
                    size: 4,
                    hoverSize: 6,
                    selectSize: 6,
                    position: "inside",
                    type: "triangleUp"
                },
                knob: {
                    fill: "#CECECE",
                    stroke: "#c1c1c1",
                    verticesCount: 6,
                    verticesCurvature: .5,
                    topRatio: .5,
                    bottomRatio: .5
                }
            },
            defaultRangeSettings: {
                enabled: !0,
                axisIndex: 0,
                fill: "#7c868e 0.7",
                position: "center",
                startSize: 0,
                endSize: "10%"
            },
            fill: "#f5f5f5",
            stroke: "#EAEAEA",
            startAngle: 0,
            sweepAngle: 360,
            cap: {
                enabled: !1,
                fill: "#EAEAEA",
                stroke: "#CECECE",
                hatchFill: !1,
                radius: "15%",
                zIndex: 50
            },
            circularPadding: "10%",
            encloseWithStraightLine: !1,
            axes: [],
            bars: [],
            markers: [],
            needles: [],
            knobs: [],
            ranges: [],
            tooltip: {
                title: {
                    enabled: !1
                },
                separator: {
                    enabled: !1
                },
                titleFormatter: function() {
                    return this.index
                },
                textFormatter: function() {
                    return "Value: " + this.value
                }
            }
        },
        heatMap: {
            scales: [{
                type: "ordinal",
                inverted: !1,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "ordinal",
                inverted: !0,
                names: [],
                ticks: {
                    interval: 1
                }
            }, {
                type: "ordinalColor"
            }],
            xScale: 0,
            yScale: 1,
            colorScale: 2,
            background: {
                enabled: !0
            },
            xAxes: [{
                orientation: "top"
            }],
            yAxes: [{}],
            grids: [],
            tooltip: {
                enabled: !0,
                title: {
                    enabled: !0,
                    fontSize: 13,
                    fontWeight: "normal"
                },
                content: {
                    fontSize: 11
                },
                separator: {
                    enabled: !0
                },
                titleFormatter: function() {
                    return this.name || this.x
                },
                textFormatter: function() {
                    if (void 0 === this.heat) {
                        var a = "Value: " + this.valuePrefix + this.heat + this.valuePostfix;
                        isNaN(+this.heat) || (a += "\nPercent Value: " + (100 * this.heat / this.getStat("sum")).toFixed(1) + "%");
                        return a
                    }
                    return "x: " + this.x + "\ny: " + this.y
                }
            },
            legendItem: {
                iconStroke: null
            },
            legend: {
                itemsSourceMode: "categories"
            },
            defaultXAxisSettings: {
                enabled: !0,
                orientation: "bottom",
                ticks: {
                    enabled: !1
                },
                title: {
                    text: "X-Axis"
                }
            },
            defaultYAxisSettings: {
                enabled: !0,
                orientation: "left",
                ticks: {
                    enabled: !1
                },
                title: {
                    text: "Y-Axis"
                }
            },
            fill: function() {
                var a;
                this.colorScale ? (a = this.iterator.get("heat"), a = this.colorScale.valueToColor(a)) : a = window.anychart.color.setOpacity(this.sourceColor, .85, !0);
                return a
            },
            stroke: "1 #ffffff",
            hoverStroke: "1.5 #ffffff",
            hoverFill: "#757575",
            selectStroke: "2 #ffffff",
            selectFill: "#333 0.85",
            labels: {
                enabled: !0,
                fontSize: 11,
                adjustFontSize: {
                    width: !0,
                    height: !0
                },
                minFontSize: 7,
                maxFontSize: 13,
                hAlign: "center",
                vAlign: "center",
                textWrap: "noWrap",
                fontWeight: "normal",
                fontColor: "#212121",
                selectable: !1,
                background: {
                    enabled: !1
                },
                padding: {
                    top: 2,
                    right: 4,
                    bottom: 2,
                    left: 4
                },
                position: "center",
                anchor: "center",
                offsetX: 0,
                offsetY: 0,
                rotation: 0,
                width: null,
                height: null,
                textFormatter: function() {
                    return this.heat
                },
                positionFormatter: c
            },
            hoverLabels: {
                fontColor: "#f5f5f5",
                enabled: null
            },
            selectLabels: {
                fontColor: "#fff",
                enabled: null
            },
            markers: {
                enabled: !1,
                disablePointerEvents: !1,
                position: "center",
                rotation: 0,
                anchor: "center",
                offsetX: 0,
                offsetY: 0,
                size: 4,
                positionFormatter: c
            },
            hoverMarkers: {
                enabled: null
            },
            selectMarkers: {
                enabled: null
            },
            labelsDisplayMode: "drop",
            hatchFill: !1,
            clip: !0,
            xZoom: {
                continuous: !0,
                startRatio: 0,
                endRatio: 1
            },
            yZoom: {
                continuous: !0,
                startRatio: 0,
                endRatio: 1
            },
            yScroller: {
                orientation: "right",
                inverted: !0
            }
        },
        treeMap: {
            sort: "desc",
            labelsDisplayMode: "clip",
            headersDisplayMode: "alwaysShow",
            colorRange: {
                zIndex: 50
            },
            colorScale: {
                type: "ordinalColor"
            },
            tooltip: {
                enabled: !0,
                titleFormatter: v,
                textFormatter: c
            },
            legend: {
                itemsSourceMode: "categories"
            },
            maxDepth: 1,
            hintDepth: 0,
            hintOpacity: .4,
            maxHeadersHeight: "25",
            headers: {
                enabled: !0,
                hAlign: "center",
                vAlign: "center",
                position: "leftTop",
                anchor: "leftTop",
                rotation: 0,
                background: {
                    enabled: !0,
                    fill: "#F7F7F7",
                    stroke: "#e0e0e0"
                },
                textFormatter: v
            },
            hoverHeaders: {
                enabled: !0,
                fontColor: "#333 0.85",
                background: {
                    fill: "#e0e0e0",
                    stroke: "#e0e0e0"
                }
            },
            labels: {
                enabled: !0,
                hAlign: "center",
                vAlign: "center",
                position: "leftTop",
                anchor: "leftTop",
                rotation: 0,
                fontColor: "#212121",
                textFormatter: function() {
                    return (this.name ||
                        this.getDataValue("id")) + "\n" + this.value
                }
            },
            hoverLabels: {
                enabled: null,
                fontWeight: "bold"
            },
            selectLabels: {
                enabled: null,
                fontColor: "#fafafa"
            },
            markers: {
                enabled: !1,
                position: "center",
                size: 6
            },
            hoverMarkers: {
                enabled: null,
                size: 8
            },
            selectMarkers: {
                enabled: null,
                size: 8
            },
            fill: function() {
                return this.colorScale ? this.colorScale.valueToColor(this.value) : window.anychart.color.setOpacity(this.sourceColor, .85, !0)
            },
            stroke: "#e0e0e0",
            hoverFill: f,
            hoverStroke: e,
            selectFill: "#333 0.85",
            selectStroke: "1.5 #212121",
            hatchFill: !1,
            hoverHatchFill: !1,
            selectHatchFill: !1
        },
        defaultDataGrid: {
            isStandalone: !0,
            headerHeight: 25,
            backgroundFill: "#fff",
            columnStroke: "#cecece",
            rowStroke: "#cecece",
            rowOddFill: "#fff",
            rowEvenFill: "#fff",
            rowFill: "#fff",
            hoverFill: "#F8FAFB",
            rowSelectedFill: "#ebf1f4",
            zIndex: 5,
            editing: !1,
            editStructurePreviewFill: {
                color: "#4285F4",
                opacity: .2
            },
            editStructurePreviewStroke: {
                color: "#4285F4",
                thickness: 2
            },
            editStructurePreviewDashStroke: {
                color: "#4285F4",
                dash: "4 4"
            },
            headerFill: "#f7f7f7",
            tooltip: {
                padding: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5
                },
                title: {
                    enabled: !0,
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontColor: "#e5e5e5"
                },
                separator: {
                    enabled: !0
                },
                anchor: "leftTop",
                content: {
                    hAlign: "left"
                },
                textFormatter: function() {
                    var a = this.name;
                    return void 0 !== a ? a + "" : ""
                }
            },
            defaultColumnSettings: {
                width: 90,
                cellTextSettings: {
                    enabled: !0,
                    anchor: "leftTop",
                    vAlign: "middle",
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 5
                    },
                    textWrap: "noWrap",
                    background: null,
                    rotation: 0,
                    width: null,
                    height: null,
                    fontSize: 11,
                    minFontSize: 8,
                    maxFontSize: 72,
                    disablePointerEvents: !0
                },
                depthPaddingMultiplier: 0,
                collapseExpandButtons: !1,
                title: {
                    enabled: !0,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    textWrap: "noWrap",
                    hAlign: "center",
                    vAlign: "middle",
                    background: {
                        enabled: !1
                    }
                },
                textFormatter: function() {
                    return ""
                }
            },
            columns: [{
                width: 50,
                textFormatter: function() {
                    var a = this.item.meta("index");
                    return null != a ? a + 1 + "" : ""
                },
                title: {
                    text: "#"
                }
            }, {
                width: 170,
                collapseExpandButtons: !0,
                depthPaddingMultiplier: 15,
                textFormatter: function() {
                    var a = this.name;
                    return null != a ? a + "" : ""
                },
                title: {
                    text: "Name"
                }
            }]
        },
        ganttBase: {
            splitterPosition: "30%",
            headerHeight: 70,
            hoverFill: "#F8FAFB",
            rowSelectedFill: "#ebf1f4",
            rowStroke: "#cecece",
            editing: !1,
            title: {
                enabled: !1
            },
            legend: {
                enabled: !1
            },
            credits: {
                inChart: !0
            },
            background: {
                fill: "#fff"
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            dataGrid: {
                isStandalone: !1,
                backgroundFill: "none"
            },
            timeline: {
                columnStroke: "#cecece",
                rowStroke: "#cecece",
                backgroundFill: "none",
                rowOddFill: "#fff",
                rowEvenFill: "#fff",
                rowFill: "#fff",
                hoverFill: "#F8FAFB",
                rowSelectedFill: "#ebf1f4",
                zIndex: 5,
                headerHeight: 70,
                editing: !1,
                connectorPreviewStroke: {
                    color: "#545f69",
                    dash: "3 3"
                },
                editPreviewFill: {
                    color: "#fff",
                    opacity: 1E-5
                },
                editPreviewStroke: {
                    color: "#aaa",
                    dash: "3 3"
                },
                editProgressFill: "#EAEAEA",
                editProgressStroke: "#545f69",
                editIntervalThumbFill: "#EAEAEA",
                editIntervalThumbStroke: "#545f69",
                editConnectorThumbFill: "#EAEAEA",
                editConnectorThumbStroke: "#545f69",
                editStructurePreviewFill: {
                    color: "#4285F4",
                    opacity: .2
                },
                editStructurePreviewStroke: {
                    color: "#4285F4",
                    thickness: 2
                },
                editStructurePreviewDashStroke: {
                    color: "#4285F4",
                    dash: "4 4"
                },
                baseFill: "#7ec1f5",
                baseStroke: "#74b2e2",
                progressFill: "#1976d2",
                progressStroke: {
                    color: "#fff",
                    opacity: 1E-5
                },
                baselineFill: "#d5ebfc",
                baselineStroke: "#bfd1e0",
                parentFill: "#455a64",
                parentStroke: "#2f3f46",
                milestoneFill: "#ffa000",
                milestoneStroke: "#d26104",
                connectorFill: "#545f69",
                connectorStroke: "#545f69",
                selectedElementFill: "#ef6c00",
                selectedElementStroke: "#bc5704",
                selectedConnectorStroke: "2 #bc5704",
                minimumGap: .1,
                maximumGap: .1,
                baselineAbove: !1,
                tooltip: {
                    padding: {
                        top: 5,
                        right: 5,
                        bottom: 5,
                        left: 5
                    },
                    title: {
                        enabled: !0,
                        fontSize: "14px",
                        fontWeight: "normal",
                        fontColor: "#e5e5e5"
                    },
                    separator: {
                        enabled: !0
                    },
                    anchor: "leftTop",
                    content: {
                        hAlign: "left"
                    }
                },
                labels: {
                    enabled: !0,
                    anchor: "leftCenter",
                    position: "rightCenter",
                    padding: {
                        top: 3,
                        right: 5,
                        bottom: 3,
                        left: 5
                    },
                    vAlign: "middle",
                    textWrap: "noWrap",
                    background: null,
                    rotation: 0,
                    width: null,
                    height: null,
                    fontSize: 11,
                    minFontSize: 8,
                    maxFontSize: 72,
                    zIndex: 40,
                    disablePointerEvents: !0
                },
                markers: {
                    anchor: "centerTop",
                    zIndex: 50,
                    type: "star5",
                    fill: "#ff0",
                    stroke: "2 red"
                },
                defaultLineMarkerSettings: {
                    layout: "vertical",
                    zIndex: 1.5
                },
                defaultRangeMarkerSettings: {
                    layout: "vertical",
                    zIndex: 1
                },
                defaultTextMarkerSettings: {
                    layout: "vertical",
                    zIndex: 2,
                    textWrap: "byLetter"
                },
                header: {
                    labelsFactory: {
                        enabled: !0,
                        anchor: "leftTop",
                        vAlign: "middle",
                        padding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 5
                        },
                        textWrap: "noWrap",
                        background: null,
                        rotation: 0,
                        width: null,
                        height: null,
                        fontSize: 11,
                        minFontSize: 8,
                        maxFontSize: 72,
                        disablePointerEvents: !0
                    }
                }
            }
        },
        ganttResource: {
            dataGrid: {
                tooltip: {
                    titleFormatter: function() {
                        return this.name || ""
                    },
                    textFormatter: function() {
                        var a = this.minPeriodDate,
                            b = this.maxPeriodDate;
                        return (a ? "Start Date: " +
                            window.anychart.format.dateTime(a) : "") + (b ? "\nEnd Date: " + window.anychart.format.dateTime(b) : "")
                    }
                }
            },
            timeline: {
                tooltip: {
                    titleFormatter: function() {
                        return this.name || ""
                    },
                    textFormatter: function() {
                        var a = this.periodStart || this.minPeriodDate,
                            b = this.periodEnd || this.maxPeriodDate;
                        return (a ? "Start Date: " + window.anychart.format.dateTime(a) : "") + (b ? "\nEnd Date: " + window.anychart.format.dateTime(b) : "")
                    }
                }
            }
        },
        ganttProject: {
            dataGrid: {
                tooltip: {
                    titleFormatter: function() {
                        return this.name || ""
                    },
                    textFormatter: function() {
                        var a =
                            this.actualStart || this.autoStart,
                            b = this.actualEnd || this.autoEnd,
                            c = this.progressValue;
                        void 0 === c && (c = (Math.round(1E4 * this.autoProgress) / 100 || 0) + "%");
                        return (a ? "Start Date: " + window.anychart.format.dateTime(a) : "") + (b ? "\nEnd Date: " + window.anychart.format.dateTime(b) : "") + (c ? "\nComplete: " + c : "")
                    }
                }
            },
            timeline: {
                tooltip: {
                    titleFormatter: function() {
                        return this.name || ""
                    },
                    textFormatter: function() {
                        var a = this.actualStart || this.autoStart,
                            b = this.actualEnd || this.autoEnd,
                            c = this.progressValue;
                        void 0 === c && (c = (Math.round(1E4 *
                            this.autoProgress) / 100 || 0) + "%");
                        return (a ? "Start Date: " + window.anychart.format.dateTime(a) : "") + (b ? "\nEnd Date: " + window.anychart.format.dateTime(b) : "") + (c ? "\nComplete: " + c : "")
                    }
                }
            }
        },
        stock: {
            grouping: {},
            scrollerGrouping: {
                levels: [{
                    unit: "millisecond",
                    count: 1
                }, {
                    unit: "millisecond",
                    count: 2
                }, {
                    unit: "millisecond",
                    count: 5
                }, {
                    unit: "millisecond",
                    count: 10
                }, {
                    unit: "millisecond",
                    count: 25
                }, {
                    unit: "millisecond",
                    count: 50
                }, {
                    unit: "millisecond",
                    count: 100
                }, {
                    unit: "millisecond",
                    count: 250
                }, {
                    unit: "millisecond",
                    count: 500
                }, {
                    unit: "second",
                    count: 1
                }, {
                    unit: "second",
                    count: 2
                }, {
                    unit: "second",
                    count: 5
                }, {
                    unit: "second",
                    count: 10
                }, {
                    unit: "second",
                    count: 20
                }, {
                    unit: "second",
                    count: 30
                }, {
                    unit: "minute",
                    count: 1
                }, {
                    unit: "minute",
                    count: 2
                }, {
                    unit: "minute",
                    count: 5
                }, {
                    unit: "minute",
                    count: 10
                }, {
                    unit: "minute",
                    count: 20
                }, {
                    unit: "minute",
                    count: 30
                }, {
                    unit: "hour",
                    count: 1
                }, {
                    unit: "hour",
                    count: 2
                }, {
                    unit: "hour",
                    count: 3
                }, {
                    unit: "hour",
                    count: 4
                }, {
                    unit: "hour",
                    count: 6
                }, {
                    unit: "hour",
                    count: 12
                }, {
                    unit: "day",
                    count: 1
                }, {
                    unit: "day",
                    count: 2
                }, {
                    unit: "day",
                    count: 4
                }, {
                    unit: "week",
                    count: 1
                }, {
                    unit: "week",
                    count: 2
                }, {
                    unit: "month",
                    count: 1
                }, {
                    unit: "month",
                    count: 2
                }, {
                    unit: "month",
                    count: 3
                }, {
                    unit: "month",
                    count: 6
                }, {
                    unit: "year",
                    count: 1
                }],
                maxVisiblePoints: NaN,
                minPixPerPoint: 1
            },
            defaultPlotSettings: {
                background: {
                    enabled: !1
                },
                defaultSeriesSettings: {
                    base: {
                        pointWidth: "75%",
                        tooltip: {
                            textFormatter: function() {
                                return this.seriesName + ": " + this.valuePrefix + parseFloat(this.value).toFixed(2) + this.valuePostfix
                            }
                        },
                        legendItem: {
                            iconStroke: "none"
                        }
                    },
                    rangeArea: {
                        tooltip: {
                            textFormatter: k
                        }
                    },
                    rangeSplineArea: {
                        tooltip: {
                            textFormatter: k
                        }
                    },
                    rangeStepArea: {
                        tooltip: {
                            textFormatter: k
                        }
                    },
                    candlestick: {
                        tooltip: {
                            textFormatter: t
                        }
                    },
                    column: {
                        stroke: "none"
                    },
                    rangeColumn: {
                        stroke: "none",
                        tooltip: {
                            textFormatter: k
                        }
                    },
                    ohlc: {
                        tooltip: {
                            textFormatter: t
                        }
                    }
                },
                defaultGridSettings: {
                    scale: 0
                },
                defaultMinorGridSettings: {
                    scale: 0
                },
                defaultYAxisSettings: {
                    enabled: !0,
                    orientation: "left",
                    title: {
                        enabled: !1,
                        text: "Y-Axis"
                    },
                    staggerMode: !1,
                    staggerLines: null,
                    ticks: {
                        enabled: !0
                    },
                    width: 50,
                    labels: {
                        fontSize: "11px",
                        padding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 5
                        }
                    },
                    minorLabels: {
                        fontSize: "11px",
                        padding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 5
                        }
                    },
                    scale: 0
                },
                xAxis: {
                    enabled: !0,
                    orientation: "bottom",
                    background: {
                        stroke: "#cecece",
                        fill: "#F7F7F7"
                    },
                    height: 25,
                    scale: 0,
                    ticks: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !0,
                        fontSize: "11px",
                        padding: {
                            top: 5,
                            right: 5,
                            bottom: 5,
                            left: 5
                        },
                        anchor: "centerTop",
                        textFormatter: function() {
                            var a = this.tickValue;
                            switch (this.majorIntervalUnit) {
                                case "year":
                                    return window.anychart.format.dateTime(a, "yyyy");
                                case "semester":
                                case "quarter":
                                case "month":
                                    return window.anychart.format.dateTime(a, "yyyy MMM");
                                case "thirdOfMonth":
                                case "week":
                                case "day":
                                    return window.anychart.format.dateTime(a,
                                        "MMM dd");
                                case "hour":
                                    return window.anychart.format.dateTime(a, "MMM-dd HH");
                                case "minute":
                                    return window.anychart.format.dateTime(a, "dd HH:mm");
                                case "second":
                                    return window.anychart.format.dateTime(a, "HH:mm:ss");
                                case "millisecond":
                                    return window.anychart.format.dateTime(a, "HH:mm:ss.SSS")
                            }
                            return window.anychart.format.dateTime(a, "yyyy MMM dd")
                        }
                    },
                    minorLabels: {
                        enabled: !0,
                        anchor: "centerTop",
                        fontSize: "11px",
                        padding: {
                            top: 5,
                            right: 0,
                            bottom: 5,
                            left: 0
                        },
                        textFormatter: function() {
                            var a = this.tickValue;
                            switch (this.majorIntervalUnit) {
                                case "year":
                                    return window.anychart.format.dateTime(a,
                                        "yyyy");
                                case "semester":
                                case "quarter":
                                case "month":
                                    return window.anychart.format.dateTime(a, "MMM");
                                case "thirdOfMonth":
                                case "week":
                                case "day":
                                    return window.anychart.format.dateTime(a, "dd");
                                case "hour":
                                    return window.anychart.format.dateTime(a, "HH");
                                case "minute":
                                    return window.anychart.format.dateTime(a, "HH:mm");
                                case "second":
                                    return window.anychart.format.dateTime(a, "HH:mm:ss");
                                case "millisecond":
                                    return window.anychart.format.dateTime(a, "SSS")
                            }
                            return window.anychart.format.dateTime(a, "HH:mm:ss.SSS")
                        }
                    }
                },
                dateTimeHighlighter: "#B9B9B9",
                legend: {
                    enabled: !0,
                    vAlign: "bottom",
                    iconSize: 13,
                    position: "top",
                    titleFormatter: function() {
                        var a = this.value;
                        switch (this.dataIntervalUnit) {
                            case "year":
                                return window.anychart.format.dateTime(a, "yyyy");
                            case "semester":
                            case "quarter":
                            case "month":
                                return window.anychart.format.dateTime(a, "MMM yyyy");
                            case "hour":
                            case "minute":
                                return window.anychart.format.dateTime(a, "HH:mm, dd MMM");
                            case "second":
                                return window.anychart.format.dateTime(a, "HH:mm:ss");
                            case "millisecond":
                                return window.anychart.format.dateTime(a,
                                    "HH:mm:ss.SSS")
                        }
                        return window.anychart.format.dateTime(a, "dd MMM yyyy")
                    },
                    align: "center",
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    title: {
                        enabled: !0,
                        fontSize: 12,
                        text: "",
                        background: {
                            enabled: !1,
                            fill: {
                                keys: ["#fff", "#f3f3f3", "#fff"],
                                angle: "90"
                            },
                            stroke: {
                                keys: ["#ddd", "#d0d0d0"],
                                angle: "90"
                            }
                        },
                        margin: {
                            top: 0,
                            right: 15,
                            bottom: 0,
                            left: 0
                        },
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        orientation: "left",
                        align: "left",
                        hAlign: "left",
                        rotation: 0
                    },
                    titleSeparator: {
                        enabled: !1,
                        width: "100%",
                        height: 1,
                        margin: {
                            top: 3,
                            right: 0,
                            bottom: 3,
                            left: 0
                        },
                        orientation: "top",
                        fill: ["#000 0", "#000", "#000 0"],
                        stroke: "none"
                    }
                },
                scales: [{
                    type: "linear",
                    inverted: !1,
                    maximum: null,
                    minimum: null,
                    minimumGap: .1,
                    maximumGap: .1,
                    softMinimum: null,
                    softMaximum: null,
                    ticks: {
                        mode: "linear",
                        base: 0,
                        minCount: 4,
                        maxCount: 6
                    },
                    minorTicks: {
                        mode: "linear",
                        base: 0,
                        count: 5
                    },
                    stackMode: "none",
                    stickToZero: !0
                }],
                yScale: 0,
                zIndex: 10,
                yAxes: [{}]
            },
            padding: [20, 30, 20, 60],
            plots: [{}],
            scroller: {
                defaultSeriesSettings: {
                    base: {
                        color: "#64b5f6",
                        fill: "#999 0.6",
                        selectFill: d,
                        stroke: "#999 0.6",
                        selectStroke: d,
                        lowStroke: "#999 0.6",
                        selectLowStroke: d,
                        highStroke: "#999 0.6",
                        selectHighStroke: d,
                        pointWidth: "75%"
                    },
                    marker: {
                        fill: "#999 0.6",
                        stroke: "#999 0.6",
                        selectFill: d,
                        selectStroke: d
                    },
                    areaLike: {
                        fill: "#999 0.6"
                    },
                    barLike: {
                        fill: "#999 0.6"
                    },
                    candlestick: {
                        risingFill: "#999 0.6",
                        risingStroke: "#999 0.6",
                        fallingFill: "#999 0.6",
                        fallingStroke: "#999 0.6",
                        selectFallingFill: "#ef6c00",
                        selectRisingFill: "#64b5f6",
                        selectRisingStroke: "#64b5f6",
                        selectFallingStroke: "#ef6c00"
                    },
                    ohlc: {
                        risingStroke: "#999 0.6",
                        fallingStroke: "#999 0.6",
                        selectRisingStroke: "#64b5f6",
                        selectFallingStroke: "#ef6c00"
                    }
                },
                enabled: !0,
                fill: "none",
                selectedFill: "#1976d2 0.2",
                outlineStroke: "#cecece",
                height: 40,
                minHeight: null,
                maxHeight: null,
                zIndex: 40,
                xAxis: {
                    background: {
                        enabled: !1
                    },
                    minorTicks: {
                        enabled: !0,
                        stroke: "#cecece"
                    },
                    labels: {
                        enabled: !0,
                        fontSize: "11px",
                        padding: {
                            top: 5,
                            right: 5,
                            bottom: 5,
                            left: 5
                        },
                        anchor: "leftTop",
                        textFormatter: function() {
                            var a = this.tickValue;
                            switch (this.majorIntervalUnit) {
                                case "year":
                                    return window.anychart.format.dateTime(a, "yyyy");
                                case "semester":
                                case "quarter":
                                case "month":
                                    return window.anychart.format.dateTime(a,
                                        "yyyy MMM");
                                case "thirdOfMonth":
                                case "week":
                                case "day":
                                    return window.anychart.format.dateTime(a, "MMM dd");
                                case "hour":
                                    return window.anychart.format.dateTime(a, "MMM-dd HH");
                                case "minute":
                                    return window.anychart.format.dateTime(a, "dd HH:mm");
                                case "second":
                                    return window.anychart.format.dateTime(a, "HH:mm:ss");
                                case "millisecond":
                                    return window.anychart.format.dateTime(a, "HH:mm:ss.SSS")
                            }
                            return window.anychart.format.dateTime(a, "yyyy MMM dd")
                        }
                    },
                    minorLabels: {
                        enabled: !0,
                        anchor: "leftTop",
                        fontSize: "11px",
                        padding: {
                            top: 5,
                            right: 5,
                            bottom: 5,
                            left: 5
                        },
                        textFormatter: function() {
                            var a = this.tickValue;
                            switch (this.majorIntervalUnit) {
                                case "year":
                                    return window.anychart.format.dateTime(a, "yyyy");
                                case "semester":
                                case "quarter":
                                case "month":
                                    return window.anychart.format.dateTime(a, "MMM");
                                case "thirdOfMonth":
                                case "week":
                                case "day":
                                    return window.anychart.format.dateTime(a, "dd");
                                case "hour":
                                    return window.anychart.format.dateTime(a, "HH");
                                case "minute":
                                    return window.anychart.format.dateTime(a, "HH:mm");
                                case "second":
                                    return window.anychart.format.dateTime(a,
                                        "HH:mm:ss");
                                case "millisecond":
                                    return window.anychart.format.dateTime(a, "SSS")
                            }
                            return window.anychart.format.dateTime(a, "HH:mm:ss.SSS")
                        }
                    },
                    zIndex: 75
                }
            },
            tooltip: {
                allowLeaveScreen: !1,
                allowLeaveChart: !0,
                displayMode: "union",
                positionMode: "float",
                title: {
                    enabled: !0,
                    fontSize: 13
                },
                separator: {
                    enabled: !0
                },
                titleFormatter: function() {
                    var a = this.hoveredDate;
                    switch (this.dataIntervalUnit) {
                        case "year":
                            return window.anychart.format.dateTime(a, "yyyy");
                        case "semester":
                        case "quarter":
                        case "month":
                            return window.anychart.format.dateTime(a,
                                "MMM yyyy");
                        case "hour":
                        case "minute":
                            return window.anychart.format.dateTime(a, "HH:mm, dd MMM");
                        case "second":
                            return window.anychart.format.dateTime(a, "HH:mm:ss");
                        case "millisecond":
                            return window.anychart.format.dateTime(a, "HH:mm:ss.SSS")
                    }
                    return window.anychart.format.dateTime(a, "dd MMM yyyy")
                },
                textFormatter: function() {
                    return this.formattedValues.join("\n")
                }
            }
        },
        standalones: {
            background: {
                enabled: !0,
                zIndex: 0
            },
            label: {
                enabled: !0,
                text: "Label text",
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                width: null,
                height: null,
                anchor: "leftTop",
                position: "leftTop",
                offsetX: 0,
                offsetY: 0,
                minFontSize: 8,
                maxFontSize: 72,
                adjustFontSize: {
                    width: !1,
                    height: !1
                },
                rotation: 0,
                zIndex: 0
            },
            labelsFactory: {
                enabled: !0,
                zIndex: 0
            },
            legend: {
                enabled: !0,
                zIndex: 0
            },
            markersFactory: {
                enabled: !0,
                zIndex: 0
            },
            title: {
                enabled: !0,
                zIndex: 0
            },
            linearAxis: {
                enabled: !0,
                zIndex: 0,
                ticks: {
                    enabled: !0
                },
                minorTicks: {
                    enabled: !0
                }
            },
            polarAxis: {
                enabled: !0,
                startAngle: 0,
                zIndex: 0,
                ticks: {
                    enabled: !0
                },
                minorTicks: {
                    enabled: !0
                }
            },
            radarAxis: {
                enabled: !0,
                startAngle: 0,
                zIndex: 0,
                ticks: {
                    enabled: !0
                },
                minorTicks: {
                    enabled: !0
                }
            },
            radialAxis: {
                enabled: !0,
                startAngle: 0,
                zIndex: 0,
                ticks: {
                    enabled: !0
                },
                minorTicks: {
                    enabled: !0
                },
                minorLabels: {
                    padding: {
                        top: 1,
                        right: 1,
                        bottom: 0,
                        left: 1
                    }
                }
            },
            linearGrid: {
                enabled: !0,
                scale: null,
                zIndex: 0
            },
            polarGrid: {
                enabled: !0,
                layout: "circuit",
                zIndex: 0
            },
            radarGrid: {
                enabled: !0,
                layout: "circuit",
                zIndex: 0
            },
            lineAxisMarker: {
                enabled: !0,
                zIndex: 0
            },
            textAxisMarker: {
                enabled: !0,
                zIndex: 0
            },
            rangeAxisMarker: {
                enabled: !0,
                zIndex: 0
            },
            dataGrid: {
                enabled: !0,
                zIndex: 0
            },
            scroller: {
                enabled: !0
            }
        }
    }
})();
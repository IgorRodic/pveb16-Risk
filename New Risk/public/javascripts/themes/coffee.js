(function() {
    function c() {
        return window.anychart.color.lighten(this.sourceColor)
    }

    function b() {
        return window.anychart.color.darken(this.sourceColor)
    }

    function a() {
        return this.sourceColor
    }
    window.anychart = window.anychart || {};
    window.anychart.themes = window.anychart.themes || {};
    window.anychart.themes.coffee = {
        palette: {
            type: "distinct",
            items: "#482311 #8d5932 #d8b597 #f2d1be #9b301c #d81e05 #c5e1a5 #558b2f #ffab00 #e65100".split(" ")
        },
        defaultFontSettings: {
            fontFamily: '"Lucida Console", Monaco, monospace',
            fontColor: "#3e2723",
            fontSize: 12
        },
        defaultOrdinalColorScale: {
            autoColors: function(a) {
                return window.anychart.color.blendedHueProgression("#d8b597", "#9b301c", a)
            }
        },
        defaultLinearColorScale: {
            colors: ["#d8b597", "#9b301c"]
        },
        defaultBackground: {
            fill: "#a1887f",
            stroke: null,
            cornerType: "round",
            corners: 0
        },
        defaultAxis: {
            stroke: "#6d4c41 0.5",
            ticks: {
                stroke: "#6d4c41 0.5"
            },
            minorTicks: {
                stroke: "#6d4c41 0.3"
            }
        },
        defaultGridSettings: {
            stroke: "#6d4c41 0.5"
        },
        defaultMinorGridSettings: {
            stroke: "#6d4c41 0.3"
        },
        defaultSeparator: {
            fill: "#6d4c41 0.5"
        },
        defaultTooltip: {
            title: {
                fontColor: "#3e2723",
                padding: {
                    bottom: 8
                },
                fontSize: 14
            },
            content: {
                fontColor: "#5d4037",
                fontSize: 12
            },
            separator: {
                enabled: !1
            },
            fontColor: "#5d4037",
            fontSize: 12,
            background: {
                fill: "#d7ccc8 0.9",
                stroke: "3 #bcaaa4",
                corners: 7
            },
            padding: {
                top: 10,
                right: 20,
                bottom: 15,
                left: 20
            }
        },
        defaultColorRange: {
            stroke: "#8d6e63",
            ticks: {
                stroke: "#8d6e63",
                position: "outside",
                length: 7,
                enabled: !0
            },
            minorTicks: {
                stroke: "#8d6e63",
                position: "outside",
                length: 5,
                enabled: !0
            },
            marker: {
                padding: {
                    top: 3,
                    right: 3,
                    bottom: 3,
                    left: 3
                },
                fill: "#6d4c41",
                hoverFill: "#d7ccc8"
            }
        },
        defaultScroller: {
            fill: "#94786e",
            selectedFill: "#8d6e63",
            thumbs: {
                fill: "#a1887f",
                stroke: "#6d4c41",
                hoverFill: "#bcaaa4",
                hoverStroke: "#6d4c41"
            }
        },
        defaultLegend: {
            paginator: {
                buttonsSettings: {
                    normal: {
                        stroke: "#4e342e",
                        fill: "#5d4037"
                    },
                    hover: {
                        stroke: "#3e2723",
                        fill: "#4e342e"
                    },
                    pushed: {
                        stroke: "#3e2723",
                        fill: "#3e2723"
                    },
                    disabled: {
                        stroke: null,
                        fill: "#ac948b"
                    }
                }
            }
        },
        chart: {
            defaultSeriesSettings: {
                base: {
                    selectFill: "#fcece2",
                    selectStroke: "2 #482311"
                },
                lineLike: {
                    selectStroke: "3 #482311",
                    selectMarkers: {
                        enabled: !0,
                        fill: "#fcece2",
                        stroke: "1.5 #482311"
                    }
                },
                areaLike: {
                    selectStroke: "3 #482311",
                    selectMarkers: {
                        enabled: !0,
                        fill: "#fcece2",
                        stroke: "1.5 #482311"
                    }
                },
                candlestick: {
                    risingFill: "#482311",
                    risingStroke: "#482311",
                    hoverRisingFill: c,
                    hoverRisingStroke: b,
                    fallingFill: "#8d5932",
                    fallingStroke: "#8d5932",
                    hoverFallingFill: c,
                    hoverFallingStroke: b,
                    selectRisingStroke: "3 #482311",
                    selectFallingStroke: "3 #8d5932",
                    selectRisingFill: "#333333 0.85",
                    selectFallingFill: "#333333 0.85"
                },
                ohlc: {
                    risingStroke: "#482311",
                    hoverRisingStroke: b,
                    fallingStroke: "#8d5932",
                    hoverFallingStroke: b,
                    selectRisingStroke: "3 #482311",
                    selectFallingStroke: "3 #8d5932"
                }
            },
            title: {
                fontColor: "#29120e",
                fontSize: 14
            },
            padding: {
                top: 20,
                right: 25,
                bottom: 5,
                left: 25
            }
        },
        cartesianBase: {
            defaultSeriesSettings: {
                box: {
                    selectMedianStroke: "#a1887f",
                    selectStemStroke: "#a1887f",
                    selectWhiskerStroke: "#a1887f",
                    selectOutlierMarkers: {
                        enabled: null,
                        size: 4,
                        fill: "#fcece2",
                        stroke: "#a1887f"
                    }
                }
            }
        },
        pieFunnelPyramidBase: {
            labels: {
                fontColor: null
            },
            selectFill: "#fcece2",
            selectStroke: "1.5 #482311",
            connectorStroke: "#6d4c41 0.5",
            outsideLabels: {
                autoColor: "#3e2723"
            },
            insideLabels: {
                autoColor: "#eeeeee"
            },
            legend: {
                enabled: !0,
                position: "right",
                vAlign: "top",
                itemsLayout: "vertical",
                align: "center",
                paginator: {
                    orientation: "bottom"
                }
            }
        },
        map: {
            unboundRegions: {
                enabled: !0,
                fill: "#bcaaa4",
                stroke: "#d7ccc8"
            },
            defaultSeriesSettings: {
                base: {
                    stroke: "#d7ccc8",
                    hoverFill: "#fcece2 0.6",
                    labels: {
                        fontColor: "#fafafa"
                    }
                },
                bubble: {
                    stroke: b
                },
                connector: {
                    selectStroke: "1.5 #000",
                    hoverStroke: "#8d5932",
                    stroke: "#482311",
                    markers: {
                        fill: "#482311",
                        stroke: "1.5 #bcaaa4"
                    },
                    hoverMarkers: {
                        fill: "#482311",
                        stroke: "1.5 #bcaaa4"
                    },
                    selectMarkers: {
                        fill: "#000",
                        stroke: "1.5 #bcaaa4"
                    }
                },
                marker: {
                    labels: {
                        fontColor: "#3e2723"
                    }
                }
            }
        },
        sparkline: {
            padding: 0,
            background: {
                stroke: "#a1887f"
            },
            defaultSeriesSettings: {
                area: {
                    stroke: "1.5 #482311",
                    fill: "#482311 0.5"
                },
                column: {
                    fill: "#482311",
                    negativeFill: "#8d5932"
                },
                line: {
                    stroke: "1.5 #482311"
                },
                winLoss: {
                    fill: "#482311",
                    negativeFill: "#8d5932"
                }
            }
        },
        bullet: {
            background: {
                stroke: "#a1887f"
            },
            defaultMarkerSettings: {
                fill: "#482311",
                stroke: "2 #482311"
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
            rangePalette: {
                items: ["#D2C5C1", "#C7B8B2",
                    "#BCAAA4", "#B4A099", "#A9928A"
                ]
            }
        },
        heatMap: {
            stroke: "1 #a1887f",
            hoverStroke: "1.5 #a1887f",
            hoverFill: "#fcece2 0.6",
            selectFill: "#fcece2",
            selectStroke: "2 #482311",
            labels: {
                fontColor: "#212121"
            },
            selectLabels: {
                fontColor: "#212121"
            }
        },
        treeMap: {
            headers: {
                background: {
                    enabled: !0,
                    fill: "#8d6e63",
                    stroke: "#6d4c41",
                    corners: 0
                }
            },
            hoverHeaders: {
                fontColor: "#3e2723",
                background: {
                    fill: "#6d4c41",
                    stroke: "#6d4c41",
                    corners: 0
                }
            },
            labels: {
                fontColor: "#212121"
            },
            selectLabels: {
                fontColor: "#fafafa"
            },
            stroke: "#6d4c41",
            selectStroke: "2 #eceff1"
        },
        stock: {
            padding: [20, 30, 20, 60],
            defaultPlotSettings: {
                xAxis: {
                    background: {
                        fill: "#8d6e63 0.3",
                        stroke: "#8d6e63"
                    }
                }
            },
            scroller: {
                fill: "none",
                selectedFill: "#8d6e63 0.3",
                outlineStroke: "#8d6e63",
                defaultSeriesSettings: {
                    base: {
                        color: "#482311 0.6",
                        fill: "#bcaaa4",
                        stroke: "#bcaaa4",
                        selectFill: a,
                        selectStroke: a
                    },
                    lineLike: {
                        selectStroke: a,
                        fill: "#bcaaa4",
                        stroke: "#bcaaa4"
                    },
                    areaLike: {
                        selectStroke: a,
                        fill: "#bcaaa4",
                        stroke: "#bcaaa4"
                    },
                    candlestick: {
                        risingFill: "#bcaaa4",
                        risingStroke: "#bcaaa4",
                        fallingFill: "#bcaaa4",
                        fallingStroke: "#bcaaa4",
                        selectRisingStroke: a,
                        selectFallingStroke: a,
                        selectRisingFill: a,
                        selectFallingFill: a
                    },
                    ohlc: {
                        risingStroke: "#bcaaa4",
                        fallingStroke: "#bcaaa4",
                        selectRisingStroke: a,
                        selectFallingStroke: a
                    }
                }
            }
        }
    }
})();
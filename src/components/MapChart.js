import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MapChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let root = am5.Root.new("mapdiv");

    // Set theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
      })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow.default,
      })
    );

    // Create graticule series
    let graticuleSeries = chart.series.insertIndex(
      0,
      am5map.GraticuleSeries.new(root, {})
    );

    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color(0x000000),
      strokeOpacity: 0.1,
    });

    // Create background series
    let backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(0xedf7fa),
      stroke: am5.color(0xedf7fa),
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    chartRef.current = root;

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="mapdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapChart;

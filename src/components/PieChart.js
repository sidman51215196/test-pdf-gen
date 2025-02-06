import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

const PieChartComponent = ({ piechartId, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let root = am5.Root.new(piechartId);

    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
      })
    );

    series.data.setAll(data);

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerY: am5.percent(50),
        y: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
        layout: root.verticalLayout
      })
    );

    legend.data.setAll(series.dataItems);

    chartRef.current = root;

    return () => {
      root.dispose(); // Cleanup when component unmounts
    };
  }, [piechartId, data]);

  return <div id={piechartId} style={{ width: "100%", height: "500px" }}></div>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Pie Chart 1</h1>
      <PieChartComponent
        piechartId="chartdiv1"
        data={[
          { value: 10, category: "One" },
          { value: 9, category: "Two" },
          { value: 6, category: "Three" }
        ]}
      />

      <h1>Pie Chart 2</h1>
      <PieChartComponent
        piechartId="chartdiv2"
        data={[
          { value: 8, category: "Alpha" },
          { value: 7, category: "Beta" },
          { value: 5, category: "Gamma" }
        ]}
      />
    </div>
  );
}

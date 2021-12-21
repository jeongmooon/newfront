import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent = ({ data }) => {
  return (
    <Chart
      // width={"100%"}
      // height={"300px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        [
          "Element",
          "강도",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        ["단맛", data.sweet, "#000051", data.sweet],
        ["신맛", data.sour, "#ffeb3b", data.sour],
        ["쓴맛", data.bitter, "#005005", data.bitter],
      ]}
      options={{
        width: "100%",
        // height: 300,
        bar: {
          groupWidth: "80%",
        },
        legend: { position: "none" },
        annotations: {
          textStyle: {
            fontName: "Times-Roman",
            fontSize: 20,
            bold: true,
          },
          boxStyle: {},
        },
        hAxis: {
          textPosition: "none",
          viewWindowMode: "explicit",
          viewWindow: {
            min: 0,
            max: 10,
          },
          baselineColor: "#fff",
          gridlineColor: "#fff",
        },
        vAxis: {
          textPosition: "out",
          textStyle: {
            fontName: "KOTRA_SONGEULSSI",
            fontSize: 12,
            bold: true,
          },
        },
      }}
    />
  );
};

export default ChartComponent;

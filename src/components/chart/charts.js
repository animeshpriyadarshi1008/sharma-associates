import React from "react";
import Chart from "react-google-charts";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          width={"100%"}
          height={500}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={[
            ["PROJECT ", "Achievement Year"],
            ["Project Advisory", 1989],
            ["Project Finance", 1991],
            ["Corporate Finance ", 1996],
            ["Venture Incubartion ", 2000],
            ["Domestic M&A Incubartion ", 2003],
            ["Pe & Corporate ADV. ", 2005],
            ["present global M&A ", 2007],
          ]}
          options={{
            animation: {
              duration: 1000,
              easing: "out",
              startup: true,
            },
            colors: ["#87cefa"],
            title: "Sharma & Associates History",
            chartArea: { width: "50%" },
            hAxis: {
              title: "",
              minValue: 0,
            },
            vAxis: {
              title: "YEAR",
              format: "#",
            },
          }}
          legendToggle
        />
      </div>
    );
  }
}

import React from "react";

import Chart from "chart.js";
import classes from "./MonletChart.module.css";
class MonletChart extends React.Component<any, any>{
  chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = (this as any).chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["1", "7", "14", "21", "28"],
                datasets: [
                    {
                      label: "시간",
                      backgroundColor: "#fff2f0",
                      borderColor: "#ff6f61",
                      data: this.props.option ? [ 20, 22, 16, 21, 17 ]: [ 5, 1, 3, 7, 4 ],
                    }
                ]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: this.props.option ? 6 : 2
                  }
                }]
              }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={(this.chartRef as any)}
                />
            </div>
        )
    }
}

export default MonletChart;
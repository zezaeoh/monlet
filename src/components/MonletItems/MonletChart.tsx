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
                      label: "time",
                      backgroundColor: "#fff2f0",
                      borderColor: "#ff6f61",
                      data: [20, 22, 21, 19, 17, 20],
                    }
                ]
            },
            options: {
                //Customize chart options
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
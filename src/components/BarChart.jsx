import { useState } from 'react';
import { CategoryScale } from "chart.js";
import { Data } from '../utils/chartData';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);
const BarChart = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month),
        datasets: [
            {
                label: "Milk Production",
                data: Data.map((data) => data.milkProduction),
                backgroundColor: [
                    "rgba(10, 75, 110, .8)"
                ]
            }
        ]
    });
    return (
        <div className="h-[650px] w-full shadow-lg mt-5 p-5 overflow-auto relative">
            <h2 className="text-2xl">Milk Production</h2>
            <Bar 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Milk Production for 2023"
                        },
                        legend: {
                            display: false
                        }
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
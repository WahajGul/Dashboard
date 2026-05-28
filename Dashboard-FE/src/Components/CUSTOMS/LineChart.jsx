import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

function LineChart({
    text,
    position,
    labels,
    dataArray,
    backgroundColor,
    borderColor,
}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position,
            },
            title: {
                display: true,
                text: text,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "Dataset 1",
                data: dataArray,
                borderColor: borderColor,
                backgroundColor: backgroundColor,
            },
        ],
    };

    return <Line options={options} data={data} />;
}
export default LineChart;

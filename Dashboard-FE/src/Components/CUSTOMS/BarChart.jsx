import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

function BarChart({ position, text, labels, datasets }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position,
            },
            title: {
                display: true,
                text,
            },
        },
    };

    const data = {
        labels,
        datasets,
    };
    return <Bar options={options} data={data} />;
}
export default BarChart;

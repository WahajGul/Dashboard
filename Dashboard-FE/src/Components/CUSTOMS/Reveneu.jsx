import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    Title,
    Tooltip,
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
    Legend,
    Filler,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Reveneu",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
    labels,
    datasets: [
        {
            label: "Current Year",
            data: [100000, 450000, 430000, 300000, 100000, 99000, 12000],
            fill: true,
            borderColor: "#097FC8",
            backgroundColor: "#0B9BF4",
        },
    ],
};

const Reveneu = () => {
    return (
        <div className="p-2 w-1/2 m-2 rounded-2xl bg-blue-100 drop-shadow-md drop-shadow-black">
            <Line options={options} data={data} />
        </div>
    );
};

export default Reveneu;

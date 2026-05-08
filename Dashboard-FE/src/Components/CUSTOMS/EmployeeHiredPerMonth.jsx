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

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Employees Hired Per Month",
        },
    },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const data = {
    labels,
    datasets: [
        {
            label: "in 2025",
            data: [20, 29, 18, 28, 30, 121, 20, 29, 18, 28, 30, 121],
            backgroundColor: "#0B9BF4",
        },
        {
            label: "in 2024",
            data: [10, 9, 8, 8, 0, 12, 0, 9, 8, 2, 3, 12],
            backgroundColor: "#07639C",
        },
    ],
};
const EmployeeHiredPerMonth = () => {
    return (
        <div className="p-2 w-1/2 m-2 rounded-2xl bg-blue-100 drop-shadow-md drop-shadow-black">
            <Bar options={options} data={data} />
        </div>
    );
};

export default EmployeeHiredPerMonth;

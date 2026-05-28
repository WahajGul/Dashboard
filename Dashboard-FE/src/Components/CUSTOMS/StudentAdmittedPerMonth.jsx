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
    indexAxis: "y",
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Students Admitted Per Month",
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
            data: [12, 15, 18, 21, 16, 10, 20, 21, 18, 22, 18, 17],
            backgroundColor: "#0B9BF4",
        },
    ],
};

const StudentAdmittedPerMonth = () => {
    return (
        <div className=" col-span-1 drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Bar options={options} data={data} />
        </div>
    );
};

export default StudentAdmittedPerMonth;

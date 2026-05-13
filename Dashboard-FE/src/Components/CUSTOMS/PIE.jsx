import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PIE = ({ fee }) => {
    console.log(Object.values(fee).splice(1, 5));
    const data = {
        labels: ["tuition", "annual", "annual", "admission", "paid", "unpaid"],
        datasets: [
            {
                label: "FEE",
                data: Object.values(fee).splice(1, 5),
                backgroundColor: [
                    "#0090FF",
                    "#6EC2FF",
                    "#0095FF",
                    "#0E289E",
                    "#7272E9",
                    "#82C8ef",
                ],
                borderColor: [
                    "#0855C2",
                    "#0A6CF5",
                    "#3686F7",
                    "#62A1F8",
                    "#8EBBFA",
                    "#010101",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="w-fit h-fit drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Pie data={data}></Pie>
        </div>
    );
};

export default PIE;

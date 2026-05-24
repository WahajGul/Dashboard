import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PIE = ({ fee }) => {
    const feeArray = Object.values(fee).splice(1, 5);
    const data = {
        labels: ["tuition", "annual", "annual", "admission", "paid", "unpaid"],
        datasets: [
            {
                label: "FEE",
                data: feeArray,
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

    if (feeArray.length <= 0)
        return (
            <div className="p-5 w-96 flex justify-center items-center drop-shadow-md drop-shadow-black rounded-md bg-background">
                <h1 className="text-2xl font-bold">...</h1>
            </div>
        );

    return (
        <div className="w-fit h-fit drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Pie data={data}></Pie>
        </div>
    );
};

export default PIE;

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PassFailRatio = () => {
    const data = {
        labels: ["PASS", "FAIL"],
        datasets: [
            {
                label: "PASS-to-Fail Ratio",
                data: [67, 33],
                backgroundColor: [
                    "rgba(84, 240, 125,0.4)",
                    "rgba(255, 41, 84,0.3)",
                ],
                borderColor: ["#00aa00", "#aa0000"],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="p-4 drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Pie data={data}></Pie>
        </div>
    );
};

export default PassFailRatio;

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
import { getRevenueDetails } from "../../API/REVENUE.js";
import { useEffect, useState } from "react";
import { isArray } from "chart.js/helpers";
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

const Reveneu = () => {
    const [revenue, setRevenue] = useState();
    useEffect(() => {
        async function getData() {
            const result = await getRevenueDetails();
            const values = isArray(result)
                ? result.map((a) => a.total_revenue)
                : [];
            const labels = isArray(result)
                ? result.map((a) => a.month_name)
                : [];

            const data = {
                labels: labels.length ? labels : ["Apr", "MAY", "JUNE", "JULY"],
                datasets: [
                    {
                        label: "Current Year",
                        data: values.length ? values : [12, 12, 12, 12],
                        fill: true,
                        borderColor: "#000080",
                        backgroundColor: "rgba(0,0,128,0.3)",
                        tension: 0.3,
                    },
                ],
            };
            setRevenue(data);
        }
        getData();
    }, []);
    if (!revenue)
        return (
            <div className=" w-full flex justify-center items-center drop-shadow-md drop-shadow-black rounded-md bg-background">
                <h1 className="text-2xl font-bold">...</h1>
            </div>
        );
    return (
        <div className=" w-full drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Line options={options} data={revenue} />
        </div>
    );
};

export default Reveneu;

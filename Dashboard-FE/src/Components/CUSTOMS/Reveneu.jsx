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
import { useEffect, useRef, useState } from "react";
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

function createGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top,
    );
    gradient.addColorStop(0, "rgba(0,0,128,0.3)");
    gradient.addColorStop(0.6, "rgba(0,0,128,0.5)");
    gradient.addColorStop(0.8, "rgba(0,0,128,0.7)");
    return gradient;
}

const Reveneu = () => {
    const [revenue, setRevenue] = useState();
    const chartRef = useRef();
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
                labels:
                    labels.length >= 1
                        ? labels
                        : ["Apr", "MAY", "JUNE", "JULY"],
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
    // Update gradient AFTER chart is rendered
    useEffect(() => {
        if (chartRef.current && revenue) {
            const chart = chartRef.current;
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;

            if (ctx && chartArea) {
                const gradient = createGradient(ctx, chartArea);
                chart.data.datasets[0].backgroundColor = gradient;
                chart.update();
            }
        }
    }, [revenue]);
    if (!revenue)
        return (
            <div className=" w-full flex justify-center items-center drop-shadow-md drop-shadow-black rounded-md bg-background">
                <h1 className="text-2xl font-bold">...</h1>
            </div>
        );
    return (
        <div className=" w-full drop-shadow-md drop-shadow-black rounded-md bg-background">
            <Line ref={chartRef} options={options} data={revenue} />
        </div>
    );
};

export default Reveneu;

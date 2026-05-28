import { LineChart as LineICON } from "lucide-react";
import LineChart from "../LineChart";
import { getRevenueDetails } from "../../../API/REVENUE.js";
import { useEffect, useState } from "react";

const RevenueChart = () => {
    const [loading, setLoading] = useState(false);
    const [revData, setRevData] = useState({
        text: "Revenue",
        position: "top",
        labels: [],
        dataArray: [],
        backgroundColor: "rgba(59, 130, 246,0.4)",
        borderColor: "#1e40af",
    });
    useEffect(() => {
        async function fetchRevenue() {
            try {
                setLoading(true);
                const data = await getRevenueDetails();
                if (Array.isArray(data) && data.length >= 1) {
                    setRevData((rev) => ({
                        ...rev,
                        labels: data.map((o) => o.month_name),
                        dataArray: data.map((o) => o.total_revenue),
                    }));
                }
            } catch (err) {
                console.error(
                    err,
                    "something happned , can't get revenue details",
                );
            } finally {
                setLoading(false);
            }
        }
        fetchRevenue();
    }, []);
    if (loading)
        return (
            <div className="transition-all flex justify-center items-center duration-200 bg-white lg:col-span-2 shadow-md p-6 border-l-4 border-primary">
                <h1 className="text-2xl font-bold">...</h1>
            </div>
        );
    return (
        <div className="transition-all duration-200 bg-white lg:col-span-2 shadow-md p-6 border-l-4 border-primary">
            <div className="flex flex-col">
                <div>
                    <h1 className="font-bold lg:text-2xl">Revenue Per Month</h1>
                    <p className="text-slate-600 font-medium lg:text-md">
                        Previous Year
                    </p>
                </div>
                <div>
                    <LineChart {...revData} />
                </div>
            </div>
        </div>
    );
};
export default RevenueChart;

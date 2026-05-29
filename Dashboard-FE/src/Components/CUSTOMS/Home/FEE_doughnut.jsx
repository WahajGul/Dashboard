import { useState, useEffect } from "react";
import { getFeeDetails } from "../../../API/Fees.js";
import DoughnutChart from "../DoughnutChart";

function formatPKR(value) {
    const t = new Intl.NumberFormat("en-PK", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "PKR",
    }).format(value);
    return t;
}
const FEE_doughnut = () => {
    const [feeDetails, setFeeDetails] = useState({
        labels: ["PAID", "UNPAID"],
        datasets: [
            {
                label: "fee",
                data: [],
                backgroundColor: ["#D1fae5", "#fee2e2"],
                borderColor: ["#D1faa5", "#eee2e2"],
            },
        ],
    });
    useEffect(() => {
        async function getFEE() {
            try {
                const data = await getFeeDetails();
                const res = [
                    data[0].total_paid_fees,
                    data[0].total_unpaid_fees,
                ];
                const datasets = [
                    {
                        label: "fee",
                        data: res,
                        backgroundColor: ["#10b981", "#ef4444"],
                    },
                ];
                setFeeDetails((pre) => ({ ...pre, datasets }));
            } catch (err) {
                console.error("error occured in FEE_DOUGHNNOT", err);
            }
        }
        getFEE();
    }, []);

    return (
        <div className=" justify-center transition-all flex  duration-200 bg-white  shadow-md p-6 border-l-4 border-success">
            <div className="flex   flex-col items-start">
                <h1 className="font-bold text-xl">Student Status</h1>
                <h2>ACTIVE : {formatPKR(feeDetails.datasets[0].data[0])}</h2>
                <h2>INACTIVE : {formatPKR(feeDetails.datasets[0].data[1])}</h2>
            </div>
            <div className="relative  flex-1 h-64 lg:h-96">
                <DoughnutChart {...feeDetails} />
            </div>
        </div>
    );
};

export default FEE_doughnut;

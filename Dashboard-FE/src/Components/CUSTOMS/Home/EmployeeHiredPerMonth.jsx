import { useState } from "react";
import BarChart from "../BarChart";

const EmployeeHiredPerMonth = ({ className = "" }) => {
    const [data, setData] = useState({
        labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
        position: "top",
        text: "employees hired per month",
        datasets: [
            {
                label: "2026",
                data: [3, 5, 6, 2, 7],
                backgroundColor: "rgba(59,130,246,0.4)",
            },
        ],
    });
    return (
        <div
            className={
                className +
                "transition-all duration-200 bg-white  shadow-md p-6 border-l-4 border-primary"
            }
        >
            <BarChart {...data} />
        </div>
    );
};

export default EmployeeHiredPerMonth;

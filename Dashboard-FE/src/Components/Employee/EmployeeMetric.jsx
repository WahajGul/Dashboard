import MetricCard from "../CUSTOMS/MetricCard";
import { getEmployeeDetails } from "../../API/Employees.js";
import { useEffect, useState } from "react";
import {
    AlertCircle,
    BadgeDollarSign,
    DollarSign,
    ShieldCheck,
    Users,
} from "lucide-react";
const EmployeeMetric = () => {
    const [metricData, setMetricData] = useState([
        {
            title: "Total Employee",
            value: 0,
            change: 13,
            icon: <Users size={24} className="text-status-active" />,
            color: "#10B981",
            key: "total",
        },

        {
            title: "Max Salary",
            value: 0,
            change: 3,
            icon: <DollarSign size={24} className="text-warning" />,
            color: "#f59e0b",
            key: "max_sal",
        },

        {
            title: "Active",
            value: 0,
            change: 9,
            icon: <ShieldCheck size={24} className="text-secondary" />,
            color: "#8B5CF6",
            key: "active",
        },
        {
            title: "Inactive",
            value: 0,
            change: -23,
            icon: <AlertCircle size={24} className="text-error" />,
            color: "#ff3444",
            key: "inactive",
        },
        {
            title: "Avg Salary",
            value: 0,
            change: 8,
            icon: <BadgeDollarSign size={24} className="text-primary" />,
            color: "#3b82f6",
            key: "active",
        },
    ]);
    useEffect(() => {
        async function getData() {
            try {
                const data = await getEmployeeDetails();
                setMetricData((data) =>
                    data.map((metric) => {
                        switch (metric.key) {
                            case "students":
                                return {
                                    ...metric,
                                    value: result?.total_students || 0,
                                };
                            case "males":
                                return {
                                    ...metric,
                                    value: result?.total_male_students || 0,
                                };
                            case "females":
                                return {
                                    ...metric,
                                    value: result?.total_female_students || 0,
                                };
                            case "active":
                                return {
                                    ...metric,
                                    value: active || 0,
                                };
                            case "inactive":
                                return {
                                    ...metric,
                                    value: result?.total_inactive_students || 0,
                                };
                            default:
                                return metric;
                        }
                    }),
                );
            } catch (err) {
                console.error("err occured in emoloyee metric", err);
            }
        }
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {metricData.map(({ key, ...data }) => (
                <MetricCard key={key} {...data} />
            ))}
        </div>
    );
};

export default EmployeeMetric;

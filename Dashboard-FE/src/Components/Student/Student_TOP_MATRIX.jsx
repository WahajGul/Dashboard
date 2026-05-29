import { useEffect, useState } from "react";
import { getStudentDetails } from "../../API/Students.js";
import { Users, Book, AlertCircle, Mars, Venus } from "lucide-react";
import MetricCard from "../CUSTOMS/MetricCard.jsx";

const Student_TOP_MATRIX = () => {
    const [metricData, setMetricData] = useState([
        {
            title: "Total Students",
            value: 0,
            change: 13,
            icon: <Users size={24} className="text-status-active" />,
            color: "#10B981",
            key: "students",
        },

        {
            title: "Males ",
            value: 0,
            change: 3,
            icon: <Mars size={24} className="text-primary" />,
            color: "#3b82f6",
            key: "males",
        },

        {
            title: "Females",
            value: 0,
            change: 9,
            icon: <Venus size={24} className="text-secondary" />,
            color: "#8B5CF6",
            key: "females",
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
            title: "Active",
            value: 0,
            change: 8,
            icon: <Book size={24} className="text-warning" />,
            color: "#f59e0b",
            key: "active",
        },
    ]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getData() {
            const data = await getStudentDetails();
            const result = data[0];
            const active =
                result.total_students - result.total_inactive_students;

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
        }
        getData();
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {metricData.map(({ key, ...data }) => (
                <MetricCard key={key} {...data} />
            ))}
        </div>
    );
};

export default Student_TOP_MATRIX;

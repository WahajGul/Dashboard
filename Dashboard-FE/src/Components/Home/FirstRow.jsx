import { useEffect, useState } from "react";
import { getStudentDetails } from "../../API/Students.js";
import { getEmployeeDetails } from "../../API/Employees.js";
import { getFeeDetails } from "../../API/Fees.js";
import { getEnrollmentCount } from "../../API/Enrollment.js";

import { AlertCircle, Briefcase, DollarSign, Users } from "lucide-react";
import MetricCard from "../CUSTOMS/MetricCard";
const FirstRow = () => {
    const [metricData, setMetricData] = useState([
        {
            title: "Total Students",
            value: 0,
            change: 0,
            icon: <Users size={24} className="text-primary" />,
            color: "#3b82f6",
            key: "students",
        },

        {
            title: "Total Employee",
            value: 0,
            change: 0,
            icon: <Briefcase size={24} className="text-status-active" />,
            color: "#10B981",
            key: "employees",
        },

        {
            title: "Total Fee Paid",
            value: 0,
            change: 0,
            icon: <DollarSign size={24} className="text-secondary" />,
            color: "#8B5CF6",
            key: "fee",
        },
        {
            title: "Total Dues",
            value: 0,
            change: 0,
            icon: <AlertCircle size={24} className="text-warning" />,
            color: "#F59E0B",
            key: "dues",
        },
    ]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const students = await getStudentDetails();
                const employees = await getEmployeeDetails();
                const fee = await getFeeDetails();
                const enrollment = await getEnrollmentCount();

                setMetricData((data) =>
                    data.map((metric) => {
                        switch (metric.key) {
                            case "students":
                                return {
                                    ...metric,
                                    value: students?.[0]?.total_students || 0,
                                };
                            case "employees":
                                return {
                                    ...metric,
                                    value: employees?.[0]?.total_employees || 0,
                                };
                            case "fee":
                                return {
                                    ...metric,
                                    value: fee?.[0]?.total_paid_fees || 0,
                                };
                            case "dues":
                                return {
                                    ...metric,
                                    value: fee?.[0]?.total_unpaid_fees || 0,
                                };
                            default:
                                return metric;
                        }
                    }),
                );
            } catch (err) {
                console.error("Can't Fetch Data , some error occured", err);
            } finally {
                setLoading(false);
            }
        }
        getData();
        console.log(metricData);
    }, []);

    if (loading)
        return (
            <div className="w-full p-3xl h-auto bg-linear-to-r from-slate-100 to-slate-300"></div>
        );
    return (
        <div className="grid transition-all duration-150 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricData.map(({ key, ...data }) => (
                <MetricCard key={key} {...data} />
            ))}
        </div>
    );
};

export default FirstRow;

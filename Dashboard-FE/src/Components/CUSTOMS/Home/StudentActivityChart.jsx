import { useEffect } from "react";
import PieChart from "../PieChart";
import { getStudentDetails } from "../../../API/Students.js";
import { useState } from "react";

const StudentActivityChart = () => {
    const [activityData, setActivityData] = useState({
        position: "top",
        labels: ["active", "inactive"],
        backgroundColor: ["#3b82f6", "#ef4444"],
        borderColor: ["#1e40af", "#dc2626"],
        dataArray: [],
    });
    useEffect(() => {
        async function getData() {
            const data = await getStudentDetails();
            const inactive = parseInt(data[0].total_inactive_students);
            const active = parseInt(data[0].total_students) - inactive;
            setActivityData((a) => ({ ...a, dataArray: [active, inactive] }));
        }
        getData();
    }, []);
    return (
        <div className="max-w-4xl justify-center transition-all flex  duration-200 bg-white lg:col-span-2 shadow-md p-6 border-l-4 border-success">
            <div className="flex   flex-col items-start">
                <h1 className="font-bold text-xl">Student Status</h1>
                <h2>ACTIVE : {activityData.dataArray[0]}</h2>
                <h2>INACTIVE : {activityData.dataArray[1]}</h2>
            </div>
            <div className="relative  flex-1 h-64 lg:h-96">
                <PieChart {...activityData} />
            </div>
        </div>
    );
};

export default StudentActivityChart;

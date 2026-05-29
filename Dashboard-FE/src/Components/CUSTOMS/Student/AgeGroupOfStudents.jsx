import { useState, useEffect } from "react";
import {
    getStudentByAgeGroup,
    getStudentDetails,
} from "../../../API/Students.js";

const AgeGroupOfStudents = () => {
    const [ageData, setAgeData] = useState([]);
    const [t_student, setT_student] = useState(0);
    const colors = [
        "bg-success",
        "bg-warning",
        "bg-secondary",
        "bg-chart-pink",
    ];
    useEffect(() => {
        async function getData() {
            const data = await getStudentByAgeGroup();
            const total_students = await getStudentDetails();

            if (data.success) {
                const result = data.data;
                setAgeData(result);
                setT_student(parseInt(total_students[0].total_students));
            }
        }
        getData();
    }, []);
    return (
        <div className="transition-all duration-200 bg-white shadow-md p-6 border-l-4 border-success-dark">
            <div className="flex  flex-col">
                <h1 className="font-bold text-2xl">
                    Age Distribution of Students
                </h1>
                <p className="text-slate-600">
                    students of different age group
                </p>
                <div className="graphContainer space-y-3">
                    {ageData.map((obj, idx) => (
                        <BarGraphChild
                            label={obj.age_band}
                            value={parseInt(obj.student_count)}
                            color={colors[idx]}
                            total={t_student}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgeGroupOfStudents;

const BarGraphChild = ({ label, value, color, total }) => {
    console.log(total);
    return (
        <div>
            <div className="flex justify-between">
                <span className="text-2xl text-black">{label}</span>
                <span>{value}%</span>
            </div>
            <div className="w-full h-2 bg-slate-600 rounded-full">
                <div
                    style={{ width: `${(value / total) * 100}%` }}
                    className={"h-2 rounded-full " + color}
                ></div>
            </div>
        </div>
    );
};

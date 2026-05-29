import BarChart from "../BarChart";
import { useState, useEffect } from "react";
import { getHighestMarksByCourse } from "../../../API/Marks.js";
const HighestMarksByCourse = () => {
    const [chartData, setChartData] = useState({
        position: "top",
        text: "highest marks by course",
        labels: [],
        datasets: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await getHighestMarksByCourse();

                setChartData((da) => ({
                    ...da,
                    labels: response?.data?.map((a) => a.course_name),
                    datasets: [
                        {
                            label: "courses",
                            data: response?.data?.map((a) => a.highest_marks),
                            backgroundColor: "rgba(59,130,246,0.5)",
                        },
                    ],
                }));
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
                console.log(chartData);
            }
        }

        fetchData();
    }, []);
    return (
        <div className="transition-all duration-200 bg-white  shadow-md p-6 border-l-4 border-success-dark">
            <BarChart {...chartData} />
        </div>
    );
};

export default HighestMarksByCourse;

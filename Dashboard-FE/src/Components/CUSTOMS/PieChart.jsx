import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
    position,
    labels,
    backgroundColor,
    borderColor,
    dataArray,
}) => {
    const options = {
        responsive: true,
        aspectRatio: 1.2, // Increase for a wider container, decrease for a smaller one
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position,
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: "",
                data: dataArray,
                backgroundColor,
                borderColor,
                borderWidth: 1,
            },
        ],
    };
    return <Pie width={87} options={options} data={data} />;
};

export default PieChart;

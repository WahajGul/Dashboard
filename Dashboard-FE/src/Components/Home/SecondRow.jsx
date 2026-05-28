import { useEffect, useState } from "react";
import RevenueChart from "../CUSTOMS/Home/RevenueChart";
import StudentActivityChart from "../CUSTOMS/Home/StudentActivityChart";

const SecondRow = () => {
    return (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <RevenueChart />
            <StudentActivityChart />
        </div>
    );
};

export default SecondRow;

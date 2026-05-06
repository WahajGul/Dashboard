import { useEffect, useState } from "react";
import { getStudentCount } from "../../API/Students.js";
import { getEmployeeCount } from "../../API/Employees.js";
import { getClassCount } from "../../API/Classes.js";
import CARD from "./CARD";

const TotalGRID = () => {
    const [totalObject, setTotalObject] = useState({
        Students: 0,
        Employee: 0,
        Classes: 0,
        Fee: 0,
        UnpaidDues: 0,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const Students = await getStudentCount();
                const Employee = await getEmployeeCount();
                const Classes = await getClassCount();
                setTotalObject((a) => ({ ...a, Students, Employee, Classes }));
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="cardContainer flex gap-3  w-screen p-5">
            <CARD
                totalName={"Total Students"}
                totalCount={totalObject.Students}
            />
            <CARD
                totalName={"Total Employee"}
                totalCount={totalObject.Employee}
            />
            <CARD
                totalName={"Total Classes"}
                totalCount={totalObject.Classes}
            />
        </div>
    );
};

export default TotalGRID;

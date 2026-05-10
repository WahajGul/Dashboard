import { useEffect, useState } from "react";
import { getStudentDetails } from "../../API/Students.js";
import { getEmployeeDetails } from "../../API/Employees.js";
import { getEnrollmentCount } from "../../API/Enrollment.js";
import { getFeeDetails } from "../../API/Fees.js";
import CARD from "./CARD";

const TotalGRID = () => {
    const [totalObject, setTotalObject] = useState({
        Students: 0,
        Employee: 0,
        Enrollment: 0,
        Classes: 0,
        Fee: {},
        UnpaidDues: 0,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const Students = await getStudentDetails();
                const Employee = await getEmployeeDetails();
                const Enrollment = await getEnrollmentCount();
                const Fee = await getFeeDetails();
                setTotalObject((a) => ({
                    ...a,
                    Students: Students[0].total_students,
                    Employee: Employee[0].total_employees,
                    Enrollment,
                    Fee: Fee[0],
                }));
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="cardContainer grid grid-cols-5 h-fit gap-3 p-2 mx-2">
            <CARD
                totalName={"Total Students"}
                totalCount={totalObject.Students}
            />
            <CARD
                totalName={"Total Employee"}
                totalCount={totalObject.Employee}
            />
            <CARD
                totalName={"Total Enrollment"}
                totalCount={totalObject.Enrollment}
            />
            <CARD
                totalName={"Unpaid Dues"}
                totalCount={
                    new Intl.NumberFormat("en-PK", {
                        style: "currency",
                        currency: "PKR",
                        maximumSignificantDigits: 3,
                    }).format(totalObject.Fee.total_unpaid_fees) + " PKR"
                }
            />

            <CARD
                totalName={"Fee Collected"}
                totalCount={
                    new Intl.NumberFormat("en-PK", {
                        style: "currency",
                        currency: "PKR",
                        maximumSignificantDigits: 5,
                    }).format(totalObject.Fee.total_paid_fees) + " PKR"
                }
            />
        </div>
    );
};

export default TotalGRID;

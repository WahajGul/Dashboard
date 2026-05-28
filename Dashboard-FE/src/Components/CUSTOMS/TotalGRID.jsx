import { useEffect, useState } from "react";
import { getStudentDetails } from "../../API/Students.js";
import { getEmployeeDetails } from "../../API/Employees.js";
import { getEnrollmentCount } from "../../API/Enrollment.js";
import { getFeeDetails } from "../../API/Fees.js";
import CARD from "./CARD";
import PIE from "./PIE.jsx";
import Reveneu from "./Reveneu.jsx";

const formatPKR = (value) => {
    const num = Number(value);
    if (Number.isNaN(num)) return "0 PKR";

    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR",
        maximumSignificantDigits: 5,
    }).format(num);
};

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
        <div className="totalGrid h-fit p-2 *:m-2 flex border-2   justify-center ">
            <div className="cardContainer grid grid-cols-3  gap-3 p-2 mx-2">
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
                    totalCount={formatPKR(totalObject.Fee.total_unpaid_fees)}
                />

                <CARD
                    totalName={"Fee Collected"}
                    totalCount={formatPKR(totalObject.Fee.total_paid_fees)}
                />

                <CARD
                    totalName={"Fee Collected"}
                    totalCount={formatPKR(
                        totalObject.Fee.annual_charges_charges,
                    )}
                />
            </div>
            <div className="pie flex justify-center ">
                <PIE fee={totalObject.Fee || undefined} />
            </div>
            <div className=" grow revContainer flex justify-center">
                <Reveneu />
            </div>
        </div>
    );
};

export default TotalGRID;

import { useState, useEffect } from "react";
import { getEmployeeRows } from "../../API/Employees";
const EmployeeRow = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        async function getRows() {
            try {
                const data = await getEmployeeRows();
                if (data.success) {
                    const result = data.data;
                    setRows(result);
                }
            } catch (err) {
                console.error("err occured in employee rows", err);
            }
        }
        getRows();
    }, []);
    return (
        <div className="transition-all flex-col flex duration-200 bg-white  shadow-md p-6 border-l-4 border-success-dark lg:col-span-2">
            <h1 className="text-2xl">EXAMPLE 10 ROWS</h1>
            <table className="bg-primary text-center border-collapse text-white text-2xl border-2 border-black flex-1">
                <thead className="*:bg-primary">
                    <tr className="*:font-bold  *:border-2 *:border-black">
                        <th>Name</th>
                        <th>Role</th>
                        <th>Depart</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody className="*:bg-white ">
                    {rows.map((r) => (
                        <tr className="*:border-2 *:border-black text-black *:p-2">
                            <td>{r.employee_name}</td>
                            <td>{r.role}</td>
                            <td>{r.department}</td>
                            <td>{r.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeRow;

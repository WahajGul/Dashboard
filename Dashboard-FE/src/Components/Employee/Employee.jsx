import EmployeeMetric from "./EmployeeMetric";
import EmployeeRow from "./EmployeeRow";

const Employee = () => {
    return (
        <div className="flex-1 space-y-6 overflow-auto p-6">
            <EmployeeMetric />
            <EmployeeRow />
        </div>
    );
};

export default Employee;

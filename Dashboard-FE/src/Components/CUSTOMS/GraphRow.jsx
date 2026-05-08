import EmployeeHiredPerMonth from "./EmployeeHiredPerMonth";
import Reveneu from "./Reveneu";

const GraphRow = () => {
    return (
        <div className="flex mx-4 p-4 w-screen ">
            <EmployeeHiredPerMonth />
            <Reveneu />
        </div>
    );
};

export default GraphRow;

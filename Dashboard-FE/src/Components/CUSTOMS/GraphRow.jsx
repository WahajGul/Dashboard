import CARD from "./CARD";
import EmployeeHiredPerMonth from "./EmployeeHiredPerMonth";
import PassFailRatio from "./PassFailRatio";
import Reveneu from "./Reveneu";
import StudentAdmittedPerMonth from "./StudentAdmittedPerMonth";

const GraphRow = () => {
    return (
        <div className="grid grid-cols-3 border-2 gap-4 *:grow border-black h-fit p-4 w-full">
            <div className="salContainer grid grid-cols-2 gap-4">
                <CARD totalName={"MAX SALARY"} totalCount={500000} />
                <CARD totalName={"MIN SALARY"} totalCount={10000} />
                <EmployeeHiredPerMonth />
            </div>
            <StudentAdmittedPerMonth />
            <PassFailRatio />
        </div>
    );
};

export default GraphRow;

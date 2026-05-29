import EmployeeHiredPerMonth from "../CUSTOMS/Home/EmployeeHiredPerMonth";
import FEE_doughnut from "../CUSTOMS/Home/FEE_doughnut";

const ThirdRow = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 ">
      <EmployeeHiredPerMonth />
      <FEE_doughnut />
    </div>
  );
};

export default ThirdRow;

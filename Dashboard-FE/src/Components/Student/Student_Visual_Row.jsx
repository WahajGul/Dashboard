import AgeGroupOfStudents from "../CUSTOMS/Student/AgeGroupOfStudents";
import HighestMarksByCourse from "../CUSTOMS/Student/HighestMarksByCourse";

const Student_Visual_Row = () => {
    return (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <HighestMarksByCourse />
            <AgeGroupOfStudents />
        </div>
    );
};

export default Student_Visual_Row;

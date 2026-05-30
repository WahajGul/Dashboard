import Student_Rows from "./Student_Rows";
import Student_TOP_MATRIX from "./Student_TOP_MATRIX";
import Student_Visual_Row from "./Student_Visual_Row";

const Students = () => {
    return (
        <div className="flex-1 space-y-6 overflow-auto p-6">
            <Student_TOP_MATRIX />
            <Student_Visual_Row />
            <Student_Rows />
        </div>
    );
};

export default Students;

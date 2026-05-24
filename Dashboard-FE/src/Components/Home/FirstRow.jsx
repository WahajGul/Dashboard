import GraphRow from "./CUSTOMS/GraphRow";
import TotalGRID from "./CUSTOMS/TotalGRID";

const FirstRow = () => {
    return (
        <div className="w-screen h-fit justify-center flex flex-col mx-3 my-2">
            <TotalGRID />
            <GraphRow />
        </div>
    );
};

export default FirstRow;

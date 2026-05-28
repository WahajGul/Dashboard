import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const HomePage = () => {
    return (
        <div className="flex-1 space-y-6 overflow-auto p-6">
            <FirstRow />
            <SecondRow />
            <ThirdRow />
        </div>
    );
};

export default HomePage;

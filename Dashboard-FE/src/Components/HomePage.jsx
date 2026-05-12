import TotalGRID from "./CUSTOMS/TotalGRID";
import Weather from "./CUSTOMS/Weather";
import FirstRow from "./FirstRow";

const HomePage = () => {
    return (
        <div className="flex relative flex-col p-4 items-center  w-screen bg-background">
            <Weather />
            <h1 className=" text-primary text-2xl  font-extrabold  p-5 rounded-2xl">
                HOME PAGE
            </h1>
            <FirstRow />
        </div>
    );
};

export default HomePage;

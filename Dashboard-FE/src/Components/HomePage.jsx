import TotalGRID from "./CUSTOMS/TotalGRID";
import Weather from "./CUSTOMS/Weather";
import FirstRow from "./FirstRow";

const HomePage = () => {
    return (
        <div className="flex relative flex-col p-4 items-center  w-screen bg-blue-50">
            <Weather />
            <h1 className=" text-blue-500 text-2xl drop-shadow-md drop-shadow-black font-extrabold bg-blue-100 p-5 rounded-2xl">
                HOME PAGE
            </h1>
            <FirstRow />
        </div>
    );
};

export default HomePage;

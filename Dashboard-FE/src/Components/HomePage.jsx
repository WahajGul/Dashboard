import TotalGRID from "./CUSTOMS/TotalGRID";

const HomePage = () => {
    return (
        <div className="flex flex-col p-4 items-center  w-screen bg-amber-100">
            <h1 className="text-yellow-700 text-2xl font-extrabold bg-yellow-200 p-5 rounded-2xl">
                HOME PAGE
            </h1>
            <TotalGRID />
        </div>
    );
};

export default HomePage;

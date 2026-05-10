import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const Dashboard = () => {
    return (
        <div className="w-screen h-screen bg-blue-100 ">
            <NavBar />
            {/* <HomePage /> */}
            <Outlet />
        </div>
    );
};

export default Dashboard;

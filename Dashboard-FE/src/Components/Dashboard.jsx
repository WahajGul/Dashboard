import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-background ">
            <NavBar />

            <Outlet />
            {/* <HomePage /> */}
        </div>
    );
};

export default Dashboard;

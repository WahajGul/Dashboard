import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-slate-200 ">
            <NavBar />

            <Outlet />
            {/* <HomePage /> */}
        </div>
    );
};

export default Dashboard;

import { Building2, Search, Bell, Settings, Home } from "lucide-react";
import LINK from "./CUSTOMS/LINK";

const NavBar = () => {
    return (
        <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="max-w-8xl mx-auto   px-6 py-4">
                <div className="flex   justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Building2 size={32} />
                        <div>
                            <h1 className="text-2xl font-bold">
                                School Management Dashboard
                            </h1>
                            <p className="text-blue-100 text-sm">
                                Analytics & Insights
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ul className="flex p-2 justify-center  text-background gap-3 *:text-xl ">
                            <li className="">
                                <LINK to="/">HOME</LINK>
                            </li>
                            <li>
                                <LINK to="/students">STUDENTS</LINK>
                            </li>
                            <li>
                                <LINK to="/employee">TEACHERS</LINK>
                            </li>
                            <li>
                                <LINK to="reveneu">REVENEU</LINK>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-blue-500 rounded-lg px-4 py-2">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent ml-2 outline-none text-white placeholder-blue-200 w-48"
                            />
                        </div>
                        <button className="relative p-2 hover:bg-blue-500 rounded-lg transition">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
                        </button>
                        <button className="p-2 hover:bg-blue-500 rounded-lg transition">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;

// <h1 className="text-2xl w-fit  m-4 font-bold">
//     School Management Dashboard
// </h1>

import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Home" },
    { to: "/students", label: "Students" },
    { to: "/employees", label: "Employees" },
    { to: "/marks", label: "Marks" },
    { to: "/revenue", label: "Revenue" },
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`h-screen bg-blue-300 text-white transition-all  duration-300 ${
                collapsed ? "w-16" : "w-64"
            }`}
        >
            <div className="flex items-center justify-between bg-blue-500 px-4 py-4">
                {!collapsed && <h1 className="text-lg font-bold">Dashboard</h1>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="rounded-md bg-blue-400 px-2 py-1 text-sm hover:bg-blue-600"
                >
                    {collapsed ? ">" : "<"}
                </button>
            </div>

            <nav className="mt-4 flex flex-col gap-2 px-2">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to === "/"}
                        className={({ isActive }) =>
                            `flex items-center rounded-lg px-4 py-3 transition-colors ${
                                isActive
                                    ? "bg-blue-500 font-semibold text-white"
                                    : "text-blue-950 hover:bg-blue-400 hover:text-white"
                            }`
                        }
                    >
                        {!collapsed && <span>{link.label}</span>}
                        {collapsed && (
                            <span className="mx-auto">{link.label[0]}</span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;

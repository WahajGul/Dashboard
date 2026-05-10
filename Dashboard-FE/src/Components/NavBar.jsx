import LINK from "./CUSTOMS/LINK";

const NavBar = () => {
    return (
        <nav className="top-0 w-screen p-2 flex justify-between shadow-[20px_20px_5rem_black]  bg-blue-200 ">
            <h1 className="text-2xl text-blue-500 font-bold m-2">DASHBOARD</h1>
            <div className="linkContainer w-full   ">
                <ul className="flex p-2 justify-end  text-blue-500 gap-3 *:text-xl *:font-bold">
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
        </nav>
    );
};

export default NavBar;

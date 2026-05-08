import LINK from "./CUSTOMS/LINK";

const NavBar = () => {
    return (
        <nav className="top-0 w-screen p-2 flex justify-between  bg-blue-100 ">
            <h1 className="text-2xl text-blue-500 font-bold m-2">DASHBOARD</h1>
            <div className="linkContainer w-full   ">
                <ul className="flex p-2 justify-end  text-blue-500 gap-3 *:text-xl *:font-bold">
                    <li className="">
                        <LINK href="">HOME</LINK>
                    </li>
                    <li>
                        <LINK href="">STUDENTS</LINK>
                    </li>
                    <li>
                        <LINK href="">TEACHERS</LINK>
                    </li>
                    <li>
                        <LINK href="">REVENEU</LINK>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

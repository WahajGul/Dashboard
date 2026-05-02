import LINK from "./CUSTOMS/LINK";

const NavBar = () => {
    return (
        <nav className="fixed top-0 w-screen p-2 flex justify-between   bg-yellow-200 ">
            <h1 className="text-2xl text-yellow-700 font-bold m-2">
                DASHBOARD
            </h1>
            <div className="linkContainer w-full   ">
                <ul className="flex p-2 justify-end  text-yellow-700 gap-3 *:text-xl *:font-bold">
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

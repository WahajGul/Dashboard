import { NavLink } from "react-router-dom";

const LINK = ({ className = "", ...props }) => {
    const c = ` hover:before:w-full  before:duration-200 before:transition-all before:h-1 before:-bottom-1 before:bg-background relative before:absolute ${className}`;
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? `${c} before:w-full` : `${c} before:w-0 `
            }
            {...props}
        ></NavLink>
    );
};

export default LINK;

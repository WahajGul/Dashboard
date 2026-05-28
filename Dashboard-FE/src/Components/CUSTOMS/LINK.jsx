import { NavLink } from "react-router-dom";

const LINK = ({ className = "", children, ...props }) => {
    const c = ` hover:before:w-full w-auto h-auto hover:active:before:w-0  before:duration-200 rounded-sm before:transition-all before:h-1 before:-bottom-1 before:bg-background relative before:absolute ${className}`;
    const ca = `rounded-xl p-2 transition-all duration-200 `;
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? `${ca} font-bold bg-white hover:bg-slate-200  text-primary `
                    : `${ca}   hover:bg-primary-dark`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default LINK;

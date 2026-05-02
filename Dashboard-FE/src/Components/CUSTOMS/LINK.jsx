const LINK = ({ className = "", ...props }) => {
    return (
        <a
            className={`before:w-0  hover:before:w-full active:w-full before:duration-200 before:transition-all before:h-1 before:bottom-0 before:bg-yellow-700 relative before:absolute ${className}`}
            {...props}
        ></a>
    );
};

export default LINK;

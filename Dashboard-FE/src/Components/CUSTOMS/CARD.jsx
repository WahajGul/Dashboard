const CARD = ({ totalName, totalCount, className = "" }) => {
    return (
        <section
            className={
                "  grow text-nowrap p-4 text-primary flex flex-col justify-center items-center drop-shadow-md drop-shadow-black rounded-md bg-background" +
                className
            }
        >
            <h1 className="font-bold text-lg sm:text-xl">{totalName}</h1>
            <h2 className="font-bold text-lg sm:text-xl">
                {totalCount || "Loading..."}
            </h2>
        </section>
    );
};

export default CARD;

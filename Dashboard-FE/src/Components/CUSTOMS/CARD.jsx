const CARD = ({ totalName, totalCount, className = "" }) => {
    return (
        <section
            className={
                "w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg p-3 sm:p-4 md:p-6 text-blue-500 flex flex-col items-center drop-shadow-md drop-shadow-black rounded-2xl bg-blue-100" +
                className
            }
        >
            <h1 className="font-bold text-xl sm:text-2xl">{totalName}</h1>
            <h2 className="font-bold text-xl sm:text-2xl">
                {totalCount || "Loading..."}
            </h2>
        </section>
    );
};

export default CARD;

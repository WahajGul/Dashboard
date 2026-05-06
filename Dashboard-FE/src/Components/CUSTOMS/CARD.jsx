const CARD = ({ totalName, totalCount }) => {
    return (
        <section className="p-4 text-yellow-600 flex flex-col items-center w-fit drop-shadow-xl drop-shadow-black rounded-2xl bg-amber-200">
            <h1 className="font-bold text-2xl ">{totalName}</h1>
            <h2 className="font-bold text-2xl">{totalCount || "Loading..."}</h2>
        </section>
    );
};

export default CARD;

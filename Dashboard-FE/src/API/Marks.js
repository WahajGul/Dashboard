const getHighestMarksByCourse = async () => {
    const resp = await fetch(
        "http://localhost:5000/api/marks/highest-by-course",
    );
    const result = await resp.json();
    return result;
};

export { getHighestMarksByCourse };

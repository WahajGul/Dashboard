const getRevenueDetails = async () => {
    const resp = await fetch(
        "http://localhost:5000/api/dashboard/revenue_last-year",
    );
    const result = await resp.json();
    return result;
};

export { getRevenueDetails };

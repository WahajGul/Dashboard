export async function getFeeDetails() {
    const response = await fetch("http://localhost:5000/fee_details");
    const result = await response.json();
    return result;
}

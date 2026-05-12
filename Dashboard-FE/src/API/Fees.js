export async function getFeeDetails() {
    const response = await fetch("http://localhost:5000/api/dashboard/fees");
    const result = await response.json();
    return result;
}

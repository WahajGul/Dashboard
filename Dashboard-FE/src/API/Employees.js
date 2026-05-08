export async function getEmployeeCount() {
    const response = await fetch("http://localhost:5000/total_employees");
    const result = await response.json();
    return result[0]["count"];
}

export async function getAllEmployees() {
    const response = await fetch("http://localhost:5000/employees");
    const result = await response.json();
    return result;
}

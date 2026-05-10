export async function getEmployeeDetails() {
    const response = await fetch("http://localhost:5000/employees_details");
    const result = await response.json();
    return result;
}

export async function getAllEmployees() {
    const response = await fetch("http://localhost:5000/employees");
    const result = await response.json();
    return result;
}

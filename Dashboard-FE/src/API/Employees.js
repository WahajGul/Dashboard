export async function getEmployeeDetails() {
    const response = await fetch(
        "http://localhost:5000/api/dashboard/employees",
    );
    const result = await response.json();
    return result;
}

export async function getEmployeeRows() {
    const response = await fetch(
        "http://localhost:5000/api/employees/employee-row",
    );
    const result = await response.json();
    return result;
}

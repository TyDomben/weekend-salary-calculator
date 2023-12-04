// Function to update total monthly cost
function updateTotalMonthlyCost() {
    const totalMonthlyElement = document.getElementById('totalMonthly');
    const salaryCells = document.querySelectorAll('#employeeTable td:nth-child(5)');
    let totalAnnualSalary = 0;
    salaryCells.forEach(function (cell) {
        const salary = Number(cell.textContent) || 0;
        totalAnnualSalary += salary;
    });
    const totalMonthlyCost = totalAnnualSalary / 12;
    document.getElementById('totalMonthly').textContent = totalMonthlyCost.toFixed(2);
    // Check if over budget
    if (totalMonthlyCost > 20000) {
        totalMonthlyElement.classList.add('over-budget');
        // } else {
        //     totalMonthlyElement.classList.remove('over-budget');
        // 
    }
}


// Function to add employee to the table
function addEmployeeToTable(firstName, lastName, idNumber, jobTitle, annualSalary) {
    const table = document.getElementById('employeeTable');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    // Add event listener to the new delete button
    row.querySelector('.deleteBtn').addEventListener('click', function () {
        deleteEmployee(this);
    });
}

// Function to delete an employee
function deleteEmployee(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('employeeTable').removeChild(row);
    updateTotalMonthlyCost();
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");

    // Handle form submission
    document.getElementById('employeeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Capture form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const idNumber = document.getElementById('idNumber').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const annualSalary = document.getElementById('annualSalary').value;

        // Validate data
        if (firstName === "" || lastName === "" || idNumber === "" || jobTitle === "" || annualSalary === "" || annualSalary < 0) {
            console.log('Please fill in all fields correctly');
            return;
        }

        // Add employee data to the table and update total monthly cost
        addEmployeeToTable(firstName, lastName, idNumber, jobTitle, annualSalary);
        updateTotalMonthlyCost();
        // Clear form fields
        this.reset();

    });

    // Add event listeners to initially existing delete buttons
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            deleteEmployee(this);
        });
    });

    // Initial calculation for any pre-existing employees in the table
    updateTotalMonthlyCost();
});

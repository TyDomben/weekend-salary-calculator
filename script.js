document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('employeeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Capture form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        // ... capture other fields

        // Validate data (example)
        if (firstName === '' || lastName === '') {
            alert('Please fill in all fields');
            return;
        }

        // Add employee to the table
        addEmployeeToTable(firstName, lastName /*, other fields */);

        // Clear form fields
        this.reset();

        // Update total monthly cost
        updateTotalMonthlyCost();
    });

    // Function to add employee to the table
    function addEmployeeToTable(firstName, lastName /*, other fields */) {
        const table = document.getElementById('employeeTable');
        const row = table.insertRow();
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            // ... other cells
            <td><button class="deleteBtn" onclick="deleteEmployee(this)">Delete</button></td>
        `;
    }

    // Function to update total monthly cost
    function updateTotalMonthlyCost() {
        // Logic to calculate and update total
    }

    // Function to delete an employee
    window.deleteEmployee = function(button) {
        const row = button.parentElement.parentElement;
        document.getElementById('employeeTable').removeChild(row);
        updateTotalMonthlyCost();
    };
});


//what do i want the code to do?
//
//How?  
//-> Console logs.
//   buttons, 

// <form id="employeeForm">
// <label for="firstName">First Name:</label>
// <input type="text" id="firstName" data-testid="firstNameInput">

// <label for="lastName">Last Name:</label>
// <input type="text" id="lastName" data-testid="lastNameInput">

// <label for="idNumber">ID Number:</label>
// <input type="text" id="idNumber" data-testid="idInput">

// <label for="jobTitle">Job Title:</label>
// <input type="text" id="jobTitle" data-testid="titleInput">

// <label for="annualSalary">Annual Salary:</label>
// <input type="number" id="annualSalary" data-testid="annualSalaryInput">

// <button type="submit" data-testid="submitButton">Submit</button>
// </form>
/* <tbody id="employeeTable">
<!-- Employee rows will be added here dynamically?? -->
</tbody> */
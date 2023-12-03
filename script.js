document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    // Handle form submission
    document.getElementById('employeeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("WELCOME!WELCOME!WELCOME!");

        // Capture form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        // ... capture other fields as needed

        console.log(`Form Data: ${firstName}, ${lastName}, ...`);

        // Validate data
        // if either firstName or lastname are empty I will scream - (the console that is).
        if (firstName === "" || lastName === "") {
            console.log('SCREAMING INTESIFIES');
            return;
        }

        // Add employee data to the table 
        // For now, just logging the action
        console.log(`Adding employee: ${firstName} ${lastName}`);

        // Clear form fields
        this.reset();
        console.log("Form fields cleared");

        // Update total monthly cost 
        // For now, just log the action
        console.log("Updating total monthly cost");
    });

    // Function to add employee to the table
    function addEmployeeToTable(firstName, lastName /* ... other parameters */) {
        // Implementation would go here
        console.log(`Function to add ${firstName} ${lastName} to the table called`);
    }

    // Function to update total monthly cost
    function updateTotalMonthlyCost() {
        // Implementation would go here
        console.log("Function to update total monthly cost called");
    }
    // TODO: Calculate the total monthly cost
    // TODO: Update the displayed total

    // Function to delete an employee
    function deleteEmployee(button) {
        // Implementation would go here
        console.log("Function to delete an employee called");
    }
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
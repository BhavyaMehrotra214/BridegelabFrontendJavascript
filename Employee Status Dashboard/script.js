const employeeTable = document.getElementById("employeeTable");
const errorDiv = document.getElementById("error");

// Fetch employees using XMLHttpRequest
function fetchEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3002/employees", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      renderEmployees(employees);
    } else {
      errorDiv.textContent = "Failed to load employees";
    }
  };

  xhr.onerror = function() {
    errorDiv.textContent = "Network error";
  };

  xhr.send();
}

// Render employees in table
function renderEmployees(employees) {
  employeeTable.innerHTML = "";
  employees.forEach(emp => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = emp.name;

    const statusTd = document.createElement("td");
    statusTd.textContent = emp.status;

    const toggleTd = document.createElement("td");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = emp.status === "active" ? "Deactivate" : "Activate";
    toggleBtn.onclick = () => toggleStatus(emp, statusTd, toggleBtn);
    toggleTd.appendChild(toggleBtn);

    tr.appendChild(nameTd);
    tr.appendChild(statusTd);
    tr.appendChild(toggleTd);

    employeeTable.appendChild(tr);
  });
}

// Toggle employee status
function toggleStatus(emp, statusTd, btn) {
  const prevStatus = emp.status;
  const newStatus = prevStatus === "active" ? "inactive" : "active";

  // Optimistically update UI
  statusTd.textContent = newStatus;
  btn.textContent = newStatus === "active" ? "Deactivate" : "Activate";

  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", `http://localhost:3002/employees/${emp.id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function() {
    if (xhr.status !== 200) {
      // Revert UI on error
      statusTd.textContent = prevStatus;
      btn.textContent = prevStatus === "active" ? "Deactivate" : "Activate";
      errorDiv.textContent = `Failed to update status for ${emp.name}`;
      setTimeout(() => (errorDiv.textContent = ""), 3000);
    } else {
      emp.status = newStatus; 
    }
  };

  xhr.onerror = function() {
    // Revert UI on network error
    statusTd.textContent = prevStatus;
    btn.textContent = prevStatus === "active" ? "Deactivate" : "Activate";
    errorDiv.textContent = `Network error while updating ${emp.name}`;
    setTimeout(() => (errorDiv.textContent = ""), 3000);
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}

// Initial fetch
fetchEmployees();

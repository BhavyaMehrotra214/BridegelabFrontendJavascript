class FormBuilder {
    constructor(fields) {
        this.fields = fields; 
    }

    // Method to generate form markup and show inside container
    renderForm(containerId) {
        const container = document.getElementById(containerId);

        let html = `<form id="dynamicForm">`;

        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label><br>
                <input type="${field.type}" id="${field.name}" placeholder="${field.label}">
                <br><br>
            `;
        });

        html += `<button type="submit">Submit</button></form>`;

        container.innerHTML = html;
    }

    // Collect all values when submit button is clicked
    getFormData() {
        const formData = {};

        this.fields.forEach(field => {
            const value = document.getElementById(field.name).value;
            formData[field.name] = value;
        });

        return formData;
    }
}
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" },
];


const myForm = new FormBuilder(fields);

myForm.renderForm("formContainer");

document.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = myForm.getFormData();
    console.log("Form Data:", data);
    alert("Check console for form data!");
});

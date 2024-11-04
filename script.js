// on ready function
// declare my inputs at least first name first to make sure I'm doing it right.
// declare other inputs 
function onReady() {
  console.log('It is ready time to code!');
}
onReady();

document.addEventListener("submit", (event) => {
  const form = document.querySelector('form');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const id = document.getElementById('Number');
  const jobTitle = document.getElementById('jobTitle');
  const salary = document.getElementById('Income')
  console.log(id);
  const tableBody = document.getElementById('tableBody');

  //start creating a new element
  const employeeRow = document.createElement("tr")
  employeeRow.id = id.value;
  employeeRow.classList.add("employee-row");

  //go through each of the elements in the form and append a new to to the employeeRow 
  const firstNameCell = document.createElement("td");
  firstNameCell.innerText = firstName.value;

  const lastNameCell = document.createElement("td")
  lastNameCell.innerText = lastName.value;

  const idCell = document.createElement("td")
  idCell.innerText = id.value

  const jobTitleCell = document.createElement("td")
  jobTitleCell.innerText = jobTitle.value

  const salaryCell = document.createElement("td")
  salaryCell.classList.add("salary");
  salaryCell.innerText = salary.value;
  salaryCell.value = salary.value;

  employeeRow.appendChild(firstNameCell);
  employeeRow.appendChild(lastNameCell);
  employeeRow.appendChild(idCell);
  employeeRow.appendChild(jobTitleCell);
  employeeRow.appendChild(salaryCell);
  employeeRow.appendChild(document.createElement("td"));
  tableBody.appendChild(employeeRow);

  const monthlyCost = document.getElementById("total");
  const newMonthlyCost = Number(monthlyCost.innerText) + (Number(salary.value) / 12);

  monthlyCost.innerText = (newMonthlyCost);
  form.reset()
  event.preventDefault();
})
// I want to pass in the id of the row and then get the row for that id and remove it from the dom.
function removeEmployee(id) {

  const employeeRow = document.getElementById(id);
  console.log(employeeRow);
  employeeRow.remove();
}
// We actually want to create a function that add all the values inside the table 






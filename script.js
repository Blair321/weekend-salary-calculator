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
  console.log(event);
const tableBody = document.getElementById('tableBody');
tableBody.innerHTML +=
    `<tr>
<td>${firstName.value}</td>
<td>${lastName.value}</td>
<td>${id.value}</td>
<td>${jobTitle.value}</td>
<td>${salary.value}</td>
<td></td>
</tr>`;
form.reset()
  event.preventDefault();
  debugger
})
//create function to add first name on click
// We actually want to create a function that add all the values inside the table 






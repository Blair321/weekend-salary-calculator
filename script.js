// on ready function
// declare my inputs at least first name first to make sure I'm doing it right. 
function onReady() {
    console.log('It is ready time to code!'); 
}
  onReady();

const firstName = document.querySelector('#firstName');
//create function to add first name on click
function getFirstname() {
    console.log('First employee name', firstName);
    firstName = document.querySelector('#firstName')
    firstName.innerHTML += '<button onClick="submitButton(event)"></Button>'
    
}

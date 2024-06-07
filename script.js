//your JS code here. If required.
function handle(event) {
	event.preventDefault();
	let firstName = document.getElementById("FirstName").value
	let lastName = document.getElementById("LastName").value
	let phoneNumber = document.getElementById("PhoneNumber").value
	let emailID = document.getElementById("EmailID").value
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`);
}

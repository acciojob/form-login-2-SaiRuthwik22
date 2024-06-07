//your JS code here. If required.
function handle(event) {
	event.preventDefault();
	let firstName = document.getElementById("FirstName").value
	let LastName = document.getElementById("LastName").value
	let PhoneNumber = document.getElementById("PhoneNumber").value
	let EmailID = document.getElementById("EmailID").value
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`);
}

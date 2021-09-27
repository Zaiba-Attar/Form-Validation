const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//Events Listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

//FUNCTIONS
function checkInputs() {
	//get the inputs from the user
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmPasswordValue = confirmPassword.value.trim();

	//USERNAME
	if(usernameValue === '') {
		//show error
		//add error class
		setErrorFor(username, "Username cannot be blank");
	} else {
		setSuccessFor(username);
	}

	//EMAIL
	if(emailValue === '') {
		setErrorFor(email, "Email cannot be blank");
	} else if(!isEmail(emailValue)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccessFor(email);
	}

	//PASSWORD
	if(passwordValue === '') {
		setErrorFor(password, "Password cannot be blank");
	} else {
		setSuccessFor(password);
	}

	//CONFIRM PASSWORD
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, "Password cannot be blank");
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, "Password does not match");
	} else {
		setSuccessFor(confirmPassword);
	}

}


//ERROR FUNCTION
function setErrorFor(input, message) {
	const formControl = input.parentElement; //form-control to add the class error
	const small = formControl.querySelector('small'); //to add the error message

	//add Error message inside small
	small.innerText = message;

	//add error class
	formControl.className = 'form-control error';
}

//SUCCESS FUNCTION
function setSuccessFor(input) {
	const formControl = input.parentElement; //form-control to add the class success
	formControl.className = 'form-control success';
}

//EMAIL VALIDATION
function isEmail(email) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
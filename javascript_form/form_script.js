let form = document.getElementById('form');
let username = document.getElementById('username');
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');

let flag = 0;
let section1 = username.parentElement;
let section2 = mail.parentElement;
let section3 = pass.parentElement;
let section4 = pass2.parentElement;
form.addEventListener('submit', e => {	//event listener for preventing default action on submit
	e.preventDefault();
	flag=0;
	checkInputs();		

	if (flag == 4) {
		setTimeout(clear,3000);
	}
});

function checkInputs() {
	let usernameValue = username.value.trim();		//geting actual user input values
	let emailValue = mail.value.trim();
	let passwordValue = pass.value.trim();
	let password2Value = pass2.value.trim();
	
	if(usernameValue.length<3) {					//checking condition for name
		setErrorFor(username);
	} else {
		setSuccessFor(username);
		flag = flag+1;
	}
	
	if(emailValue === '') {			    			//checking condition for email
		setErrorFor(mail);
	} else if (!isEmail(emailValue)) {
		setErrorFor(mail);
	} else {
		setSuccessFor(mail);
		flag = flag+1
	}
	
	if(passwordValue.length<6) {					//checking condition for password
		setErrorFor(pass);
	} else {
		setSuccessFor(pass);
		flag = flag +1;
	}
	
	if(password2Value === '') {						//matching password
		setErrorFor(pass2);
	} else if(passwordValue !== password2Value) {
		setErrorFor(pass2);
	} else{
		setSuccessFor(pass2);
		flag = flag+1;
	}
}

function setErrorFor(input) {						//generic function if error occurs
	let section = input.parentElement;
	let small = section.querySelector('div.hide');
	section.className = 'section error';
}

function setSuccessFor(input) {						//generic function for success
	let section = input.parentElement;
	section.className = 'section success';
}
	
function isEmail(email) {							//validation of email
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function clear() {	
	section1.className = 'section default';			//setting border color to default
	section2.className = 'section default';
	section3.className = 'section default';
	section4.className = 'section default';		
	form.reset();									//reseting the screen
}

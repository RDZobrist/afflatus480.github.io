    // Initialize Firebase
          var config = {
               apiKey: "AIzaSyBKLVbFaInKQ5g_59KBzgScOnz6sTBzzZk",
               authDomain: "portfolio-d4d61.firebaseapp.com",
               databaseURL: "https://portfolio-d4d61.firebaseio.com",
               projectId: "portfolio-d4d61",
               storageBucket: "portfolio-d4d61.appspot.com",
               messagingSenderId: "905452304981"
          };
          firebase.initializeApp(config);

var database = firebase.database();

// get elements \\
var txtName = document.getElementById('name-input');
var txtEmail = document.getElementById('email-input');
var txtComment = document.getElementById('message-input');
var submitButton = document.getElementById('submit-button');

// attach even-listener to submit button
// and when clicked ...
submitButton.addEventListener('click', e => {

	event.preventDefault();

	// get data from form 
	var name = txtName.value;
	var email= txtEmail.value;
	var message = txtComment.value;

console.log(name +"  "+email+"  " +message);
	// create object to store user input
	var user = {
		name : name,
		email: email,
		message: message
	}

if (user.email.length > 10){
	// push object to firebase
	database.ref(name).push(user);

	// clear input fields
	$("#message-input").val("");
	$("#email-input").val("");
	$("#name-input").val("");

	$('#confirmMessage').empty().text("Thank You! I will be in contact shortly.").css({color:'black'});
}else{
	$('#confirmMessage').empty().text("Please enter a valid Email.")
}});
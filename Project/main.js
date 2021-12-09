function search() {
    var data = document.getElementById('txt-search').value;
    if(data == '') {
        alert('Please enter data to search');
        return false;
    }
    return true;
}

function checkName(){
    var firstName = document.getElementById("Contact__firstname").value;
    var lastName = document.getElementById("Contact__lastname").value;
    if (firstName == ""){
        alert("Please enter your first name! ");
        return false;
     } 
    if (lastName == "") {
        alert("Please enter your last name! ");
        return false;
    } 
}
function checkEmail() {
    var emailTag = document.getElementById("Contact__email");
    var email = emailTag.value;
    if (email == "") {
        alert("Please enter your email!");
        return false;
    }
    else {
        var regexEmail = /^[\w\.\-]+@\w+(\.\w+){1,3}$/;
        if (!regexEmail.test(email)) {
            alert("Email must be in the form abc@gmail.com");
            return false;
        }
    }
}
function checkMessage(){
    var messageTap = document.getElementById("Contact__Textarea");
    var message = messageTap.value;
    if (message == "") {
        alert("Please enter your message!");
        return false;
    }
    else {
        if (message.length > 200) {
            alert("can't log in for more than 200 years");
            return false;
        }
    }
}
function check(){
    if (checkName() == false) {
        return false;
    }
    else if(checkEmail() == false) {
        return false;
    }
    else if(checkMessage() == false) {
        return false;
    }
    else
        return true;
}
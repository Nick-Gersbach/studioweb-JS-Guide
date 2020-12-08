//Form Validation

document.getElementById("submit").onclick = function () {

    var doSubmit = validateForm();

    if (doSubmit === false) {
        return false;
    }

}

function validateForm() {
    var firstName = document.getElementById("fname");
    var theValue = fname.value;

    if (theValue !== "Nick") {
        alert("Wrong Person, Access Denied!!!")
    } else {
        alert("Welcome Back, Master Nick")
    }
}
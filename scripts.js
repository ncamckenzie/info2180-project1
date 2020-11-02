/* Add your JavaScript to this file */
window.onload = function () {
var Subbutton = document.getElementsByTagName("button")[0];
Subbutton.addEventListener("click", (e) => {
    var txtinput = document.getElementById("email").value;
    if (txtinput == 0) {
        var message = document.getElementsByClassName('message')[0];
        message.innerHTML = "Please enter a valid email address";
        e.preventDefault()
    }
    else {  
        var message = document.getElementsByClassName('message')[0];
        message.innerHTML = `Thank you! Your email address ${txtinput} has been added to our mailing list!`;
        e.preventDefault()
    }
      }
)}
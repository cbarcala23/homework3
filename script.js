//global variables
var submitEl = document.querySelector("#generate");
var submissionResponseEl = document.querySelector("#password");
var copyEl = document.querySelector("#copy");
var chars;
var special;
var number;
var lower;
var upper;
var pwdCharsOriginal = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";

// function verify character length
function verify_chars(characters) {
    if (characters >= 8 && characters <= 128) {
        return true;
    } else {
        alert("Length must be between 8 and 128. Please try again.");
        return false;
    }
}

//function generate password
function generate_pass(length1, passchars) {
    var pwdLen = parseInt(length1);
    var randPassword = Array(pwdLen).fill(passchars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return (randPassword);
}

//BONUS: function to copy to clipboard
function copy() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}

//event handling
submitEl.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event);
    chars = prompt("Enter a digit for how many characters the password should be. (Must be between 8 and 128)");

    //call function to verify character length and return true if meets specs
    if (verify_chars(chars)) {
        special = confirm("Should the password contain a Special Character? (!@#$%^&*)");
        number = confirm("Should the password contain a Number? (1234567890)");
        lower = confirm("Should the password contain a lowercase letter?");
        upper = confirm("Should the password contain an uppercase letter?");
        if (special !== true && number !== true && lower !== true && upper !== true) {
            alert("You must select at least 1 option. Please try again.");
        } else {
            //remove special characters if needed and create new variable
            if (special !== true) {
                var pwdupdate1 = pwdCharsOriginal.replace(/[&\/\\#,+()$~%.'":*?<>{}!@^]/g, '');
                //alert(pwdupdate1);
            } else {
                var pwdupdate1 = pwdCharsOriginal;
            }
            //remove numbers if needed and create new variable
            if (number !== true) {
                var pwdupdate2 = pwdupdate1.replace(/[0123456789]/g, '');
                //alert(pwdupdate2);
            } else {
                var pwdupdate2 = pwdupdate1;
            }
            //remove lowercase if needed and create new variable
            if (lower !== true) {
                var pwdupdate3 = pwdupdate2.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');
                //alert(pwdupdate3);
            } else {
                var pwdupdate3 = pwdupdate2;
            }
            //remove uppercase if needed and create new variable
            if (upper !== true) {
                var pwdupdate4 = pwdupdate3.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '');
                //alert(pwdupdate4);
            } else {
                var pwdupdate4 = pwdupdate3;
            }
            //call function to generate password with most updated variable
            password = generate_pass(chars, pwdupdate4);
        }
        //print generated password to text field area
        submissionResponseEl.textContent = password;
    }


});


//BONUS: copy to clipboard
copyEl.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event);
    copy();
    alert("Password copied to clipboard. Paste to see result.");
});
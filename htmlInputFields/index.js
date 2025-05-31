"use strict";
var usernameTextBox = document.getElementById("username");
var submitButton = document.getElementById("submitBtn");
submitButton.onclick = () => {
    var username = usernameTextBox.value;
    console.log(username);
};

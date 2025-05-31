var usernameTextBox = document.getElementById("username") as HTMLInputElement;
var submitButton = document.getElementById("submitBtn") as HTMLButtonElement;

 submitButton.onclick=()=>{
    var username = usernameTextBox.value;
    console.log(username);
}
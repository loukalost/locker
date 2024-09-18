const locker_password = document.getElementById("locker_password");
const pave_numerique = document.querySelectorAll(".pave-numerique button");
const right_password = '1234';
const data = [];

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

pave_numerique.forEach(function(button) {
    button.addEventListener("click", function() {
        let buttonValue = button.value;
        if (buttonValue === "cancel") {
            locker_password.value = data.pop();
            locker_password.value = data.join("");
        } else {
            data.push(buttonValue);
            locker_password.value = data.join("");
        }
    });
});

toastTrigger.addEventListener("click", function() {
    if (data.length === 0) {
        return null;
    } else if (right_password === locker_password.value) {
        console.log("Le code est correct ! Veuillez récupérer votre colis.");
    } else if (right_password !== locker_password.value) {
        console.log("Le code est incorrect ! Veuillez réessayer.");
    }
});

function showPassword() {
    var x = document.getElementById("locker_password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



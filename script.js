const locker_password = document.getElementById("locker_password");
const pave_numerique = document.querySelectorAll(".pave-numerique button");
const right_password = "1234";
const data = [];

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

pave_numerique.forEach(function (button) {
  button.addEventListener("click", function () {
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

toastTrigger.addEventListener("click", function () {
  if (data.length === 0) {
    return null;
  } else if (right_password === locker_password.value) {
    console.log("Le code est correct ! Veuillez récupérer votre colis.");
  } else if (right_password !== locker_password.value) {
    console.log("Le code est incorrect ! Veuillez réessayer.");
  }
});

function hidePassword() {
  var input = document.getElementById("locker_password");
  if (input.type === "text") {
    input.type = "password";
  } else {
    input.type = "text";
  }
}

const request = new XMLHttpRequest();
request.open("POST", "./createDatabase.sql", true);
request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

const body = JSON.stringify({
  id: 1,
  password: locker_password.value,
  name: "locker1",
  status: false,
  created_at: new Date(),
});
request.onload = () => {
  if (request.readyState == 4 && request.status == 201) {
    console.log(JSON.parse(request.responseText));
  } else {
    console.log(`Error: ${request.status}`);
  }
};
request.send(body);

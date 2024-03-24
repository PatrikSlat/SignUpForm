const passInputOne = document.querySelector("#pass1");
const passInputTwo = document.querySelector("#pass2");
const buttonCreate = document.querySelector(".createBtn");
const form = document.querySelector(".form-layout");
const errorLabel = document.querySelector("#errorText");

buttonCreate.addEventListener("click", () => {
    const passOne = passInputOne.value;
    const passTwo = passInputTwo.value;

    if (form.checkValidity()) {
        if (passOne === passTwo && passOne !== "") {
            errorLabel.innerHTML = "Thank you for checking out my project :)";
        } else {
            errorLabel.innerHTML = "* Passwords do not match";
            passInputOne.classList.add("error")
            passInputTwo.classList.add("error")
        }
    } else {
        form.reportValidity();
    }
});


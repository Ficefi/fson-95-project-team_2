const registerForm = document.querySelector(".footer-form-authorization");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;

    if (email === "email = email на сервері") {
    return modalWindowError();
    }

    modalWindowDone();

    form.reset();
}
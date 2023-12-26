const registerForm = document.querySelector(".footer-form-authorization");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    subscriptionModal(form.input.value);
    
    form.reset();
}

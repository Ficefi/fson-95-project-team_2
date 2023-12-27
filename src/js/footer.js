import { subscriptionModal } from "./modal_window";

const registerForm = document.querySelector(".footer-form-authorization");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    subscriptionModal(registerForm[0].value);

    registerForm.reset();
}

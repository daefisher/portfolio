const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const thanks = document.querySelector("#thanks");

form.addEventListener("submit", function (event) {
 
  event.preventDefault();
  thanks.textContent = "";

  
  if (message.value.trim().length < 20) {
    messageError.textContent = "Please write at least 20 characters.";
    return;
  }

  messageError.textContent = "";
  thanks.textContent = "Thank you, " + nameInput.value + "! Your message was received.";
  form.reset();
});
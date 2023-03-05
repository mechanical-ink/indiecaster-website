const handleSubmit = (event) => {
  event.preventDefault();

  // this contains the notify me info and form
  const initialState = document.querySelector(".initial-state");
  const myForm = event.target;
  const formData = new FormData(myForm);
  const statusMessage = document.querySelector(".status-message");
  const errorMessage =
    "Oh no! There was a problem submitting your information. Please try again later.";
  const successMessage =
    "Thank you for your your interest! We will be in touch soon.";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        statusMessage.textContent = successMessage;
      } else {
        statusMessage.textContent = errorMessage;
      }
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    })
    .finally(() => {
      statusMessage.classList.remove("hidden");
      statusMessage.focus();
      initialState.classList.add("hidden");
    });
};

document.querySelector(".notify-form").addEventListener("submit", handleSubmit);

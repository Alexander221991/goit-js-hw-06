const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const userFeedback = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  console.log(userFeedback);

  event.currentTarget.reset();
}

const input = document.getElementById("name-input");
const message = document.getElementById("name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  if (event.currentTarget.value === "") {
    message.textContent = "Anonymous";
  } else {
    message.textContent = event.currentTarget.value;
  }
}

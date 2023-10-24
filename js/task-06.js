const input = document.getElementById("validation-input");

const validation = input.dataset.length;

input.addEventListener("blur", handleInput);

function handleInput(event) {
  if (event.currentTarget.value.length === Number(validation)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

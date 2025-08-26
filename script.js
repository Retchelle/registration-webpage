
//  Change Theme 
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form Validation 
const form = document.getElementById("RegistrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters long", "red");
  } else if (!email.includes("@") || !email.includes(".")) {
    showMessage("Please enter a valid email address", "red");
  } else if (password.length < 6) {
    showMessage("Password must be at least 6 characters long", "red");
  } else {
    showMessage("Registration successful!", "green");
    form.reset();
  }
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// Event Bubbling & Capturing 
const outerDiv = document.getElementById("outer");
const innerBtn = document.getElementById("inner");

innerBtn.addEventListener("click", () => {
  console.log("Button clicked");
});

outerDiv.addEventListener("click", () => {
  console.log("Div clicked " );
});

outerDiv.addEventListener("click", () => {
  console.log("Div clicked ");
}, true);

//  Real-time validation 
document.getElementById("username").addEventListener("input", function () {
  if (this.value.length < 3) {
    showMessage("Username too short!", "red");
  } else {
    message.textContent = "";
  }
});

document.getElementById("email").addEventListener("input", function () {
  if (!this.value.includes("@") || !this.value.includes(".")) {
    showMessage("Invalid email format!", "red");
  } else {
    message.textContent = "";
  }
});

document.getElementById("password").addEventListener("input", function () {
  if (this.value.length < 6) {
    showMessage("Password too short!", "red");
  } else {
    message.textContent = "";
  }
});

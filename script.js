// Button click
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover effect
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "lightblue";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "#eee";
});

// Keypress detection
const inputField = document.querySelector("input[type='text']");
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Secret double click
const secretButton = document.getElementById("secretButton");
secretButton.addEventListener("dblclick", () => {
  alert("🎉 Secret action unlocked!");
});

// Change button text/color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  colorBtn.textContent = "Changed!";
  colorBtn.style.backgroundColor = "#ff6f61";
});

// Simple image gallery
let index = 0;
const images = ["taxi.jpg", "alley.jpg",];
const imgElement = document.getElementById("gallery");
document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  imgElement.src = images[index];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.style.display = "none";
    });
    const targetId = tab.getAttribute("data-target");
    document.getElementById(targetId).style.display = "block";
  });
});

// Animation fade-in
const animateBox = document.getElementById("animateBox");
const startAnimation = document.getElementById("startAnimation");
startAnimation.addEventListener("click", () => {
  let opacity = 0;
  animateBox.style.opacity = 0;
  const interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
    } else {
      opacity += 0.1;
      animateBox.style.opacity = opacity;
    }
  }, 50);
});

// Form validation
const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
  } else if (password.value.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else {
    alert("Form submitted successfully!");
  }
});

// Real-time feedback
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    feedback.textContent = "Password too short";
  } else {
    feedback.textContent = "Password strength okay";
  }
});

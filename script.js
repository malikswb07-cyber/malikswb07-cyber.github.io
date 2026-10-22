// Personal details: replace this value with your real email address.
const EMAIL_ADDRESS = "YOUR_EMAIL_ADDRESS_HERE";

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("malik-portfolio-theme");
if (savedTheme === "dark") body.classList.add("dark");
function updateThemeButton() {
  const dark = body.classList.contains("dark");
  themeToggle.innerHTML = dark ? "☀ <span>Light mode</span>" : "☾ <span>Dark mode</span>";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
updateThemeButton();
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("malik-portfolio-theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeButton();
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("emailLink");
const emailText = document.getElementById("emailText");
if (EMAIL_ADDRESS && EMAIL_ADDRESS !== "YOUR_EMAIL_ADDRESS_HERE") {
  emailText.textContent = EMAIL_ADDRESS;
  emailLink.href = `mailto:${EMAIL_ADDRESS}`;
} else {
  emailLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Email Address: malik.s.wb07@gmail.com");
  });
}
document.getElementById("printCv").addEventListener("click", () => window.open("cv.pdf", "_blank"));

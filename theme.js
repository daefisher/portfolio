const toggle = document.querySelector("#theme-toggle");

if (localStorage.getItem("gray") === "yes") {
  document.body.classList.add("gray");
  toggle.textContent = "Light mode";
}

toggle.addEventListener("click", function () {
  document.body.classList.toggle("gray");

  if (document.body.classList.contains("gray")) {
    toggle.textContent = "Light mode";
    localStorage.setItem("gray", "yes");
  } else {
    toggle.textContent = "Dark mode";
    localStorage.setItem("gray", "no");
  }
});
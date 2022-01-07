const $themeBtn = document.querySelector(".theme-button"),
  $selectors = document.querySelectorAll(".container *"),
  $body = document.querySelector("body"),
  $subtitle = document.querySelectorAll(".subtitle"),
  $iconViewProfile = document.querySelector(".view-profile i");

let moon = `<i class="fas fa-moon"></i>`,
  sun = `<i class="fas fa-sun"></i>`;

const lightMode = () => {
  $body.style.backgroundColor = "#fff";
  $selectors.forEach((el) => el.classList.remove("dark-mode"));
  $themeBtn.innerHTML = moon;
  localStorage.setItem("theme", "light");
};
const darkMode = () => {
  $body.style.backgroundColor = "#111";
  $subtitle.forEach((el) => {
    el.style.color = "#5a91d9";
  });
  $selectors.forEach((el) => {
    el.classList.add("dark-mode");
  });
  $iconViewProfile.style.color = "#5a91d9";
  $themeBtn.innerHTML = sun;
  localStorage.setItem("theme", "dark");
};

document.addEventListener("click", (e) => {
  if (e.target === $themeBtn || e.target.matches(".theme-button *")) {
    if ($themeBtn.innerHTML === moon) {
      darkMode();
    } else {
      lightMode();
    }
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  if (localStorage.getItem("theme") === "light") {
    lightMode();
  }
  if (localStorage.getItem("theme") === "dark") {
    darkMode();
  }
});

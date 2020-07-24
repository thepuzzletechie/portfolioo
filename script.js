console.log("working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  settheme("light");
} else {
  settheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log(mode);
    settheme(mode);
  });
}

function settheme(mode) {
  const theme = document.getElementById("theme-style");

  if (mode == "light") {
    theme.href = "default.css";
  }
  if (mode == "blue") {
    theme.href = "blue.css";
  }
  if (mode == "green") {
    theme.href = "green.css";
  }
  if (mode == "purple") {
    theme.href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "styleStandart.css") {
    theme.href = "styleBlack.css"
  } else {
      theme.href = "styleStandart.css"
    }
}

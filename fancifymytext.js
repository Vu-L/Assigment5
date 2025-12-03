function makeBigger() {
  alert("Hello, world!");
  document.getElementById("textArea").style.fontSize = "24pt";
}

function fancyStyle() {
  const text = document.getElementById("textArea");
  const fancy = document.getElementById("fancy");

  if (fancy.checked) {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  } else {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
}

function mooify() {
  let txt = document.getElementById("textArea").value;
  txt = txt.toUpperCase();

  let parts = txt.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    let words = parts[i].trim().split(" ");
    if (words.length > 0) {
      words[words.length - 1] += "-MOO";
    }
    parts[i] = words.join(" ");
  }

  document.getElementById("textArea").value = parts.join(".");
}

const yearNode = document.getElementById("footer-year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}



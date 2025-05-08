
let cookies = 0;
let multiplier = 1;

function setMultiplier(value) {
  multiplier = value;
}

function clickCookie() {
  cookies += multiplier;
  document.getElementById('cookie-count').innerText = cookies;
}

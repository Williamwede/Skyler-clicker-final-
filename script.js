
let cookies = 0;
let multiplier = 1;
let upgrades = {
  football: { cost: 1000, cps: 100, interval: 10000, bought: false },
  baseball: { cost: 10000, cps: 500, interval: 15000, bought: false },
  deer: { cost: 1000000, cps: 100000, interval: 15000, bought: false }
};

function setMultiplier(value) {
  multiplier = value;
}

function clickCookie() {
  cookies += multiplier;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('cookie-count').innerText = cookies;
}

function buyUpgrade(type) {
  const upgrade = upgrades[type];
  if (!upgrade.bought && cookies >= upgrade.cost) {
    cookies -= upgrade.cost;
    upgrade.bought = true;
    document.getElementById(type + "-img").style.display = "inline";
    setInterval(() => {
      cookies += upgrade.cps;
      updateDisplay();
    }, upgrade.interval);
    updateDisplay();
  }
}

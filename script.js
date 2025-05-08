
let cookies = 0;
let multiplier = 1;
let upgrades = {
  football: { cost: 1000, cps: 100, interval: 10000, count: 0, boost: 1 },
  baseball: { cost: 10000, cps: 500, interval: 15000, count: 0, boost: 1 },
  deer: { cost: 1000000, cps: 100000, interval: 15000, count: 0, boost: 1 }
};
let multipliers = {};

function clickCookie() {
  cookies += multiplier;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('cookie-count').innerText = cookies;
  for (let key in upgrades) {
    const countSpan = document.getElementById(key + "-count");
    countSpan.innerText = upgrades[key].count > 0 ? upgrades[key].count : '';
    const img = document.getElementById(key + "-img");
    img.style.display = upgrades[key].count > 0 ? "inline" : "none";
  }
}

function buyUpgrade(type) {
  const upgrade = upgrades[type];
  if (cookies >= upgrade.cost) {
    cookies -= upgrade.cost;
    upgrade.count += 1;
    setInterval(() => {
      cookies += upgrade.cps * upgrade.boost;
      updateDisplay();
    }, upgrade.interval);
    updateDisplay();
  }
}

function upgradeSkyler(type) {
  const upgrade = upgrades[type];
  const upgradeCost = upgrade.cost * 5;
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    upgrade.boost += 1;
    updateDisplay();
    alert(`${type} Skyler's production upgraded! Boost: ×${upgrade.boost}`);
  }
}

function buyMultiplier(value, cost) {
  if (!multipliers[value] && cookies >= cost) {
    cookies -= cost;
    multiplier = value;
    multipliers[value] = true;
    updateDisplay();
    alert('Multiplier set to ×' + value);
  } else if (multipliers[value]) {
    multiplier = value;
    alert('Multiplier set to ×' + value);
  }
}


let cookies = 0;
let autoClickers = 0;
let intervalIds = [];

document.getElementById('cookie').onclick = function () {
  cookies++;
  updateCount();
  checkWin();
};

function updateCount() {
  document.getElementById('cookie-count').textContent = cookies;
}

function buyAutoClicker() {
  if (cookies >= 50) {
    cookies -= 50;
    autoClickers++;
    const id = setInterval(() => {
      cookies++;
      updateCount();
      checkWin();
    }, 1000);
    intervalIds.push(id);
    updateCount();
  }
}

function buyFootballSkyler() {
  if (cookies >= 1000) {
    cookies -= 1000;
    document.getElementById('football-skyler').classList.remove('hidden');
    setInterval(() => {
      cookies += 100;
      updateCount();
      checkWin();
    }, 10000);
    updateCount();
  }
}

function buyBaseballSkyler() {
  if (cookies >= 10000) {
    cookies -= 10000;
    document.getElementById('baseball-skyler').classList.remove('hidden');
    setInterval(() => {
      cookies += 500;
      updateCount();
      checkWin();
    }, 15000);
    updateCount();
  }
}

function buyDeerSkyler() {
  if (cookies >= 1000000) {
    cookies -= 1000000;
    document.getElementById('deer-skyler').classList.remove('hidden');
    setInterval(() => {
      cookies += 100000;
      updateCount();
      checkWin();
    }, 15000);
    updateCount();
  }
}

function checkWin() {
  if (cookies >= 100000000) {
    document.getElementById('end-message').classList.remove('hidden');
  }
}

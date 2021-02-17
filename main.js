function $(x) { return document.getElementById(x); }

function getDefaultUser() {
  return {
    lastTick: new Date().getTime(),
  };
}

var user = getDefaultUser();

function gamecycle() {
}

function update() {
}

function startCycle() {
  setInterval(update, 10);
  setInterval(gameCycle, 10);
}
  

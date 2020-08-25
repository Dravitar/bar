function $(x) { return document.getElementById(x); }

function getDefaultUser() {
  return {
    bars: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    lastTick: new Date().getTime(),
  };
}

var user = getDefaultUser();

let bar = "\u25AE";
let arrow = "\u25BA";

function barClick(item, amount) {
  let name = "bar"+item;
  if($(name).style.display == "none") $(name).style.display = "";
  while(amount > 0){
    if(user.bars[item-1] < 10) {
      $(name).textContent += bar;
      user.bars[item-1] = user.bars[item-1]+1;
    }
    amount--;
  }
  if(user.bars[item-1] == 10 && $("reset"+item).style.display == "none") $("reset"+item).style.display = "";
}

function barReset(item, amount) {
  let name = "reset"+item;
  if(user.bars[item-1] == 10) {
    user.bars[item-1] = 0;
    let next = 1 + item;
    if(!$("bar"+next)) makeBar(next);
    if(user.bars[item] < 10){
      let newName = "bar"+next;
      $(newName).textContent += bar;
      user.bars[item] = user.bars[item]+1;
    }
  }
}

function makeBar(n) {
  var newDiv = document.createElement("div");
  var newLine = document.createElement("div");
  var newBar = document.createElement("span");
  var newButton2 = document.createElement("button");
  newDiv.id = "row"+n;
  let content = "";
  newBar.id = "bar"+n;
  newButton2.id = "reset"+n;
  newButton2.setAttribute("onClick", "barReset("+n+",1)");
  for(i=0;i<n;i++){
    newButton2.textContent += bar;
    content += bar;
  }
  newButton2.textContent += arrow;
  for(i=0;i<n+1;i++){
    newButton2.textContent += bar;
  }
  content = content + ": ";
  var text = document.createTextNode(content);
  newLine.appendChild(text);
  newLine.appendChild(newBar);
  newDiv.appendChild(newLine);
  newDiv.appendChild(newButton2);
  $("rows").appendChild(newDiv);
}
  
function gameCycle() {
  let now = new Date().getTime();
  let iter = 0;
  if((now - user.lastTick)>1000) {
    iter = Math.floor((now-user.lastTick)/1000);
    user.lastTick = now;
  }
  if(barAutoPresser.purchased>0){
    barClick(1, iter);
  }
}

function update() {
  for(i=0;i<8;i++){
    let j = i+1;
    if(user.bars[i]==0 && $("bar"+j)) $("bar"+j).textContent = "";
  }
  if(!$("upgrade1")&&(user.bars[1] > 0)) loadUpgradeSet(1);
}

function startCycle() {
  makeBar(1);
  setInterval(update, 10);
  setInterval(gameCycle, 10);
}
  

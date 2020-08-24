function $(x) { return document.getElementById(x); }

function getDefaultUser() {
  return {
    bars: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    user.bars[item] = user.bars[item]+1;
    user.bars[item-1] = 0;
    let next = 1 + item;
    if(!$("bar"+next)) makeBar(next);
    let newName = "bar"+next;
    $(newName).textContent += bar;
  }
}

function makeBar(n) {
  var newDiv = document.createElement("div");
  var newBar = document.createElement("div");
  var newButton2 = document.createElement("button");
  newDiv.id = "row"+n;
  newBar.id = "bar"+n;
  newButton2.id = "reset"+n;
  newButton2.setAttribute("onClick", "barReset("+n+",1)");
  for(i=0;i<n;i++){
    newButton2.textContent += bar;
  }
  newButton2.textContent += arrow;
  for(i=0;i<n+1;i++){
    newButton2.textContent += bar;
  }
  newDiv.appendChild(newBar);
  newDiv.appendChild(newButton2);
  $("rows").appendChild(newDiv);
}
  

function update() {
  for(i=0;i<8;i++){
    let j = i+1;
    if(user.bars[i]==0 && $("bar"+j)) $("bar"+j).textContent = "";
  }
}

function startCycle() {
  setInterval(update, 10);
}
  

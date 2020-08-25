function Upgrade(id, price, index, repeated, growth, purchased) {
  this.id = id;
  this.price = price;
  this.index = index;
  this.repeated = repeated;
  this.growth = growth;
  this.purchased = purchased;
}

let barAutoPresser = new Upgrade("barAutoPresser", 1, 2, false, 0, 0);

let allUpgrades = [barAutoPresser];

function createUpgrade(upgrade, type) {
  let symbol;
  switch(type) {
    case "inf":
      symbol = "\u221E";
      break;
    case "power":
      symbol = "\u2191";
      break;
  }
  var newUpgrade = document.createElement("button");
  let indexBars = "";
  let bar = "\u25AE";
  for(i=0;i<upgrade.index;i++){
    indexBars+= bar;
  }
  newUpgrade.id = upgrade.id;
  newUpgrade.setAttribute("onclick", "checkUpgrade("+upgrade.id+")");
  newUpgrade.innerHTML = "format("+upgrade.price+") "+indexBars+"<br/>"+
    symbol+indexBars;
  $("upgrades").appendChild(newUpgrade);
}

function checkUpgrade(id) {
  let upgrade;
  allUpgrades.forEach(function(item) {
    if(item.id==id) upgrade = item;
  });
  if(upgrade.purchased<=upgrade.repeated&&user.bars[upgrade.index-1]>=upgrade.price){
    upgrade.purchased++;
    user.bars[upgrade.index-1]-=upgrade.price;
  }
}

function loadUpgradeSet(num) {
  switch(num) {
    case 1:
      createUpgrade(barAutoPresser, "inf");
  }
}

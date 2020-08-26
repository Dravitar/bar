function Upgrade(id, price, index, repeated, growth, purchased) {
  this.id = id;
  this.price = price;
  this.index = index;
  this.repeated = repeated;
  this.growth = growth;
  this.purchased = purchased;
}

let barAutoPresser = new Upgrade("barAutoPresser", 1, 2, 9, 3, 0);
let firstAutoReset = new Upgrade("firstAutoReset", 1, 3, 9, 5, 0);
let firstConversionBoost = new Upgrade("firstConversionBoost", 1, 3, 9, 5, 0);

let allUpgrades = [barAutoPresser, firstAutoReset, firstConversionBoost];

function createUpgrade(upgrade, index, type) {
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
  let affectedBars = "";
  let bar = "\u25AE";
  for(i=0;i<upgrade.index;i++){
    indexBars+= bar;
  }
  for(i=0;i<index;i++){
    affectedBars+= bar;
  }
  newUpgrade.id = upgrade.id;
  newUpgrade.setAttribute("onclick", "checkUpgrade('"+upgrade.id+"')");
  newUpgrade.innerHTML = "<span id='"+upgrade.id+"price'>"+format(upgrade.price)+"</span>"+indexBars+"<br/>"+
    symbol+affectedBars+"\u2191";
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
    upgrade.price*=upgrade.growth;
    $(id+"price").textContent = format(upgrade.price);
  }
}

function loadUpgradeSet(num) {
  switch(num) {
    case 1:
      createUpgrade(barAutoPresser, 1, "inf");
      break;
    case 2:
      createUpgrade(firstAutoReset, 2, "inf");
      createUpgrade(firstConversionBoost, 2, "power");
      break;
  }
}

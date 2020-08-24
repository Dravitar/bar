function createUpgrade(id, amount, index, growth) {
  var newUpgrade = document.createElement("button");
  newUpgrade.id = id;
  
}

function loadUpgradeSet(num) {
  switch(num) {
    case 1:
      createUpgrade("barAutoPresser", 1, 2, false);
  }
}

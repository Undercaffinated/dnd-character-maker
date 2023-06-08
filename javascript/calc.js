function calcMaxUpgradesAllowed(characterClass, level) {
  let totalUpgrades = 0;
  if (level > 3) totalUpgrades++;
  if (level > 5 && characterClass === "Fighter") totalUpgrades++;
  if (level > 7) totalUpgrades++;
  if (level > 11) totalUpgrades++;
  if (level > 13 && characterClass === "Fighter") totalUpgrades++;
  if (level > 15) totalUpgrades++;
  if (level > 18) totalUpgrades++;

  const maxUpgradesAllowedOutput2b = document.getElementById(
    "max-upgrades-allowed-2b",
  );
  const maxFeatsAllowedOutput2b = document.getElementById(
    "max-feats-allowed-2b",
  );
  const maxBonusAllocations = document.getElementById(
    "max-bonus-allocations-2b",
  );
  maxUpgradesAllowedOutput2b.textContent = totalUpgrades;
  maxFeatsAllowedOutput2b.textContent = totalUpgrades;
  maxBonusAllocations.textContent = 2 * totalUpgrades;
  return (totalUpgrades);
}

function calcRemainingBonusPoints() {
  const remainingBonusPoints = 2 *
    (sessionData.maxUpgradesAllowed - sessionData.featsTaken);

  const remainingBonusPointOutput2b = document.getElementById(
    "remaining-bonus-points-2b",
  );
  remainingBonusPointOutput2b.textContent = remainingBonusPoints;
}

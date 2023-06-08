// raceSubrace: [STR, DEX, CON, INT, WIS, CHA, Unassigned Extra]
const racialBonuses = {
  dragonborn: [2, 0, 0, 0, 0, 1, 0],
  dwarfHill: [0, 0, 2, 0, 1, 0, 0],
  dwarfMountain: [2, 0, 2, 0, 0, 0, 0],
  elfHigh: [0, 2, 0, 0, 1, 0, 0],
  elfWood: [0, 2, 0, 0, 1, 0, 0],
  elfDrow: [0, 2, 0, 0, 0, 1, 0],
  gnomeForest: [0, 1, 0, 2, 0, 0, 0],
  gnomeRock: [0, 0, 1, 2, 0, 0, 0],
  halflingLightfoot: [0, 2, 0, 0, 0, 1, 0],
  halflingStout: [0, 2, 1, 0, 0, 0, 0],
  halfElf: [0, 0, 0, 0, 0, 0, 2],
  halfOrc: [2, 0, 1, 0, 0, 0, 0],
  human: [1, 1, 1, 1, 1, 1, 0],
  humanVariant: [0, 0, 0, 0, 0, 0, 2],
  tiefling: [0, 0, 0, 1, 0, 2, 0],
};

// Levels character upgrades are awarded by class
const upgradeLevels = {
  fighter: [4, 6, 8, 12, 14, 16, 19],
  else: [4, 8, 12, 16, 19],
};

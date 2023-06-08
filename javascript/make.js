function makeBonusSummary(racialBonusArray) {
  let summary = "";
  const labels = [
    " STR ",
    " DEX ",
    " CON ",
    " INT ",
    " WIS ",
    " CHA ",
    " Unassigned ",
  ];

  for (let i = 0; i < labels.length; i++) {
    if (racialBonusArray[i] > 0) {
      summary.concat(labels[i]);
    }
  }

  console.log(summary);
  return summary;
}

makeBonusSummary([1, 1, 1, 1, 1, 1, 1]);

function makeBonusSummary(racialBonusArray) {
  let summary = "";
  const labels = [
    " STR ",
    " DEX ",
    " CON ",
    " INT ",
    " WIS ",
    " CHA ",
    " Unassigned ",
  ];

  for (let i = 0; i < labels.length; i++) {
    if (racialBonusArray[i] > 0) {
      summary.concat(labels[i]);
    }
  }

  console.log(summary);
  return summary;
}

makeBonusSummary([1, 1, 1, 1, 1, 1, 1]);

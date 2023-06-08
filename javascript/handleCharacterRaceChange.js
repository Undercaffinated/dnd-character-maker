function handleCharacterRaceChange() {
  const characterRace = document.getElementById("character-race").value;
  console.log("Selected character race: " + characterRace);

  const characterRaceOutput2b = document.getElementById("character-race-output-2b");
  characterRaceOutput2b.textContent = characterRace;

  const characterRaceBonusSummary2b = document.getElementById("racialBonusSummary");
  characterRaceBonusSummary2b.textContent = makeRacialBonusSummary(characterRace);
}

function makeRacialBonusSummary(characterRace) {
  import racialBonuses from reference-objects;

  let summary = "";
  let bonusArray = [0, 0, 0, 0, 0, 0, 0];

  bonusArray = "../reference-objects.js"

  return(summary);
}

function handleCharacterRaceChange() {
  const characterRace = document.getElementById("character-race").value;
  sessionData.characterRace = characterRace;
  console.log(
    "Session Data Updated: sessionData.characterRace = " + characterRace,
  );

  const characterRaceOutput2b = document.getElementById(
    "character-race-output-2b",
  );
  characterRaceOutput2b.textContent = characterRace;

  const racialBonusSummary = document.getElementById("racialBonusSummary");
  let summary = "";
}

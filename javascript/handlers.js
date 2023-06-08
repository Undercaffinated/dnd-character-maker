function handleCharacterBackgroundChange() {
  const characterBackground =
    document.getElementById("character-background").value;

  sessionData.characterBackground = characterBackground;

  console.log("Selected character background: " + characterBackground);
}

function handleCharacterClassChange() {
  const characterClass = document.getElementById("character-class").value;

  sessionData.characterClass = characterClass;
  sessionData.maxUpgradesAllowed = calcMaxUpgradesAllowed(
    sessionData.characterClass,
    sessionData.characterLevel,
  );

  console.log("Selected character class: " + characterClass);
}

function handleCharacterLevelChange() {
  const characterLevel = Number(
    document.getElementById("character-level").value,
  );

  sessionData.characterLevel = characterLevel;
  sessionData.maxUpgradesAllowed = calcMaxUpgradesAllowed(
    sessionData.characterClass,
    sessionData.characterLevel,
  );

  console.log("Selected character level: " + characterLevel);
}

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

function handleNumberFeatsTakenChange() {
  const numberFeatsTakenElement = document.getElementById(
    "number-feats-taken",
  );

  sessionData.featsTaken = Number(numberFeatsTakenElement.value);

  calcRemainingBonusPoints();
}

function handleRollSystemChange() {
  const rollSystem = document.getElementById("roll-system").value;
  sessionData.rollSystem = rollSystem;

  console.log("rollSystem: " + rollSystem);
}

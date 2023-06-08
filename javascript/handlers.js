function handleCharacterBackgroundChange() {
  const characterBackground =
    document.getElementById("character-background").value;
  sessionData.characterBackground = characterBackground;
  console.log("Selected character background: " + characterBackground);
}

function handleCharacterClassChange() {
  const characterClass = document.getElementById("character-class").value;
  sessionData.characterClass = characterClass;
  console.log("Selected character class: " + characterClass);
}

function handleCharacterLevelChange() {
  const characterLevel = document.getElementById("character-level").value;
  sessionData.characterLevel = characterLevel;
  console.log("Selected character level: " + characterLevel);
}

function handleRollSystemChange() {
  const rollSystem = document.getElementById("roll-system").value;
  sessionData.rollSystem = rollSystem;
  console.log("rollSystem: " + rollSystem);
}

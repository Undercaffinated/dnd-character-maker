function handleCharacterRaceChange() {
    let characterRace = document.getElementById('character-race').value;
    console.log("Selected character race: " + characterRace);

    const characterRaceOutput2bElement = document.getElementById("character-race-output-2b");
    characterRaceOutput2bElement.textContent = characterRace;
}
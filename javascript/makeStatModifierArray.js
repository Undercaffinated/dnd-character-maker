function calcIndividualModifiers(singleAbilityScore) {
	let newModifier = singleAbilityScore;	
	newModifier -= 10;
	newModifier /= 2;
	newModifier = Math.floor(newModifier);
	return newModifier;
}

function makeCharacterModifierArray(characterAbilityScoreArray) {
	let characterModifierArray = [0, 0, 0, 0, 0, 0];
	
	for (let i = 0; i < 6; i++) {
		characterModifierArray[i] = calcIndividualModifiers(characterAbilityScoreArray[i]);
	}
	return characterModifierArray;
}
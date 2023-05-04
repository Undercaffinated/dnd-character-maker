// Input: A 6 element array containing one character's Ability Scores.
// Function: Takes the array and calculates the appropriate ability modifiers for each.
// Returns: Returns a new array with 6 elements corresponding to each providd ability score.


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


// The below area is for testing purposes only. -------------------------------------------------------
// let testAbilityScoreArray = [15, 14, 13, 12, 10, 8];
// let characterModifierArray = makeCharacterModifierArray(testAbilityScoreArray);
// console.log(characterModifierArray);

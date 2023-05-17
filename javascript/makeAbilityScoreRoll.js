function makeAbilityScoreRoll() {
    let rollSystem = document.getElementById("roll-system").value;
    console.log("Roll Button Clicked; rollSystem == " + rollSystem);

    let abilityScores = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) {
        abilityScores[i] = singleStatRoll(rollSystem);
    }
    
    console.log("Generated Ability Scores: ", abilityScores);

    updateRollResults(abilityScores);
}

function singleStatRoll(rollSystem) { 

    let quantityOfDice = 0;
    let numberLowestDiceToDrop = 0;

    if (rollSystem === "harsh-roll") {
        quantityOfDice = 3;
        numberLowestDiceToDrop = 0;
    } else if (rollSystem === "standard-roll") {
        quantityOfDice = 4;
        numberLowestDiceToDrop = 1;
    } else if (rollSystem === "carolyne-roll") {
        quantityOfDice = 5;
        numberLowestDiceToDrop = 2;
    }

    let rolls = [];

    for (let i = 0; i < quantityOfDice; i++) {
        rolls.push(rollDie(6));
    }
    console.log("rolls: ", rolls);

    rolls.sort((a, b) => b - a);
    console.log("rolls after sort: ", rolls);

    for (let i = 0; i < numberLowestDiceToDrop; i++) {
        rolls.pop();
    }
    console.log("rolls after pop: ", rolls);

    let total = 0;
    for (let i = 0; i < rolls.length; i++) {
        total += rolls[i];
    }
    console.log("total: ", total);
    
    return total;
}

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function updateRollResults(abilityScores) {
    const rollResultsElement = document.getElementById("roll-results");
    rollResultsElement.textContent = abilityScores;
}
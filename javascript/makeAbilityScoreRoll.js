function makeAbilityScoreRoll() {
    let rollSystem = document.getElementById("roll-system").value;

    let abilityScores = [0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < 6; i++) {
        abilityScores[i] = singleStatRoll(rollSystem);
    }
    abilityScores.sort(function(a, b) {return b-a});
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

    for (let i = 0; i < numberLowestDiceToDrop; i++) {
        rolls.pop();
    }

    let total = 0;
    for (let i = 0; i < rolls.length; i++) {
        total += rolls[i];
    }
    
    return total;
}

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function updateRollResults(abilityScores) {
    const rollResultsElement = document.getElementById("roll-results");
    rollResultsElement.textContent = abilityScores;
}

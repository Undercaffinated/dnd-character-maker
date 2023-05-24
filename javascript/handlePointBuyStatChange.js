function _handlePointBuyStatChange() {
  const pointBuyStats = [0, 0, 0, 0, 0, 0];
  let pointsRemaining = 27;

  /*  Array Indeces     0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5 */
  const upgradeCosts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 7, 9];

  pointBuyStats[0] = Number(document.getElementById("pb-str").value);
  pointBuyStats[1] = Number(document.getElementById("pb-dex").value);
  pointBuyStats[2] = Number(document.getElementById("pb-con").value);
  pointBuyStats[3] = Number(document.getElementById("pb-int").value);
  pointBuyStats[4] = Number(document.getElementById("pb-wis").value);
  pointBuyStats[5] = Number(document.getElementById("pb-cha").value);

  for (let i = 0; i < 6; i++) {
    console.log(
      "pointBuyStats Info: ",
      i,
      typeof (pointBuyStats[i]),
      pointBuyStats[i],
    );
  }

  // Correct illegal inputs
  for (let i = 0; i < pointBuyStats.length; i++) {
    if (pointBuyStats[i] > 15 || pointBuyStats[i] < 8) {
      console.log('Illegal value entered for pointBuyStats. Changing to "8."');
      pointBuyStats[i] = 8;
    }
  }

  for (let i = 0; i < pointBuyStats.length; i++) {
    pointsRemaining -= upgradeCosts[pointBuyStats[i]];
  }

  const pointBuyTextOutput = document.getElementById("point-buy-text-output");
  pointBuyTextOutput.textContent = pointsRemaining;

  const finalStr2A = document.getElementById("2a-final-str");
  const finalDex2A = document.getElementById("2a-final-dex");
  const finalCon2A = document.getElementById("2a-final-con");
  const finalInt2A = document.getElementById("2a-final-int");
  const finalWis2A = document.getElementById("2a-final-wis");
  const finalCha2A = document.getElementById("2a-final-cha");

  finalStr2A.value = pointBuyStats[0];
  finalDex2A.value = pointBuyStats[1];
  finalCon2A.value = pointBuyStats[2];
  finalInt2A.value = pointBuyStats[3];
  finalWis2A.value = pointBuyStats[4];
  finalCha2A.value = pointBuyStats[5];
}

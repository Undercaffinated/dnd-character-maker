const sessionData = {
  playerName: "",
  characterName: "",
  characterClass: document.getElementById("character-class").value,
  characterRace: document.getElementById("character-race").value,
  characterLevel: Number(document.getElementById("character-level").value),
  characterBackground: document.getElementById("character-background"),
  characterAbilityScores: [0, 0, 0, 0, 0, 0],
  characterAbilityModifiers: [0, 0, 0, 0, 0, 0],
  racialBonuses: [0, 0, 0, 0, 0, 0, 0],
  passivePerception: 0,
  savingThrows: [false, false, false, false, false, false],
  savingThrowValues: [0, 0, 0, 0, 0, 0],
  armorClass: 0,
  initiative: 0,
  speed: 0,
  hitPointMaximum: 0,
  hitDice: "0",
  maxUpgradesAllowed: 0,
  featsTaken: 0,

  // 0 = No Proficiency, 1 = Proficient, 2 = Expertise
  characterSkills: {
    acrobatics: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0,
  },

  spellcasting: {
    spellcastingAbility: null,
    spellSaveDC: 0,
    spellAttackBonus: 0,
    cantrips: {},
    first: {},
    second: {},
    third: {},
    fourth: {},
    fifth: {},
    sixth: {},
    seventh: {},
    eighth: {},
    ninth: {},
  },

  abilityScoreGenMethod: "",

  step2aAbilityScores: [0, 0, 0, 0, 0, 0],

  // [STR, DEX, CON, INT, WIS, CHA, Unassigned]
  step2bBonusAbilityScoreAllocation: [0, 0, 0, 0, 0, 0],
};

sessionStorage.setItem("sessionData", sessionData);
console.log("Session Data Created");

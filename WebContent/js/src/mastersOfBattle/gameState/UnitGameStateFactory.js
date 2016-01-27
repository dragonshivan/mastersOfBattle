var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameStateFactory = function() {};


MASTERS_OF_BATTLE.UnitGameStateFactory.prototype.createUnit = function(unitId, owningPlayer, startCellX, startCellY, membersCount) {
	if(unitId === "humanSwordsman") {
		return this.createHumanSwordsman(owningPlayer, startCellX, startCellY, membersCount);
	} else if(unitId === "humanArcher") {
		return this.createHumanArcher(owningPlayer, startCellX, startCellY, membersCount);
	} else {
		throw "No state definition for unitId >" + unitId + "< !";
	}
};

MASTERS_OF_BATTLE.UnitGameStateFactory.prototype.createHumanSwordsman = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitStats = new MASTERS_OF_BATTLE.UnitStats("[H] Swordsman", owningPlayer, 
			startCellX, startCellY, membersCount, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN.hitPoints);
	var unitGameState = new MASTERS_OF_BATTLE.UnitGameState(unitStats, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN);
	return unitGameState;
};

MASTERS_OF_BATTLE.UnitGameStateFactory.prototype.createHumanArcher = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitStats = new MASTERS_OF_BATTLE.UnitStats("[H] Archer", owningPlayer, 
			startCellX, startCellY, membersCount, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.ARCHER.hitPoints);
	var unitGameState = new MASTERS_OF_BATTLE.UnitGameState(unitStats, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.ARCHER);
	return unitGameState;
};
var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitFactory = function() {};

MASTERS_OF_BATTLE.UnitFactory.prototype.createHumanSwordsman = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitStats = new MASTERS_OF_BATTLE.UnitStats("[H] Swordsman", owningPlayer, 
			startCellX, startCellY, membersCount, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN.hitPoints);
	var unit = new MASTERS_OF_BATTLE.UnitGameEntity(MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN, unitStats);
	return unit;
};

MASTERS_OF_BATTLE.UnitFactory.prototype.createHumanArcher = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitStats = new MASTERS_OF_BATTLE.UnitStats("[H] Archer", owningPlayer, 
			startCellX, startCellY, membersCount, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.ARCHER.hitPoints);
	var unit = new MASTERS_OF_BATTLE.UnitGameEntity(MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.ARCHER, unitStats);
	return unit;
};
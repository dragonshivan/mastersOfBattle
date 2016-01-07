var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitFactory = function() {};

MASTERS_OF_BATTLE.UnitFactory.prototype.createHumanSwordsman = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitStats = new MASTERS_OF_BATTLE.UnitStats(startCellX, startCellY, membersCount, MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN.hitPoints);
	var unit = new MASTERS_OF_BATTLE.UnitGameEntity("[H] Swordsman", owningPlayer,
			MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN, 
			unitStats);
	return unit;
}
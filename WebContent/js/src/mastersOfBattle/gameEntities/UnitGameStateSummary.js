var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameStateSummary = function(unitId, owningPlayer, cellX, cellY, membersCount) {
	this.unitId = unitId;
	this.owningPlayer = owningPlayer;
	this.cellX = cellX;
	this.cellY = cellY;
	this.membersCount = membersCount;
};

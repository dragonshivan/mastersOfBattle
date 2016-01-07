var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitStats = function(owningPlayer, startCellX, startCellY, unitCharacteristics, membersCount) {
	this.owningPlayer = owningPlayer;
	this.startCellX = startCellX;
	this.startCellY = startCellY;
	this.unitCharacteristics = unitCharacteristics;
	this.membersCount = membersCount;
	
	this.currentCellX = startCellX;
	this.currentCellY = startCellY;
	this.currentMembersCount = membersCount;
	this.currentHitPointsTopUnit = unitCharacteristics.hitPoints;
};
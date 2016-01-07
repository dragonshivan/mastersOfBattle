var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitStats = function(startCellX, startCellY, membersCount, topUnitHitPoints) {
	this.startCellX = startCellX;
	this.startCellY = startCellY;
	this.membersCount = membersCount;
	
	this.currentCellX = startCellX;
	this.currentCellY = startCellY;
	this.currentMembersCount = membersCount;
	this.topUnitHitPoints = topUnitHitPoints;
	this.currentHitPointsTopUnit = topUnitHitPoints;
};
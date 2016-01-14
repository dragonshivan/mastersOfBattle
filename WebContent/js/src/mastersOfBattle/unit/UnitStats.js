var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitStats = function(unitId, owningPlayer, startCellX, startCellY, membersCount, topUnitHitPoints) {
	this.unitId = unitId;
	this.owningPlayer = owningPlayer;
	
	this.startCellX = startCellX;
	this.startCellY = startCellY;
	this.currentCellX = startCellX;
	this.currentCellY = startCellY;
	
	this.membersCount = membersCount;
	this.currentMembersCount = membersCount;
	this.topUnitHitPoints = topUnitHitPoints;
	this.currentTopUnitHitPoints = topUnitHitPoints;
};
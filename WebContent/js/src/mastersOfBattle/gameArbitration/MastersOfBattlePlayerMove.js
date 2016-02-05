var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattlePlayerMove = function(defend, 
		movesToCellX, movesToCellY,
		performsActionOnCellX, performsActionOnCellY) {
	this.defend = defend;
	this.movesToCellX = movesToCellX;
	this.movesToCellY = movesToCellY;
	this.performsActionOnCellX = performsActionOnCellX;
	this.performsActionOnCellY = performsActionOnCellY;
};
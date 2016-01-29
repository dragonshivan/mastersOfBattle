var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattlePlayerMove = function(unitInTurnGameStateIndex, 
		movesToCellX, movesToCellY,
		performsActionOnCellX, performsActionOnCellY) {
	this.unitInTurnGameStateIndex = unitInTurnGameStateIndex;
	this.movesToCellX = movesToCellX;
	this.movesToCellY = movesToCellY;
	this.performsActionOnCellX = performsActionOnCellX;
	this.performsActionOnCellY = performsActionOnCellY;
};
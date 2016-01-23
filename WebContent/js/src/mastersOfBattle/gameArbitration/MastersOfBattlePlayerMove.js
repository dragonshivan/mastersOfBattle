var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattlePlayerMove = function(unitInTurnGameState, 
		movesToCellX, movesToCellY,
		performsActionOnCellX, performsActionOnCellY) {
	this.unitInTurnGameState = unitInTurnGameState;
	this.movesToCellX = movesToCellX;
	this.movesToCellY = movesToCellY;
	this.performsActionOnCellX = performsActionOnCellX;
	this.performsActionOnCellY = performsActionOnCellY;
};
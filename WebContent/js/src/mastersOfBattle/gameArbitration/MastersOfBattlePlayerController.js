var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattlePlayerController = function(isCPUPlayer) {
	this.isCPUPlayer = isCPUPlayer;
	
	this.unitToMoveGameState = null
	this.currentMastersOfBattleGameState = null;
	
};


MASTERS_OF_BATTLE.MastersOfBattlePlayerController.prototype.getPlayerMove = function(inputEvent, unitToMoveGameState, mastersOfBattleGameState) {
	console.log("getPlayerMove");
	if(this.isCPUPlayer) {
		//resolve next move with MINIMAX
	} else {
		//if valid, create player move from input event, else return null
	}
};
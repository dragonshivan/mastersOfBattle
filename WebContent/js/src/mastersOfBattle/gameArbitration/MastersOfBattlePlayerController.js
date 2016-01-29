var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattlePlayerController = function(isCPUPlayer) {
	this.isCPUPlayer = isCPUPlayer;
};

/**
 * 
 * @param {MASTERS_OF_BATTLE.MastersOfBattleGameStte} mastersOfBattleGameState
 * @returns {MASTERS_OF_BATTLE.MastersOfBattlePlayerMove} 
 */
MASTERS_OF_BATTLE.MastersOfBattlePlayerController.prototype.getPlayerMove = function(mastersOfBattleGameState) {
	console.log("player controller getPlayerMove");
	if(this.isCPUPlayer) {
		//resolve next move with MINIMAX
	} else {
		//wait for human player to input next move
	}
};
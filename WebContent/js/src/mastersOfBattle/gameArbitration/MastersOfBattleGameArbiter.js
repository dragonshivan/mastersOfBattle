var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter = function(mastersOfBattleGameState, player1Controller, player2Controller) {
	this.mastersOfBattleGameState = mastersOfBattleGameState;
	this.playerControllerMap = [];
	this.playerControllerMap[1] = player1Controller; 
	this.playerControllerMap[2] = player2Controller;
};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initGame = function() {
	
};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.advanceGame = function() {
	
};
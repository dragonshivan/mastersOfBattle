var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter = function(player1Controller, player2Controller) {
	GAME_LOOP.GameEntity.call(this, 0, 0, 0, 0);
	
	this.mastersOfBattleGameState = mastersOfBattleGameState;
	this.playerControllerMap = [];
	this.playerControllerMap[1] = player1Controller; 
	this.playerControllerMap[2] = player2Controller;
	
	this.unitsCurrentGameState = null;
};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.constructor = MASTERS_OF_BATTLE.MastersOfBattleGameArbiter;

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initGame = function(unitsStartingGameState) {
	this.unitsCurrentGameState = unitsStartingGameState;
};

/**
 * @public
 * @param {Object} inputEvent
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.processInput =  function(inputEvent) {
	
};

/**
 * @public
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateState =  function() {
	
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateGraphics =  function(context) {
	
};
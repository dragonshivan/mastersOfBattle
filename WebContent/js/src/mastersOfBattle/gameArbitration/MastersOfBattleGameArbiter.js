var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter = function(player1Controller, player2Controller) {
	GAME_LOOP.GameEntity.call(this, 0, 0, 0, 0);
	
	this.mastersOfBattleGameState = mastersOfBattleGameState;
	this.playerControllerMap = [];
	this.playerControllerMap[1] = player1Controller; 
	this.playerControllerMap[2] = player2Controller;
	
	this.currentMastersOfBattleGameState = null;
};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.constructor = MASTERS_OF_BATTLE.MastersOfBattleGameArbiter;

/**
 * @public
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initGame = function(unitGameStateSummaries) {
	this.initCurrentMastersOfBattleGameState(unitGameStateSummaries);
	this.setUnitsTurnOrder();
	var unitInTurn = this.getUnitInTurn();
	//TODO
	//get unit in turn owning player
	//get associated player controler
	//ask controller to get the player's move
	//apply move to game state to get next game state
};

/**
 * @public
 * @param {Object} inputEvent
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.processInput =  function(inputEvent) {};

/**
 * @public
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateState =  function() {
	
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateGraphics =  function(context) {};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.setUnitsTurnOrder = function() {
	//TODO
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.getUnitInTurn = function() {
	//TODO
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initCurrentMastersOfBattleGameState = function(unitGameStateSummaries) {
	//TODO
	this.currentMastersOfBattleGameState =
		new MASTERS_OF_BATTLE.MastersOfBattleGameState(playerToMove, battleFieldStartingGameState, unitsStartingGameStates);
};
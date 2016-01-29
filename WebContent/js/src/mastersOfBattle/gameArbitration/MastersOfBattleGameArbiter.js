var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter = function(player1Controller, player2Controller) {
	GAME_LOOP.GameEntity.call(this, 0, 0, 0, 0);
	
	this.mastersOfBattleGameState = null;
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
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initGame = function(unitGameEntities) {
	this.initCurrentMastersOfBattleGameState(unitGameEntities);
	var playerMove = this.playerControllerMap[this.currentMastersOfBattleGameState.playerToMove.playerNumber].getPlayerMove(this.currentMastersOfBattleGameState);
	//TODO
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
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initCurrentMastersOfBattleGameState = function(unitGameEntities) {
	var unitGameStates = this.extractUnitGameStates(unitGameEntities);
	this.setUnitsTurnOrder(unitGameStates);
	var unitInTurnGameState = this.getUnitInTurnGameState(unitGameStates);
	this.currentMastersOfBattleGameState = new MASTERS_OF_BATTLE.MastersOfBattleGameState(unitInTurnGameState.unitStats.owningPlayer, null, unitGameStates);
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.extractUnitGameStates = function(unitGameEntities) {
	var unitGameStates = new Array();
	for(var i = 0; i < unitGameEntities.length; i++) {
		unitGameStates[i] = unitGameEntities[i].getUnitGameState();
	}
	return unitGameStates;
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.setUnitsTurnOrder = function(unitGameStates) {
	//TODO: for units with same sequence, randomize their order
	unitGameStates.sort(function(u1, u2) {
		return u1.unitCharacteristics.sequence - u2.unitCharacteristics.sequence;
	});
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.getUnitInTurnGameState = function(unitGameStates) {
	if(this.currentMastersOfBattleGameState == null) {
		return unitGameStates[0]; 
	}
	
	var lastMove = this.currentMastersOfBattleGameState.getLastMove();
	var nextIndex = lastMove.unitInTurnGameStateIndex + 1;
	if(nextIndex >= unitGameStates.length) {
		nextIndex = 0;
	}
	return unitGameStates[nextIndex];
};
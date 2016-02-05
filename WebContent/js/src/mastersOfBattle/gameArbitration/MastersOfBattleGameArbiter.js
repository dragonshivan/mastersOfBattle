var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter = function(player1Controller, player2Controller, unitGameEntities) {
	GAME_LOOP.GameEntity.call(this, 0, 0, 0, 0);
	
	this.mastersOfBattleGameState = null;
	this.playerControllerMap = [];
	this.playerControllerMap[1] = player1Controller; 
	this.playerControllerMap[2] = player2Controller;
	this.unitGameEntities = unitGameEntities;
	
	this.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.INITIALIZING_GAME;
	
	this.currentMastersOfBattleGameState = null;
	this.currentValidPlayerMoveInputEvent = null;
	this.currentUnitToMoveGameState = null;
};

MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.constructor = MASTERS_OF_BATTLE.MastersOfBattleGameArbiter;

/**
 * @public
 * @param {Object} inputEvent
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.processInput =  function(inputEvent) {
	switch(this.gameArbitrationState) {
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.WAITING_FOR_PLAYER_MOVE: {
		if(this.isInputEventValidPlayerMove(inputEvent)) {
			this.currentValidPlayerMoveInputEvent = inputEvent;
		}
		break;
	}
	}
};

/**
 * @public
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateState =  function() {
	switch(this.gameArbitrationState) {
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.INITIALIZING_GAME: {
		this.initCurrentMastersOfBattleGameState();
		this.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.INFORMING_NEXT_PLAYER_TO_MOVE;
		break;
	}
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.INFORMING_NEXT_PLAYER_TO_MOVE: {
		this.updateUnitToMove();
		this.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.WAITING_FOR_PLAYER_MOVE;
		break;
	}
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.APPLYING_PLAYER_MOVE: {
		this.applyPlayerMove();
		his.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.WAITING_FOR_ANIMATIONS_TO_FINISH;
		break;
	}
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.WAITING_FOR_ANIMATIONS_TO_FINISH: {
		if(this.haveAnimationsFinished()) {
			if(this.hasGameEnded()) {
				this.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.GAME_ENDED;
			} else {
				//TODO get next unit to move
				this.gameArbitrationState = MASTERS_OF_BATTLE.Constants.GameArbitration.State.INFORMING_NEXT_PLAYER_TO_MOVE;
			}
		}
		break;
	}
	case MASTERS_OF_BATTLE.Constants.GameArbitration.State.GAME_ENDED: {
		
		break;
	}
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateGraphics =  function(context) {};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.initCurrentMastersOfBattleGameState = function() {
	var unitGameStates = this.extractUnitGameStates(this.unitGameEntities);
	this.setUnitsTurnOrder(unitGameStates);
	this.currentUnitToMoveGameState = this.getUnitInTurnGameState(unitGameStates);
	this.currentMastersOfBattleGameState = new MASTERS_OF_BATTLE.MastersOfBattleGameState(this.currentUnitToMoveGameState.unitStats.owningPlayer, null, unitGameStates);
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

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.updateUnitToMove  = function() {
	var update = new MASTERS_OF_BATTLE.UnitStats();
	update.isUnitToMove = true;
	MASTERS_OF_BATTLE.Constants.Utils.ObjectUtils.updateNonEmptyFields(update,
			this.currentUnitToMoveGameState.unitStats);
	//highlight new unit to move
	//unhilight previous unit to move
	//mark reachable cells
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.applyPlayerMove  = function() {
	var playerMove = this.getPlayerMove();
	//TODO apply the move
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.getPlayerMove  = function() {
	var currentPlayerController = this.playerControllerMap[this.currentMastersOfBattleGameState.playerToMove.playerNumber];
	this.currentPlayerMove = currentPlayerController.getPlayerMove(
			this.currentValidPlayerMoveInputEvent, 
			this.currentUnitToMoveGameState, 
			this.currentMastersOfBattleGameState);
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.isInputEventValidPlayerMove  = function(inputEvent) {
	//TODO
	return false;
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattleGameArbiter.prototype.haveAnimationsFinished  = function() {
	//TODO
	return false;
};
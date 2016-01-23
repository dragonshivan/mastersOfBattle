var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattleGameState = function(playerToMove, battleFieldStartingGameState, unitsStartingGameStates) {
	MINIMAX.GameState.call(this, playerToMove);
	this.battleFieldGameState = battleFieldStartingGameState;
	this.unitsGameState = unitsStartingGameStates;
};

/**
 * @public
 * @param {MINIMAX.Player} player
 * @param {MASTERS_OF_BATTLE.MastersOfBattlePlayerMove} mastersOfBattlePlayerMove
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.applyPlayerMove = function(player, mastersOfBattlePlayerMove) {
	throw "Not implemented";
};

/**
 * @public
 * @returns {Object}
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.getLastMove = function() {
	throw "Not implemented";
};

/**
 * @public
 * @param {MASTERS_OF_BATTLE.MastersOfBattleGameState} gameState
 * @returns {Boolean}
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.equals = function(gameState) {
	throw "Not implemented";
};

/**
 * @public
 * @returns {Number}
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.getHashcode = function() {
	throw "Not implemented";
};

/**
 * @public
 * @returns {Boolean}
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.isGameEnded = function() {
	throw "Not implemented";
};

/**
 * @public
 * @returns {MINIMAX.Player}
 */
MASTERS_OF_BATTLE.MastersOfBattleGameState.prototype.getPlayerToMove = function() {
	return this.playerToMove;
};
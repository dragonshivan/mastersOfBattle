var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @public
 * @param {MINIMAX.Player} playerToWin
 * @constructor
 * @returns {MINIMAX.LazyEvaluator}
 */
MINIMAX.LazyEvaluator = function(playerToWin) {
	this.playerToWin = playerToWin;
};

/**
 * @public
 * @param {MINIMAX.GameState} currentGameState
 * @returns {MINIMAX.GameStateIterator}
 */
MINIMAX.LazyEvaluator.prototype.getNextGameStatesIterator = function(currentGameState) {
	throw "Not implemented";
};

/**
 * @public
 * @param {MINIMAX.GameState} gameState
 * @returns {Number}
 */
MINIMAX.LazyEvaluator.prototype.evaluate = function(gameState) {
	throw "Not implemented";
};

/**
 * @public
 * @param {MINIMAX.GameState} gameState
 * @returns {Number}
 */
MINIMAX.LazyEvaluator.prototype.getEvaluationDepth = function(gameState) {
	throw "Not implemented";
};
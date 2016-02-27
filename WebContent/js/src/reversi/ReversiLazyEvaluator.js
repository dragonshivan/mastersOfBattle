var REVERSI = REVERSI || {};

REVERSI.ReversiLazyEvaluator = function(playerToWin) {
	MINIMAX.LazyEvaluator.call(this, playerToWin);
};

REVERSI.ReversiLazyEvaluator.prototype = Object.create(MINIMAX.LazyEvaluator.prototype);
REVERSI.ReversiLazyEvaluator.prototype.constructor = REVERSI.ReversiLazyEvaluator;

/**
 * @public
 * @param {REVERSI.ReversiGameState} currentGameState
 * @returns {REVERSI.ReversiGameStateIterator}
 */
REVERSI.ReversiLazyEvaluator.prototype.getNextGameStateIterator = function(gameState) {
	return new REVERSI.ReversiGameStateIterator(gameState);
};

/**
 * @public
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {Number}
 */
REVERSI.ReversiLazyEvaluator.prototype.evaluate = function(gameState) {
	throw "Not implemented";
};

/**
 * @public
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {Number}
 */
REVERSI.ReversiLazyEvaluator.prototype.getEvaluationDepth = function(gameState) {
	throw "Not implemented";
};
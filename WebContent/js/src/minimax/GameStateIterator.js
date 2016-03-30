var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @public
 * @constructor
 * @param {MINIMAX.GameState} gameState
 * @returns {MINIMAX.NextGameStateIterator}
 */
MINIMAX.NextGameStateIterator = function(gameState) {
	this.gameState = gameState;
};

/**
 * @public
 * @returns {MINIMAX.GameState}
 */
MINIMAX.NextGameStateIterator.prototype.next = function() {
	throw "Not implemented";
};

/**
 * @public
 * @returns {Boolean}
 */
MINIMAX.NextGameStateIterator.prototype.hasNext = function() {
	throw "Not implemented";
};
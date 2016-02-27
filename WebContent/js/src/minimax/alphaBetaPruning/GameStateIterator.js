var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @public
 * @constructor
 * @param {MINIMAX.GameState} gameState
 * @returns {MINIMAX.GameStateIterator}
 */
MINIMAX.GameStateIterator = function(gameState) {
	this.gameState = gameState;
};

/**
 * @public
 * @returns {MINIMAX.GameState}
 */
MINIMAX.GameStateIterator.prototype.next = function() {
	throw "Not implemented";
};

/**
 * @public
 * @returns {Boolean}
 */
MINIMAX.GameStateIterator.prototype.hasNext = function() {
	throw "Not implemented";
};
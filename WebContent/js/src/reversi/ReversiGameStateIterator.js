var REVERSI = REVERSI || {};

/**
 * @public
 * @param {MINIMAX.GameState} gameState
 * @constructor
 * @returns {REVERSI.ReversiGameStateIterator}
 */
REVERSI.ReversiGameStateIterator = function(gameState) {
	MINIMAX.GameStateIterator.call(this, gameState);
	this.reversiMoveIterator = new ReversiMoveIterator(gameState);
};

REVERSI.ReversiGameStateIterator.prototype = Object.create(MINIMAX.GameStateIterator.prototype);
REVERSI.ReversiGameStateIterator.prototype.constructor = REVERSI.ReversiGameStateIterator;

/**
 * @public
 * @returns {MINIMAX.GameState}
 */
REVERSI.ReversiGameStateIterator.prototype.next = function() {
	if(this.reversiMoveIterator.hasNext()) {
		var nextMove = this.reversiMoveIterator.next();
		var nextGameState = this.gameState.clone();
		nextGameState.move(nextMove);
		return nextGameState;
	}
	return null;
};

/**
 * @public
 * @returns {Boolean}
 */
REVERSI.ReversiGameStateIterator.prototype.hasNext = function() {
	return this.reversiMoveIterator.hasNext();
};

/**
 * @private
 * @param {MINIMAX.GameState} gameState
 * @constructor
 * @returns {REVERSI.ReversiMoveIterator}
 */
REVERSI.ReversiMoveIterator = function(gameState) {
	this.gameState = gameState;
	this.playerTokenType = REVERSI.TOKEN_TYPE_WHITE;
	if(gameState.playerToMove === MINIMAX.PLAYER_1) {
		playerTokenType = REVERSI.TOKEN_TYPE_BLACK;
	}
	this.currentX = 0;
	this.currentY = 0;
	
};

/**
 * @public
 * @returns {MINIMAX.GameState}
 */
REVERSI.ReversiMoveIterator.prototype.next = function() {
	
};

/**
 * @public
 * @returns {Boolean}
 */
REVERSI.ReversiMoveIterator.prototype.hasNext = function() {
	
};


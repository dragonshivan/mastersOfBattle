var REVERSI = REVERSI || {};

/**
 * @public
 * @param {MINIMAX.GameState} gameState
 * @constructor
 * @returns {REVERSI.ReversiNextGameStateIterator}
 */
REVERSI.ReversiNextGameStateIterator = function(gameState) {
	MINIMAX.NextGameStateIterator.call(this, gameState);
	this.reversiNextMoveIterator = new REVERSI.ReversiNextMoveIterator(gameState);
};

REVERSI.ReversiNextGameStateIterator.prototype = Object.create(MINIMAX.NextGameStateIterator.prototype);
REVERSI.ReversiNextGameStateIterator.prototype.constructor = REVERSI.ReversiNextGameStateIterator;

/**
 * @public
 * @returns {MINIMAX.GameState}
 */
REVERSI.ReversiNextGameStateIterator.prototype.next = function() {
	var nextMove = this.reversiNextMoveIterator.next();
	var nextGameState = this.gameState.clone();
	nextGameState.move(nextMove);
	return nextGameState;
};

/**
 * @public
 * @returns {Boolean}
 */
REVERSI.ReversiNextGameStateIterator.prototype.hasNext = function() {
	return this.reversiNextMoveIterator.hasNext();
};

/**
 * @private
 * @param {MINIMAX.Player} player
 * @param {MINIMAX.GameState} gameState
 * @constructor
 * @returns {REVERSI.ReversiNextMoveIterator}
 */
REVERSI.ReversiNextMoveIterator = function(gameState) {
	this.player = gameState.playerToMove;
	this.playerTokenType = REVERSI.TOKEN_TYPE_WHITE;
	if(this.player === MINIMAX.PLAYER_1) {
		this.playerTokenType = REVERSI.TOKEN_TYPE_BLACK;
	}
	this.gameState = gameState;
	this.currentX = 0;
	this.currentY = 0;
	this.nextReversiMove = this.findNext();
};

/**
 * @public
 * @returns {REVERSI.ReversiMove}
 */
REVERSI.ReversiNextMoveIterator.prototype.next = function() {
	var nextReversiMove = this.nextReversiMove;
	this.nextReversiMove = this.findNext();
	return nextReversiMove;
};

/**
 * @public
 * @returns {Boolean}
 */
REVERSI.ReversiNextMoveIterator.prototype.hasNext = function() {
	return this.nextReversiMove != null;
};

/**
 * @private
 * @returns {REVERSI.ReversiMove}
 */
REVERSI.ReversiNextMoveIterator.prototype.findNext = function() {
	var reversiMove = null;
	outer: for(var y = this.currentY; y < 8; y++) {
		for(var x = this.currentX; x < 8; x++) {//for each board position
			if(this.gameState.getTokenType(x, y) === REVERSI.TOKEN_TYPE_EMPTY) {//start possible-move-check from an empty position
				var flippedTokensPositions = [];
				vectorInnerLoop: for(var i = 0; i < 8; i++) {//get all the vectors around it
					var vector = REVERSI.VECTOR[i];
					var xNeighbor = x + vector.x;//use vector.x to get xNeighbor
					if(xNeighbor >= 0 && xNeighbor < 8) {//make sure xNeighbor is not outside the board
						var yNeighbor = y + vector.y;//use vector.y to get yNeighbor
						if(yNeighbor >= 0 && yNeighbor < 8) {//make sure yNeighbor is not outside the board
							if(this.gameState.getTokenType(xNeighbor, yNeighbor) === this.playerTokenType.opponentTokenType) { //make sure neighboring token is of opposing color
								var potentialFlippedTokensPositions = [];
								potentialFlippedTokensPositions.push(new REVERSI.Position(xNeighbor, yNeighbor)); //add the neighbor to (possibly) flipped tokens
								var xCurrent = xNeighbor + vector.x; 
								var yCurrent = yNeighbor + vector.y; //advance to next vectorial position
								while(xCurrent >=0 && xCurrent < 8 &&
										yCurrent >= 0 && yCurrent < 8) {
									if(this.gameState.getTokenType(xCurrent, yCurrent) === REVERSI.TOKEN_TYPE_EMPTY) { //if you stumble upon an empty position, mark this as a new move
										continue vectorInnerLoop; //we're done with possible-move-checking on this vector
									} else if(this.gameState.getTokenType(xCurrent, yCurrent) === this.playerTokenType.opponentTokenType) { //if you stumble upon opponent's token, add it to flipped positions
										potentialFlippedTokensPositions.push(new REVERSI.Position(xCurrent, yCurrent));	
										xCurrent = xCurrent + vector.x;
										yCurrent = yCurrent + vector.y;
									} else {//if we stumble upon a player's token
										for(var j = 0; j < potentialFlippedTokensPositions.length; j++) {
											flippedTokensPositions.push(potentialFlippedTokensPositions[j]);
										}
										continue vectorInnerLoop; //we're done with possible-move-checking on this vector
									}
								}
							}
						}
					}
				}
				if(flippedTokensPositions.length > 0) {
					this.currentX = x + 1;
					this.currentY = y;
					if(this.currentX == 8) {
						this.currentX = 0;
						this.currentY = this.currentY + 1;						
					}
					reversiMove = new REVERSI.ReversiMove(
							this.player,  
							x, 
							y, 
							flippedTokensPositions);
					break outer;
				}
			}
		}
		this.currentX = 0;
	}
	if(reversiMove == null) {
		this.currentX = 9;
		this.currentY = 9;
	}
	return reversiMove;
};


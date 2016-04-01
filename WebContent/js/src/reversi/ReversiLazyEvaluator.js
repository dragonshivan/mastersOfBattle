var REVERSI = REVERSI || {};

/**
 * @public
 * @param {MINIMAX.Player} playerToWin
 * @constructor
 * @returns {REVERSI.ReversiLazyEvaluator}
 */
REVERSI.ReversiLazyEvaluator = function(playerToWin) {
	MINIMAX.LazyEvaluator.call(this, playerToWin);
	this.evaluationCriteria = [];
	this.evaluationHorizon = 6;
};

REVERSI.ReversiLazyEvaluator.prototype = Object.create(MINIMAX.LazyEvaluator.prototype);
REVERSI.ReversiLazyEvaluator.prototype.constructor = REVERSI.ReversiLazyEvaluator;

/**
 * @public
 * @param {REVERSI.ReversiGameState} currentGameState
 * @returns {Array}
 */
REVERSI.ReversiLazyEvaluator.prototype.getNextGameStates = function(currentGameState) {
	var nextGameStates = [];
	if(currentGameState.isGameEnded()) {
		return nextGameStates;
	}

	var possibleMoves = REVERSI.REVERSI_GAME_STATE_HELPER.getPossibleMoves(currentGameState.playerToMove, currentGameState);
	for(var i = 0; i < possibleMoves.length; i++) {
		var move = possibleMoves[i];
		var nextGameState = currentGameState.clone();
		nextGameState.move(move);
		nextGameStates.push(nextGameState);
	}
	return nextGameStates;
};

/**
 * @public
 * @param {REVERSI.ReversiEvaluationCriterion} evaluationCriterion
 * @returns {Array}
 */
REVERSI.ReversiLazyEvaluator.prototype.addEvaluationCriterion = function(evaluationCriterion) {
	this.evaluationCriteria.push(evaluationCriterion);
};

/**
 * @public
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {Number}
 */
REVERSI.ReversiLazyEvaluator.prototype.evaluate = function(gameState) {
	var score = 0;
		
	if(gameState.isGameEnded()) {
		score = 
			REVERSI.EVALUATION_CRITERIA_DICTIONARY["TOKEN_COUNTER"].evaluationFunction(this.playerToWin, gameState);
		if(score >= 0) {
			score = score + MINIMAX.MINIMAX_WIN_SCORE;
		} else {
			score = score + MINIMAX.MINIMAX_LOSE_SCORE;
		}
	} else {
		for(var i = 0; i < this.evaluationCriteria.length; i++) {
			var evaluationCriterion = this.evaluationCriteria[i];
			score += evaluationCriterion.evaluationFunction(this.playerToWin, gameState);
		}
	}
	
	return score;
};

/**
 * @public
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {Number}
 */
REVERSI.ReversiLazyEvaluator.prototype.getEvaluationDepth = function(gameState) {
	//TODO mock this for tests
//	if(gameState.tokensCount < 33) {
//		return this.evaluationHorizon;
//	} else if(gameState.tokensCount < 44) {
//		return this.evaluationHorizon + 1;
//	} else if(gameState.tokensCount < 48) {
//		return this.evaluationHorizon + 2;
//	} else if(gameState.tokensCount < 53){
//		return this.evaluationHorizon + 3;
//	} else {
//		return this.evaluationHorizon + 5;
//	}
	return 3;
};

/**
 * @public
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {REVERSI.ReversiNextGameStateIterator} a new iterator
 */
REVERSI.ReversiLazyEvaluator.prototype.getNextGameStateIterator = function(gameState) {
	return new REVERSI.ReversiNextGameStateIterator(gameState);
};
	
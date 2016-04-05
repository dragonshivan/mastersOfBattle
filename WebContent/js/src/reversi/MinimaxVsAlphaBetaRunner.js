var REVERSI = REVERSI || {};


/**
 * @constructor
 * @param {MINIMAX.GameArbiter} gameArbiterBlack Arbiter for player 1
 * @param {MINIMAX.GameArbiter} gameArbiterWhite Arbiter for player 2
 * @returns {REVERSI.MinimaxVsAlphaBetaRunner}
 */
REVERSI.MinimaxVsAlphaBetaRunner = function(
		startingGameState,
		gameArbiterBlack,
		gameArbiterWhite) {
	
	this.startingGameState = startingGameState;
	this.gameArbiterBlack = gameArbiterBlack;
	this.gameArbiterWhite = gameArbiterWhite;
	
	this.gameArbitersPerPlayer = [];
	this.gameArbitersPerPlayer[1] = this.gameArbiterBlack;
	this.gameArbitersPerPlayer[2] = this.gameArbiterWhite;
	
	this.moveTimeMsPerPlayer = [];
	this.moveTimeMsPerPlayer[1] = 0;
	this.moveTimeMsPerPlayer[2] = 0;	
	
	this.moveCountPerPlayer = [];
	this.moveCountPerPlayer[1] = 0;
	this.moveCountPerPlayer[2] = 0;
};

/**
 * @public
 * @param debugToConsole
 */
REVERSI.MinimaxVsAlphaBetaRunner.prototype.run = function(debugPlayer1, debugPlayer2) {
	var currentGameState = this.startingGameState;
	
	var lastTurnLeader = MINIMAX.PLAYER_2;
	while(!currentGameState.isGameEnded()) {
		currentGameState = this.turnLeaderMove(currentGameState);
		if(currentGameState.getLastMove().player === lastTurnLeader) {
			console.log("!! " + lastTurnLeader.toString() + " moved multiple times in a row !!");
		}
		lastTurnLeader = currentGameState.getLastMove().player;
		if(debugPlayer1 && lastTurnLeader.playerNumber == 1) {
			console.log(currentGameState.toString());
		} else if(debugPlayer2 && lastTurnLeader.playerNumber == 2) {
			console.log(currentGameState.toString());
		}
		this.turnSlaveSynchronize(currentGameState);
	}
	
	var gameOutcome = this.gameArbiterWhite.getGameOutcome(currentGameState);
	
	return new REVERSI.MinimaxVsAlphaBetaRunnerResult(
			gameOutcome,
			this.moveTimeMsPerPlayer,
			this.moveCountPerPlayer);	
	
};

/**
 * @private
 * @param {REVERSI.ReversiGameState} gameState
 * @returns {REVERSI.ReversiGameState}
 */
REVERSI.MinimaxVsAlphaBetaRunner.prototype.turnLeaderMove = function(gameState) {
	var playerNumber = gameState.playerToMove.playerNumber;
	var leaderArbiter = this.gameArbitersPerPlayer[playerNumber];
	var st = new Date().getTime();
	var nextGameState =  leaderArbiter.advanceGame();
	var et = new Date().getTime();
	this.moveTimeMsPerPlayer[playerNumber] = this.moveTimeMsPerPlayer[playerNumber] + (et - st);
	this.moveCountPerPlayer[playerNumber] = this.moveCountPerPlayer[playerNumber] + 1;
	return nextGameState;
};

/**
 * @private
 * @param {REVERSI.ReversiGameState} gameState
 */
REVERSI.MinimaxVsAlphaBetaRunner.prototype.turnSlaveSynchronize = function(gameState) {
	var playerNumber = gameState.getLastMove().player.opponent.playerNumber;
	var slaveArbiter = this.gameArbitersPerPlayer[playerNumber];
	var st = new Date().getTime();
	slaveArbiter.advanceGame(gameState.getLastMove().position);
	var et = new Date().getTime();
	this.moveTimeMsPerPlayer[playerNumber] = this.moveTimeMsPerPlayer[playerNumber] + (et - st); 
	this.moveCountPerPlayer[playerNumber] = this.moveCountPerPlayer[playerNumber] + 1;
};

/**
 * @public
 * @constructor
 * @param {MINIMAX.GameOutcome} gameOutcome
 * @returns {REVERSI.MinimaxVsAlphaBetaRunnerResult}
 */
REVERSI.MinimaxVsAlphaBetaRunnerResult = function(gameOutcome, moveTimeMsPerPlayer, moveCountPerPlayer) {	
	this.gameOutcome = gameOutcome;
	this.moveTimeMsPerPlayer = moveTimeMsPerPlayer;
	this.moveCountPerPlayer = moveCountPerPlayer;
};

/**
 * @public
 * @returns {String}
 */
REVERSI.MinimaxVsAlphaBetaRunnerResult.prototype.toString = function() {
	var str = "";
	str += "Game outcome: " + this.gameOutcome.toString() +" \n"
	str += "Player 1 time/moves = " + this.moveTimeMsPerPlayer[1] + "/" + this.moveCountPerPlayer[1] + "=" + (this.moveTimeMsPerPlayer[1] / this.moveCountPerPlayer[1]) + " ms per move" + "\n";
	str += "Player 2 time/moves = " + this.moveTimeMsPerPlayer[2] + "/" + this.moveCountPerPlayer[2] + "=" + (this.moveTimeMsPerPlayer[2] / this.moveCountPerPlayer[2]) + " ms per move" + "\n";
	return str;
};
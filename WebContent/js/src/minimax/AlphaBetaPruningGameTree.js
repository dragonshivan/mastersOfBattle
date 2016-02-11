var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @public
 * @constructor
 * @public {MINIMAX.Evaluator} evaluator
 * @returns {MINIMAX.AlphaBetaPruningGameTree}
 */
MINIMAX.AlphaBetaPruningGameTree = function(evaluator) {
	this.evaluator = evaluator;
	
	this.nodesStack = new Array();
	//maximizing player's:
	this.alpha = Number.NEGATIVE_INFINITY;
	//minimizing player's:
	this.beta = Number.POSITIVE_INFINITY;
	
	this.nodesCount = 0;
	this.nodesGenerationMs = 0;
	this.nodesScoreMs = 0;
	this.transitionsCount = 0;
};

/**
 * @public
 * @param {MINIMAX.GameState} gameState
 * @returns {MINIMAX.AlphaBetaPruningGameTreeNode}
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.grow = function(gameState) {	
	var rootNode = new MINIMAX.AlphaBetaPruningGameTreeNode(gameState, 0);
	this.nodesCount++;
	this.generateAndScoreNodes(rootNode);
	return rootNode;
};

/**
 * @public
 * @returns {String}
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.toString = function() {
	return this.nodesCount + " nodes (" + this.transitionsCount + " transitions), " +
		"depth: " + this.intermediateNodesByTreeDepth.length + ", " +
		"generation time: " + this.nodesGenerationMs +" ms., " +
		"scoring time: " + this.nodesScoreMs + " ms., " +
		"total time: " + (this.nodesGenerationMs + this.nodesScoreMs) + " ms.";
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} rootNode
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.generateAndScoreNodes = function(rootNode) {
	var st = new Date().getTime();
	
	maxDepth = this.evaluator.getEvaluationHorizon(rootNode.gameState) - 1;
	var currentNode = rootNode;
	this.pushToStack(currentNode);
	console.log("+++ pushed " + currentNode.gameState.getLastMove().toString());
	while(this.nodesStack.length > 0) {
		if(currentNode.depth == maxDepth || currentNode.gameState.isGameEnded()) {
			this.scoreNode(currentNode);
			currentNode = this.nodesStack.pop();
//			console.log("+++ popped " + currentNode.gameState.getLastMove().toString());
		} else {
			this.generateImmediateChildren(currentNode);
			for(var i = 0; i < currentNode.childNodes.length; i++) {
				this.pushToStack(currentNode.childNodes[i]);
				console.log("+++ pushed " + currentNode.childNodes[i].gameState.getLastMove().toString());
			}
		}
	}
	
	this.nodesGenerationMs = new Date().getTime() - st;
};

/**
 * @private
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.generateImmediateChildren = function(node) {
	var childGameStates = this.evaluator.getNextGameStates(node.gameState);
	for(var i = 0; i < childGameStates.length; i++) {
		var childGameState = childGameStates[i];
		var childNode = new MINIMAX.AlphaBetaPruningGameTreeNode(childGameState, node.depth + 1);
		this.nodesCount++;
		node.addChildNode(childNode);
	}
};



/**
 * @private
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.scoreNode = function(node) {
	if(node.childNodes.length == 0) {
		var score = this.evaluator.evaluate(node.gameState);
		node.score = score;
	} else {
		this.calculateMinimaxScore(node);
	}
	this.updateAlphaBeta(node);
};

/**
 * @private
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.calculateMinimaxScore = function(node) {
	var score;
	if(node.gameState.getPlayerToMove() === this.evaluator.playerToWin) {
		//maximize score:
		score = Number.NEGATIVE_INFINITY;
		for(var i = 0; i < node.childNodes.length; i++) {
			var childNode = node.childNodes[i];
			if(childNode.score > score) {
				score = childNode.score;
			}
		}
	} else {
		//minimize score:
		score = Number.POSITIVE_INFINITY;
		for(var i = 0; i < node.childNodes.length; i++) {
			var childNode = node.childNodes[i];
			if(childNode.score < score) {
				score = childNode.score;
			}
		}
	}
	node.score = score;
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.updateAlphaBeta = function(node) {
	var gameState = node.gameState;
	var score = node.score;
	if(node.gameState.getPlayerToMove() === this.evaluator.playerToWin) {
		this.alpha = this.alpha > score ? this.alpha : score;
	} else {
		this.beta = this.beta < score ? this.beta : score;
	}
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.pushToStack = function(node) {
	this.nodesStack.push(node);
};

/**
 * @public
 * @constructor
 * @param {MINIMAX.GameState} gameState
 * @returns {MINIMAX.AlphaBetaPruningGameTreeNode}
 */
MINIMAX.AlphaBetaPruningGameTreeNode = function(gameState, depth) {
	this.gameState = gameState;
	this.depth = depth;
	this.score;
	
	/**
	 * @type MINIMAX.AlphaBetaPruningGameTreeNode[] 
	 */
	this.childNodes = [];
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} childNode
 */
MINIMAX.AlphaBetaPruningGameTreeNode.prototype.addChildNode = function(childNode) {
	this.childNodes.push(childNode);
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 */
MINIMAX.AlphaBetaPruningGameTreeNode.prototype.equals = function(node) {
	return this.gameState.equals(node.gameState);
};
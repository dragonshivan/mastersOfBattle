var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @public
 * @constructor
 * @public {MINIMAX.LazyEvaluator} evaluator
 * @returns {MINIMAX.AlphaBetaPruningGameTree}
 */
MINIMAX.AlphaBetaPruningGameTree = function(evaluator) {
	this.evaluator = evaluator;
	
	this.stack = new Array();
	
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
	var rootNode = new MINIMAX.AlphaBetaPruningGameTreeNode(gameState, 0, this.evaluator.getNextGameStatesIterator(gameState));
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
	
	//TODO
	
	this.nodesGenerationMs = new Date().getTime() - st;
};

/**
 * @private
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 * @returns {Number}
 */
MINIMAX.AlphaBetaPruningGameTree.prototype.evaluate = function(node) {
	return this.evaluator.evaluate(node.gameState);
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
MINIMAX.AlphaBetaPruningGameTreeNode = function(gameState, depth, nextGameStateIterator) {
	this.gameState = gameState;
	this.depth = depth;
	this.score;
	
	/**
	 * @type MINIMAX.NextGameStateIterator 
	 */
	this.nextGameStateIterator = nextGameStateIterator ;
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

/**
 * @private
 * @constructor
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 * @param {Number} alpha
 * @param {Number} beta
 * @param {Boolean} maximizingPlayer
 * @returns {MINIMAX.StackArg}
 */
MINIMAX.StackArg = function(node, alpha, beta, maximizingPlayer) {
	this.node = node;
	this.alpha = alpha;
	this.beta = beta;
	this.maximizingPlayer = maximizingPlayer;
	this.v = null;
};
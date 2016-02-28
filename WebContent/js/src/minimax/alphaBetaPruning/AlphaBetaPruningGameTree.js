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
	this.alphaBeta(rootNode);
	//TODO 
	this.nodesGenerationMs = new Date().getTime() - st;
};


MINIMAX.AlphaBetaPruningGameTree.prototype.alphaBeta = function(rootNode) {
	//TODO
	this.stack.push(new MINIMAX.StackArg(rootNode, 4, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true));
	while(this.stack.length > 0) {
		var arg = this.stack[this.stack.length - 1];
		if(arg.depth == 0 || arg.node.gameEnded) {
			var v = this.evaluate(arg.node);
			arg.node.score = v;
			arg = pop(v);				
			continue;
		}
		
		if(arg.node.hasNextChildNode()) {
			Integer v = scoreIntermediaryNode(arg);
			if(v != null) {
				arg.node.score = v;
				dumpNode(arg);
				if(!(arg.alpha <= arg.beta)) {
					arg = pop(v);
					continue;
				}
			}
			
			arg  = new StackArg(arg.node.nextChild(), arg.depth - 1, arg.alpha, arg.beta, isMaximizing(arg.node));
			push(arg);
		} else {
			Integer v = scoreIntermediaryNode(arg);
			arg.node.score = v;
			dumpNode(arg);
			arg = pop(v);				
		}
	}
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
	 * @type MINIMAX.GameStateIterator 
	 */
	this.gameStateIterator = null;
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
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} childNode
 */
MINIMAX.AlphaBetaPruningGameTreeNode.prototype.addChildNode = function(childNode) {
	this.childNodes.push(childNode);
};

/**
 * @private
 * @constructor
 * @param {MINIMAX.AlphaBetaPruningGameTreeNode} node
 * @param {Number} depth
 * @param {Number} alpha
 * @param {Number} beta
 * @param {Boolean} maximizingPlayer
 * @returns {MINIMAX.StackArg}
 */
MINIMAX.StackArg = function(node, depth, alpha, beta, maximizingPlayer) {
	this.node = node;
	this.depth = depth;
	this.alpha = alpha;
	this.beta = beta;
	this.maximizingPlayer = maximizingPlayer;
	this.v = null;
};
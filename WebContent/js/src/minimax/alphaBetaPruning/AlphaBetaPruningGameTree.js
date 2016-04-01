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
	var rootNode = new MINIMAX.AlphaBetaPruningGameTreeNode(gameState, this.evaluator.getEvaluationDepth(gameState), this.evaluator);
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
	this.nodesGenerationMs = new Date().getTime() - st;
};


MINIMAX.AlphaBetaPruningGameTree.prototype.alphaBeta = function(rootNode) {
	this.push(new MINIMAX.StackArg(rootNode, rootNode.depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true));
	while(this.stack.length != 0) {
		var arg = this.peek();
		if(arg.node.depth == 0 || arg.node.gameEnded) {
			//evaluate terminal node:
			var v = this.evaluator.evaluate(arg.node.gameState);
			arg.node.score = v;
			arg = pop(v);				
			continue;
		}
		
		if(arg.node.hasNextChild()) {
			//score intermediary node:
			var v = this.evaluator.evaluate(arg.node.gameState);			
			arg.node.score = v;
			if(!(arg.alpha <= arg.beta)) {
				arg = this.pop(v);
				continue;
			}			
			this.nodesCount++;
			arg  = new MINIMAX.StackArg(arg.node.getNextChildNode(), arg.alpha, arg.beta, this.isMaximizing(arg.node));
			this.push(arg);
		} else {
			//score intermediary node
			var v = this.evaluator.evaluate(arg.node);
			arg.node.score = v;
			arg = this.pop(v);				
		}
	}
};

/**
 * @private
 */ 
MINIMAX.AlphaBetaPruningGameTree.prototype.pop = function(returnValue) {
	var arg = this.stack.pop();
	if(this.stack.length != 0) {
		this.peek().v = returnValue;
	}
	return arg;
};

/**
 * @private
 */ 
MINIMAX.AlphaBetaPruningGameTree.prototype.push = function(stackArg) {
	this.stack.push(stackArg);
};

/**
 * @private
 */ 
MINIMAX.AlphaBetaPruningGameTree.prototype.peek = function() {
	if(this.stack.length != 0) {
		return this.stack[this.stack.length - 1];
	}
	return null;
};

/**
 * @private
 */ 
MINIMAX.AlphaBetaPruningGameTree.prototype.isMaximizing = function(node) {
	return node.gameState.playerToMove === this.evaluator.playerToWin;
};

/**
 * @public
 * @constructor
 * @param {MINIMAX.GameState} gameState
 * @param {Number} depth Root node has maximum desired depth. Its immediate children have depth - 1 and so on. We stop when current node's depth is 0.
 * @param {MINIMAX.LazyEvaluator} lazyEvaluator
 * @returns {MINIMAX.AlphaBetaPruningGameTreeNode}
 */
MINIMAX.AlphaBetaPruningGameTreeNode = function(gameState, depth, lazyEvaluator) {
	this.gameState = gameState;
	this.depth = depth;
		
	this.score;
	
	this.gameEnded = this.gameState.isGameEnded();
	
	if(!gameState.isGameEnded()) {
		this.lazyEvaluator = lazyEvaluator;
		this.childNodes = new Array();
		this.nextGameStateIterator = this.lazyEvaluator.getNextGameStateIterator(this.gameState);
	}		
};

/**
 * @private
 */
MINIMAX.AlphaBetaPruningGameTreeNode.prototype.getNextChildNode = function() {
	var nextChildNode = null;
	if(this.nextGameStateIterator.hasNext()) {
		var nextGameState = this.nextGameStateIterator.next();
		nextChildNode = new MINIMAX.AlphaBetaPruningGameTreeNode(nextGameState, this.depth - 1, 
				this.lazyEvaluator);
		this.childNodes.push(childNode);
	}
	return nextChildNode;
};

/**
 * @private
 */
MINIMAX.AlphaBetaPruningGameTreeNode.prototype.hasNextChild = function() {
	return !this.gameEnded && this.nextGameStateIterator.hasNext();
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
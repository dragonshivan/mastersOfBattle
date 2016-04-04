GameTreeTestCase = TestCase("GameTreeTestCase");

GameTreeTestCase.prototype.testGenerateNodes = function() {
	var evaluator = new REVERSI.ReversiEvaluator(MINIMAX.PLAYER_1);
	var gameTree = new MINIMAX.GameTree(evaluator);
	var gameState0 = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	
	var rootNode = gameTree.grow(gameState0);
	
	assertEquals(evaluator.getEvaluationHorizon(gameState0), gameTree.intermediateNodesByTreeDepth.length);
	assertEquals(4, rootNode.childNodes.length);
	assertEquals(4, gameTree.intermediateNodesByTreeDepth[1].getList().length);
	assertEquals(12, gameTree.intermediateNodesByTreeDepth[2].getList().length);
	for(var i = 0; i < rootNode.childNodes.length; i++) {
		assertSame(MINIMAX.PLAYER_2, rootNode.childNodes[i].gameState.getPlayerToMove());
		assertFalse(MINIMAX.PLAYER_2, rootNode.childNodes[i].gameState.isGameEnded());			
	}
};

/*
GameTreeTest.js:42 after 4 moves (4 + 4 tokens on board):
GameTreeTest.js:46 >>> 5380 nodes (6060 transitions), lastEvaluationHorizon: 5, generation time: 93 ms., scoring time: 4 ms., total time: 97 ms.root score: 6
GameTreeTest.js:47 
GameTreeTest.js:49 after 8 moves (8 + 4 tokens on board):
GameTreeTest.js:53 >>> 3591 nodes (3897 transitions), lastEvaluationHorizon: 5, generation time: 75 ms., scoring time: 2 ms., total time: 77 ms.root score: -15
GameTreeTest.js:54 
GameTreeTest.js:56 after 12 moves (12 + 4 tokens on board):
GameTreeTest.js:60 >>> 7831 nodes (8488 transitions), lastEvaluationHorizon: 5, generation time: 105 ms., scoring time: 6 ms., total time: 111 ms.root score: -30
GameTreeTest.js:61 
GameTreeTest.js:63 after 16 moves (16 + 4 tokens on board):
GameTreeTest.js:67 >>> 2287 nodes (2499 transitions), lastEvaluationHorizon: 5, generation time: 32 ms., scoring time: 1 ms., total time: 33 ms.root score: -39
 * 
 */
GameTreeTestCase.prototype.testGrowBenchmark = function() {
	var evaluator = new REVERSI.ReversiEvaluator(MINIMAX.PLAYER_1);
	evaluator.addEvaluationCriterion(REVERSI.EVALUATION_CRITERIA_DICTIONARY["EDGE_TOKEN_COUNTER"]);
	var gameTree = new MINIMAX.GameTree(evaluator);
	var gameState0 = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	
	var rootNode = gameTree.grow(gameState0);
	
	console.log("after 4 moves (4 + 4 tokens on board):");
	var childNode1 = rootNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.GameTree(evaluator);
	childNode1 = gameTree.grow(childNode1.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 8 moves (8 + 4 tokens on board):");
	var childNode2 = childNode1.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.GameTree(evaluator);
	childNode2 = gameTree.grow(childNode2.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 12 moves (12 + 4 tokens on board):");
	var childNode3 = childNode2.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.GameTree(evaluator);
	childNode3 = gameTree.grow(childNode3.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 16 moves (16 + 4 tokens on board):");
	var childNode4 = childNode3.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.GameTree(evaluator);
	childNode4 = gameTree.grow(childNode4.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
};
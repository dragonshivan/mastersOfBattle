ReversiAlphaBetaPruningGameTreeTestCase = TestCase("ReversiAlphaBetaPruningGameTreeTestCase");

ReversiAlphaBetaPruningGameTreeTestCase.prototype.testCutOff = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	REVERSI.REVERSI_TEST_MOCKER.mockReversiEvaluatorGetEvaluationHorizon();
	REVERSI.REVERSI_TEST_MOCKER.mockReversiLazyEvaluatorGetEvaluationDepth();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_2);
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 0, [new REVERSI.Position(3, 4)]));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 2, 0, [new REVERSI.Position(4, 3)]));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 0, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 3, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 4, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 1, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 2, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 2, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 3, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 4, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 2, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 3, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 4, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 5, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 2, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 3, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 4, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 6, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 0, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 1, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 2, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 3, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 4, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 5, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 6, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 7, []));
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();
	
	var reversiEvaluatorPlayer2ShouldWin = new REVERSI.ReversiEvaluator(MINIMAX.PLAYER_2);
	reversiEvaluatorPlayer2ShouldWin.addEvaluationCriterion(REVERSI.EVALUATION_CRITERIA_DICTIONARY["EDGE_TOKEN_COUNTER"]);
	
	var gameTree = new MINIMAX.GameTree(reversiEvaluatorPlayer2ShouldWin);
	var rootNode = gameTree.grow(gameState);

	var reversiLazyEvaluatorPlayer2ShouldWin = new REVERSI.ReversiLazyEvaluator(MINIMAX.PLAYER_2);
	reversiLazyEvaluatorPlayer2ShouldWin.addEvaluationCriterion(REVERSI.EVALUATION_CRITERIA_DICTIONARY["EDGE_TOKEN_COUNTER"]);
	
	var alphaBetaPruningGameTree = new MINIMAX.AlphaBetaPruningGameTree(reversiLazyEvaluatorPlayer2ShouldWin);
	var alphaBetaPruningGameTreeRootNode = alphaBetaPruningGameTree.grow(gameState);
	
//	var treePrinter = new MINIMAX.TreePrinter();
//	treePrinter.print(rootNode);
//	console.log("|||||||||||");
//	treePrinter.print(alphaBetaPruningGameTreeRootNode);
	
	assertTrue(rootNode.equals(alphaBetaPruningGameTreeRootNode));
	assertTrue(gameTree.nodesCount >= alphaBetaPruningGameTree.nodesCount);	
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiEvaluatorGetEvaluationHorizon();
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiLazyEvaluatorGetEvaluationDepth();
};

/*
 * 
after 4 moves (4 + 4 tokens on board):
ReversiAlphaBetaPruningGameTreeTest.js:110 >>> 557 nodes total time: 9 ms.lastEvaluationDepth: 5, root score: 6
ReversiAlphaBetaPruningGameTreeTest.js:111 
ReversiAlphaBetaPruningGameTreeTest.js:113 after 8 moves (8 + 4 tokens on board):
ReversiAlphaBetaPruningGameTreeTest.js:117 >>> 1727 nodes total time: 31 ms.lastEvaluationDepth: 5, root score: -15
ReversiAlphaBetaPruningGameTreeTest.js:118 
ReversiAlphaBetaPruningGameTreeTest.js:120 after 12 moves (12 + 4 tokens on board):
ReversiAlphaBetaPruningGameTreeTest.js:124 >>> 840 nodes total time: 12 ms.lastEvaluationDepth: 5, root score: -30
ReversiAlphaBetaPruningGameTreeTest.js:125 
ReversiAlphaBetaPruningGameTreeTest.js:127 after 16 moves (16 + 4 tokens on board):
ReversiAlphaBetaPruningGameTreeTest.js:131 >>> 669 nodes total time: 10 ms.lastEvaluationDepth: 5, root score: -39
ReversiAlphaBetaPruningGameTreeTest.js:132 
 */
ReversiAlphaBetaPruningGameTreeTestCase.prototype.testGrowBenchmark = function() {
	var evaluator = new REVERSI.ReversiLazyEvaluator(MINIMAX.PLAYER_1);
	evaluator.addEvaluationCriterion(REVERSI.EVALUATION_CRITERIA_DICTIONARY["EDGE_TOKEN_COUNTER"]);
	var gameTree = new MINIMAX.AlphaBetaPruningGameTree(evaluator);
	var gameState0 = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	
	var rootNode = gameTree.grow(gameState0);
	
	console.log("after 4 moves (4 + 4 tokens on board):");
	var childNode1 = rootNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.AlphaBetaPruningGameTree(evaluator);
	childNode1 = gameTree.grow(childNode1.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 8 moves (8 + 4 tokens on board):");
	var childNode2 = childNode1.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.AlphaBetaPruningGameTree(evaluator);
	childNode2 = gameTree.grow(childNode2.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 12 moves (12 + 4 tokens on board):");
	var childNode3 = childNode2.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.AlphaBetaPruningGameTree(evaluator);
	childNode3 = gameTree.grow(childNode3.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
	
	console.log("after 16 moves (16 + 4 tokens on board):");
	var childNode4 = childNode3.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	gameTree = new MINIMAX.AlphaBetaPruningGameTree(evaluator);
	childNode4 = gameTree.grow(childNode4.gameState);
	console.log(">>> " + gameTree.toString());
	console.log("");
};
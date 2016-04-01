ReversiNextGameStateIteratorTestCase = TestCase("ReversiNextGameStateIteratorTestCase");

ReversiNextGameStateIteratorTestCase.prototype.testNextOnNewGame = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	var reversiNextGameStateIterator = new REVERSI.ReversiNextGameStateIterator(gameState);
	
	assertTrue(reversiNextGameStateIterator.hasNext());
	var nextGameState = reversiNextGameStateIterator.next();
	
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();
}
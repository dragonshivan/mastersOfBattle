ReversiNextGameStateIteratorTestCase = TestCase("ReversiNextGameStateIteratorTestCase");

ReversiNextGameStateIteratorTestCase.prototype.testNextOnNewGame = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	var reversiNextGameStateIterator = new REVERSI.ReversiNextGameStateIterator(gameState);
	
	assertTrue(reversiNextGameStateIterator.hasNext());
	var nextGameState = reversiNextGameStateIterator.next();
	var lastMove = nextGameState.getLastMove();
	assertEquals(3, lastMove.position.x);
	assertEquals(2, lastMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, lastMove.player);
	
	assertTrue(reversiNextGameStateIterator.hasNext());
	nextGameState = reversiNextGameStateIterator.next();
	lastMove = nextGameState.getLastMove();
	assertEquals(2, lastMove.position.x);
	assertEquals(3, lastMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, lastMove.player);
	
	assertTrue(reversiNextGameStateIterator.hasNext());
	nextGameState = reversiNextGameStateIterator.next();
	lastMove = nextGameState.getLastMove();
	assertEquals(5, lastMove.position.x);
	assertEquals(4, lastMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, lastMove.player);
	
	assertTrue(reversiNextGameStateIterator.hasNext());
	nextGameState = reversiNextGameStateIterator.next();
	lastMove = nextGameState.getLastMove();
	assertEquals(4, lastMove.position.x);
	assertEquals(5, lastMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, lastMove.player);
	
	assertFalse(reversiNextGameStateIterator.hasNext());	
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();
}
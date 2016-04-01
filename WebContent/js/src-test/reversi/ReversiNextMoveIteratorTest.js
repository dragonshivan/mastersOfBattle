ReversiNextMoveIteratorTestCase = TestCase("ReversiNextMoveIteratorTestCase");

ReversiNextMoveIteratorTestCase.prototype.testNextOnNewGame = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	var reversiNextMoveIterator = new REVERSI.ReversiNextMoveIterator(gameState);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	var nextMove = reversiNextMoveIterator.next();
	assertEquals(3, nextMove.position.x);
	assertEquals(2, nextMove.position.y);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(2, nextMove.position.x);
	assertEquals(3, nextMove.position.y);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(5, nextMove.position.x);
	assertEquals(4, nextMove.position.y);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(4, nextMove.position.x);
	assertEquals(5, nextMove.position.y);
	
	assertFalse(reversiNextMoveIterator.hasNext());	
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();	
}

ReversiNextMoveIteratorTestCase.prototype.testNextLimitedByGameEnding = function() {
	//TODO
}

ReversiNextMoveIteratorTestCase.prototype.testNextMiddleOfGame = function() {
	//TODO
}
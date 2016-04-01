ReversiNextMoveIteratorTestCase = TestCase("ReversiNextMoveIteratorTestCase");

ReversiNextMoveIteratorTestCase.prototype.testNextOnNewGame = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	var reversiNextMoveIterator = new REVERSI.ReversiNextMoveIterator(gameState);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	var nextMove = reversiNextMoveIterator.next();
	assertEquals(3, nextMove.position.x);
	assertEquals(2, nextMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, nextMove.player);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(2, nextMove.position.x);
	assertEquals(3, nextMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, nextMove.player);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(5, nextMove.position.x);
	assertEquals(4, nextMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, nextMove.player);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	nextMove = reversiNextMoveIterator.next();
	assertEquals(4, nextMove.position.x);
	assertEquals(5, nextMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_BLACK.player, nextMove.player);
	
	assertFalse(reversiNextMoveIterator.hasNext());	
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();	
}

ReversiNextMoveIteratorTestCase.prototype.testNextLimitedByGameEnding = function() {
	REVERSI.REVERSI_TEST_MOCKER.mockReversiGameStateMove();
	
	var gameState = new REVERSI.ReversiGameState(MINIMAX.PLAYER_1);
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 0, [new REVERSI.Position(3, 3)]));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 0, [new REVERSI.Position(4, 4)]));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 0, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 0, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 1, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 1, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 2, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 2, []));

	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 3, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 3, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 4, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 4, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 5, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 5, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 5, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 5, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 5, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 6, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 6, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 6, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_WHITE.player, 7, 6, []));
	
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 0, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 1, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 2, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 3, 7, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 4, 7, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 5, 7, []));
//	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 6, 7, []));
	gameState.move(new REVERSI.ReversiMove(REVERSI.TOKEN_TYPE_BLACK.player, 7, 7, []));
	
	REVERSI.REVERSI_TEST_MOCKER.unmockReversiGameStateMove();
	
	gameState.playerToMove = MINIMAX.PLAYER_2;
	
	var reversiNextMoveIterator = new REVERSI.ReversiNextMoveIterator(gameState);
	
	assertTrue(reversiNextMoveIterator.hasNext());
	var nextMove = reversiNextMoveIterator.next();
	assertEquals(5, nextMove.position.x);
	assertEquals(6, nextMove.position.y);
	assertSame(REVERSI.TOKEN_TYPE_WHITE.player, nextMove.player);
	assertFalse(reversiNextMoveIterator.hasNext());
	
	console.log(gameState.toString());	
}
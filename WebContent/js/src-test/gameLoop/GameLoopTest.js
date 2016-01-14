GameLoopTestCase = TestCase("GameLoopTestCase");

GameLoopTestCase.prototype.testGameEntityZIndexSort = function() {
	var gameEntity1 = new GAME_LOOP.GameEntity(0, 0, 10, 10, 2);
	var gameEntity2 = new GAME_LOOP.GameEntity(0, 0, 10, 10, 1);	
	var gameEntityZIndexSort = GAME_LOOP.GameLoop.prototype.gameEntityZIndexSort;
	var sortResult = gameEntityZIndexSort(gameEntity1, gameEntity2);
	assertTrue(sortResult > 0);
	
	gameEntity1 = new GAME_LOOP.GameEntity(0, 0, 10, 10, 1);
	gameEntity2 = new GAME_LOOP.GameEntity(0, 0, 10, 10, 2);	
	sortResult = gameEntityZIndexSort(gameEntity1, gameEntity2);
	assertTrue(sortResult < 0);
	
	gameEntity1 = new GAME_LOOP.GameEntity(0, 4, 10, 10, 1);
	gameEntity2 = new GAME_LOOP.GameEntity(0, 2, 10, 10, 1);	
	sortResult = gameEntityZIndexSort(gameEntity1, gameEntity2);
	assertTrue(sortResult > 0);
	
	gameEntity1 = new GAME_LOOP.GameEntity(0, 2, 10, 10, 1);
	gameEntity2 = new GAME_LOOP.GameEntity(0, 4, 10, 10, 1);	
	sortResult = gameEntityZIndexSort(gameEntity1, gameEntity2);
	assertTrue(sortResult < 0);
};
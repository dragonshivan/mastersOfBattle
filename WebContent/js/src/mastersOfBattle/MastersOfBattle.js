var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.MastersOfBattle = function() {
	
};


/**
 * @public
 */
MASTERS_OF_BATTLE.MastersOfBattle.prototype.startGame = function() {
	/* - create game state
	 * 		- create MastersOfBattleGameState
	 * 			- create units states
	 * 			- create battle field state
	 * 				- create battle field cells states
	 * - create game arbiter
	 * 		- create player controller for each player
	 * - create game loop
	 * - start game loop
	 */
	this.initConstants();
	
	var battleFieldEntity = new MASTERS_OF_BATTLE.BattleFieldGameEntity();
	
	var gameEntities = [];
	var gameEntitiesIdx = 0;
	gameEntities[gameEntitiesIdx++] = battleFieldEntity;
	
	gameEntities[gameEntitiesIdx++] = MASTERS_OF_BATTLE.Constants.Unit.GAME_ENTITY_FACTORY.createUnit("humanSwordsman", MINIMAX.PLAYER_1, 1, 2, 22);
	gameEntities[gameEntitiesIdx++] = MASTERS_OF_BATTLE.Constants.Unit.GAME_ENTITY_FACTORY.createUnit("humanArcher", MINIMAX.PLAYER_2, 10, 2, 22);
	
	var inputEventQueue = new GAME_LOOP.Queue(10);
	new GAME_LOOP.CanvasMouseListener(inputEventQueue);
	var gameLoop = new GAME_LOOP.GameLoop(gameEntities, inputEventQueue, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE,
			true);
	gameLoop.start();
};

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattle.prototype.initConstants = function() {
	initMastersOfBattleRuntimeConstants();
	initMastersOfBattleRuntimeUnitConstants();
};


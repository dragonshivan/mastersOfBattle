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
	
	var unitGameEntities = this.initUnitGameEntities([
	                                                  new MASTERS_OF_BATTLE.UnitGameStateSummary("humanSwordsman", MINIMAX.PLAYER_1, 1, 2, 22),
	                                                  new MASTERS_OF_BATTLE.UnitGameStateSummary("humanArcher", MINIMAX.PLAYER_2, 10, 2, 22)]);
	MASTERS_OF_BATTLE.Constants.Utils.ARRAY_UTILS.appendArray(gameEntities, unitGameEntities);
	
	//add game arbiter entity, and tell it to init game
	
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

/**
 * @private
 */
MASTERS_OF_BATTLE.MastersOfBattle.prototype.initUnitGameEntities = function(unitGameStateSummaries) {
	var unitGameEntities = new Array();
	for(var i = 0; i < unitGameStateSummaries.length; i++) {
		var unitGameStateSummary = unitGameStateSummaries[i];
		unitGameEntities[i] = MASTERS_OF_BATTLE.Constants.Unit.GAME_ENTITY_FACTORY.createUnit(
				unitGameStateSummary.unitId,
				unitGameStateSummary.owningPlayer,
				unitGameStateSummary.cellX,
				unitGameStateSummary.cellY,
				unitGameStateSummary.membersCount);
	}
	return unitGameEntities;
};


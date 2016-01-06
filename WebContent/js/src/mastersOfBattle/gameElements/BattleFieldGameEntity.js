var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.BattleFieldGameEntity = function() {
	GAME_LOOP.GameEntity.call(this, 0, 0, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			-1);
};

MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype.constructor = MASTERS_OF_BATTLE.BattleFieldGameEntity;

/**
 * @public
 */
MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype.updateState =  function() {};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype.updateGraphics =  function(context) {
	var currentColor = "blue";
	for(var x = 0; x < MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS; x++) {
		for(var y = 0; y < MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS; y++) {
			context.fillStyle = currentColor;
			context.fillRect(x * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
					y * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
					MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
					MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE);
			if(currentColor === "blue") {
				currentColor = "red";
			} else {
				currentColor = "blue";
			}
		}
		if(currentColor === "blue") {
			currentColor = "red";
		} else {
			currentColor = "blue";
		}
	}
};

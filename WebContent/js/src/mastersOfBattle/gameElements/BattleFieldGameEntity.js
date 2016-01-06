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
MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype.updateState = function() {};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.BattleFieldGameEntity.prototype.updateGraphics = function(context) {
	context.fillStyle = "#00cc00";
	context.fillRect(this.x, this.y, this.width, this.height);
};
